// Diag'SAV : administration des techniciens (réservée aux administrateurs actifs).
// Actions (POST JSON { action, ... }) :
//   liste                                  -> techniciens + leurs appareils
//   creer        { email, nom, mot_de_passe, admin? }
//   modifier     { email, nom?, actif?, admin? }
//   mot_de_passe { email, mot_de_passe }
//   liberer      { email, device_id }
// Le compte appelant est vérifié avec son propre jeton ; la clé de service ne quitte jamais le serveur.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const rep = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });
// emails stockés en minuscules (contrainte en base) : comparaison exacte, aucun joker possible
const mailOk = (e: unknown) => typeof e === "string" && /^[a-z0-9._%+'-]+@[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(e) && e.length <= 120;
const mdpOk = (p: unknown) => typeof p === "string" && p.length >= 8 && p.length <= 72;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return rep(405, { erreur: "Méthode non autorisée" });

  const url = Deno.env.get("SUPABASE_URL")!;
  const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const db = createClient(url, service, { auth: { persistSession: false, autoRefreshToken: false } });

  // 1. qui appelle ?
  const jeton = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
  if (!jeton) return rep(401, { erreur: "Non connecté" });
  const { data: u, error: eu } = await db.auth.getUser(jeton);
  if (eu || !u?.user?.email) return rep(401, { erreur: "Session invalide" });
  const moi = u.user.email.toLowerCase();
  const { data: ad } = await db.from("techniciens").select("actif, admin").eq("email", moi).maybeSingle();
  if (!ad?.actif || !ad?.admin) return rep(403, { erreur: "Réservé à l'administrateur" });

  let b: Record<string, unknown> = {};
  try { b = await req.json(); } catch { return rep(400, { erreur: "Requête illisible" }); }
  const email = typeof b.email === "string" ? b.email.trim().toLowerCase() : "";

  // recherche d'un compte d'authentification par email (équipe réduite : une page suffit)
  const compte = async (e: string) => {
    for (let page = 1; page <= 10; page++) {
      const { data, error } = await db.auth.admin.listUsers({ page, perPage: 200 });
      if (error) throw error;
      const f = data.users.find((x) => (x.email || "").toLowerCase() === e);
      if (f) return f;
      if (data.users.length < 200) return null;
    }
    return null;
  };

  try {
    switch (b.action) {
      case "liste": {
        const { data: t, error } = await db.from("techniciens").select("email, nom, actif, admin, cree_le").order("nom", { ascending: true });
        if (error) throw error;
        const { data: ap } = await db.from("appareils").select("email, device_id, nom, vu_le").order("vu_le", { ascending: false });
        // dernière consultation de chacun (une requête par technicien : équipe réduite, pas de limite de lignes)
        const der: Record<string, string> = {};
        await Promise.all((t || []).map(async (x) => {
          const { data: v } = await db.from("consultations").select("vu_le").eq("email", x.email).order("vu_le", { ascending: false }).limit(1);
          if (v && v[0]) der[x.email] = v[0].vu_le;
        }));
        return rep(200, {
          moi,
          techniciens: (t || []).map((x) => ({
            ...x,
            appareils: (ap || []).filter((a) => (a.email || "").toLowerCase() === x.email.toLowerCase()).map((a) => ({ id: a.device_id, nom: a.nom, vu: a.vu_le })),
            derniere: der[x.email] || null,
          })),
        });
      }
      case "creer": {
        if (!mailOk(email)) return rep(400, { erreur: "Email invalide" });
        if (!mdpOk(b.mot_de_passe)) return rep(400, { erreur: "Mot de passe : 8 caractères minimum" });
        const nom = typeof b.nom === "string" ? b.nom.trim().slice(0, 80) : "";
        if (!nom) return rep(400, { erreur: "Nom obligatoire" });
        const deja = await db.from("techniciens").select("email").eq("email", email).maybeSingle();
        if (deja.data) return rep(409, { erreur: "Ce technicien existe déjà" });
        const ex = await compte(email);
        if (ex) {
          const { error } = await db.auth.admin.updateUserById(ex.id, { password: b.mot_de_passe as string, email_confirm: true, ban_duration: "none" });
          if (error) throw error;
        } else {
          const { error } = await db.auth.admin.createUser({ email, password: b.mot_de_passe as string, email_confirm: true });
          if (error) throw error;
        }
        const { error: ei } = await db.from("techniciens").insert({ email, nom, actif: true, admin: b.admin === true });
        if (ei) throw ei;
        return rep(200, { ok: true });
      }
      case "modifier": {
        if (!mailOk(email)) return rep(400, { erreur: "Email invalide" });
        const maj: Record<string, unknown> = {};
        if (typeof b.nom === "string" && b.nom.trim()) maj.nom = b.nom.trim().slice(0, 80);
        if (typeof b.actif === "boolean") maj.actif = b.actif;
        if (typeof b.admin === "boolean") maj.admin = b.admin;
        if (!Object.keys(maj).length) return rep(400, { erreur: "Rien à modifier" });
        if (email === moi && (maj.actif === false || maj.admin === false)) return rep(400, { erreur: "Vous ne pouvez pas retirer vos propres droits" });
        const { data, error } = await db.from("techniciens").update(maj).eq("email", email).select("email");
        if (error) throw error;
        if (!data?.length) return rep(404, { erreur: "Technicien introuvable" });
        if (maj.actif === false) await db.from("appareils").delete().eq("email", email); // ses appareils seront verrouillés à la prochaine vérification
        return rep(200, { ok: true });
      }
      case "mot_de_passe": {
        if (!mailOk(email)) return rep(400, { erreur: "Email invalide" });
        if (!mdpOk(b.mot_de_passe)) return rep(400, { erreur: "Mot de passe : 8 caractères minimum" });
        const ex = await compte(email);
        if (!ex) return rep(404, { erreur: "Compte introuvable" });
        const { error } = await db.auth.admin.updateUserById(ex.id, { password: b.mot_de_passe as string });
        if (error) throw error;
        return rep(200, { ok: true });
      }
      case "liberer": {
        if (!mailOk(email) || typeof b.device_id !== "string") return rep(400, { erreur: "Paramètres invalides" });
        const { error } = await db.from("appareils").delete().eq("email", email).eq("device_id", b.device_id);
        if (error) throw error;
        return rep(200, { ok: true });
      }
      default:
        return rep(400, { erreur: "Action inconnue" });
    }
  } catch (e) {
    const m = e && typeof e === "object" && "message" in e ? String((e as { message: unknown }).message) : "Erreur";
    return rep(500, { erreur: m.slice(0, 200) });
  }
});

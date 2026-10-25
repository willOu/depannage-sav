// Diag'SAV : un technicien actif change son propre mot de passe.
// POST { ancien, nouveau }  (jeton du technicien dans Authorization)
// L'ancien mot de passe est revérifié ici ; le drapeau « mot de passe provisoire » est retiré en même temps.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const rep = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return rep(405, { erreur: "Méthode non autorisée" });
  const url = Deno.env.get("SUPABASE_URL")!;
  const db = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false, autoRefreshToken: false } });
  const anon = createClient(url, Deno.env.get("SUPABASE_ANON_KEY")!, { auth: { persistSession: false, autoRefreshToken: false } });

  const jeton = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
  if (!jeton) return rep(401, { erreur: "Non connecté" });
  const { data: u, error: eu } = await db.auth.getUser(jeton);
  if (eu || !u?.user?.email) return rep(401, { erreur: "Session invalide" });
  const email = u.user.email.toLowerCase();
  const { data: t } = await db.from("techniciens").select("actif").eq("email", email).maybeSingle();
  if (!t?.actif) return rep(403, { erreur: "Compte non autorisé" });

  let b: Record<string, unknown> = {};
  try { b = await req.json(); } catch { return rep(400, { erreur: "Requête illisible" }); }
  const ancien = typeof b.ancien === "string" ? b.ancien : "", nouveau = typeof b.nouveau === "string" ? b.nouveau : "";
  if (nouveau.length < 8 || nouveau.length > 72) return rep(400, { erreur: "Le nouveau mot de passe doit faire au moins 8 caractères" });
  if (nouveau === ancien) return rep(400, { erreur: "Le nouveau mot de passe doit être différent de l'ancien" });

  // revérifie l'ancien mot de passe
  const { error: ea } = await anon.auth.signInWithPassword({ email, password: ancien });
  if (ea) return rep(400, { erreur: "Mot de passe actuel incorrect" });

  const { error: ep } = await db.auth.admin.updateUserById(u.user.id, { password: nouveau });
  if (ep) return rep(400, { erreur: ep.message.slice(0, 200) });
  await db.from("techniciens").update({ mdp_provisoire: false }).eq("email", email);
  return rep(200, { ok: true });
});

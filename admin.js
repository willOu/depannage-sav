/* Administration des techniciens (#/techs) : réservée aux administrateurs.
   Tout passe par la fonction serveur « admin-techniciens » (Supabase), qui vérifie les droits à chaque appel. */
(function () {
  const FN = "/functions/v1/admin-techniciens";
  const JS = { "Content-Type": "application/json" };
  const appel = async (action, data) => {
    const r = await AUTH.api(FN, { method: "POST", headers: JS, body: JSON.stringify({ action, ...(data || {}) }) });
    if (r.net) return { erreur: "Pas de réseau : la gestion des techniciens demande une connexion." };
    if (!r.ok) return { erreur: (r.j && r.j.erreur) || "Erreur " + r.status };
    return r.j || {};
  };
  const fdate = d => { try { return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }); } catch (e) { return ""; } };
  /* mot de passe lisible (sans 0/O, 1/l/I) */
  const genMdp = () => { const c = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789"; const a = new Uint32Array(10); crypto.getRandomValues(a); return Array.from(a, x => c[x % c.length]).join(""); };
  let L = null, msg = "", ouvert = "", brouillon = { n: "", e: "", p: "", a: false }; /* saisie du formulaire d'ajout, gardée entre deux affichages */

  async function charger() { const r = await appel("liste"); L = r; }
  function rendu() {
    if (!/^#\/techs/.test(location.hash)) return;
    if (!L) { app.innerHTML = `<p class="note">Chargement…</p>`; return; }
    if (L.erreur) { app.innerHTML = `<p class="empty">${esc(L.erreur)}</p><button class="dbtn" onclick="techsRecharger()">Réessayer</button>`; return; }
    const ts = L.techniciens || [];
    let h = (msg ? `<div class="note tmsg">${msg}</div>` : "") +
      `<div class="set"><details class="grp" id="tadd"${ouvert === "+" ? " open" : ""}><summary>＋ Ajouter un technicien</summary><div class="secb">
        <input id="tn" maxlength="80" placeholder="Nom et prénom" autocomplete="off" value="${esc(brouillon.n)}">
        <input id="te" type="email" maxlength="120" placeholder="Email" autocomplete="off" value="${esc(brouillon.e)}">
        <div class="tpw"><input id="tp" maxlength="72" value="${esc(brouillon.p || (brouillon.p = genMdp()))}" autocomplete="off"><button class="mini" onclick="document.getElementById('tp').value=techsMdp()">Autre</button></div>
        <label class="chk"><input type="checkbox" id="ta"${brouillon.a ? " checked" : ""}> Administrateur (messages, statistiques, techniciens)</label>
        <button class="dbtn" id="tc">Créer le compte</button></div></details></div>
      <h2>${ts.length} technicien${ts.length > 1 ? "s" : ""}</h2><div class="set">` +
      ts.map(t => {
        const moi = t.email.toLowerCase() === (L.moi || ""), k = esc(t.email);
        return `<details class="grp" data-e="${k}"${ouvert === t.email ? " open" : ""}><summary>${esc(t.nom || t.email)}${t.admin ? ` <span class="tb2 ad">Admin</span>` : ""}${t.actif ? "" : ` <span class="tb2 off">Désactivé</span>`}${t.mdp_provisoire ? ` <span class="tb2 pv">Mdp provisoire</span>` : ""}
          <small>${k} · ${t.appareils.length} appareil${t.appareils.length > 1 ? "s" : ""}${t.derniere ? " · actif le " + esc(fdate(t.derniere)) : ""}</small></summary><div class="secb">
          <div class="row"><span>Accès à l'appli</span>${moi ? `<span class="muted">vous</span>` : `<button class="mini${t.actif ? " rouge" : ""}" data-act="actif" data-v="${!t.actif}">${t.actif ? "Désactiver" : "Réactiver"}</button>`}</div>
          <div class="row"><span>Administrateur</span>${moi ? `<span class="muted">vous</span>` : `<button class="mini" data-act="admin" data-v="${!t.admin}">${t.admin ? "Retirer" : "Donner"}</button>`}</div>
          <div class="row tcol"><span>Appareils (${t.admin ? 5 : 2} maximum)</span>${t.appareils.length ? t.appareils.map(a => `<div class="tdev"><span>${esc(a.nom || "Appareil")}<small>vu le ${esc(fdate(a.vu))}</small></span><button class="mini" data-act="liberer" data-id="${esc(a.id)}">Libérer</button></div>`).join("") : `<span class="muted">aucun</span>`}</div>
          <div class="row tcol"><span>Réinitialiser le mot de passe</span><div class="tpw"><input class="tnp" maxlength="72" value="" placeholder="8 caractères minimum" autocomplete="off"><button class="mini" data-act="gen">Générer</button><button class="mini" data-act="mdp">Changer</button></div></div>
          <p class="hotn">Créé le ${esc(fdate(t.cree_le))}</p></div></details>`;
      }).join("") + `</div><p class="hotn">Un technicien désactivé est bloqué à sa prochaine ouverture de l'appli avec du réseau. « Libérer » un appareil l'oblige à se reconnecter.</p>`;
    app.innerHTML = h;
    const add = document.getElementById("tadd"); add.ontoggle = () => { if (add.open) ouvert = "+"; };
    document.getElementById("tc").onclick = async ev => {
      const nom = document.getElementById("tn").value.trim(), email = document.getElementById("te").value.trim().toLowerCase(), mdp = document.getElementById("tp").value, admin = document.getElementById("ta").checked;
      brouillon = { n: nom, e: email, p: mdp, a: admin }; ouvert = "+";
      if (!nom || !email) { msg = "⚠ Nom et email obligatoires."; return rendu(); }
      if (!/^[a-z0-9._%+'-]+@[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(email)) { msg = "⚠ Email invalide."; return rendu(); }
      if (mdp.length < 8) { msg = "⚠ Mot de passe : 8 caractères minimum."; return rendu(); }
      ev.target.disabled = true; ev.target.textContent = "Création…";
      const r = await appel("creer", { nom, email, mot_de_passe: mdp, admin });
      if (r.erreur) { msg = "⚠ " + esc(r.erreur); ouvert = "+"; await charger(); return rendu(); }
      msg = `✓ Compte créé pour <b>${esc(nom)}</b>. Identifiants à lui transmettre (il choisira son propre mot de passe à sa première connexion) :<div class="tid"><span>${esc(email)}</span><span>${esc(mdp)}</span></div><button class="mini" onclick="techsCopier(this)" data-t="${esc("Diag'SAV — identifiant : " + email + " — mot de passe : " + mdp)}">Copier</button>`;
      brouillon = { n: "", e: "", p: "", a: false }; ouvert = email; await charger(); rendu();
    };
    app.querySelectorAll("details.grp[data-e]").forEach(d => {
      const email = d.dataset.e;
      d.ontoggle = () => { if (d.open) ouvert = email; };
      d.querySelectorAll("button[data-act]").forEach(btn => btn.onclick = async () => {
        const act = btn.dataset.act; let r;
        if (act === "gen") { d.querySelector(".tnp").value = genMdp(); return; }
        if (act === "actif") { const v = btn.dataset.v === "true"; if (!v && !confirm("Désactiver ce technicien ? Il sera bloqué à sa prochaine ouverture avec du réseau.")) return; r = await appel("modifier", { email, actif: v }); }
        if (act === "admin") { const v = btn.dataset.v === "true"; if (!confirm(v ? "Donner les droits administrateur ?" : "Retirer les droits administrateur ?")) return; r = await appel("modifier", { email, admin: v }); }
        if (act === "liberer") { if (!confirm("Libérer cet appareil ? Il devra se reconnecter.")) return; r = await appel("liberer", { email, device_id: btn.dataset.id }); }
        if (act === "mdp") { const p = d.querySelector(".tnp").value; if (p.length < 8) { msg = "⚠ Mot de passe : 8 caractères minimum."; return rendu(); } r = await appel("mot_de_passe", { email, mot_de_passe: p });
          if (!r.erreur) { msg = `✓ Mot de passe réinitialisé. Mot de passe provisoire à transmettre (il devra en choisir un nouveau à sa prochaine connexion ; ses appareils déjà connectés restent ouverts) :<div class="tid"><span>${esc(email)}</span><span>${esc(p)}</span></div><button class="mini" onclick="techsCopier(this)" data-t="${esc("Diag'SAV — identifiant : " + email + " — mot de passe : " + p)}">Copier</button>`; ouvert = email; await charger(); return rendu(); } }
        msg = r.erreur ? "⚠ " + esc(r.erreur) : "✓ Modification enregistrée.";
        ouvert = email; await charger(); rendu();
      });
    });
  }
  window.techsMdp = genMdp;
  window.techsCopier = btn => { const t = btn.dataset.t; try { navigator.clipboard.writeText(t).then(() => { btn.textContent = "Copié ✓"; }, () => prompt("Copier :", t)); } catch (e) { prompt("Copier :", t); } };
  window.techsRecharger = async () => { L = null; rendu(); await charger(); rendu(); };
  window.viewTechs = async function () {
    setHead("Techniciens", true);
    if (!(window.SYNC && SYNC.estAdmin())) { app.innerHTML = `<p class="empty">Page réservée à l'administrateur.</p>`; return; }
    msg = ""; L = null; rendu(); await charger(); rendu();
  };
})();

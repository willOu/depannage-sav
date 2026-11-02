/* Notes personnelles par fiche (carte ou accessoire).
   Enregistrées sur le téléphone pendant la saisie (marche sans réseau), puis synchronisées avec le compte
   (table notes_perso : chacun ne lit que les siennes, l'administrateur non plus ne les voit pas).
   Elles apparaissent aussi dans la recherche et dans Réglages > Mes notes. */
(function () {
  /* une liste par compte : un autre compte sur ce téléphone ne voit pas ces notes */
  const K = () => "notes-perso:" + ((window.AUTH && AUTH.email && AUTH.email()) || "").toLowerCase();
  const lire = () => { try { return JSON.parse(localStorage.getItem(K()) || "{}") || {}; } catch (e) { return {}; } };
  const ecrire = o => { try { localStorage.setItem(K(), JSON.stringify(o)); return true; } catch (e) { return false; } };
  const cle = (g, id) => g + ":" + id;
  /* modifications pas encore envoyées au compte : { cle: date } (texte vide = suppression) */
  const KP = () => K() + ":attente", KI = () => K() + ":init";
  const attente = () => { try { return JSON.parse(localStorage.getItem(KP()) || "{}") || {}; } catch (e) { return {}; } };
  const setAttente = o => { try { localStorage.setItem(KP(), JSON.stringify(o)); } catch (e) {} };
  const actif = () => !!(window.AUTH_ACTIF && window.AUTH && AUTH.email());
  const JS = { "Content-Type": "application/json" };
  let enCours = false, encore = false;
  async function sync() {
    if (enCours) { encore = true; return; }
    if (!actif() || navigator.onLine === false) return;
    if (!AUTH.pret()) { setTimeout(sync, 3000); return; }
    enCours = true;
    try {
      const moi = AUTH.email().toLowerCase();
      /* première synchro sur ce téléphone : les notes déjà écrites partent au compte */
      if (!localStorage.getItem(KI())) { const a = attente(); Object.entries(lire()).forEach(([k, n]) => { if (n && n.t && !a[k]) a[k] = n.d || Date.now(); }); setAttente(a); }
      /* 1. envoi des modifications */
      for (const [k, d] of Object.entries(attente())) {
        const n = lire()[k];
        const r = n && n.t
          ? await AUTH.api("/rest/v1/notes_perso?on_conflict=user_id,cle", { method: "POST", headers: { ...JS, Prefer: "resolution=merge-duplicates,return=minimal" }, body: JSON.stringify({ email: moi, cle: k, texte: n.t.slice(0, 4000), maj_le: new Date(n.d || d).toISOString() }) })
          : await AUTH.api("/rest/v1/notes_perso?cle=eq." + encodeURIComponent(k), { method: "DELETE", headers: { Prefer: "return=minimal" } });
        if (r.net || (!r.ok && (r.status >= 500 || r.status === 401 || r.status === 429))) return; /* on réessaiera */
        const a = attente(); if (a[k] === d) { delete a[k]; setAttente(a); } /* envoyé (ou refusé définitivement) */
      }
      try { localStorage.setItem(KI(), "1"); } catch (e) {}
      /* 2. réception : notes écrites sur un autre appareil, ou supprimées ailleurs */
      const g = await AUTH.api("/rest/v1/notes_perso?select=cle,texte,maj_le&limit=2000", {});
      if (!g.ok || !Array.isArray(g.j)) return;
      const o = lire(), a = attente(), dist = {}; let chg = false;
      g.j.forEach(r => { dist[r.cle] = r; });
      Object.entries(dist).forEach(([k, r]) => { if (a[k]) return; const d = Date.parse(r.maj_le) || 0, l = o[k]; if (!l || l.t !== r.texte) { o[k] = { t: r.texte, d }; chg = true; } });
      Object.keys(o).forEach(k => { if (!a[k] && !dist[k]) { delete o[k]; chg = true; } });
      if (chg) { ecrire(o); rafraichir(); }
    } catch (e) {} finally { enCours = false; if (encore) { encore = false; setTimeout(sync, 0); } }
  }
  /* la page ouverte suit les changements reçus (sauf si on est en train d'écrire) */
  function rafraichir() {
    const m = /^#\/(c|a)\/([^/]+)/.exec(location.hash), t = document.getElementById("ntp");
    if (m && t && document.activeElement !== t) { const n = lire()[cle(m[1] === "c" ? "carte" : "accessoire", decodeURIComponent(m[2]))]; t.value = n && n.t || ""; const sm = t.closest(".note-p").querySelector("summary span"); if (sm) sm.textContent = "· " + (n && n.t ? "1 note" : "aucune"); }
    const a = document.activeElement;
    if (/^#\/reglages/.test(location.hash) && !(a && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) && typeof viewSettings === "function") viewSettings();
  }
  addEventListener("auth-ok", () => setTimeout(sync, 2500));
  addEventListener("load", () => setTimeout(sync, 4500));
  addEventListener("online", () => setTimeout(sync, 3000));
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") setTimeout(sync, 1500); });
  let tSync = 0;
  const fdate = d => { try { return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }); } catch (e) { return ""; } };
  const nomFiche = (g, id) => {
    if (g === "carte") { const b = (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id); return b ? { m: b.m.nom, c: b.m.couleur, nom: b.c.nom } : null; }
    const a = (window.ACCESSOIRES || []).find(x => x.id === id); return a ? { m: a.marque, c: a.couleur, nom: a.nom } : null;
  };
  const lien = (g, id) => (g === "carte" ? "#/c/" : "#/a/") + id;

  window.noteHtml = (genre, id) => {
    const n = lire()[cle(genre, id)];
    return `<details class="note-p"${n && n.t ? " open" : ""}><summary>📝 Mes notes <span>· ${n && n.t ? "1 note" : "aucune"}</span></summary><div class="note-pb">
      <textarea id="ntp" maxlength="4000" rows="${n && n.t ? Math.min(10, Math.max(3, n.t.split("\n").length + 1)) : 3}" placeholder="Visible par vous seul (ex. « chez M. X, la borne 9 est pontée » , « fusible F2 changé le 12/10 »)">${esc(n && n.t || "")}</textarea>
      <p class="hotn" id="ntps">${n && n.t ? "Enregistrée · " + fdate(n.d) + " · visible par vous seul, sur tous vos appareils" : "Enregistrement automatique, même sans réseau. Visible par vous seul, sur tous vos appareils."}</p></div></details>`;
  };
  /* branche la zone de saisie (appelé après insertion dans la page) */
  window.noteBrancher = (genre, id) => {
    const t = document.getElementById("ntp"), s = document.getElementById("ntps"); if (!t) return;
    let tm = 0;
    t.oninput = () => {
      clearTimeout(tm); s.textContent = "…";
      tm = setTimeout(() => {
        const o = lire(), v = t.value.replace(/\s+$/, "");
        const d = Date.now();
        if (v) o[cle(genre, id)] = { t: v.slice(0, 4000), d }; else delete o[cle(genre, id)];
        const ok = ecrire(o);
        if (ok) { const a = attente(); a[cle(genre, id)] = d; setAttente(a); clearTimeout(tSync); tSync = setTimeout(sync, 2000); }
        s.textContent = ok ? (v ? "✓ Enregistrée" + (navigator.onLine === false ? " sur ce téléphone (envoi au compte au retour du réseau)" : "") : "Note effacée") : "⚠ Impossible d'enregistrer (mémoire du navigateur pleine ou bloquée)";
        const sm = t.closest(".note-p").querySelector("summary span"); if (sm) sm.textContent = "· " + (v ? "1 note" : "aucune");
      }, 500);
    };
  };

  /* recherche : notes qui contiennent tous les mots */
  window.noteSearchHtml = q => {
    const mots = norm(q).split(" ").filter(Boolean); if (!mots.length) return "";
    const res = Object.entries(lire()).filter(([k, n]) => n && n.t && mots.every(w => norm(n.t).includes(w)));
    if (!res.length) return "";
    return `<h2>Mes notes (${res.length})</h2><div class="list">` + res.map(([k, n]) => {
      const i = k.indexOf(":"), g = k.slice(0, i), id = k.slice(i + 1), f = nomFiche(g, id); if (!f) return "";
      return `<button class="row" onclick="go('${lien(g, esc(id))}')"><span class="badge" style="--c:${esc(f.c)}">${esc(f.m)}</span><b>${esc(f.nom)}</b><small>📝 ${highlight(n.t.slice(0, 160), q)}${n.t.length > 160 ? "…" : ""}</small></button>`;
    }).join("") + `</div>`;
  };

  /* Réglages : liste des notes */
  window.noteMesHtml = () => {
    const L = Object.entries(lire()).filter(([k, n]) => n && n.t).sort((a, b) => b[1].d - a[1].d);
    if (!L.length) return "";
    return `<div class="set"><details class="grp"><summary>📝 Mes notes <small>${L.length} fiche${L.length > 1 ? "s" : ""}${Object.keys(attente()).length ? " · " + Object.keys(attente()).length + " à envoyer" : ""}</small></summary><div class="secb">` +
      L.map(([k, n]) => { const i = k.indexOf(":"), g = k.slice(0, i), id = k.slice(i + 1), f = nomFiche(g, id);
        return `<div class="sgl"><a href="${lien(g, esc(id))}"><b>${f ? esc(f.m + " · " + f.nom) : esc(id)}</b></a><small>${fdate(n.d)}</small><p style="white-space:pre-wrap">${esc(n.t)}</p></div>`; }).join("") +
      `<p class="hotn">Vos notes suivent votre compte : vous les retrouvez sur vos autres appareils (mise à jour dès qu'il y a du réseau). Elles ne sont visibles que par vous, le SAV ne les voit pas.</p></div></details></div>`;
  };
})();

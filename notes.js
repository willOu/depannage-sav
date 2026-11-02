/* Notes personnelles par fiche (carte ou accessoire).
   Gardées uniquement sur ce téléphone (localStorage) : personne d'autre ne les voit, elles marchent sans réseau.
   Enregistrement automatique pendant la saisie. Elles apparaissent aussi dans la recherche et dans Réglages > Mes notes. */
(function () {
  /* une liste par compte : un autre compte sur ce téléphone ne voit pas ces notes */
  const K = () => "notes-perso:" + ((window.AUTH && AUTH.email && AUTH.email()) || "").toLowerCase();
  const lire = () => { try { return JSON.parse(localStorage.getItem(K()) || "{}") || {}; } catch (e) { return {}; } };
  const ecrire = o => { try { localStorage.setItem(K(), JSON.stringify(o)); return true; } catch (e) { return false; } };
  const cle = (g, id) => g + ":" + id;
  const fdate = d => { try { return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }); } catch (e) { return ""; } };
  const nomFiche = (g, id) => {
    if (g === "carte") { const b = (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id); return b ? { m: b.m.nom, c: b.m.couleur, nom: b.c.nom } : null; }
    const a = (window.ACCESSOIRES || []).find(x => x.id === id); return a ? { m: a.marque, c: a.couleur, nom: a.nom } : null;
  };
  const lien = (g, id) => (g === "carte" ? "#/c/" : "#/a/") + id;

  window.noteHtml = (genre, id) => {
    const n = lire()[cle(genre, id)];
    return `<details class="note-p"${n && n.t ? " open" : ""}><summary>📝 Mes notes <span>· ${n && n.t ? "1 note" : "aucune"}</span></summary><div class="note-pb">
      <textarea id="ntp" maxlength="4000" rows="${n && n.t ? Math.min(10, Math.max(3, n.t.split("\n").length + 1)) : 3}" placeholder="Visible par vous seul, sur ce téléphone (ex. « chez M. X, la borne 9 est pontée » , « fusible F2 changé le 12/10 »)">${esc(n && n.t || "")}</textarea>
      <p class="hotn" id="ntps">${n && n.t ? "Enregistrée sur ce téléphone · " + fdate(n.d) : "Enregistrement automatique sur ce téléphone, sans réseau."}</p></div></details>`;
  };
  /* branche la zone de saisie (appelé après insertion dans la page) */
  window.noteBrancher = (genre, id) => {
    const t = document.getElementById("ntp"), s = document.getElementById("ntps"); if (!t) return;
    let tm = 0;
    t.oninput = () => {
      clearTimeout(tm); s.textContent = "…";
      tm = setTimeout(() => {
        const o = lire(), v = t.value.replace(/\s+$/, "");
        if (v) o[cle(genre, id)] = { t: v.slice(0, 4000), d: Date.now() }; else delete o[cle(genre, id)];
        s.textContent = ecrire(o) ? (v ? "✓ Enregistrée sur ce téléphone" : "Note effacée") : "⚠ Impossible d'enregistrer (mémoire du navigateur pleine ou bloquée)";
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
    return `<div class="set"><details class="grp"><summary>📝 Mes notes <small>${L.length} fiche${L.length > 1 ? "s" : ""} · sur ce téléphone</small></summary><div class="secb">` +
      L.map(([k, n]) => { const i = k.indexOf(":"), g = k.slice(0, i), id = k.slice(i + 1), f = nomFiche(g, id);
        return `<div class="sgl"><a href="${lien(g, esc(id))}"><b>${f ? esc(f.m + " · " + f.nom) : esc(id)}</b></a><small>${fdate(n.d)}</small><p style="white-space:pre-wrap">${esc(n.t)}</p></div>`; }).join("") +
      `<p class="hotn">Les notes restent sur ce téléphone : elles ne sont pas envoyées au SAV et ne suivent pas le compte sur un autre appareil.</p></div></details></div>`;
  };
})();

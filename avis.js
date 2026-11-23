/* Encadrés « Attention » (infos SAV) publiés par l'administrateur sur une marque, une carte ou un accessoire.
   Table avis (cible « m:marque », « c:carte » ou « a:accessoire », titre, texte, image facultative, date de l'info).
   L'image (réduite à 1400 px, JPEG) est dans le stockage Supabase (dossier « avis », privé), gardée sur le téléphone pour le hors ligne.
   La dernière liste reçue est gardée sur le téléphone : les encadrés restent visibles sans réseau. */
(function () {
  const K = "avis-l", CACHE = "sav-notices-2", BUCKET = "avis";
  const st = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const JS = { "Content-Type": "application/json" };
  const actif = () => !!(window.AUTH_ACTIF && window.AUTH && AUTH.email());
  const admin = () => !!(window.SYNC && SYNC.estAdmin());
  const e = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const okChemin = p => /^[a-z0-9-]{1,100}\.jpg$/.test(p || "");
  const okCible = c => /^(m|c|a):[a-z0-9-]{1,80}$/.test(c || "");
  const cle = p => location.origin + "/__avis/" + p;
  const fdate = d => { try { return new Date(d + (String(d).length === 10 ? "T12:00:00" : "")).toLocaleDateString("fr-FR"); } catch (x) { return ""; } };
  const liste = () => actif() ? st.get(K, []).filter(a => a && okCible(a.cible)) : [];

  /* nom lisible d'une cible */
  function nomCible(c) {
    const [t, id] = String(c).split(":");
    if (t === "m") { const m = (typeof MARQUES !== "undefined" ? MARQUES : []).find(x => x.id === id); return m ? "Marque " + m.nom : c; }
    if (t === "c") { const b = (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id); return b ? b.m.nom + " · " + b.c.nom : c; }
    if (t === "a") { const a = (window.ACCESSOIRES || []).find(x => x.id === id); return a ? a.marque + " · " + a.nom + " (accessoire)" : c; }
    return c;
  }

  /* ---------- synchronisation ---------- */
  async function sync() {
    if (!actif() || navigator.onLine === false) return;
    if (!AUTH.pret()) { setTimeout(sync, 3000); return; }
    const r = await AUTH.api("/rest/v1/avis?select=id,cible,titre,texte,chemin,date_info,cree_le&order=date_info.desc,id.desc&limit=300", {});
    if (!r.ok || !Array.isArray(r.j)) return;
    const avant = JSON.stringify(st.get(K, []));
    st.set(K, r.j);
    /* images : garder celles en cours, libérer les autres */
    try {
      const c = await caches.open(CACHE), gard = new Set(r.j.filter(a => okChemin(a.chemin)).map(a => cle(a.chemin)));
      for (const q of await c.keys()) if (q.url.includes("/__avis/") && !gard.has(q.url)) await c.delete(q);
      for (const a of r.j) if (okChemin(a.chemin) && !(await c.match(cle(a.chemin)))) {
        const f = await AUTH.brut("/storage/v1/object/authenticated/" + BUCKET + "/" + a.chemin, {}, 60000);
        if (f && f.ok) await c.put(cle(a.chemin), new Response(await f.blob(), { headers: { "Content-Type": "image/jpeg" } }));
      }
    } catch (x) {}
    if (avant !== JSON.stringify(r.j) && /^#\/(m|c|a)\//.test(location.hash + "/") && window.route) try { route(); } catch (x) {}
  }
  addEventListener("auth-ok", () => setTimeout(sync, 2000));
  addEventListener("load", () => setTimeout(sync, 4000));
  addEventListener("online", () => setTimeout(sync, 3000));

  async function image(chemin) {
    if (!okChemin(chemin)) return null;
    try { const c = await caches.open(CACHE), h = await c.match(cle(chemin)); if (h) return h.blob(); } catch (x) {}
    if (!actif() || navigator.onLine === false) return null;
    const r = await AUTH.brut("/storage/v1/object/authenticated/" + BUCKET + "/" + chemin, {}, 60000);
    if (!r || !r.ok) return null;
    const b = await r.blob();
    try { (await caches.open(CACHE)).put(cle(chemin), new Response(b, { headers: { "Content-Type": "image/jpeg" } })); } catch (x) {}
    return b;
  }
  /* remplit les images des encadrés affichés */
  window.avisImages = function (root) {
    (root || document).querySelectorAll("img[data-avis]").forEach(async im => {
      const b = await image(im.dataset.avis); if (!b) { im.remove(); return; }
      im.src = URL.createObjectURL(b); im.removeAttribute("data-avis");
    });
  };

  const bloc = a => `<div class="avis"><div class="avist"><span class="avisi" aria-hidden="true">⚠</span>${e(a.titre)}</div>${a.texte ? `<p>${e(a.texte).replace(/\n/g, "<br>")}</p>` : ""}${okChemin(a.chemin) ? `<img data-avis="${e(a.chemin)}" alt="">` : ""}<p class="avisd">Info SAV du ${e(fdate(a.date_info))}</p></div>`;
  /* encadrés d'une cible (ex. « m:roger », « c:roger-b70-1dc ») */
  window.avisHtml = cible => liste().filter(a => a.cible === cible).map(bloc).join("");
  window.avisInserer = function (cible, apres) {
    const h = avisHtml(cible); if (!h || !apres) return;
    apres.insertAdjacentHTML("afterend", `<div class="avisz">${h}</div>`);
    avisImages(apres.nextElementSibling);
  };

  /* ---------- administration (#/avis) ---------- */
  async function reduire(file) {
    const u = URL.createObjectURL(file);
    try {
      const img = new Image(); img.src = u; await img.decode();
      const W = img.naturalWidth, H = img.naturalHeight; if (!W || !H) throw new Error("image");
      const k = Math.min(1, 1400 / Math.max(W, H)), w = Math.max(20, Math.round(W * k)), h = Math.max(20, Math.round(H * k));
      const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
      const g = cv.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, w, h); g.drawImage(img, 0, 0, w, h);
      const blob = await new Promise(ok => cv.toBlob(ok, "image/jpeg", 0.88)); if (!blob) throw new Error("image");
      return blob;
    } finally { URL.revokeObjectURL(u); }
  }
  function options() {
    const M = (typeof MARQUES !== "undefined" ? MARQUES : []).map(m => [`m:${m.id}`, `Marque ${m.nom} (page de la marque)`]);
    const C = (typeof BOARDS !== "undefined" ? BOARDS : []).map(b => [`c:${b.c.id}`, `${b.m.nom} · ${b.c.nom}`]).sort((x, y) => x[1].localeCompare(y[1]));
    const A = (window.ACCESSOIRES || []).map(a => [`a:${a.id}`, `${a.marque} · ${a.nom}`]).sort((x, y) => x[1].localeCompare(y[1]));
    const o = l => l.map(([v, t]) => `<option value="${e(v)}">${e(t)}</option>`).join("");
    return `<option value="">— choisir où afficher l'encadré —</option><optgroup label="Marques">${o(M)}</optgroup><optgroup label="Cartes">${o(C)}</optgroup><optgroup label="Accessoires">${o(A)}</optgroup>`;
  }
  const D = { blob: null };
  window.viewAvisAdmin = function () {
    setHead("Encadrés « Attention »", true);
    const app = document.getElementById("app");
    if (!admin()) { app.innerHTML = `<p class="note">Réservé aux administrateurs.</p>`; return; }
    const l = liste(), auj = new Date().toISOString().slice(0, 10);
    app.innerHTML = `<p class="note">Un encadré rouge « Attention » s'affiche en haut de la page choisie (marque, carte ou accessoire), pour tous les techniciens, même sans réseau une fois reçu.</p>
      <div class="set" style="padding:12px 14px">
        <label class="lbl">Où l'afficher<select id="avc">${options()}</select></label>
        <label class="lbl">Titre<input id="avt" maxlength="140" placeholder="Ex. Attention : mise en veille après l'apprentissage"></label>
        <label class="lbl">Texte<textarea id="avx" maxlength="2000" rows="4" placeholder="Ce que le technicien doit savoir ou faire"></textarea></label>
        <label class="lbl">Image (facultative)<input type="file" id="avf" accept="image/*"></label><div id="avp"></div>
        <label class="lbl">Date de l'info<input type="date" id="avd" value="${auj}"></label>
        <div id="avap"></div>
        <button class="dbtn" id="avgo">Publier l'encadré</button><p id="avr" class="hotn"></p>
      </div>
      <h2>Encadrés publiés (${l.length})</h2>
      ${l.length ? `<div class="list">${l.map(a => `<div class="row" style="cursor:default"><b>${e(a.titre)}</b> <span class="p">${e(nomCible(a.cible))}</span><small>Info du ${e(fdate(a.date_info))}${a.chemin ? " · avec image" : ""}</small><span style="display:flex;gap:6px;margin-top:6px"><button class="mini" onclick="go('#/${a.cible.replace(":", "/")}')">Voir</button><button class="mini" onclick="avisSuppr(${Number(a.id)})">Retirer</button></span></div>`).join("")}</div>` : `<p class="note">Aucun encadré publié. L'encadré Roger sur la veille L1 fait partie de l'appli et n'apparaît pas ici.</p>`}`;
    /* brouillon gardé si la page est redessinée (synchronisation) */
    ["avc", "avt", "avx", "avd"].forEach(id => { const el = document.getElementById(id); if (D[id]) el.value = D[id]; el.addEventListener("input", () => { D[id] = el.value; }); el.addEventListener("change", () => { D[id] = el.value; }); });
    const f = document.getElementById("avf"), pv = document.getElementById("avp"), out = document.getElementById("avr"), go_ = document.getElementById("avgo");
    const apercu = () => {
      const t = document.getElementById("avt").value.trim(), x = document.getElementById("avx").value.trim();
      document.getElementById("avap").innerHTML = t ? `<p class="hotn" style="margin:10px 0 0">Aperçu :</p>${bloc({ titre: t, texte: x, date_info: document.getElementById("avd").value || auj })}` : "";
      if (D.blob) { const im = document.querySelector("#avap .avis"); if (im) im.insertAdjacentHTML("beforeend", `<img src="${URL.createObjectURL(D.blob)}" alt="">`); }
    };
    ["avt", "avx", "avd"].forEach(id => document.getElementById(id).oninput = apercu);
    apercu(); if (D.blob) pv.innerHTML = `<p class="hotn">Image prête (voir l'aperçu).</p>`;
    f.onchange = async () => {
      D.blob = null; pv.innerHTML = ""; const file = f.files[0]; if (!file) { apercu(); return; }
      out.textContent = "Préparation de l'image…";
      try { D.blob = await reduire(file); out.textContent = ""; pv.innerHTML = `<button class="mini" id="avfx">Retirer l'image</button>`; document.getElementById("avfx").onclick = () => { D.blob = null; f.value = ""; pv.innerHTML = ""; apercu(); }; }
      catch (x) { out.textContent = "⚠ Ce fichier n'est pas une image lisible."; }
      apercu();
    };
    go_.onclick = async () => {
      const cible = document.getElementById("avc").value, titre = document.getElementById("avt").value.trim(), texte = document.getElementById("avx").value.trim(), d = document.getElementById("avd").value || auj;
      if (!okCible(cible)) { out.textContent = "⚠ Choisissez où afficher l'encadré."; return; }
      if (!titre) { out.textContent = "⚠ Le titre est obligatoire."; return; }
      if (navigator.onLine === false || !AUTH.pret()) { out.textContent = "⚠ Il faut du réseau pour publier."; return; }
      go_.disabled = true; out.textContent = "Publication…";
      try {
        let chemin = null;
        if (D.blob) {
          chemin = (cible.split(":")[1] + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 6)).slice(0, 96) + ".jpg";
          const r = await AUTH.brut("/storage/v1/object/" + BUCKET + "/" + chemin, { method: "POST", headers: { "Content-Type": "image/jpeg", "x-upsert": "false" }, body: D.blob }, 120000);
          if (!r || !r.ok) throw new Error(r ? "Envoi de l'image refusé (" + r.status + ")." : "Pas de réseau : réessayez.");
          try { (await caches.open(CACHE)).put(cle(chemin), new Response(D.blob, { headers: { "Content-Type": "image/jpeg" } })); } catch (x) {}
        }
        const ins = await AUTH.api("/rest/v1/avis", { method: "POST", headers: { ...JS, Prefer: "return=minimal" }, body: JSON.stringify({ cible, titre, texte, chemin, date_info: d }) });
        if (!ins.ok) throw new Error(ins.net ? "Pas de réseau : réessayez." : "Publication refusée (" + ins.status + ").");
        out.textContent = "✓ Encadré publié."; Object.keys(D).forEach(k => delete D[k]); D.blob = null;
        await sync(); viewAvisAdmin(); document.getElementById("avr").textContent = "✓ Encadré publié : il apparaît sur la page choisie.";
      } catch (x) { go_.disabled = false; out.textContent = "⚠ " + (x && x.message || "Échec de la publication."); }
    };
  };
  window.avisSuppr = async function (id) {
    const a = liste().find(x => Number(x.id) === Number(id)); if (!a) return;
    if (!confirm("Retirer l'encadré « " + a.titre + " » pour tout le monde ?")) return;
    const r = await AUTH.api("/rest/v1/avis?id=eq." + Number(id), { method: "DELETE", headers: { Prefer: "return=minimal" } });
    if (!r.ok) { alert(r.net ? "Pas de réseau : réessayez." : "Suppression refusée (" + r.status + ")."); return; }
    if (okChemin(a.chemin)) { try { await AUTH.brut("/storage/v1/object/" + BUCKET, { method: "DELETE", headers: JS, body: JSON.stringify({ prefixes: [a.chemin] }) }); } catch (x) {} try { (await caches.open(CACHE)).delete(cle(a.chemin)); } catch (x) {} }
    st.set(K, st.get(K, []).filter(x => Number(x.id) !== Number(id)));
    viewAvisAdmin();
  };
  window.avisNb = () => liste().length;
})();

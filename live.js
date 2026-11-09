/* Lecture de l'afficheur en direct (bouton appareil photo de la barre de recherche).
   La caméra arrière filme ; l'image du cadre est lue en continu par le lecteur 7 segments de scan.js (lire7seg, sans réseau).
   Un code n'est retenu que s'il correspond à un code connu des fiches et qu'il est lu plusieurs fois de suite (3 lectures sur les 5 dernières).
   Ensuite : une seule fiche → ouverture automatique (annulable) ; plusieurs → on choisit. « Ce n'est pas le bon code » relance la lecture. */
(function () {
  let ov = null, flux = null, ouv = 0, boucle = 0, lectures = [], arret = true, compte = 0;
  const recente = () => { try { return (typeof store !== "undefined" ? store.get("recents", []) : [])[0] || ""; } catch (e) { return ""; } };
  /* un « 1 » en trop au bord vient souvent du cadre de l'afficheur */
  const variantes = t => { const v = [t]; let a = t; while (/^[1i]/.test(a) && a.length > 1) { a = a.slice(1); v.push(a); } v.slice().forEach(x => { let b = x; while (/[1i]$/.test(b) && b.length > 1) { b = b.slice(0, -1); v.push(b); } }); return [...new Set(v)]; };
  const fiches = code => { const r = codeMatch(code, recente()).filter(x => x.sc >= 2); const vus = new Set(); return r.filter(x => { const k = x.c.id + "|" + x.x.code; if (vus.has(k)) return false; vus.add(k); return true; }); };
  const lien = x => "#/c/" + x.c.id + "/codes/" + encodeURIComponent(x.x.code).replace(/'/g, "%27");

  window.liveOuvrir = async function () {
    if (ov) return;
    const id = ++ouv;
    ov = document.createElement("div"); ov.className = "lvov"; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-label", "Lecture de l'afficheur en direct");
    ov.innerHTML = `<video playsinline muted autoplay></video><div class="lvcadre"><i></i></div>
      <div class="lvhaut"><button class="lvx" aria-label="Fermer">✕</button><button class="lvl" aria-label="Lampe" hidden>🔦</button></div>
      <div class="lvbas"><p class="lvs" role="status">Ouverture de la caméra…</p><div class="lvr"></div>
      <p class="lvaide">Placez l'afficheur dans le cadre, de face, sans reflet. Afficheurs à segments (chiffres et lettres lumineux) : lecture sans réseau. <a href="#/scan/afficheur" class="lvphoto">Mode photo</a></p></div>`;
    document.body.appendChild(ov);
    ov.querySelector(".lvx").onclick = fermer;
    ov.querySelector(".lvphoto").onclick = e => { e.preventDefault(); fermer(false); allerA("#/scan/afficheur"); };
    try { ov.querySelector(".lvx").focus(); } catch (e) {}
    document.addEventListener("keydown", echap);
    try { history.pushState({ lv: 1 }, ""); } catch (e) {}
    const st = ov.querySelector(".lvs");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { st.textContent = "Caméra indisponible dans ce navigateur. Utilisez le mode photo."; return; }
    let f;
    try {
      f = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } } });
    } catch (e) {
      if (!ov || id !== ouv) return;
      st.textContent = /NotAllowed|Permission/i.test(e && e.name || "") ? "Accès à la caméra refusé : autorisez-le dans les réglages du navigateur (cadenas à côté de l'adresse), ou utilisez le mode photo." : "Caméra introuvable ou déjà utilisée par une autre appli. Utilisez le mode photo.";
      return;
    }
    if (!ov || id !== ouv) { try { f.getTracks().forEach(t => t.stop()); } catch (e) {} return; } /* fenêtre fermée (ou rouverte) pendant la demande d'autorisation */
    flux = f;
    const v = ov.querySelector("video"); v.srcObject = flux;
    try { await v.play(); } catch (e) {}
    /* lampe, si le téléphone la propose */
    try { const tr = flux.getVideoTracks()[0], cap = tr.getCapabilities ? tr.getCapabilities() : {}; if (cap.torch) { const b = ov.querySelector(".lvl"); let on = false; b.hidden = false; b.onclick = async () => { on = !on; try { await tr.applyConstraints({ advanced: [{ torch: on }] }); b.classList.toggle("on", on); } catch (e) {} }; } } catch (e) {}
    reprendre();
  };

  function reprendre() {
    if (!ov) return;
    lectures = []; arret = false; compte = 0;
    ov.querySelector(".lvr").innerHTML = ""; ov.classList.remove("trouve");
    ov.querySelector(".lvs").textContent = "Lecture en cours…";
    clearTimeout(boucle); boucle = setTimeout(lire, 300);
  }
  /* image du cadre (au centre de la vidéo telle qu'elle est affichée) → canvas réduit → lecture */
  function lire() {
    if (!ov || arret) return;
    const v = ov.querySelector("video"), cadre = ov.querySelector(".lvcadre");
    if (!v.videoWidth) { boucle = setTimeout(lire, 300); return; }
    const R = v.getBoundingClientRect(), C = cadre.getBoundingClientRect();
    /* object-fit: cover : correspondance écran → pixels de la vidéo */
    const k = Math.max(R.width / v.videoWidth, R.height / v.videoHeight), ox = (v.videoWidth * k - R.width) / 2, oy = (v.videoHeight * k - R.height) / 2;
    const sx = (C.left - R.left + ox) / k, sy = (C.top - R.top + oy) / k, sw = C.width / k, sh = C.height / k;
    const W = Math.min(420, Math.round(sw)), H = Math.max(20, Math.round(sh * W / sw));
    const cv = document.createElement("canvas"); cv.width = W; cv.height = H;
    let r = { texte: "", score: 0 };
    try { cv.getContext("2d").drawImage(v, sx, sy, sw, sh, 0, 0, W, H); r = lire7seg(cv); } catch (e) {}
    compte++;
    let code = "";
    if (r.texte && r.score >= 0.75) { const vs = variantes(r.texte.replace(/[?.]/g, "")); code = vs.find(x => fiches(x).length) || ""; }
    lectures.push(code); if (lectures.length > 5) lectures.shift();
    const n = code ? lectures.filter(x => x === code).length : 0;
    const st = ov.querySelector(".lvs");
    if (code && n >= 3) return trouve(code);
    st.textContent = code ? `Lecture : ${code.toUpperCase()}… ne bougez plus` : compte > 40 ? "Toujours rien : rapprochez-vous, évitez les reflets, ou utilisez le mode photo (afficheurs à texte)." : "Lecture en cours…";
    boucle = setTimeout(lire, 250);
  }
  function trouve(code) {
    arret = true; ov.classList.add("trouve");
    try { if (navigator.vibrate) navigator.vibrate(60); } catch (e) {}
    const L = fiches(code), r = ov.querySelector(".lvr"), st = ov.querySelector(".lvs");
    st.innerHTML = `Code lu : <b class="lvc">${esc(code.toUpperCase())}</b>`;
    r.innerHTML = (L.length === 1 ? `<p class="lvo">Ouverture de la fiche…</p>` : `<p class="lvo">${L.length} fiches ont ce code : choisissez.</p>`) +
      `<div class="list">${L.slice(0, 8).map((x, i) => `<button class="row" data-i="${i}"><span class="badge" style="--c:${x.m.couleur}">${esc(x.m.nom)}</span><b>${esc(x.x.code)} · ${esc(x.x.titre)}</b><small>${esc(x.c.nom)}</small></button>`).join("")}</div>
      <div class="sga"><button class="mini lvno">Ce n'est pas le bon code</button><button class="mini lvtape">Taper le code</button></div>`;
    r.querySelectorAll(".row").forEach(b => b.onclick = () => ouvrir(L[+b.dataset.i]));
    r.querySelector(".lvno").onclick = () => { clearTimeout(boucle); reprendre(); };
    r.querySelector(".lvtape").onclick = () => { clearTimeout(boucle); fermer(false); try { sessionStorage.setItem("aff-carte", recente()); } catch (e) {} allerA("#/scan/afficheur"); };
    if (L.length === 1) boucle = setTimeout(() => ouvrir(L[0]), 1500);
  }
  /* remplace l'étape ajoutée à l'ouverture : le bouton retour ramène ensuite à la page d'avant la caméra */
  const allerA = h => { if (history.state && history.state.lv) location.replace(location.pathname + location.search + h); else go(h); };
  function ouvrir(x) { clearTimeout(boucle); fermer(false); allerA(lien(x)); }
  function couper() { try { if (flux) flux.getTracks().forEach(t => t.stop()); } catch (e) {} flux = null; }
  const echap = e => { if (e.key === "Escape") fermer(); };
  function fermer(retour) {
    clearTimeout(boucle); arret = true; couper();
    if (!ov) return;
    ov.remove(); ov = null; document.removeEventListener("keydown", echap);
    try { const q = document.getElementById("qcam"); if (q && retour !== false) q.focus(); } catch (e) {}
    if (retour !== false) try { if (history.state && history.state.lv) history.back(); } catch (e) {}
  }
  addEventListener("popstate", () => fermer(false));
  addEventListener("hashchange", () => fermer(false));
  document.addEventListener("visibilitychange", () => { if (document.visibilityState !== "visible") fermer(); }); /* caméra coupée si l'appli passe en arrière-plan */
  window.LIVE = { variantes };
})();

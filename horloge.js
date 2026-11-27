/* Simulateur d'horloge programmable Theben : #/hor (choix), #/hor/top2 (TR 641/642/644 top2, RC), #/hor/top3 (TR 641/642/644 top3 BLE RC).
   Même principe que le simulateur de carte : l'appareil de la photo, ses 4 touches (MENU ◀ ▶ OK), un écran à segments qui réagit comme le vrai.
   Les menus, libellés et procédures viennent des notices Theben de l'appli (top2 : 36 p. ; top3 : notice 307658 01). Ce que la notice ne décrit
   pas n'est pas simulé et l'écran l'affiche (« NON SIMULÉ »). Horloge virtuelle : on peut accélérer le temps pour voir les sorties commuter. */
(function () {
  const J = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"], J2 = ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];
  const MOD = {
    top2: { nom: "TR 641 / 642 / 644 top2 (et RC)", court: "TR 642 top2", fid: "theben-tr64x-top2", img: "horloge/top2.webp", iw: 460, ih: 670, lcd: [71, 243, 297, 157],
      bg: "#ee8a3a", bgOff: "#a7906f", ink: "#1b0f05", btn: [[87, 461], [174, 462], [262, 461], [349, 462]], br: 17, yr: 4, W: 14, TX: { w: 17, h: 24, g: 4, max: 14 } },
    top3: { nom: "TR 641 / 642 / 644 top3 BLE RC", court: "TR 642 top3 BLE RC", fid: "theben-tr64x-top3", img: "horloge/top3.webp", iw: 440, ih: 600, lcd: [92, 217, 158, 123],
      bg: "#62b3df", bgOff: "#8fa7b0", ink: "#0d1620", btn: [[94, 391], [145, 390], [196, 391], [246, 391]], br: 12.5, yr: 2, W: 12, TX: { w: 9, h: 20, g: 3, max: 12 } }
  };
  const VILLES = { PARIS: [48.86, 2.35], LYON: [45.76, 4.84], MARSEILLE: [43.3, 5.37], STRASBOURG: [48.58, 7.75], METZ: [49.12, 6.18], BORDEAUX: [44.84, -0.58], LILLE: [50.63, 3.06], NANTES: [47.22, -1.55], TOULOUSE: [43.6, 1.44], NICE: [43.7, 7.26] };
  const st = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };

  /* ---------- police à segments (14 segments) ---------- */
  const G = { A: "abcefgG", B: "abcdGil", C: "adef", D: "abcdil", E: "adefgG", F: "aefgG", G: "acdefG", H: "bcefgG", I: "adil", J: "bcde", K: "efgjm", L: "def", M: "bcefhj", N: "bcefhm", O: "abcdef", P: "abefgG", Q: "abcdefm", R: "abefgGm", S: "acdfgG", T: "ail", U: "bcdef", V: "efjk", W: "bcefkm", X: "hjkm", Y: "hjl", Z: "adjk",
    0: "abcdef", 1: "bc", 2: "abdegG", 3: "abcdgG", 4: "bcfgG", 5: "acdfgG", 6: "acdefgG", 7: "abc", 8: "abcdefgG", 9: "abcdfgG", "-": "gG", "+": "gGil", "/": "jk", "_": "d", "<": "jm", ">": "hk", "=": "dgG", "?": "abGl" };
  const ALL = "abcdefgGhijklm", cache = {};
  function segs(w, h, t) {
    const k = w + "|" + h + "|" + t; if (cache[k]) return cache[k];
    const p = t * .35, m = h / 2, c = w / 2, s = {
      a: [p, t / 2, w - p, t / 2], d: [p, h - t / 2, w - p, h - t / 2], g: [p, m, c - t / 3, m], G: [c + t / 3, m, w - p, m],
      b: [w - t / 2, p, w - t / 2, m - t / 3], c: [w - t / 2, m + t / 3, w - t / 2, h - p], f: [t / 2, p, t / 2, m - t / 3], e: [t / 2, m + t / 3, t / 2, h - p],
      i: [c, t, c, m - t / 2], l: [c, m + t / 2, c, h - t], h: [t, t, c - t / 2, m - t / 2], j: [w - t, t, c + t / 2, m - t / 2], k: [t, h - t, c - t / 2, m + t / 2], m: [w - t, h - t, c + t / 2, m + t / 2] };
    return cache[k] = s;
  }
  const clean = s => String(s).toUpperCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/’/g, "'");
  /* texte à segments ; hidden = [début, fin[ caractères masqués (clignotement) ; ghost = segments éteints visibles */
  function txt(s, x, y, w, h, o) {
    o = o || {}; s = clean(s); const t = o.t || Math.max(1.6, h * .11), gp = o.g != null ? o.g : Math.max(2, w * .22), sg = segs(w, h, t); let lit = "", gh = "", dots = "", cx = x;
    for (let i = 0; i < s.length; i++) {
      const ch = s[i], hid = o.hide && i >= o.hide[0] && i < o.hide[1];
      if (ch === ":") { const r = t * .7; if (!hid) dots += `<rect x="${cx + w * .3}" y="${y + h * .28}" width="${r * 1.2}" height="${r * 1.2}"/><rect x="${cx + w * .3}" y="${y + h * .66}" width="${r * 1.2}" height="${r * 1.2}"/>`; cx += w * .55 + gp; continue; }
      if (ch === ".") { if (!hid) dots += `<rect x="${cx}" y="${y + h - t * 1.3}" width="${t * 1.3}" height="${t * 1.3}"/>`; cx += t * 1.6 + gp; continue; }
      if (ch === "'" || ch === ",") { cx += t * 1.6 + gp; continue; }
      if (ch === " ") { cx += w * .6 + gp; continue; }
      const on = hid ? "" : (G[ch] || ""); let a = "", b = "";
      for (const q of ALL) { const v = sg[q], path = `M${(cx + v[0]).toFixed(1)} ${(y + v[1]).toFixed(1)}L${(cx + v[2]).toFixed(1)} ${(y + v[3]).toFixed(1)}`; if (on.includes(q)) a += path; else if (o.ghost) b += path; }
      lit += a; gh += b; cx += w + gp;
    }
    return `<g${o.slant === false ? "" : ` transform="translate(${(0.0875 * (y + h)).toFixed(2)} 0) skewX(-5)"`}><path d="${gh}" stroke-opacity=".05" stroke-width="${t}"/><path d="${lit}" stroke-width="${t}"/><g stroke="none" fill="${M ? M.ink : "#000"}">${dots}</g></g>`;
  }

  /* ---------- calendrier et soleil ---------- */
  const U = Date.UTC, dayStart = T => Math.floor(T / 864e5) * 864e5;
  const P = T => { const d = new Date(T); return { y: d.getUTCFullYear(), mo: d.getUTCMonth() + 1, d: d.getUTCDate(), h: d.getUTCHours(), mi: d.getUTCMinutes(), s: d.getUTCSeconds(), wd: (d.getUTCDay() + 6) % 7 }; };
  const p2 = n => String(n).padStart(2, "0"), hm = s => p2(Math.floor(s / 3600)) + ":" + p2(Math.floor(s % 3600 / 60)), mmss = s => p2(Math.floor(s / 60)) + ":" + p2(s % 60);
  const lastSun = (y, m) => { const d = new Date(U(y, m, 0)); return d.getUTCDate() - d.getUTCDay(); };
  const nthSun = (y, m, n) => { const w = new Date(U(y, m - 1, 1)).getUTCDay(); return 1 + (7 - w) % 7 + (n - 1) * 7; };
  const DSTR = { eur: { n: "EUROPE DE L'OUEST", a: y => U(y, 2, lastSun(y, 3), 2), b: y => U(y, 9, lastSun(y, 10), 3) }, eure: { n: "EUROPE DE L'EST", a: y => U(y, 2, lastSun(y, 3), 3), b: y => U(y, 9, lastSun(y, 10), 4) },
    usa: { n: "ÉTÉ HIVER USA", a: y => U(y, 2, nthSun(y, 3, 2), 2), b: y => U(y, 10, nthSun(y, 11, 1), 2) }, can: { n: "ÉTÉ HIVER CANADA", a: y => U(y, 2, nthSun(y, 3, 2), 2), b: y => U(y, 10, nthSun(y, 11, 1), 2) } };
  function sunTimes(y, mo, d, lat, lon, tz) {
    const N = (U(y, mo - 1, d) - U(y, 0, 0)) / 864e5, g = 2 * Math.PI / 365 * (N - 1);
    const eq = 229.18 * (.000075 + .001868 * Math.cos(g) - .032077 * Math.sin(g) - .014615 * Math.cos(2 * g) - .040849 * Math.sin(2 * g));
    const de = .006918 - .399912 * Math.cos(g) + .070257 * Math.sin(g) - .006758 * Math.cos(2 * g) + .000907 * Math.sin(2 * g) - .002697 * Math.cos(3 * g) + .00148 * Math.sin(3 * g), r = lat * Math.PI / 180;
    const c = Math.cos(90.833 * Math.PI / 180) / (Math.cos(r) * Math.cos(de)) - Math.tan(r) * Math.tan(de); if (c > 1 || c < -1) return null;
    const hd = Math.acos(c) * 180 / Math.PI; return [(720 - 4 * (lon + hd) - eq + tz * 60) * 60, (720 - 4 * (lon - hd) - eq + tz * 60) * 60];
  }

  /* ---------- appareil ---------- */
  function neuf(mod, n) {
    const c = () => ({ p0: [], sp: {}, astro: null, man: null, perm: null, vac: null, tmp: null, force: 0, ext: "inactif", hrs: 0 });
    return { v: 1, cfg: false, T: mod === "top3" ? realNow() : U(2010, 0, 1, 0, 0, 0), lang: "FR", fmtD: "std", h24: true, dst: "none", pin: null, back: "min", bt: true, paques: "std", ch: Array.from({ length: n }, c), cfgKey: 0 };
  }
  const realNow = () => { const d = new Date(); return U(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()); };

  let M = null, D = null, N = 2, KEY = "", stk = [], speed = 1, paused = false, tick = null, lastKey = 0, ver = 0, blinkOn = true, msgT = 0, info = "", barCache = {}, dayCache = {};
  const L = (a, b) => (M.id === "top2" ? a : b);
  const sv = () => st.set(KEY, D);
  const nbEv = () => D.ch.reduce((s, c) => s + c.p0.length + Object.values(c.sp).reduce((q, x) => q + x.ev.length, 0), 0);

  /* ---------- moteur : état des sorties ---------- */
  function inRange(r, T) {
    const f = (o, y) => U(y, o.m - 1, o.d, o.h);
    if (r.k === "fix") return T >= U(r.a.y, r.a.m - 1, r.a.d, r.a.h) && T < U(r.b.y, r.b.m - 1, r.b.d, r.b.h);
    const y = P(T).y, a = f(r.a, y), b = f(r.b, y); return b <= a ? (T >= a || T < b) : (T >= a && T < b);
  }
  function evState(evs, T) {
    const day = dayStart(T); let bt = -1 / 0, on = false;
    for (let k = 0; k <= 7; k++) { const d0 = day - k * 864e5, wd = P(d0).wd; for (const e of evs) if (e.k === "sw" && e.days.includes(wd)) { const et = d0 + e.t * 1000; if (et <= T && et > bt) { bt = et; on = e.on; } } }
    for (let k = 0; k <= 1; k++) { const d0 = day - k * 864e5, wd = P(d0).wd; for (const e of evs) { if (!e.days.includes(wd)) continue; const s = d0 + e.t * 1000;
      if (e.k === "pu" && T >= s && T < s + e.dur * 1000) on = true;
      if (e.k === "cy") { const end = e.end == null ? d0 + 864e5 : d0 + e.end * 1000; if (T >= s && T < end && (T - s) % ((e.dur + e.pause) * 1000) < e.dur * 1000) on = true; } } }
    return on;
  }
  function summer(T) { const r = DSTR[D.dst]; if (!r) return false; const y = P(T).y, a = r.a(y), b = r.b(y); return T >= a + 36e5 && T < b; }
  function astroSt(c, T) {
    const a = c.astro, p = P(T), v = VILLES[a.ville] || VILLES.PARIS, s = sunTimes(p.y, p.mo, p.d, v[0], v[1], 1 + (summer(T) ? 1 : 0)); if (!s) return false;
    const t = (T - dayStart(T)) / 1000, ri = s[0] + a.om * 60, se = s[1] + a.os * 60;
    return a.mode === "soir" ? (t >= se || t < ri) : (t >= ri && t < se);
  }
  function spOf(c, T) { if (c.force) return c.force; for (let n = 16; n >= 1; n--) { const s = c.sp[n]; if (s && s.rg.some(r => inRange(r, T))) return n; } return 0; }
  function sched(c, T) {
    const n = spOf(c, T); if (n === 15) return true; if (n === 16) return false;
    if (c.astro && c.astro.on) return astroSt(c, T);
    return n ? evState(c.sp[n] ? c.sp[n].ev : [], T) : evState(c.p0, T);
  }
  function stateOf(i, T) {
    const c = D.ch[i]; if (c.perm) return c.perm === "on"; if (c.vac && c.vac.on && T >= c.vac.a && T < c.vac.b) return false;
    if (c.tmp && T < c.tmp.until) return c.tmp.s; const s = sched(c, T); return c.man ? !c.man.base : s;
  }
  function dayBar(i, T) { const k = i + "|" + dayStart(T) + "|" + ver; if (dayCache[k]) return dayCache[k]; const c = D.ch[i], d0 = dayStart(T), o = []; for (let q = 0; q < 96; q++) o.push(sched(c, d0 + q * 9e5 + 45e4)); dayCache = {}; return dayCache[k] = o; }

  /* ---------- écran ---------- */
  const fmtDate = (T, full) => { const p = P(T), y = full ? String(p.y) : p2(p.y % 100); return D.fmtD === "eg" ? `${p2(p.mo)} ${p2(p.d)} ${y}` : D.fmtD === "iso" ? `${y} ${p2(p.mo)} ${p2(p.d)}` : `${p2(p.d)} ${p2(p.mo)} ${y}`; };
  const fmtTime = T => { const p = P(T); if (D.h24) return p2(p.h) + ":" + p2(p.mi); const h = p.h % 12 || 12; return p2(h) + ":" + p2(p.mi); };
  function lcdNormal() {
    const T = D.T, p = P(T), g = M.id === "top2", o = [];
    if (g) {
      o.push(txt(J[p.wd], 36, 21, 17, 21, { g: 4 })); o.push(txt(fmtDate(T, true), 36, 47, 14, 21, { g: 4 }));
      D.ch.forEach((c, i) => o.push(txt(`C${i + 1} ${stateOf(i, T) ? "ON" : "OFF"}`, 7, 74 + i * (N > 2 ? 12 : 15), 7, N > 2 ? 10 : 12, { g: 2 })));
      o.push(txt(fmtTime(T), 129, 74, 20, 45, { g: 4, ghost: true, t: 5.4 })); o.push(txt(p2(p.s), 245, 74, 12, 16, { g: 3, ghost: true }));
      if (M.rc && blinkOn) o.push(`<g stroke-width="2" fill="none"><path d="M284 22v-12M279 12a7 7 0 0 1 0 8M289 12a7 7 0 0 0 0 8M275 9a12 12 0 0 1 0 14M293 9a12 12 0 0 0 0 14"/></g>`);
      for (let d = 0; d < 7; d++) { const x = 107 + d * 19; o.push(`<path d="M${x} 132h13" stroke-width="2"/>`); if (d === p.wd) o.push(txt(String(d + 1), x + 3, 117, 8, 12, { g: 1 })); }
    } else {
      const ch = D.ch, bar = dayBar(0, T); let r = ""; for (let q = 0; q < 96; q++) if (bar[q]) r += `<rect x="${8 + q * 1.49}" y="3" width="1.2" height="11"/>`;
      o.push(`<g stroke="none" fill="${M.ink}">${r}</g><g stroke="none" fill="${M.ink}"><rect x="8" y="2" width="1.3" height="13"/>${[44, 79, 115].map(x => `<rect x="${x}" y="1" width="2.4" height="2.4"/>`).join("")}<rect x="150" y="2" width="1.6" height="13"/></g>`);
      o.push(txt(fmtDate(T, false), 3, 18, 13, 19, { g: 4 }));
      o.push(txt(ch.map((c, i) => `C${i + 1} ${stateOf(i, T) ? "ON" : "OFF"}`).join(" "), 4, 43, 5, 9, { g: 2, t: 1.1 }));
      o.push(txt(fmtTime(T), 18, 58, 19, 34, { g: 4, ghost: true, t: 4 })); o.push(txt(p2(p.s), 117, 58, 10, 15, { g: 3, ghost: true }));
      for (let d = 0; d < 7; d++) { const x = 17 + d * 14.5; o.push(`<path d="M${x} 108h10" stroke-width="1.6"/>`); if (d === p.wd) o.push(txt(String(d + 1), x + 1.5, 94, 7, 11, { g: 1 })); }
    }
    return o.join("");
  }
  const KY = (esc, l, r, ok) => [esc, l, r, ok];
  function lcdMenu(v) {
    const g = M.id === "top2", X = M.TX, o = [], ls = v.lines.slice(0, 3);
    ls.forEach((s, i) => { const hide = blinkOn || !v.blink || v.blink[0] !== i ? null : [v.blink[1], v.blink[2]]; o.push(txt(s, 6, g ? 8 + i * 33 : 5 + i * 27, X.w, g ? 24 : 20, { g: X.g, hide, ghost: false })); });
    const kx = g ? [30, 112, 196, 282] : [14, 53, 105, 144], kk = v.keys || ["ESC", "<", ">", "OK"];
    kk.forEach((k, i) => { if (!k) return; if (k === "<" || k === ">") { const ax = kx[i], ay = g ? 134 : 106, th = g ? 14 : 11, tw = g ? 9 : 7; o.push(`<path d="${k === "<" ? `M${ax - tw / 2} ${ay + th / 2}L${ax + tw / 2} ${ay}L${ax + tw / 2} ${ay + th}Z` : `M${ax + tw / 2} ${ay + th / 2}L${ax - tw / 2} ${ay}L${ax - tw / 2} ${ay + th}Z`}" fill="${M.ink}" stroke="none"/>`); return; } const w = g ? 9 : 7, h = g ? 13 : 10, len = k.length * (w + 2); o.push(txt(k, kx[i] - len / 2, g ? 134 : 106, w, h, { g: 2, slant: false, t: g ? 1.5 : 1.2 })); });
    return o.join("");
  }
  function draw() {
    const el = document.getElementById("hor-lcd"); if (!el || !M) return;
    const off = D.back === "min" && Date.now() - lastKey > 6e4 && !stk.length && D.cfg;
    const s = cur(); let inner;
    if (!D.cfg && !stk.length) inner = lcdNormal(); else inner = s ? lcdMenu(s.view()) : lcdNormal();
    const [, , w, h] = M.lcd;
    el.style.background = off ? M.bgOff : M.bg;
    const v0 = !D.cfg && !stk.length ? null : cur() && cur().view(); el.setAttribute("role", "img"); el.setAttribute("aria-label", v0 ? v0.lines.join(" / ") : fmtDate(D.T, true) + " " + fmtTime(D.T));
    el.innerHTML = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" fill="none" stroke="${M.ink}" style="opacity:${off ? .55 : 1}">${inner}</svg>`;
    const sec = document.getElementById("hor-out"); if (sec) sec.innerHTML = outHtml();
  }
  const cur = () => stk[stk.length - 1];
  const push = s => { stk.push(s); draw(); };
  const back = n => { stk.length = n; draw(); };
  function msg(lines, then, ms) { const n = stk.length; const s = { lines: [].concat(lines), view() { return { lines: this.lines, keys: ["", "", "", ""] }; }, esc() {}, ok() {}, l() {}, r() {} }; push(s); clearTimeout(msgT); msgT = setTimeout(() => { if (cur() === s) { stk.length = n; if (then) then(); draw(); } }, ms || 1100); }
  const nosim = (what) => msg([what || "", "NON SIMULE"], null, 1700);

  /* éléments d'écran réutilisables */
  function menu(items, o) {
    o = o || {}; const s = { i: o.i || 0, items, keys: ["ESC", "<", ">", "OK"],
      view() { const it = s.items[s.i], t = typeof it.t === "function" ? it.t() : it.t; return { lines: [].concat(t), keys: s.keys }; },
      l() { s.i = (s.i + s.items.length - 1) % s.items.length; draw(); }, r() { s.i = (s.i + 1) % s.items.length; draw(); }, ok() { const it = s.items[s.i]; if (it.f) it.f(s.i, s); }, esc() { if (o.esc) o.esc(); else back(stk.length - 1); } };
    return s;
  }
  /* saisie d'un nombre : fmt(v) → texte ; clignote sur la dernière ligne (ou sur [a,b[ de celle-ci) */
  function num(title, v, mn, mx, fmt, next, o) {
    o = o || {}; const s = { v, keys: ["ESC", "-", "+", "OK"], view() { const f = fmt(s.v); return { lines: [].concat(title, f), blink: [[].concat(title).length, o.blink ? o.blink[0] : 0, o.blink ? o.blink[1] : 99], keys: s.keys }; },
      l() { s.v = s.v <= mn ? mx : s.v - (o.step || 1); draw(); }, r() { s.v = s.v >= mx ? mn : s.v + (o.step || 1); draw(); }, ok() { next(s.v); }, esc() { back(stk.length - 1); } };
    push(s);
  }
  const askHM = (t1, t2, def, sec, done) => num(t1, Math.floor(def / 3600), 0, 23, v => `${p2(v)}:${p2(Math.floor(def % 3600 / 60))}` + (sec ? ":" + p2(def % 60) : ""), h => num(t2, Math.floor(def % 3600 / 60), 0, 59, v => `${p2(h)}:${p2(v)}` + (sec ? ":" + p2(def % 60) : ""), mi => sec ? num(L(["SECONDES", "RÉGLER"], "SECONDE"), def % 60, 0, 59, v => `${p2(h)}:${p2(mi)}:${p2(v)}`, se => done(h * 3600 + mi * 60 + se)) : done(h * 3600 + mi * 60), { blink: [3, 5] }), { blink: [0, 2] });
  const askMS = (title, def, done) => num(L(["DURÉE IMPULSION", "EN MINUTES"], ["DUREE IMPULS", "MINUTES"]), Math.floor(def / 60), 0, 59, v => `${p2(v)}:${p2(def % 60)}`, mi => num(L(["DURÉE IMPULSION", "EN SECONDES"], ["DUREE IMPULS", "SECONDES"]), def % 60, 0, 59, v => `${p2(mi)}:${p2(v)}`, se => done(mi * 60 + se)));
  const askDate = (title, d, f, withY, done) => {
    const nw = (k, v, mn, mx, next) => num(title ? [title, k] : [k], v, mn, mx, x => f(k, x), next);
    const run = () => withY ? nw("ANNEE", d.y, 2000, 2099, y => { d.y = y; nw("MOIS", d.m, 1, 12, m => { d.m = m; nw("JOUR", d.d, 1, 31, j => { d.d = j; done(d); }); }); }) : nw("MOIS", d.m, 1, 12, m => { d.m = m; nw("JOUR", d.d, 1, 31, j => { d.d = j; done(d); }); });
    run();
  };

  /* choix des jours : tous / un jour + copier */
  function pickDays(done) {
    const items = [{ t: "TOUS LES JOURS", f: () => done([0, 1, 2, 3, 4, 5, 6]) }].concat(J.map((j, d) => ({ t: j, f: () => {
      push(menu([{ t: "COPIER", f: () => copier(d) }, { t: L("MÉMORISER", "ENREGIST"), f: () => done([d]) }]));
    } })));
    function copier(d0) {
      const sel = [d0], rest = []; for (let k = 1; k < 7; k++) rest.push((d0 + k) % 7);
      const its = rest.map(d => ({ t: L(["AVEC", J[d]], ["AJOUTER", J[d]]), f: (i, s) => { if (!sel.includes(d)) sel.push(d); s.i = Math.min(s.i + 1, s.items.length - 1); draw(); } })); its.push({ t: L("MÉMORISER", "ENREGIST"), f: () => done(sel.slice().sort()) });
      push(menu(its));
    }
    push(menu(items));
  }
  const dayTxt = days => days.length === 7 ? "TOUS LES JOURS" : (days.length === 5 && days.every((d, i) => d === i)) ? "LU-VE" : days.map(d => J2[d]).join(" ");

  /* création d'un horaire dans un programme (liste ev) */
  function nouveau(ev, after) {
    const n0 = stk.length, fin = () => { sv(); ver++; msg(L("ENREGISTRÉ", "ENREGIST"), () => back(n0)); };
    if (nbEv() >= 800) return msg(["MEMOIRE", "PLEINE"]);
    const save = e => pickDays(days => { e.days = days; ev.push(e); fin(); });
    const mk = on => askHM(L(["HEURES", "RÉGLER"], "HEURE"), L(["MINUTES", "RÉGLER"], "MINUTE"), on ? 7.5 * 3600 : 12 * 3600, false, t => save({ k: "sw", on, t }));
    const typ = [{ t: L(["HEURE DE", "COMMUTATION"], "COMMUTAT"), f: () => push(menu([{ t: "MARCHE", f: () => mk(true) }, { t: "ARRÊT", f: () => mk(false) }])) },
      { t: "IMPULSION", f: () => push(menu([{ t: L("MARCHE", "ON"), f: () => askHM(L(["HEURES", "RÉGLER"], "HEURE"), L(["MINUTES", "RÉGLER"], "MINUTE"), 8 * 3600 + 300, true, t => askMS("", 5, du => save({ k: "pu", t, dur: du || 1 }))) }])) },
      { t: "CYCLE", f: () => askHM(L(["DÉBUT", "CYCLE"], "DEB CYCLE"), L(["MINUTES", "RÉGLER"], "MINUTE"), 8 * 3600, false, t => askMS("", 20, du => askMS("", 880, pa => push(menu([{ t: "SANS FIN", f: () => save({ k: "cy", t, dur: du || 1, pause: pa, end: null }) }, { t: "AVEC FIN", f: () => askHM(L(["FIN", "CYCLE"], "FIN CYCLE"), L(["MINUTES", "RÉGLER"], "MINUTE"), 20.5 * 3600, false, en => save({ k: "cy", t, dur: du || 1, pause: pa, end: en })) }]))))) }];
    push(menu(typ));
  }
  const descr = e => e.k === "sw" ? [dayTxt(e.days), (e.on ? "MARCHE " : "ARRET ") + hm(e.t)] : e.k === "pu" ? [dayTxt(e.days), "IMP " + hm(e.t) + ":" + p2(e.t % 60) + " " + e.dur + "S"] : [dayTxt(e.days), "CYCLE " + hm(e.t) + (e.end == null ? "" : "-" + hm(e.end))];
  function verifier(ev) {
    if (!ev.length) return msg(L(["AUCUN", "HORAIRE"], "AUCUN"));
    const lst = () => ev.slice().sort((a, b) => a.days[0] - b.days[0] || a.t - b.t);
    let k = 0; const n0 = stk.length;
    const show = () => { const e = lst()[k]; const s = menu([{ t: L(["SUIVANT(E)"], "SUIVANT(E)"), f: () => { k++; if (k >= lst().length) return msg("FIN", () => back(n0)); back(n0); show(); } }, { t: "MODIFIER", f: () => modif(e) }, { t: "EFFACER", f: () => efface(e) }]); s.pre = descr(e); const v = s.view; s.view = () => { const o = v(); o.lines = s.pre.concat(o.lines).slice(0, 3); return o; }; s.esc = () => back(n0); push(s); };
    const choix = (e, verbe, go) => { if (e.days.length === 1) return go(null); push(menu([{ t: verbe + " BLOC", f: () => go(null) }].concat(e.days.map(d => ({ t: verbe + " " + J[d], f: () => go(d) }))))); };
    const efface = e => choix(e, "EFFACER", d => { if (d == null) ev.splice(ev.indexOf(e), 1); else e.days = e.days.filter(x => x !== d); sv(); ver++; msg("EFFACE", () => back(n0)); });
    const modif = e => choix(e, "MODIFIER", d => askHM(L(["MODIFIER", "HEURES"], "MODIFIER"), L(["MODIFIER", "MINUTES"], "MINUTE"), e.t, e.k === "pu", t => { if (d == null) e.t = t; else { e.days = e.days.filter(x => x !== d); ev.push(Object.assign({}, e, { days: [d], t })); } sv(); ver++; msg(L("ENREGISTRÉ", "ENREGIST"), () => back(n0)); }));
    show();
  }
  function effacerTout(ev, nom) { const b = stk.length; push(menu([{ t: L(["CONFIRMER", "EFFACER"], "CONFIRMER"), f: () => push(menu([{ t: "EFFACER", f: () => { ev.length = 0; sv(); ver++; msg("EFFACE", () => back(b)); } }])) }])); }
  function programme(c, nom, ev, o) {
    const n0 = stk.length, it = [];
    it.push({ t: o && o.sp ? L(["NOUVELLES", "COMMUTATIONS"], ["NOUVELLES", "COMMUTAT."]) : L("NOUVEAU", "CREER"), f: () => { if (M.id === "top3") msg(["MEM LIBRE", String(800 - nbEv())], () => nouveau(ev), 900); else nouveau(ev); } });
    it.push({ t: L(["VÉRIFIER-", "MODIFIER-", "EFFACER"], ["VERIFIER", "MODIFIER", "EFFACER"]), f: () => verifier(ev) });
    it.push({ t: L([nom, "TOUT EFFACER"].slice(0, 2), [nom, "TOUT EFFACER"]), f: () => effacerTout(ev, nom) });
    push(menu(it));
  }
  const dateTxt = o => `${p2(o.d)}.${p2(o.m)}` + (o.y ? "." + o.y : "") + " " + p2(o.h) + "H";
  function plages(c, n) {
    const s = c.sp[n] = c.sp[n] || { ev: [], rg: [] }, it = [];
    it.push({ t: L(["NOUVELLE", "DATE"], ["NOUVELLE", "DATE"]), f: () => push(menu([{ t: "DATE FIXE", f: () => nouvelleDate(s, "fix") }, { t: ["CHAQUE ANNEE"], f: () => nouvelleDate(s, "an") },
      { t: L(["REGLE DE", "PAQUES"], ["JOURS AV/AP", "PAQUES"]), f: () => nosim("PAQUES") }, { t: L(["NOUVEL AN", "CHINOIS"], ["NOUVEL AN", "CHINOIS"]), f: () => nosim("NOUVEL AN CHINOIS") }, { t: ["DATE SERIE"], f: () => nosim("DATE SERIE") }, { t: L(["JOUR DE", "SEMAINE"], ["JOUR SEMAINE"]), f: () => nosim("JOUR DE SEMAINE") }])) });
    it.push({ t: L(["VÉRIFIER", "DATES"], ["VERIFIER", "DATES"]), f: () => { if (!s.rg.length) return msg("AUCUNE DATE"); let k = 0; const n0 = stk.length; const show = () => { const r = s.rg[k]; const m = menu([{ t: "SUIVANT(E)", f: () => { k++; if (k >= s.rg.length) return msg("FIN", () => back(n0)); back(n0); show(); } }, { t: "EFFACER", f: () => { s.rg.splice(k, 1); sv(); ver++; msg("EFFACE", () => back(n0)); } }]); const v = m.view; m.view = () => { const o = v(); o.lines = [r.k === "fix" ? "DATE FIXE" : "CHAQUE ANNEE", "DE " + dateTxt(Object.assign({ y: r.a.y }, r.a)), "A  " + dateTxt(Object.assign({ y: r.b.y }, r.b))]; return o; }; m.esc = () => back(n0); push(m); }; show(); } });
    push(menu(it));
  }
  function nouvelleDate(s, k) {
    const n0 = stk.length, now = P(D.T), a = { y: now.y, m: now.mo, d: now.d, h: 0 }, b = { y: now.y, m: now.mo, d: now.d, h: 0 }, fy = k === "fix";
    const f = (t, x) => t === "ANNEE" ? String(x) : p2(x);
    const hh = (o, tit, nxt) => num([tit, "HEURE"], o.h, 0, 23, v => p2(v) + ":00", v => { o.h = v; nxt(); });
    const fin = () => { s.rg.push({ k, a: Object.assign({}, a), b: Object.assign({}, b) }); sv(); ver++; msg(L("ENREGISTRÉ", "ENREGIST"), () => back(n0 - 1)); };
    askDate("DEBUT", a, f, fy, () => hh(a, "DEBUT", () => askDate("FIN", b, f, fy, () => hh(b, "FIN", fin))));
  }
  function specialMenu(c) {
    const it = []; for (let n = 1; n <= 16; n++) it.push({ t: L(["PROGRAMME", "SPECIAL P" + n], ["PROG SPECIAL", n + " P" + n]), f: () => {
      if (n >= 15) return plages(c, n);
      push(menu([{ t: L(["COMMUTATIONS", "P" + n], ["COMMUTATIONS", "P" + n]), f: () => programme(c, "P" + n, (c.sp[n] = c.sp[n] || { ev: [], rg: [] }).ev, { sp: true }) }, { t: L(["PLAGES DE", "DATES P" + n], ["PLAGES DE", "DATES P" + n]), f: () => plages(c, n) }]));
    } });
    return it;
  }
  function chanMenu(c) {
    if (c.astro && c.astro.on) return msg(["CANAL ASTRO", "VOIR OPTIONS"], null, 1500);
    const b0 = stk.length, it = [{ t: L(["PROGRAMME", "STANDARD P0"], ["STANDARD", "P0"]), f: () => programme(c, "P0", c.p0) }];
    if (M.id === "top2") it.push({ t: L(["PROGRAMME", "SPECIAL"], ""), f: () => push(menu(specialMenu(c))) }); else specialMenu(c).forEach(x => it.push(x));
    if (M.id === "top3") it.push({ t: "TOUT EFFACER", f: () => push(menu([{ t: "CONFIRMER", f: () => { c.p0.length = 0; c.sp = {}; sv(); ver++; msg("EFFACE", () => back(b0)); } }])) }, { t: "FIN", f: () => back(b0) });
    push(menu(it));
  }
  function pickCh(title, go) {
    const list = D.ch.map((c, i) => ({ t: L(`C${i + 1}`, `CANAL C${i + 1}`), f: () => go(c, i) }));
    if (M.id === "top2") push(menu([{ t: ["CANAL", "SELECTIONNER"], f: () => push(menu(list)) }])); else push(menu(list));
  }

  /* ---------- menus ---------- */
  function simulation() {
    const base = stk.length;
    pickCh("", (c, i) => { const n = P(D.T), d = { y: n.y, m: n.mo, d: n.d };
      askDate("DEBUT", d, (k, x) => String(x), true, () => {
        const t0 = U(d.y, d.m - 1, d.d), out = []; let prev = sched(c, t0 - 3e4);
        for (let t = t0; t < t0 + 31 * 864e5 && out.length < 40; t += 3e4) { const s = sched(c, t); if (s !== prev) { out.push([t, s]); prev = s; } }
        if (!out.length) return msg(["AUCUNE", "COMMUTATION"]);
        let k = 0; const n0 = stk.length, show = () => { const [t, s] = out[k], q = P(t); const m = menu([{ t: "SUIVANT(E)", f: () => { k++; if (k >= out.length) return msg("FIN", () => back(base)); back(n0); show(); } }]); const v = m.view; m.view = () => { const o = v(); o.lines = [`${p2(q.d)}.${p2(q.mo)}.${q.y}`, `${hm((t - dayStart(t)) / 1000)} C${i + 1} ${s ? "MARCHE" : "ARRET"}`, "SUIVANT(E)"]; return o; }; m.esc = () => back(base); push(m); }; show();
      }); });
  }
  const FD = [["std", "FORMAT STANDARD", "31.12.2010"], ["eg", "FORMAT EGLISE", "12/31/2010"], ["iso", "FORMAT ISO", "2010-12-31"]];
  function heureDate() {
    const sd = f => { D.fmtD = f; sv(); msg(L("ENREGISTRÉ", "ENREGIST"), () => back(2)); };
    const it = [{ t: "HEURE", f: () => askHM(L(["RÉGLER", "HEURE"], ["REGLER", "HEURE"]), L(["RÉGLER", "MINUTE"], ["REGLER", "MINUTE"]), (D.T - dayStart(D.T)) / 1000, false, s => { D.T = dayStart(D.T) + s * 1000; sv(); msg(L("MÉMORISÉ", "ENREGIST"), () => back(2)); }) },
      { t: "DATE", f: () => { const p = P(D.T), d = { y: p.y, m: p.mo, d: p.d }; askDate("", d, (k, x) => String(x), true, () => { D.T = U(d.y, d.m - 1, d.d) + (D.T - dayStart(D.T)); sv(); ver++; msg(L("ENREGISTRÉ", "ENREGIST"), () => back(2)); }); } },
      { t: L(["RÈGLE D'ÉTÉ/", "D'HIVER"], ["ETE/HIVER"]), f: () => regleEte(() => back(2)) },
      { t: L(["NUMÉRO JOUR", "DE SEMAINE"], ["JOUR SEM"]), f: () => msg([J[P(D.T).wd], "JOUR " + (P(D.T).wd + 1)], null, 1500) },
      { t: L(["FORMAT DATE"], ["DAT FORM"]), f: () => push(menu(FD.map(([k, n, ex]) => ({ t: [n, ex], f: () => sd(k) })))) },
      { t: L(["FORMAT HEURE"], ["24h/12 h"]), f: () => push(menu([{ t: "24 HEURES", f: () => { D.h24 = true; sv(); msg(L("ENREGISTRÉ", "ENREGIST"), () => back(2)); } }, { t: "12 HEURES", f: () => { D.h24 = false; sv(); msg(L("ENREGISTRÉ", "ENREGIST"), () => back(2)); } }])) },
      { t: L(["REGLE DE", "PAQUES"], ["REGLE", "PAQUES"]), f: () => push(menu([{ t: "STANDARD", f: () => { D.paques = "std"; sv(); msg("ENREGISTRE", () => back(2)); } }, { t: ["EGLISE", "ORTHODOXE"], f: () => { D.paques = "orth"; sv(); msg("ENREGISTRE", () => back(2)); } }])) },
      { t: "FIN", f: () => back(1) }];
    push(menu(it));
  }
  function regleEte(done) {
    const set = k => { D.dst = k; sv(); msg(L("ENREGISTRÉ", "ENREGIST"), done); };
    push(menu([{ t: L(["ÉTÉ/HIVER", "EUROPE DE", "L'OUEST"], ["ETE/HIVER", "EUROPE DE", "L'OUEST"]), f: () => set("eur") }, { t: ["ETE/HIVER", "EUROPE DE", "L'EST"], f: () => set("eure") }, { t: ["ETE HIVER", "CANADA"], f: () => set("can") }, { t: ["ETE HIVER", "USA"], f: () => set("usa") },
      { t: ["ETE HIVER", "NOUVELLE-ZELANDE"], f: () => nosim("NOUVELLE-ZELANDE") }, { t: ["REGLE PROPRE", "ETE-HIVER"], f: () => nosim("REGLE PROPRE") }, { t: L(["PAS DE COMM", "ÉTÉ-HIVER"], ["PAS DE COMM", "ETE-HIVER"]), f: () => set("none") }]));
  }
  function manuel() {
    const base = stk.length;
    pickCh("", (c, i) => {
      const ok = () => { sv(); msg(L("ENREGISTRÉ", "ENREGIST"), () => back(base)); };
      const it = [{ t: ["PERMANENT", "ON"], f: () => { c.perm = "on"; c.man = null; ok(); } }, { t: ["PERMANENT", "OFF"], f: () => { c.perm = "off"; c.man = null; ok(); } },
        { t: ["MANUEL ON", "ou MANUEL OFF"].slice(0, 2), f: () => { c.perm = null; c.man = c.man ? null : { base: sched(c, D.T) }; ok(); } },
        { t: L(["TEMPORISATION", "COMMUTATION", "COURTE"], ["TEMPORIS"]), f: () => push(menu([{ t: "MARCHE", f: () => tempo(c, true, base) }, { t: "ARRÊT", f: () => tempo(c, false, base) }])) },
        { t: L(["VACANCES"], ["PROG VAC"]), f: () => push(menu([{ t: "ARRÊT", f: () => { c.vac = null; ok(); } }, { t: "MARCHE", f: () => vac(c, base) }])) },
        { t: L(["ALÉATOIRE"], ["ALEATOIRE"]), f: () => push(menu([{ t: ["ALEATOIRE 1", "INTERRUPTIONS"], f: () => nosim("ALEATOIRE 1") }, { t: ["ALEATOIRE 2", "DECALAGES"], f: () => nosim("ALEATOIRE 2") }])) },
        { t: L(["ACTIVER LE", "PROGRAMME", "SPÉCIAL"], ["ACTIVER PROG", "SPECIAL"]), f: () => push(menu([{ t: ["PROG SPECIAL", "ARRET"], f: () => { c.force = 0; ok(); } }].concat(Array.from({ length: 16 }, (_, k) => ({ t: ["PROG SPECIAL", "P" + (k + 1)], f: () => { c.force = k + 1; c.sp[k + 1] = c.sp[k + 1] || { ev: [], rg: [] }; ver++; ok(); } }))))) }];
      push(menu(it));
    });
  }
  function tempo(c, s, base) { askHM(L(["TEMPORISATION", "HEURES"], "TEMPO H"), L(["TEMPORISATION", "MINUTES"], "TEMPO MIN"), 3600, true, d => { c.tmp = { s, until: D.T + d * 1000 }; c.perm = null; sv(); msg(L("ENREGISTRÉ", "ENREGIST"), () => back(base)); }); }
  function vac(c, base) {
    const p = P(D.T), a = { y: p.y, m: p.mo, d: p.d }, b = { y: p.y, m: p.mo, d: p.d + 7 > 28 ? 28 : p.d + 7 };
    askDate(L("DÉBUT VACANCES", "VAC DEBUT"), a, (k, x) => String(x), true, () => askDate(L("FIN VACANCES", "VAC FIN"), b, (k, x) => String(x), true, () => { c.vac = { on: true, a: U(a.y, a.m - 1, a.d), b: U(b.y, b.m - 1, b.d + 1) }; sv(); msg(L("ENREGISTRÉ", "ENREGIST"), () => back(base)); }));
  }
  function optAstro() {
    const base = stk.length;
    pickCh("", (c, i) => {
      if (!c.astro || !c.astro.on) return push(menu([{ t: L(["PROGRAMME", "HORAIRES", "ACTIF"], ["PROG HORAIRE", "ACTIF"]), f: () => push(menu([{ t: L(["PASSER SUR", "PROG ASTRO"], ["PASSER SUR", "ASTRO"]), f: () => push(menu([{ t: ["EFFACER", "LES HORAIRES"], f: () => push(menu([{ t: "CONFIRMER", f: () => { c.p0.length = 0; c.astro = { on: true, ville: "PARIS", om: 0, os: 0, mode: "soir" }; sv(); ver++; msg("ASTRO ACTIF", () => back(base)); } }])) }])) }])) }]));
      const a = c.astro, nv = stk.length + 1;
      push(menu([{ t: L(["HEURES", "ASTRO"], ["HEURE ASTRO"]), f: () => { const p = P(D.T), s = sunTimes(p.y, p.mo, p.d, VILLES[a.ville][0], VILLES[a.ville][1], 1 + (summer(D.T) ? 1 : 0)); msg(s ? [a.ville, "LEVER " + hm(s[0] + a.om * 60), "COUCHER " + hm(s[1] + a.os * 60)] : ["PAS DE SOLEIL"], null, 3000); } },
        { t: "OFFSET", f: () => num(L(["OFFSET", "LE MATIN"], ["DECALAGE", "MATIN"]), a.om, -120, 120, v => (v < 0 ? "-" : "+") + hm(Math.abs(v) * 60), v => { a.om = v; num(L(["OFFSET", "LE SOIR"], ["DECALAGE", "SOIR"]), a.os, -120, 120, w => (w < 0 ? "-" : "+") + hm(Math.abs(w) * 60), w => { a.os = w; sv(); msg("ENREGISTRE", () => back(nv)); }, { step: 5 }); }, { step: 5 }) },
        { t: L(["MODE ASTRO"], ["MODE ASTRO"]), f: () => push(menu([{ t: ["SOIR MARCHE", "MATIN ARRET"], f: () => { a.mode = "soir"; sv(); msg("ENREGISTRE", () => back(nv)); } }, { t: ["SOIR ARRET", "MATIN MARCHE"], f: () => { a.mode = "matin"; sv(); msg("ENREGISTRE", () => back(nv)); } }, { t: ["IMPULSION", "ASTRO"], f: () => nosim("IMPULSION ASTRO") }])) },
        { t: L(["POSITION"], ["POSITION"]), f: () => push(menu([{ t: ["PAYS", "FRANCE"], f: () => push(menu(Object.keys(VILLES).map(v => ({ t: ["VILLE", v], f: () => { a.ville = v; sv(); msg("ENREGISTRE", () => back(nv)); } })))) }, { t: "COORDONNEES", f: () => nosim("COORDONNEES") }])) },
        { t: L(["COMMUTATION", "PROGRAMME", "HORAIRE"], ["PASSER SUR", "HORAIRES"]), f: () => push(menu([{ t: ["EFFACER", "ASTRO"], f: () => push(menu([{ t: "CONFIRMER", f: () => { c.astro = null; sv(); ver++; msg("PROG HORAIRE", () => back(base)); } }])) }])) },
        { t: "FIN", f: () => back(base) }]));
    });
  }
  function optExt() {
    const base = stk.length;
    pickCh("", (c, i) => { const set = k => { c.ext = k; sv(); msg(L("ENREGISTRÉ", "ENREGIST"), () => back(base)); };
      push(menu([{ t: "INACTIF", f: () => set("inactif") }, { t: ["BOUTON", "POUSSOIR"], f: () => push(menu([{ t: "MANUEL", f: () => set("bp-manuel") }, { t: ["HORLOGE", "A REBOURS"], f: () => nosim("HORLOGE A REBOURS") }, { t: ["ECLAIRAGE", "D'ESCALIER"], f: () => nosim("ESCALIER") }])) },
        { t: ["INTERRUPTEUR"], f: () => push(menu([{ t: "MARCHE PERM", f: () => set("sw-on") }, { t: "ARRET PERM", f: () => set("sw-off") }, { t: ["PROGRAMME", "SPECIAL"], f: () => nosim("PROG SPECIAL") }])) }].concat(M.id === "top3" ? [{ t: ["ARRET CENTRAL"], f: () => nosim("ARRET CENTRAL") }] : [])));
    });
  }
  function optHeures() { const base = stk.length; pickCh("", (c, i) => push(menu([{ t: L(["AFFICHER HEURES", "FONCTIONNEMENT"], ["AFFICHER", "HEURES"]), f: () => msg([`CANAL ${i + 1}`, String(Math.floor(c.hrs / 3600)).padStart(3, "0") + " " + (c.hrs % 3600 / 3600).toFixed(1).replace(".", ",").slice(-3) + " H"], null, 2500) }, { t: ["EFFACER", "HEURES"], f: () => { c.hrs = 0; sv(); msg("EFFACE", () => back(base)); } }]))); }
  function optPin() {
    const base = stk.length;
    const set = () => num(L(["NOUVEAU PIN"], ["NOUV PIN"]), 0, 0, 9999, v => p2(Math.floor(v / 100)) + " " + p2(v % 100), v => { D.pin = v; sv(); msg(L("ENREGISTRÉ", "ENREGIST"), () => back(base)); }, { step: 1 });
    push(menu([{ t: "SANS PIN", f: () => { if (D.pin == null) return msg("SANS PIN"); num("PIN ACTUEL", 0, 0, 9999, v => p2(Math.floor(v / 100)) + " " + p2(v % 100), v => { if (v !== D.pin) return msg("PIN FAUX"); D.pin = null; sv(); msg("SANS PIN", () => back(base)); }); } },
      { t: "AVEC PIN", f: () => D.pin == null ? set() : num("PIN ACTUEL", 0, 0, 9999, v => p2(Math.floor(v / 100)) + " " + p2(v % 100), v => v === D.pin ? set() : msg("PIN FAUX")) }]));
  }
  function usine() {
    const reset = keep => { const prev = D; D = neuf(M.id, N); if (keep) D.ch.forEach((c, i) => { c.p0 = prev.ch[i].p0; c.sp = prev.ch[i].sp; }); D.cfg = keep; D.T = prev.T; if (keep) { D.dst = prev.dst; D.fmtD = prev.fmtD; D.h24 = prev.h24; } ver++; sv(); stk = []; draw(); };
    if (M.id === "top3") push(menu([{ t: ["GARDER", "PROGRAMMES"], f: () => reset(true) }, { t: ["EFFACER", "PROGRAMMES"], f: () => { reset(false); } }]));
    else push(menu([{ t: ["REGLAGES", "D'USINE"], f: () => push(menu([{ t: "CONFIRMER", f: () => reset(false) }])) }]));
  }
  function options() {
    const it = [{ t: "ASTRO", f: optAstro }, { t: L(["ENTRÉE", "EXTERNE"], ["ENTR EXT"]), f: optExt }, { t: L(["COMPTEUR", "D'HEURES DE", "FONCTIONNEMENT"], ["COMPT. HEUR-", "ACTI"]), f: optHeures }, { t: "LANGUE", f: () => push(menu([{ t: "FRANCAIS", f: () => msg("FRANCAIS") }, { t: "ENGLISH", f: () => nosim("SEUL LE FRANCAIS") }, { t: "DEUTSCH", f: () => nosim("SEUL LE FRANCAIS") }, { t: "ESPANOL", f: () => nosim("SEUL LE FRANCAIS") }, { t: "ITALIANO", f: () => nosim("SEUL LE FRANCAIS") }, { t: "NEDERLANDS", f: () => nosim("SEUL LE FRANCAIS") }])) }, { t: "PIN", f: optPin }];
    if (M.id === "top2") it.push({ t: L(["RÉTRO-", "ÉCLAIRAGE"], ""), f: () => push(menu([{ t: ["OFF APRES", "1 MINUTE"], f: () => { D.back = "min"; sv(); msg("ENREGISTRE", () => back(2)); } }, { t: "TOUJOURS ON", f: () => { D.back = "on"; sv(); msg("ENREGISTRE", () => back(2)); } }])) });
    if (M.id === "top2" && M.rc) it.push({ t: L(["MODULE", "D'EXTENSION EM4"], ""), f: () => nosim("MODULE EM4") });
    if (M.id === "top3") it.push({ t: "BLUETOOTH", f: () => push(menu([{ t: "ACTIVER", f: () => { D.bt = true; sv(); msg("BLUETOOTH ON", () => back(2)); } }, { t: "DESACTIVER", f: () => { D.bt = false; sv(); msg("BLUETOOTH OFF", () => back(2)); } }])) }, { t: "OBELISK", f: () => nosim("OBELISK") });
    it.push({ t: L(["REGLAGES USINE"], ["REGLAGES USINE"]), f: usine }, { t: "INFO", f: () => msg([M.court.toUpperCase(), M.rc ? "AVEC RC" : "SANS RC"], null, 2200) }, { t: "FIN", f: () => back(1) });
    push(menu(it));
  }
  function mainMenu() {
    const it = [{ t: "PROGRAMME", f: () => pickCh("", (c, i) => chanMenu(c)) }, { t: "SIMULATION", f: simulation }, { t: L("HEURE/DATE", "DAT/HEURE"), f: heureDate }, { t: "MANUEL", f: manuel }, { t: "OPTIONS", f: options }, { t: "FIN", f: () => { stk = []; draw(); } }];
    stk = [menu(it, { esc: () => { stk = []; draw(); } })]; draw();
  }
  /* mise en service : langue, date, heure, règle été/hiver */
  function miseEnService() {
    const fin = () => { D.cfg = true; sv(); stk = []; draw(); };
    const p = P(D.T), d = { y: p.y, m: p.mo, d: p.d }, heure = () => askHM(L(["RÉGLER", "HEURE"], "HEURE"), L(["RÉGLER", "MINUTE"], "MINUTE"), (D.T - dayStart(D.T)) / 1000, false, s => { D.T = U(d.y, d.m - 1, d.d) + s * 1000; sv(); regleEte(fin); });
    const fh = () => push(menu([{ t: ["FORMAT HEURE", "24 HEURES"], f: () => { D.h24 = true; heure(); } }, { t: ["FORMAT HEURE", "12 HEURES"], f: () => { D.h24 = false; heure(); } }]));
    const fd = () => push(menu(FD.map(([k, n, ex]) => ({ t: [n, ex], f: () => { D.fmtD = k; askDate("", d, (kk, x) => String(x), true, fh); } }))));
    const lg = M.id === "top2" ? [{ t: "FRANCAIS", f: fd }, { t: "ENGLISH", f: fd }, { t: "DEUTSCH", f: fd }, { t: "ESPANOL", f: fd }, { t: "ITALIANO", f: fd }, { t: "NEDERLANDS", f: fd }] : [{ t: "ALLEMAND", f: () => regleEte(fin) }, { t: "ESPANOL", f: () => regleEte(fin) }, { t: "FRANCAIS", f: () => regleEte(fin) }, { t: "ENGLISH", f: () => regleEte(fin) }];
    stk = []; push(menu(lg, { i: M.id === "top2" ? 0 : 2, esc: () => {} }));
  }

  /* ---------- touches ---------- */
  function press(k) {
    if (!D) return;
    if (D.back === "min" && D.cfg && !stk.length && Date.now() - lastKey > 6e4) { lastKey = Date.now(); return draw(); } /* le premier appui rallume l'écran */
    lastKey = Date.now();
    const s = cur();
    if (!D.cfg && !s) return miseEnService();
    if (!s) {
      if (k === 0) { if (D.pin != null) return num("PIN", 0, 0, 9999, v => p2(Math.floor(v / 100)) + " " + p2(v % 100), v => { if (v === D.pin) mainMenu(); else msg("PIN FAUX"); }); return mainMenu(); }
      if (M.id === "top2" && (k === 1 || k === 2) && D.ch[k - 1]) return chanTap(k - 1);
      return draw();
    }
    s[["esc", "l", "r", "ok"][k]]();
  }
  function chanTap(i) { const c = D.ch[i]; if (c.perm) c.perm = null; else c.man = c.man ? null : { base: sched(c, D.T) }; sv(); draw(); }
  function chanHold(i) { const c = D.ch[i]; c.perm = c.perm ? null : (stateOf(i, D.T) ? "off" : "on"); c.man = null; sv(); draw(); }

  /* ---------- vue ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function outHtml() {
    return D.ch.map((c, i) => { const on = stateOf(i, D.T), tag = c.perm ? " · permanent" : c.man ? " · manuel" : c.vac && c.vac.on && D.T >= c.vac.a && D.T < c.vac.b ? " · vacances" : c.tmp && D.T < c.tmp.until ? " · temporisation" : "";
      const b = [1, 4, 7, 10][i];
      return `<div class="hor-ch ${on ? "on" : ""}"><b>C${i + 1}</b><span>${on ? "contact " + b + "–" + (b + 1) + " fermé" : "contact " + b + "–" + (b + 2) + " fermé"}</span><small>${on ? "MARCHE" : "ARRÊT"}${tag}</small></div>`;
    }).join("");
  }
  const EXO = [
    { t: "Éclairage C1 du lundi au vendredi de 7:30 à 12:00 (exemple de la notice).", ch: (s, i) => { const L2 = (d, h, m) => U(2026, 10, 23 + d, h, m); return [["mardi 9:00 : C1 en marche", s(0, L2(1, 9, 0)) === true], ["mardi 13:00 : C1 à l'arrêt", s(0, L2(1, 13, 0)) === false], ["samedi 9:00 : C1 à l'arrêt", s(0, L2(5, 9, 0)) === false]]; } },
    { t: "Impulsion C1 le lundi à 8:05 pendant 5 secondes (exemple de la notice).", ch: (s) => { const L2 = (d, h, m, q) => U(2026, 10, 23 + d, h, m, q); return [["lundi 8:05:02 : C1 en marche", s(0, L2(0, 8, 5, 2)) === true], ["lundi 8:05:10 : C1 à l'arrêt", s(0, L2(0, 8, 5, 10)) === false], ["mardi 8:05:02 : C1 à l'arrêt", s(0, L2(1, 8, 5, 2)) === false]]; } },
    { t: "C1 marche tous les jours de 7:00 à 22:00 ; programme spécial P16 (arrêt permanent), chaque année, du 24.12 à 18:00 au 26.12 à 23:00.", ch: (s) => [["10 décembre 12:00 : C1 en marche", s(0, U(2026, 11, 10, 12, 0)) === true], ["25 décembre 12:00 : C1 à l'arrêt", s(0, U(2026, 11, 25, 12, 0)) === false], ["27 décembre 12:00 : C1 en marche", s(0, U(2026, 11, 27, 12, 0)) === true]] }
  ];
  function verifier3(k) {
    const sc = (i, T) => !!D.ch[i] && sched(D.ch[i], T); const r = EXO[k].ch(sc), ok = r.every(x => x[1]);
    return `<p class="hor-res ${ok ? "ok" : "ko"}"><b>${ok ? "✓ Réussi" : "✗ Pas encore"}</b></p>` + r.map(x => `<div class="hor-ex ${x[1] ? "ok" : "ko"}">${x[1] ? "✓" : "✗"} ${esc(x[0])}</div>`).join("");
  }
  function css() {
    if (document.getElementById("hor-css")) return;
    const s = document.createElement("style"); s.id = "hor-css"; s.textContent = `
.hor-wrap{max-width:560px;margin:0 auto}
.hor-dev{position:relative;width:min(100%,calc((100svh - 230px)*var(--ar,.7)));margin:0 auto;user-select:none;-webkit-user-select:none;touch-action:manipulation;border-radius:14px;overflow:hidden;background:#fff}
.hor-dev img{display:block;width:100%;height:auto;pointer-events:none}
.hor-lcd{position:absolute;border-radius:6px;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(0,0,0,.18)}
.hor-lcd:after{content:"";position:absolute;inset:0;background:linear-gradient(172deg,rgba(255,255,255,.22) 0 8%,transparent 30%,transparent 78%,rgba(255,255,255,.12) 100%);pointer-events:none}
.hor-k{position:absolute;border-radius:50%;cursor:pointer;-webkit-tap-highlight-color:transparent;background:transparent;border:0;padding:0}
.hor-k:active,.hor-k.dn{background:rgba(0,0,0,.28)}
.hor-k:focus-visible{outline:2px solid #e07b00}
.hor-tools{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:10px 0}
.hor-tools .mini{min-height:36px}
.hor-tools .mini.on{background:var(--brand);color:#fff;border-color:var(--brand)}
.hor-outs{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;margin:8px 0}
.hor-ch{border:1px solid var(--line);border-radius:10px;padding:8px 10px;background:var(--card);display:grid;gap:2px}
.hor-ch.on{border-color:#1a8f3c;background:rgba(26,143,60,.10)}
.hor-ch b{font-size:16px}.hor-ch span{font-size:13px}.hor-ch small{opacity:.75}
.hor-clock{font-variant-numeric:tabular-nums;font-size:13px;opacity:.8}
.hor-ex{padding:3px 0;font-size:14px}.hor-ex.ok{color:#1a8f3c}.hor-ex.ko{color:#c4161c}
.hor-res{margin:6px 0 2px}.hor-res.ok{color:#1a8f3c}.hor-res.ko{color:#c4161c}
.hor-q{border:1px solid var(--line);border-radius:10px;padding:10px;margin:8px 0;background:var(--card)}
.hor-q p{margin:0 0 6px}
.hor-kb{font-size:12px;opacity:.7;margin:4px 0}`;
    document.head.appendChild(s);
  }
  function key(e) { if (!M || !document.getElementById("hor-lcd") || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return; const k = { ArrowLeft: 1, ArrowRight: 2, Enter: 3, Escape: 0, m: 0, M: 0 }[e.key]; if (k == null) return; e.preventDefault(); press(k); }
  addEventListener("keydown", key);
  function chBtns() {
    const g = M.id;
    return D.ch.map((c, i) => { const lab = g === "top3" && N < 4 ? (i === 0 ? "◀+▶ (C1)" : "▶+OK (C2)") : "C" + (i + 1) + (g === "top2" && N <= 2 ? " (touche " + (i + 1) + ")" : ""); return `<button class="mini" data-ch="${i}">${lab}</button>`; }).join("");
  }
  function bind(root) {
    const lcd = M.lcd, W = M.iw, H = M.ih, pc = (v, t) => (v / t * 100).toFixed(3) + "%";
    const dev = root.querySelector(".hor-dev"); const l = root.querySelector("#hor-lcd");
    l.style.left = pc(lcd[0], W); l.style.top = pc(lcd[1], H); l.style.width = pc(lcd[2], W); l.style.height = pc(lcd[3], H);
    M.btn.forEach(([x, y], i) => { const b = document.createElement("button"); b.className = "hor-k"; b.setAttribute("aria-label", ["MENU", "Gauche", "Droite", "OK"][i]); const r = M.br + 2; b.style.cssText = `left:${pc(x - r, W)};top:${pc(y - r, H)};width:${pc(2 * r, W)};height:${pc(2 * r, H)}`;
      let t0 = 0, hold = 0; const dn = ev => { ev.preventDefault(); b.classList.add("dn"); t0 = Date.now(); clearTimeout(hold); if (M.id === "top2" && !cur() && D.cfg && (i === 1 || i === 2) && D.ch[i - 1]) hold = setTimeout(() => { hold = -1; chanHold(i - 1); }, 2000); };
      const up = ev => { b.classList.remove("dn"); if (hold === -1) { hold = 0; return; } clearTimeout(hold); hold = 0; if (t0) { t0 = 0; press(i); } };
      b.addEventListener("pointerdown", dn); b.addEventListener("pointerup", up); b.addEventListener("pointerleave", () => { b.classList.remove("dn"); clearTimeout(hold); t0 = 0; }); b.addEventListener("pointercancel", () => { b.classList.remove("dn"); clearTimeout(hold); t0 = 0; });
      b.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " ") ev.stopPropagation(); });
      dev.appendChild(b); });
    root.querySelectorAll("[data-ch]").forEach(b => { const i = +b.dataset.ch; let h = 0, long = false; const dn = () => { long = false; h = setTimeout(() => { long = true; chanHold(i); }, 2000); }; const up = () => { clearTimeout(h); if (!long) chanTap(i); }; b.addEventListener("pointerdown", dn); b.addEventListener("pointerup", up); b.addEventListener("pointerleave", () => clearTimeout(h)); });
  }
  function start(id, n) {
    M = Object.assign({}, MOD[id], { id, rc: true }); N = n; KEY = `hor-${id}-${n}`; D = st.get(KEY, null); if (!D || D.v !== 1 || D.ch.length !== n) D = neuf(id, n);
    stk = []; ver++; dayCache = {}; speed = 1; paused = false; lastKey = Date.now();
    D.ch.forEach(c => { c.sp = c.sp || {}; });
  }
  function loop() {
    clearInterval(tick); let last = Date.now(), n = 0;
    tick = setInterval(() => {
      if (!document.getElementById("hor-lcd")) { clearInterval(tick); sv(); return; }
      const now = Date.now(), dt = now - last; last = now; n++; blinkOn = (n % 2) === 0;
      if (!paused) { const T0 = D.T; D.T += dt * speed; const r = DSTR[D.dst]; if (r) { const y = P(D.T).y, a = r.a(y), b = r.b(y); if (T0 < a && D.T >= a) D.T += 36e5; else if (T0 < b && D.T >= b) D.T -= 36e5; }
        D.ch.forEach((c, i) => { if (c.man && sched(c, D.T) !== c.man.base) c.man = null; if (c.tmp && D.T >= c.tmp.until) c.tmp = null; if (stateOf(i, D.T)) c.hrs += dt * speed / 1000; if (c.ext === "sw-on" && false) c.perm = "on"; }); }
      if (n % 12 === 0) sv();
      draw(); const ck = document.getElementById("hor-clock"); if (ck) { const p = P(D.T); ck.textContent = `${J[p.wd].toLowerCase()} ${p2(p.d)}/${p2(p.mo)}/${p.y} ${p2(p.h)}:${p2(p.mi)}:${p2(p.s)}${summer(D.T) ? " (heure d'été)" : ""}`; }
    }, 250);
  }
  const SPD = [[1, "×1"], [60, "×60 (1 min/s)"], [600, "×600"], [3600, "×3600 (1 h/s)"], [86400, "1 jour/s"]];
  window.viewHor = function (id, nStr) {
    css();
    if (!MOD[id]) {
      setHead("Simulateur d'horloge", true); clearInterval(tick); M = null;
      app.innerHTML = `<p class="note"><b>Formation.</b> L'horloge Theben de la photo, avec ses 4 touches et son écran : programmer, vérifier, régler la date et l'heure, les menus MANUEL et OPTIONS, comme sur la vraie. On peut accélérer le temps pour voir les sorties commuter. Ce que la notice ne décrit pas n'est pas simulé.</p><div class="list">` +
        Object.keys(MOD).map(k => `<button class="row" onclick="go('#/hor/${k}')"><span class="badge" style="--c:#0a5da8">Theben</span><b>${esc(MOD[k].nom)}</b><small>${k === "top2" ? "Écran orange · 1, 2 ou 4 canaux · versions RC" : "Écran bleu · Bluetooth · 1, 2 ou 4 canaux · RC"}</small></button>`).join("") + `</div>`;
      return;
    }
    const n = [1, 2, 4].includes(+nStr) ? +nStr : (st.get("hor-n", 2) || 2); st.set("hor-n", n);
    start(id, n); setHead("Simulateur · " + MOD[id].court, true);
    const m = M;
    app.innerHTML = `<div class="hor-wrap">
<div class="hor-tools"><span>Canaux :</span>${[1, 2, 4].map(k => `<button class="mini ${k === n ? "on" : ""}" onclick="go('#/hor/${id}/${k}')">${k}</button>`).join("")}<span class="hor-clock" id="hor-clock"></span></div>
<div class="hor-dev" style="--ar:${m.iw / m.ih}"><img src="${m.img}" alt="${esc(m.court)}" draggable="false"><div class="hor-lcd" id="hor-lcd"></div></div>
<p class="note"><b>Formation.</b> Touches de l'appareil (ou clavier : ← → Entrée Échap). Appuyez sur une touche pour commencer${id === "top2" ? "" : ""}. ${id === "top2" ? "Touches ◀ 1 et ▶ 2 : appui bref = manuel, 2 s = permanent." : "Pour le manuel et le permanent, utilisez les boutons sous l'appareil."}</p>
<div class="hor-tools"><span>Temps :</span>${SPD.map(([v, t]) => `<button class="mini ${v === 1 ? "on" : ""}" data-sp="${v}">${t}</button>`).join("")}<button class="mini" id="hor-pause">⏸</button></div>
<div class="hor-tools"><span>Touches canal :</span>${chBtns()}${id === "top3" ? `<button class="mini" id="hor-4k">4 touches (réinit.)</button>` : ""}</div>
<div class="hor-outs" id="hor-out"></div>
<h2>Exercices</h2>${EXO.map((e, k) => `<div class="hor-q"><p>${k + 1}. ${esc(e.t)}</p><button class="mini" data-ex="${k}">Vérifier mon programme</button><div id="hor-r${k}"></div></div>`).join("")}
<p class="hor-kb">Les exercices lisent le programme de l'appareil simulé (non enregistrés sur le compte). Programmes et réglages sont gardés sur cet appareil.</p>
<div class="hor-tools"><button class="mini" id="hor-reset">Remise à zéro de l'appareil</button><button class="mini" onclick="go('#/a/${m.fid}')">Fiche et notice ${esc(m.court)}</button></div></div>`;
    bind(app);
    app.querySelectorAll("[data-sp]").forEach(b => b.onclick = () => { speed = +b.dataset.sp; app.querySelectorAll("[data-sp]").forEach(x => x.classList.toggle("on", x === b)); });
    app.querySelector("#hor-pause").onclick = e => { paused = !paused; e.target.classList.toggle("on", paused); };
    app.querySelectorAll("[data-ex]").forEach(b => b.onclick = () => { document.getElementById("hor-r" + b.dataset.ex).innerHTML = verifier3(+b.dataset.ex); });
    app.querySelector("#hor-reset").onclick = () => { if (confirm("Remettre l'appareil à zéro (programmes, date et heure) ?")) { try { localStorage.removeItem(KEY); } catch (e) {} go("#/hor/" + id + "/" + n); location.reload(); } };
    const k4 = app.querySelector("#hor-4k"); if (k4) k4.onclick = () => { lastKey = Date.now(); if (D.cfg) usine(); };
    draw(); loop();
  };
})();

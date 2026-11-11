#!/usr/bin/env python3
"""Génère maj.js : date de dernière modification de chaque fiche (carte ou accessoire),
d'après l'historique git des lignes de data.js et acc.js. À relancer avant chaque publication
qui touche aux fiches :  python3 tools/maj-dates.py"""
import re, subprocess, json, datetime, os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
def dates(path):
    out = subprocess.run(["git", "blame", "--line-porcelain", path], capture_output=True, text=True, check=True).stdout
    return [int(m) for m in re.findall(r"^committer-time (\d+)$", out, re.M)]
def blocs(path, motif):
    lignes = open(path, encoding="utf-8").read().split("\n")
    deb = [(i, m.group(1)) for i, l in enumerate(lignes) for m in [re.match(motif, l)] if m]
    return [(idf, i, (deb[k + 1][0] if k + 1 < len(deb) else len(lignes))) for k, (i, idf) in enumerate(deb)]
res = {}
for path, motif in [("data.js", r'^\s*\{?\s*"?id"?:\s*"([a-z0-9-]+)"'), ("acc.js", r'^\s*\{?\s*"?id"?:\s*"([a-z0-9-]+)"')]:
    d = dates(path)
    for idf, a, b in blocs(path, motif):
        t = max(d[a:b] or [0])
        if t: res[idf] = max(res.get(idf, ""), datetime.datetime.fromtimestamp(t, datetime.timezone.utc).strftime("%Y-%m-%d"))
open("maj.js", "w", encoding="utf-8").write("/* Date de dernière modification de chaque fiche. Fichier généré : python3 tools/maj-dates.py */\nwindow.MAJ = " + json.dumps(res, ensure_ascii=False, sort_keys=True, separators=(",", ":")) + ";\n")
print(len(res), "fiches")

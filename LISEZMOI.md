# Diag'SAV — Espacs Automatisme (ex Dépannage SAV)

Appli web installable (PWA) : codes erreur, borniers et apprentissage de course par carte,
consultables **sans réseau** une fois ouverte une première fois.

## Mettre en ligne (GitHub Pages, gratuit)
1. Créer un dépôt GitHub (ex. `depannage-sav`) et y déposer tous les fichiers de ce dossier.
2. Settings → Pages → Branch `main`, dossier `/ (root)` → Save.
3. L'adresse s'affiche après une minute (`https://<compte>.github.io/depannage-sav/`).

L'HTTPS est obligatoire pour le mode hors ligne : GitHub Pages le fournit.

## Installer sur le téléphone du technicien (avec réseau, une seule fois)
- **iPhone** : ouvrir l'adresse dans Safari → Partager → « Sur l'écran d'accueil ».
- **Android** : ouvrir dans Chrome → menu ⋮ → « Installer l'application ».
Ouvrir l'appli une fois : tout est alors enregistré sur le téléphone.

## Ajouter ou corriger une fiche
- Tout le contenu est dans `data.js` (une entrée par carte : codes, bornier, afficheur, paramètres, apprentissage).
- Ajouter une entrée en haut de `CHANGELOG` (dans `data.js`) avec la date, les nouveautés et, dans `docs`, le nom des notices ajoutées : elles s'affichent dans Réglages.
- Après chaque modification : changer `DATA_VERSION` dans `data.js` **et** `VERSION` dans `sw.js`.
  Les téléphones affichent alors « Nouvelle version disponible — recharger » à la prochaine connexion.

## Sources
Chaque fiche indique la notice fabricant utilisée. En cas de doute, la notice livrée avec le matériel fait foi.

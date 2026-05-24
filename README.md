# Portfolio — Chakir Sayyouri

E-portfolio BUT2 Science des Données (parcours VCOD).
Stack : **React 18 + Vite + TypeScript**, animations CSS pures, zéro back-end (hébergement statique).
Identité visuelle : thème sombre « data console », accent vert-lime / cyan.

---

## 🚀 Démarrer (sur ta machine, dans VSCode)

```bash
npm install      # installe les dépendances
npm run dev      # serveur de dev -> http://localhost:5173
npm run build    # build de production dans /dist
npm run preview  # prévisualise le build
```

> ⚠️ Les dépendances ne sont **pas** incluses dans ce dossier (`node_modules` exclu).
> Lance `npm install` une première fois.

---

## 📁 Structure

```
portfolio/
├─ index.html              # point d'entrée + polices Google + meta SEO
├─ public/
│  ├─ favicon.svg
│  └─ cv/                  # ⬅️ DÉPOSE TES CV PDF ICI
├─ src/
│  ├─ data/content.ts      # ⬅️ TOUT TON CONTENU EST ICI (à éditer)
│  ├─ styles/global.css    # design system (couleurs, typo, variables)
│  ├─ hooks/useReveal.ts    # animation d'apparition au scroll
│  ├─ components/Navbar
│  ├─ sections/            # Hero, About, Parcours, Projects, Competences, Contact, Footer
│  └─ App.tsx
```

**Pour modifier le contenu, tu n'as quasiment qu'à éditer `src/data/content.ts`.**
La présentation est séparée des données : tu changes le texte, le design suit.

---

## ✅ Checklist à compléter (cherche « À COMPLÉTER » dans le code)

### 1. CV — FAIT ✓
- [x] CV FR à jour généré et placé dans `public/cv/Chakir_Sayyouri_FR.pdf`.
- [x] CV EN dans `public/cv/Chakir_Sayyouri_EN.pdf` (ton ancien, remplace-le si besoin).

### 2. Preuves de projets (`public/projects/`)
Chaque projet a un bouton « voir / télécharger » qui pointe vers un fichier de `public/projects/`.
Dépose les fichiers réels (voir `public/projects/README.txt`) :
- [ ] `powerbi-dashboard.pdf`, `integration-donnees.pdf`, `etude-economique.pdf`, `enquete-limesurvey.pdf`
- [x] `portfolio-v1/` (ton ancien site HTML, déjà en place).
- [ ] Projet freelance : mets les vrais liens (site + GitHub) dans `content.ts` (champ `assets`, `url: '#'`).

### 3. Détails des projets BUT2
Les projets sont pré-remplis avec des descriptions plausibles. Affine-les avec tes vraies infos
(cherche `todo: true` et `À COMPLÉTER` dans `content.ts`) :
- [ ] `integration-donnees`, `economie`, `portfolio-web` : vérifie outils, contexte, résultats.
- [ ] `powerbi-mediametrie` + `economie` : ce sont les 2 analyses réflexives. Complète les
      « difficultés » avec ton vécu réel.

### Récap des 6 réalisations (conforme aux consignes)
- **Pro** : centre de beauté (freelance) — factuel, sans mention BUT.
- **BUT2** : Power BI ★, intégration de données, étude économique ★, portfolio web.
- **BUT1** : enquête LimeSurvey.
- ★ = analyse réflexive détaillée (2 requises ✓).

---

## 🌐 Déploiement (gratuit)

Options simples pour un site Vite statique :
- **Netlify** ou **Vercel** : connecte ton repo GitHub, build command `npm run build`, dossier `dist`.
- **GitHub Pages** : décommente la ligne `base` dans `vite.config.ts` (mets le nom de ton repo), puis publie `dist`.

---

## 🎨 Personnaliser les couleurs

Tout est dans `src/styles/global.css`, section `:root`.
Change `--acc` (vert-lime) et `--acc-cyan` pour une autre teinte — le reste du site s'adapte automatiquement.

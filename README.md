# Portfolio — Chakir Sayyouri

Portfolio personnel — étudiant en BUT Science des Données (parcours VCOD).

Stack : React 18 + Vite + TypeScript, animations CSS, site statique sans back-end.

## Développement

```bash
npm install      # dépendances
npm run dev      # serveur de dev -> http://localhost:5173
npm run build    # build de production dans /dist
npm run preview  # prévisualisation du build
```

## Structure

```
portfolio/
├─ index.html
├─ public/
│  ├─ cv/                  # CV (PDF)
│  └─ projects/            # pièces jointes des réalisations
├─ src/
│  ├─ data/content.ts      # contenu du site (profil, parcours, projets…)
│  ├─ styles/global.css    # design system (couleurs, typo, variables)
│  ├─ hooks/useReveal.ts   # animation d'apparition au scroll
│  ├─ components/Navbar
│  ├─ sections/            # Hero, About, Parcours, Projects, Competences, Contact, Footer
│  └─ App.tsx
```

Le contenu est séparé de la présentation : il se modifie dans `src/data/content.ts`.

## Déploiement

Site Vite statique, déployable sur Netlify ou Vercel (build `npm run build`, dossier `dist`).
Pour un déploiement en sous-dossier (GitHub Pages projet), renseigner `base` dans `vite.config.ts`.

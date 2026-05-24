/* =========================================================================
   DONNÉES DU PORTFOLIO
   Toute modification de contenu se fait ici — la présentation est séparée.
   Les blocs marqués «  À COMPLÉTER » attendent tes infos réelles.
   ========================================================================= */

export const profile = {
  name: 'Chakir Sayyouri',
  role: 'Étudiant Data Science · futur Data Scientist',
  tagline: 'Je transforme la donnée brute en décisions claires.',
  location: 'Argenteuil (95) · Île-de-France',
  email: 'chakirsyy@outlook.fr',
  phone: '+33 6 50 86 23 51',
  linkedin: 'https://www.linkedin.com/in/chakir-sayyouri-5307701a9/',
  github: 'https://github.com/chakirsyy',
  // Place ton CV PDF dans /public et indique le nom de fichier ici :
  cvFr: '/cv/Chakir_Sayyouri_FR.pdf',
  cvEn: '/cv/Chakir_Sayyouri_EN.pdf',
  status: 'Étudiant en alternance · Data Operator chez Médiamétrie',
}

/* Petit pitch d'accueil (1-2 lignes, ton assertif) */
export const intro =
  "\u00c9tudiant en 2e ann\u00e9e de BUT Science des Donn\u00e9es (parcours VCOD) \u00e0 l\u2019IUT Paris Rives de Seine, " +
  "en alternance chez M\u00e9diam\u00e9trie. Je m\u2019int\u00e9resse \u00e0 l\u2019analyse, au traitement et \u00e0 la valorisation " +
  "de la donn\u00e9e, avec une vraie app\u00e9tence pour le d\u00e9veloppement d\u2019outils d\u00e9cisionnels."

export const about = {
  paragraphs: [
    "Je m\u2019appelle Chakir, j\u2019ai grandi avec deux moteurs : la rigueur logique des chiffres et la curiosit\u00e9 de comprendre ce qu\u2019ils racontent. Le BUT Science des Donn\u00e9es m\u2019a donn\u00e9 le cadre pour relier les deux : collecter, nettoyer, mod\u00e9liser, puis raconter une histoire claire \u00e0 partir d\u2019un jeu de donn\u00e9es.",
    "En alternance chez M\u00e9diam\u00e9trie, je travaille au quotidien sur des donn\u00e9es d\u2019audience TV internationales \u2014 un terrain id\u00e9al pour appliquer ce que j\u2019apprends et d\u00e9velopper mon autonomie. En parall\u00e8le, j\u2019ai men\u00e9 un projet web complet (front + back) pour un centre de beaut\u00e9, qui m\u2019a fait toucher du doigt tout le cycle de vie d\u2019un projet informatique, du besoin client \u00e0 la mise en production.",
    "Mon objectif : devenir Data Scientist, \u00e0 l\u2019intersection de la statistique, du code et de la d\u00e9cision m\u00e9tier.",
  ],
  languages: [
    { label: 'Fran\u00e7ais', level: 'Natif' },
    { label: 'Espagnol', level: 'C1' },
    { label: 'Anglais', level: 'B2' },
    { label: 'Arabe', level: 'A1' },
  ],
  softSkills: ['Rigueur / pr\u00e9cision', 'Esprit d\u2019\u00e9quipe', 'Aisance \u00e0 l\u2019oral', 'Adaptabilit\u00e9', 'Cr\u00e9ativit\u00e9'],
}

/* ---- Timeline : formation + expériences fusionnées, ordre antichronologique ---- */
export type TimelineItem = {
  period: string
  title: string
  org: string
  kind: 'exp' | 'edu'
  location?: string
  points?: string[]
  featured?: boolean // expérience mise en avant visuellement
}

export const timeline: TimelineItem[] = [
  {
    period: '2025 — présent',
    title: 'Data Operator (alternance)',
    org: 'Médiamétrie',
    kind: 'exp',
    location: 'Paris',
    points: [
      'R\u00e9ception, traitement et nettoyage de donn\u00e9es d\u2019audience TV internationales.',
      'Enrichissement des m\u00e9tadonn\u00e9es de programmes via des outils internes.',
      'Garantie de la qualit\u00e9, de la coh\u00e9rence et de la fiabilit\u00e9 des jeux de donn\u00e9es.',
      'Collaboration avec l\u2019\u00e9quipe IT et les data analysts, en autonomie.',
    ],
  },
  {
    period: '2025 — 2026',
    title: 'Développeur Full-Stack (Freelance)',
    org: 'Centre de beauté & esthétique — projet client',
    kind: 'exp',
    location: 'Projet indépendant',
    points: [
      'Recueil du besoin client et conception d\u2019une solution web compl\u00e8te.',
      'Site vitrine public + application interne de gestion des r\u00e9servations et clients.',
      'Int\u00e9gration de l\u2019envoi de messages WhatsApp pour les rendez-vous.',
      'D\u00e9veloppement front et back (React, Node.js) et mise en production.',
    ],
  },
  {
    period: '2024 — 2027',
    title: 'BUT Science des Données (parcours VCOD)',
    org: 'IUT Paris Rives de Seine',
    kind: 'edu',
    location: 'Paris',
    points: [
      'Parcours « Visualisation et Conception d\u2019Outils D\u00e9cisionnels ».',
      'Statistiques, SQL, Python, R, SAS, Power BI, conduite de projet.',
    ],
  },
  {
    period: '2022 — présent',
    title: 'Artiste / édition musicale',
    org: 'Mal Luné Music',
    kind: 'exp',
    location: 'Paris',
    points: [
      'Composition, enregistrement studio, respect des d\u00e9lais de production.',
      'Collaboration avec producteurs et artistes ; gestion de projet cr\u00e9atif.',
    ],
  },
  {
    period: '2023 — 2024',
    title: 'Agent d’animation (BAFA)',
    org: 'Ville de Blois · Le Grand Bornand',
    kind: 'exp',
    location: 'Blois',
    points: [
      'Encadrement de groupes d\u2019enfants, organisation d\u2019activit\u00e9s, gestion de groupe.',
      'S\u00e9curit\u00e9, communication et accompagnement \u00e9ducatif.',
    ],
  },
  {
    period: '2021 — 2024',
    title: 'Baccalauréat général (Maths · SES)',
    org: 'Lycée Notre Dame des Aydes',
    kind: 'edu',
    location: 'Blois',
    points: ['Mention bien.'],
  },
]

/* ---- Compétences du référentiel BUT2 (parcours VCOD) ---- */
export const competences = [
  {
    id: 'C1',
    title: 'Traiter des données à des fins décisionnelles',
    desc: 'Intervenir à toutes les étapes du cycle de vie de la donnée : insertion, modification, extraction, suppression.',
    tools: ['SQL', 'Oracle', 'Python', 'Excel'],
  },
  {
    id: 'C2',
    title: 'Analyser statistiquement des données',
    desc: 'Mettre en œuvre une analyse exploratoire : tendances, analyses multivariées, séries temporelles.',
    tools: ['R', 'Python', 'SAS', 'Tests statistiques'],
  },
  {
    id: 'C3',
    title: 'Valoriser une production en contexte pro',
    desc: 'Restituer et argumenter ses résultats en s’adaptant au destinataire, à l’oral comme à l’écrit.',
    tools: ['Power BI', 'PowerPoint', 'Dataviz', 'Reporting'],
  },
  {
    id: 'C4',
    title: 'Développer un outil décisionnel (VCOD)',
    desc: 'Concevoir un composant d’une solution décisionnelle : analyse des besoins, structuration, visualisation, cycle de vie projet.',
    tools: ['React', 'Node.js', 'DAX', 'Power BI'],
  },
]

/* ---- Outils & langages ---- */
export const stack = {
  languages: ['Python', 'R', 'SQL', 'SAS', 'JavaScript / TypeScript'],
  data: ['Power BI', 'DAX', 'Excel / VBA', 'Access', 'Oracle'],
  web: ['React', 'Node.js', 'HTML / CSS'],
  tools: ['Git', 'Office 365', 'LimeSurvey'],
}

/* =========================================================================
   RÉALISATIONS — 6 attendues :
     • 4 min. issues du BUT2   (year: 'BUT2')
     • 1 max. issue du BUT1     (year: 'BUT1')
     • 1 max. issue du milieu pro (year: 'PRO')
   « featured: true » => analyse réflexive détaillée (2 minimum requises).
   ⚠️ VÉRIFIE les projets BUT2 : remplace les emplacements par tes VRAIES SAÉ.
   ========================================================================= */
export type Project = {
  id: string
  title: string
  year: 'BUT1' | 'BUT2' | 'PRO'
  yearLabel: string
  context: string
  summary: string
  tools: string[]
  competences: string[] // ids: C1..C4
  featured?: boolean
  // Analyse réflexive (pour les projets featured) :
  reflective?: {
    proof: string
    objectives: string
    approach: string
    difficulties: string
    results: string
    learning: string
  }
  // Preuves à voir / télécharger (PDF, images, etc.). Déposer les fichiers dans public/projects/
  assets?: { label: string; url: string; type: 'pdf' | 'image' | 'link' | 'code' }[]
  todo?: boolean // true = emplacement à compléter par tes vraies infos
}

export const projects: Project[] = [
  /* ===== PROJET PERSO / FREELANCE — app centre de beauté =====
     Volontairement factuel : pas de lien avec le BUT ni le référentiel.
     L'expérience détaillée est mise en avant dans la timeline (Parcours). */
  {
    id: 'centre-beaute',
    title: 'Plateforme de gestion · Centre de beauté',
    year: 'PRO',
    yearLabel: 'Freelance · 2025-2026',
    context:
      'Projet freelance pour un centre de beauté & esthétique : un site vitrine public et une application interne de gestion des réservations et des clients, avec notifications WhatsApp.',
    summary:
      'Solution web complète développée de A à Z : site vitrine + back-office regroupant les réservations, la base clients et l’envoi de messages WhatsApp. Recueil du besoin, conception, développement front/back et mise en production.',
    tools: ['React', 'Node.js', 'WhatsApp', 'API REST'],
    competences: [],
    todo: true,
    assets: [
      { label: 'Voir le site en ligne', url: '#', type: 'link' },
      { label: 'Code source (GitHub)', url: '#', type: 'code' },
    ],
  },

  /* ===== BUT2 — emplacements à remplacer par tes vraies SAÉ ===== */
  {
    id: 'powerbi-mediametrie',
    title: 'Dashboard de suivi de projet · Power BI',
    year: 'BUT2',
    yearLabel: 'BUT2 / Alternance · 2026',
    context:
      'Conception d’un tableau de bord de suivi pour l’implémentation des métadonnées TV chez Médiamétrie.',
    summary:
      'Extraction et structuration de données depuis des bases Oracle (SQL), construction de modèles et de mesures DAX, puis visualisations dynamiques dans Power BI pour suivre l’avancement et la qualité des données.',
    tools: ['SQL', 'Oracle', 'DAX', 'Power BI'],
    competences: ['C1', 'C3', 'C4'],
    featured: true,
    reflective: {
      proof: 'Captures d’écran du dashboard Power BI.',
      objectives:
        'Donner aux équipes une vue claire et actionnable de l’avancement du projet et des indicateurs de qualité des données.',
      approach:
        'J’ai d’abord identifié les indicateurs utiles avec l’équipe, extrait les données via SQL depuis Oracle, modélisé les relations, puis construit des mesures DAX et des visualisations lisibles.',
      difficulties:
        'À COMPLÉTER avec ton vécu : ex. comprendre le modèle de données Oracle existant ; choisir les bons indicateurs ; rendre le dashboard lisible pour des non-spécialistes.',
      results:
        'Un tableau de bord interactif servant d’appui à la décision et au suivi de la qualité des données.',
      learning:
        'Cette réalisation couvre le traitement de la donnée (C1), sa valorisation (C3) et la conception d’un outil décisionnel (C4) — au cœur de mon parcours VCOD.',
    },
    assets: [
      { label: 'Captures du dashboard', url: '/projects/powerbi-dashboard.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'integration-donnees',
    title: 'Intégration de données',
    year: 'BUT2',
    yearLabel: 'BUT2 · 2025-2026',
    context:
      'SAÉ d’intégration de données : rassembler des sources hétérogènes et complémentaires dans une base unique et cohérente, exploitable pour l’analyse décisionnelle.',
    summary:
      'Identification et résolution des problèmes d’intégration de sources multiples : nettoyage, mise en correspondance des schémas, construction d’un modèle de données adapté, puis chargement en base. Travail sur l’ensemble du cycle de vie de la donnée (insertion, modification, extraction).',
    tools: ['SQL', 'Python', 'Excel'],
    competences: ['C1'],
    todo: true,
    assets: [
      { label: 'Rapport / livrable (PDF)', url: '/projects/integration-donnees.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'economie',
    title: 'Étude économique',
    year: 'BUT2',
    yearLabel: 'BUT2 · 2025-2026',
    context:
      'SAÉ d’analyse de données économiques : exploiter un jeu de données macro/micro-économiques pour en dégager des tendances et éclairer une problématique de décision.',
    summary:
      'Analyse exploratoire d’indicateurs économiques : statistiques descriptives, mise en évidence des grandes tendances, analyses multivariées pour résumer l’information, puis restitution argumentée des résultats à un public non spécialiste.',
    tools: ['R', 'Excel', 'Statistiques'],
    competences: ['C2', 'C3'],
    featured: true,
    todo: true,
    reflective: {
      proof: 'Extrait du rapport d’analyse et des visualisations produites.',
      objectives:
        'Comprendre la structure d’un jeu de données économiques et en tirer des conclusions claires, en tenant compte du contexte économique de l’étude.',
      approach:
        'J’ai d’abord exploré et nettoyé les données, identifié les variables pertinentes, puis mené une analyse exploratoire (tendances, corrélations) avant de structurer une restitution lisible pour un lecteur non statisticien.',
      difficulties:
        'À COMPLÉTER avec ton vécu : ex. choisir les bons indicateurs, interpréter des résultats parfois ambigus, ou adapter le vocabulaire technique au public visé.',
      results:
        'Une étude structurée mettant en avant les principales tendances, avec des visualisations choisies pour appuyer l’argumentation.',
      learning:
        'Cette SAÉ m’a fait progresser sur l’analyse statistique exploratoire (C2) et sur la restitution claire et contextualisée de résultats (C3).',
    },
    assets: [
      { label: 'Rapport d’étude (PDF)', url: '/projects/etude-economique.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'portfolio-web',
    title: 'Création d’un portfolio web',
    year: 'BUT2',
    yearLabel: 'BUT2 · Prog web · 2025-2026',
    context:
      'SAÉ de programmation web : réaliser à la main un site complet en HTML et CSS, en mobilisant uniquement les bases du langage, sans framework.',
    summary:
      'Conception et intégration manuelle d’un site portfolio statique : structure sémantique HTML, mise en forme CSS (mise en page, couleurs, responsive) et navigation. Un travail volontairement « from scratch » pour maîtriser les fondamentaux du web, qui a ensuite servi de base à la refonte de ce portfolio en React.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    competences: ['C4'],
    todo: true,
    assets: [
      { label: 'Voir la première version', url: '/projects/portfolio-v1/index.html', type: 'link' },
      { label: 'Code source (GitHub)', url: '#', type: 'code' },
    ],
  },

  /* ===== BUT1 — 1 maximum ===== */
  {
    id: 'enquete-limesurvey',
    title: 'Mise en œuvre d’une enquête',
    year: 'BUT1',
    yearLabel: 'BUT1 · 2025',
    context:
      'SAÉ d’enquête statistique : conception d’un questionnaire, collecte, traitement et restitution des résultats.',
    summary:
      'Administration d’un questionnaire via LimeSurvey, structuration et nettoyage des données sous Excel, création de visualisations et rédaction d’un rapport clair présentant les principaux enseignements.',
    tools: ['LimeSurvey', 'Excel', 'PowerPoint'],
    competences: ['C2', 'C3'],
    assets: [
      { label: 'Rapport d’enquête (PDF)', url: '/projects/enquete-limesurvey.pdf', type: 'pdf' },
    ],
  },
]

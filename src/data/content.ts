/* =========================================================================
   DONNÉES DU PORTFOLIO
   Toute modification de contenu se fait ici — la présentation est séparée.
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
  tools: ['Git', 'Office 365'],
}

/* =========================================================================
   RÉALISATIONS :
     • 4 SAÉ académiques BUT2 (year: 'BUT2')
       → audit RGPD, intégration de données, étude économique, portfolio web
     • 1 SAÉ BUT1            (year: 'BUT1') → reporting BDD loueur de DVD
     • 2 projets pro          (year: 'PRO') → freelance centre de beauté,
                                              dashboard Power BI (alternance)
   « featured: true » => analyse réflexive détaillée (cartes cliquables).
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
    assets: [
      { label: 'Voir le site en ligne', url: 'https://129center.fr', type: 'link' },
    ],
  },

  /* ===== Projet d'entreprise — réalisé pendant l'alternance (période BUT2) ===== */
  {
    id: 'powerbi-mediametrie',
    title: 'Dashboard de suivi de projet · Power BI',
    year: 'PRO',
    yearLabel: 'Alternance Médiamétrie · BUT2 · 2026',
    context:
      'Projet d’entreprise mené pendant mon alternance chez Médiamétrie : un tableau de bord de suivi pour l’implémentation des métadonnées TV.',
    summary:
      'Extraction et structuration de données depuis des bases Oracle (SQL), construction de modèles et de mesures DAX, puis visualisations dynamiques dans Power BI pour suivre l’avancement et la qualité des données.',
    tools: ['SQL', 'Oracle', 'DAX', 'Power BI'],
    competences: [],
    featured: true,
    reflective: {
      proof: 'Dashboard interne à Médiamétrie — données confidentielles, sans captures publiques.',
      objectives:
        'Donner aux équipes une vue claire et actionnable de l’avancement du projet et des indicateurs de qualité des données.',
      approach:
        'J’ai d’abord identifié les indicateurs utiles avec l’équipe, extrait les données via SQL depuis Oracle, modélisé les relations, puis construit des mesures DAX et des visualisations lisibles.',
      difficulties:
        'Comprendre le modèle de données Oracle existant, choisir les indicateurs réellement utiles aux équipes et rendre le dashboard lisible pour des non-spécialistes.',
      results:
        'Un tableau de bord interactif servant d’appui à la décision et au suivi de la qualité des données.',
      learning:
        'Une vraie mise en pratique professionnelle du cycle de la donnée — extraction SQL, modélisation, mesures DAX et restitution décisionnelle — dans un contexte d’équipe et de production.',
    },
  },
  /* ===== BUT2 — SAÉ académiques (4) ===== */
  {
    id: 'audit-rgpd',
    title: 'Audit de conformité RGPD · Projet de contrôle horaire',
    year: 'BUT2',
    yearLabel: 'BUT2 · Cadre juridique des données · 2025-2026',
    context:
      'SAÉ d’analyse juridique des données, en binôme : évaluer la viabilité d’un projet interne de contrôle horaire des salariés (badges, croisement de fichiers, automatisation) au regard du RGPD et du principe de Privacy by Design.',
    summary:
      'Rédaction d’un rapport d’audit confrontant les modalités techniques du traitement aux obligations du RGPD (finalité, minimisation, transparence, données sensibles, décision automatisée, sécurité, conservation). Pour chaque principe : diagnostic de conformité, questions à se poser et mesures correctives, puis synthèse des risques et préconisation finale.',
    tools: ['RGPD', 'Privacy by Design', 'AIPD / DPIA', 'Word'],
    competences: ['C1', 'C3'],
    featured: true,
    reflective: {
      proof: 'Rapport d’audit de conformité (tableau de diagnostic par principe + synthèse).',
      objectives:
        'Déterminer si un dispositif de surveillance du temps de travail est juridiquement viable, en confrontant chaque modalité du traitement aux exigences du RGPD plutôt qu’en jugeant le projet « à l’instinct ».',
      approach:
        'Application d’une grille Privacy by Design : pour chaque obligation (finalité, minimisation, transparence, données sensibles de l’art. 9, décision automatisée, sécurité, limitation de conservation), j’ai formulé les bonnes questions, statué sur la conformité et proposé une mesure corrective concrète.',
      difficulties:
        'Identifier les détournements de finalité (badges de sécurité réutilisés pour surveiller l’assiduité), repérer les données sensibles illégales (motifs de congés maladie, profilage des seniors/parents isolés) et traduire des principes juridiques abstraits en recommandations actionnables.',
      results:
        'Un diagnostic « non conforme » sur l’ensemble des principes, avec préconisation de suspendre le projet et de mener une Analyse d’Impact (AIPD/DPIA) avant toute mise en production — au regard de précédents comme l’affaire Amazon.',
      learning:
        'Cette SAÉ m’a appris à traiter la donnée dans son cadre légal (C1) et à restituer une analyse argumentée et structurée à un décideur non juriste (C3) — une dimension gouvernance/éthique essentielle au métier de data scientist.',
    },
    assets: [
      { label: 'Lire l’audit (Word)', url: '/projects/audit-rgpd-controle-horaire.docx', type: 'link' },
    ],
  },
  {
    id: 'integration-donnees',
    title: 'Intégration de données · Parcoursup',
    year: 'BUT2',
    yearLabel: 'BUT2 · 2025-2026',
    context:
      'SAÉ d’intégration de données, en groupe : exploiter les données ouvertes de Parcoursup pour comprendre quels facteurs expliquent le mieux les taux d’accès dans le supérieur — afin de donner un accès plus juste, de mieux adapter l’offre de formation et d’aider les candidats à faire des choix réalistes.',
    summary:
      'Mise en place d’un processus ETL complet : extraction du jeu de données officiel (fr-esr-parcoursup.xlsx), transformation et nettoyage sous Power Query, puis chargement et restitution dans Power BI. Analyse du profil des candidats (bac, mention) et des disparités d’accès par filière, statut et région.',
    tools: ['Excel', 'Power Query', 'Power BI'],
    competences: ['C1', 'C3'],
    assets: [
      { label: 'Présentation du projet (PDF)', url: '/projects/integration-donnees.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'economie',
    title: 'Étude économique · Aides publiques & véhicules électriques',
    year: 'BUT2',
    yearLabel: 'BUT2 · 2025-2026',
    context:
      'SAÉ d’analyse économique, en binôme : déterminer dans quelle mesure les aides publiques (bonus écologique, prime à la conversion) corrigent efficacement une défaillance du marché — les externalités négatives des véhicules thermiques — sur le marché français des véhicules électriques entre 2014 et 2024.',
    summary:
      'Travail en deux temps : un cadre théorique (défaillances de marché, externalités négatives, économie du bien-être) puis une analyse statistique des données réelles du marché français sur 2014-2024. Statistiques descriptives, mise en évidence des tendances et étude de la corrélation entre dépense publique et adoption des véhicules électriques, restituées dans un rapport argumenté pour un lecteur non spécialiste.',
    tools: ['R', 'Excel', 'Statistiques'],
    competences: ['C2', 'C3'],
    featured: true,
    reflective: {
      proof: 'Rapport d’étude : cadre théorique économique + analyse statistique du marché 2014-2024 et visualisations.',
      objectives:
        'Confronter une théorie économique (l’intervention de l’État face aux externalités) aux données réelles du marché des véhicules électriques, et juger si la dépense publique est bien corrélée à la transformation des usages.',
      approach:
        'J’ai d’abord posé le cadre théorique (défaillances de marché, externalités), puis collecté et nettoyé les données du marché sur dix ans, identifié les variables pertinentes et mené une analyse exploratoire (tendances, corrélations) avant de structurer une restitution lisible pour un lecteur non statisticien.',
      difficulties:
        'Rassembler et fiabiliser des données ouvertes hétérogènes sur dix ans (immatriculations, montants d’aides, émissions) issues de sources aux périmètres différents ; distinguer corrélation et causalité, l’essor des véhicules électriques coïncidant avec les aides mais aussi avec d’autres facteurs (offre des constructeurs, prix des carburants, réglementation) ; et traduire des notions économiques abstraites en indicateurs mesurables et en graphiques compréhensibles.',
      results:
        'Une étude structurée mettant en évidence la corrélation entre les aides publiques et l’adoption des véhicules électriques, tout en nuançant le lien de causalité, avec des visualisations choisies pour appuyer l’argumentation.',
      learning:
        'Cette SAÉ m’a fait progresser sur l’analyse statistique exploratoire (C2) et sur la restitution claire et contextualisée de résultats à un public non spécialiste (C3).',
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
    assets: [
      { label: 'Voir la première version', url: '/projects/portfolio-v1/index.html', type: 'link' },
      { label: 'Code source (GitHub)', url: 'https://github.com/chakirsyy/portfolioweb', type: 'code' },
    ],
  },

  /* ===== BUT1 — 1 maximum ===== */
  {
    id: 'reporting-dvd',
    title: 'Reporting & analyse de données · Loueur de DVD',
    year: 'BUT1',
    yearLabel: 'BUT1 · Reporting BDD · 2025',
    context:
      'SAÉ de reporting, en groupe : analyser les données d’un loueur de DVD de 2005 (base Sakila) pour conseiller l’ouverture d’un espace de visionnage « comme autrefois » — choisir une zone d’implantation, estimer le panier moyen et fixer les jours et horaires d’ouverture.',
    summary:
      'Extraction des données utiles en SQL, puis reporting Excel (tableaux croisés dynamiques et graphiques) sur trois axes : vision clients (clients les plus actifs, montant dépensé, date de première location), vision locations (jour de la semaine et période de la journée les plus propices) et catégories de films (locations par catégorie, films jamais loués). Restitution synthétique des préconisations.',
    tools: ['SQL', 'Excel', 'TCD'],
    competences: ['C1', 'C2', 'C3'],
    assets: [
      { label: 'Voir le reporting (Excel)', url: '/projects/reporting-dvd-sakila.xlsx', type: 'link' },
    ],
  },
]

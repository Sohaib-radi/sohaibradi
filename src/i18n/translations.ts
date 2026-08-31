export type Lang = "ar" | "fr" | "en";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "ar", label: "العربية", short: "AR" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "en", label: "English", short: "EN" },
];

export type Dict = typeof fr;

const fr = {
  meta: {
    home: {
      title: "Sohaib Radi — Développeur Full Stack & Systèmes Multi-Agents",
      desc: "Développement mobile, web apps, SaaS de l'idée au produit, systèmes multi-agents CrewAI et bots Telegram/WhatsApp.",
    },
    services: {
      title: "Mes Services — Dev Mobile, Web, SaaS & Agents IA | Sohaib Radi",
      desc: "Six prestations pour construire, automatiser et faire évoluer votre produit logiciel avec l'IA.",
    },
    formations: {
      title: "Mes Formations — Full Stack, Web App & Multi-Agents | Sohaib Radi",
      desc: "Trois parcours intensifs, en petits groupes, 100% projets réels.",
    },
    cv: {
      title: "Mon CV — Sohaib Radi, Développeur Full Stack & IA",
      desc: "Parcours, expériences, projets et compétences de Sohaib Radi.",
    },
    contact: {
      title: "Contact — Sohaib Radi",
      desc: "Écrivez-moi pour un projet, une formation ou une consultation technique.",
    },
    reservation: {
      title: "Me contacter — Sohaib Radi",
      desc: "Choisissez une date et un créneau pour un appel de découverte ou une consultation.",
    },
  },
  nav: {
    services: "Mes Services",
    formations: "Mes Formations",
    cv: "Mon CV",
    contact: "Contact",
    cta: "Me contacter",
  },
  footer: {
    rights: "Développeur Full Stack & Systèmes multi-agents.",
    services: "Services",
    formations: "Formations",
    cv: "CV",
    contact: "Contact",
  },
  home: {
    badge1: "Disponible",
    badge2: "Missions freelance & formations",
    h1: "Je transforme vos idées en produits logiciels et en agents intelligents.",
    lead: "Développeur full stack basé au Maroc, spécialisé en applications web & mobiles, plateformes SaaS et systèmes multi-agents avec CrewAI. J'accompagne startups et PME de la première maquette jusqu'à la mise en production.",
    ctaPrimary: "Découvrir mes services",
    ctaSecondary: "Consulter mon CV",
    highlights: [
      {
        title: "End-to-end SaaS products",
        body: "From the scoping workshop to production: architecture, database, payments and dashboards.",
      },
      {
        title: "Web Applications",
        body: "Custom solutions: e-commerce platforms, CRMs, education platforms, and Content Management Systems (CMS).",
      },
      {
        title: "Mobile App Development",
        body: "Native-like mobile experiences designed for performance and user engagement.",
      },
      {
        title: "Programming Courses",
        body: "Master Python & Django, Next.js, and system design through hands-on, real-world project training.",
      },
    ],
    architecture: {
      badge: "PLATFORME PHARE",
      title: "CerebralCrew | Plateforme d'opérations d'entreprise nativement IA",
      description:
        "Le système d'exploitation autonome pour les entreprises multi-sites, connectant une architecture multi-tenant à des équipes d'agents IA collaboratifs.",
      cards: [
        {
          title: "Architecture Multi-Tenant & Multi-Entity",
          body: "Conçue pour supporter des structures multi-entreprises, des environnements multi-magasins, et plus de 20 modules centraux avec des schémas d'attributs de produits personnalisables et agnostiques par industrie.",
        },
        {
          title: "Contrôle d'accès basé sur les rôles (RBAC)",
          body: "Système de permission granulaire régissant les utilisateurs humains et les capacités des agents IA à travers les départements.",
        },
        {
          title: "Création d'agents basés sur l'organigramme (Org-Chart Agent Creation)",
          body: "Permet aux administrateurs de générer et configurer des agents IA dynamiquement basés sur les hiérarchies internes de l'entreprise.",
        },
        {
          title: "Compagnons IA pour les employés (Employee AI Companions)",
          body: "Agents personnels dédiés pour chaque membre de l'équipe qui s'adaptent continuellement aux flux de travail individuels et aux données opérationnelles.",
        },
        {
          title: "Intégration Omnicanale & Entreprise",
          body: "Interfaces de messagerie directe via WhatsApp et Telegram, couplées à des intégrations backend pour Slack, HubSpot et l'extraction automatisée de données de factures.",
        },
      ],
    },
    approachTitle: "Une méthode simple : cadrer, livrer vite, itérer.",
    approachBody:
      "Chaque projet démarre par un atelier de cadrage d'une heure. Vous repartez avec un périmètre clair, un budget réaliste et un premier livrable en moins de deux semaines.",
    approachPoints: [
      "Prototype fonctionnel livré en 10 à 14 jours",
      "Code propre, testé et documenté qui vous appartient",
      "Suivi hebdomadaire et démo en direct à chaque sprint",
    ],
    imageAlt: "Espace de travail moderne d'un développeur logiciel",
    formationsLabel: "Mes formations",
    formationsTitle:
      "Trois parcours intensifs pour devenir développeur ou concevoir vos propres agents IA.",
    formationsTeasers: [
      {
        t: "Devenir Full Stack Developer",
        d: "12 semaines — JavaScript, React, Node.js, PostgreSQL et déploiement.",
      },
      {
        t: "Web App Professionnelle",
        d: "6 semaines — Architecture front moderne, API REST, auth et tests.",
      },
      {
        t: "Développeur Multi-Agents",
        d: "8 semaines — CrewAI, LLMs, outils, RAG et mise en production.",
      },
    ],
    formationsLink: "Voir le détail des programmes",
    ctaTitle: "Un projet, une idée, un process à automatiser ?",
    ctaBody:
      "Réservez un appel de découverte de 30 minutes. On clarifie ensemble votre besoin et je vous propose une feuille de route concrète.",
    ctaButton: "Réserver une séance",
    upworkRating: "Note de 5.0 sur Upwork",
    projects: [
      {
        title: "CerebralCrew",
        url: "https://cerebralcrew.com",
        desc: "Plateforme d'opérations IA pour entreprises.",
        images: ["/src/assets/cerebralcrew/1.png"],
      },
    ],
  },
  services: {
    badge: "Mes services",
    h1: "Du code, des agents, et des produits qui partent en production.",
    lead: "Six prestations complémentaires, facturées au forfait ou en régie. Chaque mission commence par un appel de cadrage gratuit et se termine par une livraison documentée.",
    items: [
      {
        title: "Développement Mobile",
        price: "Sur devis après appel",
        body: "Applications iOS et Android performantes en React Native / Expo : authentification, notifications push, paiements et mode hors-ligne.",
        points: [
          "Une base de code, deux stores",
          "Design system et animations soignées",
          "Publication App Store & Play Store incluse",
        ],
      },
      {
        title: "Développement Web App",
        price: "Sur devis après appel",
        body: "Applications web métier rapides et sécurisées : back-office, portails clients, dashboards temps réel et intégrations API.",
        points: [
          "Django / Python, React, TypeScript, PostgreSQL",
          "Rôles, permissions et audit",
          "Tests automatisés et CI/CD",
        ],
      },
      {
        title: "SaaS — de l'idée au produit",
        price: "Forfait projet sur devis",
        body: "Je vous accompagne du cadrage au lancement : MVP, abonnements, multi-tenant, analytics et boucle de feedback utilisateur.",
        points: [
          "Atelier de cadrage et roadmap",
          "MVP livré en 6 à 10 semaines",
          "Facturation récurrente Stripe / Paddle",
        ],
      },
      {
        title: "Systèmes Multi-Agents (CrewAI)",
        price: "Sur devis après appel",
        body: "Des équipes d'agents autonomes qui exécutent vos processus : veille marché, qualification de leads, génération de rapports, support niveau 1.",
        points: [
          "Architecture agents, outils et mémoire",
          "RAG sur vos documents internes",
          "Observabilité, garde-fous et coûts maîtrisés",
        ],
      },
      {
        title: "Bots & Agents Telegram / WhatsApp",
        price: "Sur devis après appel",
        body: "Assistants conversationnels branchés sur vos données : prise de commande, réservation, support client et notifications automatiques.",
        points: [
          "WhatsApp Business API & Telegram Bot API",
          "Connexion CRM, Sheets ou base de données",
          "Réponses IA contextuelles multilingues (FR / AR / EN)",
        ],
      },
      {
        title: "Consultation & Accompagnement",
        price: "Sur devis après appel",
        body: "Audit technique, choix d'architecture, revue de code ou stratégie IA. Idéal pour débloquer une équipe ou sécuriser une décision.",
        points: [
          "Audit d'architecture et de dette technique",
          "Cadrage de votre stratégie IA",
          "Mentorat d'équipe et revue de code",
        ],
      },
    ],
    ctaTitle: "Parlons de votre projet cette semaine.",
    ctaBody:
      "30 minutes suffisent pour évaluer la faisabilité, le budget et le calendrier de votre idée.",
    ctaButton: "Réserver une séance",
  },
  formations: {
    badge: "Mes formations",
    h1: "Apprendre en construisant de vrais produits.",
    lead: "Session individuelle ou petit groupe de 5 personnes maximum, en ligne uniquement. Chaque séance est pratique : on code, on débugue, on déploie. Support de cours, enregistrements et suivi individuel inclus.",
    enroll: "S'inscrire",
    items: [
      {
        title: "Devenir Développeur Full Stack",
        duration: "12 semaines · 2 sessions / semaine",
        level: "Débutant accepté",
        body: "Le parcours complet pour passer de zéro à un premier poste de développeur : fondamentaux, front-end, back-end, base de données et déploiement.",
        program: [
          "HTML, CSS moderne et JavaScript ES2024",
          "React + TypeScript : composants, state, routing",
          "Node.js, API REST et authentification JWT",
          "PostgreSQL, modélisation et requêtes avancées",
          "Git, Docker, CI/CD et mise en ligne",
          "Projet final : une application complète en portfolio",
        ],
      },
      {
        title: "Web App Professionnelle",
        duration: "6 semaines · 2 sessions / semaine",
        level: "Niveau intermédiaire",
        body: "Pour les développeurs qui savent coder mais veulent livrer des applications robustes, testées et maintenables en équipe.",
        program: [
          "Architecture front : design system et state management",
          "Consommation d'API, cache et données temps réel",
          "Rôles, permissions et sécurité applicative",
          "Tests unitaires et end-to-end",
          "Performance, accessibilité et SEO",
          "Projet final : back-office métier déployé",
        ],
      },
      {
        title: "Développeur Systèmes Multi-Agents",
        duration: "8 semaines · 2 sessions / semaine",
        level: "Bases en Python requises",
        body: "Concevez des équipes d'agents autonomes qui travaillent ensemble pour automatiser des processus métier réels avec CrewAI.",
        program: [
          "LLMs, prompting avancé et function calling",
          "CrewAI : agents, tâches, crews et process",
          "Outils personnalisés et connexion à vos APIs",
          "RAG : embeddings, bases vectorielles et mémoire",
          "Évaluation, garde-fous et maîtrise des coûts",
          "Projet final : crew d'agents déployée en production",
        ],
      },
    ],
    sessionsTitle: "Prêt à lancer votre carrière de développeur ?",
    sessionsBody:
      "Chaque programme est conçu pour vous rendre opérationnel immédiatement. Bénéficiez d'un mentorat personnalisé, de projets concrets et d'un suivi individuel pour garantir votre réussite.",
    sessionsButton: "Demander le programme et réserver ma place",
  },
  cv: {
    badge: "Curriculum Vitae",
    name: "Sohaib Radi",
    lead: "Je développe des plateformes SaaS basées sur l'intelligence artificielle, des systèmes multi-tenant et des architectures backend de qualité industrielle en utilisant Django, Next.js, CrewAI et des technologies d'IA modernes.\n\nMon expertise consiste à concevoir et à livrer des solutions logicielles complètes, de l'architecture et du développement backend aux applications frontend et à l'intégration de l'IA. Je me concentre sur la création de produits évolutifs qui allient agents IA, automatisation et intégrations d'entreprise pour résoudre des problèmes métier réels.",
    github: "Profil GitHub",
    upwork: "Profil Upwork",
    location: "Casablanca, Maroc",
    experiencesTitle: "Expériences",
    experiences: [
      {
        period: "2040 – Présent",
        role: "Ingénieur Full Stack & IA (Freelance / Architecte Produit)",
        place: "En ligne",
        bullets: [
          "Conception et développement de CerebralCrew (cerebralcrew.com), une plateforme d'opérations IA pour les entreprises multi-sites, automatisant les flux de travail quotidiens.",
          "Création et lancement de OTG Leads, une solution de capture et de gestion de prospects pour événements sans papier, permettant la collecte et la qualification de leads lors de salons et conférences.",
          "Architecture de systèmes multi-agents autonomes avec CrewAI, incluant un système de gestion de contenu (CMS) IA et une plateforme de surveillance SEO automatisée.",
          "Développement d'intégrations d'entreprise connectant les systèmes backend avec Salesforce, HubSpot, Odoo, Slack, Telegram et WhatsApp.",
        ],
      },
      {
        period: "Déc 2022 – Déc 2024",
        role: "United Education — Ingénieur Full Stack Senior",
        place: "Istanbul, Turquie",
        bullets: [
          "Conception et déploiement du Portail Étudiant officiel, centralisant les inscriptions et la gestion des accès utilisateurs.",
          "Création d'une banque de données centralisée sur l'enseignement supérieur pour structurer les informations des universités à l'international.",
          "Réalisation d'audits SEO techniques via Semrush et Google Search Console, résolvant les erreurs d'indexation, de performance et de structure.",
          "Supervision de la maintenance, du débogage et des déploiements sur l'ensemble des applications pour garantir une disponibilité maximale.",
        ],
      },
      {
        period: "2020 – Déc 2022",
        role: "Why Not Tech — Lead Software Engineer",
        place: "Istanbul, Turquie",
        bullets: [
          "Direction d'une équipe de développement sur des applications web et mobiles avec Django, Next.js et Flutter.",
          "Conception de l'architecture de base de données et backend pour des plateformes e-commerce et applications web sur mesure.",
          "Développement d'une plateforme de facturation électronique conforme aux exigences de l'autorité fiscale saoudienne (ZATCA).",
        ],
      },
      {
        period: "2019 – 2020",
        role: "AL Fayez International School — Développeur Full Stack & Intégration Systèmes",
        place: "Istanbul, Turquie",
        bullets: [
          "Développement d'une application interne sur mesure pour la gestion comptable et opérationnelle de l'établissement.",
          "Déploiement et personnalisation de l'environnement LMS Moodle pour les cours en ligne.",
          "Intégration de la solution de visioconférence BigBlueButton pour les classes virtuelles en direct.",
        ],
      },
    ],
    skillsTitle: "Compétences Techniques",
    skills: [
      {
        group: "Backend",
        items: [
          "Python",
          "Django",
          "Django REST Framework",
          "PostgreSQL",
          "Conception de Bases de Données",
          "Architecture Système",
        ],
      },
      {
        group: "Frontend & Mobile",
        items: ["Next.js", "React", "TypeScript", "React Native", "Flutter", "Tailwind CSS"],
      },
      {
        group: "IA & Systèmes Multi-Agents",
        items: [
          "CrewAI (Flux de travail multi-agents)",
          "Orchestration LLM",
          "Pipelines d'agents autonomes",
        ],
      },
      {
        group: "Intégrations d'entreprise",
        items: ["Salesforce", "HubSpot", "Odoo", "Slack", "Telegram", "WhatsApp API"],
      },
    ],
    projectsTitle: "Projets marquants",
    projects: [
      {
        name: "AgentDesk",
        desc: "Plateforme de support client pilotée par une crew d'agents CrewAI : triage, réponse et escalade automatiques.",
      },
      {
        name: "Souk Analytics",
        desc: "SaaS d'analyse de prix e-commerce au Maroc, agents de scraping et rapports quotidiens automatisés.",
      },
      {
        name: "Rendez-vous Bot",
        desc: "Bot WhatsApp de prise de rendez-vous pour cliniques, synchronisé avec Google Calendar, FR/AR.",
      },
    ],
    educationTitle: "Formation & Langues",
    educationLabel: "Formation",
    educationValue: "Ingénieur en Génie Informatique",
    educationSchool: "EMSI — 2005 - 2010",
    languagesLabel: "Langues",
    languagesValue: "Arabe (natif) · Français (courant) · Anglais (professionnel) · Turc (A2)",
  },
  contact: {
    badge: "Contact",
    h1: "Parlons de votre projet.",
    lead: "Décrivez votre besoin en quelques lignes : je réponds sous 24 heures ouvrées avec une première estimation de périmètre et de budget.",
    infoTitle: "Coordonnées",
    hours: "Du lundi au vendredi, 9h — 18h (GMT+1)",
    form: {
      name: "Nom complet",
      email: "E-mail",
      phone: "Téléphone (optionnel)",
      subject: "Sujet",
      subjects: ["Projet de développement", "Formation", "Consultation", "Autre"],
      message: "Votre message",
      messagePlaceholder: "Parlez-moi de votre projet, de votre budget et de vos délais…",
      submit: "Envoyer le message",
      submitting: "Envoi en cours...",
      error: "Une erreur est survenue lors de l'envoi.",
      required: "Ce champ est obligatoire",
      invalidEmail: "Adresse e-mail invalide",
      tooLong: "Texte trop long",
      success: "Message envoyé avec succès, nous vous contacterons.",
    },
  },
  reservation: {
    badge: "Réservation",
    h1: "Réservez votre séance.",
    lead: "Choisissez le type de séance, une date et un créneau horaire. La séance se déroule en visioconférence (ou en présentiel à Casablanca sur demande).",
    typeLabel: "Type de séance",
    types: [
      { name: "Appel de découverte", duration: "30 min", price: "Gratuit" },
      { name: "Consultation technique", duration: "60 min", price: "900 MAD" },
      { name: "Atelier de cadrage projet", duration: "90 min", price: "1 500 MAD" },
    ],
    dateLabel: "Choisissez une date",
    timeLabel: "Choisissez un créneau",
    noSlots: "Aucun créneau disponible ce jour (week-end). Choisissez un autre jour.",
    selectDateFirst: "Sélectionnez d'abord une date.",
    detailsLabel: "Vos coordonnées",
    summaryTitle: "Récapitulatif",
    summaryEmpty: "Aucun créneau sélectionné pour l'instant.",
    timezone: "Fuseau horaire : Casablanca (GMT+1)",
    confirm: "Confirmer la réservation",
    missing: "Merci de choisir une date et un créneau.",
    success:
      "Votre demande de réservation est prête dans votre messagerie. Envoyez-la et je confirme sous 24 h.",
    prev: "Mois précédent",
    next: "Mois suivant",
    weekdays: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    emailSubject: "Demande de réservation de séance",
  },
};

const en: Dict = {
  meta: {
    home: {
      title: "Sohaib Radi — Full Stack Developer & Multi-Agent Systems",
      desc: "Mobile development, web apps, SaaS from idea to product, CrewAI multi-agent systems and Telegram/WhatsApp bots.",
    },
    services: {
      title: "My Services — Mobile, Web, SaaS & AI Agents | Sohaib Radi",
      desc: "Six services to build, automate and scale your software product with AI.",
    },
    formations: {
      title: "My Trainings — Full Stack, Web App & Multi-Agents | Sohaib Radi",
      desc: "Three intensive programs, small groups, 100% real projects.",
    },
    cv: {
      title: "My Resume — Sohaib Radi, Full Stack & AI Developer",
      desc: "Background, experience, projects and skills of Sohaib Radi.",
    },
    contact: {
      title: "Contact — Sohaib Radi",
      desc: "Write to me about a project, a training or a technical consultation.",
    },
    reservation: {
      title: "Contact me — Sohaib Radi",
      desc: "Pick a date and a time slot for a discovery call or a consultation.",
    },
  },
  nav: {
    services: "My Services",
    formations: "My Trainings",
    cv: "My Resume",
    contact: "Contact",
    cta: "Contact me",
  },
  footer: {
    rights: "Full Stack Developer & Multi-Agent Systems.",
    services: "Services",
    formations: "Trainings",
    cv: "Resume",
    contact: "Contact",
  },
  home: {
    badge1: "Available",
    badge2: "Freelance projects & trainings",
    h1: "I turn your ideas into software products and intelligent agents.",
    lead: "Full stack developer based in Morocco, specialised in web & mobile apps, SaaS platforms and multi-agent systems with CrewAI. I support startups and SMEs from the first mockup to production.",
    ctaPrimary: "Explore my services",
    ctaSecondary: "View my resume",
    highlights: [
      {
        title: "End-to-end SaaS products",
        body: "From the scoping workshop to production: architecture, database, payments and dashboards.",
      },
      {
        title: "Web Applications",
        body: "Custom solutions: e-commerce platforms, CRMs, education platforms, and Content Management Systems (CMS).",
      },
      {
        title: "Mobile App Development",
        body: "Native-like mobile experiences designed for performance and user engagement.",
      },
      {
        title: "Programming Courses",
        body: "Master Python & Django, Next.js, and system design through hands-on, real-world project training.",
      },
    ],
    architecture: {
      badge: "FLAGSHIP PLATFORM",
      title: "CerebralCrew | AI-Native Enterprise Operations Platform",
      description:
        "The autonomous operating system for multi-location businesses, connecting multi-tenant architecture with collaborative AI agent teams.",
      cards: [
        {
          title: "Multi-Tenant & Multi-Entity Architecture",
          body: "Engineered to support multi-company structures, multi-store environments, and 20+ core modules with customizable, industry-agnostic product attribute schemas.",
        },
        {
          title: "Role-Based Access Control (RBAC)",
          body: "Fine-grained permission system governing human users and AI agent capabilities across departments.",
        },
        {
          title: "Org-Chart Agent Creation",
          body: "Allows administrators to spawn and configure AI agents dynamically based on internal company hierarchies.",
        },
        {
          title: "Employee AI Companions",
          body: "Dedicated personal agents for each team member that continuously adapt to individual workflows and operational data.",
        },
        {
          title: "Omnichannel & Enterprise Integration",
          body: "Direct messaging interfaces via WhatsApp and Telegram, paired with backend integrations for Slack, HubSpot, and automated invoice data extraction.",
        },
      ],
    },
    approachTitle: "A simple method: scope it, ship fast, iterate.",
    approachBody:
      "Every project starts with a one-hour scoping workshop. You leave with a clear scope, a realistic budget and a first deliverable in under two weeks.",
    approachPoints: [
      "Working prototype delivered in 10 to 14 days",
      "Clean, tested and documented code that belongs to you",
      "Weekly follow-up and a live demo every sprint",
    ],
    imageAlt: "Modern software developer workspace",
    formationsLabel: "My trainings",
    formationsTitle: "Three intensive tracks to become a developer or design your own AI agents.",
    formationsTeasers: [
      {
        t: "Become a Full Stack Developer",
        d: "12 weeks — JavaScript, React, Node.js, PostgreSQL and deployment.",
      },
      {
        t: "Professional Web App",
        d: "6 weeks — Modern front-end architecture, REST APIs, auth and testing.",
      },
      {
        t: "Multi-Agent Developer",
        d: "8 weeks — CrewAI, LLMs, tools, RAG and production rollout.",
      },
    ],
    formationsLink: "See the full curricula",
    ctaTitle: "A project, an idea, a process to automate?",
    ctaBody:
      "Book a 30-minute discovery call. We clarify your need together and I hand you a concrete roadmap.",
    ctaButton: "Book a session",
    upworkRating: "5.0 rating on Upwork",
    projects: [
      {
        title: "CerebralCrew",
        url: "https://cerebralcrew.com",
        desc: "AI operations platform for businesses.",
        images: ["/src/assets/cerebralcrew/1.png"],
      },
    ],
  },
  services: {
    badge: "My services",
    h1: "Code, agents, and products that actually ship.",
    lead: "Six complementary services, billed fixed-price or time-and-materials. Every engagement starts with a free scoping call and ends with a documented delivery.",
    items: [
      {
        title: "Mobile Development",
        price: "Quote after discovery call",
        body: "High-performance iOS and Android apps with React Native / Expo: authentication, push notifications, payments and offline mode.",
        points: [
          "One codebase, two stores",
          "Design system and polished animations",
          "App Store & Play Store publishing included",
        ],
      },
      {
        title: "Web App Development",
        price: "Quote after discovery call",
        body: "Fast, secure business web apps: back-offices, client portals, real-time dashboards and API integrations.",
        points: [
          "Django / Python, React, TypeScript, PostgreSQL",
          "Roles, permissions and audit trail",
          "Automated tests and CI/CD",
        ],
      },
      {
        title: "SaaS — from idea to product",
        price: "Fixed project quote",
        body: "I guide you from scoping to launch: MVP, subscriptions, multi-tenancy, analytics and a user feedback loop.",
        points: [
          "Scoping workshop and roadmap",
          "MVP delivered in 6 to 10 weeks",
          "Recurring billing with Stripe / Paddle",
        ],
      },
      {
        title: "Multi-Agent Systems (CrewAI)",
        price: "Quote after discovery call",
        body: "Teams of autonomous agents running your processes: market watch, lead qualification, report generation, tier-1 support.",
        points: [
          "Agent, tool and memory architecture",
          "RAG over your internal documents",
          "Observability, guardrails and cost control",
        ],
      },
      {
        title: "Telegram / WhatsApp Bots & Agents",
        price: "Quote after discovery call",
        body: "Conversational assistants plugged into your data: order taking, booking, customer support and automatic notifications.",
        points: [
          "WhatsApp Business API & Telegram Bot API",
          "CRM, Sheets or database connection",
          "Multilingual contextual AI replies (FR / AR / EN)",
        ],
      },
      {
        title: "Consulting & Coaching",
        price: "Quote after discovery call",
        body: "Technical audit, architecture decisions, code review or AI strategy. Ideal to unblock a team or de-risk a decision.",
        points: [
          "Architecture and technical debt audit",
          "AI strategy framing",
          "Team mentoring and code review",
        ],
      },
    ],
    ctaTitle: "Let's talk about your project this week.",
    ctaBody: "30 minutes are enough to assess the feasibility, budget and timeline of your idea.",
    ctaButton: "Book a session",
  },
  formations: {
    badge: "My trainings",
    h1: "Learn by building real products.",
    lead: "One-to-one or small group of 5 people maximum, online only. Every session is hands-on: we code, we debug, we deploy. Course material, recordings and individual follow-up included.",
    enroll: "Enroll",
    items: [
      {
        title: "Become a Full Stack Developer",
        duration: "12 weeks · 2 sessions / week",
        level: "Beginners welcome",
        body: "The complete track from zero to a first developer job: fundamentals, front-end, back-end, databases and deployment.",
        program: [
          "HTML, modern CSS and JavaScript ES2024",
          "React + TypeScript: components, state, routing",
          "Node.js, REST APIs and JWT authentication",
          "PostgreSQL, modelling and advanced queries",
          "Git, Docker, CI/CD and going live",
          "Final project: a complete portfolio application",
        ],
      },
      {
        title: "Professional Web App",
        duration: "6 weeks · 2 sessions / week",
        level: "Intermediate level",
        body: "For developers who can already code but want to ship robust, tested and maintainable applications as a team.",
        program: [
          "Front-end architecture: design system and state management",
          "API consumption, caching and real-time data",
          "Roles, permissions and application security",
          "Unit and end-to-end testing",
          "Performance, accessibility and SEO",
          "Final project: a deployed business back-office",
        ],
      },
      {
        title: "Multi-Agent Systems Developer",
        duration: "8 weeks · 2 sessions / week",
        level: "Python basics required",
        body: "Design teams of autonomous agents that work together to automate real business processes with CrewAI.",
        program: [
          "LLMs, advanced prompting and function calling",
          "CrewAI: agents, tasks, crews and processes",
          "Custom tools and connections to your APIs",
          "RAG: embeddings, vector stores and memory",
          "Evaluation, guardrails and cost control",
          "Final project: an agent crew deployed to production",
        ],
      },
    ],
    sessionsTitle: "Ready to launch your developer career?",
    sessionsBody:
      "Each program is designed to get you job-ready immediately. Benefit from personalized mentorship, hands-on projects, and individual follow-up to ensure your success.",
    sessionsButton: "Request the syllabus and book my spot",
  },
  cv: {
    badge: "Resume",
    name: "Sohaib Radi",
    lead: "I build AI-powered SaaS platforms, multi-tenant systems, and production-grade backend architectures using Django, Next.js, CrewAI, and modern AI technologies.\n\nMy expertise includes designing and delivering end-to-end software—from architecture and backend development to frontend applications and AI integration. I focus on creating scalable products that combine AI agents, automation, and enterprise integrations to solve real business problems.",
    github: "GitHub Profile",
    upwork: "Upwork Profile",
    location: "Casablanca, Morocco",
    experiencesTitle: "Experience",
    experiences: [
      {
        period: "2040 – Present",
        role: "Full Stack & AI Engineer (Freelance / Product Architect)",
        place: "Online",
        bullets: [
          "Engineered CerebralCrew (cerebralcrew.com), an AI-native operations platform for multi-location businesses that automates daily operational loops and frontline workflow execution.",
          "Designed and launched OTG Leads, a paperless event lead-capture platform enabling sales and marketing teams to collect, qualify, and export leads during trade shows and conferences.",
          "Architected autonomous multi-agent systems using CrewAI, including an AI Content Management System and an autonomous SEO Monitoring Platform.",
          "Built enterprise-grade integrations connecting backend systems with Salesforce, HubSpot, Odoo, Slack, Telegram, and WhatsApp.",
        ],
      },
      {
        period: "Dec 2022 – Dec 2024",
        role: "United Education — Senior Full Stack Engineer",
        place: "Istanbul, Turkey",
        bullets: [
          "Architected and deployed the official Student Portal, centralizing student onboarding, registration, and user access.",
          "Built a centralized higher education data bank to aggregate, categorize, and serve information on international universities.",
          "Conducted technical SEO audits using Semrush and Google Search Console, systematically resolving indexing, performance, and structural errors.",
          "Supervised system maintenance, debugging, and launch pipelines to ensure uptime during high-traffic seasons.",
        ],
      },
      {
        period: "2020 – Dec 2022",
        role: "Why Not Tech — Lead Software Engineer",
        place: "Istanbul, Turkey",
        bullets: [
          "Led a developer team building web and mobile applications using Django, Next.js, and Flutter.",
          "Designed core database schemas and backend system architectures for client e-commerce platforms and web applications.",
          "Built an e-invoicing platform compliant with ZATCA regulations, handling real-time cryptographic invoice validation.",
        ],
      },
      {
        period: "2019 – 2020",
        role: "AL Fayez International School — Full Stack & Systems Integration Developer",
        place: "Istanbul, Turkey",
        bullets: [
          "Built a custom internal operations and accounting application to streamline school administrative processes.",
          "Deployed and customized the Moodle LMS environment for online coursework delivery.",
          "Integrated BigBlueButton open-source video conferencing infrastructure for live classrooms.",
        ],
      },
    ],
    skillsTitle: "Core Technical Skills",
    skills: [
      {
        group: "Backend",
        items: [
          "Python",
          "Django",
          "Django REST Framework",
          "PostgreSQL",
          "Database Design",
          "System Architecture",
        ],
      },
      {
        group: "Frontend & Mobile",
        items: ["Next.js", "React", "TypeScript", "React Native", "Flutter", "Tailwind CSS"],
      },
      {
        group: "AI & Agentic Systems",
        items: [
          "CrewAI (Multi-Agent Workflows)",
          "LLM Orchestration",
          "Autonomous Agent Pipelines",
        ],
      },
      {
        group: "Enterprise Integrations",
        items: ["Salesforce", "HubSpot", "Odoo", "Slack", "Telegram", "WhatsApp API"],
      },
    ],
    projectsTitle: "Selected projects",
    projects: [
      {
        name: "AgentDesk",
        desc: "Customer support platform driven by a CrewAI crew: automatic triage, replies and escalation.",
      },
      {
        name: "Souk Analytics",
        desc: "E-commerce price intelligence SaaS for Morocco, scraping agents and automated daily reports.",
      },
      {
        name: "Rendez-vous Bot",
        desc: "WhatsApp appointment bot for clinics, synced with Google Calendar, FR/AR.",
      },
    ],
    educationTitle: "Education & Languages",
    educationLabel: "Education",
    educationValue: "Computer Engineering degree",
    educationSchool: "EMSI — 2005 - 2010",
    languagesLabel: "Languages",
    languagesValue: "Arabic (native) · French (fluent) · English (professional) · Turkish (A2)",
  },
  contact: {
    badge: "Contact",
    h1: "Let's talk about your project.",
    lead: "Describe your need in a few lines: I reply within 24 business hours with a first scope and budget estimate.",
    infoTitle: "Contact details",
    hours: "Monday to Friday, 9am — 6pm (GMT+1)",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      subject: "Subject",
      subjects: ["Development project", "Training", "Consulting", "Other"],
      message: "Your message",
      messagePlaceholder: "Tell me about your project, budget and timeline…",
      submit: "Send message",
      submitting: "Sending...",
      error: "Error sending message.",
      required: "This field is required",
      invalidEmail: "Invalid email address",
      tooLong: "Text is too long",
      success: "Message sent successfully, we will contact you.",
    },
  },
  reservation: {
    badge: "Booking",
    h1: "Book your session.",
    lead: "Pick a session type, a date and a time slot. Sessions happen over video call (or on site in Casablanca on request).",
    typeLabel: "Session type",
    types: [
      { name: "Discovery call", duration: "30 min", price: "Free" },
      { name: "Technical consultation", duration: "60 min", price: "900 MAD" },
      { name: "Project scoping workshop", duration: "90 min", price: "1,500 MAD" },
    ],
    dateLabel: "Choose a date",
    timeLabel: "Choose a time slot",
    noSlots: "No slots available that day (weekend). Please pick another day.",
    selectDateFirst: "Select a date first.",
    detailsLabel: "Your details",
    summaryTitle: "Summary",
    summaryEmpty: "No slot selected yet.",
    timezone: "Timezone: Casablanca (GMT+1)",
    confirm: "Confirm booking",
    missing: "Please choose a date and a time slot.",
    success:
      "Your booking request is ready in your email client. Send it and I confirm within 24 h.",
    prev: "Previous month",
    next: "Next month",
    weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    emailSubject: "Session booking request",
  },
};

const ar: Dict = {
  meta: {
    home: {
      title: "صهيب راضي — مطور Full Stack وأنظمة الوكلاء المتعددين",
      desc: "تطوير تطبيقات الويب والجوال، منتجات SaaS من الفكرة إلى الإطلاق، أنظمة وكلاء CrewAI وبوتات تلغرام وواتساب.",
    },
    services: {
      title: "خدماتي — تطبيقات الجوال، الويب، SaaS ووكلاء الذكاء الاصطناعي | صهيب راضي",
      desc: "ست خدمات لبناء منتجك الرقمي وأتمتته وتطويره باستخدام الذكاء الاصطناعي.",
    },
    formations: {
      title: "البرامج التدريبية — Full Stack، تطبيقات الويب وأنظمة الوكلاء | صهيب راضي",
      desc: "ثلاثة مسارات تدريبية مكثفة، بمجموعات صغيرة، ومشاريع عملية 100%.",
    },
    cv: {
      title: "السيرة الذاتية — صهيب راضي | مطور Full Stack وذكاء اصطناعي",
      desc: "المسار المهني، الخبرات، المشاريع، والمهارات التقنية.",
    },
    contact: {
      title: "التواصل — صهيب راضي",
      desc: "تواصل معي بخصوص مشروع برمجي، برنامج تدريبي، أو استشارة تقنية.",
    },
    reservation: {
      title: "تواصل معي — صهيب راضي",
      desc: "اختر التاريخ والوقت المناسب لمكالمة تعارف أو استشارة تقنية.",
    },
  },
  nav: {
    services: "الخدمات",
    formations: "الدورات التدريبية",
    cv: "السيرة الذاتية",
    contact: "التواصل",
    cta: "تواصل معي",
  },
  footer: {
    rights: "مطور Full Stack وأنظمة الوكلاء المتعددين.",
    services: "الخدمات",
    formations: "الدورات التدريبية",
    cv: "السيرة الذاتية",
    contact: "التواصل",
  },
  home: {
    badge1: "متاح للعمل",
    badge2: "مشاريع حرة واستشارات",
    h1: "أحوّل أفكارك إلى منتجات برمجية ووكلاء أذكياء.",
    lead: "مطور Full Stack متخصص في تطبيقات الويب والجوال، ومنصات SaaS، وأنظمة الوكلاء المتعددين باستخدام CrewAI. أساعد الشركات الناشئة والمؤسسات من مرحلة التخطيط حتى الإطلاق.",
    ctaPrimary: "استعرض خدماتي",
    ctaSecondary: "اطّلع على السيرة الذاتية",
    highlights: [
      {
        title: "منتجات SaaS متكاملة",
        body: "من ورشة التخطيط إلى الإطلاق: البنية التقنية، قواعد البيانات، تحسين الأداء، ولوحة التحكم.",
      },
      {
        title: "تطبيقات الويب",
        body: "حلول برمجية مخصصة: منصات التجارة الإلكترونية، أنظمة إدارة علاقات العملاء (CRM)، المنصات التعليمية، وأنظمة إدارة المحتوى (CMS).",
      },
      {
        title: "تطوير تطبيقات الجوال",
        body: "تجارب مستخدم سلسة وعالية الأداء مصممة لتوفير أفضل تفاعل على كافة الهواتف.",
      },
      {
        title: "الدورات البرمجية",
        body: "تعلم Python وDjango وNext.js وهندسة البرمجيات من خلال تدريب عملي قائم على مشاريع حقيقية.",
      },
    ],
    architecture: {
      badge: "منصة رئيسية",
      title: "CerebralCrew | منصة العمليات المؤسسية الأصلية للذكاء الاصطناعي",
      description:
        "نظام التشغيل المستقل للشركات متعددة المواقع، الذي يربط بين بنية متعددة المستأجرين (Multi-Tenant) وفرق وكلاء الذكاء الاصطناعي التعاونية.",
      cards: [
        {
          title: "بنية متعددة المستأجرين والكيانات (Multi-Tenant & Multi-Entity Architecture)",
          body: "مصممة لدعم هياكل الشركات المتعددة، وبيئات المتاجر المتعددة، وأكثر من 20 وحدة أساسية مع مخططات سمات منتجات قابلة للتخصيص ومحايدة للصناعة.",
        },
        {
          title: "التحكم في الوصول القائم على الأدوار (RBAC)",
          body: "نظام إذن دقيق يحكم مستخدمي البشر وقدرات وكلاء الذكاء الاصطناعي عبر الإدارات.",
        },
        {
          title: "إنشاء وكلاء بناءً على الهيكل التنظيمي (Org-Chart Agent Creation)",
          body: "يسمح للمسؤولين بإنشاء وتهيئة وكلاء الذكاء الاصطناعي ديناميكياً بناءً على الهياكل التنظيمية الداخلية للشركة.",
        },
        {
          title: "رفاق الذكاء الاصطناعي للموظفين (Employee AI Companions)",
          body: "وكلاء شخصيون مخصصون لكل عضو في الفريق يتكيفون باستمرار مع سير العمل الفردي والبيانات التشغيلية.",
        },
        {
          title: "تكامل متعدد القنوات والمؤسسات (Omnichannel & Enterprise Integration)",
          body: "واجهات المراسلة المباشرة عبر واتساب وتلغرام، مقترنة بتكاملات الخلفية (Backend) لـ Slack وHubSpot واستخراج بيانات الفواتير الآلي.",
        },
      ],
    },
    approachTitle: "منهجية عمل واضحة: التخطيط، التسليم السريع، ثم التحسين.",
    approachBody:
      "يبدأ كل مشروع بورشة تحديد المتطلبات مدتها ساعة. نخرج منها بنطاق عمل محدد، وميزانية واقعية، وأول تسليم في أقل من أسبوعين.",
    approachPoints: [
      "نموذج أولي يعمل خلال 10 إلى 14 يوماً",
      "كود نظيف، مُختبَر، وموثّق بالكامل ملك لك",
      "متابعة أسبوعية وعرض مباشر للتطورات في كل مرحلة",
    ],
    imageAlt: "مساحة عمل حديثة لمطور برمجيات",
    formationsLabel: "الدورات التدريبية",
    formationsTitle: "ثلاثة مسارات مكثفة لتصبح مطوراً محترفاً أو لتصمم وكلاءك الأذكياء.",
    formationsTeasers: [
      {
        t: "تطوير Full Stack متكامل",
        d: "12 أسبوعاً — JavaScript، React، Node.js، PostgreSQL، والنشر.",
      },
      {
        t: "تطبيقات الويب الاحترافية",
        d: "6 أسابيع — الواجهات الحديثة، واجهات REST API، المصادقة والاختبارات.",
      },
      { t: "تطوير أنظمة الوكلاء", d: "8 أسابيع — CrewAI، النماذج اللغوية، RAG، والإنتاج." },
    ],
    formationsLink: "اطّلع على تفاصيل البرامج",
    ctaTitle: "هل لديك مشروع أو فكرة ترغب في تنفيذها أو أتمتتها؟",
    ctaBody: "احجز مكالمة تعارف مدتها 30 دقيقة لنناقش احتياجاتك ونضع خريطة طريق ملموسة.",
    ctaButton: "احجز جلسة",
    upworkRating: "تقييم 5.0 على منصة Upwork",
    projects: [
      {
        title: "CerebralCrew",
        url: "https://cerebralcrew.com",
        desc: "منصة تشغيلية مدعومة بالذكاء الاصطناعي للشركات.",
        images: ["/src/assets/cerebralcrew/1.png"],
      },
    ],
  },
  services: {
    badge: "الخدمات",
    h1: "حلول برمجية ووكلاء أذكياء قابلة للتطبيق الفعلي.",
    lead: "ست خدمات متكاملة، بأسعار محدّدة أو بالساعة. تبدأ كل مهمة بمكالمة استكشافية وتختتم بتسليم موثّق.",
    items: [
      {
        title: "تطوير تطبيقات الجوال",
        price: "تسعير بعد مكالمة الاستكشاف",
        body: "تطبيقات iOS وأندرويد عالية الأداء باستخدام React Native / Expo: المصادقة، الإشعارات، تحسين الأداء والعمل بدون إنترنت.",
        points: [
          "كود برمجي موحد للمتجرين",
          "نظام تصميم ورسوم متحركة متقنة",
          "النشر على App Store و Google Play مشمول",
        ],
      },
      {
        title: "تطوير تطبيقات الويب",
        price: "تسعير بعد مكالمة الاستكشاف",
        body: "تطبيقات ويب سريعة وآمنة: لوحات تحكم، بوابات للعملاء، وتكاملات عبر API.",
        points: [
          "Django / Python, React, TypeScript, PostgreSQL",
          "إدارة الصلاحيات والأدوار وسجل التتبع",
          "اختبارات آليّة ونشر مستمر (CI/CD)",
        ],
      },
      {
        title: "SaaS — من الفكرة إلى المنتج",
        price: "حسب نطاق المشروع",
        body: "مرافقة متكاملة من الفكرة إلى الإطلاق: MVP، إدارة الاشتراكات، تعدد المستأجرين، والتحليلات.",
        points: [
          "ورشة عمل للتخطيط وخريطة الطريق",
          "إطلاق MVP خلال 6 إلى 10 أسابيع",
          "أنظمة دفع واشتراكات عبر Stripe / Paddle",
        ],
      },
      {
        title: "أنظمة الوكلاء المتعددين (CrewAI)",
        price: "تسعير بعد مكالمة الاستكشاف",
        body: "أنظمة وكلاء ذكاء اصطناعي مستقلة لأتمتة مهامك: أبحاث السوق، تأهيل العملاء، وإعداد التقارير.",
        points: [
          "بنية الوكلاء والأدوات والذاكرة",
          "تقنية RAG للمستندات الداخلية",
          "إدارة التكاليف وضوابط الأمان",
        ],
      },
      {
        title: "بوتات ووكلاء تلغرام / واتساب",
        price: "تسعير بعد مكالمة الاستكشاف",
        body: "مساعدون أذكياء مرتبطون ببياناتك: استقبال الطلبات، الحجوزات، والدعم الفني الآلي.",
        points: [
          "WhatsApp Business API و Telegram Bot API",
          "ربط مباشر مع أنظمة CRM وقواعد البيانات",
          "ردود ذكية متعددة اللغات (العربية، الفرنسية، الإنجليزية)",
        ],
      },
      {
        title: "استشارات وتوجيه تقني",
        price: "تسعير بعد مكالمة الاستكشاف",
        body: "تدقيق تقني، اختيار البنية التحتية، مراجعة الكود، أو تحديد استراتيجية الذكاء الاصطناعي.",
        points: [
          "تدقيق البنية التقنية والديون البرمجية",
          "تحديد استراتيجية الذكاء الاصطناعي",
          "توجيه الفريق البرمجي ومراجعة الكود",
        ],
      },
    ],
    ctaTitle: "لنتحدث عن مشروعك هذا الأسبوع.",
    ctaBody: "ثلاثون دقيقة تكفي لتقييم جدوى فكرتك وميزانيتها وجدولها الزمني.",
    ctaButton: "احجز جلسة",
  },
  formations: {
    badge: "الدورات التدريبية",
    h1: "التعلم من خلال بناء منتجات حقيقية.",
    lead: "جلسة فردية أو مجموعة صغيرة بحد أقصى 5 أشخاص، عبر الإنترنت فقط (Online only). كل جلسة عملية بالكامل: نكتب الكود، نصلح الأخطاء، وننشر التطبيقات. المواد التسجيلية والمتابعة الفردية مشمولة.",
    enroll: "سجّل الآن",
    items: [
      {
        title: "تطوير Full Stack المتكامل",
        duration: "12 أسبوعاً · حصتان أسبوعياً",
        level: "مناسب للمبتدئين",
        body: "مسار شامل للانتقال من البداية إلى العمل كمطور محترف: الأساسيات، الواجهات (Front-end)، الخوادم (Back-end)، وقواعد البيانات (Database) والنشر (Deployment).",
        program: [
          "HTML، CSS الحديث، و JavaScript ES2024",
          "React مع TypeScript: المكونات وإدارة الحالة والتوجيه (Routing)",
          "Node.js، بناء REST APIs، ومصادقة JWT",
          "PostgreSQL، نمذجة البيانات والاستعلامات المتقدمة",
          "Git، Docker، CI/CD، وآليات النشر",
          "مشروع نهائي: تطبيق متكامل لمحفظة أعمالك",
        ],
      },
      {
        title: "تطوير تطبيقات الويب الاحترافية",
        duration: "6 أسابيع · حصتان أسبوعياً",
        level: "مستوى متوسط",
        body: "للمطورين الراغبين في تسليم تطبيقات متينة، قابلة للصيانة، ومختبرة وفق معايير الشركات باستخدام هندسة البرمجيات (Software Engineering).",
        program: [
          "بنية الواجهات: نظام التصميم وإدارة الحالة",
          "استهلاك APIs، التخزين المؤقت، والبيانات المباشرة",
          "الصلاحيات، الأدوار، وأمان التطبيقات (Security)",
          "اختبارات الوحدة والاختبارات الشاملة (Unit & E2E Testing)",
          "تحسين الأداء، إمكانية الوصول، و SEO",
          "مشروع نهائي: لوحة تحكم مهنية منشورة",
        ],
      },
      {
        title: "تطوير أنظمة الوكلاء المتعددين",
        duration: "8 أسابيع · حصتان أسبوعياً",
        level: "تتطلب أساسيات Python",
        body: "تصميم فرق وكلاء ذكاء اصطناعي (Multi-Agent Systems) تعمل معاً لأتمتة سير العمل باستعمال CrewAI.",
        program: [
          "النماذج اللغوية (LLMs)، الهندسة المتقدمة للأوامر (Prompt Engineering)، واستدعاء الدوال (Function Calling)",
          "إطار CrewAI: الوكلاء، المهام، والمسارات",
          "بناء أدوات مخصصة والربط مع APIs",
          "تقنيات RAG: التضمينات (Embeddings) وقواعد البيانات المتجهية (Vector Databases)",
          "تقييم الأداء وضوابط الأمان والتكلفة",
          "مشروع نهائي: نظام وكلاء أذكياء منشور ومُفعل",
        ],
      },
    ],
    sessionsTitle: "هل أنت مستعد لبدء مسارك المهني كمطور؟",
    sessionsBody:
      "تم تصميم كل برنامج لجعلك جاهزاً للعمل مباشرة. استفد من التوجيه الفردي (Mentorship)، والمشاريع العملية، والمتابعة الشخصية لضمان نجاحك.",
    sessionsButton: "اطلب البرنامج التفصيلي واحجز مكانك",
  },
  cv: {
    badge: "السيرة الذاتية",
    name: "صهيب راضي",
    lead: "أساعد رواد الأعمال والشركات على تحويل أفكارهم إلى منصات SaaS وتطبيقات ويب وجوال مدعومة بالذكاء الاصطناعي وجاهزة للإنتاج. أمتلك خبرة متكاملة في بناء البنية التحتية بـ Django، والواجهات بـ Next.js، وأتمتة مسارات العمل بـ CrewAI — من المفهوم الأولي حتى الإطلاق.",
    github: "ملف GitHub",
    upwork: "ملف Upwork",
    location: "الدار البيضاء، المغرب",
    experiencesTitle: "الخبرات المهنية",
    experiences: [
      {
        period: "2024 – حتى الآن",
        role: "مهندس Full Stack وذكاء اصطناعي — عمل حر (Freelance / Product Architect)",
        place: "عبر الإنترنت",
        bullets: [
          "تطوير منصة CerebralCrew (cerebralcrew.com)، وهي منصة تشغيلية مدعومة بالذكاء الاصطناعي للشركات متعددة الفروع لتمتة العمليات اليومية.",
          "تصميم وإطلاق OTG Leads، منصة رقمية لإدارة والتقاط بيانات العملاء المحتملين في المعارض والفعاليات.",
          "بناء أنظمة وكلاء متعددي المهام باستخدام CrewAI، تشمل نظام إدارة محتوى (CMS) ونظام مراقبة وتحسين محركات البحث بشكل أوتوماتيكي.",
          "تطوير ربط وتكامل أنظمة المؤسسات مع منصات Salesforce، HubSpot، Odoo، Slack، Telegram، وWhatsApp.",
        ],
      },
      {
        period: "ديسمبر 2022 – ديسمبر 2024",
        role: "United Education — مهندس برمجيات (Senior Full Stack Engineer)",
        place: "إسطنبول، تركيا",
        bullets: [
          "تصميم وتطوير بوابة الطلاب الرسمية لتسهيل عمليات التسجيل وإدارة بيانات المستخدمين.",
          "إنشاء بنك معلومات مركزي للتعليم العالي لتجميع وتنظيم البيانات الخاصة بالجامعات في تركيا ومختلف دول العالم.",
          "إجراء تدقيق فني لمحركات البحث باستخدام Semrush وGoogle Search Console وحل مشاكل الفهرسة والأداء.",
          "الإشراف على الصيانة الدورية وتحديثات النظام وضمان كفاءة التطبيقات خلال فترات الإقبال المرتفع.",
        ],
      },
      {
        period: "2020 – ديسمبر 2022",
        role: "Why Not Tech — قائد فريق تطوير البرمجيات (Lead Software Engineer)",
        place: "إسطنبول، تركيا",
        bullets: [
          "قيادة فريق التطوير لبناء تطبيقات شبكة الويب والموبايل باستخدام Django، Next.js، وFlutter.",
          "تصميم قواعد البيانات والبنية التحتية البرمجية لتطبيقات التجارة الإلكترونية.",
          "تطوير منصة الفوترة الإلكترونية المتوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك السعودية (ZATCA).",
        ],
      },
      {
        period: "2019 – 2020",
        role: "مدرسة الفايز الدولية — مطوّر Full Stack وتكامل أنظمة",
        place: "إسطنبول، تركيا",
        bullets: [
          "تطوير تطبيق خاص لإدارة العمليات الداخلية والحسابات لزيادة كفاءة الإدارة المباشرة.",
          "إعداد وتخصيص بيئة التعلم الإلكتروني Moodle لإدارة الدورات التدريبية عبر الإنترنت.",
          "دمج نظام الفصول الافتراضية BigBlueButton لدعم البث المباشر للدروس.",
        ],
      },
    ],
    skillsTitle: "المهارات التقنية",
    skills: [
      {
        group: "تطوير الخلفية",
        items: [
          "Python",
          "Django",
          "Django REST Framework",
          "PostgreSQL",
          "تصميم قواعد البيانات",
          "هندسة النظم",
        ],
      },
      {
        group: "تطوير الواجهات والموبايل",
        items: ["Next.js", "React", "TypeScript", "React Native", "Flutter", "Tailwind CSS"],
      },
      {
        group: "أنظمة الذكاء الاصطناعي",
        items: [
          "CrewAI (سير عمل الوكلاء)",
          "تنظيم النماذج اللغوية (LLM Orchestration)",
          "خطوط عمل الوكلاء المستقلة",
        ],
      },
      {
        group: "ربط أنظمة المؤسسات",
        items: ["Salesforce", "HubSpot", "Odoo", "Slack", "Telegram", "WhatsApp API"],
      },
    ],
    projectsTitle: "مشاريع بارزة",
    projects: [
      {
        name: "AgentDesk",
        desc: "منصة دعم عملاء تدار بواسطة وكلاء CrewAI: فرز وإجابة وتصعيد تلقائي.",
      },
      {
        name: "Souk Analytics",
        desc: "منصة SaaS لتحليل أسعار التجارة الإلكترونية، تعتمد على وكلاء جمع البيانات وإصدار تقارير يومية.",
      },
      {
        name: "Rendez-vous Bot",
        desc: "بوت واتساب لحجز المواعيد للعيادات مرتبط بـ Google Calendar، يدعم العربية والفرنسية.",
      },
    ],
    educationTitle: "المؤهلات واللغات",
    educationLabel: "المؤهل الأكاديمي",
    educationValue: "شهادة مهندس دولة في الهندسة المعلوماتية",
    educationSchool: "المدرسة المغربية لعلوم المهندسين — 2005 - 2010",
    languagesLabel: "اللغات",
    languagesValue:
      "العربية (اللغة الأم) · الفرنسية (بطلاقة) · الإنجليزية (مستوى مهني) · التركية (مستوى A2)",
  },
  contact: {
    badge: "التواصل",
    h1: "لنتحدث عن مشروعك.",
    lead: "اكتب تفاصيل مشروعك في أسطر قليلة: أرد خلال 24 ساعة عمل مع تقدير أولي للنطاق والميزانية.",
    infoTitle: "معلومات التواصل",
    hours: "من الاثنين إلى الجمعة، 9:00 — 18:00 (توقيت غرينتش+1)",
    form: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "الهاتف (اختياري)",
      subject: "الموضوع",
      subjects: ["مشروع تطوير", "برنامج تدريبي", "استشارة تقنية", "آخر"],
      message: "رسالتك",
      messagePlaceholder: "أخبرني عن مشروعك، الميزانية المتوقعة، والجدول الزمني...",
      submit: "إرسال الرسالة",
      submitting: "جاري الإرسال...",
      error: "حدث خطأ أثناء إرسال الرسالة.",
      required: "هذا الحقل مطلوب",
      invalidEmail: "عنوان بريد إلكتروني غير صحيح",
      tooLong: "النص طويل جداً",
      success: "تم إرسال الرسالة بنجاح، سنتواصل معك.",
    },
  },
  reservation: {
    badge: "الحجز",
    h1: "احجز جلستك.",
    lead: "اختر نوع الجلسة، التاريخ، والوقت. تُجرى الجلسات عبر مكالمة فيديو (أو حضورياً بالدار البيضاء عند الطلب).",
    typeLabel: "نوع الجلسة",
    types: [
      { name: "مكالمة تعارف", duration: "30 دقيقة", price: "مجاناً" },
      { name: "استشارة تقنية", duration: "60 دقيقة", price: "900 درهم" },
      { name: "ورشة تحديد نطاق المشروع", duration: "90 دقيقة", price: "1.500 درهم" },
    ],
    dateLabel: "اختر التاريخ",
    timeLabel: "اختر الوقت",
    noSlots: "لا توجد مواعيد متاحة في هذا اليوم (عطلة نهاية الأسبوع). يرجى اختيار يوم آخر.",
    selectDateFirst: "اختر التاريخ أولاً.",
    detailsLabel: "بياناتك",
    summaryTitle: "ملخص الحجز",
    summaryEmpty: "لم يتم اختيار أي وقت بعد.",
    timezone: "التوقيت: الدار البيضاء (غرينتش+1)",
    confirm: "تأكيد الحجز",
    missing: "يرجى اختيار التاريخ والوقت.",
    success: "طلب الحجز جاهز في تطبيق بريدك الإلكتروني. أرسله وسأؤكده خلال 24 ساعة.",
    prev: "الشهر السابق",
    next: "الشهر التالي",
    weekdays: ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"],
    emailSubject: "طلب حجز جلسة",
  },
};

export const dictionaries = { en, fr, ar };

export const CONTACT = {
  email: "contact@sohaib.dev",
  phone: "+212 6 00 00 00 00",
  site: "sohaib.dev",
  github: "github.com/sohaibradi",
  upwork: "https://www.upwork.com/freelancers/~01c146d19986ff58ec?mp_source=share",
};

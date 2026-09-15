// CourseLanding.jsx — drop into your Vite + React project.
//
// 1) Add the fonts to index.html <head>:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
//
// 2) import CourseLanding from './CourseLanding'
//    <CourseLanding theme="light" enrollHref="/checkout" />   // theme="dark" for the dark version
//
// Enroll and review submissions are sent to Supabase (see src/lib/course-forms.ts).
//
// Arabic content (AR_CONTENT below) mirrors the English one-for-one. Wherever it overlaps
// with enterprise_multi_agent_systems_course_ar.md (pillars, curriculum, audience,
// prerequisites), the text is copied verbatim from that file.

import * as Dialog from "@radix-ui/react-dialog";
import { useRef, useState, type CSSProperties, type ReactNode } from "react";

import { useI18n } from "@/i18n";
import { submitEnrollment, submitReview as submitReviewToSupabase } from "@/lib/course-forms";

type ThemeTokens = {
  bg: string;
  alt: string;
  ink: string;
  inkRgb: string;
  accent: string;
  accentHover: string;
  onAccent: string;
  dim1: number;
  dim2: number;
  dim3: number;
};

const THEMES: Record<"light" | "dark", ThemeTokens> = {
  light: {
    bg: "#faf9f7",
    alt: "#f2f0ec",
    ink: "#17181a",
    inkRgb: "23,24,26",
    accent: "oklch(0.52 0.13 160)",
    accentHover: "oklch(0.40 0.13 160)",
    onAccent: "#ffffff",
    dim1: 0.62,
    dim2: 0.6,
    dim3: 0.45,
  },
  dark: {
    bg: "#0d0e10",
    alt: "#0a0b0d",
    ink: "#e8e9ea",
    inkRgb: "232,233,234",
    accent: "oklch(0.78 0.14 160)",
    accentHover: "oklch(0.88 0.11 160)",
    onAccent: "#07140e",
    dim1: 0.38,
    dim2: 0.45,
    dim3: 0.3,
  },
};

// Tech/product names — language-invariant, shown as-is in every language.
const STACK = [
  "CrewAI",
  "LangChain",
  "Django REST",
  "Celery",
  "Redis",
  "PostgreSQL",
  "Next.js",
  "Telegram Mini Apps",
  "Salesforce",
  "HubSpot",
  "Slack API",
  "Docker",
];
const FOOTER_STACK = "Django · Next.js · CrewAI · Telegram";

type FormatItem = { label: string; body: string };
type Pillar = { num: string; title: string; stack: string; outcome: string };
type ModulePoint = { head: string; body: string };
type CourseModule = { label: string; title: string; points: ModulePoint[] };
type Review = { name: string; rating: number; text: string };
type PrereqLine = { pre: string; strong: string; post: string };

type Content = {
  navEnroll: string;
  badge: string;
  h1: string;
  h1MaxWidth: string;
  h1FontSize: string;
  lead: string;
  ctaEnroll: string;
  ctaCurriculum: string;
  videoBefore: string;
  videoAfter: string;
  format: FormatItem[];
  pillarsEyebrow: string;
  pillars: Pillar[];
  curriculumHeading: string;
  collapseAll: string;
  expandAll: string;
  modules: CourseModule[];
  reviewsHeading: string;
  addReview: string;
  closeReview: string;
  namePlaceholder: string;
  starLabel: (n: number) => string;
  reviewPlaceholder: string;
  postReview: string;
  anonymousLabel: string;
  seedReviews: Review[];
  noReviews: string;
  trainerEyebrow: string;
  trainerTitle: string;
  trainerP1: string;
  trainerP2: string;
  ratingBadge: string;
  linkGithub: string;
  linkUpwork: string;
  audienceHeading: string;
  audience: string[];
  prereqHeading: string;
  prereqLines: [PrereqLine, PrereqLine];
  enrollHeading: string;
  enrollBody: string;
  enrollNote: string;
  footerTagline: string;
  enrollDialogTitle: string;
  enrollDialogBody: string;
  enrollNamePlaceholder: string;
  enrollEmailPlaceholder: string;
  enrollPhonePlaceholder: string;
  enrollPhoneNotice: string;
  enrollSubmitting: string;
  enrollSuccess: string;
  enrollError: string;
  enrollAltLink: string;
  reviewDialogTitle: string;
  reviewSubmitting: string;
  reviewSuccess: string;
  reviewError: string;
  closeLabel: string;
  menuLabel: string;
};

const EN_CONTENT: Content = {
  navEnroll: "Enroll",
  badge: "7 modules · beginner ramp-up included",
  h1: "Enterprise Multi-Agent Systems",
  h1MaxWidth: "15ch",
  h1FontSize: "clamp(36px,5vw,58px)",
  lead: "Build production-grade, multi-tenant AI platforms with async task streaming, Telegram Mini Apps, and enterprise CRM integrations.",
  ctaEnroll: "Enroll now",
  ctaCurriculum: "See the curriculum",
  videoBefore: "pass a ",
  videoAfter: " prop to embed the promo video here",
  format: [
    {
      label: "Live sessions",
      body: "2 live sessions per week, taught in real time — not pre-recorded.",
    },
    {
      label: "Project mentoring",
      body: "Every student gets encadrement on their own project throughout the course.",
    },
    {
      label: "Learning by doing",
      body: "We build the project from the very first session and ship it by the end.",
    },
  ],
  pillarsEyebrow: "Four pillars",
  pillars: [
    {
      num: "01",
      title: "Core Orchestration",
      stack: "CrewAI · Python · LangChain",
      outcome: "Multi-agent autonomous workflows & custom safe tools",
    },
    {
      num: "02",
      title: "Enterprise Backend",
      stack: "Django REST · Celery · Redis · PostgreSQL",
      outcome: "Multi-tenant isolation, RBAC permissions, async queues",
    },
    {
      num: "03",
      title: "Web & Mobile UX",
      stack: "Next.js · Telegram Mini Apps",
      outcome: "Live SSE streaming dashboard & Telegram chat interface",
    },
    {
      num: "04",
      title: "B2B Integrations",
      stack: "Slack API · Salesforce · HubSpot",
      outcome: "Automated webhook ingestion, lead ops, & CRM updates",
    },
  ],
  curriculumHeading: "Curriculum",
  collapseAll: "collapse all",
  expandAll: "expand all",
  modules: [
    {
      label: "Module 0",
      title: "Beginner Ramp-Up & Core Stack Essentials",
      points: [
        { head: "Python Basics:", body: "OOP, environment setups, and async/await fundamentals." },
        {
          head: "Django & DRF Fast-Track:",
          body: "ORM models, REST API endpoints, and JSON responses.",
        },
        {
          head: "Next.js Fundamentals:",
          body: "React state, API fetching, and Tailwind UI basics.",
        },
        {
          head: "First Agent:",
          body: "Setting up a single CrewAI agent and connecting it to a basic endpoint.",
        },
      ],
    },
    {
      label: "Module 1",
      title: "Decoupled Multi-Tenant Architecture",
      points: [
        {
          head: "Modular Django Structures:",
          body: "Designing app-level isolation (apps.tenants, apps.agents, apps.integrations).",
        },
        {
          head: "Tenant Isolation:",
          body: "Implementing tenant-aware middleware and database scoping.",
        },
        {
          head: "Dual-Layer RBAC:",
          body: "Configuring Role-Based Access Control across API endpoints and agent execution tools.",
        },
      ],
    },
    {
      label: "Module 2",
      title: "Agent Engineering with CrewAI",
      points: [
        {
          head: "Agent Flow Design:",
          body: "Structuring CrewAI agents, tasks, memory buffers, and delegation flows.",
        },
        {
          head: "Custom Guarded Tools:",
          body: "Building execution tools strictly guarded by multi-tenant data access boundaries.",
        },
      ],
    },
    {
      label: "Module 3",
      title: "Async Execution & Real-Time Progress Streaming",
      points: [
        {
          head: "Background Queues:",
          body: "Offloading heavy agent runs to Celery background workers backed by Redis.",
        },
        {
          head: "Redis Event Publishing:",
          body: "Publishing step-by-step agent callbacks to Redis Pub/Sub channels.",
        },
        {
          head: "Live SSE Streaming:",
          body: "Streaming real-time progress updates to Next.js using Server-Sent Events (SSE).",
        },
      ],
    },
    {
      label: "Module 4",
      title: "Next.js Dashboard & Telegram Mini App (TMA)",
      points: [
        {
          head: "Web Dashboard UX:",
          body: "Building modern interfaces with live agent thought-process visualizers.",
        },
        {
          head: "Telegram Integration:",
          body: "Developing Telegram Bots and embedding native Telegram Mini Apps (TMA) for mobile interactions.",
        },
      ],
    },
    {
      label: "Module 5",
      title: "B2B CRM & Workspace Integrations",
      points: [
        {
          head: "Webhook Automation:",
          body: "Ingesting Salesforce and HubSpot webhooks to trigger automated agent workflows.",
        },
        {
          head: "Workspace Action Loops:",
          body: "Automating CRM record updates and sending Slack notifications with human-in-the-loop approval steps.",
        },
      ],
    },
    {
      label: "Module 6",
      title: "AI-Assisted DX & Production Deployment",
      points: [
        {
          head: "Context-Optimized DX:",
          body: "Structuring codebase boundaries to maximize AI coding tool (Cursor/Copilot) precision.",
        },
        {
          head: "Production Deployment:",
          body: "Deploying Dockerized services with per-tenant API rate limits and task execution timeouts.",
        },
      ],
    },
  ],
  reviewsHeading: "Reviews",
  addReview: "Add review",
  closeReview: "Close",
  namePlaceholder: "Your name",
  starLabel: (n) => `${n} star${n > 1 ? "s" : ""}`,
  reviewPlaceholder: "Your review",
  postReview: "Post review",
  anonymousLabel: "Anonymous",
  seedReviews: [],
  noReviews: "No reviews yet — be the first to share your experience.",
  trainerEyebrow: "Your instructor",
  trainerTitle: "AI & Full-Stack Software Engineer",
  trainerP1:
    "I build AI-powered SaaS platforms, multi-tenant systems, and production-grade backend architectures using Django, Next.js, CrewAI, and modern AI technologies.",
  trainerP2:
    "My expertise includes designing and delivering end-to-end software—from architecture and backend development to frontend applications and AI integration. I focus on creating scalable products that combine AI agents, automation, and enterprise integrations to solve real business problems.",
  ratingBadge: "5.0 rating on",
  linkGithub: "GitHub",
  linkUpwork: "Upwork",
  audienceHeading: "Who it's for",
  audience: [
    "Absolute beginners seeking an end-to-end path",
    "Python / Django developers",
    "React / Next.js engineers",
    "AI builders aiming to launch enterprise SaaS platforms",
  ],
  prereqHeading: "Prerequisites",
  prereqLines: [
    {
      pre: "Basic coding interest is enough for beginners — start with ",
      strong: "Module 0",
      post: ".",
    },
    {
      pre: "Intermediate developers with Python, Django, and React fundamentals can jump straight to ",
      strong: "Module 1",
      post: ".",
    },
  ],
  enrollHeading: "Ship an enterprise agent platform, not a demo.",
  enrollBody:
    "Seven modules, from Python fundamentals to Dockerized multi-tenant deployment with per-tenant rate limits.",
  enrollNote: "Pricing and cohort dates — add yours here",
  footerTagline: "Enterprise Multi-Agent Systems",
  enrollDialogTitle: "Enroll in the course",
  enrollDialogBody:
    "We'll contact you to understand your needs and walk you through all the details.",
  enrollNamePlaceholder: "Your name",
  enrollEmailPlaceholder: "Your email",
  enrollPhonePlaceholder: "Phone",
  enrollPhoneNotice:
    "A phone number is required — we need to call you to understand your level and goals.",
  enrollSubmitting: "Sending…",
  enrollSuccess: "Thanks! We'll be in touch shortly.",
  enrollError: "Something went wrong. Please try again.",
  enrollAltLink: "Prefer to talk first? Book a call",
  reviewDialogTitle: "Share your experience",
  reviewSubmitting: "Posting…",
  reviewSuccess: "Thanks for your review!",
  reviewError: "Something went wrong. Please try again.",
  closeLabel: "Close",
  menuLabel: "Menu",
};

// Pillars, curriculum, audience & prerequisites below are copied verbatim from
// enterprise_multi_agent_systems_course_ar.md. Everything else is translated into
// formal (fusha) Arabic, with technical/tool terms kept in parentheses the same
// way that file does.
const AR_CONTENT: Content = {
  navEnroll: "التسجيل",
  badge: "7 وحدات · تشمل تمهيداً للمبتدئين",
  h1: "الأنظمة متعددة الوكلاء للمؤسسات: Django وNext.js وCrewAI وتلغرام (Enterprise Multi-Agent Systems: Django, Next.js, CrewAI & Telegram)",
  h1MaxWidth: "26ch",
  h1FontSize: "clamp(23px,4vw,33px)",
  lead: "بناء منصات ذكاء اصطناعي قابلة للتوسع ومتعددة المستأجرين (Multi-tenant) بمستوى إنتاجي مع البث غير المتزامن للمهام (Async task streaming)، تطبيقات تلغرام المصغرة (Telegram Mini Apps - TMA)، وتكاملات نظم إدارة علاقات العملاء (CRM) للمؤسسات.",
  ctaEnroll: "سجّل الآن",
  ctaCurriculum: "اطّلع على المنهج الدراسي",
  videoBefore: "مرّر خاصية ",
  videoAfter: " لتضمين فيديو العرض الترويجي هنا",
  format: [
    {
      label: "جلسات مباشرة",
      body: "حصتان مباشرتان أسبوعياً، تُقدَّمان في الوقت الحقيقي وليستا مسجّلتين مسبقاً.",
    },
    {
      label: "مواكبة المشروع",
      body: "يحصل كل متدرب على تأطير ومتابعة لمشروعه الخاص طوال مدة الدورة.",
    },
    {
      label: "التعلّم بالممارسة",
      body: "نبدأ ببناء المشروع منذ الجلسة الأولى، وننجزه بحلول نهاية الدورة.",
    },
  ],
  pillarsEyebrow: "الركائز الأربع",
  pillars: [
    {
      num: "01",
      title: "التنسيق الرئيسي (Core Orchestration)",
      stack: "CrewAI · Python · LangChain",
      outcome:
        "مسارات عمل ذاتية التحكم متعددة الوكلاء (Multi-agent autonomous workflows) وأدوات مخصصة وآمنة",
    },
    {
      num: "02",
      title: "الخلفية البرمجية للمؤسسات (Enterprise Backend)",
      stack: "Django REST · Celery · Redis · PostgreSQL",
      outcome:
        "عزل متعدد المستأجرين (Multi-tenant isolation)، صلاحيات التحكم القائم على الأدوار (RBAC)، وطوابير المهام غير المتزامنة (Async queues)",
    },
    {
      num: "03",
      title: "واجهة المستخدم للويب والموبايل (Web & Mobile UX)",
      stack: "Next.js · Telegram Mini Apps",
      outcome:
        "لوحة تحكم ببث مباشر (Live SSE streaming) وواجهة محادثة تلغرام (Telegram chat interface)",
    },
    {
      num: "04",
      title: "تكاملات شركات الأعمال (B2B Integrations)",
      stack: "Slack API · Salesforce · HubSpot",
      outcome:
        "استهلاك تلقائي لخطافات الويب (Webhooks)، إدارة العملاء المحتملين (Lead ops)، وتحديثات CRM",
    },
  ],
  curriculumHeading: "المنهج الدراسي",
  collapseAll: "طي الكل",
  expandAll: "توسيع الكل",
  modules: [
    {
      label: "الوحدة 0",
      title: "التمهيد للمبتدئين وأساسيات التقنيات (Beginner Ramp-Up & Core Stack Essentials)",
      points: [
        {
          head: "أساسيات لغة بايثون (Python Basics):",
          body: "البرمجة كائنية التوجه (OOP)، إعدادات البيئة البرمجية، وأساسيات البرمجة غير المتزامنة (async/await).",
        },
        {
          head: "المسار السريع لـ Django & DRF:",
          body: "نماذج قاعدة البيانات (ORM models)، نقاط نهاية الواجهة البرمجية (REST API endpoints)، واستجابات بيانات (JSON responses).",
        },
        {
          head: "أساسيات Next.js:",
          body: "إدارة الحالة في React، جلب البيانات عبر API، وأساسيات تصميم الواجهات بـ Tailwind UI.",
        },
        {
          head: "الوكيل الأول (First Agent):",
          body: "إعداد وكيل فردي باستخدام CrewAI وربطه بنقطة نهاية برمجية أساسية.",
        },
      ],
    },
    {
      label: "الوحدة 1",
      title: "الهندسة المعمارية المستقلة ومتعددة المستأجرين (Decoupled Multi-Tenant Architecture)",
      points: [
        {
          head: "الهياكل النمطية لـ Django:",
          body: "تصميم عزل التطبيقات على مستوى المشروع (apps.tenants, apps.agents, apps.integrations).",
        },
        {
          head: "عزل المستأجرين (Tenant Isolation):",
          body: "تطبيق البرمجيات الوسيطة (Tenant-aware middleware) وتحديد نطاق بيانات كل مستأجر على قاعدة البيانات.",
        },
        {
          head: "التحكم ثنائي الطبقات في الوصول (Dual-Layer RBAC):",
          body: "إعداد الصلاحيات القائمة على الأدوار (Role-Based Access Control) عبر نقاط نهاية API وأدوات تنفيذ الوكلاء.",
        },
      ],
    },
    {
      label: "الوحدة 2",
      title: "هندسة الوكلاء باستخدام CrewAI (Agent Engineering with CrewAI)",
      points: [
        {
          head: "تصميم تدفق الوكلاء (Agent Flow Design):",
          body: "هيكلة وكلاء CrewAI، المهام (Tasks)، ذاكرة التخزين المؤقت (Memory buffers)، وتدفقات التفويض (Delegation flows).",
        },
        {
          head: "الأدوات المحمية المخصصة (Custom Guarded Tools):",
          body: "بناء أدوات تنفيذ محددة بقواعد عزل البيانات الخاصة بكل مستأجر (Multi-tenant data access boundaries).",
        },
      ],
    },
    {
      label: "الوحدة 3",
      title:
        "التنفيذ غير المتزامن والبث المباشر للتقدم (Async Execution & Real-Time Progress Streaming)",
      points: [
        {
          head: "طوابير الخلفية (Background Queues):",
          body: "معالجة تشغيل الوكلاء كثيفة الاستهلاك في خلفية النظام باستخدام Celery والمدعوم بـ Redis.",
        },
        {
          head: "نشر أحداث Redis:",
          body: "نشر استدعاءات الوكلاء خطوة بخطوة عبر قنوات Redis Pub/Sub.",
        },
        {
          head: "البث المباشر (Live SSE Streaming):",
          body: "بث تحديثات التقدم المباشرة إلى تطبيق Next.js باستخدام أحداث إرسال الخادم (Server-Sent Events - SSE).",
        },
      ],
    },
    {
      label: "الوحدة 4",
      title: "لوحة تحكم Next.js وتطبيق تلغرام المصغر (Next.js Dashboard & Telegram Mini App - TMA)",
      points: [
        {
          head: "واجهة لوحة الويب (Web Dashboard UX):",
          body: "بناء واجهات حديثة تعرض خطوات التفكير الحية للوكلاء أثناء المعالجة.",
        },
        {
          head: "تكامل تلغرام (Telegram Integration):",
          body: "تطوير بوتات تلغرام (Telegram Bots) وتضمين تطبيقات تلغرام المصغرة (Telegram Mini Apps - TMA) للتفاعل عبر الهواتف المحمولة.",
        },
      ],
    },
    {
      label: "الوحدة 5",
      title: "تكاملات نظم إدارة العملاء ومساحات العمل (B2B CRM & Workspace Integrations)",
      points: [
        {
          head: "أتمتة خطافات الويب (Webhook Automation):",
          body: "استقبال خطافات الويب (Webhooks) من Salesforce وHubSpot لتشغيل مسارات عمل الوكلاء التلقائية.",
        },
        {
          head: "حلقات إجراءات مساحة العمل (Workspace Action Loops):",
          body: "أتمتة تحديثات سجلات CRM وإرسال إشعارات Slack مع تضمين خطوات موافقة العنصر البشري (Human-in-the-loop).",
        },
      ],
    },
    {
      label: "الوحدة 6",
      title:
        "تجربة المطور بالذكاء الاصطناعي والنشر الإنتاجي (AI-Assisted DX & Production Deployment)",
      points: [
        {
          head: "بيئة تطوير محسنة للسياق (Context-Optimized DX):",
          body: "هيكلة حدود كود المشروع لزيادة دقة أدوات البرمجة بالذكاء الاصطناعي (مثل Cursor وCopilot).",
        },
        {
          head: "النشر الإنتاجي (Production Deployment):",
          body: "نشر الخدمات الحاوية عبر Docker مع تحديد معدل طلبات API (Rate limits) لكل مستأجر وإعداد مهل زمنية (Timeouts) لتنفيذ المهام.",
        },
      ],
    },
  ],
  reviewsHeading: "التقييمات",
  addReview: "أضف تقييماً",
  closeReview: "إغلاق",
  namePlaceholder: "اسمك",
  starLabel: (n) => (n === 1 ? "نجمة واحدة" : n === 2 ? "نجمتان" : `${n} نجوم`),
  reviewPlaceholder: "تقييمك",
  postReview: "نشر التقييم",
  anonymousLabel: "مجهول",
  seedReviews: [],
  noReviews: "لا توجد تقييمات بعد — كن أول من يشارك تجربته.",
  trainerEyebrow: "مدرّبك",
  trainerTitle: "مهندس برمجيات متكامل (Full-Stack) ومتخصص في الذكاء الاصطناعي",
  trainerP1:
    "أقوم ببناء منصات SaaS مدعومة بالذكاء الاصطناعي، وأنظمة متعددة المستأجرين (Multi-tenant)، وبنى تحتية خلفية (Backend) بمستوى إنتاجي، باستخدام Django وNext.js وCrewAI وأحدث تقنيات الذكاء الاصطناعي.",
  trainerP2:
    "تشمل خبرتي تصميم وتسليم حلول برمجية متكاملة من البداية إلى النهاية — من الهندسة المعمارية وتطوير الخلفية (Backend) إلى تطبيقات الواجهة الأمامية (Frontend) ودمج الذكاء الاصطناعي. أركّز على بناء منتجات قابلة للتوسّع تجمع بين وكلاء الذكاء الاصطناعي، والأتمتة، وتكاملات المؤسسات لحل مشكلات عمل حقيقية.",
  ratingBadge: "تقييم 5.0 على",
  linkGithub: "GitHub",
  linkUpwork: "Upwork",
  audienceHeading: "لمن هذه الدورة",
  audience: [
    "المبتدؤون تماماً الباحثون عن مسار شامل من البداية للنهاية",
    "مطورو Python/Django",
    "مهندسو React/Next.js",
    "بناة الذكاء الاصطناعي الراغبون في إطلاق منصات SaaS للمؤسسات",
  ],
  prereqHeading: "المتطلبات السابقة",
  prereqLines: [
    { pre: "شغف أساسي بالبرمجة للمبتدئين (البدء من ", strong: "الوحدة 0", post: ")." },
    {
      pre: "المطورون المتوسطون الذين يمتلكون أساسيات Python وDjango وReact يمكنهم الانتقال مباشرة إلى ",
      strong: "الوحدة 1",
      post: ".",
    },
  ],
  enrollHeading: "أطلق منصة وكلاء متكاملة للمؤسسات، لا مجرد نموذج تجريبي.",
  enrollBody:
    "سبع وحدات، من أساسيات Python إلى النشر متعدد المستأجرين عبر Docker مع حدود لمعدل الطلبات (Rate limits) لكل مستأجر.",
  enrollNote: "الأسعار ومواعيد الدفعات — أضفها هنا",
  footerTagline: "الأنظمة متعددة الوكلاء للمؤسسات",
  enrollDialogTitle: "التسجيل في الدورة",
  enrollDialogBody: "سنتواصل معك لفهم احتياجاتك وتزويدك بكل التفاصيل.",
  enrollNamePlaceholder: "اسمك",
  enrollEmailPlaceholder: "بريدك الإلكتروني",
  enrollPhonePlaceholder: "الهاتف",
  enrollPhoneNotice: "رقم الهاتف مطلوب — سنتصل بك لتحديد مستواك وأهدافك.",
  enrollSubmitting: "جارٍ الإرسال…",
  enrollSuccess: "شكراً لك! سنتواصل معك قريباً.",
  enrollError: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
  enrollAltLink: "تفضّل التحدث أولاً؟ احجز مكالمة",
  reviewDialogTitle: "شاركنا تجربتك",
  reviewSubmitting: "جارٍ النشر…",
  reviewSuccess: "شكراً لتقييمك!",
  reviewError: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
  closeLabel: "إغلاق",
  menuLabel: "القائمة",
};

type CourseLandingProps = {
  theme?: "light" | "dark";
  enrollHref?: string;
  videoSrc?: string | null;
  videoPoster?: string;
};

export default function CourseLanding({
  theme = "light",
  enrollHref = "#enroll",
  videoSrc = null,
  videoPoster,
}: CourseLandingProps) {
  const { lang, dir, setLang } = useI18n();
  const isAr = lang === "ar";
  const c = isAr ? AR_CONTENT : EN_CONTENT;
  const arrow = dir === "rtl" ? "←" : "→";

  const t = THEMES[theme] ?? THEMES.light;
  const ink = (a: number) => `rgba(${t.inkRgb},${a})`;
  const sans = isAr
    ? "'Cairo','Instrument Sans',system-ui,sans-serif"
    : "'Instrument Sans',system-ui,sans-serif";
  const mono = "'JetBrains Mono',ui-monospace,monospace";
  // JetBrains Mono has no Arabic glyphs, and negative/wide letter-spacing breaks Arabic
  // letter joining — use these wherever a `mono`-styled span can hold Arabic text.
  const label = isAr ? sans : mono;
  const ls = (v: string) => (isAr ? "normal" : v);
  // Shows the flag/code of the language you'll switch TO, not the current one.
  const langFlag = isAr ? "🇺🇸" : "🇲🇦";
  const langCode = isAr ? "EN" : "AR";

  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  const allOpen = c.modules.every((_, i) => open[i]);
  const [reviews, setReviews] = useState<Review[]>(c.seedReviews);
  const nameRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const ratingRef = useRef<HTMLSelectElement>(null);

  type FormStatus = "idle" | "submitting" | "success" | "error";

  const [enrollOpen, setEnrollOpen] = useState(false);
  const [enrollStatus, setEnrollStatus] = useState<FormStatus>("idle");
  const enrollNameRef = useRef<HTMLInputElement>(null);
  const enrollEmailRef = useRef<HTMLInputElement>(null);
  const enrollPhoneRef = useRef<HTMLInputElement>(null);

  const openEnroll = () => {
    setEnrollStatus("idle");
    setEnrollOpen(true);
  };

  const submitEnroll = async () => {
    const name = (enrollNameRef.current?.value || "").trim();
    const email = (enrollEmailRef.current?.value || "").trim();
    const phone = (enrollPhoneRef.current?.value || "").trim();
    if (!name || !email || !phone) return;
    setEnrollStatus("submitting");
    const ok = await submitEnrollment({ name, email, phone, lang });
    setEnrollStatus(ok ? "success" : "error");
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewStatus, setReviewStatus] = useState<FormStatus>("idle");

  const openReview = () => {
    setReviewStatus("idle");
    setReviewOpen(true);
  };

  const submitReview = async () => {
    const text = (textRef.current?.value || "").trim();
    if (!text) return;
    const name = (nameRef.current?.value || "").trim() || c.anonymousLabel;
    const rating = parseInt(ratingRef.current?.value || "5", 10);
    setReviewStatus("submitting");
    const ok = await submitReviewToSupabase({ name, rating, text, lang });
    if (ok) {
      setReviews((r) => [{ name, rating, text }, ...r]);
      setReviewStatus("success");
    } else {
      setReviewStatus("error");
    }
  };

  const btn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 10,
    background: t.accent,
    color: t.onAccent,
    fontWeight: 600,
    textDecoration: "none",
  };
  const field: CSSProperties = {
    padding: "11px 13px",
    borderRadius: 8,
    border: `1px solid ${ink(0.16)}`,
    background: "transparent",
    color: t.ink,
    font: `400 15px/1.3 ${sans}`,
  };
  const card: CSSProperties = {
    background: t.bg,
    border: `1px solid ${ink(0.12)}`,
    borderRadius: 12,
    padding: 22,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  };

  const overlayStyle: CSSProperties = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 60,
  };
  const dialogContentStyle: CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "min(92vw, 440px)",
    maxHeight: "85vh",
    overflowY: "auto",
    background: t.bg,
    color: t.ink,
    border: `1px solid ${ink(0.14)}`,
    borderRadius: 14,
    padding: 24,
    zIndex: 61,
    fontFamily: sans,
  };
  const dialogCloseStyle: CSSProperties = {
    position: "absolute",
    top: 14,
    insetInlineEnd: 14,
    background: "none",
    border: 0,
    cursor: "pointer",
    color: ink(0.5),
    fontSize: 16,
    lineHeight: 1,
  };

  const css = `
.cl-hero{display:grid;grid-template-columns:1.02fr .98fr;gap:52px;align-items:center}
@media (max-width:900px){.cl-hero{grid-template-columns:minmax(0,1fr);gap:34px}}
.cl-pillars{display:grid;gap:1px;grid-template-columns:repeat(4,minmax(0,1fr))}
@media (max-width:980px){.cl-pillars{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:620px){.cl-pillars{grid-template-columns:minmax(0,1fr)}}
.cl-modbody{padding:0 4px 28px 100px}
[dir="rtl"] .cl-modbody{padding:0 100px 28px 4px}
@media (max-width:620px){
  .cl-modbody{padding-left:4px}
  [dir="rtl"] .cl-modbody{padding-left:0;padding-right:4px}
}
@keyframes clpulse{0%,100%{opacity:.35}50%{opacity:1}}
.cl-root a.cl-link:hover{color:${t.accentHover}}
.cl-menu-btn{display:none}
@media (max-width:640px){
  /* !important is required: these elements set display via inline style,
     which otherwise wins over a stylesheet rule. */
  .cl-navlinks{display:none!important}
  .cl-nav-enroll{display:none!important}
  .cl-menu-btn{display:inline-flex}
}
`;

  const videoBox = videoSrc ? (
    <div
      style={{
        aspectRatio: "16/9",
        width: "100%",
        borderRadius: 14,
        overflow: "hidden",
        border: `1px solid ${ink(0.14)}`,
      }}
    >
      <video
        src={videoSrc}
        poster={videoPoster}
        controls
        preload="metadata"
        playsInline
        style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
      />
    </div>
  ) : (
    <div
      style={{
        aspectRatio: "16/9",
        width: "100%",
        border: `1px solid ${ink(0.14)}`,
        borderRadius: 14,
        background: `repeating-linear-gradient(135deg,${ink(0.05)} 0 10px,transparent 10px 20px)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        textAlign: "center",
        padding: 28,
      }}
    >
      <div
        style={{
          width: 62,
          height: 62,
          borderRadius: "50%",
          border: `1px solid ${ink(0.25)}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: ink(0.6),
          fontSize: 19,
        }}
      >
        ▶
      </div>
      <p style={{ margin: 0, font: `400 12.5px/1.6 ${label}`, color: ink(0.6), maxWidth: "34ch" }}>
        {c.videoBefore}
        <code style={{ fontFamily: mono }}>videoSrc</code>
        {c.videoAfter}
      </p>
    </div>
  );

  return (
    <div
      className="cl-root"
      style={{
        background: t.bg,
        color: t.ink,
        fontFamily: sans,
        WebkitFontSmoothing: "antialiased",
        overflow: "hidden",
        maxWidth: "100%",
      }}
    >
      <style>{css}</style>

      <header
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "28px 28px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
         
          <div className="relative inline-flex items-center">
            <span className="absolute -top-3 left-0 px-1.5 py-0.5 text-[10px] font-semibold leading-none rounded bg-sky-100 text-sky-700 whitespace-nowrap">I code</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 288" className="w-[80px] h-auto fill-current text-brand">
              <ellipse cx="996" cy="204" fill="#FA541C" rx="60" ry="60"></ellipse>
              <path fill="#1f2a55" d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z">
              </path>
            </svg>
          </div>
        </div>
        <nav
          style={{ display: "flex", gap: 16, alignItems: "center", fontSize: 14, color: ink(0.6) }}
        >
          <div className="cl-navlinks" style={{ display: "flex", gap: 26, alignItems: "center" }}>
            <a href="#curriculum" style={{ color: "inherit", textDecoration: "none" }}>
              {c.curriculumHeading}
            </a>
            <a href="#reviews" style={{ color: "inherit", textDecoration: "none" }}>
              {c.reviewsHeading}
            </a>
            <a href="#audience" style={{ color: "inherit", textDecoration: "none" }}>
              {c.audienceHeading}
            </a>
          </div>
          <button
            onClick={() => setLang(isAr ? "en" : "ar")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 10px",
              borderRadius: 7,
              border: `1px solid ${ink(0.16)}`,
              background: "transparent",
              color: ink(0.7),
              font: `500 12px/1 ${mono}`,
              cursor: "pointer",
            }}
          >
            <span>{langFlag}</span>
            {langCode}
          </button>
          <button
            onClick={openEnroll}
            className="cl-nav-enroll"
            style={{
              ...btn,
              border: 0,
              padding: "9px 16px",
              borderRadius: 8,
              fontSize: 14,
              fontFamily: sans,
              cursor: "pointer",
            }}
          >
            {c.navEnroll}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="cl-menu-btn"
            aria-label={c.menuLabel}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              borderRadius: 7,
              border: `1px solid ${ink(0.16)}`,
              background: "transparent",
              color: ink(0.7),
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </nav>
      </header>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "88px 28px 72px" }}>
        <div className="cl-hero">
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "6px 12px 6px 9px",
                border: `1px solid ${ink(0.14)}`,
                borderRadius: 100,
                font: `400 14px/1 ${label}`,
                color: ink(0.66),
                marginBottom: 30,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.accent }} />
              {c.badge}
              <div
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: t.accent,
              animation: "clpulse 2.4s ease-in-out infinite",
            }}
          />
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: c.h1FontSize,
                lineHeight: isAr ? 1.35 : 1.02,
                letterSpacing: ls("-0.035em"),
                fontWeight: 600,
                maxWidth: c.h1MaxWidth,
                textWrap: "balance",
              }}
            >
              {c.h1}
            </h1>
            <p
              style={{
                margin: "22px 0 0",
                fontSize: "clamp(17px,2vw,21px)",
                lineHeight: 1.5,
                color: ink(0.66),
                maxWidth: "56ch",
                textWrap: "pretty",
              }}
            >
              {c.lead}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 38,
                alignItems: "center",
              }}
            >
              <button
                onClick={openEnroll}
                style={{
                  ...btn,
                  border: 0,
                  padding: "14px 26px",
                  fontSize: 16,
                  fontFamily: sans,
                  cursor: "pointer",
                }}
              >
                {c.ctaEnroll}
              </button>
              <a
                href="#curriculum"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "14px 24px",
                  borderRadius: 10,
                  border: `1px solid ${ink(0.16)}`,
                  color: ink(0.85),
                  fontWeight: 500,
                  fontSize: 16,
                  textDecoration: "none",
                }}
              >
                {c.ctaCurriculum}
              </a>
            </div>
          </div>
          <div>{videoBox}</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 46 }}>
          {STACK.map((s) => (
            <span
              key={s}
              style={{
                padding: "7px 13px",
                border: `1px solid ${ink(0.12)}`,
                borderRadius: 7,
                font: `400 12.5px/1 ${mono}`,
                color: ink(0.6),
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section id="format" style={{ borderTop: `1px solid ${ink(0.1)}`, scrollMarginTop: 20 }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "56px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
            gap: 36,
          }}
        >
          {c.format.map((f) => (
            <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <span
                style={{
                  font: `500 11.5px/1 ${label}`,
                  letterSpacing: ls(".08em"),
                  textTransform: "uppercase",
                  color: t.accent,
                }}
              >
                {f.label}
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: 16.5,
                  lineHeight: 1.5,
                  color: ink(0.78),
                  textWrap: "pretty",
                }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${ink(0.1)}`, background: t.alt }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 28px" }}>
          <h2
            style={{
              margin: "0 0 8px",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: ls("0.09em"),
              textTransform: "uppercase",
              color: ink(t.dim2),
              fontFamily: label,
            }}
          >
            {c.pillarsEyebrow}
          </h2>
          <div
            className="cl-pillars"
            style={{
              background: ink(0.1),
              border: `1px solid ${ink(0.1)}`,
              borderRadius: 12,
              overflow: "hidden",
              marginTop: 28,
            }}
          >
            {c.pillars.map((p) => (
              <div
                key={p.num}
                style={{
                  background: t.bg,
                  padding: "28px 24px 30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  minHeight: 230,
                }}
              >
                <div style={{ font: `500 11.5px/1 ${mono}`, color: t.accent }}>{p.num}</div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 19,
                    fontWeight: 600,
                    letterSpacing: ls("-0.02em"),
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ margin: 0, font: `400 13px/1.55 ${mono}`, color: ink(t.dim2) }}>
                  {p.stack}
                </p>
                <p
                  style={{
                    margin: "auto 0 0",
                    fontSize: 14.5,
                    lineHeight: 1.5,
                    color: ink(0.72),
                    textWrap: "pretty",
                  }}
                >
                  {p.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="curriculum"
        style={{ maxWidth: 1120, margin: "0 auto", padding: "88px 28px", scrollMarginTop: 20 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 20,
            flexWrap: "wrap",
            marginBottom: 34,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px,3.6vw,40px)",
              fontWeight: 600,
              letterSpacing: ls("-0.03em"),
            }}
          >
            {c.curriculumHeading}
          </h2>
          <button
            onClick={() => {
              const next: Record<number, boolean> = {};
              if (!allOpen)
                c.modules.forEach((_, i) => {
                  next[i] = true;
                });
              setOpen(next);
            }}
            style={{
              background: "none",
              border: `1px solid ${ink(0.16)}`,
              color: ink(0.7),
              padding: "8px 15px",
              borderRadius: 8,
              font: `400 13px/1 ${label}`,
              cursor: "pointer",
            }}
          >
            {allOpen ? c.collapseAll : c.expandAll}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            background: ink(0.1),
            borderTop: `1px solid ${ink(0.1)}`,
            borderBottom: `1px solid ${ink(0.1)}`,
          }}
        >
          {c.modules.map((m, i) => (
            <div key={m.label} style={{ background: t.bg }}>
              <button
                onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
                style={{
                  width: "100%",
                  background: "none",
                  border: 0,
                  padding: "24px 4px",
                  display: "flex",
                  alignItems: "baseline",
                  gap: 20,
                  cursor: "pointer",
                  color: "inherit",
                  fontFamily: "inherit",
                }}
              >
                <span
                  style={{
                    font: `500 12.5px/1.6 ${label}`,
                    color: t.accent,
                    flex: "none",
                    width: 80,
                  }}
                >
                  {m.label}
                </span>
                <span
                  style={{
                    flex: 1,
                    fontSize: "clamp(17px,2vw,20px)",
                    fontWeight: 600,
                    letterSpacing: ls("-0.02em"),
                    lineHeight: 1.3,
                    textWrap: "pretty",
                  }}
                >
                  {m.title}
                </span>
                <span style={{ flex: "none", fontSize: 20, color: ink(0.4), lineHeight: 1 }}>
                  {open[i] ? "−" : "+"}
                </span>
              </button>
              {open[i] && (
                <div
                  className="cl-modbody"
                  style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 820 }}
                >
                  {m.points.map((pt) => (
                    <div
                      key={pt.head}
                      style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                    >
                      <span
                        style={{
                          flex: "none",
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: ink(t.dim3),
                          marginTop: 9,
                        }}
                      />
                      <p
                        style={{
                          margin: 0,
                          fontSize: 15.5,
                          lineHeight: 1.55,
                          color: ink(0.74),
                          textWrap: "pretty",
                        }}
                      >
                        <strong style={{ color: t.ink, fontWeight: 600 }}>{pt.head}</strong>{" "}
                        {pt.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        id="reviews"
        style={{ borderTop: `1px solid ${ink(0.1)}`, background: t.alt, scrollMarginTop: 20 }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 28px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 20,
              flexWrap: "wrap",
              marginBottom: 30,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(28px,3.6vw,40px)",
                fontWeight: 600,
                letterSpacing: ls("-0.03em"),
              }}
            >
              {c.reviewsHeading}
            </h2>
            <button
              onClick={openReview}
              style={{
                ...btn,
                border: 0,
                padding: "11px 20px",
                borderRadius: 9,
                font: `600 14px/1 ${sans}`,
                cursor: "pointer",
              }}
            >
              {c.addReview}
            </button>
          </div>

          {reviews.length === 0 ? (
            <p style={{ margin: 0, fontSize: 15, color: ink(0.6) }}>{c.noReviews}</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
                gap: 18,
              }}
            >
              {reviews.map((r, i) => (
                <div key={i} style={card}>
                  <span style={{ fontSize: 14, letterSpacing: 2, color: t.accent, lineHeight: 1 }}>
                    {"★".repeat(r.rating) + "☆".repeat(5 - r.rating)}
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 15.5,
                      lineHeight: 1.55,
                      color: ink(0.8),
                      textWrap: "pretty",
                    }}
                  >
                    {r.text}
                  </p>
                  <span
                    style={{ marginTop: "auto", font: `400 12px/1 ${label}`, color: ink(t.dim2) }}
                  >
                    {r.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="trainer" style={{ scrollMarginTop: 20 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "88px 28px" }}>
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                margin: "0 0 6px",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: ls("0.09em"),
                textTransform: "uppercase",
                color: ink(t.dim2),
                fontFamily: label,
              }}
            >
              {c.trainerEyebrow}
            </h2>
            <h3
              style={{
                margin: 0,
                fontSize: "clamp(26px,3.4vw,38px)",
                fontWeight: 600,
                letterSpacing: ls("-0.03em"),
                lineHeight: 1.1,
                textWrap: "balance",
              }}
            >
              {c.trainerTitle}
            </h3>
            <p
              style={{
                margin: "20px 0 0",
                fontSize: 16.5,
                lineHeight: 1.6,
                color: ink(0.78),
                textWrap: "pretty",
              }}
            >
              {c.trainerP1}
            </p>
            <p
              style={{
                margin: "16px 0 0",
                fontSize: 16.5,
                lineHeight: 1.6,
                color: ink(0.78),
                textWrap: "pretty",
              }}
            >
              {c.trainerP2}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginTop: 26,
                padding: "14px 18px",
                border: `1px solid ${ink(0.14)}`,
                borderRadius: 10,
                maxWidth: "100%",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: 15, letterSpacing: 2, color: t.accent, lineHeight: 1 }}>
                ★★★★★
              </span>
              <span style={{ font: `500 13px/1 ${label}`, color: t.ink }}>{c.ratingBadge}</span>
              <img src="/Upwork-Logo.svg" alt="Upwork" style={{ height: 14, width: "auto" }} />
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 12,
                marginTop: 20,
              }}
            >
              {[
                {
                  label: c.linkGithub,
                  href: "https://github.com/Sohaib-radi",
                  logo: "/GitHub_Logo.svg",
                },
                {
                  label: c.linkUpwork,
                  href: "https://www.upwork.com/freelancers/~01c146d19986ff58ec?mp_source=share",
                  logo: "/Upwork-Logo.svg",
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "11px 17px",
                    border: `1px solid ${ink(0.16)}`,
                    borderRadius: 9,
                    color: t.ink,
                    font: `500 14px/1 ${mono}`,
                    textDecoration: "none",
                  }}
                >
                  <img src={l.logo} alt={l.label} style={{ height: 16, width: "auto" }} />
                  {l.label}
                  <span style={{ color: ink(0.45) }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="audience"
        style={{ borderTop: `1px solid ${ink(0.1)}`, background: t.alt, scrollMarginTop: 20 }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "80px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
            gap: 48,
          }}
        >
          <div>
            <h2
              style={{
                margin: "0 0 20px",
                fontSize: "clamp(24px,3vw,32px)",
                fontWeight: 600,
                letterSpacing: ls("-0.03em"),
              }}
            >
              {c.audienceHeading}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {c.audience.map((a) => (
                <div key={a} style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                  <span style={{ flex: "none", font: `500 12px/1.7 ${label}`, color: t.accent }}>
                    {arrow}
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 16,
                      lineHeight: 1.5,
                      color: ink(0.76),
                      textWrap: "pretty",
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2
              style={{
                margin: "0 0 20px",
                fontSize: "clamp(24px,3vw,32px)",
                fontWeight: 600,
                letterSpacing: ls("-0.03em"),
              }}
            >
              {c.prereqHeading}
            </h2>
            {c.prereqLines.map((line, i): ReactNode => (
              <p
                key={line.strong}
                style={{
                  margin: i === 0 ? "0 0 16px" : 0,
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: ink(0.76),
                  textWrap: "pretty",
                }}
              >
                {line.pre}
                <strong style={{ color: t.ink, fontWeight: 600 }}>{line.strong}</strong>
                {line.post}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="enroll" style={{ borderTop: `1px solid ${ink(0.1)}`, scrollMarginTop: 20 }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "96px 28px 110px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px,4.6vw,52px)",
              fontWeight: 600,
              letterSpacing: ls("-0.035em"),
              lineHeight: isAr ? 1.3 : 1.08,
              maxWidth: isAr ? "34ch" : "18ch",
              textWrap: "balance",
            }}
          >
            {c.enrollHeading}
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.55,
              color: ink(0.6),
              maxWidth: "52ch",
              textWrap: "pretty",
            }}
          >
            {c.enrollBody}
          </p>
          <button
            onClick={openEnroll}
            style={{
              ...btn,
              border: 0,
              padding: "16px 34px",
              fontSize: 17,
              marginTop: 8,
              fontFamily: sans,
              cursor: "pointer",
            }}
          >
            {c.ctaEnroll}
          </button>
          <p style={{ margin: 0, font: `400 12.5px/1 ${label}`, color: ink(t.dim1) }}>
            {c.enrollNote}
          </p>
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${ink(0.1)}` }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "26px 28px",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            font: `400 12.5px/1.6 ${label}`,
            color: ink(t.dim1),
          }}
        >
          <span>{c.footerTagline}</span>
          <span>{FOOTER_STACK}</span>
        </div>
      </footer>

      <Dialog.Root open={enrollOpen} onOpenChange={setEnrollOpen}>
        <Dialog.Portal>
          <Dialog.Overlay style={overlayStyle} />
          <Dialog.Content style={dialogContentStyle}>
            <Dialog.Title
              style={{ margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: ls("-0.02em") }}
            >
              {c.enrollDialogTitle}
            </Dialog.Title>
            <Dialog.Description
              style={{ margin: "8px 0 20px", fontSize: 14.5, color: ink(0.7), lineHeight: 1.5 }}
            >
              {c.enrollDialogBody}
            </Dialog.Description>

            {enrollStatus === "success" ? (
              <p style={{ margin: 0, fontSize: 15, color: t.accent }}>{c.enrollSuccess}</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input
                  ref={enrollNameRef}
                  placeholder={c.enrollNamePlaceholder}
                  required
                  style={field}
                />
                <input
                  ref={enrollEmailRef}
                  type="email"
                  placeholder={c.enrollEmailPlaceholder}
                  required
                  style={field}
                />
                <input
                  ref={enrollPhoneRef}
                  type="tel"
                  placeholder={c.enrollPhonePlaceholder}
                  required
                  style={field}
                />
                <p style={{ margin: 0, fontSize: 12.5, color: ink(0.55), lineHeight: 1.5 }}>
                  {c.enrollPhoneNotice}
                </p>
                {enrollStatus === "error" && (
                  <p style={{ margin: 0, color: "#c0392b", fontSize: 13 }}>{c.enrollError}</p>
                )}
                <button
                  onClick={submitEnroll}
                  disabled={enrollStatus === "submitting"}
                  style={{
                    ...btn,
                    border: 0,
                    padding: "11px 20px",
                    borderRadius: 9,
                    font: `600 14px/1 ${sans}`,
                    cursor: enrollStatus === "submitting" ? "default" : "pointer",
                    opacity: enrollStatus === "submitting" ? 0.6 : 1,
                  }}
                >
                  {enrollStatus === "submitting" ? c.enrollSubmitting : c.ctaEnroll}
                </button>
                <a
                  href={enrollHref}
                  style={{
                    fontSize: 13,
                    color: ink(0.55),
                    textAlign: "center",
                    textDecoration: "underline",
                  }}
                >
                  {c.enrollAltLink}
                </a>
              </div>
            )}

            <Dialog.Close style={dialogCloseStyle} aria-label={c.closeLabel}>
              ✕
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={reviewOpen} onOpenChange={setReviewOpen}>
        <Dialog.Portal>
          <Dialog.Overlay style={overlayStyle} />
          <Dialog.Content style={dialogContentStyle}>
            <Dialog.Title
              style={{ margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: ls("-0.02em") }}
            >
              {c.reviewDialogTitle}
            </Dialog.Title>

            {reviewStatus === "success" ? (
              <p style={{ margin: "16px 0 0", fontSize: 15, color: t.accent }}>{c.reviewSuccess}</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16 }}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <input
                    ref={nameRef}
                    placeholder={c.namePlaceholder}
                    style={{ ...field, flex: "1 1 200px", minWidth: 0 }}
                  />
                  <select ref={ratingRef} defaultValue="5" style={{ ...field, flex: "0 0 auto" }}>
                    {[5, 4, 3, 2, 1].map((n) => (
                      <option key={n} value={n}>
                        {c.starLabel(n)}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  ref={textRef}
                  rows={3}
                  placeholder={c.reviewPlaceholder}
                  style={{ ...field, width: "100%", lineHeight: 1.5, resize: "vertical" }}
                />
                {reviewStatus === "error" && (
                  <p style={{ margin: 0, color: "#c0392b", fontSize: 13 }}>{c.reviewError}</p>
                )}
                <button
                  onClick={submitReview}
                  disabled={reviewStatus === "submitting"}
                  style={{
                    ...btn,
                    alignSelf: "flex-start",
                    border: 0,
                    padding: "11px 20px",
                    borderRadius: 9,
                    font: `600 14px/1 ${sans}`,
                    cursor: reviewStatus === "submitting" ? "default" : "pointer",
                    opacity: reviewStatus === "submitting" ? 0.6 : 1,
                  }}
                >
                  {reviewStatus === "submitting" ? c.reviewSubmitting : c.postReview}
                </button>
              </div>
            )}

            <Dialog.Close style={dialogCloseStyle} aria-label={c.closeLabel}>
              ✕
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <Dialog.Portal>
          <Dialog.Overlay style={{ ...overlayStyle, zIndex: 70 }} />
          <Dialog.Content
            style={{
              position: "fixed",
              top: 0,
              insetInlineEnd: 0,
              height: "100dvh",
              width: "min(78vw, 320px)",
              background: t.bg,
              color: t.ink,
              borderInlineStart: `1px solid ${ink(0.14)}`,
              padding: "24px 22px",
              zIndex: 71,
              fontFamily: sans,
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            <Dialog.Title
              style={{
                margin: 0,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: ls("0.09em"),
                textTransform: "uppercase",
                color: ink(t.dim2),
                fontFamily: label,
              }}
            >
              {c.menuLabel}
            </Dialog.Title>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 16 }}>
              <a
                href="#curriculum"
                onClick={() => setMenuOpen(false)}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {c.curriculumHeading}
              </a>
              <a
                href="#reviews"
                onClick={() => setMenuOpen(false)}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {c.reviewsHeading}
              </a>
              <a
                href="#audience"
                onClick={() => setMenuOpen(false)}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {c.audienceHeading}
              </a>
            </div>
            <button
              onClick={() => {
                setMenuOpen(false);
                openEnroll();
              }}
              style={{
                ...btn,
                border: 0,
                padding: "11px 20px",
                borderRadius: 9,
                fontSize: 14,
                fontFamily: sans,
                cursor: "pointer",
              }}
            >
              {c.navEnroll}
            </button>

            <Dialog.Close style={dialogCloseStyle} aria-label={c.closeLabel}>
              ✕
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

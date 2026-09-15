import { createFileRoute, Link } from "@tanstack/react-router";
import { Workflow } from "lucide-react";
import type { ReactNode } from "react";

import coursePromo from "@/assets/course-promo.mp4";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/formations")({
  head: () => ({
    meta: [
      {
        title: "Enterprise Multi-Agent Systems: Django, Next.js, CrewAI & Telegram | Sohaib Radi",
      },
      {
        name: "description",
        content:
          "Build production-grade, multi-tenant AI platforms with async task streaming, Telegram Mini Apps, and enterprise CRM integrations.",
      },
      {
        property: "og:title",
        content: "Enterprise Multi-Agent Systems: Django, Next.js, CrewAI & Telegram",
      },
      {
        property: "og:description",
        content:
          "Build production-grade, multi-tenant AI platforms with async task streaming, Telegram Mini Apps, and enterprise CRM integrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FormationsPage,
});

type PillarRow = { pillar: string; stack: string; outcome: string };
type Module = { heading: string; bullets: string[] };
type CourseContent = {
  title: string;
  lead: string;
  pillarsHeading: string;
  pillarsColumns: [string, string, string];
  pillars: PillarRow[];
  curriculumHeading: string;
  modules: Module[];
  audienceHeading: string;
  audience: string[];
};

// Content below is copied verbatim from enterprise_multi_agent_systems_course.md
const EN: CourseContent = {
  title: "Enterprise Multi-Agent Systems: Django, Next.js, CrewAI & Telegram",
  lead: "Build production-grade, multi-tenant AI platforms with async task streaming, Telegram Mini Apps, and enterprise CRM integrations.",
  pillarsHeading: "🏛️ Course Overview & Pillars",
  pillarsColumns: ["Course Pillar", "Tech Stack", "Production Outcome"],
  pillars: [
    {
      pillar: "**Core Orchestration**",
      stack: "CrewAI, Python, LangChain",
      outcome: "Multi-agent autonomous workflows & custom safe tools",
    },
    {
      pillar: "**Enterprise Backend**",
      stack: "Django REST, Celery, Redis, PostgreSQL",
      outcome: "Multi-tenant isolation, RBAC permissions, async queues",
    },
    {
      pillar: "**Web & Mobile UX**",
      stack: "Next.js, Telegram Mini Apps (TMA)",
      outcome: "Live SSE streaming dashboard & Telegram chat interface",
    },
    {
      pillar: "**B2B Integrations**",
      stack: "Slack API, Salesforce, HubSpot",
      outcome: "Automated webhook ingestion, lead ops, & CRM updates",
    },
  ],
  curriculumHeading: "📚 Curriculum & Module Breakdown",
  modules: [
    {
      heading: "Module 0: Beginner Ramp-Up & Core Stack Essentials",
      bullets: [
        "**Python Basics:** OOP, environment setups, and `async`/`await` fundamentals.",
        "**Django & DRF Fast-Track:** ORM models, REST API endpoints, and JSON responses.",
        "**Next.js Fundamentals:** React state, API fetching, and Tailwind UI basics.",
        "**First Agent:** Setting up a single CrewAI agent and connecting it to a basic endpoint.",
      ],
    },
    {
      heading: "Module 1: Decoupled Multi-Tenant Architecture",
      bullets: [
        "**Modular Django Structures:** Designing app-level isolation (`apps.tenants`, `apps.agents`, `apps.integrations`).",
        "**Tenant Isolation:** Implementing tenant-aware middleware and database scoping.",
        "**Dual-Layer RBAC:** Configuring Role-Based Access Control across API endpoints and agent execution tools.",
      ],
    },
    {
      heading: "Module 2: Agent Engineering with CrewAI",
      bullets: [
        "**Agent Flow Design:** Structuring CrewAI agents, tasks, memory buffers, and delegation flows.",
        "**Custom Guarded Tools:** Building execution tools strictly guarded by multi-tenant data access boundaries.",
      ],
    },
    {
      heading: "Module 3: Async Execution & Real-Time Progress Streaming",
      bullets: [
        "**Background Queues:** Offloading heavy agent runs to Celery background workers backed by Redis.",
        "**Redis Event Publishing:** Publishing step-by-step agent callbacks to Redis Pub/Sub channels.",
        "**Live SSE Streaming:** Streaming real-time progress updates to Next.js using Server-Sent Events (SSE).",
      ],
    },
    {
      heading: "Module 4: Next.js Dashboard & Telegram Mini App (TMA)",
      bullets: [
        "**Web Dashboard UX:** Building modern interfaces with live agent thought-process visualizers.",
        "**Telegram Integration:** Developing Telegram Bots and embedding native Telegram Mini Apps (TMA) for mobile interactions.",
      ],
    },
    {
      heading: "Module 5: B2B CRM & Workspace Integrations",
      bullets: [
        "**Webhook Automation:** Ingesting Salesforce and HubSpot webhooks to trigger automated agent workflows.",
        "**Workspace Action Loops:** Automating CRM record updates and sending Slack notifications with human-in-the-loop approval steps.",
      ],
    },
    {
      heading: "Module 6: AI-Assisted DX & Production Deployment",
      bullets: [
        "**Context-Optimized DX:** Structuring codebase boundaries to maximize AI coding tool (Cursor/Copilot) precision.",
        "**Production Deployment:** Deploying Dockerized services with per-tenant API rate limits and task execution timeouts.",
      ],
    },
  ],
  audienceHeading: "🎯 Target Audience & Prerequisites",
  audience: [
    "**Target Audience:** Absolute beginners seeking an end-to-end path, Python/Django developers, React/Next.js engineers, and AI builders aiming to launch enterprise SaaS platforms.",
    "**Prerequisites:** Basic coding interest for beginners (start with **Module 0**). Intermediate developers with Python, Django, and React fundamentals can jump straight to **Module 1**.",
  ],
};

// Content below is copied verbatim from enterprise_multi_agent_systems_course_ar.md
const AR: CourseContent = {
  title:
    "الأنظمة متعددة الوكلاء للمؤسسات: Django وNext.js وCrewAI وتلغرام (Enterprise Multi-Agent Systems: Django, Next.js, CrewAI & Telegram)",
  lead: "بناء منصات ذكاء اصطناعي قابلة للتوسع ومتعددة المستأجرين (Multi-tenant) بمستوى إنتاجي مع البث غير المتزامن للمهام (Async task streaming)، تطبيقات تلغرام المصغرة (Telegram Mini Apps - TMA)، وتكاملات نظم إدارة علاقات العملاء (CRM) للمؤسسات.",
  pillarsHeading: "🏛️ نظرة عامة على الدورة والركائز الأساسية (Course Overview & Pillars)",
  pillarsColumns: [
    "الركيزة الأساسية (Course Pillar)",
    "التقنيات المستخدمة (Tech Stack)",
    "المخرجات الإنتاجية (Production Outcome)",
  ],
  pillars: [
    {
      pillar: "**التنسيق الرئيسي (Core Orchestration)**",
      stack: "CrewAI, Python, LangChain",
      outcome:
        "مسارات عمل ذاتية التحكم متعددة الوكلاء (Multi-agent autonomous workflows) وأدوات مخصصة وآمنة",
    },
    {
      pillar: "**الخلفية البرمجية للمؤسسات (Enterprise Backend)**",
      stack: "Django REST, Celery, Redis, PostgreSQL",
      outcome:
        "عزل متعدد المستأجرين (Multi-tenant isolation)، صلاحيات التحكم القائم على الأدوار (RBAC)، وطوابير المهام غير المتزامنة (Async queues)",
    },
    {
      pillar: "**واجهة المستخدم للويب والموبايل (Web & Mobile UX)**",
      stack: "Next.js, Telegram Mini Apps (TMA)",
      outcome:
        "لوحة تحكم ببث مباشر (Live SSE streaming) وواجهة محادثة تلغرام (Telegram chat interface)",
    },
    {
      pillar: "**تكاملات شركات الأعمال (B2B Integrations)**",
      stack: "Slack API, Salesforce, HubSpot",
      outcome:
        "استهلاك تلقائي لخطافات الويب (Webhooks)، إدارة العملاء المحتملين (Lead ops)، وتحديثات CRM",
    },
  ],
  curriculumHeading: "📚 منهج الدورة وتفاصيل الوحدات (Curriculum & Module Breakdown)",
  modules: [
    {
      heading:
        "الوحدة 0: التمهيد للمبتدئين وأساسيات التقنيات (Module 0: Beginner Ramp-Up & Core Stack Essentials)",
      bullets: [
        "**أساسيات لغة بايثون (Python Basics):** البرمجة كائنية التوجه (OOP)، إعدادات البيئة البرمجية، وأساسيات البرمجة غير المتزامنة (`async`/`await`).",
        "**المسار السريع لـ Django & DRF:** نماذج قاعدة البيانات (ORM models)، نقاط نهاية الواجهة البرمجية (REST API endpoints)، واستجابات بيانات (JSON responses).",
        "**أساسيات Next.js:** إدارة الحالة في React، جلب البيانات عبر API، وأساسيات تصميم الواجهات بـ Tailwind UI.",
        "**الوكيل الأول (First Agent):** إعداد وكيل فردي باستخدام CrewAI وربطه بنقطة نهاية برمجية أساسية.",
      ],
    },
    {
      heading:
        "الوحدة 1: الهندسة المعمارية المستقلة ومتعددة المستأجرين (Module 1: Decoupled Multi-Tenant Architecture)",
      bullets: [
        "**الهياكل النمطية لـ Django:** تصميم عزل التطبيقات على مستوى المشروع (`apps.tenants`, `apps.agents`, `apps.integrations`).",
        "**عزل المستأجرين (Tenant Isolation):** تطبيق البرمجيات الوسيطة (Tenant-aware middleware) وتحديد نطاق بيانات كل مستأجر على قاعدة البيانات.",
        "**التحكم ثنائي الطبقات في الوصول (Dual-Layer RBAC):** إعداد الصلاحيات القائمة على الأدوار (Role-Based Access Control) عبر نقاط نهاية API وأدوات تنفيذ الوكلاء.",
      ],
    },
    {
      heading: "الوحدة 2: هندسة الوكلاء باستخدام CrewAI (Module 2: Agent Engineering with CrewAI)",
      bullets: [
        "**تصميم تدفق الوكلاء (Agent Flow Design):** هيكلة وكلاء CrewAI، المهام (Tasks)، ذاكرة التخزين المؤقت (Memory buffers)، وتدفقات التفويض (Delegation flows).",
        "**الأدوات المحمية المخصصة (Custom Guarded Tools):** بناء أدوات تنفيذ محددة بقواعد عزل البيانات الخاصة بكل مستأجر (Multi-tenant data access boundaries).",
      ],
    },
    {
      heading:
        "الوحدة 3: التنفيذ غير المتزامن والبث المباشر للتقدم (Module 3: Async Execution & Real-Time Progress Streaming)",
      bullets: [
        "**طوابير الخلفية (Background Queues):** معالجة تشغيل الوكلاء كثيفة الاستهلاك في خلفية النظام باستخدام Celery والمدعوم بـ Redis.",
        "**نشر أحداث Redis:** نشر استدعاءات الوكلاء خطوة بخطوة عبر قنوات Redis Pub/Sub.",
        "**البث المباشر (Live SSE Streaming):** بث تحديثات التقدم المباشرة إلى تطبيق Next.js باستخدام أحداث إرسال الخادم (Server-Sent Events - SSE).",
      ],
    },
    {
      heading:
        "الوحدة 4: لوحة تحكم Next.js وتطبيق تلغرام المصغر (Module 4: Next.js Dashboard & Telegram Mini App - TMA)",
      bullets: [
        "**واجهة لوحة الويب (Web Dashboard UX):** بناء واجهات حديثة تعرض خطوات التفكير الحية للوكلاء أثناء المعالجة.",
        "**تكامل تلغرام (Telegram Integration):** تطوير بوتات تلغرام (Telegram Bots) وتضمين تطبيقات تلغرام المصغرة (Telegram Mini Apps - TMA) للتفاعل عبر الهواتف المحمولة.",
      ],
    },
    {
      heading:
        "الوحدة 5: تكاملات نظم إدارة العملاء ومساحات العمل (Module 5: B2B CRM & Workspace Integrations)",
      bullets: [
        "**أتمتة خطافات الويب (Webhook Automation):** استقبال خطافات الويب (Webhooks) من Salesforce وHubSpot لتشغيل مسارات عمل الوكلاء التلقائية.",
        "**حلقات إجراءات مساحة العمل (Workspace Action Loops):** أتمتة تحديثات سجلات CRM وإرسال إشعارات Slack مع تضمين خطوات موافقة العنصر البشري (Human-in-the-loop).",
      ],
    },
    {
      heading:
        "الوحدة 6: تجربة المطور بالذكاء الاصطناعي والنشر الإنتاجي (Module 6: AI-Assisted DX & Production Deployment)",
      bullets: [
        "**بيئة تطوير محسنة للسياق (Context-Optimized DX):** هيكلة حدود كود المشروع لزيادة دقة أدوات البرمجة بالذكاء الاصطناعي (مثل Cursor وCopilot).",
        "**النشر الإنتاجي (Production Deployment):** نشر الخدمات الحاوية عبر Docker مع تحديد معدل طلبات API (Rate limits) لكل مستأجر وإعداد مهل زمنية (Timeouts) لتنفيذ المهام.",
      ],
    },
  ],
  audienceHeading: "🎯 الجمهور المستهدف والمتطلبات السابقة (Target Audience & Prerequisites)",
  audience: [
    "**الجمهور المستهدف (Target Audience):** المبتدؤون تماماً الباحثون عن مسار شامل من البداية للنهاية، مطورو Python/Django، مهندسو React/Next.js، وبناة الذكاء الاصطناعي الراغبون في إطلاق منصات SaaS للمؤسسات.",
    "**المتطلبات السابقة (Prerequisites):** شغف أساسي بالبرمجة للمبتدئين (البدء من **الوحدة 0**). المطورون المتوسطون الذين يمتلكون أساسيات Python وDjango وReact يمكنهم الانتقال مباشرة إلى **الوحدة 1**.",
  ],
};

function renderInline(text: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
    .filter(Boolean)
    .map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={i} className="px-1 py-0.5 rounded bg-zinc-100 text-[0.85em] font-mono">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
}

function FormationsPage() {
  const { t, lang } = useI18n();
  const content = lang === "ar" ? AR : EN;

  return (
    <div className="min-h-screen bg-surface text-ink font-sans antialiased selection:bg-brand-muted">
      <SiteNav />

      <main>
        <section className="pt-20 pb-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-balance mb-6">
              {content.title}
            </h1>
            <video
              src={coursePromo}
              controls
              preload="metadata"
              playsInline
              className="w-full rounded-xl ring-1 ring-black/5 mb-6"
            />
            <p className="text-lg text-zinc-600 text-pretty italic">{renderInline(content.lead)}</p>
            <div className="mt-8">
              <Link
                to="/reservation"
                className="inline-block bg-brand text-surface text-sm font-medium px-8 py-3 rounded-lg hover:bg-brand/90 transition-colors"
              >
                {t.formations.enroll}
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">{content.pillarsHeading}</h2>
            <div className="overflow-x-auto rounded-xl ring-1 ring-black/5">
              <table className="w-full text-sm">
                <thead className="bg-zinc-100">
                  <tr>
                    {content.pillarsColumns.map((c) => (
                      <th key={c} className="px-4 py-3 font-medium text-zinc-700">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.pillars.map((row) => (
                    <tr key={row.stack} className="border-t border-zinc-200">
                      <td className="px-4 py-3 align-top">{renderInline(row.pillar)}</td>
                      <td className="px-4 py-3 align-top text-zinc-600">{row.stack}</td>
                      <td className="px-4 py-3 align-top text-zinc-600">{row.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">{content.curriculumHeading}</h2>
            <div className="grid gap-6">
              {content.modules.map((m) => (
                <div key={m.heading} className="bg-surface p-6 rounded-xl ring-1 ring-black/5">
                  <h3 className="text-lg font-medium mb-4">{m.heading}</h3>
                  <ul className="space-y-2">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-zinc-700">
                        <span className="size-1.5 rounded-full bg-brand mt-2 shrink-0" />
                        <span>{renderInline(b)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">{content.audienceHeading}</h2>
            <ul className="space-y-3">
              {content.audience.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-zinc-700">
                  <span className="size-1.5 rounded-full bg-brand mt-2 shrink-0" />
                  <span>{renderInline(a)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-brand p-12 rounded-2xl flex flex-col items-center text-center">
              <Workflow className="size-12 text-brand-muted mb-6" />
              <h2 className="text-3xl font-medium text-surface mb-6 text-balance">
                {t.formations.sessionsTitle}
              </h2>
              <p className="text-brand-muted mb-10 max-w-[60ch] text-pretty">
                {t.formations.sessionsBody}
              </p>
              <Link
                to="/reservation"
                className="bg-surface text-brand text-sm font-bold py-3 px-8 rounded-lg ring-1 ring-surface hover:bg-surface/90 transition-colors"
              >
                {t.formations.sessionsButton}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

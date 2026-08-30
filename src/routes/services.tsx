import { createFileRoute } from "@tanstack/react-router";
import { Bot, Check, Cpu, MessagesSquare, Rocket, Smartphone, Workflow } from "lucide-react";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mes Services — Dev Mobile, Web, SaaS & Agents IA | Sohaib Radi" },
      {
        name: "description",
        content:
          "Développement mobile et web, SaaS de l'idée au produit, systèmes multi-agents CrewAI, bots Telegram/WhatsApp et consultation technique.",
      },
      { property: "og:title", content: "Mes Services — Dev Mobile, Web, SaaS & Agents IA" },
      {
        property: "og:description",
        content:
          "Six prestations pour construire, automatiser et faire évoluer votre produit logiciel avec l'IA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const getIcon = (title: string) => {
  switch (title) {
    case "Développement Mobile":
    case "Mobile Development":
    case "تطوير تطبيقات الجوال":
      return Smartphone;
    case "Développement Web App":
    case "Web App Development":
    case "تطوير تطبيقات الويب":
      return Cpu;
    case "SaaS — de l'idée au produit":
    case "SaaS — from idea to product":
    case "SaaS — من الفكرة إلى المنتج":
      return Rocket;
    case "Systèmes Multi-Agents (CrewAI)":
    case "Multi-Agent Systems (CrewAI)":
    case "أنظمة الوكلاء المتعددين (CrewAI)":
      return Workflow;
    case "Bots & Agents Telegram / WhatsApp":
    case "Telegram / WhatsApp Bots & Agents":
    case "بوتات ووكلاء تلغرام / واتساب":
      return Bot;
    case "Consultation & Accompagnement":
    case "Consulting & Coaching":
    case "استشارات وتوجيه تقني":
      return MessagesSquare;
    default:
      return Workflow;
  }
};

function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-surface text-ink font-sans antialiased selection:bg-brand-muted">
      <SiteNav />

      <main>
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto max-w-[80ch] text-center ">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-muted text-brand text-xs font-semibold mb-6 uppercase tracking-wider">
              {t.services.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-balance mb-8">
              {t.services.h1}
            </h1>
            <p className="text-lg text-zinc-600 text-pretty">
              {t.services.lead}
            </p>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {t.services.items.map((s, index) => {
              const Icon = getIcon(s.title);
              return (
                <div
                  key={index}
                  className="scroll-mt-24 bg-surface p-8 rounded-xl ring-1 ring-black/5 flex flex-col"
                >
                  <div className="size-10 bg-brand-muted rounded-lg flex items-center justify-center mb-6">
                    <Icon className="size-5 text-brand shrink-0" />
                  </div>
                  <h2 className="text-xl font-medium mb-2">{s.title}</h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-green mb-4">{s.price}</p>
                  <p className="text-zinc-600 text-sm leading-normal text-pretty mb-6">{s.body}</p>
                  <ul className="space-y-3 mt-auto">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-zinc-800">
                        <span className="size-5 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-3 text-accent-green" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-brand p-12 rounded-2xl flex flex-col items-center text-center">
              <h2 className="text-3xl font-medium text-surface mb-6 text-balance">
                {t.services.ctaTitle}
              </h2>
              <p className="text-brand-muted mb-10 max-w-[48ch] text-pretty">
                {t.services.ctaBody}
              </p>
              <a
                href="mailto:contact@sohaib.dev"
                className="bg-surface text-brand text-sm font-medium py-3 px-8 rounded-lg ring-1 ring-surface hover:bg-surface/90 transition-colors"
              >
                {t.services.ctaButton}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

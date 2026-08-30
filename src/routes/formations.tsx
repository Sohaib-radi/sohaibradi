import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Check, Clock, Cpu, GraduationCap, Users, Workflow } from "lucide-react";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/formations")({
  head: () => ({
    meta: [
      { title: "Mes Formations — Full Stack, Web App & Multi-Agents | Sohaib Radi" },
      {
        name: "description",
        content:
          "Trois formations pratiques : devenir développeur full stack, créer des web apps professionnelles et développer des systèmes multi-agents avec CrewAI.",
      },
      { property: "og:title", content: "Mes Formations — Full Stack, Web App & Multi-Agents" },
      {
        property: "og:description",
        content:
          "Parcours intensifs en petits groupes, 100% projets réels, en présentiel à Casablanca ou en visio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FormationsPage,
});

function FormationsPage() {
  const { t } = useI18n();
  
  const formations = [
    { icon: Cpu, ...t.formations.items[0] },
    { icon: Users, ...t.formations.items[1] },
    { icon: Workflow, ...t.formations.items[2] },
  ];

  return (
    <div className="min-h-screen bg-surface text-ink font-sans antialiased selection:bg-brand-muted">
      <SiteNav />

      <main>
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="max-w-[80ch]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-muted text-brand text-xs font-semibold mb-6 uppercase tracking-wider">
                {t.formations.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-balance mb-8">
                {t.formations.h1}
              </h1>
              <p className="text-lg text-zinc-600 text-pretty">
                {t.formations.lead}
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            {formations.map((f) => (
              <div key={f.title} className="bg-surface p-8 rounded-xl ring-1 ring-black/5 flex flex-col">
                <div className="size-10 bg-brand-muted rounded-lg flex items-center justify-center mb-6">
                  <f.icon className="size-5 text-brand shrink-0" />
                </div>
                <h2 className="text-xl font-medium mb-3">{f.title}</h2>
                <div className="flex flex-col gap-2 mb-5">
                  <span className="flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1.5 rounded-md w-fit">
                    <Clock className="size-3.5" />
                    {f.duration}
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium text-amber-700 bg-amber-100 px-3 py-1.5 rounded-md w-fit">
                    <GraduationCap className="size-3.5" />
                    {f.level}
                  </span>
                </div>
                <p className="text-zinc-600 text-sm leading-normal text-pretty mb-6">{f.body}</p>
                <ul className="space-y-3 mb-8">
                  {(f.program || []).map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-zinc-800">
                      <span className="size-5 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-3 text-accent-green" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 border-t border-zinc-200">
                  <a
                    href="mailto:contact@sohaib.dev"
                    className="block w-full bg-brand text-surface text-sm font-medium py-3 rounded-lg hover:bg-brand/90 transition-colors text-center"
                  >
                    {t.formations.enroll}
                  </a>
                </div>
              </div>
            ))}
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
              <a
                href="mailto:contact@sohaib.dev"
                className="bg-surface text-brand text-sm font-bold py-3 px-8 rounded-lg ring-1 ring-surface hover:bg-surface/90 transition-colors"
              >
                {t.formations.sessionsButton}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

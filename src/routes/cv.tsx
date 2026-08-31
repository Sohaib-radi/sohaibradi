import { createFileRoute } from "@tanstack/react-router";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "Mon CV — Sohaib Radi, Développeur Full Stack & IA" },
      {
        name: "description",
        content:
          "Parcours, expériences, projets et compétences de Sohaib Radi : développement full stack, applications mobiles, SaaS et systèmes multi-agents.",
      },
      { property: "og:title", content: "Mon CV — Sohaib Radi, Développeur Full Stack & IA" },
      {
        property: "og:description",
        content:
          "6 ans d'expérience en développement produit, web, mobile et systèmes d'agents IA.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CvPage,
});

function CvPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-surface text-ink font-sans antialiased selection:bg-brand-muted">
      <SiteNav />

      <main>
        <section className="pt-20 pb-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-muted text-brand text-xs font-semibold mb-6 uppercase tracking-wider">
              {t.cv.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-balance mb-6">
              {t.cv.name}
            </h1>
            <p className="text-lg text-zinc-600 mb-10 max-w-full text-pretty">{t.cv.lead}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Sohaib-radi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <img src="/GitHub_Logo.svg" alt="GitHub" className="size-8" />
                <span className="text-sm font-semibold text-zinc-700">{t.cv.github}</span>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01c146d19986ff58ec?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <img src="/Upwork-Logo.svg" alt="Upwork" className="size-8" />
                <span className="text-sm font-semibold text-zinc-700">{t.cv.upwork}</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-zinc-100 border-y border-zinc-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium mb-10">{t.cv.experiencesTitle}</h2>
            <div className="space-y-8">
              {t.cv.experiences.map((e) => (
                <div key={e.role} className="bg-surface p-8 rounded-xl ring-1 ring-black/5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-green mb-3">
                    {e.period}
                  </p>
                  <h3 className="text-lg font-medium mb-1">{e.role}</h3>
                  <p className="text-sm text-zinc-500 mb-5">{e.place}</p>
                  <ul className="space-y-2">
                    {e.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-zinc-600 leading-normal text-pretty flex gap-3"
                      >
                        <span className="mt-2 size-1.5 rounded-full bg-brand shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium mb-10">{t.cv.skillsTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {t.cv.skills.map((s) => (
                <div key={s.group} className="bg-surface p-6 rounded-xl ring-1 ring-black/5">
                  <h3 className="text-sm font-semibold text-brand mb-4 uppercase tracking-wider">
                    {s.group}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium mb-10">{t.cv.educationTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-surface p-6 rounded-xl ring-1 ring-black/5">
                <h3 className="text-sm font-semibold text-brand mb-4 uppercase tracking-wider">
                  {t.cv.educationLabel}
                </h3>
                <p className="text-sm text-zinc-700 font-medium">{t.cv.educationValue}</p>
                <p className="text-sm text-zinc-500">{t.cv.educationSchool}</p>
              </div>
              <div className="bg-surface p-6 rounded-xl ring-1 ring-black/5">
                <h3 className="text-sm font-semibold text-brand mb-4 uppercase tracking-wider">
                  {t.cv.languagesLabel}
                </h3>
                <p className="text-sm text-zinc-600">{t.cv.languagesValue}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Check, Cpu, GraduationCap, Smartphone, Workflow } from "lucide-react";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useI18n } from "@/i18n";
import officeImage from "@/assets/office-morocco.png";
import EmblaCarousel from "@/components/embela/EmblaCarousel";

import img1 from "@/assets/cerebralcrew/1.png";
import img2 from "@/assets/cerebralcrew/2.png";
import img3 from "@/assets/cerebralcrew/3.png";
import img4 from "@/assets/cerebralcrew/4.png";
import img5 from "@/assets/cerebralcrew/5.png";
import img6 from "@/assets/cerebralcrew/6.png";
import img7 from "@/assets/cerebralcrew/7.png";
import img8 from "@/assets/cerebralcrew/8.png";

import { EmblaOptionsType } from "embla-carousel";

const SLIDES = [img1, img2, img3, img4, img5, img6, img7, img8];
const OPTIONS: EmblaOptionsType = { direction: "rtl" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sohaib Radi — Développeur Full Stack & Systèmes Multi-Agents" },
      {
        name: "description",
        content:
          "Développement mobile, web apps, SaaS de l'idée au produit, systèmes multi-agents CrewAI et bots Telegram/WhatsApp. Formations et consulting.",
      },
      {
        property: "og:title",
        content: "Sohaib Radi — Développeur Full Stack & Systèmes Multi-Agents",
      },
      {
        property: "og:description",
        content:
          "Je conçois des produits logiciels et des systèmes d'agents IA : mobile, web, SaaS, CrewAI, bots Telegram et WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://https://www.icodezone.codes//" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://https://www.icodezone.codes//" }],
  }),
  component: Index,
});

const highlightIcons = [Cpu, Workflow, Bot];
const teaserIcons = [Cpu, Smartphone, Workflow];
const tones = [
  { wrap: "bg-brand-muted", icon: "text-brand" },
  { wrap: "bg-accent-green/10", icon: "text-accent-green" },
  { wrap: "bg-zinc-200", icon: "text-zinc-600" },
];

function Index() {
  const { t, dir } = useI18n();

  return (
    <div className="min-h-screen bg-surface text-ink font-sans antialiased selection:bg-brand-muted">
      <SiteNav />

      <main>
        <section className="pt-20 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-[100ch] mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-muted text-brand text-xs font-semibold mb-6 uppercase tracking-wider">
                <span>{t.home.badge1}</span>
                <span className="w-1 h-1 rounded-full bg-brand/40" />
                <span>{t.home.badge2}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance mb-8">
                {t.home.h1}
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 mb-10 text-pretty">{t.home.lead}</p>
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/services"
                    className="bg-brand text-surface text-sm font-medium py-3 px-5 inline-flex items-center gap-3 rounded-lg ring-1 ring-brand hover:bg-brand/90 hover:shadow-lg transition-all"
                  >
                    {t.home.ctaPrimary}
                    <ArrowRight className="size-4 shrink-0 rtl:rotate-180" />
                  </Link>
                  <Link
                    to="/cv"
                    className="bg-zinc-100 text-ink text-sm font-medium py-3 px-6 rounded-lg ring-1 ring-black/5 hover:bg-zinc-200 transition-colors"
                  >
                    {t.home.ctaSecondary}
                  </Link>
                </div>
                <a
                  href="https://www.upwork.com/freelancers/~01c146d19986ff58ec?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <img src="/src/assets/Upwork-Logo.svg" alt="Upwork" className="h-5" />
                  <span className="flex items-center gap-1 text-sm font-semibold text-zinc-700">
                    <span className="text-yellow-500">★★★★★</span>
                    <span>{t.home.upworkRating}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-100 border-y border-zinc-200 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.home.highlights.map((h, i) => {
                const Icon = highlightIcons[i % highlightIcons.length];
                const tone = tones[i % tones.length];
                if (!Icon || !tone) return null;
                return (
                  <div
                    key={h.title}
                    className="bg-surface p-8 rounded-xl ring-1 ring-black/5 flex flex-col"
                  >
                    <div
                      className={`size-10 ${tone.wrap} rounded-lg flex items-center justify-center mb-6`}
                    >
                      <Icon className={`size-5 ${tone.icon} shrink-0`} />
                    </div>
                    <h3 className="text-xl font-medium mb-4">{h.title}</h3>
                    <p className="text-zinc-600 text-sm leading-normal max-w-[48ch] text-pretty">
                      {h.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-medium leading-tight mb-6 text-balance">
                  {t.home.approachTitle}
                </h2>
                <p className="text-zinc-600 text-base mb-8 max-w-[48ch] text-pretty">
                  {t.home.approachBody}
                </p>
                <ul className="space-y-4">
                  {t.home.approachPoints.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-zinc-800"
                    >
                      <span className="size-5 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
                        <Check className="size-3 text-accent-green" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <img
                  src={officeImage}
                  alt={t.home.imageAlt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-contain rounded-xl ring-1 ring-black/5"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-100 border-y border-zinc-200 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="size-5 text-brand" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {t.home.formationsLabel}
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight mb-10 max-w-[36ch] text-balance">
              {t.home.formationsTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.home.formationsTeasers.map((f, i) => {
                const Icon = teaserIcons[i % teaserIcons.length];
                if (!Icon) return null;
                return (
                  <div key={f.t} className="bg-surface p-8 rounded-xl ring-1 ring-black/5">
                    <Icon className="size-5 text-brand mb-6" />
                    <h3 className="text-lg font-medium mb-3">{f.t}</h3>
                    <p className="text-zinc-600 text-sm text-pretty">{f.d}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <Link
                to="/formations"
                className="inline-flex items-center gap-3 text-sm font-medium text-brand hover:gap-4 transition-all"
              >
                {t.home.formationsLink}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-surface">
          <div className="max-w-[1400px] mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-muted text-brand text-xs font-semibold mb-2 uppercase tracking-wider">
                <Workflow className="size-3" />
                <span>{t.home.architecture.badge}</span>
              </div>
              <h2 className="text-3xl font-medium text-ink">{t.home.architecture.title}</h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">{t.home.architecture.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {t.home.architecture.cards.map((card, i) => (
                <div key={i} className="bg-brand-muted/50 p-6 rounded-xl border border-brand/10">
                  <h3 className="text-sm font-medium text-brand mb-2">{card.title}</h3>
                  <p className="text-zinc-600 text-xs">{card.body}</p>
                </div>
              ))}
            </div>

            {/* <div className="pt-12">
              <EmblaCarousel key={dir} slides={SLIDES} options={{ direction: dir }} />
            </div> */}
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-brand p-12 rounded-2xl flex flex-col items-center text-center">
              <h2 className="text-3xl font-medium text-surface mb-6 text-balance">
                {t.home.ctaTitle}
              </h2>
              <p className="text-brand-muted mb-10 max-w-[48ch] text-pretty">{t.home.ctaBody}</p>
              <Link
                to="/reservation"
                className="bg-surface text-brand text-sm font-medium py-3 px-8 rounded-lg ring-1 ring-surface hover:bg-surface/90 transition-colors"
              >
                {t.home.ctaButton}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import coursePromo from "@/assets/course-promo.mp4";
import videoCover from "@/assets/videocover.png";
import CourseLanding from "@/components/CourseLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enterprise Multi-Agent Systems | Sohaib Radi" },
      {
        name: "description",
        content:
          "Build production-grade, multi-tenant AI platforms with async task streaming, Telegram Mini Apps, and enterprise CRM integrations.",
      },
      {
        property: "og:title",
        content: "Enterprise Multi-Agent Systems",
      },
      {
        property: "og:description",
        content:
          "Build production-grade, multi-tenant AI platforms with async task streaming, Telegram Mini Apps, and enterprise CRM integrations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.icodezone.codes/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Enterprise Multi-Agent Systems" },
      {
        name: "twitter:description",
        content:
          "Build production-grade, multi-tenant AI platforms with async task streaming, Telegram Mini Apps, and enterprise CRM integrations.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.icodezone.codes/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Cairo:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CourseLanding
      theme="light"
      enrollHref="/reservation"
      videoSrc={coursePromo}
      videoPoster={videoCover}
    />
  );
}

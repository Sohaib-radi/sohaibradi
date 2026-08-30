import { Link } from "@tanstack/react-router";

import { useI18n } from "@/i18n";
import { CONTACT } from "@/i18n/translations";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="py-12 px-6 border-t border-zinc-200 bg-surface">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
    
    {/* Brand Logo & Copyright */}
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Link to="/" className="inline-flex items-center shrink-0 pt-2">
        <div className="relative inline-flex items-center">
          <span className="absolute -top-3 left-0 px-1.5 py-0.5 text-[10px] font-semibold leading-none rounded bg-sky-100 text-sky-700 whitespace-nowrap">
            I code
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1080 288"
            className="w-[70px] h-auto text-brand fill-current"
          >
            <ellipse cx="996" cy="204" fill="#FA541C" rx="60" ry="60" />
            <path
              fill="#1f2a55"
              d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
            />
          </svg>
        </div>
      </Link>

      <span className="text-xs text-zinc-400">
        © {new Date().getFullYear()} — {t.footer.rights}
      </span>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-wrap justify-center gap-6">
      <Link to="/services" className="text-xs font-medium text-zinc-500 hover:text-brand transition-colors">
        {t.footer.services}
      </Link>
      <Link to="/formations" className="text-xs font-medium text-zinc-500 hover:text-brand transition-colors">
        {t.footer.formations}
      </Link>
      <Link to="/cv" className="text-xs font-medium text-zinc-500 hover:text-brand transition-colors">
        {t.footer.cv}
      </Link>
      <Link to="/reservation" className="text-xs font-medium text-zinc-500 hover:text-brand transition-colors">
        {t.footer.contact}
      </Link>
      <a href={`mailto:${CONTACT.email}`} className="text-xs font-medium text-zinc-500 hover:text-brand transition-colors">
        {CONTACT.email}
      </a>
    </div>

  </div>
</footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./language-switcher";

export function SiteNav() {
  const { t } = useI18n();

  const links = [
    { to: "/services", label: t.nav.services },
    { to: "/formations", label: t.nav.formations },
    { to: "/cv", label: t.nav.cv },
  ] as const;

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="inline-flex items-center shrink-0">
            <div className="relative inline-flex items-center">
              {/* "I code" badge positioned above the logo */}
              <span className="absolute -top-3 left-0 px-1.5 py-0.5 text-[10px] font-semibold leading-none rounded bg-sky-100 text-sky-700 whitespace-nowrap">
                I code
              </span>

              {/* SVG Logo with controlled width */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1080 288"
                className="w-[80px] h-auto fill-current text-brand"
              >
                <ellipse cx="996" cy="204" fill="#FA541C" rx="60" ry="60" />
                <path
                  fill="#1f2a55"
                  d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
                />
              </svg>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-zinc-600 hover:text-brand transition-colors"
                activeProps={{ className: "text-sm font-medium text-brand" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <div className="hidden sm:block">
            <Link
              to="/reservation"
              className="bg-brand text-surface text-sm font-medium px-5 py-2 rounded-lg ring-1 ring-brand/50 hover:bg-brand/90 transition-colors whitespace-nowrap"
            >
              {t.nav.cta}
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  {links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="text-lg font-medium text-zinc-600 hover:text-brand transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <Link
                    to="/reservation"
                    className="bg-brand text-surface text-lg font-medium px-5 py-3 rounded-lg ring-1 ring-brand/50 hover:bg-brand/90 transition-colors text-center"
                  >
                    {t.nav.cta}
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

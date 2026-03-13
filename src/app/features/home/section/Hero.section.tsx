"use client";

import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Home.Hero");

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20"
      id="hero"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/10 absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl"></div>
        <div
          className="bg-secondary/10 absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="border-primary/30 from-primary/20 to-secondary/20 mb-8 inline-flex items-center justify-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2">
          <div className="bg-secondary h-2 w-2 animate-pulse rounded-full"></div>
          <span className="text-accent text-sm">{t("badge")}</span>
        </div>

        {/* Main Title */}
        <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl">
          <span className="gradient-text">{t("title")}</span>
          <br />
          <span className="text-accent">{t("titleHighlight")}</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          {t("subtitle")}
        </p>

        {/* Search Input */}
        <div className="mx-auto mb-12 flex max-w-lg flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://github.com/Alejocabeza/starter-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-violet btn from-secondary/40 to-secondary/80 hover:from-secondary/80 hover:to-secondary/40 flex h-12 items-center rounded-lg bg-gradient-to-r px-8 py-3 font-semibold whitespace-nowrap text-white transition-colors duration-300"
          >
            {t("cta")}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-4 border-t border-gray-800 pt-12">
          <div>
            <div className="text-secondary text-2xl font-bold md:text-3xl">
              100%
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {t("stats.openSource")}
            </div>
          </div>
          <div>
            <div className="text-primary text-2xl font-bold md:text-3xl">
              MIT
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {t("stats.license")}
            </div>
          </div>
          <div>
            <div className="text-secondary text-2xl font-bold md:text-3xl">
              T3
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {t("stats.stackBased")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

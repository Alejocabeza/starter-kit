import { CheckCircle, TrendingUp, Zap, Mail, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export const FeatureGrid = () => {
  const t = useTranslations("Home.FeatureGrid");

  return (
    <section className="relative px-4 py-20" id="features">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-accent mb-4 text-3xl font-bold md:text-4xl dark:text-white">
            {t("title")}
          </h2>
          <p className="text-accent dark:text-gray-400">{t("subtitle")}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Inngest - Large Card */}
          <div className="group border-secondary from-secondary/10 to-secondary/30 hover:border-secondary/50 overflow-hidden rounded-2xl border bg-gradient-to-br p-8 transition-all duration-300 md:col-span-2">
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Zap className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-accent text-xl font-bold">
                    {t("inngest.title")}
                  </h3>
                  <p className="text-accent text-sm">{t("inngest.subtitle")}</p>
                </div>
              </div>

              <div className="mb-8 space-y-4">
                <div className="border-primary/10 bg-primary/15 rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-accent font-mono text-sm">
                      inngest.createFunction()
                    </span>
                    <span className="bg-secondary/10 text-secondary rounded px-2 py-1 text-xs">
                      Active
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-accent flex items-center gap-2 text-sm">
                      <CheckCircle className="text-secondary h-4 w-4" />
                      <span>{t("inngest.features.eventDriven")}</span>
                    </div>
                    <div className="text-accent flex items-center gap-2 text-sm">
                      <CheckCircle className="text-secondary h-4 w-4" />
                      <span>{t("inngest.features.retries")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-accent flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>{t("inngest.bottom")}</span>
              </div>
            </div>
          </div>

          {/* Resend - Large Card */}
          <div className="group border-primary from-primary/20 to-primary/40 hover:border-secondary/70 flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-br p-8 transition-all duration-300 md:row-span-2">
            <div className="relative z-10 flex flex-1 flex-col">
              <div className="mb-6 flex items-start gap-3">
                <div className="bg-secondary/20 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Mail className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-accent text-xl font-bold">
                    {t("resend.title")}
                  </h3>
                  <p className="text-accent text-sm">{t("resend.subtitle")}</p>
                </div>
              </div>

              <div className="mb-8 flex-1 space-y-4">
                <div className="border-secondary/20 bg-secondary/50 rounded-lg border p-4">
                  <p className="text-accent mb-2 text-xs">
                    {t("resend.preview.label")}
                  </p>
                  <div className="rounded bg-white p-3 text-sm text-black">
                    <p className="mb-1 font-bold">
                      {t("resend.preview.title")}
                    </p>
                    <p className="text-xs text-gray-600">
                      {t("resend.preview.body")}
                    </p>
                    <button className="mt-2 w-full rounded bg-black px-3 py-1 text-xs text-white">
                      {t("resend.preview.button")}
                    </button>
                  </div>
                </div>

                <ul className="space-y-2">
                  <li className="text-accent flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{t("resend.features.templates")}</span>
                  </li>
                  <li className="text-accent flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{t("resend.features.deliverability")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* i18n - Small Card */}
          <div className="border-secondary from-secondary/10 to-secondary/30 hover:border-primary/50 rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300">
            <h4 className="text-accent mb-4 flex items-center gap-2 font-bold">
              <Globe className="text-accent h-5 w-5" />
              {t("i18n.title")}
            </h4>
            <p className="text-accent mb-4 text-sm">
              {t("i18n.subtitle", { highlight: "next-intl" })}
            </p>
            <ul className="space-y-3">
              {[
                t("i18n.features.components"),
                t("i18n.features.messages"),
                t("i18n.features.middleware"),
                t("i18n.features.detection"),
              ].map((feature, idx) => (
                <li
                  key={idx}
                  className="text-accent flex items-center gap-2 text-sm"
                >
                  <span className="bg-accent h-1.5 w-1.5 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack - Small Card */}
          <div className="border-primary from-primary/10 to-primary/30 hover:border-secondary/50 rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300">
            <h4 className="text-accent mb-4 flex items-center gap-2 font-bold">
              <span className="bg-secondary h-2 w-2 rounded-full"></span>
              {t("stack.title")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Prisma",
                "tRPC",
                "NextAuth",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="border-secondary bg-secondary/50 text-accent rounded border px-2 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

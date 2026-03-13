import { CheckCircle, TrendingUp, Zap, Mail, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export const FeatureGrid = () => {
  const t = useTranslations("Home.FeatureGrid");

  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {t("title")}
          </h2>
          <p className="text-gray-400">{t("subtitle")}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Inngest - Large Card */}
          <div className="group overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-8 transition-all duration-300 hover:border-violet-500/50 md:col-span-2">
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/20">
                  <Zap className="h-6 w-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {t("inngest.title")}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {t("inngest.subtitle")}
                  </p>
                </div>
              </div>

              <div className="mb-8 space-y-4">
                <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-sm text-violet-400">
                      inngest.createFunction()
                    </span>
                    <span className="rounded bg-green-500/10 px-2 py-1 text-xs text-green-500">
                      Active
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{t("inngest.features.eventDriven")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{t("inngest.features.retries")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-violet-400">
                <TrendingUp className="h-4 w-4" />
                <span>{t("inngest.bottom")}</span>
              </div>
            </div>
          </div>

          {/* Resend - Large Card */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-900/20 to-gray-900/40 p-8 transition-all duration-300 hover:border-green-500/70 md:row-span-2">
            <div className="relative z-10 flex flex-1 flex-col">
              <div className="mb-6 flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                  <Mail className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {t("resend.title")}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {t("resend.subtitle")}
                  </p>
                </div>
              </div>

              <div className="mb-8 flex-1 space-y-4">
                <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                  <p className="mb-2 text-xs text-gray-500">
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
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{t("resend.features.templates")}</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{t("resend.features.deliverability")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* i18n - Small Card */}
          <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-6 transition-all duration-300 hover:border-violet-500/50">
            <h4 className="mb-4 flex items-center gap-2 font-bold text-white">
              <Globe className="h-5 w-5 text-blue-400" />
              {t("i18n.title")}
            </h4>
            <p className="mb-4 text-sm text-gray-400">
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
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack - Small Card */}
          <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-6 transition-all duration-300 hover:border-violet-500/50">
            <h4 className="mb-4 flex items-center gap-2 font-bold text-white">
              <span className="h-2 w-2 rounded-full bg-violet-500"></span>
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
                  className="rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-gray-300"
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

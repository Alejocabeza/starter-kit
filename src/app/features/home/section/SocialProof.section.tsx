import { Terminal, Code, Cpu, Globe, Mail, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export const SocialProof = () => {
  const t = useTranslations("Home.SocialProof");

  const testimonials = [
    {
      text: "npm install @inngest/middleware-logger",
      platform: "Inngest",
      icon: Zap,
      color: "text-yellow-400",
    },
    {
      text: "import { Resend } from 'resend';",
      platform: "Resend",
      icon: Mail,
      color: "text-green-400",
    },
    {
      text: "export default createMiddleware({ locales: ['en', 'es'] });",
      platform: "next-intl",
      icon: Globe,
      color: "text-blue-400",
    },
    {
      text: "npx create-t3-app@latest",
      platform: "Terminal",
      icon: Terminal,
      color: "text-gray-400",
    },
    {
      text: "await prisma.user.create({ data: { ... } })",
      platform: "Prisma",
      icon: Code,
      color: "text-teal-400",
    },
    {
      text: "t.procedure.input(z.object({ name: z.string() }))",
      platform: "tRPC",
      icon: Cpu,
      color: "text-blue-500",
    },
  ];

  const items = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-gradient-to-b from-transparent via-violet-500/5 to-transparent px-4 py-20" id="testimonials">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-accent dark:text-white md:text-4xl">
            {t("title")}
          </h2>
          <p className="text-accent dark:text-gray-400">{t("subtitle")}</p>
        </div>

        <section className="bg-base-100 relative w-full overflow-hidden py-12">
          <div className="animate-infinite-scroll flex w-max gap-6 px-6 hover:[animation-play-state:paused]">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="carousel-item" // Clase nativa de DaisyUI
              >
                <div className="card bg-base-200 border-base-300 w-80 border shadow-xl">
                  <div className="card-body p-5">
                    {/* Header del Testimonio */}
                    <div className="border-base-300 mb-3 flex items-center gap-3 border-b pb-2">
                      <item.icon className={`size-5 ${item.color}`} />
                      <span className="badge badge-outline badge-sm font-mono tracking-tighter uppercase">
                        {item.platform}
                      </span>
                    </div>

                    {/* Cuerpo estilo terminal de DaisyUI */}
                    <div className="mockup-code bg-base-300/30 p-0 before:hidden">
                      <pre
                        data-prefix="$"
                        className="text-base-content/90 font-mono text-sm"
                      >
                        <code className="whitespace-pre-wrap">{item.text}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="from-base-100 pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r to-transparent" />
          <div className="from-base-100 pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l to-transparent" />
        </section>
      </div>
    </section>
  );
};

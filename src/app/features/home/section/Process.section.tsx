import { Terminal, Code, Rocket, CheckCircle, Package } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Clone & Setup",
      subtitle: "Quick Start",
      description:
        "Clone the repo, install dependencies, and set up your environment variables. It's that simple.",
      icon: Terminal,
      gradient: "from-violet-500 to-purple-500",
    },
    {
      number: "02",
      title: "Develop",
      subtitle: "Type-Safe DX",
      description:
        "Build features fast with tRPC, Prisma, and Next.js App Router. Everything is end-to-end type-safe.",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "03",
      title: "Deploy",
      subtitle: "Production Ready",
      description:
        "Deploy to Vercel or any containerized environment. Background jobs and emails just work.",
      icon: Rocket,
      gradient: "from-green-500 to-emerald-500",
    },
  ];
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            From Zero to Production
          </h2>
          <p className="text-gray-400">
            A streamlined workflow designed for shipping products
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="group relative">
                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-8 transition-all duration-300 hover:border-violet-500/50">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Number */}
                    <div
                      className={`mb-4 bg-gradient-to-r text-5xl font-bold ${step.gradient} bg-clip-text text-transparent`}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`h-12 w-12 rounded-lg bg-gradient-to-br ${step.gradient} mb-6 flex items-center justify-center p-2 text-white`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mb-4 text-sm font-semibold text-gray-500 uppercase">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 hidden h-0.5 w-8 bg-gradient-to-r from-violet-500/50 to-transparent md:block"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Package className="h-4 w-4 text-green-500" />
            <span>Includes pre-configured CI/CD workflows</span>
          </p>
        </div>
      </div>
    </section>
  );
};

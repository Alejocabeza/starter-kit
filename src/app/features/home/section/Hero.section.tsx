"use client";

import { Search } from "lucide-react";
import { getTranslations } from "next-intl/server";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-violet-500/10 blur-3xl"></div>
        <div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-green-500/10 blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-500/20 to-green-500/20 px-4 py-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-300">
            Production Ready T3 Stack
          </span>
        </div>

        {/* Main Title */}
        <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl">
          <span className="gradient-text">The Ultimate T3 Starter Kit</span>
          <br />
          <span className="text-white">Enhanced for Production</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Jumpstart your Next.js project with the best tools pre-configured:
          Inngest for background jobs, Resend for emails, and next-intl for
          internationalization.
        </p>

        {/* Search Input */}
        <div className="mx-auto mb-12 flex max-w-lg flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://github.com/create-t3-app/create-t3-app"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-violet btn flex h-12 items-center rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 px-8 py-3 font-semibold whitespace-nowrap text-white transition-all duration-300 hover:from-violet-700 hover:to-violet-600"
          >
            Get Started Free
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-4 border-t border-gray-800 pt-12">
          <div>
            <div className="text-2xl font-bold text-green-500 md:text-3xl">
              100%
            </div>
            <div className="mt-2 text-sm text-gray-500">Open Source</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-violet-500 md:text-3xl">
              MIT
            </div>
            <div className="mt-2 text-sm text-gray-500">License</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-500 md:text-3xl">
              T3
            </div>
            <div className="mt-2 text-sm text-gray-500">Stack Based</div>
          </div>
        </div>
      </div>
    </section>
  );
}

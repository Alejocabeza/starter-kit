import "@/app/shared/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { NextIntlClientProvider } from "next-intl";

import { getMessages } from "next-intl/server";
import { ChangeLanguage } from "../shared/components/ui/ChangeLanguage";
import { ChangeTheme } from "../shared/components/ui/ChangeTheme";
import Link from "next/link";
import { NextThemesProvider } from "../shared/providers/next-themes";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geist.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <TRPCReactProvider>
          <NextIntlClientProvider messages={messages}>
            <NextThemesProvider>
              <header className="flex w-full items-center justify-center">
                <div className="bg-primary/10 fixed top-2 z-50 flex w-max items-center justify-between gap-4 rounded-full px-4 py-2 backdrop-blur">
                  <ChangeTheme />
                  <nav className="mx-5">
                    <Link
                      href="#hero"
                      className="hover:bg-primary/20 rounded-md px-3 py-1"
                    >
                      Inicio
                    </Link>
                    <Link
                      href="#testimonials"
                      className="hover:bg-primary/20 rounded-md px-3 py-1"
                    >
                      Testimonials
                    </Link>
                    <Link
                      href="#process"
                      className="hover:bg-primary/20 rounded-md px-3 py-1"
                    >
                      Process
                    </Link>
                    <Link
                      href="#features"
                      className="hover:bg-primary/20 rounded-md px-3 py-1"
                    >
                      Features
                    </Link>
                  </nav>
                  <ChangeLanguage />
                </div>
              </header>
              <main>{children}</main>
            </NextThemesProvider>
          </NextIntlClientProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

import "@/app/shared/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} data-theme="night">
      <body>
        <TRPCReactProvider>
          <NextIntlClientProvider>
            <main>{children}</main>
          </NextIntlClientProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

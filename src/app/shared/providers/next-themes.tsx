"use client";

import { ThemeProvider } from "next-themes";

export function NextThemesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      value={{
        light: "bumblebee",
        dark: "forest",
      }}
    >
      {children}
    </ThemeProvider>
  );
}

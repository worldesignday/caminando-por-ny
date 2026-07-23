import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/ui/Providers";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Nueva York 2026 — Itinerarios",
    template: "%s",
  },
  description:
    "Itinerarios a pie por Nueva York: rutas día a día con horario, paradas del folleto y consejos de transporte.",
  icons: { icon: "/favicon.svg" },
  metadataBase: new URL("https://caminando-por-ny.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${jakarta.variable} ${mono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

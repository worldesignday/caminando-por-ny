import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Editor de Markdown",
  description: "Editor de Markdown em tempo real com Next.js e TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

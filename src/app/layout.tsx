import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akinola Abdullateef | Frontend & Full-Stack Developer",
  description:
    "Portfolio of Akinola Abdullateef, a Lagos-based frontend and full-stack developer building polished digital products with Next.js, React, TypeScript, and Firebase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navigations";
import { ThemeInitializer } from "@/context/theme-context";
import CursorEffect from "@/components/ui/cursor-effect";
import ClientWrapper from "@/components/ui/ui-wrapper";
import { LenisProvider } from "@/lib/hooks/use-lenis-scroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flexsy Bilbis",
  description: "My name is Flexsy Bilbis, a software developer from Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Asset 2@4x.png" />
      </head>
      <body
        className={`antialiased ${inter.variable} transition-colors`}
      >
        <ThemeInitializer />
        <NavBar />
        <CursorEffect />
        <LenisProvider >
            <ClientWrapper>
              {children}
            </ClientWrapper>
        </LenisProvider>
      </body>
    </html>
  );
}

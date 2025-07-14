import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navigations";
import { ThemeInitializer } from "@/context/theme-context";
import CursorEffect from "@/components/ui/cursor-effect";
import ClientWrapper from "@/components/ui/ui-wrapper";
import { LenisProvider } from "@/lib/hooks/use-lenis-scroll";
import { ClientOnly } from "@/lib/isClient";

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
      <body
        className={`antialiased ${inter.variable} transition-colors `}
      >
        <ThemeInitializer />
        <NavBar />
        <CursorEffect />
        <LenisProvider >
          <ClientOnly>
            <ClientWrapper>
              {children}
            </ClientWrapper>
          </ClientOnly>
        </LenisProvider>
      </body>
    </html>
  );
}

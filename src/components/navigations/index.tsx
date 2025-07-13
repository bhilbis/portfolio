"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const isCustomPage = pathname?.startsWith("/connect-withme");

  const scrollView = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; link: string }) => {
    e.preventDefault();
    const target = document.querySelector(item.link);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;

    const baseSpeed = 0.6;
    const duration = Math.min(Math.max(Math.abs(distance) * baseSpeed, 300), 1200);

    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    requestAnimationFrame(animateScroll);
    setIsMobileMenuOpen(false);
  } 

  return (
    <>
      {!isCustomPage && <Navbar className="top-0">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={scrollView}/>
          <div className="flex items-center gap-6">
            <ThemeToggle className="shrink-0"/>
            <Link href="/connect-withme">
              <NavbarButton variant="primary">Connect</NavbarButton>
            </Link>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Link href="/connect-withme">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Connect with me
                </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>}
    </>
  );
}
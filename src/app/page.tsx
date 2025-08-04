"use client";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { FAQ } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/project-section/projects";
import Copyright from "@/components/ui/cr";
import { AnimatedProgressBar } from "@/components/ui/progress-bar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <Hero />
        <About />
        <Projects />
        <FAQ />
        <Contact />
        <Copyright />
      </div>
      <AnimatedProgressBar />
      {!isMobile && <SmoothCursor />}
    </>
  );
}
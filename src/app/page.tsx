"use client";
import { About } from "@/components/home/about";
import { FAQ } from "@/components/home/faq";
// import { FooterContact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import Copyright from "@/components/ui/cr";
import { AnimatedProgressBar } from "@/components/ui/progress-bar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <Hero />
        <About />
        <Projects />
        <FAQ />
        {/* <FooterContact /> */}
        <Copyright />
      </div>
      <AnimatedProgressBar />
    </>
  );
}
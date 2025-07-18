"use client";
import { About } from "@/components/home/about/about";
// import { FooterContact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import Copyright from "@/components/ui/cr";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <Hero />
      <About />
      <Projects />
      {/* <FooterContact /> */}
      <Copyright />
    </div>
  );
}
import { FooterContact } from "@/components/home/contact";
import { Projects } from "@/components/home/projects";
import Copyright from "@/components/ui/cr";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Projects />
      <FooterContact />
      <Copyright />
    </div>
  );
}
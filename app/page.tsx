import { Shell } from "@/components/Shell";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Overview } from "@/components/sections/Overview";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <Shell>
      <Overview />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </Shell>
  );
}

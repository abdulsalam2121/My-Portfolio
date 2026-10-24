import { About, Experience, Process } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Numbers } from "@/components/Numbers";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Numbers />
        <Work />
        <Process />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

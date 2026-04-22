import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import  Grid  from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import { Approach } from "@/components/Approach";
import Footer from "@/components/Footer";
import About from "@/components/About";
export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <About />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

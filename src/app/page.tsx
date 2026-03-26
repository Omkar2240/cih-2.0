import { Hero } from "@/components/sections/Hero";
import { EventDetails } from "@/components/sections/EventDetails";
import { Timeline } from "@/components/sections/Timeline";
import { ProblemStatements } from "@/components/sections/ProblemStatements";
import { InclusionChecklist } from "@/components/sections/InclusionChecklist";
import { FAQ } from "@/components/sections/FAQ";
import { TerrainFooter } from "@/components/sections/TerrainFooter";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Navbar />

      <Hero />
      <EventDetails />
      <Timeline />
      <ProblemStatements />
      <InclusionChecklist />
      <FAQ />
      <TerrainFooter />
    </main>
  );
}

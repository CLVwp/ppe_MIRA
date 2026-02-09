import Nav from "@/components/Nav";
import TeamSection from "@/components/TeamSection";
import GanttSection from "@/components/GanttSection";
import SprintTimeline from "@/components/SprintTimeline";
import MaterielSection from "@/components/MaterielSection";
import { StarsBackground } from "@/components/animate-ui/StarsBackground";
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen app-bg">
      <StarsBackground />
      <Nav />
      <main className="relative">
        <HeroSection />
        <TeamSection />
        <SprintTimeline />
        <MaterielSection />
        <GanttSection />
        <footer className="relative border-t border-[var(--border)] py-8 text-center text-sm text-[var(--text-muted)]">
          MIRA — Projet JEECE
        </footer>
      </main>
    </div>
  );
}

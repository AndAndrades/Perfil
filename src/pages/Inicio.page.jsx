import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import ProjectGrid from "../components/sections/ProjectGrid";
import SkillsSection from "../components/sections/SkillsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import Footer from "../components/layout/Footer";
import AcidSquares from "../components/Wallpapers/acidSquare/AcidSquares.component";

export default function Inicio() {
  return (
    <div className="relative w-full min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Background WebGL Shader with Deep Dark Palette */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <AcidSquares
          mouseForce={18}
          cursorSize={90}
          isViscous
          viscous={30}
          iterationsViscous={24}
          iterationsPoisson={24}
          dt={0.014}
          resolution={0.6}
          isBounce={true}
          colors={["#1e1b4b", "#0f172a", "#312e81"]}
          className=""
          autoDemo={false}
          autoSpeed={0.3}
          autoIntensity={1.5}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <ProjectGrid />
        <SkillsSection />
        <ExperienceSection />
      </main>

      {/* Interactive Footer & Clipboard Feedback */}
      <Footer />
    </div>
  );
}
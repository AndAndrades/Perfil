import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import ProjectGrid from "../components/sections/ProjectGrid";
import SkillsSection from "../components/sections/SkillsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import Footer from "../components/layout/Footer";
import LiquidEther from "../components/Wallpapers/LiquidEther/LiquidEther.component";

export default function Inicio() {
    return (
        <div className="relative w-full min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-600/40 selection:text-white">
            <div className="fixed inset-0 z-0 pointer-events-none opacity-55">
                <LiquidEther
                    mouseForce={22}
                    cursorSize={110}
                    isViscous={true}
                    viscous={30}
                    iterationsViscous={28}
                    iterationsPoisson={28}
                    dt={0.014}
                    resolution={0.65}
                    isBounce={true}
                    colors={["#181030", "#3730a3", "#6366f1", "#0284c7"]}
                    className="w-full h-full"
                    autoDemo={true}
                    autoSpeed={0.35}
                    autoIntensity={1.8}
                    takeoverDuration={0.25}
                    autoResumeDelay={1200}
                    autoRampDuration={0.6}
                />
            </div>

            <Navbar />

            <main className="relative z-10 w-full overflow-hidden">
                <HeroSection />
                <ProjectGrid />
                <SkillsSection />
                <ExperienceSection />
            </main>

            <Footer />
        </div>
    );
}
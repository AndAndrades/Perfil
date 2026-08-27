import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ParticleText from "../ParticleText/ParticleText.component";
import GlassSurface from "../GlassSurface/GlassSurface.component";
import ClientMarquee from "../ui/ClientMarquee";
import { useSectionTracking } from "../../hooks/Query/Firebase/useSectionTracking";

export default function HeroSection() {
  useSectionTracking("inicio");

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-6 z-10">
        {/* Role Badge with Transparent GlassSurface */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <GlassSurface
            width="auto"
            height="auto"
            borderRadius={9999}
            blur={14}
            brightness={25}
            opacity={0.65}
            className="border border-white/10 shadow-lg shadow-black/30"
          >
            <div className="flex items-center gap-2.5 px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
              <span className="text-xs font-semibold text-slate-200">
                Desarrollador Full Stack • Coval Servicios Financieros
              </span>
            </div>
          </GlassSurface>
        </motion.div>

        {/* Dynamic Particle Name Title */}
        <div className="w-full flex justify-center items-center py-2">
          <ParticleText
            text="Andrew Andrades"
            particleSize={2.2}
            density={4}
            color="#f8fafc"
            highlightColor="#6366f1"
            scatter={190}
            gatherDuration={1600}
            stagger={420}
            pointerRepel={42}
            repelRadius={120}
            idleDrift={0.8}
            trigger="mount"
            fontSize="clamp(2.8rem, 9vw, 6.5rem)"
            fontWeight={800}
            fontFamily="inherit"
            glow
          />
        </div>

        {/* Professional Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base font-mono text-indigo-300 tracking-wide uppercase font-semibold glow-text-indigo"
        >
          Ingeniero en Informática • Java 17 & React 19 Specialist
        </motion.div>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light"
        >
          Especializado en la construcción y optimización de <span className="text-white font-medium">sistemas empresariales y plataformas financieras de alto volumen</span>, combinando arquitecturas backend en <span className="text-indigo-400 font-medium">Java 17 / Spring Boot</span>, frontends reactivos en <span className="text-cyan-400 font-medium">React & React Query</span> y tuning de bases de datos relacionales.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all duration-300 hover:scale-105"
          >
            <span>Ver Experiencia & Proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-[#0f172a]/40 hover:bg-white/10 text-white font-semibold text-sm backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Contactar</span>
          </a>
        </motion.div>

        {/* Stats Grid with Transparent GlassSurface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-10 w-full max-w-3xl"
        >
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
            <GlassSurface width="100%" height="100%" borderRadius={24} blur={16} brightness={25} opacity={0.65} className="p-5">
              <span className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent block">
                Fintech & E2E
              </span>
              <span className="text-xs text-slate-300">Tesorería & Giros Bancarios</span>
            </GlassSurface>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
            <GlassSurface width="100%" height="100%" borderRadius={24} blur={16} brightness={25} opacity={0.65} className="p-5">
              <span className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent block">
                Java 17 + React
              </span>
              <span className="text-xs text-slate-300">Spring Boot & React Query</span>
            </GlassSurface>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 col-span-2 sm:col-span-1">
            <GlassSurface width="100%" height="100%" borderRadius={24} blur={16} brightness={25} opacity={0.65} className="p-5">
              <span className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent block">
                High-Volume DB
              </span>
              <span className="text-xs text-slate-300">SQL Server & PostgreSQL</span>
            </GlassSurface>
          </div>
        </motion.div>
      </div>

      {/* Infinite Tech Marquee Section */}
      <div className="w-full pt-12 z-10">
        <ClientMarquee />
      </div>
    </section>
  );
}

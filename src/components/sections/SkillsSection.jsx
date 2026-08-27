import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Layers,
  Cpu,
  Shield,
  Gauge,
} from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard";
import { cn } from "../../utils/cn";

const SKILL_CATEGORIES = [
  {
    id: "backend",
    title: "Backend & Arquitectura Empresarial",
    icon: Server,
    color: "from-indigo-500 via-violet-500 to-purple-500",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    skills: [
      { name: "Java 17 & Spring Boot 3", level: 95, tag: "Especialista" },
      { name: "Spring Data JPA & Hibernate", level: 94, tag: "Avanzado" },
      { name: "APIs RESTful & Feign Clients", level: 92, tag: "Avanzado" },
      { name: "Transaccionalidad ACID & Concurrencia", level: 90, tag: "Avanzado" },
      { name: "Seguridad JWT & Control de Acceso", level: 90, tag: "Avanzado" },
      { name: "Node.js & Express / Python / PHP", level: 85, tag: "Intermedio+" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Reactivo & UI/UX",
    icon: Code,
    color: "from-cyan-500 via-blue-500 to-indigo-500",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    skills: [
      { name: "React 19 & React Query (TanStack)", level: 95, tag: "Especialista" },
      { name: "JavaScript ES6+ & TypeScript", level: 92, tag: "Avanzado" },
      { name: "Ant Design & Tailwind CSS v4", level: 94, tag: "Especialista" },
      { name: "Vite Bundler & Optimización Frontend", level: 90, tag: "Avanzado" },
      { name: "Gestión de Estados Asíncronos & Caché", level: 92, tag: "Avanzado" },
      { name: "Shaders WebGL / Canvas / Motion", level: 84, tag: "Intermedio+" },
    ],
  },
  {
    id: "databases-devops",
    title: "Bases de Datos & DevOps Cloud",
    icon: Database,
    color: "from-emerald-400 via-teal-500 to-indigo-500",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    skills: [
      { name: "SQL Server & PostgreSQL (Stored Procedures/CTEs)", level: 95, tag: "Especialista" },
      { name: "Optimización de Queries & JOINs/EXISTS", level: 94, tag: "Avanzado" },
      { name: "Docker, Maven & WSL", level: 90, tag: "Avanzado" },
      { name: "Kong / Konga API Gateway", level: 88, tag: "Avanzado" },
      { name: "GitLab & Git Flow / CI-CD", level: 92, tag: "Avanzado" },
      { name: "Cloud Services (AWS & GCP) / Oracle / MySQL", level: 85, tag: "Intermedio+" },
    ],
  },
];

const ARCHITECTURE_PILLARS = [
  {
    title: "Arquitectura Transaccional & Resiliente",
    description: "Propagación transaccional rigurosa, control de bloqueos, manejo de errores y reintentos automáticos en flujos críticos.",
    icon: Shield,
  },
  {
    title: "Optimización End-to-End (DB → API → UI)",
    description: "Tuning de consultas SQL complejas, reducción de sobrecarga de serialización y caching inteligente con React Query.",
    icon: Gauge,
  },
  {
    title: "Seguridad & Gestión de API Gateway",
    description: "Protección con JWT, rate-limiting y enrutamiento centralizado mediante Kong API Gateway y microservicios.",
    icon: Layers,
  },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  useSectionTracking("habilidades");

  return (
    <section id="habilidades" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" />
          <span>Competencias & Stack Técnico</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Habilidades Técnicas & <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Especialización</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg">
          Dominio integral en sistemas empresariales de alto volumen: backend robusto en Java 17 / Spring Boot, interfaces reactivas modernas y tuning de bases de datos relacionales.
        </p>
      </div>

      {/* 3 Columns for Backend, Frontend, Databases & DevOps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {SKILL_CATEGORIES.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <SpotlightCard key={category.id} className="flex flex-col justify-between">
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={cn("p-2.5 rounded-xl border", category.badgeColor)}>
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                </div>

                {/* Skills list with progress indicators */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group/item transition-all duration-200"
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                        <span className="font-medium text-slate-300 group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-400 font-mono group-hover/item:text-cyan-400 transition-colors">
                          {skill.tag}
                        </span>
                      </div>

                      {/* Meter bar */}
                      <div className="w-full h-1.5 bg-[#090d16]/80 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={cn(
                            "h-full rounded-full bg-gradient-to-r transition-all duration-300",
                            category.color,
                            hoveredSkill === skill.name ? "brightness-125 shadow-sm shadow-indigo-400/60" : "opacity-85"
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Architecture Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARCHITECTURE_PILLARS.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <div
              key={i}
              className="p-5 rounded-3xl border border-white/5 bg-[#0f172a]/30 backdrop-blur-xl flex items-start gap-4 transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#0f172a]/50"
            >
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{pillar.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

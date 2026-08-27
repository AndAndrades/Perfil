import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  TrendingUp,
  Activity,
  Zap,
  Layers,
  ArrowUpRight,
  X,
  CheckCircle2,
  Cpu,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import SpotlightCard from "../ui/SpotlightCard";
import { cn } from "../../utils/cn";

const PROJECTS = [
  {
    id: "treasury-financial-platform",
    title: "Plataforma de Tesorería & Operaciones Financieras",
    category: "Fullstack",
    featured: true,
    size: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    description:
      "Sistema web empresarial end-to-end para la gestión crítica de tesorería, cartera, estados de deuda y procesamiento de giros bancarios masivos en Coval Servicios Financieros.",
    metrics: [
      { label: "Tiempo de Flujo", value: "-45%", icon: Zap, color: "text-cyan-400" },
      { label: "Procesamiento", value: "+10k Tx/d", icon: TrendingUp, color: "text-indigo-400" },
      { label: "Consistencia", value: "99.99%", icon: Activity, color: "text-emerald-400" },
    ],
    techStack: ["Java 17", "Spring Boot", "React", "React Query", "Ant Design", "SQL Server", "Docker"],
    highlights: [
      "Diseño de arquitectura E2E para operaciones financieras con Java 17 y Spring Boot.",
      "Frontend interactivo con React, Vite, React Query y Ant Design para formularios y tablas dinámicas.",
      "Integración de servicios bancarios para transferencias, subgiros, montos máximos y validación de estados.",
      "Persistencia robusta con Spring Data JPA y Hibernate con control estricto de concurrencia.",
    ],
    github: "https://github.com/AndAndrades",
    live: "https://andandrades.github.io/perfil/",
    accent: "from-cyan-500/20 to-indigo-500/10",
  },
  {
    id: "banking-api-gateway",
    title: "Integraciones Bancarias & Kong API Gateway",
    category: "Backend & Cloud",
    featured: false,
    size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    description:
      "Capa de servicios e integraciones bancarias con autenticación segura JWT, enrutamiento mediante Kong/Konga y reintentos automáticos.",
    metrics: [
      { label: "Latencia Media", value: "<60ms", icon: Zap, color: "text-amber-400" },
      { label: "Seguridad", value: "JWT + RBAC", icon: ShieldCheck, color: "text-indigo-400" },
    ],
    techStack: ["Java 17", "Kong Gateway", "JWT", "Feign", "GitLab CI"],
    highlights: [
      "Gestión de endpoints a través de Kong API Gateway y Konga.",
      "Manejo de errores, control de montos máximos y tolerancia a fallos en transferencias.",
    ],
    github: "https://github.com/AndAndrades",
    live: "https://andandrades.github.io/perfil/",
    accent: "from-indigo-500/20 to-violet-500/10",
  },
  {
    id: "database-tuning-engine",
    title: "Optimización de Consultas SQL & Persistencia",
    category: "Bases de Datos",
    featured: false,
    size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    description:
      "Tuning y desarrollo de Stored Procedures, CTEs y agregaciones complejas en SQL Server y PostgreSQL para grandes volúmenes de datos.",
    metrics: [
      { label: "Tiempo de Respuesta", value: "-55%", icon: Zap, color: "text-emerald-400" },
      { label: "Transaccionalidad", value: "ACID", icon: Cpu, color: "text-cyan-400" },
    ],
    techStack: ["SQL Server", "PostgreSQL", "Stored Procedures", "CTEs", "Hibernate"],
    highlights: [
      "Eliminación de cuellos de botella y resolución de bloqueos por concurrencia.",
      "Optimización de flujo DB → Backend → Frontend minimizando transferencia de datos.",
    ],
    github: "https://github.com/AndAndrades",
    live: "https://andandrades.github.io/perfil/",
    accent: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    id: "webgl-shaders-portfolio",
    title: "WebGL Shaders & Liquid Fluid Suite",
    category: "UI/UX & WebGL",
    featured: false,
    size: "col-span-1 md:col-span-2 lg:col-span-3 row-span-1",
    description:
      "Ecosistema visual interactivo de alto rendimiento basado en shaders GLSL, fluidos LiquidEther en Three.js, efectos GlassSurface y Tailwind CSS v4.",
    metrics: [
      { label: "Rendimiento", value: "60 FPS", icon: Sparkles, color: "text-violet-400" },
      { label: "Arquitectura", value: "React 19", icon: TrendingUp, color: "text-cyan-400" },
      { label: "Carga", value: "Vite 8 Ultra-fast", icon: Activity, color: "text-indigo-400" },
    ],
    techStack: ["React 19", "Tailwind CSS v4", "Three.js", "GLSL Shaders", "Framer Motion"],
    highlights: [
      "Renderizado acelerado por GPU sin bloqueo del hilo principal de React.",
      "Componentes modulares de diseño Dark Mode con microinteracciones y spotlight cursor.",
    ],
    github: "https://github.com/AndAndrades/perfil",
    live: "https://andandrades.github.io/perfil/",
    accent: "from-violet-500/20 to-cyan-500/10",
  },
];

const CATEGORIES = ["Todos", "Fullstack", "Backend & Cloud", "Bases de Datos", "UI/UX & WebGL"];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow Ambient background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Soluciones & Sistemas Entregados</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Proyectos Empresariales & <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Métricas Reales</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg">
          Sistemas financieros y plataformas web diseñadas con altos estándares de disponibilidad, seguridad y rendimiento.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border",
                activeCategory === category
                  ? "bg-indigo-600/30 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-[#0f172a]/40 border-white/5 text-slate-300 hover:text-white hover:border-indigo-500/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              key={project.id}
              className={project.size}
            >
              <SpotlightCard className="h-full flex flex-col justify-between group border-white/10 hover:border-indigo-500/40">
                <div>
                  {/* Top Badge & Actions */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                        title="Ver repositorio"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                        title="Ver demostración"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* High Impact Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {project.metrics.map((metric, i) => {
                      const Icon = metric.icon;
                      return (
                        <div
                          key={i}
                          className="p-3 rounded-2xl bg-[#090d16]/70 border border-white/5 flex flex-col items-start gap-1"
                        >
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <Icon className={cn("w-3.5 h-3.5", metric.color)} />
                            <span>{metric.label}</span>
                          </div>
                          <span className={cn("text-base sm:text-lg font-bold tracking-tight", metric.color)}>
                            {metric.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Tech Stack & Details Trigger */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-indigo-950/50 border border-indigo-500/25 text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer ml-auto"
                  >
                    Ver detalles
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Detail View with Glassmorphism */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl border border-indigo-500/30 bg-[#0f172a]/90 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 mb-3 inline-block">
                {selectedProject.category}
              </span>

              <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Metrics highlight */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Métricas Clave de Rendimiento
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {selectedProject.metrics.map((metric, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-[#090d16]/80 border border-white/10">
                    <span className="text-xs text-slate-400 block">{metric.label}</span>
                    <span className={cn("text-lg font-bold", metric.color)}>{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Aspectos Técnicos Destacados
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  Código en GitHub
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Demo
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

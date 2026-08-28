import { Briefcase, Calendar, MapPin, Award, CheckCircle2, GraduationCap, Languages } from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard";
import { useSectionTracking } from "../../hooks/Query/Firebase/useSectionTracking";

const EXPERIENCES = [
  {
    role: "Desarrollador Full Stack",
    company: "Coval Servicios Financieros",
    period: "Febrero 2025 - Actualidad",
    location: "Santiago, Chile",
    type: "Puesto Actual",
    description:
      "Diseño, desarrollo y mantenimiento end-to-end de aplicaciones web empresariales para procesos financieros críticos (tesorería, cartera, deudas y operaciones de giro/transferencias bancarias de alto volumen).",
    achievements: [
      "Desarrollo E2E con Java 17, Spring Boot, React, Vite, React Query y Ant Design en arquitecturas críticas.",
      "Integración de servicios bancarios para transferencias, generación de subgiros, montos máximos, procesamiento parcial y reintentos automáticos con seguridad JWT.",
      "Optimización de Stored Procedures y consultas SQL complejas (CTEs, JOINs, EXISTS) en SQL Server y PostgreSQL, resolviendo cuellos de botella y problemas de concurrencia.",
      "Persistencia transaccional con Spring Data JPA y Hibernate, asegurando control de concurrencia y reglas de negocio complejas.",
      "Diagnóstico avanzado de incidencias en logs de Spring Boot, Hibernate y React; despliegues con Docker, Kong/Konga, Maven, WSL y GitLab.",
    ],
    skills: ["Java 17", "Spring Boot", "React", "React Query", "SQL Server", "PostgreSQL", "Kong API Gateway", "Docker", "GitLab"],
  },
  {
    role: "Desarrollador Full Stack (Practicante)",
    company: "Coval Servicios Financieros",
    period: "Julio 2024 - Diciembre 2024",
    location: "Santiago, Chile",
    type: "Práctica Profesional",
    description:
      "Diseño e implementación de extremo a extremo de sistema web para la gestión de registros operativos y modelado de datos relacionales.",
    achievements: [
      "Implementación de extremo a extremo de solución CRUD con Spring Boot y React.",
      "Modelado de base de datos en PostgreSQL con integridad referencial, normalización y eficiencia en consultas.",
    ],
    skills: ["Java", "Spring Boot", "React", "PostgreSQL", "Git", "REST APIs"],
  },
];

const EDUCATION = [
  {
    title: "Ingeniería en Informática",
    institution: "Duoc UC",
    period: "2021 – 2024",
    icon: GraduationCap,
    highlight: "Titulado con enfoque en Ingeniería de Software y Arquitectura de Sistemas",
  },
];

const CERTIFICATIONS = [
  {
    name: "Programa Especializado: Meta React",
    issuer: "Meta / Coursera",
    type: "Especialización Frontend",
  },
  {
    name: "TOEIC English Certificate (B2)",
    issuer: "Intermedio Alto",
    type: "Comunicación fluida y escritura técnica",
  },
];

export default function ExperienceSection() {

  useSectionTracking("experiencia");
  return (
    <section id="experiencia" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow background */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Experiencia & Trayectoria</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Experiencia Profesional en <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Sistemas Financieros</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg">
          Especializado en plataformas transaccionales de alto volumen, arquitecturas backend con Java 17 / Spring Boot y frontends reactivos de alto rendimiento.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Experience Timeline (2 columns) */}
        <div className="lg:col-span-2 space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <SpotlightCard key={index} className="relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    {exp.type === "Puesto Actual" && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Actual
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-cyan-400">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{exp.location}</span>
              </div>

              <p className="text-slate-200 text-sm leading-relaxed mb-4">{exp.description}</p>

              {/* Achievements */}
              <div className="space-y-2 mb-6">
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{ach}</span>
                  </div>
                ))}
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-indigo-950/50 border border-indigo-500/25 text-indigo-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Education & Certifications (1 column) */}
        <div className="space-y-6">
          {/* Education Card */}
          <SpotlightCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5 text-white">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">Educación Formal</h3>
              </div>

              {EDUCATION.map((edu, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#090d16]/70 border border-white/5 space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-white">{edu.title}</h4>
                    <span className="text-xs font-mono text-indigo-400">{edu.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-cyan-400">{edu.institution}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{edu.highlight}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Certifications & Languages Card */}
          <SpotlightCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5 text-white">
                <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">Certificaciones & Idiomas</h3>
              </div>

              <div className="space-y-3 mb-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-[#090d16]/70 border border-white/5">
                    <h4 className="text-xs font-bold text-white mb-0.5">{cert.name}</h4>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="text-indigo-300">{cert.issuer}</span>
                      <span className="text-slate-400">{cert.type}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-cyan-950/20 border border-indigo-500/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 mb-1">
                  <Languages className="w-3.5 h-3.5" />
                  <span>Idiomas</span>
                </div>
                <p className="text-xs text-slate-300">
                  <strong className="text-white">Español:</strong> Nativo • <strong className="text-white">Inglés:</strong> B2 (TOEIC Intermedio Alto, comunicación técnica fluida).
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

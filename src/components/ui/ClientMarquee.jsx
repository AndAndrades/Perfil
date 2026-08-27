import {
  Code2,
  Database,
  Server,
  Cloud,
  Boxes,
  Workflow,
  Sparkles,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import { cn } from "../../utils/cn";

const MARQUEE_ITEMS = [
  { name: "React 19 & Next.js", icon: Code2, color: "hover:text-cyan-400 hover:border-cyan-500/40" },
  { name: "Spring Boot / Java", icon: Server, color: "hover:text-emerald-400 hover:border-emerald-500/40" },
  { name: "PostgreSQL & Redis", icon: Database, color: "hover:text-indigo-400 hover:border-indigo-500/40" },
  { name: "AWS & Docker / K8s", icon: Cloud, color: "hover:text-amber-400 hover:border-amber-500/40" },
  { name: "TypeScript & Node.js", icon: Terminal, color: "hover:text-blue-400 hover:border-blue-500/40" },
  { name: "Tailwind CSS & UI/UX", icon: Sparkles, color: "hover:text-purple-400 hover:border-purple-500/40" },
  { name: "Microservices & EDA", icon: Workflow, color: "hover:text-rose-400 hover:border-rose-500/40" },
  { name: "CI/CD & DevOps", icon: ShieldCheck, color: "hover:text-teal-400 hover:border-teal-500/40" },
  { name: "GraphQL & REST APIs", icon: Boxes, color: "hover:text-pink-400 hover:border-pink-500/40" },
  { name: "Performance & Shaders", icon: Zap, color: "hover:text-yellow-400 hover:border-yellow-500/40" },
];

export default function ClientMarquee({ className = "" }) {
  return (
    <div className={cn("relative w-full overflow-hidden py-6 select-none", className)}>
      {/* Gradient masks for smooth edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 md:w-36 bg-gradient-to-r from-[#090d16] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 md:w-36 bg-gradient-to-l from-[#090d16] to-transparent" />

      {/* Marquee Track */}
      <div className="flex animate-marquee gap-6">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${index}`}
              className={cn(
                "flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-[#0f172a]/60 text-slate-400 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer shadow-sm group",
                item.color
              )}
            >
              <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="whitespace-nowrap transition-colors duration-300">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

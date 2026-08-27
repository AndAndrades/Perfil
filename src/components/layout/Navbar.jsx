import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layers,
  Cpu,
  Briefcase,
  Mail,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { cn } from "../../utils/cn";

const NAV_LINKS = [
  { name: "Inicio", href: "#inicio", icon: Code2 },
  { name: "Proyectos", href: "#proyectos", icon: Layers },
  { name: "Habilidades", href: "#habilidades", icon: Cpu },
  { name: "Experiencia", href: "#experiencia", icon: Briefcase },
  { name: "Contacto", href: "#contacto", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["inicio", "proyectos", "habilidades", "experiencia", "contacto"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 pointer-events-none transition-all duration-300">
      <nav
        className={cn(
          "pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 border",
          scrolled
            ? "bg-[#090d16]/85 border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60 scale-95"
            : "bg-[#0f172a]/60 border-white/5 backdrop-blur-md"
        )}
      >
        {/* Brand / Name Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors group mr-2"
        >
          <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white text-xs font-mono font-bold shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            AA
          </span>
          <span className="hidden sm:inline-block font-mono tracking-tight">Andrew Andrades</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 text-xs sm:text-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 block",
                    isActive
                      ? "bg-indigo-600/30 text-white border border-indigo-500/40 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Social / Action Icons */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/AndAndrades"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/andandrades/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contacto</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 md:hidden rounded-2xl border border-white/10 bg-[#090d16]/95 backdrop-blur-2xl p-4 shadow-2xl space-y-2 z-50"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
              >
                <link.icon className="w-4 h-4 text-cyan-400" />
                <span>{link.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

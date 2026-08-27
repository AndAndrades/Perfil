import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Check,
  Mail,
  ArrowUp,
  MapPin,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { cn } from "../../utils/cn";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "andrewandradesg@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="relative border-t border-white/10 bg-[#090d16]/80 backdrop-blur-xl pt-20 pb-12 overflow-hidden">
      {/* Subtle indigo background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact CTA Card with Crystal Glass */}
        <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-[#0f172a]/60 to-[#090d16]/60 p-8 sm:p-12 mb-16 shadow-2xl shadow-black/50 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponible para Proyectos & Consultoría</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              ¿Listo para construir algo extraordinario?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Hablemos sobre arquitectura backend con Java 17, interfaces en React 19 o nuevos retos empresariales.
            </p>
          </div>

          {/* Interactive Copy Email & Mailto buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {/* Copy Button */}
            <button
              onClick={handleCopyEmail}
              className={cn(
                "relative group flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 w-full sm:w-auto cursor-pointer border",
                copied
                  ? "bg-emerald-600/20 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-500/20"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-indigo-500/40"
              )}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2 text-emerald-400"
                  >
                    <Check className="w-4 h-4" />
                    <span>¡Copiado al portapapeles!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span>Copiar correo</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Direct Mailto */}
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all duration-300 w-full sm:w-auto hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Enviar mensaje</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Andrew Andrades</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Java 17 & React Fullstack
              </span>
            </h4>
            <p className="text-slate-300 text-sm max-w-md leading-relaxed">
              Ingeniero en Informática y Desarrollador Full Stack especializado en sistemas empresariales, tesorería bancaria y plataformas financieras de alto volumen.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>Melipilla / Santiago, Chile 🇨🇱 • +569 4573 2543</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">Navegación</h5>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-cyan-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-cyan-400 transition-colors">
                  Proyectos & Métricas
                </a>
              </li>
              <li>
                <a href="#habilidades" className="hover:text-cyan-400 transition-colors">
                  Habilidades & Stack
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-cyan-400 transition-colors">
                  Trayectoria
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">Conexiones</h5>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/andandrades/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-white/10 text-slate-200 hover:text-white transition-all duration-200 hover:scale-105"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/AndAndrades"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-white/10 text-slate-200 hover:text-white transition-all duration-200 hover:scale-105"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${email}`}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-white/10 text-slate-200 hover:text-white transition-all duration-200 hover:scale-105"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Scroll to Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Andrew Andrades. Diseñado con React 19, Tailwind CSS v4, GlassSurface & Shaders.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

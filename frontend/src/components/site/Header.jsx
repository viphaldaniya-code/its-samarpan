import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { NAV, HOSPITAL } from "@/data/site";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "glass border-b border-white/60 shadow-sm" : "bg-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 group"
          data-testid="brand-logo"
        >
          <img
            src="/samarpan-logo.webp"
            alt="Samarpan Hospital logo"
            className="h-14 w-auto object-contain transition-transform group-hover:scale-[1.03]"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg font-medium text-foreground">
              Samarpan Hospital
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Multispeciality · Ajmer
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) =>
            n.type === "route" ? (
              <Link
                key={n.href}
                to={n.href}
                data-testid={`nav-${n.label.toLowerCase()}`}
                className="relative text-sm text-foreground/80 hover:text-foreground transition-colors group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={n.href}
                href={n.href}
                data-testid={`nav-${n.label.toLowerCase()}`}
                className="relative text-sm text-foreground/80 hover:text-foreground transition-colors group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${HOSPITAL.emergency}`}
            data-testid="header-emergency-cta"
            className="group inline-flex items-center gap-2 rounded-full bg-terracotta hover:bg-terracotta-deep transition-all px-4 py-2.5 text-white text-sm font-medium shadow-sm hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
            <span>Emergency 24×7</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full glass border border-white/60"
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass border-t border-white/60"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV.map((n) =>
                n.type === "route" ? (
                  <Link
                    key={n.href}
                    to={n.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-foreground/85"
                  >
                    {n.label}
                  </Link>
                ) : (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-foreground/85"
                  >
                    {n.label}
                  </a>
                )
              )}
              <a
                href={`tel:${HOSPITAL.emergency}`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-4 py-3 text-white font-medium"
              >
                <Phone className="w-4 h-4" /> Emergency 24×7
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

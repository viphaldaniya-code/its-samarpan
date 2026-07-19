import { Instagram, Facebook, Linkedin } from "lucide-react";
import { NAV, HOSPITAL } from "@/data/site";

export const Footer = () => {
  return (
    <footer className="relative bg-brand-deep text-white/90">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-2xl bg-white p-2">
                <img
                  src="/samarpan-logo.webp"
                  alt="Samarpan Hospital logo"
                  className="h-12 w-auto object-contain"
                />
              </span>
              <span className="font-display text-xl">Samarpan Hospital</span>
            </div>
            <p className="mt-6 max-w-md text-white/70 leading-relaxed">
              A quietly ambitious multi-speciality hospital, family-run since
              1998 — where every patient is a person first.
            </p>
            <div className="mt-8 flex gap-3">
              <SocialButton icon={<Instagram className="w-4 h-4" />} label="Instagram" />
              <SocialButton icon={<Facebook className="w-4 h-4" />} label="Facebook" />
              <SocialButton icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-white/50">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-white/50">
              Reach us
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>{HOSPITAL.address}</li>
              <li>
                <a href={`tel:${HOSPITAL.phones[0].replace(/\s/g, "")}`} className="hover:text-white">
                  {HOSPITAL.phones[0]}
                </a>
                {" · "}
                <a href={`tel:${HOSPITAL.phones[1].replace(/\s/g, "")}`} className="hover:text-white">
                  {HOSPITAL.phones[1]}
                </a>
              </li>
              <li>
                <a href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`} className="hover:text-terracotta-soft">
                  {HOSPITAL.emergency}
                </a>{" "}
                · Emergency (24×7)
              </li>
              <li>
                <a
                  href={`mailto:${HOSPITAL.email}`}
                  className="hover:text-white"
                >
                  {HOSPITAL.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Samarpan Hospital · Crafted with care.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Patient Rights</a>
            <a href="#" className="hover:text-white">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialButton = ({ icon, label }) => (
  <a
    href="#"
    aria-label={label}
    className="w-10 h-10 rounded-full border border-white/15 hover:border-white/50 flex items-center justify-center transition-all hover:-translate-y-0.5"
  >
    {icon}
  </a>
);

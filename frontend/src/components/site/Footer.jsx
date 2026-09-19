import { Instagram, Facebook } from "lucide-react";
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
              Samarpan NeuroSpine Multi Speciality Hospital in Ajmer
            </p>
            <div className="mt-8 flex gap-3">
              <SocialButton icon={<Instagram className="w-4 h-4" />} label="Instagram" href="https://www.instagram.com/samarpan_hospital_ajmer/" />
              <SocialButton icon={<Facebook className="w-4 h-4" />} label="Facebook" href="https://www.facebook.com/profile.php?id=61588488869819" />
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
            <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.133716060901!2d74.60638013226313!3d26.483639179225218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7ca9ebd9f93%3A0xa72fc54ad274f055!2sSamarpan%20Neuro%20Spine%20and%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1787672278208!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Samarpan Hospital Location"
              />
            </div>
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
            © Copyright 2024 | All Rights Reserved by SamarpanHospitalajmer.in
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialButton = ({ icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full border border-white/15 hover:border-white/50 flex items-center justify-center transition-all hover:-translate-y-0.5"
  >
    {icon}
  </a>
);

import { motion } from "framer-motion";
import {
  HeartPulse,
  Brain,
  Bone,
  Ribbon,
  Baby,
  Flower2,
  Siren,
  Microscope,
  Stethoscope,
  Ear,
  Scissors,
  Activity,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { SERVICES } from "@/data/site";

const iconMap = {
  HeartPulse, Brain, Bone, Ribbon, Baby, Flower2, Siren, Microscope,
  Stethoscope, Ear, Scissors, Activity,
};

export const Services = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-pearl">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overline text-brand inline-flex items-center gap-3"
            >
              <span className="w-8 h-px bg-brand" /> Our Specialities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mt-5 font-display text-4xl sm:text-5xl font-light leading-[1.05] text-foreground max-w-2xl"
            >
              Expert Medical Specialities
              <em className="not-italic text-brand"> Under One Roof in Ajmer.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 text-lg text-muted-foreground max-w-md"
          >
            From emergency trauma care to advanced neuro and spine treatment in
            Ajmer, Samarpan Hospital Ajmer offers comprehensive healthcare across
            every major speciality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = iconMap[s.icon] || HeartPulse;
            const featured = i === 0;
            return (
              <motion.a
                key={s.key}
                href="#contact"
                data-testid={`service-card-${s.key}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl border transition-all p-7 hover:-translate-y-1 hover:shadow-xl ${
                  featured
                    ? "bg-brand text-white border-brand md:col-span-2 lg:col-span-2"
                    : "bg-white border-brand/10 hover:border-brand/25"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                      featured
                        ? "bg-white/15 text-white"
                        : "bg-brand/8 text-brand"
                    }`}
                    style={featured ? { background: "rgba(255,255,255,0.14)" } : {}}
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.6} />
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      featured ? "text-white/80" : "text-muted-foreground"
                    }`}
                  />
                </div>

                <p
                  className={`mt-8 text-xs uppercase tracking-[0.22em] ${
                    featured ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {s.tag}
                </p>
                <h3
                  className={`mt-2 font-display text-2xl leading-tight ${
                    featured ? "text-white" : "text-foreground"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    featured ? "text-white/85" : "text-muted-foreground"
                  }`}
                >
                  {s.body}
                </p>

                <div
                  className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs ${
                    featured
                      ? "bg-white/15 text-white/90"
                      : "bg-brand/5 text-brand"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" strokeWidth={1.8} />
                  {s.key === "trauma" || s.key === "icu"
                    ? "Open 24×7"
                    : "OPD: 10 AM–2 PM & 6–8 PM"}
                </div>

                {featured && (
                  <span className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-terracotta/25 blur-3xl" />
                )}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

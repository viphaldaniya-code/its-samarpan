import { motion } from "framer-motion";
import {
  HeartPulse, Brain, Bone, Ribbon, Baby, Flower2, Siren, Microscope,
  Stethoscope, Ear, Scissors, Activity,
  ArrowUpRight, Clock, ShieldCheck,
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Contact";
import { SERVICES } from "@/data/site";

const iconMap = {
  HeartPulse, Brain, Bone, Ribbon, Baby, Flower2, Siren, Microscope,
  Stethoscope, Ear, Scissors, Activity,
};

const approach = [
  { icon: Stethoscope, t: "Multi-disciplinary boards", d: "Complex cases are reviewed by several specialists together, so decisions are never made in isolation." },
  { icon: Clock, t: "Same-week specialist slots", d: "We hold urgent slots across departments so worrying symptoms don't wait for weeks." },
  { icon: ShieldCheck, t: "Transparent, ethical care", d: "No unnecessary tests, no surprise bills. Every recommendation is explained and justified." },
];

export default function ServicesPage() {
  return (
    <PageLayout testid="services-page">
      <PageHero
        crumb="Services"
        overline="Specialities"
        title={
          <>
            Forty-two disciplines.
            <br className="hidden sm:block" /> One patient at a time.
          </>
        }
        subtitle="From the golden hour of a stroke to the first days of a newborn, our teams speak to each other — so you never have to repeat your story."
      />

      {/* Full services grid */}
      <section className="pb-8 lg:pb-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = iconMap[s.icon] || HeartPulse;
              return (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
                  className="group rounded-3xl bg-white border border-brand/10 p-8 hover:border-brand/25 hover:shadow-xl hover:-translate-y-1 transition-all"
                  data-testid={`service-detail-${s.key}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand/8 text-brand flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" strokeWidth={1.6} />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {s.tag}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand/5 text-brand px-3 py-1.5 text-xs">
                    <Clock className="w-3.5 h-3.5" strokeWidth={1.8} />
                    {s.key === "trauma" || s.key === "icu"
                      ? "Open 24×7"
                      : "OPD: 10 AM–2 PM & 6–8 PM"}
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
                  >
                    <span>Consult this department</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we care */}
      <section className="py-20 lg:py-28 bg-pearl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="overline text-terracotta-deep inline-flex items-center gap-3">
              <span className="w-8 h-px bg-terracotta-deep" /> How we care
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-light text-foreground">
              The same standard,{" "}
              <em className="not-italic text-brand">across every department.</em>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {approach.map((a, i) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-3xl bg-white border border-brand/10 p-8"
                data-testid={`approach-${i}`}
              >
                <a.icon className="w-7 h-7 text-brand" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl text-foreground">
                  {a.t}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {a.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </PageLayout>
  );
}

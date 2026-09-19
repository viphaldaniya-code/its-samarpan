import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Quote } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { About } from "@/components/site/About";
import { STATS } from "@/data/site";

const values = [
  { t: "Leading Hospital in Ajmer", d: "Trusted by patients across Ajmer for quality healthcare and specialist treatment." },
  { t: "24×7 Emergency in Ajmer", d: "Rapid trauma and emergency care for accidents, critical injuries and medical emergencies." },
  { t: "Advanced Treatment in Ajmer", d: "Expert Neuro, Spine, Orthopaedics and multi speciality care with modern medical technology." },
];

export default function AboutPage() {
  return (
    <PageLayout testid="about-page">
      <PageHero
        crumb="About us"
        overline="About Samarpan"
        title={
          <>
            Best Multi Speciality
            <br className="hidden sm:block" /> Hospital in Ajmer
          </>
        }
        subtitle="Samarpan Hospital is a leading Multi Speciality Hospital in Ajmer, offering expert Neuro & Spine Care, 24×7 Trauma & Emergency Services, Orthopaedics, General Surgery, ENT, Gynecology and Critical Care. With experienced specialists, advanced medical technology and patient-focused care, we provide comprehensive treatment for every stage of life, all under one roof."
      />

      {/* Reuse the rich About storytelling section */}
      <About />

      {/* Values */}
      <section className="py-20 lg:py-28 bg-pearl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-3xl bg-white border border-brand/10 p-8 hover:shadow-lg transition-all"
                data-testid={`value-card-${i}`}
              >
                <span className="font-display text-5xl font-light text-brand/25">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl text-foreground">
                  {v.t}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {v.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 border-t border-brand/10 pt-12">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex flex-col"
              >
                <span className="font-display text-4xl lg:text-5xl font-light text-brand">
                  {s.value}
                </span>
                <span className="mt-2 text-sm text-muted-foreground">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote / CTA */}
      <section className="py-20 lg:py-28 bg-brand text-white overflow-hidden relative">
        <div aria-hidden className="absolute inset-0 noise-overlay" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <Quote className="w-10 h-10 text-terracotta mx-auto" strokeWidth={1.5} />
          <p className="mt-6 font-display text-3xl sm:text-4xl font-light leading-[1.2]">
            Leading Neuro, Spine, Trauma & Multi Speciality Hospital in Ajmer,
            Committed to Better Outcomes for Every Patient.
          </p>
          <p className="mt-8 text-white/70">
            — Samarpan Neuro Spine & Multispeciality Hospital
          </p>
          <Link
            to="/services"
            data-testid="about-explore-services"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-terracotta hover:bg-terracotta-deep px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5"
          >
            Explore our specialities
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

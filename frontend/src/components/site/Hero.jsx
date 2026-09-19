import { motion } from "framer-motion";
import { ArrowUpRight, PhoneCall, MapPin } from "lucide-react";
import { HOSPITAL, STATS } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden noise-overlay">
      {/* soft background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute top-40 right-[-120px] w-[420px] h-[420px] rounded-full bg-terracotta/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        {/* Text */}
        <div className="lg:col-span-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="overline text-muted-foreground mb-6 inline-flex items-center gap-2"
            data-testid="hero-overline"
          >
            <span className="w-8 h-px bg-terracotta" />
            NABH Accredited · Multi-Speciality
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.02] tracking-tight text-foreground"
          >
            Samarpan <em className="not-italic font-normal text-brand">Neuro Spine and Multispeciality</em>
            <br />
            Hospital in <span className="italic font-normal text-terracotta">Ajmer</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Samarpan Hospital is one of Ajmer's leading NABH Accredited Multi
            Speciality Hospitals, providing expert Neuro Surgery, Spine Care,
            Trauma &amp; Accident Treatment, Orthopaedics, Critical Care and 24×7
            Emergency Services under one roof. Our experienced specialists and
            advanced technology help patients receive faster diagnosis, safer
            surgeries and better recovery.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#services"
              data-testid="hero-explore-cta"
              className="group inline-flex items-center gap-2 rounded-full bg-brand hover:bg-brand-soft text-white px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 shadow-sm"
            >
              Explore our specialities
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`tel:${HOSPITAL.phone}`}
              data-testid="hero-call-cta"
              className="inline-flex items-center gap-2 rounded-full border border-brand/25 hover:border-brand/50 px-6 py-3.5 text-sm font-medium text-foreground hover:bg-white transition-all"
            >
              <PhoneCall className="w-4 h-4" /> Talk to a coordinator
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand" strokeWidth={1.6} />
              <span>Ajmer, Rajasthan</span>
            </div>
            <span className="divider-dot" />
            <span>5+ years of quiet excellence</span>
          </motion.div>
        </div>

        {/* Image + stats */}
        <div className="lg:col-span-6 relative lg:self-start lg:mt-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-brand/10"
            data-testid="hero-image"
          >
            <img
              src="/hero-hospital.jpeg"
              alt="Modern hospital architecture at Samarpan Hospital"
              className="w-full h-[540px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 via-transparent to-transparent" />

            <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between">
              <div className="glass rounded-2xl px-5 py-4 border border-white/60">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-deep">
                  Trauma Centre
                </p>
                <p className="text-sm text-foreground mt-1">
                  Ajmer's BEST Trauma Center
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 glass rounded-full px-4 py-2 border border-white/60">
                <span className="w-2 h-2 rounded-full bg-terracotta pulse-ring" />
                <span className="text-xs text-foreground">Emergency online</span>
              </div>
            </div>
          </motion.div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute -left-10 -bottom-10 w-[280px] bg-white rounded-3xl p-5 border border-black/5 shadow-xl float-slow"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              24×7 Trauma Care
            </p>
            <p className="mt-2 font-display text-2xl text-foreground leading-snug">
              <span className="text-terracotta">24×7</span> Trauma Center — best in Ajmer.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Rapid response for accidents, head & spinal injuries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 mt-20 lg:mt-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 border-t border-brand/10 pt-10">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="flex flex-col"
              data-testid={`stat-${i}`}
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
  );
};

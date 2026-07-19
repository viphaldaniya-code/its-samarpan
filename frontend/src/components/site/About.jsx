import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  {
    k: "01",
    t: "24×7 Trauma & Accident Care",
    d: "Immediate emergency treatment for road accidents, fractures, head injuries and critical trauma.",
  },
  {
    k: "02",
    t: "Advanced Neuro & Spine Care",
    d: "Expert diagnosis and treatment for brain, spine and neurological conditions.",
  },
  {
    k: "03",
    t: "Complete Multi Speciality Care",
    d: "Comprehensive care across Orthopaedics, ENT, General Medicine, Surgery and Critical Care.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14">
        {/* Images */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1517120026326-d87759a7b63b?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
              alt="Nurse walking with patient"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="hidden md:block absolute -right-6 -bottom-8 w-[52%] rounded-3xl overflow-hidden aspect-square shadow-2xl border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=700&q=80"
              alt="Doctor and patient in consultation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 lg:pl-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overline text-terracotta-deep inline-flex items-center gap-3"
          >
            <span className="w-8 h-px bg-terracotta-deep" /> Samarpan Multispecialty Hospital
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 font-display text-4xl sm:text-5xl font-light leading-[1.05] text-foreground"
          >
            Ajmer's Trusted Multi Speciality Hospital
            <br />
            for Neuro, Trauma &amp; Emergency Care
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed max-w-2xl"
          >
            <p>
              Samarpan Hospital is one of the leading multi speciality hospitals
              in Ajmer, providing advanced treatment across Neuro Surgery, Spine
              Care, Orthopaedics, Trauma &amp; Accident Care, ENT, General Medicine
              and Critical Care. Our experienced specialists, modern operation
              theatres and 24×7 Emergency &amp; Trauma Centre ensure that patients
              receive timely diagnosis, expert treatment and compassionate
              care—all under one roof.
            </p>
            <p>
              Whether it's a road accident, head injury, spinal injury, stroke or
              any medical emergency, our dedicated trauma team is equipped to
              provide rapid assessment and life-saving treatment when every
              minute counts.
            </p>
          </motion.div>

          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="group relative rounded-3xl border border-brand/10 bg-pearl/60 p-6 hover:bg-white hover:shadow-lg transition-all"
              >
                <span className="absolute top-6 right-6 text-xs text-muted-foreground/70">
                  {p.k}
                </span>
                <CheckCircle2
                  className="w-6 h-6 text-brand mb-4"
                  strokeWidth={1.5}
                />
                <p className="font-display text-lg text-foreground">{p.t}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { DOCTORS } from "@/data/site";

export const Doctors = () => {
  return (
    <section id="doctors" className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overline text-terracotta-deep inline-flex items-center gap-3"
            >
              <span className="w-8 h-px bg-terracotta-deep" /> Our specialists
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mt-5 font-display text-4xl sm:text-5xl font-light leading-[1.05] text-foreground"
            >
              Senior hands.
              <br />
              <em className="not-italic text-brand">Softer voices.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-md text-lg text-muted-foreground"
          >
            Every consultant at Samarpan carries at least a decade of hospital
            experience — and the discipline of listening before diagnosing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {DOCTORS.slice(0, 2).map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group w-full sm:w-3/4 md:w-2/3 lg:w-1/2 transform origin-center"
              data-testid={`doctor-card-${i}`}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4] lg:aspect-[3/4] bg-pearl">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/75 via-brand-deep/15 to-transparent opacity-90" />
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground border border-white/70">
                  {d.years} experience
                </div>
                <div className="absolute inset-x-5 bottom-5 text-white">
                  <div className="flex items-start gap-2 max-w-md">
                    <Quote
                      className="w-5 h-5 mt-1 shrink-0 text-terracotta"
                      strokeWidth={1.5}
                    />
                    <p className="text-base leading-snug italic opacity-95">
                      {d.quote}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <p className="font-display text-2xl text-foreground">
                    {d.name}
                  </p>
                  <p className="text-base text-brand font-medium mt-1">
                    {d.speciality}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {d.qualification}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

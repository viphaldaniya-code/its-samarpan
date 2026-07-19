import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

export const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 bg-brand text-white overflow-hidden"
    >
      {/* subtle texture */}
      <div aria-hidden className="absolute inset-0 noise-overlay" />
      <div
        aria-hidden
        className="absolute -top-32 right-[-120px] w-[520px] h-[520px] rounded-full bg-terracotta/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-center justify-between mb-10">
          <p className="overline text-terracotta-soft inline-flex items-center gap-3">
            <span className="w-8 h-px bg-terracotta-soft" /> Patient stories
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-terracotta text-terracotta"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15]"
                data-testid={`testimonial-${idx}`}
              >
                <span className="text-terracotta text-6xl leading-none align-top mr-2">
                  &ldquo;
                </span>
                {t.quote}
                <span className="text-terracotta text-6xl leading-none align-bottom ml-1">
                  &rdquo;
                </span>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4 flex flex-col lg:items-end gap-6">
            <div>
              <p className="font-display text-xl">{t.name}</p>
              <p className="text-sm text-white/70 mt-1">{t.context}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                }
                data-testid="testimonial-prev"
                className="w-12 h-12 rounded-full border border-white/25 hover:border-white/70 flex items-center justify-center transition-all hover:-translate-x-0.5"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
                data-testid="testimonial-next"
                className="w-12 h-12 rounded-full bg-terracotta hover:bg-terracotta-deep flex items-center justify-center transition-all hover:translate-x-0.5"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-2 text-xs text-white/60">
              <span>{String(idx + 1).padStart(2, "0")}</span>
              <span className="opacity-40">/</span>
              <span>{String(TESTIMONIALS.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

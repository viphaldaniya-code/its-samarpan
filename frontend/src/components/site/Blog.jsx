import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOG } from "@/data/site";

const MotionLink = motion.create(Link);

export const Blog = () => {
  return (
    <section id="blog" className="relative py-24 lg:py-32 bg-pearl">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overline text-brand inline-flex items-center gap-3"
            >
              <span className="w-8 h-px bg-brand" /> Health Insights from Ajmer's Trusted Specialists
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mt-5 font-display text-4xl sm:text-5xl font-light leading-[1.05] text-foreground max-w-3xl"
            >
              Stay informed with trusted health tips, treatment guides and
              <em className="not-italic text-brand"> expert advice from Samarpan Hospital, Ajmer.</em>
            </motion.h2>
          </div>
          <Link
            to="/blog"
            data-testid="blog-view-all"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-soft"
          >
            View all articles <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG.map((b, i) => (
            <MotionLink
              key={b.title}
              to={`/blog/${b.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group cursor-pointer block"
              data-testid={`blog-card-${i}`}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground border border-white/70">
                  {b.tag}
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{b.date}</span>
                  <span className="divider-dot" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {b.read}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl leading-snug text-foreground group-hover:text-brand transition-colors">
                  {b.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand font-medium">
                  Read article
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
};

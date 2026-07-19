import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { BLOG } from "@/data/site";

const MotionLink = motion.create(Link);

export default function BlogListPage() {
  const [featured, ...rest] = BLOG;

  return (
    <PageLayout testid="blog-list-page">
      <PageHero
        crumb="Journal"
        overline="Health Journal"
        title={
          <>
            Health tips, written by
            <br className="hidden sm:block" /> the doctors who diagnose them.
          </>
        }
        subtitle="Honest, practical writing from the specialists at Samarpan — no jargon, no fear-mongering, just what actually helps."
      />

      {/* Featured */}
      <section className="pb-4 lg:pb-10 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <MotionLink
            to={`/blog/${featured.slug}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="group grid lg:grid-cols-2 gap-8 items-center rounded-[2rem] overflow-hidden bg-white border border-brand/10 hover:shadow-xl transition-all"
            data-testid="blog-featured"
          >
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
              />
              <span className="absolute top-5 left-5 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground border border-white/70">
                Featured · {featured.tag}
              </span>
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{featured.date}</span>
                <span className="divider-dot" />
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {featured.read}
                </span>
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-light leading-tight text-foreground group-hover:text-brand transition-colors">
                {featured.title}
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                Read article
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </MotionLink>
        </div>
      </section>

      {/* Rest of grid */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((b, i) => (
              <MotionLink
                key={b.slug}
                to={`/blog/${b.slug}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group block"
                data-testid={`blog-list-card-${i}`}
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[16/10]">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
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
                  <h3 className="mt-3 font-display text-2xl leading-snug text-foreground group-hover:text-brand transition-colors">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {b.excerpt}
                  </p>
                </div>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

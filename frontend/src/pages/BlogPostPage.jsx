import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { BLOG } from "@/data/site";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG.find((b) => b.slug === slug);
  const others = BLOG.filter((b) => b.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <PageLayout testid="blog-post-not-found">
        <section className="pt-40 pb-32 text-center">
          <div className="mx-auto max-w-xl px-6">
            <p className="overline text-terracotta-deep">404</p>
            <h1 className="mt-4 font-display text-4xl font-light text-foreground">
              This article has moved on.
            </h1>
            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand hover:bg-brand-soft text-white px-6 py-3.5 text-sm font-medium transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to the Journal
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout testid="blog-post-page">
      {/* Hero */}
      <article>
        <header className="relative pt-36 pb-10 lg:pt-44 overflow-hidden noise-overlay">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-[-120px] w-[480px] h-[480px] rounded-full bg-terracotta/12 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
            <Link
              to="/blog"
              data-testid="blog-back-link"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> The Journal
            </Link>
            <span className="mt-8 inline-block rounded-full bg-brand/8 text-brand px-4 py-1.5 text-xs uppercase tracking-[0.22em]">
              {post.tag}
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-5 font-display text-4xl sm:text-5xl font-light leading-[1.08] text-foreground"
            >
              {post.title}
            </motion.h1>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.read} read
              </span>
              <span className="divider-dot" />
              <span>
                By <span className="text-foreground">{post.author}</span> ·{" "}
                {post.authorRole}
              </span>
            </div>
          </div>
        </header>

        {/* Cover image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="rounded-[2rem] overflow-hidden aspect-[16/9] shadow-xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-14 lg:py-20">
          <p className="font-display text-2xl sm:text-3xl font-light leading-snug text-foreground">
            {post.excerpt}
          </p>
          <div className="mt-12 space-y-10">
            {post.content.map((block, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                data-testid={`post-block-${i}`}
              >
                <h2 className="font-display text-2xl text-foreground">
                  {block.heading}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {block.body}
                </p>
              </motion.section>
            ))}
          </div>

          {/* Author card */}
          <div className="mt-16 rounded-3xl bg-pearl border border-brand/10 p-8 flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center font-display text-xl shrink-0">
              {post.author.split(" ").slice(-1)[0][0]}
            </div>
            <div>
              <p className="font-display text-lg text-foreground">
                {post.author}
              </p>
              <p className="text-sm text-muted-foreground">{post.authorRole}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Writing to make good medicine understandable — one honest article
                at a time.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-16 lg:py-24 bg-pearl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground">
              Keep reading
            </h2>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-soft"
            >
              All articles <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {others.map((b) => (
              <Link
                key={b.slug}
                to={`/blog/${b.slug}`}
                className="group block"
                data-testid={`related-${b.slug}`}
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
                <h3 className="mt-4 font-display text-xl text-foreground group-hover:text-brand transition-colors">
                  {b.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

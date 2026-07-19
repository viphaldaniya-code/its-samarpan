import { motion } from "framer-motion";
import { Image as ImageIcon, Camera, Building2 } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

const galleryPlaceholders = [
  { key: "lobby", title: "Main Lobby", hint: "Reception and waiting area" },
  { key: "ot", title: "Operation Theatre", hint: "Advanced sterile surgical setup" },
  { key: "icu", title: "ICU Unit", hint: "24x7 critical care monitoring" },
  { key: "ward", title: "Patient Rooms", hint: "Comfortable and hygienic recovery spaces" },
  { key: "diagnostics", title: "Diagnostics", hint: "Modern imaging and lab support" },
  { key: "facade", title: "Hospital Exterior", hint: "Campus and entrance views" },
];

export default function GalleryPage() {
  return (
    <PageLayout testid="gallery-page">
      <PageHero
        crumb="Gallery"
        overline="Hospital Photos"
        title={
          <>
            A closer look at
            <br className="hidden sm:block" /> Samarpan Hospital.
          </>
        }
        subtitle="These are placeholder cards for your professional hospital photos. Share your final images and I will drop them in with the same layout and animations."
      />

      <section className="pb-20 lg:pb-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {galleryPlaceholders.map((item, i) => (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: i * 0.06 }}
                className="group rounded-3xl overflow-hidden border border-brand/10 bg-white shadow-sm hover:shadow-xl transition-all"
                data-testid={`gallery-card-${item.key}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-terracotta/10 to-brand-deep/20" />
                  <div className="absolute -top-16 -right-10 w-44 h-44 rounded-full bg-white/35 blur-2xl" />
                  <div className="absolute -bottom-16 -left-10 w-44 h-44 rounded-full bg-brand/20 blur-2xl" />

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-brand/85"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/70 border border-white/80 flex items-center justify-center backdrop-blur-sm">
                      <ImageIcon className="w-7 h-7" strokeWidth={1.7} />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.2em] text-brand-deep/80">
                      Photo Placeholder
                    </p>
                  </motion.div>
                </div>

                <div className="p-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-brand">
                    {i % 2 === 0 ? (
                      <Camera className="w-3.5 h-3.5" strokeWidth={1.8} />
                    ) : (
                      <Building2 className="w-3.5 h-3.5" strokeWidth={1.8} />
                    )}
                    Gallery Slot
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.hint}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

import { motion } from "framer-motion";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

const galleryImages = [
  { key: "img1", src: "/galary/IMG_4402.PNG" },
  { key: "img2", src: "/galary/IMG_4403.PNG" },
  { key: "img3", src: "/galary/IMG_4422.PNG" },
  { key: "img4", src: "/galary/IMG_4423.PNG" },
  { key: "img5", src: "/galary/IMG_4425.PNG" },
  { key: "img6", src: "/galary/IMG_4426.PNG" },
  { key: "img7", src: "/galary/].png" },
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
      />

      <section className="pb-20 lg:pb-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {galleryImages.map((item, i) => (
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
                  <img
                    src={item.src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

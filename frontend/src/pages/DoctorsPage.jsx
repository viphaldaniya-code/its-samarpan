import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Quote, Stethoscope, Clock3, ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { DOCTORS, HOSPITAL } from "@/data/site";

export default function DoctorsPage() {
  const mainDoctors = DOCTORS.slice(0, 2);

  return (
    <PageLayout testid="doctors-page">
      <PageHero
        crumb="Doctors"
        overline="Our specialists"
        title={
          <>
            Meet the people
            <br className="hidden sm:block" /> behind the care.
          </>
        }
        subtitle="Led by senior consultants with decades of hospital experience, our specialists bring together deep expertise and the discipline of listening before diagnosing."
      />

      <section className="py-12 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {mainDoctors.map((d, i) => (
              <motion.article
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group w-full sm:w-3/4 md:w-2/3 lg:w-1/2 transform origin-center"
                data-testid={`doctor-profile-${i}`}
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

                <div className="mt-6">
                  <p className="font-display text-2xl text-foreground">
                    {d.name}
                  </p>
                  <p className="text-base text-brand font-medium mt-1">
                    {d.speciality}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {d.qualification}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="w-4 h-4 text-brand/70" strokeWidth={1.6} />
                      {d.years} of experience
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-brand/70" strokeWidth={1.6} />
                      Senior Consultant
                    </span>
                  </div>
                  <a
                    href={`tel:${HOSPITAL.phone}`}
                    data-testid={`doctor-book-${i}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-soft"
                  >
                    Book a consultation
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-pearl">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="relative rounded-[2rem] overflow-hidden bg-brand text-white p-10 lg:p-14">
            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-terracotta/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Stethoscope className="w-8 h-8 text-terracotta" strokeWidth={1.5} />
                <p className="mt-5 font-display text-3xl sm:text-4xl font-light leading-tight">
                  Not sure who to see?
                </p>
                <p className="mt-4 text-white/75">
                  Our care coordinators will match you to the right specialist —
                  just tell us what's troubling you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                <a
                  href={`tel:${HOSPITAL.phone}`}
                  data-testid="doctors-call-cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta hover:bg-terracotta-deep px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5"
                >
                  Talk to a coordinator
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 hover:border-white/60 px-6 py-3.5 text-sm font-medium transition-all"
                >
                  Browse specialities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Quote, Stethoscope, Clock3, ArrowUpRight, UserRound, BriefcaseMedical } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DOCTORS, HOSPITAL } from "@/data/site";

function DoctorProfileModal({ doctor }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="mt-5 inline-flex items-center gap-2 rounded-full border-brand/30 bg-white text-brand hover:bg-brand/5"
        >
          <UserRound className="h-4 w-4" />
          View Profile
        </Button>
      </DialogTrigger>

      <DialogContent className="overflow-hidden p-0 sm:max-w-2xl">
        <div className="grid gap-0 sm:grid-cols-[220px_1fr]">
          <div className="bg-pearl">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="p-6">
            <DialogHeader className="mb-4 text-left">
              <DialogTitle className="text-2xl font-display text-foreground">
                {doctor.name}
              </DialogTitle>
              <DialogDescription className="text-base text-brand font-medium">
                {doctor.speciality}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BriefcaseMedical className="h-4 w-4 text-brand" />
                <span>{doctor.qualification}</span>
              </div>
              {doctor.honor ? (
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
                    {doctor.honor}
                  </span>
                </div>
              ) : null}
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-brand" />
                <span>{doctor.years} of experience</span>
              </div>
              {doctor.timing ? (
                <div className="flex items-center gap-2 text-xs text-foreground/80">
                  <Clock3 className="h-4 w-4 text-brand" />
                  <span>{doctor.timing}</span>
                </div>
              ) : null}
            </div>

            <blockquote className="mt-5 rounded-2xl border border-brand/10 bg-brand/5 p-4 text-base italic text-foreground">
              “{doctor.quote}”
            </blockquote>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Dedicated to compassionate, patient-first care with a focus on accurate diagnosis,
              clear communication, and treatment plans tailored to each individual's needs.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${HOSPITAL.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-soft"
              >
                Book Consultation
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function DoctorsPage() {
  const mainDoctors = DOCTORS;
  const doctorSchema = {
    "@context": "https://schema.org",
    "@graph": DOCTORS.map((doctor) => ({
      "@type": "Physician",
      "name": doctor.name,
      "image": doctor.image,
      "jobTitle": doctor.speciality,
      "medicalSpecialty": [doctor.speciality],
      "description": doctor.quote,
      "affiliation": {
        "@type": "Hospital",
        "name": "Samarpan Hospital Ajmer",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "CP 02, Pushkar Rd, near City Pride Garden, HUD Nagar Extension, Haribhau Upadhyay Nagar Extension",
          "addressLocality": "Ajmer",
          "addressRegion": "Rajasthan",
          "postalCode": "305001",
          "addressCountry": "IN",
        },
      },
      "areaServed": "Ajmer, Rajasthan",
      "telephone": "+91-90572-74807",
      "url": "https://www.samarpanhospitalajmer.in/doctors",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-stretch">
            {mainDoctors.map((d, i) => (
              <motion.article
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group w-full transform origin-center"
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
                  {d.honor ? (
                    <div className="mt-2">
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-800">
                        {d.honor}
                      </span>
                    </div>
                  ) : null}
                  {d.timing ? (
                    <div className="mt-3 text-xs text-foreground/80">
                      <span className="font-medium text-foreground">Timings:</span> {d.timing}
                    </div>
                  ) : null}
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
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${HOSPITAL.phone}`}
                      data-testid={`doctor-book-${i}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-soft"
                    >
                      Book a consultation
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <DoctorProfileModal doctor={d} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
    </>
  );
}

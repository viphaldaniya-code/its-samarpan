import { motion } from "framer-motion";
import { useState } from "react";
import {
  HeartPulse, Brain, Bone, Ribbon, Baby, Flower2, Siren, Microscope,
  Stethoscope, Ear, Scissors, Activity,
  ArrowUpRight, Clock, ShieldCheck, UserRound, BriefcaseMedical,
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SERVICES, DOCTORS, HOSPITAL } from "@/data/site";

const iconMap = {
  HeartPulse, Brain, Bone, Ribbon, Baby, Flower2, Siren, Microscope,
  Stethoscope, Ear, Scissors, Activity,
};

const approach = [
  { icon: Stethoscope, t: "Multi-disciplinary boards", d: "Complex cases are reviewed by several specialists together, so decisions are never made in isolation." },
  { icon: Clock, t: "Same-week specialist slots", d: "We hold urgent slots across departments so worrying symptoms don't wait for weeks." },
  { icon: ShieldCheck, t: "Transparent, ethical care", d: "No unnecessary tests, no surprise bills. Every recommendation is explained and justified." },
];

const serviceDoctorMap = {
  neuro: "Dr. Praveen Kumar Gupta",
  trauma: "Dr. Sarvan Yadav",
  ortho: "Dr. Pradeep Kumawat",
  medicine: "Dr Vijay Lakshmi",
  ent: "Dr. Shardul Singh",
  surgery: "Dr. Sharat Mathur",
  icu: "Dr. Sarvan Yadav",
};

function ServiceDoctorModal({ doctor, open, onOpenChange }) {
  if (!doctor) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
              {doctor.focus ? (
                <div className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-brand" />
                  <span>{doctor.focus}</span>
                </div>
              ) : null}
              {doctor.timing ? (
                <div className="flex items-center gap-2 text-xs text-foreground/80">
                  <Clock className="h-4 w-4 text-brand" />
                  <span>{doctor.timing}</span>
                </div>
              ) : null}
            </div>

            <blockquote className="mt-5 rounded-2xl border border-brand/10 bg-brand/5 p-4 text-base italic text-foreground">
              “{doctor.quote}”
            </blockquote>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-soft">
                <a href={`tel:${HOSPITAL.phone}`}>Book Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ServicesPage() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Samarpan Hospital Speciality Departments",
    "itemListElement": SERVICES.map((service, index) => ({
      "@type": "MedicalBusiness",
      "position": index + 1,
      "name": service.title,
      "description": service.body,
      "medicalSpecialty": service.title,
      "areaServed": "Ajmer, Rajasthan",
      "parentOrganization": {
        "@type": "Hospital",
        "name": "Samarpan Hospital Ajmer",
      },
      "telephone": "+91-90572-74807",
      "url": "https://www.samarpanhospitalajmer.in/services",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageLayout testid="services-page">
      <PageHero
        crumb="Services"
        overline="Specialities"
        title={
          <>
            Forty-two disciplines.
            <br className="hidden sm:block" /> One patient at a time.
          </>
        }
        subtitle="From the golden hour of a stroke to the first days of a newborn, our teams speak to each other — so you never have to repeat your story."
      />

      {/* Full services grid */}
      <section className="pb-8 lg:pb-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = iconMap[s.icon] || HeartPulse;
              const matchedDoctor = serviceDoctorMap[s.key]
                ? DOCTORS.find((doctor) => doctor.name === serviceDoctorMap[s.key])
                : null;
              const isClickable = Boolean(matchedDoctor);

              return (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
                  className={`group rounded-3xl bg-white border border-brand/10 p-8 transition-all ${
                    isClickable
                      ? "cursor-pointer hover:border-brand/25 hover:shadow-xl hover:-translate-y-1"
                      : "cursor-default"
                  }`}
                  onClick={isClickable ? () => setSelectedDoctor(matchedDoctor) : undefined}
                  onKeyDown={
                    isClickable
                      ? (event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setSelectedDoctor(matchedDoctor);
                          }
                        }
                      : undefined
                  }
                  role={isClickable ? "button" : undefined}
                  tabIndex={isClickable ? 0 : undefined}
                  data-testid={`service-detail-${s.key}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand/8 text-brand flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" strokeWidth={1.6} />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {s.tag}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand/5 text-brand px-3 py-1.5 text-xs">
                    <Clock className="w-3.5 h-3.5" strokeWidth={1.8} />
                    {s.key === "trauma" || s.key === "icu"
                      ? "Open 24×7"
                      : "OPD: 10 AM–2 PM & 6–8 PM"}
                  </div>
                  {matchedDoctor ? (
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                      <span>View specialist profile</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  ) : (
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground/70">
                      <span>Department currently not staffed</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we care */}
      <section className="py-20 lg:py-28 bg-pearl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="overline text-terracotta-deep inline-flex items-center gap-3">
              <span className="w-8 h-px bg-terracotta-deep" /> How we care
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-light text-foreground">
              The same standard,{" "}
              <em className="not-italic text-brand">across every department.</em>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {approach.map((a, i) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-3xl bg-white border border-brand/10 p-8"
                data-testid={`approach-${i}`}
              >
                <a.icon className="w-7 h-7 text-brand" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl text-foreground">
                  {a.t}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {a.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceDoctorModal
        doctor={selectedDoctor}
        open={Boolean(selectedDoctor)}
        onOpenChange={(open) => {
          if (!open) setSelectedDoctor(null);
        }}
      />

    </PageLayout>
    </>
  );
}

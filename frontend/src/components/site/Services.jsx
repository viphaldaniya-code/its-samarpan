import { motion } from "framer-motion";
import { useState } from "react";
import {
  HeartPulse,
  Brain,
  Bone,
  Ribbon,
  Baby,
  Flower2,
  Siren,
  Microscope,
  Stethoscope,
  Ear,
  Scissors,
  Activity,
  ArrowUpRight,
  Clock,
  BriefcaseMedical,
  UserRound,
} from "lucide-react";
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

const homeServiceDoctorMap = {
  neuro: "Dr. Praveen Kumar Gupta",
  trauma: "Dr. Sarvan Yadav",
  ortho: "Dr. Pradeep Kumawat",
  medicine: "Dr Vijay Lakshmi",
  ent: "Dr. Shardul Singh",
  surgery: "Dr. Sharat Mathur",
  icu: "Dr. Sarvan Yadav",
};

function HomeServiceDoctorModal({ doctor, open, onOpenChange }) {
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

export const Services = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <>
      <section id="services" className="relative py-24 lg:py-32 bg-pearl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="overline text-brand inline-flex items-center gap-3"
              >
                <span className="w-8 h-px bg-brand" /> Our Specialities
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mt-5 font-display text-4xl sm:text-5xl font-light leading-[1.05] text-foreground max-w-2xl"
              >
                Expert Medical Specialities
                <em className="not-italic text-brand"> Under One Roof in Ajmer.</em>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-5 text-lg text-muted-foreground max-w-md"
            >
              From emergency trauma care to advanced neuro and spine treatment in
              Ajmer, Samarpan Hospital Ajmer offers comprehensive healthcare across
              every major speciality.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = iconMap[s.icon] || HeartPulse;
              const featured = i === 0;
              const matchedDoctor = homeServiceDoctorMap[s.key]
                ? DOCTORS.find((doctor) => doctor.name === homeServiceDoctorMap[s.key])
                : null;
              const isClickable = Boolean(matchedDoctor);

              return (
                <motion.div
                  key={s.key}
                  data-testid={`service-card-${s.key}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`group relative overflow-hidden rounded-3xl border transition-all p-7 hover:-translate-y-1 hover:shadow-xl ${
                    featured
                      ? "bg-brand text-white border-brand md:col-span-2 lg:col-span-2"
                      : "bg-white border-brand/10 hover:border-brand/25"
                  } ${isClickable ? "cursor-pointer" : "cursor-default"}`}
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
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        featured
                          ? "bg-white/15 text-white"
                          : "bg-brand/8 text-brand"
                      }`}
                      style={featured ? { background: "rgba(255,255,255,0.14)" } : {}}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.6} />
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        featured ? "text-white/80" : "text-muted-foreground"
                      }`}
                    />
                  </div>

                  <p
                    className={`mt-8 text-xs uppercase tracking-[0.22em] ${
                      featured ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {s.tag}
                  </p>
                  <h3
                    className={`mt-2 font-display text-2xl leading-tight ${
                      featured ? "text-white" : "text-foreground"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      featured ? "text-white/85" : "text-muted-foreground"
                    }`}
                  >
                    {s.body}
                  </p>

                  <div
                    className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs ${
                      featured
                        ? "bg-white/15 text-white/90"
                        : "bg-brand/5 text-brand"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" strokeWidth={1.8} />
                    {s.key === "trauma" || s.key === "icu"
                      ? "Open 24×7"
                      : "OPD: 10 AM–2 PM & 6–8 PM"}
                  </div>

                  {isClickable && (
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                      <span>{featured ? "View specialist profile" : "View specialist"}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  )}

                  {featured && (
                    <span className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-terracotta/25 blur-3xl" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <HomeServiceDoctorModal
        doctor={selectedDoctor}
        open={Boolean(selectedDoctor)}
        onOpenChange={(open) => {
          if (!open) setSelectedDoctor(null);
        }}
      />
    </>
  );
};

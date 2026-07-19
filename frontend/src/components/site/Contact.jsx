import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Siren, ArrowUpRight } from "lucide-react";
import { HOSPITAL, ACCREDITATIONS } from "@/data/site";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: heading + info */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overline text-terracotta-deep inline-flex items-center gap-3"
            >
              <span className="w-8 h-px bg-terracotta-deep" /> Reach us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mt-5 font-display text-4xl sm:text-5xl font-light leading-[1.05] text-foreground"
            >
              Come by.
              <br />
              Or call — we{" "}
              <em className="not-italic text-brand">answer within three rings.</em>
            </motion.h2>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <InfoCard
                icon={<MapPin className="w-5 h-5" strokeWidth={1.6} />}
                title="Visit"
                body={HOSPITAL.address}
                testid="contact-address"
              />
              <InfoCard
                icon={<Phone className="w-5 h-5" strokeWidth={1.6} />}
                title="Call"
                body={`${HOSPITAL.phones.join("\n")}\nAppointments · General queries`}
                testid="contact-phone"
              />
              <InfoCard
                icon={<Mail className="w-5 h-5" strokeWidth={1.6} />}
                title="Write"
                body={HOSPITAL.email}
                testid="contact-email"
              />
              <InfoCard
                icon={<Clock className="w-5 h-5" strokeWidth={1.6} />}
                title="Hours"
                body={HOSPITAL.hours}
                testid="contact-hours"
              />
            </div>
          </div>

          {/* Right: emergency card + accreditations */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="relative rounded-[2rem] overflow-hidden bg-brand text-white p-10 shadow-xl"
            >
              <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-terracotta/30 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-terracotta/20 text-terracotta-soft px-3 py-1 text-xs uppercase tracking-[0.22em] pulse-ring">
                  <Siren className="w-4 h-4" strokeWidth={1.6} />
                  Emergency · 24 × 7
                </div>
                <p className="mt-6 font-display text-3xl sm:text-4xl leading-tight">
                  For life-threatening emergencies,
                  <br />
                  call our red line directly.
                </p>
                <a
                  href={`tel:${HOSPITAL.emergency}`}
                  data-testid="emergency-call-button"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-terracotta hover:bg-terracotta-deep px-6 py-4 text-lg font-medium transition-all hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  {HOSPITAL.emergency}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="mt-6 text-sm text-white/70 max-w-md">
                  Ambulances tracked in real-time · triage doctor on the line
                  before we arrive.
                </p>
              </div>
            </motion.div>

            <div className="mt-8">
              <p className="overline text-muted-foreground mb-4">
                Accreditations & Empanelments
              </p>
              <div className="flex flex-wrap gap-2">
                {ACCREDITATIONS.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-brand/15 bg-pearl px-4 py-2 text-xs text-foreground/85"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, body, testid }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="rounded-3xl border border-brand/10 bg-pearl/50 p-6 hover:bg-pearl hover:border-brand/25 transition-all"
    data-testid={testid}
  >
    <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-brand mb-4">
      {icon}
    </div>
    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
      {title}
    </p>
    <p className="mt-2 text-sm text-foreground whitespace-pre-line leading-relaxed">
      {body}
    </p>
  </motion.div>
);

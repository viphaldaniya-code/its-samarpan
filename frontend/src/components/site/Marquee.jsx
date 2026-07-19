import { HeartPulse } from "lucide-react";

const items = [
  "Neuro & Spine Centre",
  "24×7 Trauma Centre",
  "Emergency Medicine",
  "Orthopaedics",
  "Neurosurgery",
  "Spine Surgery",
  "General Medicine",
  "ENT Specialists",
  "Critical Care ICU",
  "General Surgery",
  "Laparoscopic Surgery",
];

export const Marquee = () => {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-brand/10 bg-white py-6">
      <div className="flex whitespace-nowrap marquee-track gap-14">
        {list.map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 text-sm font-medium text-foreground/80"
          >
            <HeartPulse className="w-4 h-4 text-terracotta" strokeWidth={1.6} />
            {it}
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          </span>
        ))}
      </div>
    </div>
  );
};

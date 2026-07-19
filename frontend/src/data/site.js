export const NAV = [
  { label: "About", href: "/about", type: "route" },
  { label: "Services", href: "/services", type: "route" },
  { label: "Doctors", href: "/doctors", type: "route" },
  { label: "Gallery", href: "/gallery", type: "route" },
  { label: "Journal", href: "/blog", type: "route" },
  { label: "Contact", href: "/#contact", type: "hash" },
];

export const HOSPITAL = {
  name: "Samarpan Hospital",
  tagline: "Compassionate care. Advanced medicine.",
  address:
    "CP 02, Pushkar Rd, near City Pride Garden, HUD Nagar Extension, Haribhau Upadhyay Nagar Extension, Ajmer, Rajasthan 305001",
  phone: "+91 90572 74807",
  phoneAlt: "+91 63760 12431",
  phones: ["+91 90572 74807", "+91 63760 12431"],
  emergency: "+91 90572 74807",
  email: "hello@samarpanhospital.in",
  opd: "OPD: 10:00 AM – 2:00 PM & 6:00 PM – 8:00 PM",
  hours: "OPD: 10:00 AM – 2:00 PM & 6:00 PM – 8:00 PM · Emergency: Open 24×7",
};

export const SERVICES = [
  {
    key: "neuro",
    title: "Neuro & Spine Centre",
    tag: "Brain & Spine",
    body: "Advanced treatment for brain, spine, stroke, slipped disc and neurological disorders by experienced specialists.",
    icon: "Brain",
  },
  {
    key: "trauma",
    title: "24×7 Trauma Centre",
    tag: "Emergency · 24×7",
    body: "Rapid emergency care for road accidents, fractures, head injuries and critical trauma.",
    icon: "Siren",
  },
  {
    key: "ortho",
    title: "Orthopaedics",
    tag: "Bone & Joint",
    body: "Expert care for fractures, joint replacement, sports injuries and bone disorders.",
    icon: "Bone",
  },
  {
    key: "medicine",
    title: "General Medicine",
    tag: "Internal Medicine",
    body: "Comprehensive diagnosis and treatment for fever, diabetes, hypertension and chronic illnesses.",
    icon: "Stethoscope",
  },
  {
    key: "ent",
    title: "ENT",
    tag: "Ear · Nose · Throat",
    body: "Specialized treatment for ear, nose, throat, sinus and hearing disorders.",
    icon: "Ear",
  },
  {
    key: "surgery",
    title: "General Surgery",
    tag: "Laparoscopic Surgery",
    body: "Advanced laparoscopic and surgical care with faster recovery and minimal discomfort.",
    icon: "Scissors",
  },
  {
    key: "icu",
    title: "Critical Care",
    tag: "ICU · 24×7",
    body: "24×7 intensive care for critically ill patients with continuous specialist monitoring.",
    icon: "Activity",
  },
  {
    key: "gynae",
    title: "Gynecology & Obstetrics",
    tag: "Women's Health",
    body: "Expert care for pregnancy, childbirth, infertility, women's wellness and advanced gynecological procedures.",
    icon: "Flower2",
  },
];

export const STATS = [
  { value: "24×7", label: "Emergency & Trauma Care" },
  { value: "30+", label: "Healthcare Professionals" },
  { value: "1000+", label: "Successful Surgeries" },
  { value: "98.4%", label: "Patient Satisfaction" },
];

export const DOCTORS = [
  {
    name: "Dr. Sarvan Yadav",
    speciality: "Critical Care",
    qualification: "MBBS, Specialization in Critical Care",
    quote: "The heart heals faster when the human behind it is heard.",
    years: "5+ yrs",
    image:
      "/ChatGPT Image Jul 19, 2026, 11_01_42 PM.png",
  },
  {
    name: "Dr. Praveen Kumar Gupta",
    speciality: "Neuro & Spine Surgeon",
    qualification: "MBBS, MS, MCH",
    quote: "Every minute matters — so does every question you have.",
    years: "9+ yrs",
    image:
      "/ChatGPT Image Jul 19, 2026, 11_05_51 PM.png",
  },
  {
    name: "Dr. Priya Sethi",
    speciality: "Obstetrics & Fetal Medicine",
    quote: "We tend to two lives — with equal tenderness for both.",
    years: "15 yrs",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=940&q=80",
  },
  {
    name: "Dr. Rohan Kulkarni",
    speciality: "Orthopedic Surgery",
    quote: "Recovery is a craft. We rebuild movement, one honest step at a time.",
    years: "16 yrs",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=940&q=80",
  },
];

export const DEPARTMENTS = [
  "All",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Oncology",
  "Pediatrics",
  "Women's Health",
];

export const DOCTORS_ALL = [
  {
    name: "Dr. Sarvan Yadav",
    department: "Critical Care",
    speciality: "Critical Care",
    years: "5+ yrs",
    degrees: "MBBS, Specialization in Critical Care",
    languages: "English · Hindi · Marathi",
    image:
      "/ChatGPT Image Jul 19, 2026, 11_01_42 PM.png",
  },
  {
    name: "Dr. Kabir Deshpande",
    department: "Cardiology",
    speciality: "Cardiac Electrophysiology",
    years: "14 yrs",
    degrees: "MBBS, MD, DNB (Cardiology)",
    languages: "English · Hindi",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=940&q=80",
  },
  {
    name: "Dr. Praveen Kumar Gupta",
    department: "Neurology",
    speciality: "Neuro & Spine Surgeon",
    years: "9+ yrs",
    degrees: "MBBS, MS, MCH",
    languages: "English · Hindi · Malayalam",
    image:
      "/ChatGPT Image Jul 19, 2026, 11_05_51 PM.png",
  },
  {
    name: "Dr. Neha Iyer",
    department: "Neurology",
    speciality: "Epilepsy & Neuro-imaging",
    years: "12 yrs",
    degrees: "MBBS, MD, DM (Neurology)",
    languages: "English · Hindi · Tamil",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=940&q=80",
  },
  {
    name: "Dr. Rohan Kulkarni",
    department: "Orthopedics",
    speciality: "Orthopedic & Robotic Joint Surgery",
    years: "16 yrs",
    degrees: "MBBS, MS (Ortho), Fellowship (Joint Replacement)",
    languages: "English · Hindi · Marathi",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=940&q=80",
  },
  {
    name: "Dr. Arjun Nair",
    department: "Orthopedics",
    speciality: "Sports Medicine & Arthroscopy",
    years: "11 yrs",
    degrees: "MBBS, DNB (Ortho)",
    languages: "English · Hindi",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=940&q=80",
  },
  {
    name: "Dr. Meera Joshi",
    department: "Oncology",
    speciality: "Medical Oncology",
    years: "17 yrs",
    degrees: "MBBS, MD, DM (Medical Oncology)",
    languages: "English · Hindi · Marathi",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=940&q=80",
  },
  {
    name: "Dr. Priya Sethi",
    department: "Women's Health",
    speciality: "Obstetrics & Fetal Medicine",
    years: "15 yrs",
    degrees: "MBBS, MS (OBG), Fellowship (Fetal Medicine)",
    languages: "English · Hindi · Punjabi",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=940&q=80",
  },
  {
    name: "Dr. Sana Qureshi",
    department: "Pediatrics",
    speciality: "Neonatology & NICU",
    years: "13 yrs",
    degrees: "MBBS, MD (Paediatrics), Fellowship (Neonatology)",
    languages: "English · Hindi · Urdu",
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=940&q=80",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The hospital provides excellent medical services with supportive and well-trained staff. Doctors are knowledgeable, polite, and explain everything clearly. Cleanliness and hygiene are well maintained, and patient care is given top priority. Overall, a very reliable hospital.",
    name: "Nandani NT",
    context: "Google Review · Edited 7 months ago",
  },
  {
    quote:
      "Samarpan Hospital is the best hospital for trauma care in Ajmer. Dr. Praveen Gupta is a very humble and talented doctor for brain and spine problems — I personally recommend him.",
    name: "Shushant Ekta",
    context: "Google Review · Trauma & Neuro Care",
  },
  {
    quote:
      "Best multispeciality hospital in Ajmer — providing top-notch care and services with the best experienced doctors and staff. Recently visited and consulted the doctors; they guided me through the best ways and I was treated so well. Worth visiting!",
    name: "Renu Yadav",
    context: "Google Review · ⭐️⭐️⭐️⭐️⭐️",
  },
];

export const BLOG = [
  {
    slug: "seven-habits-that-protect-your-heart",
    title: "Seven small habits that quietly protect your heart",
    tag: "Cardiology",
    date: "12 Nov 2025",
    read: "6 min",
    author: "Dr. Ananya Rao",
    authorRole: "Interventional Cardiology",
    excerpt:
      "The biggest wins in heart health rarely come from dramatic changes. They come from small, repeatable habits — practised on the days you don't feel like it.",
    image:
      "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwbmF0dXJlfGVufDB8fHx8MTc4MzE4ODg5M3ww&ixlib=rb-4.1.0&q=85",
    content: [
      {
        heading: "Heart health is a rhythm, not a rescue",
        body: "Most people meet their cardiologist during a crisis. But the heart is a patient organ — it responds far more to what you do on ordinary Tuesdays than to any single heroic effort. At Samarpan, the cases with the best long-term outcomes almost always share the same quiet foundation: consistency.",
      },
      {
        heading: "1. Walk before you scroll",
        body: "A brisk 20-minute walk within an hour of waking sets your blood pressure and mood for the whole day. It doesn't need to be a workout — it needs to be a habit your body can rely on.",
      },
      {
        heading: "2. Salt is a whisper, not a shout",
        body: "Most excess sodium hides in packaged food, not the salt shaker. Reading one label a day slowly retrains your palate — and within weeks, food that once tasted normal will taste over-salted.",
      },
      {
        heading: "3. Sleep is cardiac medicine",
        body: "Blood pressure is meant to dip at night. Broken sleep removes that recovery window. Protecting a consistent 7-hour sleep block is one of the most under-rated interventions in cardiology.",
      },
      {
        heading: "4. Know your numbers by name",
        body: "Blood pressure, LDL cholesterol, fasting sugar and waist circumference. Four numbers. Knowing them turns anxiety into a plan — and a plan is always calmer than a fear.",
      },
      {
        heading: "When to see us",
        body: "Chest heaviness on exertion, breathlessness climbing familiar stairs, or a fluttering heartbeat that lingers — these are conversations worth having early. Our cardiology team keeps same-week slots for exactly these worries.",
      },
    ],
  },
  {
    slug: "when-a-headache-is-more-than-a-headache",
    title: "When a headache is more than a headache — a neurologist explains",
    tag: "Neurology",
    date: "28 Oct 2025",
    read: "4 min",
    author: "Dr. Vikram Menon",
    authorRole: "Neurology & Stroke Care",
    excerpt:
      "Nearly everyone gets headaches. The art is knowing which ones deserve a phone call — and which ones deserve an ambulance.",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=940&q=80",
    content: [
      {
        heading: "Most headaches are honest",
        body: "The vast majority of headaches — tension, dehydration, screen strain, a skipped meal — are uncomfortable but benign. They resolve with rest, water and time. Understanding this baseline is what makes the exceptions easier to spot.",
      },
      {
        heading: "The headaches that change the rules",
        body: "A 'thunderclap' headache that peaks within seconds. A headache with weakness, slurred speech or a drooping face. The worst headache of your life, arriving out of nowhere. These are not wait-and-watch symptoms — they are reasons to call our emergency line immediately.",
      },
      {
        heading: "The golden hour is real",
        body: "In stroke, time is brain tissue. Our stroke-ready ER is built to move a patient from door to scan to treatment within minutes, because every delay narrows the window in which recovery is possible.",
      },
      {
        heading: "Keep a simple headache diary",
        body: "Note when headaches arrive, what preceded them, and what helped. Two weeks of notes tells a neurologist more than an hour of guessing — and often reveals a trigger you can simply remove.",
      },
    ],
  },
  {
    slug: "the-quiet-science-of-a-good-nights-sleep",
    title: "The quiet science of a good night's sleep",
    tag: "Wellness",
    date: "04 Oct 2025",
    read: "5 min",
    author: "Dr. Priya Sethi",
    authorRole: "Preventive & Wellness Medicine",
    excerpt:
      "Sleep is not the absence of activity. It is one of the most active, restorative processes your body performs — and most of us treat it as optional.",
    image:
      "https://images.unsplash.com/photo-1520206183501-b80df61043c2?auto=format&fit=crop&w=940&q=80",
    content: [
      {
        heading: "What actually happens when you sleep",
        body: "Overnight, your brain clears metabolic waste, consolidates memory, and rebalances the hormones that govern hunger and stress. Poor sleep doesn't just make you tired — it quietly raises blood sugar, blood pressure and appetite the very next day.",
      },
      {
        heading: "Light is the master switch",
        body: "Your body clock takes its cues from light. Morning sunlight anchors your rhythm; late-night screens confuse it. A dim hour before bed does more for sleep than any supplement.",
      },
      {
        heading: "The 3-2-1 wind-down",
        body: "No heavy food three hours before bed, no work two hours before, no screens one hour before. It sounds strict, but it hands your nervous system the runway it needs to actually land.",
      },
      {
        heading: "When to seek help",
        body: "Loud snoring with gasping, waking unrefreshed despite enough hours, or persistent insomnia beyond a few weeks deserve evaluation. Our sleep clinic can distinguish a habit problem from a medical one — and the difference matters.",
      },
    ],
  },
];

export const ACCREDITATIONS = [
  "NABH Accredited Hospital",
  "Advanced Modular Operation Theatres",
  "24×7 Emergency & Trauma Centre",
  "Dedicated Neuro & Spine Centre",
  "Advanced Critical Care ICU",
  "Orthopaedic & Fracture Care",
  "Stroke & Head Injury Management",
];

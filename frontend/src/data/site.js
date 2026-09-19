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
    timing: "09:00 AM – 11:00 AM; 06:00 PM – 08:00 PM",
    image:
      "/ChatGPT Image Jul 19, 2026, 11_01_42 PM.png",
  },
  {
    name: "Dr. Praveen Kumar Gupta",
    speciality: "Neuro & Spine Surgeon",
    qualification: "MBBS, MS, MCH",
    quote: "Every minute matters — so does every question you have.",
    years: "9+ yrs",
    honor: "Gold Medalist",
    timing: "10:00 AM – 01:00 PM; 05:00 PM – 07:00 PM",
    image:
      "/ChatGPT Image Jul 19, 2026, 11_05_51 PM.png",
  },
  {
    name: "Dr Vijay Lakshmi",
    speciality: "General Physician",
    qualification: "MBBS, MS, MD",
    quote: "Thoughtful care and clear guidance help patients feel safe and heard.",
    years: "3 yrs",
    honor: "Gold Medalist",
    timing: "09:30 AM – 12:30 PM; 06:30 PM – 08:00 PM",
    image: "/ChatGPT Image Aug 4, 2026, 10_30_59 PM.png",
  },
  {
    name: "Dr. Shardul Singh",
    speciality: "ENT Specialist",
    qualification: "MBBS, MS",
    quote: "Clear hearing and breathing care can transform everyday life.",
    years: "9+ yrs",
    timing: "09:00 AM – 11:00 AM; 06:00 PM – 08:00 PM",
    image: "/galary/ChatGPT Image Sep 18, 2026, 11_42_44 PM.png",
  },
  {
    name: "Dr. Sharat Mathur",
    speciality: "General Surgeon",
    qualification: "MBBS, MS",
    quote: "Careful surgical planning leads to better outcomes and faster recovery.",
    years: "12+ yrs",
    timing: "11:00 AM – 02:00 PM; 04:00 PM – 06:00 PM",
    image: "/galary/ChatGPT Image Sep 18, 2026, 10_59_45 PM.png",
  },
  {
    name: "Dr. Pradeep Kumawat",
    speciality: "Orthopedic Surgeon",
    qualification: "MBBS, MS Orthopaedics, Gold Medalist",
    quote: "Trauma care and joint restoration require precision, patience, and trust.",
    years: "10+ yrs",
    honor: "Gold Medalist",
    timing: "10:00 AM – 01:00 PM; 05:00 PM – 07:00 PM",
    focus: "Trauma Specialist · Ligament Tear Care · Ilizarov",
    image: "/galary/ChatGPT Image Sep 18, 2026, 11_39_45 PM.png",
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
    title: "Best Neurosurgeon in Ajmer? Meet Dr. Praveen Kumar Gupta – Expert Neuro & Spine Surgeon at Samarpan Hospital",
    metaTitle: "Best Neurosurgeon in Ajmer | Dr. Praveen Kumar Gupta | Samarpan Hospital",
    metaDescription:
      "Looking for the best neurosurgeon in Ajmer? Meet Dr. Praveen Kumar Gupta, Neuro & Spine Surgeon at Samarpan Hospital for brain surgery, spine surgery, stroke, trauma and advanced neurosurgical care.",
    tag: "Neurology",
    date: "20 Jul 2026",
    read: "8 min",
    author: "Dr. Praveen Kumar Gupta",
    authorRole: "Neuro & Spine Surgeon",
    excerpt:
      "If you are searching for the best neurosurgeon in Ajmer, you are likely looking for more than just qualifications. You want experience, precision and a doctor you can trust when it matters most.",
    image:
      "/galary/IMG_4429 blog.PNG",
    content: [
      {
        heading: "Looking for the Best Neurosurgeon in Ajmer? Meet Dr. Praveen Kumar Gupta",
        body: "Dr. Praveen Kumar Gupta (MBBS, MS, M.Ch Neurosurgery) is a Neuro and Spine Surgeon at Samarpan Neuro Spine and Multispeciality Hospital, Ajmer, with experience in advanced brain and spine surgery. He is known for treating complex neurological conditions including brain tumors, spinal disorders, stroke, traumatic brain injuries and minimally invasive spine conditions. Public profiles list his experience in brain trauma surgery, complex brain and spine surgery, vascular compression syndromes and epilepsy surgery.",
      },
      {
        heading: "Why patients choose Dr. Praveen Kumar Gupta",
        body: "When facing a neurological condition, patients often look for a surgeon with specialized training, modern surgical techniques and access to emergency care. At Samarpan Neuro Spine and Multispeciality Hospital, Dr. Praveen Kumar Gupta works alongside a multidisciplinary team in a hospital that provides 24x7 emergency services, trauma care, ICU support and modular operation theatres, enabling comprehensive care for neuro and spine patients.",
      },
      {
        heading: "Conditions treated",
        body: "Patients from Ajmer and nearby areas commonly consult for brain tumors, slip disc, sciatica, cervical spondylosis, brain stroke, head injury, brain hemorrhage, spinal cord injury, neck pain, chronic back pain, hydrocephalus, trigeminal neuralgia, epilepsy, brain trauma and spine trauma.",
      },
      {
        heading: "Advanced Neuro and Spine treatments in Ajmer",
        body: "Dr. Praveen Kumar Gupta provides evaluation and surgical management for a wide range of neurological and spinal conditions, including microscopic brain surgery, endoscopic spine surgery, brain tumor surgery, spine surgery, neuro trauma surgery, stroke evaluation, spinal decompression surgery and complex brain and spine surgery. His publicly listed areas of expertise include brain trauma surgery, brain tumor surgery, complex brain and spine surgery, craniovertebral junction disorders and epilepsy surgery.",
      },
      {
        heading: "When should you visit a neurosurgeon?",
        body: "You should seek a neurosurgical consultation if you experience persistent neck or back pain, weakness in the arms or legs, numbness or tingling, difficulty walking, sudden severe headache, frequent seizures, slip disc symptoms, head injury after an accident, loss of balance or brain tumor symptoms. If symptoms suggest a stroke or severe head injury, seek emergency care immediately.",
      },
      {
        heading: "Why choose Samarpan Hospital for Neuro and Spine care in Ajmer?",
        body: "Patients searching for the best neuro hospital in Ajmer often look for more than a doctor. They want a hospital equipped to manage emergencies and complex surgeries. Samarpan Hospital offers 24x7 emergency and trauma care, neuro and spine surgery, modular operation theatres, ICU and critical care, brain microscope technology, endoscopic spine surgery instruments, ambulance services, orthopaedics and joint replacement, general surgery, ENT, gynecology, and in-house pharmacy and laboratory. The hospital operates 24 hours a day and has strong patient ratings on local business platforms.",
      },
      {
        heading: "Frequently asked questions",
        body: "Who is a leading Neuro and Spine Surgeon in Ajmer? Dr. Praveen Kumar Gupta is an M.Ch-qualified Neuro and Spine Surgeon practicing at Samarpan Hospital, Ajmer, with expertise in brain trauma, brain tumors, complex brain and spine surgery and related neurosurgical conditions. Does Dr. Praveen Kumar Gupta treat slip disc? Yes, he evaluates and manages spinal disorders including slip disc and other conditions affecting the spine, depending on the patient's diagnosis. Does Samarpan Hospital provide emergency treatment for head injuries? Yes, Samarpan Hospital provides 24x7 emergency and trauma care, including treatment pathways for neurological emergencies.",
      },
    ],
  },
  {
    slug: "when-a-headache-is-more-than-a-headache",
    title:
      "Best Trauma Centre in Ajmer: Why Patients Choose Samarpan Neuro Spine & Multispeciality Hospital",
    metaTitle:
      "Best Trauma Centre in Ajmer | 24×7 Emergency & Accident Care | Samarpan Hospital",
    metaDescription:
      "Looking for the best Trauma Centre in Ajmer? Samarpan Neuro Spine & Multispeciality Hospital provides 24×7 emergency care, accident treatment, head injury management, fracture care and trauma surgery.",
    tag: "Trauma Care",
    date: "04 Aug 2026",
    read: "6 min",
    author: "Hyperlane.in",
    authorRole: "Content Team",
    excerpt:
      "When a medical emergency or road accident happens, every minute matters. Choosing the right hospital can make all the difference.",
    image:
      "/galary/IMG_4430 blog1.PNG",
    content: [
      {
        heading: "Looking for the Best Trauma Centre in Ajmer?",
        body: "When a medical emergency or road accident happens, every minute matters. Choosing the right hospital can make all the difference. Samarpan Neuro Spine & Multispeciality Hospital has become a trusted destination for patients seeking 24×7 emergency and trauma care in Ajmer. With a dedicated trauma team, emergency services, ICU support, modular operation theatres and advanced neuro-spine expertise, the hospital is equipped to manage serious injuries and critical emergencies. The hospital is open 24×7 and receives strong patient ratings on local platforms.",
      },
      {
        heading: "Why Many Patients Choose Samarpan Hospital",
        body: "Trauma care is not just about emergency treatment. It is about having the right specialists, surgical facilities and critical care available without delay. At Samarpan Hospital, patients have access to 24×7 emergency and trauma services, neuro and spine surgery, orthopaedic and fracture care, general surgery, critical care ICU, modular operation theatres, ambulance support, advanced brain microscope technology and endoscopic spine surgery equipment. These services allow the hospital to manage a wide range of accident-related and emergency conditions.",
      },
      {
        heading: "Trauma Emergencies We Treat",
        body: "Samarpan Hospital provides emergency evaluation and treatment for road traffic accidents, head injuries, brain trauma, spine injuries, multiple fractures, bone and joint injuries, sports injuries, neck injuries, pelvic injuries, soft tissue trauma, internal injuries and emergency general surgery cases.",
      },
      {
        heading: "Advanced Neuro Trauma Care in Ajmer",
        body: "One of the biggest strengths of Samarpan Hospital is its neuro and spine department. Patients with severe head injuries, brain trauma, spinal cord injuries or neurological emergencies benefit from coordinated care involving neurosurgery, trauma management and critical care under one roof. This integrated approach is especially important during the golden hour, when rapid assessment and timely intervention can influence recovery.",
      },
      {
        heading: "24×7 Emergency Hospital in Ajmer",
        body: "Medical emergencies do not wait. That is why Samarpan Hospital provides round-the-clock emergency services for patients requiring immediate medical attention, including road accidents, head injuries, stroke symptoms, severe back and spine injuries, multiple fractures, emergency surgery and critical illness. The hospital operates 24 hours a day and provides emergency hospital services in Ajmer.",
      },
      {
        heading: "Modern Trauma Infrastructure",
        body: "To support emergency and trauma care, Samarpan Hospital offers modular operation theatres, ICU and critical care, advanced brain microscope technology, endoscopic spine surgery instruments, ambulance services, in-house pharmacy, diagnostic support and an experienced emergency team.",
      },
      {
        heading: "Why Early Trauma Care Saves Lives",
        body: "Many serious injuries may not show obvious symptoms immediately. Immediate medical attention is essential if someone experiences loss of consciousness, severe bleeding, head injury, difficulty moving arms or legs, severe neck pain, chest injury, difficulty breathing, suspected spinal injury or multiple fractures. Prompt evaluation helps doctors identify life-threatening injuries and begin appropriate treatment as quickly as possible.",
      },
      {
        heading: "Why Choose Samarpan Hospital for Trauma Care?",
        body: "Patients across Ajmer trust Samarpan Hospital because it combines emergency care with specialist treatment. The hospital offers 24×7 emergency services, dedicated trauma care, neuro and spine specialists, orthopaedic and fracture care, ICU and critical care, advanced surgical technology, patient-centred treatment and comprehensive multispeciality support.",
      },
      {
        heading: "Frequently Asked Questions",
        body: "",
      },
      {
        heading: "Which is a trusted trauma centre in Ajmer?",
        body: "Samarpan Neuro Spine & Multispeciality Hospital provides 24×7 emergency and trauma services, including care for road accidents, fractures, head injuries and critical emergencies.",
      },
      {
        heading: "Does Samarpan Hospital provide 24×7 emergency services?",
        body: "Yes. The hospital operates 24 hours a day and offers emergency and trauma care.",
      },
      {
        heading: "Can Samarpan Hospital treat head injuries and spine trauma?",
        body: "Yes. The hospital has dedicated neuro and spine services along with emergency, trauma and critical care facilities for neurological and spinal injuries.",
      },
    ],
  },
  {
    slug: "the-quiet-science-of-a-good-nights-sleep",
    title: "Best Hospital in Ajmer: Why Families Trust Samarpan Neuro Spine & Multispeciality Hospital",
    metaTitle:
      "Best Hospital in Ajmer | Best Multi Speciality Hospital in Ajmer | Samarpan Hospital",
    metaDescription:
      "Looking for the best hospital in Ajmer? Samarpan Neuro Spine & Multispeciality Hospital offers Neuro & Spine Surgery, Trauma Care, Orthopaedics, General Surgery, ENT, Gynecology and 24×7 Emergency Services.",
    tag: "Hospital Care",
    date: "04 Aug 2026",
    read: "7 min",
    author: "Hyperlane.in",
    authorRole: "Content Team",
    excerpt:
      "Finding the right hospital is one of the most important healthcare decisions for you and your family.",
    image:
      "/galary/IMG_4431 blog2.PNG",
    content: [
      {
        heading: "Looking for the Best Hospital in Ajmer? Welcome to Samarpan Neuro Spine & Multispeciality Hospital",
        body: "Finding the right hospital is one of the most important healthcare decisions for you and your family. Whether it's an emergency, advanced surgery or routine consultation, patients often search for the best hospital in Ajmer that combines experienced doctors, modern technology and compassionate care. Samarpan Neuro Spine & Multispeciality Hospital is a trusted multi speciality hospital in Ajmer offering expert care across Neuro & Spine Surgery, Trauma & Emergency Care, Orthopaedics, General Surgery, ENT, Gynecology, Critical Care and more. The hospital operates 24×7 and serves patients from Ajmer, Pushkar, Beawar, Kishangarh, Nasirabad and nearby areas.",
      },
      {
        heading: "Why Patients Searching for the Best Hospital in Ajmer Choose Samarpan Hospital",
        body: "Healthcare is about more than treatment—it is about timely diagnosis, experienced specialists and comprehensive care under one roof. At Samarpan Hospital, patients benefit from 24×7 Emergency & Trauma Services, Advanced Neuro & Spine Surgery, Orthopaedic & Joint Replacement Care, General Surgery, ENT Services, Gynecology & Women's Health, Critical Care ICU, Modular Operation Theatres, Advanced Diagnostic Support, In-house Pharmacy and Ambulance Services.",
      },
      {
        heading: "Best Multi Speciality Hospital in Ajmer for Comprehensive Healthcare",
        body: "Unlike hospitals that focus on a single department, Samarpan Hospital brings multiple specialties together so patients can receive coordinated treatment from experienced doctors without visiting different hospitals. Our major specialties include Neuro & Spine Surgery, Trauma & Emergency Care, Orthopaedics, Joint Replacement Surgery, General Surgery, ENT, Gynecology, Critical Care, General Medicine and Urology.",
      },
      {
        heading: "Advanced Neuro & Spine Care in Ajmer",
        body: "Samarpan Hospital is recognized for its strong focus on Neuro & Spine care. Patients with conditions such as Brain Tumors, Stroke, Head Injury, Slip Disc, Sciatica, Cervical Spondylosis, Spine Trauma and Brain Hemorrhage can receive specialist evaluation and treatment from the Neuro & Spine team using advanced surgical techniques and dedicated equipment.",
      },
      {
        heading: "24×7 Emergency & Trauma Care",
        body: "Medical emergencies require immediate attention. Samarpan Hospital provides round-the-clock emergency services for Road Accidents, Head Injuries, Spine Injuries, Fractures, Severe Pain, Stroke Symptoms, Emergency General Surgery and Critical Medical Emergencies. The hospital is open 24 hours a day and offers emergency services for patients requiring urgent medical attention.",
      },
      {
        heading: "Modern Infrastructure for Better Patient Care",
        body: "Quality healthcare depends on both skilled doctors and the right infrastructure. Samarpan Hospital offers Modular Operation Theatres, ICU & Critical Care, Brain Microscope Technology, Endoscopic Spine Surgery Instruments, Advanced Patient Monitoring, Ambulance Support, In-house Pharmacy and Diagnostic Services. Patients visiting Samarpan Hospital receive care from specialists across multiple departments, ensuring faster diagnosis, coordinated treatment plans and comprehensive medical care without unnecessary referrals.",
      },
      {
        heading: "Serving Patients Beyond Ajmer",
        body: "Samarpan Hospital proudly serves patients from Ajmer, Pushkar, Beawar, Kishangarh, Nasirabad, Kekri, Bhilwara, Nagaur, Pali and Jaipur for selected referrals. Many families choose the hospital for advanced neuro, spine and trauma care close to home.",
      },
      {
        heading: "Why Choose Samarpan Hospital?",
        body: "Trusted Multi Speciality Hospital in Ajmer, 24×7 Emergency & Trauma Care, Advanced Neuro & Spine Surgery, Orthopaedic & Joint Replacement Care, Modular Operation Theatres, ICU & Critical Care, Experienced Specialist Doctors, Modern Medical Technology and Patient-Centred Treatment.",
      },
      {
        heading: "Which is a trusted multi speciality hospital in Ajmer?",
        body: "Samarpan Neuro Spine & Multispeciality Hospital provides multi speciality services including Neuro & Spine Surgery, Orthopaedics, Trauma Care, General Surgery, ENT and Gynecology with 24×7 emergency support.",
      },
      {
        heading: "Does Samarpan Hospital provide 24×7 emergency services?",
        body: "Yes. Samarpan Hospital operates 24 hours a day and provides emergency and trauma care for accidents and critical medical conditions.",
      },
      {
        heading: "What specialties are available at Samarpan Hospital?",
        body: "The hospital provides Neuro & Spine Surgery, Trauma Care, Orthopaedics, General Surgery, ENT, Gynecology, General Medicine, Critical Care and Urology.",
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

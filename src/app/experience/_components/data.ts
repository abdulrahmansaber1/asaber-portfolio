export interface ExperienceItem {
  id: string
  role: string
  roleAr: string
  company: string
  companyAr: string
  period: string
  periodAr: string
  location: string
  locationAr: string
  type: string
  typeAr: string
  isCurrent?: boolean
  description: string
  descriptionAr: string
  highlights: string[]
  highlightsAr: string[]
  skills: string[]
  accent: {
    badge: string
    glow: string
    border: string
    dot: string
  }
}

export const experiences: ExperienceItem[] = [
  {
    id: "corevine",
    role: "Software Engineer",
    roleAr: "مهندس برمجيات",
    company: "CoreVine",
    companyAr: "كورفاين (CoreVine)",
    period: "Nov 2024 – Nov 2025",
    periodAr: "نوفمبر 2024 – نوفمبر 2025",
    location: "Remote",
    locationAr: "عن بُعد",
    type: "Full-Time",
    typeAr: "دوام كامل",
    isCurrent: false,
    description:
      "Leading full-stack development initiatives, building high-performance web applications, architecting robust backend APIs, and crafting intuitive, responsive user experiences.",
    descriptionAr:
      "قيادة مبادرات التطوير الشامل (Full Stack)، وتطوير تطبيقات ويب عالية الأداء، وهندسة واجهات برمجية (APIs) قوية للباك إند وبناء واجهات مستخدم سريعة وسلسة.",
    highlights: [
      "Engineered secure, scalable RESTful APIs with Laravel (PHP) handling core business workflows and data transactions.",
      "Developed high-speed, server-rendered and static front-end applications utilizing Next.js (React) and TypeScript.",
      "Collaborated with cross-functional product and design teams to translate complex requirements into clean production code.",
      "Optimized database schemas and SQL queries in MySQL for maximum throughput and sub-second response times."
    ],
    highlightsAr: [
      "هندسة واجهات برمجية RESTful آمنة وقابلة للتوسع باستخدام Laravel (PHP) لمعالجة البيانات وتدفقات الأعمال الحيوية.",
      "بناء واجهات أمامية تفاعلية وسريعة للغاية باستخدام Next.js (React) و TypeScript.",
      "التعاون الفعّال مع فرق التصميم والمنتج لتحويل المتطلبات المعقدة إلى كود برمجي نظيف ومستقر.",
      "تحسين هياكل قواعد البيانات واستعلامات SQL في MySQL لتحقيق سرعة استجابة فائقة."
    ],
    skills: ["Laravel", "PHP", "Next.js", "React.js", "TypeScript", "MySQL", "TailwindCSS", "REST APIs"],
    accent: {
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
      glow: "from-emerald-500/10 to-teal-500/5",
      border: "hover:border-emerald-500/30",
      dot: "bg-emerald-400"
    }
  },
  {
    id: "freelance",
    role: "Full Stack Web Developer",
    roleAr: "مطور ويب شامل (Full Stack)",
    company: "Freelance",
    companyAr: "عمل حر (Freelance)",
    period: "2024 – Present",
    periodAr: "2024 – الآن",
    location: "Global / Remote",
    locationAr: "عالمي / عن بُعد",
    type: "Independent",
    typeAr: "مستقل",
    isCurrent: true,
    description:
      "Delivered customized digital solutions and production web platforms for diverse clients, spanning e-commerce, educational LMS portals, and bespoke management systems.",
    descriptionAr:
      "تقديم حلول رقمية مخصصة ومنصات ويب إنتاجية لعملاء متنوعين، شملت متاجر إلكترونية ومنصات تعليمية وأنظمة إدارة متقدمة.",
    highlights: [
      "Built complete end-to-end web applications from ground zero to deployment using Next.js, Node.js, and Laravel.",
      "Delivered complete e-commerce stores with payment gateways, cart flows, dynamic inventories, and administrative panels.",
      "Engineered responsive LMS course platforms with video delivery, quiz systems, and student progress tracking.",
      "Implemented SEO optimization and fast Core Web Vitals to elevate client visibility and organic search conversions."
    ],
    highlightsAr: [
      "تطوير وبناء تطبيقات ويب كاملة من الصفر حتى مرحلة الإطلاق باستخدام Next.js و Node.js و Laravel.",
      "إطلاق متاجر إلكترونية متكاملة مع بوابات دفع آمنة، وسلات تسوق، وإدارة مخزون، ولوحات تحكم إدارية.",
      "بناء منصات تعليمية تفاعلية تشمل استعراض الفيديوهات، والاختبارات، ومتابعة تقدم الطلاب.",
      "تطبيق أفضل معايير السيو (SEO) وسرعة التحميل العالية لرفع ترتيب وظهور مواقع العملاء في محركات البحث."
    ],
    skills: ["Next.js", "React.js", "Node.js", "Laravel", "PostgreSQL", "MongoDB", "Redux", "Docker"],
    accent: {
      badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/25",
      glow: "from-indigo-500/10 to-violet-500/5",
      border: "hover:border-indigo-500/30",
      dot: "bg-indigo-400"
    }
  },
  {
    id: "depi",
    role: "React Web Developer",
    roleAr: "مطور React متدرب",
    company: "DEPI",
    companyAr: "مبادرة رواد مصر الرقمية (DEPI)",
    period: "Jul 2023 – Dec 2023",
    periodAr: "يوليو 2023 – ديسمبر 2023",
    location: "Egypt",
    locationAr: "مصر",
    type: "Training",
    typeAr: "منحة تدريبية مكثفة",
    isCurrent: false,
    description:
      "Selected for an intensive technical training initiative backed by Egypt's Ministry of Communications and Information Technology (MCIT), focusing on modern web stacks.",
    descriptionAr:
      "تم اختياري في مبادرة تدريبية تقنية مكثفة مقدمة من وزارة الاتصالات وتكنولوجيا المعلومات المصرية، مع التركيز على أحدث تقنيات الويب الحديثة.",
    highlights: [
      "Mastered Single Page Application (SPA) development with React.js, component architecture, and modern state management.",
      "Built backend RESTful services and micro-APIs using Node.js and Express connected to MongoDB databases.",
      "Collaborated in agile team sprints to build, review, and ship functional web capstone projects.",
      "Applied robust software design patterns, Git workflow strategies, and modern responsive design principles."
    ],
    highlightsAr: [
      "إتقان بناء تطبيقات الصفحة الواحدة (SPAs) باستخدام React.js وهندسة المكونات وإدارة الحالة الحديثة.",
      "تطوير خدمات وواجهات برمجية RESTful باستخدام Node.js و Express متصلة بقواعد بيانات MongoDB.",
      "العمل ضمن فرق برمجية وفق منهجية Agile لتسليم مشاريع تخرج عملية متكاملة.",
      "تطبيق أنماط التصميم البرمجية المتقدمة، وإدارة النسخ باستخدام Git، والتصميم المتجاوب."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5/CSS3", "Git"],
    accent: {
      badge: "bg-amber-500/10 text-amber-400 border-amber-500/25",
      glow: "from-amber-500/10 to-orange-500/5",
      border: "hover:border-amber-500/30",
      dot: "bg-amber-400"
    }
  }
]

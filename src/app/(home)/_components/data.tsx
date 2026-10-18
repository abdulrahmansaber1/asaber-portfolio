import { links } from "@/lib"
import { Github, Linkedin } from "lucide-react"

export interface ServiceItem {
  arTitle: string
  enTitle: string
  arDescription: string
  enDescription: string
  skills: string[]
}

export const homePage = {
  title: "Hello, I'm Abdulrahman Saber",
  description:
    "An Experienced Full Stack Web Developer who embarked this journey 9 years ago. Learning many web technologies and frameworks, and building scalable web applications with high performance.",

  lastProject: {
    url: "https://ab2a-qalbne.vercel.app/",
    pcPicture: "/home/last-project-lg.png",
    mobilePicture: "/home/last-project-sm.png"
  },

  introLinks: [
    { icon: Github, title: "GitHub", href: links.github },
    { icon: Linkedin, title: "Linkedin", href: links.linkedin }
  ],

  services: [
    {
      arTitle: "تطوير المواقع",
      enTitle: "Web Development",
      arDescription:
        "تخصصي في إنشاء مواقع الويب الاستجابة وسهلة الاستخدام التي لا تعتمد فقط على الجاذبية البصرية ولكن أيضًا محسنة للأداء والاستخدام. تغطي خبرتي مجموعة واسعة من خدمات تطوير الويب.",
      enDescription:
        "I specialize in creating responsive, user-friendly websites that are not only visually appealing but also optimized for performance and usability. My expertise covers a wide range of web development services.",
      skills: ["React.js", "Next.js", "TypeScript", "TailwindCSS"]
    },
    {
      arTitle: "تصميم المواقع",
      enTitle: "Custom Website Design",
      arDescription:
        "أقوم ببناء مواقع ويب مصممة خصيصًا من البداية باستخدام أحدث التقنيات وأفضل الممارسات في الصناعة لتلبي احتياجاتك الخاصة بهوية بصرية مميزة.",
      enDescription:
        "I build tailor-made websites from scratch using the latest technologies and industry best practices to deliver unique solutions tailored to your brand.",
      skills: ["UI/UX Design", "Framer Motion", "Responsive Design", "Modern CSS"]
    },
    {
      arTitle: "تطوير متكامل لموقعك",
      enTitle: "Full-Stack Development",
      arDescription:
        "أقدم خدمات تطوير شاملة تشمل كلاً من الواجهة الأمامية والخلفية، مما يوفر تطبيق ويب متكامل وقابل للتوسع مع ربط قواعد البيانات.",
      enDescription:
        "I offer comprehensive development services that include both front-end and back-end, delivering a complete, robust, and cohesive web application.",
      skills: ["Laravel", "PHP", "Node.js", "MySQL", "PostgreSQL"]
    },
    {
      arTitle: "الديڤ أوبس والحوسبة السحابية",
      enTitle: "DevOps & Cloud Solutions",
      arDescription:
        "إدارة البنية السحابية على AWS، أتمتة النشر عبر خطوط CI/CD، وإدارة الحاويات باستخدام Docker و Kubernetes لضمان الأمان والتوسع السلس للأنظمة.",
      enDescription:
        "Cloud infrastructure deployment on AWS, automated CI/CD deployment pipelines, and container orchestration with Docker & Kubernetes for high availability and security.",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux", "Terraform"]
    },
    {
      arTitle: "واجهات برمجة التطبيقات",
      enTitle: "API Integration",
      arDescription:
        "من بوابات الدفع إلى الخدمات الخارجية، لدي خبرة في بناء ودمج واجهات برمجة التطبيقات المختلفة (REST & GraphQL) لتوسيع وظائف موقعك.",
      enDescription:
        "From payment gateways to third-party services, I have extensive experience building and integrating APIs (REST & GraphQL) to extend your website's capabilities.",
      skills: ["RESTful APIs", "GraphQL", "Webhooks", "Payment Gateways"]
    },
    {
      arTitle: "إدارة وهندسة قواعد البيانات",
      enTitle: "Database Architecture",
      arDescription:
        "تصميم وبناء قواعد بيانات علائقية وغير علائقية محسنة، مع كتابة استعلامات عالية السرعة واستراتيجيات تخزين مؤقت لتقليل زمن الاستجابة.",
      enDescription:
        "Designing scalable SQL and NoSQL database schemas, query optimization, and caching strategies (Redis) for optimal throughput and low latency.",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      arTitle: "تحسين محرك البحث",
      enTitle: "SEO Optimization",
      arDescription:
        "أدمج تقنيات تحسين محركات البحث (SEO) الفنية وعلى الصفحة لتحسين ظهور موقعك في نتائج البحث وجذب المزيد من الزوار المؤهلين.",
      enDescription:
        "I incorporate advanced technical and on-page SEO strategies to elevate your website's search engine visibility and attract organic visitors.",
      skills: ["Technical SEO", "Core Web Vitals", "Structured Data", "Lighthouse"]
    },
    {
      arTitle: "الصيانة والدعم الفني",
      enTitle: "Maintenance & Support",
      arDescription:
        "أقدم دعماً تقنياً مستمراً وتحديثات دورية للأمان والأداء لضمان بقاء موقعك مستقراً، آمناً، ومواكباً لأحدث التحديثات التقنية.",
      enDescription:
        "I provide ongoing support, security updates, and performance tuning to ensure your website remains reliable, secure, and technologically current.",
      skills: ["Security Audits", "Performance Tuning", "Bug Fixes", "24/7 Monitoring"]
    }
  ]
}

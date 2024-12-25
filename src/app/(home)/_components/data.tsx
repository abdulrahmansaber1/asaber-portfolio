import { links } from "@/lib"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

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
    { icon: GitHubLogoIcon, title: "GitHub", href: links.github },
    { icon: LinkedInLogoIcon, title: "Linkedin", href: links.linkedin }
  ],

  services: [
    {
      arTitle: "تطوير المواقع",
      enTitle: "Web Development",
      arDescription:
        "تخصصي في إنشاء مواقع الويب الاستجابة وسهلة الاستخدام التي لا تعتمد فقط على الجاذبية البصرية ولكن أيضًا محسنة للأداء والاستخدام. تغطي خبرتي مجموعة واسعة من خدمات تطوير الويب",
      enDescription:
        "I specialize in creating responsive, user-friendly websites that are not only visually appealing but also optimized for performance and usability. My expertise covers a wide range of web development services"
    },
    {
      arTitle: "تصميم المواقع",
      enTitle: "Custom Website Design",
      arDescription:
        "أقوم ببناء مواقع ويب مصممة خصيصًا من البداية باستخدام أحدث التقنيات وأفضل الممارسات في الصناعة. سواء كنت بحاجة إلى موقع ويب للشركات أو منصة تجارة إلكترونية أو محفظة شخصية ، أقدم حلولًا تلبي احتياجاتك الخاصة.",
      enDescription:
        "I build tailor-made websites from scratch using the latest technologies and industry best practices. Whether you need a corporate website, e-commerce platform, or a personal portfolio, I deliver solutions that fit your specific needs."
    },

    {
      arTitle: "تطوير متكامل لموقعك",
      enTitle: "Full-Stack Development",
      arDescription:
        "أقدم خدمات تطوير شاملة تشمل كلاً من الواجهة الأمامية والخلفية، مما يوفر تطبيق ويب كامل ومتكامل.",
      enDescription:
        "I offer comprehensive development services that include both front-end and back-end, delivering a complete and cohesive web application."
    },

    {
      arTitle: "تحسين محرك البحث",
      enTitle: "SEO Optimization",
      arDescription:
        "أدمج تقنيات تحسين محركات البحث (SEO) على الصفحة لتحسين رؤية موقعك في محركات البحث وجذب المزيد من الزوار.",
      enDescription:
        "I incorporate on-page SEO techniques to help improve your site's visibility in search engines and attract more visitors."
    },

    {
      arTitle: "واجهات برمجة التطبيقات",
      enTitle: "API Integration",
      arDescription:
        "من بوابات الدفع إلى الخدمات الخارجية، لدي خبرة في دمج واجهات برمجة التطبيقات المختلفة لتوسيع وظائف موقعك.",
      enDescription:
        "From payment gateways to third-party services, I have experience in integrating various APIs to extend the functionality of your website."
    },

    {
      arTitle: "الصيانة والدعم الفني",
      enTitle: "Maintenance and Support",
      arDescription:
        "أقدم دعماً مستمراً وتحديثات لضمان بقاء موقعك آمناً، وظيفياً، ومواكباً لأحدث التقنيات.",
      enDescription:
        "I provide ongoing support and updates to ensure your website remains secure, functional, and up-to-date with the latest technologies."
    }
  ]
}

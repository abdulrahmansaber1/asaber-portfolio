import { routes } from "@/lib"

export const frontEndProjects = [
  {
    title: "React Admin Dashboard",
    description:
      "E-Commerce dashboard with many features to build your pages easily, also it has two different themes ready to use!",
    github: "https://github.com/asaber3030/react-admin-dashboard",
    image: "/projects/front-end/06.png",
    tools: ["HTML", "Sass", "React", "MUI"]
  },
  {
    title: "Landing Page for Company",
    description: "Converting psd, A PhotoShop design to code using HTML, CSS, JavaScript",
    github: "https://github.com/asaber3030/company-react-landing-page",
    image: "/projects/front-end/07.png",
    tools: ["HTML", "SCSS", "React"]
  },
  {
    title: "Crypto world",
    description:
      "Simple landing page for crypto currencies with some information. This template may contains old data about currencies.",
    github: "https://github.com/asaber3030/crypto-world-website",
    image: "/projects/front-end/08.png",
    tools: ["HTML", "SCSS", "React"]
  },
  {
    github: "https://github.com/asaber3030/templates/tree/main/01-Done",
    title: "PSD To Template #1",
    description: "Converting psd, A photoshop design to code using HTML, CSS, JavaScript",
    image: "/projects/front-end/01.png",
    tools: ["HTML", "CSS", "Javascript", "JQuery"]
  },
  {
    title: "PSD To Template #2",
    description: "Converting psd, A photoshop design to code using HTML, CSS, JavaScript",
    github: "https://github.com/asaber3030/templates/tree/main/02-Done",
    image: "/projects/front-end/02.png",
    tools: ["HTML", "CSS", "Javascript", "JQuery"]
  },
  {
    title: "PSD To Template #3",
    description: "Converting psd, A photoshop design to code using HTML, CSS, JavaScript",
    github: "https://github.com/asaber3030/templates/tree/main/03-Done",
    image: "/projects/front-end/03.png",
    tools: ["HTML", "CSS", "Javascript", "JQuery"]
  },
  {
    title: "PSD To Template #4",
    description: "Converting psd, A photoshop design to code using HTML, CSS, JavaScript",
    github: "https://github.com/asaber3030/templates/tree/main/04-Done",
    image: "/projects/front-end/04.png",
    tools: ["HTML", "CSS", "Javascript", "JQuery"]
  },
  {
    title: "PSD To Template #5",
    description: "Converting psd, A photoshop design to code using HTML, CSS, JavaScript",
    github: "https://github.com/asaber3030/templates/tree/main/05-Done",
    image: "/projects/front-end/05.png",
    tools: ["HTML", "CSS", "Javascript", "JQuery"]
  }
]

export const backEndProjects = [
  {
    title: "Candle Store",
    shortBrief:
      "A store for selling candles and gifts for special occasions. You can order using the website the website will support online payments soon",
    description:
      "An e-commerce platform for a candle and gift store, designed to simplify the shopping experience for customers celebrating special occasions. The website allows users to browse a curated collection of candles and gifts, place orders, and view product details. While online payments will be supported soon, the platform is fully functional for order placement.",
    image: "/projects/back-end/candle-store.png",
    gif: "/projects/back-end/gifs/candle-store.gif",
    tools: ["NextJS", "Prisma", "Redux", "TailwindCss", "MySQL"],
    slug: "candle-store",
    viewUrl: routes.backendProject("candle-store"),
    keyFeatures: [
      "Browse curated candles and gifts",
      "Order placement functionality",
      "Product detail view",
      "Responsive design",
      "Future support for online payments"
    ]
  },
  {
    url: "https://ifoe-website.vercel.app/",
    title: "iFoe - Franchise Management System",
    shortBrief:
      "A system for managing franchises, including operations, resources, and performance tracking.",
    description:
      "iFoe is a comprehensive franchise management system designed to streamline operations across multiple franchise locations. It provides dashboards for individual franchises and central admin control, allowing for efficient resource allocation, performance monitoring, and employee management. The system is tailored to help franchise owners maintain consistency and optimize operations.",
    image: "/projects/back-end/ifoe.PNG",
    tools: ["Laravel", "NextJS", "TailwindCSS"],
    slug: "ifoe-franchise-management-system",
    viewUrl: routes.backendProject("ifoe-franchise-management-system"),
    keyFeatures: [
      "Centralized admin dashboard for managing all franchises",
      "Individual dashboards for each franchise location",
      "Resource allocation and performance tracking",
      "Employee and operations management tools",
      "Real-time analytics for decision-making"
    ]
  },
  {
    url: "https://techmed-project.vercel.app/administrators/login",
    title: "Hospital Mangament System",
    shortBrief:
      "A system for handling multiple hospitals with their resources, patients, employees, and medicine.",
    description:
      "This application has the ability to handle large hospitals with multiple resources, patients, employees, and medicine. It has a dashboard for each hospital to manage its resources and employees. Also, it has a dashboard for the admin to manage all hospitals and their resources. You can assign permissions to each employee and manage the medicine and patients.",
    image: "/projects/back-end/hospital.PNG",
    gif: "/projects/back-end/gifs/hospital-system.gif",
    tools: ["NextJS", "Prisma", "Redux", "TailwindCss", "MySQL", "Supabase"],
    slug: "hospital-mangament-system",
    viewUrl: routes.backendProject("hospital-mangament-system"),
    keyFeatures: [
      "Admin dashboard for centralized hospital management",
      "Individual hospital dashboards for resource tracking",
      "Permission-based employee management",
      "Medicine inventory and patient tracking",
      "Scalable design for large hospitals"
    ]
  },
  {
    title: "Interviewer App",
    shortBrief: "Interviewer app to manage interviews for companies",
    description:
      "This application is for managing interviews for companies, you can find your career and start studying for the exams outlines then start the exam.",
    github: "https://github.com/asaber3030/nextjs-interviewer-ui/",
    image: "/projects/back-end/interviewer.png",
    url: "https://interviewer-prep.vercel.app/",
    gif: "",
    tools: ["NextJS", "Redux", "TailwindCss", "MySQL"],
    slug: "interviewer-app",
    viewUrl: routes.backendProject("interviewer-app"),
    keyFeatures: [
      "Admin dashboard for hospital management",
      "Resource and medicine tracking",
      "Permission-based employee management",
      "Patient management",
      "Data visualization for resources"
    ]
  },

  {
    github: "https://github.com/asaber3030/nextjs-online-restaurant/",
    title: "Online Restaurant",
    shortBrief: "Online restaurant for ordering food.",
    description:
      "A full application with admin dashboard for managing orders, products, and users. Also, it has a user dashboard for ordering food and tracking orders.",
    image: "/projects/back-end/nextjs-online-restaurant.png",
    url: "https://ab2a-qalbne.vercel.app/",
    tools: ["NextJS", "TailwindCss", "AWS S3", "Prisma", "MySQL"],
    slug: "online-restaurant",
    viewUrl: routes.backendProject("online-restaurant"),
    keyFeatures: [
      "Admin dashboard for managing orders",
      "User dashboard for food ordering",
      "Order tracking",
      "Product and user management",
      "Integration with AWS S3 for storage"
    ]
  },
  {
    github: "https://github.com/asaber3030/nextjs-project-managment-app",
    title: "Platfrom",
    shortBrief: "Saas platform for managing projects, teams, and tasks.",
    description:
      "You can choose your plan and start managing your projects, teams, and tasks. Also, you can invite your team members to join your team.",
    image: "/projects/back-end/project-managment.png",
    tools: ["NextJS", "TailwindCss", "Stripe", "Prisma", "MySQL"],
    slug: "platfrom",
    viewUrl: routes.backendProject("platfrom"),
    keyFeatures: [
      "Project and task management",
      "Team collaboration features",
      "Subscription plans integration",
      "User-friendly design",
      "Payment integration with Stripe"
    ]
  },
  {
    github: "https://github.com/asaber3030/social-media-app",
    title: "Social Media",
    shortBrief: "Social media app similar to Instagram & X",
    description:
      "This application you can follow people, post some articles, publish pictures, also you can post reels and more...",
    image: "/projects/back-end/social-media.png",
    gif: "/projects/back-end/gifs/social-media.gif",
    tools: ["NextJS", "TailwindCss", "Prisma", "MySQL"],
    slug: "social-media",
    viewUrl: routes.backendProject("social-media"),
    keyFeatures: [
      "Follow and interact with users",
      "Post articles, pictures, and reels",
      "User-friendly timeline",
      "Real-time notifications",
      "Modern and responsive design"
    ]
  },
  {
    url: "https://hardware-store-zeta.vercel.app/",
    github: "https://github.com/asaber3030/hardware-store",
    title: "Hardware Store",
    shortBrief: "An Online store for purchasing PC Components",
    description:
      "Hardware store for ordering PC components with all of online store functionality, including product browsing, detailed specifications, cart management, secure checkout, and real-time order tracking.",
    image: "/projects/back-end/hardware.png",
    gif: "/projects/back-end/gifs/hardware-store.gif",
    tools: ["NextJS", "TailwindCss", "Prisma", "MySQL"],
    slug: "hardware-store",
    viewUrl: routes.backendProject("hardware-store"),
    keyFeatures: [
      "Browse and purchase PC components",
      "Order tracking",
      "Responsive UI design",
      "Product search functionality",
      "Future payment integration"
    ]
  },
  {
    url: "",
    github: "https://github.com/asaber3030/university-education-system",
    title: "Faculty Education System",
    shortBrief: "An Online store for purchasing PC Components",
    description:
      "A system that controls every thing for students like quizzes, exams, grades and other features. With 2 separate dashboards.",
    image: "/projects/back-end/education-system.png",
    gif: "/projects/back-end/gifs/education-system.gif",
    tools: ["Laravel", "React.js", "Inertia.js", "SASS"],
    slug: "faculty-education-system",
    viewUrl: routes.backendProject("faculty-education-system"),
    keyFeatures: [
      "Student management dashboard",
      "Quiz and exam handling",
      "Grade tracking",
      "Teacher and admin dashboards",
      "Modern and efficient design"
    ]
  },
  {
    url: "",
    github: "https://github.com/asaber3030/board-app",
    title: "Board App",
    shortBrief: "An Online store for purchasing PC Components",
    description:
      "An Applications looks like miro board. Simple you can share a board and write and draw objects",
    image: "/projects/back-end/board-app.png",
    gif: "/projects/back-end/gifs/board-app.gif",
    tools: ["NextJS", "TailwindCss", "Clerk", "Convex"],
    slug: "board-app",
    viewUrl: routes.backendProject("board-app"),
    keyFeatures: [
      "Collaborative board sharing",
      "Drawing and writing tools",
      "Real-time synchronization",
      "User-friendly interface",
      "Secure sharing options"
    ]
  },
  {
    url: "",
    github: "https://github.com/asaber3030/notion-clone",
    title: "Notion Clone",
    shortBrief: "An Online store for purchasing PC Components",
    description:
      "An application for writing notes and publishing to another person with many features. As you see in the pictures.",
    image: "/projects/back-end/notion.png",
    gif: "/projects/back-end/gifs/notion-clone.gif",
    tools: ["NextJS", "Convex", "EdgeStore", "TailwindCss"],
    slug: "notion-clone",
    viewUrl: "routes.backendProject('notion-clone')",
    keyFeatures: [
      "Real-time note synchronization",
      "Collaborative editing",
      "Rich text formatting options",
      "User-friendly interface",
      "Secure data storage"
    ]
  },
  {
    url: "",
    github: "https://github.com/asaber3030/inote-dashboard",
    title: "INote - Engineering Company Dashboard",
    shortBrief: "An Online store for purchasing PC Components",
    description:
      "This dashboard was designed to control everything in contracting companies that is related to building. Review features on github",
    image: "/projects/back-end/inote.png",
    gif: "/projects/back-end/gifs/inote.gif",
    tools: ["Laravel", "React", "SASS"],
    slug: "inote-engineering-company-dashboard",
    viewUrl: "routes.backendProject('inote-engineering-company-dashboard')",
    keyFeatures: [
      "Project management tools",
      "Resource tracking",
      "Data visualization dashboards",
      "User access control",
      "Real-time updates"
    ]
  },
  {
    url: "",
    github: "https://github.com/asaber3030/website-food-restaurant",
    title: "Burger Order",
    shortBrief: "An Online store for purchasing PC Components",
    description:
      "A website for ordering food of burger restaurant with ability to order many times with using coupons also!",
    image: "/projects/back-end/burger-website.png",
    gif: "/projects/back-end/gifs/food-burger.gif",
    tools: ["Laravel", "React", "SASS", "InertiaJS"],
    slug: "burger-order",
    viewUrl: "routes.backendProject('burger-order')",
    keyFeatures: [
      "Online food ordering",
      "Coupon management",
      "Order tracking",
      "Customizable menu options",
      "Responsive design"
    ]
  },
  {
    url: "",
    github: "https://github.com/asaber3030/articles-app",
    title: "Blog & Online Courses Website",
    shortBrief: "An Online store for purchasing PC Components",
    description:
      "An application for writing articles, creating step-by-step guides, publishing free courses for users, and tracking views.",
    image: "/projects/back-end/articles-blog.png",
    gif: "/projects/back-end/gifs/articles.gif",
    tools: ["Laravel", "Livewire", "SASS"],
    slug: "blog-online-courses-website",
    viewUrl: routes.backendProject("blog-online-courses-website"),
    keyFeatures: [
      "Create and publish detailed articles and guides",
      "Host and share free online courses with users",
      "Track article and course view counts for analytics",
      "Real-time content updates powered by Livewire",
      "Elegant and responsive design for better readability"
    ]
  },
  {
    url: "",
    github: "https://github.com/asaber3030/online-store-admin-panel",
    title: "Store Dashboard",
    shortBrief: "An Online store for purchasing PC Components",
    description:
      "A dashboard for companies to control their sales and output the data in form of Excel files and collect data",
    image: "/projects/back-end/ecommerce-dashboard.png",
    gif: "/projects/back-end/gifs/online-store.gif",
    tools: ["Laravel", "React", "SASS"],
    slug: "store-dashboard",
    viewUrl: routes.backendProject("store-dashboard"),
    keyFeatures: [
      "Comprehensive dashboard to monitor sales performance",
      "Export sales and inventory data to Excel files",
      "Interactive charts and graphs for data visualization",
      "Integration with React for dynamic user experience",
      "Advanced data collection and filtering options"
    ]
  },
  {
    url: "",
    github: "https://github.com/asaber3030/E-Commerce/",
    title: "Full E-Commerce Website",
    shortBrief: "An Online store for purchasing PC Components",
    description:
      "E-Commerce app with 3 dashboards including delivery control for all products that are assigned to a delivery-man",
    image: "/projects/back-end/ecommerce-website.png",
    gif: "/projects/back-end/gifs/ecommerce-full.gif",
    tools: ["Laravel", "AJAX", "SASS"],
    slug: "full-ecommerce-website",
    viewUrl: routes.backendProject("full-ecommerce-website"),
    keyFeatures: [
      "Comprehensive dashboards for admin, seller, and delivery management",
      "Real-time product inventory and order tracking",
      "Delivery assignment and status control",
      "User-friendly shopping experience for PC components",
      "Developed with Laravel and AJAX for dynamic interactions"
    ]
  },
  {
    github: "https://github.com/asaber3030/MoWatch",
    title: "Movies App",
    shortBrief: "Website to view movies and series cast and more information about the app",
    description:
      "You can view every information about movies or series including cast, revenue, and much more.",
    image: "/projects/back-end/movie-website.png",
    gif: "/projects/back-end/gifs/movies.gif",
    tools: ["Laravel", "MySQL", "Livewire"],
    slug: "movies-app",
    viewUrl: routes.backendProject("movies-app"),
    keyFeatures: [
      "Search for movies and series by title",
      "View detailed information about cast and crew",
      "Track revenue and statistics of movies",
      "Responsive and user-friendly design",
      "Built using Laravel and Livewire"
    ]
  }
]

export const aiProjects = [
  {
    title: "AI-Powered Movies Recommendation System",
    description:
      "A machine learning-based system that uses user search queries to recommend movies. The project leverages natural language processing and collaborative filtering techniques to provide personalized suggestions.",
    tools: ["Python", "scikit-learn", "Pandas", "NumPy", "nltk"],
    github: "https://github.com/asaber3030/movie-recommendation-system"
  },
  {
    title: "Advanced Customer Segmentation Using RFM Analysis",
    description:
      "A project focused on segmenting customers based on Recency, Frequency, and Monetary (RFM) metrics. The analysis helps businesses identify and target key customer groups effectively, enhancing marketing strategies.",
    tools: ["Python", "scikit-learn", "Pandas", "NumPy", "Seaborn"],
    github: "https://github.com/asaber3030/customers-segmentation-using-RFM-analysis"
  },
  {
    title: "Neural Network-Based Self-Driving Car Simulation",
    description:
      "An interactive simulation of self-driving cars using JavaScript and Canvas. This project demonstrates the implementation of neural networks to train the car for obstacle detection and navigation in a virtual environment.",
    tools: ["JavaScript", "Canvas"],
    github: "https://github.com/asaber3030/self-driving-car"
  },
  {
    title: "Custom Linear Regression & Classification Models",
    description:
      "A hands-on project to build simple linear and logistic regression models from scratch using Python. The project involves working with a dummy dataset to test foundational concepts of machine learning.",
    tools: ["Python"],
    github: "https://github.com/asaber3030/Machine-Learning-Models"
  }
]

export const otherProjects = [
  {
    title: "Job Finder Mobile App",
    description:
      "A mobile application developed using React Native to help users search for new job opportunities. The app uses dummy data to demonstrate the job search functionality and provides an interactive user experience.",
    tools: ["React Native"],
    github: "https://github.com/asaber3030/jobs-app"
  },
  {
    title: "Monopoly Game with JavaFX GUI",
    description:
      "A desktop-based Monopoly game implemented as a Windows GUI application using JavaFX. This project was developed as part of a university assignment, showcasing teamwork and expertise in Java application development.",
    tools: ["Java", "JavaFX"],
    github: "https://github.com/asaber3030/monopoly-game"
  },
  {
    title: "JavaScript Mini-Projects Collection",
    description:
      "A series of simple JavaScript applications created to practice and apply concepts learned from JavaScript courses. These projects include various interactive features and demonstrate core JavaScript functionality.",
    tools: ["JavaScript", "HTML"],
    github: "https://github.com/asaber3030/JavaScript-Projects"
  },
  {
    title: "Custom PHP MVC Framework",
    description:
      "A lightweight PHP MVC framework inspired by Laravel, featuring routing, controllers, and models. This project demonstrates the development of a simplified web framework with key Laravel-like functionality.",
    tools: ["PHP"],
    github: "https://github.com/asaber3030/PHP-MVC-Framework"
  }
]

export const allProjects = [...backEndProjects, ...frontEndProjects]

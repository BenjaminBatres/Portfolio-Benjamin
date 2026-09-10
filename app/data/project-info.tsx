// SaveSpend images
import saveSpendHome from "../assets/images/saveSpend-images/SaveSpendHome-img.png";
// Batres web deisgn
import batresWebDesign from "../assets/images/Batreswebdesign.png"
// Audio e-commerce images
import audioEcommerce from "../assets/images/audio-e-commerce/audio-e-commerce.png"
// Designer images
import ecommercestore from "../assets/images/e-commerce-images/e-commerce-project.png";
// Recipe Finder images
import recipeFinder from "../assets/images/recipe-finder-images/Recipe-finder.png"
// Summarist images
import summaristHomeImg from "../assets/images/summarist-images/SummaristHome-img.png";

const projectsInfo = [
  {
    id: "save-spend",
    name: "SaveSpend",
    subtitle: "Tracking all your expenses in one place",
    description: "Budgeting app for tracking expenses — 2025",
    overView:
      "SaveSpend is a personal finance web app that helps people learn how to save smarter and see exactly where their money goes. Built with Next.js, Tailwind CSS, Firebase, and the OpenAI API, it guides users through budgeting, tracking expenses, and even chatting with an AI finance assistant for personalized tips.",
    image: saveSpendHome,
    link: "https://save-spend.vercel.app/",
    githubLink: 'https://github.com/BenjaminBatres/SaveSpend',
    techStack: ["Next.js", "JavaScript","Tailwind CSS", "OpenAI", "Firebase", "Express.js"],
  },
  {
    id: "freelance",
    name: "Batres Web Design",
    overView: "I build professional, mobile-friendly websites that help local businesses look credible online and turn visitors into customers.",
    image: batresWebDesign,
    link: "https://batreswebdesign.com",
    techStack: ["Next.js", "TypeScript","Tailwind CSS", "Framer Motion"],
     githubLink: 'https://github.com/BenjaminBatres/BatresWebDesign',
  },
  {
    id: "audio-e-commerce",
    name: "Audiophile-E-Commerce",
    subtitle: "Tracking all your expenses in one place",
    description: "Budgeting app for tracking expenses — 2025",
    overView:
      "Audiophile is a modern, fully responsive e-commerce web application designed for audio enthusiasts. Built with Next.js, TypeScript, Tailwind CSS, Redux, and Framer Motion, this platform offers an interactive and visually engaging shopping experience for high-end audio gear, including headphones, speakers, and earphones.",
    image: audioEcommerce,
    link: "https://audiophile-e-commerce-ten.vercel.app/",
    githubLink: 'https://github.com/BenjaminBatres/Audiophile-e-commerce',
    techStack: ["Next.js", "TypeScript","Tailwind CSS", "data.json", "Framer Motion", "Redux", "Framer Motion",],
  },
  {
    id: "designer-product",
    name: "Designer E-Commerce",
    subtitle: 'Elevated essentials for the modern closet.',
    description: "An e-commerce UI for adding clothing products to your cart.",
    descriptionTablet: "E-Commerce",
    overView: 'StyleNest is a clean, modern, mobile-responsive e-commerce storefront designed to showcase premium fashion apparel and accessories. It functions as a sleek, interactive catalog that mimics a real-world shopping experience.',
    image: ecommercestore,
    link: "https://designer-product-e-commerce.vercel.app/",
    techStack: ["Next.js", "JavaScript","Tailwind CSS", "REST API", "Framer Motion", "Redux"],
     githubLink: 'https://github.com/BenjaminBatres/Designer-product-e-commerce',
  },
  {
    id: "recipie-finder",
    name: "Recipe Finder",
    techStack: ["Next.js", "TypeScript","Tailwind CSS", "Data.json", "Framer Motion"],
    description: "An e-commerce UI for adding clothing products to your cart.",
    overView: 'Recipe Finder is a clean, modern web application built as a solution to a Frontend Mentor challenge. Designed to help users discover quick, whole-food recipes in under 30 minutes, the app focuses on performance, accessibility, and a seamless user experience.',
    image: recipeFinder,
    link: "https://recipe-finder-mu-eight.vercel.app/",
    githubLink: 'https://github.com/BenjaminBatres/Recipe-Finder',
  },
  {
    id: "summarist",
    name: "Summarist",
    descriptionTablet: "Online audiobooks ",
    overView: "This site was developed as part of my internship preparation and showcases both my front-end skills and my ability to deliver production-ready websites using modern tools. It serves as a professional landing page to introduce myself to recruiters and potential clients.",
    image: summaristHomeImg,
    link: "https://ben-internship-v2.vercel.app/",
    githubLink: 'https://github.com/BenjaminBatres/Ben-InternshipV2',
    techStack: ["Next.js", "JavaScript","CSS", "REST API", "Swiper", "Firebase", "Redux", "Stripe Payment"],
  },
];

export default projectsInfo;

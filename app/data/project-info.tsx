// SaveSpend images
import saveSpendHome from "../assets/images/saveSpend-images/SaveSpendHome-img.png";
import saveSpendImg1 from "../assets/images/saveSpend-images/SaveSpend-img1.png";
import saveSpendImg2 from "../assets/images/saveSpend-images/SaveSpend-img2.png";
import saveSpendImg3 from "../assets/images/saveSpend-images/SaveSpend-img3.png";
import saveSpendImg4 from "../assets/images/saveSpend-images/SaveSpend-img4.png";
// Audio e-commerce images
import audioEcommerce from "../assets/images/audio-e-commerce/audio-e-commerce.png"
// Designer images
import ecommercestore from "../assets/images/e-commerce-images/e-commerce-project.png";
import designer1 from "../assets/images/e-commerce-images/Designer1.png";
import designer2 from "../assets/images/e-commerce-images/Designer2.png";
import designer3 from "../assets/images/e-commerce-images/Designer3.png";
import designer4 from "../assets/images/e-commerce-images/Designer4.png";
// Ultraverse images
import recipeFinder from "../assets/images/recipe-finder-images/Recipe-finder.png"
import ultramarket from "../assets/images/ultraverse-images/UltraverseHome.png";
import ultraverse1 from "../assets/images/ultraverse-images/Ultraverse1.png";
import ultraverse2 from "../assets/images/ultraverse-images/Ultraverse2.png";
import ultraverse3 from "../assets/images/ultraverse-images/Ultraverse3.png";
import ultraverse4 from "../assets/images/ultraverse-images/Ultraverse4.png";
// Summarist images
import summarist1 from "../assets/images/summarist-images/Summarist1.png";
import summarist2 from "../assets/images/summarist-images/Summarist2.png";
import summarist3 from "../assets/images/summarist-images/Summarist3.png";
import summarist4 from "../assets/images/summarist-images/Summarist4.png";
import summaristHomeImg from "../assets/images/summarist-images/SummaristHome-img.png";
// Movie images
import movieapi from "../assets/images/movieApi-images/MovieAPI.jpg";
import movie1 from "../assets/images/movieApi-images/Movie1.png";
import movie2 from "../assets/images/movieApi-images/Movie2.png";
import movie3 from "../assets/images/movieApi-images/Movie3.png";
import movie4 from "../assets/images/movieApi-images/Movie4.png";

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
    info: [
      {
        title: "Client",
        subTitle: "SaveSpend",
      },
      {
        title: "Industry",
        subTitle: "A.I Fianace",
      },
      {
        title: "Preview",
        subTitle: "Live site",
      },
      {
        title: "Timeline",
        subTitle: "Aug 2025 - Oct 2025",
      },
    ],
    images: [saveSpendImg1, saveSpendImg2, saveSpendImg3, saveSpendImg4],
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
  {
    id: "movie-api",
    name: "Movie Api",
    subtitle: "Search for you favorite movies",
    description:
      "Movie website that allows users to search for movies, view details, and watch trailers using the TMDB API.",
    descriptionTablet: "Movie website",
    overView: "Created a website that displays any movie that the user searches for and includes a sorting option that goes from newest to oldest or vice versa.",
    image: movieapi,
    link: "https://movie-api-v2-alpha.vercel.app/",
    techStack: ["Next.js", "JavaScript","Tailwind CSS", "REST API", "Framer Motion"],
  },
];

export default projectsInfo;

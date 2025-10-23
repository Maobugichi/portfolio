import hangman from "./assets/hangmanhome.png";
import fourconnect from "./assets/fourconnecthome.png";
import essential from "./assets/essentialshome.png"
import weathery from "./assets/weathery.png"
import med from "./assets/med.png"
import lear from "./assets/lear.png"
import textflex from "./assets/textflex-ss.png"
import bsdlight from "./assets/fullbsd.png";
import toyshop from "./assets/toystore-ss.png";


const content = [
     {
        src: bsdlight,
        title: "bsdlight, landing page for a construction company",
        description: "A sleek and responsive landing page designed for a construction company, showcasing services, projects, and contact information with a professional and modern aesthetic.",
        features: "Smooth scroll navigation, responsive design, service and project highlights, contact form integration, and animated UI sections for enhanced visual engagement.",
        tools: "Built using React, React Router DOM, Tailwind CSS, and Framer Motion for smooth animations and transitions.",
        link: "https://www.bsdlight.com"
    },
     {   
        src:textflex,
        title:"Textflex",
        description: " fast, user-friendly platform for renting virtual numbers by country or service — perfect for secure signups, verifications, and temporary SMS needs.",
        features: "Instant number rental by country or service, real-time SMS delivery, seamless payments, referral bonuses, and a clean, mobile-friendly interface.",
        tools:" Leveraging the powers of  React, React router dom, framer-motion and tailwind-css , express , node and api's",
        link:"https://www.textflex.net"
    },
    {
    src: toyshop,
        title: "TheToyShop clothing brand store",
        description: "A modern e-commerce platform built for a contemporary clothing brand, offering a sleek and intuitive shopping experience. Designed to reflect the brand’s style while ensuring performance, scalability, and user satisfaction.",
        features: "comprehensive product catalog, advanced filtering by size, color, and price, secure user authentication, add-to-cart and wishlist functionality, order tracking, and a fully responsive design for all screen sizes.",
        tools: "Developed using React, React DOM, Shadcn UI for elegant and accessible component design, Node.js, and Express.js for a robust backend API.",
        link: "https://thetoyshop.net.ng"
    },
     {
        src:med,
        title:"MedSpecter",
        description:"A fully functional and responsive dashboard powered with ReactJs , motion and TailwindCSS",
        features: "A medical dashboard with rich filtering options",
        tools:"Built with React , motion, TailwindCSS",
        link:"https://maobugichi.github.io/medspecter/"
    },
    {
        src:essential,
        title:"essential e-commerce store",
        description: "A fully functional e-commerce store packed with robust features and a sleek user interface. This project boasts of superb user experience",
        features: "filtering options per date, color , price etc, a fully functional auth system to track users, add to cart functionality, add to wishlist, search functionality and data persistence",
        tools:" Leveraging the powers of  React, React router dom, framer-motion, auth0 , cookies and sessions and tailwind-css",
        link:"https://maobugichi.github.io/essentials/#/essentials/"
    },
  
    {
        src:weathery,
        title:"weathery your personal weather app",
        description:"A fully functional weather app powered with openAIs weather API",
        features: "filtering cities, weather information 5 hours, 24hrs weather forecast",
        tools:"Built with React",
        link:"https://maobugichi.github.io/weathery/"
    },
    {
        src:lear,
        title:"Learnly",
        description:"A fully functional and responsive quiz template UI powered with ReactJs , motion and TailwindCSS",
        features: "A basic quiz template with drag drop functionality and also select options",
        tools:"Built with React , motion, TailwindCSS",
        link:"https://maobugichi.github.io/learnly/"
    },
    {
        src:fourconnect,
        title:"Four Connects Webgame ",
        description: "A fun and intuitive webgame,based off the original four connects in a row game, fit for all age groups.",
        features: "2 modes: player v cpu & player v player",
        tools:" Leveraging the powers of  React, React router dom, framer-motion and tailwind-css",
        link:"https://maobugichi.github.io/fourconnects/#/fourconnects"
    },
     {   
        src:hangman,
        title:"Hangman Webgame ",
        description: "A fun and intuitive webgame,based off the original hangman guess game, fit for all age groups.",
        features: "7 distinct categories: movies,tv shows,sports,animals,countries",
        tools:" Leveraging the powers of  React, React router dom, framer-motion and tailwind-css",
        link:"https://maobugichi.github.io/hangman/#/hangman/"
    },
]

export default content
import textflex from "./assets/textflexhero.png"
import bsdlight from "./assets/bsdhero.png";
import toyshop from "./assets/toyhero.png";
import creat from "./assets/creat-hero.png"; // add your image to assets

const content = [
    {
        src: bsdlight,
        title: "bsdlight",
        description: "A sleek and responsive landing page designed for a construction company, showcasing services, projects, and contact information with a professional and modern aesthetic.",
        features: "Smooth scroll navigation, responsive design, service and project highlights, contact form integration, and animated UI sections for enhanced visual engagement.",
        tools: "React, React Router DOM, Tailwind CSS, Motion",
        link: "https://www.bsdlight.com"
    },
    {
        src: textflex,
        title: "Textflex",
        description: "A fast, user-friendly platform for renting virtual numbers by country or service — perfect for secure signups, verifications, and temporary SMS needs.",
        features: "Instant number rental by country or service, real-time SMS delivery, seamless payments, referral bonuses, and a clean, mobile-friendly interface.",
        tools: "React, React Router DOM, Motion, Tailwind CSS, Express, Node, APIs",
        link: "https://www.textflex.net"
    },
    {
        src: toyshop,
        title: "theToyShop",
        description: "A modern e-commerce platform built for a contemporary clothing brand, offering a sleek and intuitive shopping experience. Designed to reflect the brand's style while ensuring performance, scalability, and user satisfaction.",
        features: "Comprehensive product catalog, advanced filtering by size, color, and price, secure user authentication, add-to-cart and wishlist functionality, order tracking, and a fully responsive design for all screen sizes.",
        tools: "React, React DOM, Shadcn UI, Node, Express",
        link: "https://thetoyshop.net.ng"
    },
    {
        src: creat,
        title: "Creat",
        description: "A creative landing page built to showcase bold design and smooth animations, combining modern tooling with expressive motion to deliver a visually compelling and performant web experience.",
        features: "GSAP-powered scroll animations, fluid page transitions, responsive layout, interactive UI sections, and a polished aesthetic built for creative presentation.",
        tools: "React, Tailwind CSS, TypeScript, GSAP, Motion",
        link: ""  // add your link here
    },
]

export default content
import alexMorganPortfolioImage from "../assets/Alex Morgan Portfolio.png";
import novaCartImage from "../assets/Nova Cart.png";
import vertexSolutionsImage from "../assets/Vertex Solutions.png";
import skyPulseImage from "../assets/SkyPulse Weather Dashboard.png";
import auralisAiImage from "../assets/Auralis AI Chatbot.png";

export const profile = {
  name: "Dhruv Zanzmera",
  role: "Senior Full-Stack Developer",
  company: "PixerFect Solutions LLP",
  email: "dhruvzanzmera01@gmail.com",
  github: "",
  linkedin: "",
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const fullStackProject = {
  title: "Auralis AI",
  image: auralisAiImage,
  liveUrl: "https://auralis-ai-chat-app-frontend.vercel.app/",
  summary: "A full-stack AI chatbot with secure user accounts, saved conversations, and an admin dashboard for managing users and usage.",
  tech: [
    { category: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js"] },
    { category: "Database", items: ["MongoDB", "Mongoose"] },
    { category: "Authentication", items: ["JWT", "Cookies"] },
    { category: "AI engine", items: ["Groq API"] },
  ],
  features: [
    "User signup and login",
    "AI chat conversations",
    "Save chat history",
    "Rename and delete chats",
    "Admin dashboard",
    "User management and usage tracking",
  ],
};

export const projects = [
  {
    title: "SkyPulse",
    image: skyPulseImage,
    liveUrl: "https://skypulse-weather-dashboard.onrender.com/",
    summary: "A responsive weather dashboard with live forecasts, air-quality insights, and location-aware city search.",
    highlights: ["Live weather & air quality", "City search", "Geolocation", "Responsive design"],
    tech: [
      { category: "Structure", items: ["HTML5"] },
      { category: "Styling", items: ["CSS3", "Responsive layout"] },
      { category: "Interactivity", items: ["Vanilla JavaScript", "Fetch API"] },
      { category: "Weather data", items: ["Open-Meteo forecast API", "Open-Meteo air quality API"] },
      { category: "Location", items: ["Open-Meteo geocoding", "OpenStreetMap Nominatim reverse geocoding", "Browser geolocation"] },
      { category: "Icons & typography", items: ["Font Awesome", "Google Fonts"] },
    ],
  },
  {
    title: "Alex Morgan Portfolio",
    image: alexMorganPortfolioImage,
    liveUrl: "https://alex-morgan-portfolio-one.vercel.app/",
    summary: "A motion-led portfolio concept that brings a developer’s work, experience, and services together in one polished experience.",
    highlights: ["Responsive design", "GSAP", "ScrollTrigger", "Vanilla JavaScript"],
    tech: [
      { category: "Structure", items: ["HTML5"] },
      { category: "Styling", items: ["CSS3", "Tailwind CSS (via CDN)"] },
      { category: "Interactivity", items: ["Vanilla JavaScript"] },
      { category: "Animations", items: ["GSAP", "ScrollTrigger"] },
      { category: "3D hover effect", items: ["Vanilla Tilt"] },
      { category: "Icons & fonts", items: ["Font Awesome", "Google Fonts (Inter)"] },
      {
        category: "Other",
        items: ["Responsive design", "Light/dark theme", "Reduced-motion support"],
      },
    ],
  },
  {
    title: "Nova Cart",
    image: novaCartImage,
    liveUrl: "https://nova-cart-phi.vercel.app/",
    summary: "A bright storefront concept for home, tech, fitness, and lifestyle finds, with hands-on shopping interactions throughout.",
    highlights: ["Product filters", "Cart & wishlist UI", "Responsive navigation", "Vanilla JavaScript"],
    tech: [
      { category: "Structure", items: ["HTML5"] },
      { category: "Styling", items: ["CSS3", "Tailwind CSS (via CDN)"] },
      { category: "Interactivity", items: ["Vanilla JavaScript"] },
      {
        category: "Animations",
        items: ["Scroll reveal with the Intersection Observer API"],
      },
      {
        category: "Icons & fonts",
        items: ["Font Awesome", "Google Fonts (Sora, Inter, JetBrains Mono)"],
      },
      {
        category: "Other",
        items: [
          "Responsive navigation",
          "Product filters",
          "Cart and wishlist UI",
          "Countdown timer",
          "Demo-only cart, wishlist, search, and newsletter interactions",
          "No backend",
        ],
      },
    ],
  },
  {
    title: "Vertex Solutions",
    image: vertexSolutionsImage,
    liveUrl: "https://vertex-solutions-theta.vercel.app/",
    summary: "A confident company landing page concept presenting cloud engineering and enterprise software services with animated visual detail.",
    highlights: ["Responsive layout", "CSS animations", "Service cards", "HTML & CSS"],
    tech: [
      { category: "Structure", items: ["HTML5"] },
      { category: "Styling", items: ["CSS3 (written inside the HTML file)"] },
      { category: "Animations & effects", items: ["CSS animations and transitions"] },
      {
        category: "Icons & fonts",
        items: ["Font Awesome", "Google Fonts (Outfit, Plus Jakarta Sans, JetBrains Mono)"],
      },
      {
        category: "Other",
        items: [
          "Responsive layout",
          "Fixed navigation",
          "Animated graphics and service cards",
          "No build step or JavaScript framework",
        ],
      },
    ],
  },
];

export const processSteps = [
  {
    title: "Start with the why",
    text: "Understand the audience, the opportunity, and what a successful outcome should look like.",
  },
  {
    title: "Shape the direction",
    text: "Turn the brief into a considered structure, clear priorities, and a practical plan.",
  },
  {
    title: "Design, build, refine",
    text: "Bring the experience to life with purposeful interfaces and dependable functionality, refining the details along the way.",
  },
  {
    title: "Polish and deliver",
    text: "Review the details, interactions, and responsive experience before preparing the work for release.",
  },
];

export const stack = [];

export const about = [
  "I’m Dhruv Zanzmera, a Senior Full-Stack Developer at PixerFect Solutions LLP.",
  "I work across frontend and backend development, bringing a product-minded perspective to the way web experiences are planned, built, and refined.",
];

export const experience = [
  {
    role: profile.role,
    company: profile.company,
    period: "Present",
    summary: "Working across frontend and backend development to shape considered, user-focused web experiences.",
    points: [],
  },
];

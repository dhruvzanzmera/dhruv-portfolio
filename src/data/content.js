// Add confirmed project, contact, and experience details here as they become available.

import alexMorganPortfolioImage from "../assets/Alex Morgan Portfolio.png";
import novaCartImage from "../assets/Nova Cart.png";
import vertexSolutionsImage from "../assets/Vertex Solutions.png";

export const profile = {
  name: "Dhruv Zanzmera",
  role: "Senior Full-Stack Developer",
  company: "PixerFect Solutions LLP",
  email: "",
  github: "",
  linkedin: "",
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "Alex Morgan Portfolio",
    image: alexMorganPortfolioImage,
    summary: "Developer portfolio showcasing skills, services, experience, projects, and contact details.",
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
    summary: "Storefront demo for curated home, tech, fitness, and lifestyle products.",
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
    summary: "Company landing page highlighting cloud engineering and enterprise software services.",
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
    title: "Understand the goal",
    text: "Get clear on the people the product is for and the problem it needs to solve.",
  },
  {
    title: "Plan the solution",
    text: "Break the requirements into practical steps across the frontend and backend.",
  },
  {
    title: "Build and refine",
    text: "Develop the product in focused pieces and refine them as the work takes shape.",
  },
  {
    title: "Review and deliver",
    text: "Check the completed work against the goal and prepare it for delivery.",
  },
];

export const stack = [];

export const about = [
  "I'm Dhruv Zanzmera, a Senior Full-Stack Developer at PixerFect Solutions LLP.",
  "I work across frontend and backend development. More about my projects and experience will be added here soon.",
];

export const experience = [
  {
    role: profile.role,
    company: profile.company,
    period: "Current",
    points: [],
  },
];

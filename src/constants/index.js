import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta, // Retained for icon use if needed, though replaced
  starbucks, // Retained for icon use if needed
  tesla, // Retained for icon use if needed
  shopify, // Retained for icon use if needed
  carrent, // Retained for icon use if needed
  jobit, // Retained for icon use if needed
  tripguide, // Retained for icon use if needed
  threejs, // Retained for icon use if needed
  gdsc, // Retained for icon use
  wow, // Retained for icon use
  beingdev, // Retained for icon use
  bdev, // Retained for icon use
  gpt, // Retained for image use
  shop, // Retained for image use
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Digital Marketer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

// ------------------------------------------------------------------
// ⭐ UPDATED EXPERIENCES ARRAY ⭐
// The original experiences array has been replaced with your new data.
// NOTE: I am using 'meta' and 'starbucks' as placeholder imports for icons 
// since the actual company logos were not included in the imports list.
// ------------------------------------------------------------------
const experiences = [
  {
    title: "Lead Full Stack Engineer and Managing Director",
    company_name: "Git Software Solutions",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdDPUYppGGKBQrfStD41LWPqIafpRlvGmlw&s", // Placeholder icon
    iconBg: "#383E56",
    date: "May 2023 - Present (2 yrs 7 mos)",
    points: [
      "Developed comprehensive full-stack web applications for small business clients, leveraging Python (Flask) for robust back-end logic.",
      "Managed client integrations, ensuring seamless and efficient functionality between front-end and back-end components.",
      "Implemented and maintained basic server-side functionality, utilizing databases like MySQL and PostgreSQL for data management and user authentication.",
      "Strategically optimized website performance by implementing code minification, image compression, and caching techniques.",
    ],
  },
  {
    title: "Freelance Back-end Developer",
    company_name: "wHTa Networks (Contract)",
    icon: meta, // Placeholder icon
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Apr 2025 (5 mos)",
    points: [
      "Optimized API performance, successfully reducing average response time by 25% to enhance speed and system efficiency.",
      "Conducted extensive database optimization, improving query efficiency and reducing load times by an average of 15%.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Swahilipot Hub Foundation",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_zVNihjLgBZZlUpYhcb1UVlWszfTldu6Cw&s", // Placeholder icon
    iconBg: "#3498DB",
    date: "Jun 2022 - Dec 2022 (7 mos)",
    points: [
      "Designed and implemented responsive web layouts, resulting in a 20% improvement in overall user experience.",
      "Collaborated closely with senior developers on integrating backend services using RESTful APIs and third-party services into front-end components.",
      "Contributed to front-end performance enhancement by debugging and optimizing existing codebase, with a strong focus on mobile responsiveness and rapid loading speeds.",
    ],
  },
];

// ------------------------------------------------------------------
// ⭐ REST OF THE CONSTANTS ARE UNCHANGED ⭐
// ------------------------------------------------------------------
const testimonials = [
  {
    testimonial:
    "I recently worked with Serah on an embedded UI project, and she exceeded expectations. I provided a rough sketch, and she quickly transformed it into a clean, structured Figma design ready for development, demonstrating excellent attention to detail, strong understanding of UI/UX principles tailored for embedded interfaces, and a fast turnaround time. Her communication was clear, she incorporated feedback effectively, and even suggested improvements that enhanced the final design. Serah is professional, reliable, and highly skilled. I highly recommend her.",
    name: "Felix",
    designation: "Embedded Systems Engineer",
    company: "Chronos",
    image: "https://play-lh.googleusercontent.com/S7PNiRZFHA1dCFLiKfcc6vpAftizsik_KGgQgme7F1SHE18ch7RCgnYleoMNLz6pvQ",
  },
  {
    testimonial:
      "I am really great full to Miss Serah Shani for helping me redesigning and participating in building our institutions website. I highly acknowledge her efforts and ability to debug and her test for best designs that are modern and attractive.",
    name: "Jeff",
    designation: "Instructor",
    company: "Uhandisi Training Institute",
    image: "https://www.uhandisiinstitute.com/logo.png",
  },
  {
    testimonial:
      "Sera is an awesome team player. She knows how to mix her professional skills to become a valuable team player. I enjoyed working with her on a couple of projects, she understands the end goal and will keep improving on the existing solutions to make them better and effective ",
    name: "Chris",
    designation: "Community Data Lead",
    company: "Swahilipot Hub Foundation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_zVNihjLgBZZlUpYhcb1UVlWszfTldu6Cw&s",
  },
];

const projects = [
  {
    name: "Tours and Travels Website",
    description:
      "Web-based platform that allows users to search and book Their Holiday Tours, providing a convenient and efficient solution for travel needs.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://smallfootsafari.co.ke",
  },
  {
    name: "Embeded UI Design for IoT Device",
    description:
      "ChatGPT Clone is an AI language model based on the GPT-3.5 architecture developed by OpenAI. It is designed to generate human-like responses to text-based prompts and engage in conversation with users. The model has been trained on a vast amount of text data and can provide information, answer questions, and assist with various tasks.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "openAI",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/Shani-PANDE/ChatGPT-Clone",
  },
  {
    name: "Being Developer",
    description:
      "A service-based project built using React.js and Firebase is a dynamic web application that offers various services to users. It leverages React.js to create an interactive user interface that allows users to access and utilize the services provided. Firebase, a comprehensive platform, is used for backend services such as authentication.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bdev,
    source_code_link: "https://github.com/Shani-PANDE/BeingDeveloper",
  },
];

export { services, technologies, experiences, testimonials, projects };
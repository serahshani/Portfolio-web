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
    icon: starbucks, // Placeholder icon
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
    icon: shopify, // Placeholder icon
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
    "Thank you for building and nurturing a vibrant developer community on your campus. Thank you for reaching out to hundreds of students to create awareness about your club, and helping them become better developers.",
    name: "GDSC India",
    designation: "Community Manager",
    company: "Google DSC",
    image: "https://Shani-2002.web.app/assets/gdsc-f71af2fd.png",
  },
  {
    testimonial:
      "Your hard work, commitment, and collaboration have played a pivotal role in the success of the project. The website we've created together stands as a testament to your valuable contributions, and your efforts have motivated us to push for even greater achievements in the future. Thank you for being such an integral part of this journey.",
    name: "Mayur N. (Former GDSE Member):",
    designation: "Project Manager",
    company: "SIEMENS",
    image: "https://www.secunet.com/fileadmin/user_upload/01_Seitencontent/Produkt-_und_Serviceseiten/Industry/1Siemens_Logo.jpg",
  },
  {
    testimonial:
      "Your exceptional skills, dedication, and teamwork have made a significant impact on the success of this project. Your contributions have not only resulted in a remarkable website but have also inspired us to strive for excellence in all our future endeavors.",
    name: "Siddhesh Nikam",
    designation: "Engineer",
    company: "LTIMindTree",
    image: "https://scontent.cdninstagram.com/v/t51.2885-19/361108662_826612798684832_1347121411853358939_n.jpg?stp=dst-jpg_s100x100&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=fJxi8hHYIyEAX8P2c05&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfD8IbRlM3WJvm38AhkR5NBbVCmAfSd8cHPJ05HK2b2Mcg&oe=64F49C2B",
  },
];

const projects = [
  {
    name: "Shopping App",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Strapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/Shani-PANDE/ShoppingApp",
  },
  {
    name: "ChatGPT Clone",
    description:
      "ChatGPT Clone is an AI language model based on the GPT-3.5 architecture developed by OpenAI. It is designed to generate human-like responses to text-based prompts and engage in conversation with users. The model has been trained on a vast amount of text data and can provide information, answer questions, and assist with various tasks.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
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
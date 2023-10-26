import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  codingDojo,
  threejs,
  python,
  java,
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
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
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
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
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
  {
    name: "Three JS",
    icon: threejs,
  },

];

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "Coding Dojo",
    icon: codingDojo,
    iconBg: "#383E56",
    date: "June 2023 - September 2023",
    points: [
      "Create full scale web applications in 3 different tech stacks",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit nam laudantium ad perferendis aperiam placeat totam, doloribus omnis. Iste numquam natus pariatur aliquid ipsa harum deserunt itaque provident possimus!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
  },
];


const projects = [
  {
    name: "Fantasy BasketBall App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, fuga. Ab sed sint praesentium accusantium esse delectus deserunt eius repellat sit error alias, voluptas omnis inventore autem architecto, ducimus molestias.",
    tags: [
      {
        name: "[tech]",
        color: "blue-text-gradient",
      },
      {
        name: "[tech]",
        color: "green-text-gradient",
      },
      {
        name: "[tech]",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "#",
  },
  {
    name: "Real Estate Investment App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, fuga. Ab sed sint praesentium accusantium esse delectus deserunt eius repellat sit error alias, voluptas omnis inventore autem architecto, ducimus molestias.",
    tags: [
      {
        name: "[tech]",
        color: "blue-text-gradient",
      },
      {
        name: "[tech]",
        color: "green-text-gradient",
      },
      {
        name: "[tech]",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
import {
  mobile,
  backend,
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
  propfolio,
  dashboard,
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
      'An immersive 4 - month full - stack web development bootcamp that specializes in Python, Java, MERN(MongoDB, Express, React, Node.js)',
      'Spent 1000 + hours on intensive coursework through all phases of project development of full - stack applications including building, testing, debugging, and deploying.',
    ],
  },
];


const projects = [
  // {
  //   name: "Fantasy BasketBall App",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, fuga. Ab sed sint praesentium accusantium esse delectus deserunt eius repellat sit error alias, voluptas omnis inventore autem architecto, ducimus molestias.",
  //   tags: [
  //     {
  //       name: "[tech]",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "[tech]",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "[tech]",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   // image: ,
  //   source_code_link: "#",
  // },
  {
    name: "Propfolio",
    description:
      "An intuitive property management platform designed for modern real estate professionals. With Propfolio, users can effortlessly track their property portfolios, monitor occupancy rates, and manage profit/loss margins. Its integrated dashboard provides a holistic view of rented and vacant properties, streamlining operations and financial tracking. Whether you're a seasoned real estate mogul or just starting out, Propfolio offers the tools you need to optimize your property investments.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "TailWindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://propfolio-olive.vercel.app/signup",
    github_link: "https://github.com/JDowler25/CodingDojo/tree/main/Code/Java/Project"
  },
];

export { services, technologies, experiences, projects };
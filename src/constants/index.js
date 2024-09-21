import edtech from "../assets/projects/edtech.png";
import todoApp from "../assets/projects/todoApp.png";
import currencyConverter from "../assets/projects/currencyConverter.png";
import passwordGenerator from "../assets/projects/passwordGenerator.png";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

export const PROJECTS = [
  {
    id:1,
    title: "Ed-Tech Website Landing Page",
    image: edtech,
    description:
      "Designed and developed an animated landing page using React.js, HTML, CSS, and Framer Motion. The landing page highlights key features of the platform, including user-friendly navigation, responsive design, and visually appealing animations.",
      technologies: [
        { icon: SiHtml5, color: "#E34F26" },
        { icon: SiCss3, color: "#1572B6" },
        { icon: SiReact, color: "#61DAFB" },
        { icon: SiFramer, color: "#0055FF" }
      ],
    projectLink : "https://education-meet.netlify.app/"
  },
  {
    id:2,
    title: "Currency Converter",
    image: currencyConverter,
    description:
      "Created a responsive currency converter application using React, HTML, and Tailwind CSS, featuring seamless API integration for real-time exchange rates.",
      technologies: [
        { icon: SiHtml5, color: "#E34F26" },
        { icon: SiReact, color: "#61DAFB" },
        { icon: SiTailwindcss, color: "#06B6D4" },
      ],
    projectLink:"https://latest-currency-converter.netlify.app/"
  },
  {
    id:3,
    title: "Task Management App",
    image: todoApp,
    description:
      "Developed a Todo app using React, HTML, and Tailwind CSS, leveraging the Context API to manage global state efficiently. The app allows users to create, edit, and delete tasks seamlessly, providing a clean and intuitive interface.",
      technologies: [
        { icon: SiHtml5, color: "#E34F26" },
        { icon: SiJavascript, color: "#F7DF1E" },
        { icon: SiReact, color: "#61DAFB" },
        { icon: SiTailwindcss, color: "#38B2AC" },
      ],
     projectLink:"https://latest-todo-manager.netlify.app/"
  },
  {
    id:4,
    title: "Password Generator",
    image: passwordGenerator,
    description:
      "Created a random password generator that allows users to generate secure passwords with customizable options for numbers and characters. making it simple to create strong, unique passwords for enhanced online security.",
      technologies: [
        { icon: SiHtml5, color: "#E34F26" },
        { icon: SiJavascript, color: "#F7DF1E" },
        { icon: SiReact, color: "#61DAFB" },
        { icon: SiTailwindcss, color: "#38B2AC" },
      ],
    projectLink:"https://latest-password-generator.netlify.app/"
  },
];

export const CONTACT = {
  address: "Delhi, India",
  phoneNo: "+91 9554343760",
  email: "atif04011@gmail.com",
};

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiRedux,
  SiFramer,
} from "react-icons/si";
import { MdOutlineRoute } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import TechnologyIcon from "./TechnologyIcon";

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  const techIcons = [
    {
      icon: SiHtml5,
      color: "#E34F26",
      variant: 2.5,
    },
    {
      icon: SiCss3,
      color: "#1572B6",
      variant: 2.5,
    },
    {
      icon: SiJavascript,
      color: "#F7DF1E",
      variant: 2.5,
    },
    {
      icon: SiReact,
      color: "#61DAFB",
      variant: 2.5,
    },
    {
      icon: SiTailwindcss,
      color: "#06B6D4",
      variant: 2.5,
    },
    {
      icon: SiGit,
      color: "#F05032",
      variant: 5,
    },
    {
      icon: SiRedux,
      color: "#764ABC",
      variant: 5,
    },
    {
      icon: SiFramer,
      color: "#0055FF",
      variant: 5,
    },
    {
      icon: MdOutlineRoute,
      color: "#CA4245",
      variant: 5,
    },
    {
      icon: FaGithub,
      color: "#CA4245",
      variant: 5,
    },
  ];
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-20"
      >
         {techIcons.map((tech, index) => (
          <TechnologyIcon
            key={index}
            icon={tech.icon}
            color={tech.color}
            variant={tech.variant}
            iconVariants={iconVariants}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;

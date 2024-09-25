import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import '../CSS/custom.css';

const Projects = () => {
  return (
    <div className="border-b border-neutral-700 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }} 
       className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {PROJECTS.map((project) => (
          <motion.div  whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}  key={project.id} className="lg:w-2/5 sm:w-2/3 flex items-center rounded-2xl justify-center">
            <div className="w-full p-4 rounded-2xl outer-shadow">
              <div className="w-full hover:scale-125 duration-700">
                <img className="rounded-2xl" src={project.image} alt={project.title} />
              </div>

              <div className="py-6 about-project lg:h-56 xs:h-30">
                <h2 className="md:text-xl xs:lg font-bold font-serif tracking-wide">
                  {project.title}
                </h2>
                <p className="py-2 text-neutral-400 font-normal tracking-wide">
                  {project.description}
                </p>
              </div>

              <div className="flex w-full justify-between">
                <div className="flex items-center">
                  {project.technologies.map((tech, index) => {
                    const TechIcon = tech.icon; // Get the icon component
                    return (
                      <TechIcon
                        key={index}
                        className="text-4xl rounded-3xl p-1 mx-1 outer-shadow"
                        style={{ color: tech.color }} // Apply color dynamically
                      />
                    );
                  })}
                </div>

                <div className="btn-grad flex justify-center items-center">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <span>Check Live Site</span>
                    <FaSquareArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

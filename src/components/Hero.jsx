import myImage from "../assets/myImage.png";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });

  return (
    <div className="border-b border-neutral-900">
      <div className="flex items-center flex-col-reverse lg:flex-row lg:gap-24">
      

        {/* Text section */}
        
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(1)} // Slightly delayed for text
              initial="hidden"
              animate="visible"
              className="font-bold pb-5 lg:text-5xl xs:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-center lg:text-left"
            >
              Hey there!{" "}
              <span
                className="text-white inline-block animate-waving-hand"
                role="img"
                aria-label="waving hand"
              >
                👋
              </span>{" "}
              <br /> I'm <span>Syed Naqi Abbas</span>
            </motion.h1>

            <motion.p
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="font-sans  text-2xl w-full  leading-relaxed text-center lg:text-left"
            >
              A passionate{" "}
              <span
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-transparent font-bold"
              >
                Frontend Developer
              </span>{" "}
              skilled in crafting interactive, responsive web experiences with{" "}
              <span
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-transparent font-bold"
              >
                React.js
              </span>{" "}
              and{" "}
              <span
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-transparent font-bold"
              >
                Tailwind CSS
              </span>
              . I bridge the gap between elegant design and efficient
              functionality, while expanding my horizons into{" "}
              <span
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-transparent font-bold"
              >
                backend development
              </span>{" "}
              with{" "}
              <span
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-transparent font-bold"
              >
                Express.js
              </span>{" "}
              and{" "}
              <span
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-transparent font-bold"
              >
                Design
              </span>
              .
            </motion.p>
          </div>
        </div>
         {/* Image section */}
        <div className="p-[5rem] lg:w-1/2  md:w-4/6 sm:w-4/5 flex items-center justify-cen">
          <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={myImage}
              alt="Atif khan image"
              className="w-full  rounded-[55rem]"
              // Adjust size here
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

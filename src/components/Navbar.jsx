import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerIcon from "./HamburgerIcon"; // Import the custom icon

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.2,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
    },
  };

  const containerVars = {
    initial: {
      transition: { staggerChildren: 0.09, staggerDirection: -1 },
    },
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const navItems = [
    { href: "/", text: "HOME" },
    { href: "#about", text: "ABOUT" },
    { href: "#skills", text: "SKILLS" },
    { href: "#projects", text: "PROJECTS" },
    { href: "#contacts", text: "CONTACTS" },
  ];

  const navIcons = [
    { href: "https://www.linkedin.com/in/atif-khan45/", icon: <FaLinkedin /> },
    { href: "https://github.com/atifkhan045", icon: <FaGithub /> },
    { href: "https://x.com/AtifKhan_45", icon: <FaTwitter /> },
  ];

  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-6 cursor-progress">
        <div className="flex items-center justify-center gap-4 text-2xl">
          {navIcons.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${item.href}`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-center gap-6 text-lg text-pretty font-bold tracking-wider">
          {navItems.map((item) => (
            <ul>
            <li key={item.href} className="group">
              <a
                href={item.href}
                className="hover:text-navbarCustom duration-700 relative"
              >
                {item.text}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-navbarCustom scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </a>
            </li>
            </ul>
          ))}
        </div>

        <div className="block md:hidden z-10">
          <HamburgerIcon toggleMenu={toggleMenu} isOpen={open} />
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="md:hidden fixed left-0 top-0 w-full origin-top h-screen bg-neutral-950 p-8"
            >
              <div className="flex h-full flex-col">
                
                  <h1 className="font-bold">Atif's Portfolio</h1>
                
                <motion.div
                  variants={mobileLinkVars}
                  className="text-4xl font-bold font-sans"
                >
                  <motion.ul
                    variants={containerVars}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    className="flex flex-col gap-4 h-full justify-center font-sans items-center"
                  >
                    {navItems.map((item) => (
                      <li key={item.href} className="group">
                        <a
                          href={item.href}
                          className="hover:text-navbarCustom duration-700 relative"
                          onClick={toggleMenu}
                        >
                          {item.text}
                          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-navbarCustom scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;

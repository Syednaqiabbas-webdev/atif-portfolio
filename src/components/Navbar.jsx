import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerIcon from "./HamburgerIcon"; // Import the custom icon
import logo from "../assets/aklogo.svg";

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
      <nav className="flex items-center justify-between px-6 py-4 cursor-pointer fixed top-0 left-0 w-full  z-50">
        {/* Left: Logo */}
        <div className="p-0 m-0">
          <img
            src={logo}
            alt="Logo of Portfolio"
            className=" w-32 max-h-24 max-w-32"
            loading="lazy"
          />
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-6 text-lg text-pretty font-bold tracking-wider">
          {navItems.map((item) => (
            <ul key={item.href}>
              <li className="group">
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

        {/* Right: Hamburger Menu for Mobile */}
        <div className="block md:hidden mr-10 z-10">
          <HamburgerIcon toggleMenu={toggleMenu} isOpen={open} />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="md:hidden fixed left-0 top-0 w-full origin-top h-screen"
              style={{
                backgroundImage:
                  "linear-gradient( 85.2deg,  rgba(33,3,40,1) 7.5%, rgba(65,5,72,1) 88.7% )",
              }}
            >
              <div className="">
                  <img
                    src={logo}
                    alt="Logo of Portfolio"
                    className="absolute top-5 w-32 max-h-24 max-w-32"
                    loading="lazy"
                  />
                </div>
              <div className="flex h-full flex-col">
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

        {/* Right: Extra Content */}
        <div className="hidden md:block">ababab</div>
      </nav>
    </header>
  );
};

export default Navbar;

import { motion } from "framer-motion";

const HamburgerIcon = ({ toggleMenu, isOpen }) => {
  return (
    <div className="cursor-pointer" onClick={toggleMenu}>
      <motion.div
        className="block w-8 h-1 bg-white mb-2 rounded-sm"
        animate={isOpen ? { rotate: 45, y: 15 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="block w-8 h-1 bg-white mb-2 rounded-sm"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="block w-8 h-1 bg-white rounded-sm"
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default HamburgerIcon;

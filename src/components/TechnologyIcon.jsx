import { motion } from "framer-motion";
import '../CSS/custom.css'

const TechnologyIcon = ({ icon: IconComponent, color, variant, iconVariants }) => (
  <motion.div
    variants={iconVariants(variant)}
    initial="initial"
    animate="animate"
    className="rounded-2xl p-4 outer-shadow"
  >
    <IconComponent className="lg:text-8xl sm:text-6xl xs:text-5xl" style={{ color: color }} />
  </motion.div>
);

export default TechnologyIcon;

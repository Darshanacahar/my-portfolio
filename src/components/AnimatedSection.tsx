import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Custom extremely smooth ease
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";

const roles = ["AI Engineer", "ML Enthusiast", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orbX1 = useSpring(useTransform(mouseX, [-500, 500], [40, -40]), { stiffness: 100, damping: 30 });
  const orbY1 = useSpring(useTransform(mouseY, [-500, 500], [40, -40]), { stiffness: 100, damping: 30 });
  
  const orbX2 = useSpring(useTransform(mouseX, [-500, 500], [-50, 50]), { stiffness: 100, damping: 30 });
  const orbY2 = useSpring(useTransform(mouseY, [-500, 500], [-50, 50]), { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);


  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      {/* Background gradient orbs with deep parallax physics */}
      <motion.div 
        style={{ x: orbX1, y: orbY1 }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" 
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" 
        style={{ animationDelay: "3s", x: orbX2, y: orbY2 }} 
      />

      <div className="container mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-heading text-sm tracking-widest uppercase mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Darshan Achar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground font-heading mb-8 h-8"
        >
          <span>{text}</span>
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
        >
          I build intelligent systems and scalable applications to solve real-world
          problems using AI and modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Magnetic strength={0.3}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold transition-all shadow-lg hover:shadow-primary/20"
            >
              Contact Me
            </motion.a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 gradient-text inline-block">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />

          <div className="glass p-8 md:p-12 hover-glow">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
              I'm an aspiring <span className="text-foreground font-medium">AI Engineer</span> and{" "}
              <span className="text-foreground font-medium">Software Developer</span> with a deep passion for
              building intelligent systems that make a tangible impact. My journey spans machine learning,
              computer vision, and full-stack web development — always driven by curiosity and a desire to solve
              real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
              From developing real-time face detection systems to crafting NLP-powered chatbots, I thrive
              on turning complex challenges into elegant, working solutions. I believe in learning by building,
              and every project I undertake is an opportunity to push my boundaries further.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Currently pursuing my B.E., I'm constantly exploring new frameworks, research papers, and
              technologies to stay ahead. I'm seeking internship and entry-level opportunities where I can
              contribute, grow, and build products that matter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

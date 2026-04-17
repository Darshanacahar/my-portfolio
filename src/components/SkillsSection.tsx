import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Eye, Globe } from "lucide-react";
import { TiltCard } from "./TiltCard";

const categories = [
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C", level: 70 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Globe,
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 70 },
      { name: "OpenCV", level: 85 },
      { name: "React", level: 75 },
    ],
  },
  {
    title: "Core Concepts",
    icon: Brain,
    items: ["Data Structures & Algorithms", "Machine Learning", "Computer Vision", "Web Development"],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 gradient-text inline-block">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <TiltCard className="glass p-6 hover-glow h-full">
                <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{cat.title}</h3>
              </div>

              {"skills" in cat
                ? cat.skills.map((skill, j) => (
                    <SkillBar key={skill.name} {...skill} delay={j * 0.1 + i * 0.15} />
                  ))
                : (
                    <div className="flex flex-wrap gap-2">
                      {cat.items!.map((item) => (
                        <span
                          key={item}
                          className="text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

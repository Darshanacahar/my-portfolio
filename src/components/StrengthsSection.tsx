import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, BarChart3, Zap, Users } from "lucide-react";

const strengths = [
  { label: "Problem Solving", icon: Lightbulb, desc: "Breaking down complex challenges into actionable solutions" },
  { label: "Analytical Thinking", icon: BarChart3, desc: "Data-driven approach to decision making" },
  { label: "Fast Learner", icon: Zap, desc: "Quick to adapt and master new technologies" },
  { label: "Team Collaboration", icon: Users, desc: "Effective communicator and team player" },
];

const StrengthsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 gradient-text inline-block">
            Strengths
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass p-6 flex items-start gap-4 hover-glow"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">{s.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;

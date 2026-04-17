import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import { TiltCard } from "./TiltCard";

const certs = [
  "Python Programming Certification",
  "Introduction to Machine Learning",
  "Web Development Fundamentals",
];

const CertificationsSection = () => {
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
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <TiltCard className="glass p-5 flex items-start gap-3 hover-glow h-full">
                <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{cert}</span>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

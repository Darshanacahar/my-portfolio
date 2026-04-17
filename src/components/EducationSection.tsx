import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    institution: "Sapthagiri NPS University, Bengaluru",
    status: "Ongoing",
  },
  {
    degree: "Pre-University (PUC)",
    institution: "Sri Guru PU College, Hospet",
    location: "Hospet (T), Vijayanagar (D)",
    score: "87%",
  },
  {
    degree: "10th Standard",
    institution: "Smiore Vyasapuri English Medium High School",
    location: "Hospet (T), Vijayanagar (D)",
    score: "78%",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 gradient-text inline-block">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-primary-foreground" />
                </div>

                <div className="glass p-5 hover-glow">
                  <h3 className="font-heading font-bold text-lg">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                  {edu.location && (
                    <p className="text-muted-foreground text-xs mt-0.5">{edu.location}</p>
                  )}
                  {edu.score ? (
                    <span className="inline-block mt-2 text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Score: {edu.score}
                    </span>
                  ) : (
                    <span className="inline-block mt-2 text-sm px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium">
                      {edu.status}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Cpu, MessageSquare, Leaf } from "lucide-react";
import { TiltCard } from "./TiltCard";

const projects = [
  {
    title: "Fully Functional Websites",
    icon: Globe,
    problem: "Businesses need fast, responsive, and tailored digital presences.",
    solution: "Designed and developed end-to-end, basic to fully functional web applications for diverse needs.",
    tech: ["React", "HTML/CSS", "Tailwind"],
    feature: "Responsive & Modern Design",
    highlight: "Delivered highly optimized sites prioritizing user experience",
    tag: "Web Development",
    link: "https://github.com/darshanachar",
  },
  {
    title: "AI Chatbot",
    icon: MessageSquare,
    problem: "Automating user interactions to reduce response time and improve engagement.",
    solution: "Developed an NLP-based chatbot with intent recognition for accurate, context-aware responses.",
    tech: ["Python", "NLP"],
    feature: "Intent-based responses",
    highlight: "Improved accuracy via structured intent classification",
    tag: "NLP",
    link: "https://github.com/darshanachar",
  },
  {
    title: "Crop Disease Detection",
    icon: Leaf,
    problem: "Farmers lack quick tools to diagnose crop diseases, leading to delayed treatment.",
    solution: "Built a TensorFlow-powered image classifier to identify crop diseases from leaf images.",
    tech: ["TensorFlow", "Python", "AI"],
    feature: "AI-based image analysis",
    highlight: "Achieved 68% accuracy on disease classification",
    tag: "Deep Learning",
    link: "https://github.com/darshanachar",
  },
];

const filters = ["All", "Web Development", "NLP", "Deep Learning"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 gradient-text inline-block">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${
                filter === f
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              layout
            >
              <TiltCard className="glass p-6 hover-glow group h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">
                    {project.tag}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg mb-3">{project.title}</h3>

                <div className="space-y-3 text-sm flex-grow">
                  <div>
                    <span className="text-primary font-medium">Problem: </span>
                    <span className="text-muted-foreground">{project.problem}</span>
                  </div>
                  <div>
                    <span className="text-primary font-medium">Solution: </span>
                    <span className="text-muted-foreground">{project.solution}</span>
                  </div>
                  <div>
                    <span className="text-primary font-medium">Key Feature: </span>
                    <span className="text-muted-foreground">{project.feature}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <span className="text-secondary font-medium">⚡ {project.highlight}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 rounded-lg bg-muted hover:bg-primary/10 text-xs font-semibold transition-all border border-border"
                >
                  View Project
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

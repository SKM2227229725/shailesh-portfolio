"use client";

import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI Research Paper Summarizer",
    description:
      "AI-powered platform that summarizes research papers with structured insights and a clean UI.",
    image: "/research.png",
    url: "https://github.com/SKM2227229725/AI-ResearchPaper-Summarizer",
    live: "https://reserachinsigher.netlify.app/",
  },
  {
    id: 2,
    title: "Online Payment Fraud Detection",
    description:
      "ML-based system to detect fraudulent transactions using data-driven analysis.",
    image: "/fraud.png",
    url: "https://github.com/SKM2227229725/Online-Payment-Fraud-Detection-using-ML",
  },
  {
    id: 3,
    title: "Coding Club Website",
    description:
      "Responsive website for coding club activities and student engagement.",
    image: "/codingclub.png",
    url: "https://github.com/SKM2227229725/Coding-Club-website",
    live: "https://coding-club-website-sepia.vercel.app/",
  },
   {
    id: 4,
    title: "Location Tracking App",
    description:
      "Mobile application for real-time location tracking and sharing.",
    image: "/location.png",
    url: "https://github.com/SKM2227229725/Location-Tracking-App",
  
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.div
        className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-8 md:gap-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              url={project.url}
              live={project.live}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectSection;
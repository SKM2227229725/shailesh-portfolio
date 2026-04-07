"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI/Software Engineering Intern",
    company: "Infosys Springboard",
    duration: "Nov 2025 – Jan 2026",
    points: [
      "Built an AI-powered research paper summarization platform using NLP and practical ML workflows.",
      "Worked on data preprocessing, model development, and problem-solving for real-world use cases.",
      "Strengthened hands-on skills in AI/ML, NLP, debugging, version control, and clean development practices.",
    ],
    tech: ["Python", "NLP", "Machine Learning", "Django", "Git"],
  },
  {
    role: "Cloud Computing Lead",
    company: "Community for Technology and Coding (CTC) – REC Sonbhadra",
    duration: "July 2025 – Present",
    points: [
      "Led cloud-focused initiatives and peer learning sessions within the student community.",
      "Promoted awareness of cloud technologies and guided students in understanding practical use cases.",
      "Mentored peers in building and exploring cloud-based application workflows.",
    ],
    tech: ["Cloud", "Google Cloud", "Leadership", "Mentorship"],
  },
  {
    role: "AI Intern – Foundations of Artificial Intelligence",
    company: "Microsoft collaboration with Edunet Foundation & AICTE",
    duration: "Apr 2025 – May 2025",
    points: [
      "Studied the core foundations of Artificial Intelligence and Machine Learning.",
      "Implemented basic AI/ML algorithms and explored concepts like neural networks.",
      "Built stronger conceptual understanding of applied AI for real-world problem solving.",
    ],
    tech: ["AI", "ML", "Neural Networks", "Python"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-800 bg-[#161616]/90 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden"
            >
              <div className="h-full border-l-4 border-purple-500 p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 mt-1 font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
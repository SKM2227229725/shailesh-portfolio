"use client";

import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Open Source Contributor",
    desc: "Merged PRs in EROFS docs and contributed to preCICE.",
    link: "https://github.com/erofs/docs/pull/18",
    link2:"https://github.com/erofs/docs/pull/23",
  },
  {
    title: "SIH Participant",
    desc: "Built an Online Automated Timetable Generator.",
  },
  {
    title: "GSoC 2026 Applicant",
    desc: "Submitted proposals backed by real open-source work.",
  },
];

const AchievementSection = () => {
  return (
    <section id="achievements" className="text-white py-14 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-10 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Achievements
        </h2>

        <div className="space-y-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl border border-gray-700 bg-[#1a1a1a] hover:border-purple-500 transition"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-purple-400 hover:text-purple-300"
                >
                  View PR →
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementSection;
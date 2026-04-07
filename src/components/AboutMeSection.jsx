"use client";

import React, { useRef, useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>
          <span className="font-semibold text-white">Languages:</span>{" "}
          Python, C, C++, JavaScript, HTML, CSS
        </li>

        <li>
          <span className="font-semibold text-white">
            Frameworks & Libraries:
          </span>{" "}
          Django, Flask, React, Tailwind CSS, NumPy, Pandas, Matplotlib
        </li>

        <li>
          <span className="font-semibold text-white">Tools:</span>{" "}
          Git, GitHub, VS Code, Jupyter Notebook, Google Colab
        </li>

        <li>
          <span className="font-semibold text-white">Core Areas:</span>{" "}
          Backend Development, Machine Learning, NLP, Data Structures &
          Algorithms, Open Source
        </li>

        <li>
          <span className="font-semibold text-white">Soft Skills:</span>{" "}
          Problem Solving, Communication, Teamwork, Adaptability, Leadership,
          Time Management
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>
          <span className="font-semibold text-white">
            B.Tech in Computer Science and Engineering
          </span>{" "}
          — Rajkiya Engineering College, Sonbhadra
          <br />
          <span className="text-sm text-gray-400">
            2023 – 2027 | SGPA: 8.45
          </span>
        </li>

        <li>
          <span className="font-semibold text-white">
            Intermediate (Class XII)
          </span>{" "}
          — Udit Narayan Inter College, Kushinagar
          <br />
          <span className="text-sm text-gray-400">
            2020 – 2022 | Percentage: 80.4%
          </span>
        </li>

        <li>
          <span className="font-semibold text-white">
            High School (Class X)
          </span>{" "}
          — Smt. Champa Devi U.M.V., Kushinagar
          <br />
          <span className="text-sm text-gray-400">
            2018 – 2020 | Percentage: 82.4%
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certificates",
    content: (
      <div className="space-y-4">
        <div className="p-4 rounded-xl border border-gray-700 bg-[#1a1a1a] hover:shadow-lg transition">
          <h3 className="text-white font-semibold text-lg">
            Adobe Hackathon 2025
          </h3>
          <p className="text-gray-400 text-sm">
            Participated in Adobe National Level Hackathon
          </p>
          <p className="text-gray-500 text-xs mt-1">2025</p>
        </div>

        <div className="p-4 rounded-xl border border-gray-700 bg-[#1a1a1a] hover:shadow-lg transition">
          <h3 className="text-white font-semibold text-lg">
            Umeed Educator – REC Sonbhadra
          </h3>
          <p className="text-gray-400 text-sm">
            Taught students free of cost under college community program
          </p>
          <p className="text-gray-500 text-xs mt-1">Oct 2024</p>
        </div>

        <div className="p-4 rounded-xl border border-gray-700 bg-[#1a1a1a] hover:shadow-lg transition">
          <h3 className="text-white font-semibold text-lg">
            Smart India Hackathon (SIH)
          </h3>
          <p className="text-gray-400 text-sm">
            Participated in college-level hackathon for two consecutive years
          </p>
          <p className="text-gray-500 text-xs mt-1">2024 – 2025</p>
        </div>

        <div className="p-4 rounded-xl border border-gray-700 bg-[#1a1a1a] hover:shadow-lg transition">
          <h3 className="text-white font-semibold text-lg">
            Microsoft Learn Student Ambassador
          </h3>
          <p className="text-gray-400 text-sm">
            Completed Power Platform Fundamentals
          </p>
        </div>
      </div>
    ),
  },
];

const AboutMeSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white min-h-screen mt-10" ref={ref}>
      <div className="md:grid md:grid-cols-[1fr_1.5fr] gap-12 items-center px-1 xl:gap-5 sm:py-6 py-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-start h-full mb-3 md:mb-0"
        >
          <Image
            src="/Young professional focused on work.png"
            width={400}
            height={250}
            alt="Shailesh Kumar"
            className="rounded-2xl object-cover shadow-xl border border-gray-700"
          />
        </motion.div>

        <motion.div
          className="md:mt-0 text-left flex flex-col h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>

          <p className="text-base sm:p-0 text-gray-300 leading-7">
            I am Shailesh Kumar, a CSE student at Rajkiya Engineering College,
            Sonbhadra, focused on backend development, open source, and
            AI-driven applications.
          </p>

          <br />

          <p className="text-gray-300 leading-7">
            I have hands-on experience in ML, NLP, and web development,
            including an 8-week AI/Software Engineering internship at Infosys
            Springboard where I developed an AI-powered research paper
            summarizer.
          </p>

          <br />

          <p className="text-gray-300 leading-7">
            I contribute to open-source projects such as preCICE and EROFS,
            where I work on real-world issues, explore complex codebases, and
            collaborate with maintainers.
          </p>

          <br />

          <p className="text-gray-300 leading-7">
            Core Interests: Backend Systems, Open Source, AI/ML, and Scalable
            Application Development.
          </p>

          <div className="flex flex-row justify-start mt-8 flex-wrap gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certificates")}
              active={tab === "certificates"}
            >
              Certificates
            </TabButton>
          </div>

          <div className="mt-8 min-h-80 transition-all duration-300">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
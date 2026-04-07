"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center mt-5">
      {/* Left Content */}
      <motion.div
        className="col-span-8 sm:pl-15 sm:pr-15 text-center sm:justify-center sm:items-center sm:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="mb-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-white">Hello, I&apos;m </span>
          <br />
          <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block min-w-70 sm:min-w-80 lg:min-w-120">
            <TypeAnimation
              sequence={[
                "Shailesh Kumar |",
                1200,
                "Open-Source Contributor |",
                1200,
                "Backend Developer |",
                1200,
                "GSoC 2026 Applicant |",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-[#ADB7BE] text-base lg:text-lg leading-relaxed max-w-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I am a Computer Science student focused on backend development, 
          open source, and AI-driven applications, with hands-on experience in Machine Learning,
           NLP, and real-world projects.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#contact">
            <button className="px-10 py-4 w-full rounded-full hover:bg-slate-300 text-white sm:w-fit bg-linear-to-br from-blue-500 via-purple-500 to-pink-500">
              Contact Me
            </button>
          </a>

          <a
            href="/Shailesh_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-1 py-1 sm:w-fit w-full rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-7 py-3 text-white">
                Download Resume
              </span>
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="col-span-4 flex justify-center items-center self-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
       <div className="relative w-62.5 h-62.5 lg:w-75 lg:h-110 rounded-3xl overflow-hidden border-5 border-white hidden md:block">
  <Image
    src="/shailesh.png"
    alt="Shailesh Kumar"
    fill
    className="object-cover object-top"
    priority
  />
</div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
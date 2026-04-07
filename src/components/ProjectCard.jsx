"use client";

import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, url, live }) => {
  return (
    <div className="bg-black backdrop-blur-lg p-3 rounded-xl hover:-translate-y-2 transition-all duration-300 shadow-[0_0_25px_rgba(236,72,153,0.3)] flex flex-col h-full">
      <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div
          className="h-52 md:h-60 rounded-t-xl relative group overflow-hidden"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/70 backdrop-blur transition">
            <div className="h-12 w-12 rounded-full border flex items-center justify-center text-white">
              ↗
            </div>
          </div>
        </div>
      </Link>

      <div className="text-white bg-[#181818] py-6 px-4 flex flex-col flex-grow">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm">{description}</p>

        {live && (
          <div className="mt-auto pt-4">
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 transition"
            >
              Live Demo →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
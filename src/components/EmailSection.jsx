"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [state, handleSubmit] = useForm("xjgpjdkv");
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        if (formRef.current) {
          formRef.current.reset();
        }
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section
      ref={ref}
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 my-12 md:my-12 py-12 md:py-24 px-4 md:px-6 gap-8 md:gap-4 relative"
    >
      <div className="absolute top-3/4 -left-4 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.6),transparent_70%)] blur-2xl -translate-x-2 -translate-y-1/2 z-0"></div>

      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        <h5 className="text-4xl font-bold mt-4 my-2 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Let&apos;s Connect
        </h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md leading-7">
          I am actively seeking opportunities in software engineering, backend
          development, and AI/ML. Feel free to reach out for collaboration,
          internships, or full-time opportunities.
        </p>

        <div className="socials flex flex-row gap-3 mt-4">
          <Link href="https://github.com/SKM2227229725" target="_blank">
            <div className="bg-white rounded-lg p-2 hover:scale-110 transition">
              <Image
                src="/github-icon.svg"
                width={24}
                height={24}
                alt="Github Icon"
              />
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/shailesh-kumar-98192a295"
            target="_blank"
          >
            <div className="bg-white rounded-lg p-2 hover:scale-110 transition">
              <Image
                src="/linkedin-icon.svg"
                width={24}
                height={24}
                alt="Linkedin Icon"
              />
            </div>
          </Link>

        
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Or email me directly:
          <span className="text-purple-400"> shailesh91199477@gmail.com</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-20"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col relative z-10"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-md font-medium"
            >
              Your Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              autoComplete="name"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-md font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              autoComplete="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400"
              placeholder="you@gmail.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-md mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              autoComplete="off"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400"
              placeholder="Regarding an opportunity"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-md mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400 resize-none"
              placeholder="Let’s talk about..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="px-6 py-4 w-full rounded-full text-white font-semibold bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-600 cursor-pointer relative z-20 transition-all disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </motion.div>

      {state.succeeded && (
        <motion.p
          className="col-span-1 md:col-span-2 text-green-400 text-center text-lg font-semibold mt-4 p-4 bg-green-900 bg-opacity-20 rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          ✓ Thanks for reaching out! I&apos;ll get back to you soon.
        </motion.p>
      )}

      {state.errors && state.errors.length > 0 && (
        <motion.div
          className="col-span-1 md:col-span-2 text-red-400 text-center text-sm mt-4 p-4 bg-red-900 bg-opacity-20 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>Please check your form for errors:</p>
          {state.errors.map((error, idx) => (
            <p key={idx}>{error.message}</p>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default EmailSection;
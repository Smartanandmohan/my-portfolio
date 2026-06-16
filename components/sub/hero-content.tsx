"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { HeroBg } from "./HeroBg";
import { ContactModal } from "./contact-modal";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-5 md:px-20 mt-24 md:mt-40 w-full z-[20] gap-10 md:gap-0"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 flex-shrink-0" />
          <h2 className="Welcome-text text-[13px] text-center md:text-left">
            Software Developer • Web Developer • App Developer
          </h2>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            ANAND MOHAN DUBEY
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Building modern web applications, SaaS platforms, premium landing pages, dashboards, and interactive digital experiences.
        </motion.p>

        <motion.div variants={slideInFromLeft(1)} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-full sm:max-w-[200px]"
          >
            View Projects
          </a>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="py-2 px-6 border border-cyan-500 hover:bg-cyan-500/20 text-center text-white cursor-pointer rounded-lg w-full sm:max-w-[200px] transition-colors"
          >
            Contact Me
          </button>
          <a
            href="https://github.com/Smartanandmohan"
            target="_blank"
            rel="noreferrer"
            className="py-2 px-6 border border-white/20 hover:bg-white/10 text-center text-white cursor-pointer rounded-lg w-full sm:max-w-[200px] transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <HeroBg className="select-none h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] md:h-[650px] md:w-[650px] max-w-full" />
      </motion.div>
    </motion.div>
    </>
  );
};

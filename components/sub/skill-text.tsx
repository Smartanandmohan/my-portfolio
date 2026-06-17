"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="w-full h-auto flex flex-col items-center justify-center"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 flex-shrink-0" />
        <h2 className="Welcome-text text-[13px] text-center md:text-left">
          Empowered by Modern Frontend Tech
        </h2>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-xl sm:text-2xl md:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] px-4"
      >
        Engineering high-performance web applications.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-base sm:text-lg md:text-[20px] text-gray-200 mb-10 mt-[10px] text-center px-4"
      >
        Fusing clean design with interactive user experiences.
      </motion.div>
    </motion.div>
  );
};

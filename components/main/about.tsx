"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 z-[20] w-full px-5 md:px-20"
    >
      <div className="max-w-[1200px] w-full flex flex-col gap-8 md:gap-16">
        {/* Top Row: About & Personal Statement */}
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft(0.5)}
            className="flex-1 flex flex-col gap-5 text-start"
          >
            <h2 className="text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              About Me
            </h2>
            <p className="text-lg text-gray-400">
              I am <strong>Anand Mohan Dubey</strong>, a Software Developer passionate about building modern web applications, mobile apps, SaaS platforms, AI-powered products, and interactive digital experiences. My focus is on creating scalable, high-performance solutions with clean design, smooth user experiences, and modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromRight(0.5)}
            className="flex-1 flex items-center justify-center p-5 sm:p-8 border border-cyan-500/30 rounded-2xl bg-[#030014]/50 backdrop-blur-md"
          >
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Personal Statement</h3>
              <p className="text-lg sm:text-xl italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                "Building modern web applications, mobile apps, AI-powered platforms, and scalable digital products with exceptional user experiences."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Education & Achievements */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromTop}
            className="flex-1 p-5 sm:p-8 border border-cyan-500/30 rounded-2xl bg-[#030014]/50 backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Education & Training</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Anand Mohan Dubey has completed advanced technical education and training programs from premier institutes:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-3">
              <li>Robotics, Coding & Artificial Intelligence Program from IIT Bombay</li>
              <li>Technical Training Camp completed at IIT Patna</li>
              <li>Continuous learning in Software Development, Artificial Intelligence, and Modern Web Technologies</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromTop}
            className="flex-1 p-5 sm:p-8 border border-cyan-500/30 rounded-2xl bg-[#030014]/50 backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Achievements</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-3">
              <li>Completed Robotics, Coding & Artificial Intelligence Program from IIT Bombay</li>
              <li>Completed Technical Training Camp at IIT Patna</li>
              <li>Built Multiple SaaS and AI-Powered Projects</li>
              <li>Developed Modern Web Applications using React and Next.js</li>
              <li>Specialized in Responsive UI/UX Development</li>
              <li>Created Interactive and Animated User Experiences</li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

export const Services = () => {
  const services = [
    { title: "Software Development", description: "Building robust, scalable, and high-performance software solutions tailored to modern business needs." },
    { title: "Web Development", description: "Creating responsive, fast-loading, and SEO-friendly websites using cutting-edge technologies." },
    { title: "App Development", description: "Designing and developing cross-platform mobile applications with native-like performance." },
    { title: "SaaS Development", description: "Converting complex software processes into intuitive, scalable, and high-converting frontend SaaS products." },
    { title: "Frontend Development", description: "Engineering clean, component-based architectures using React, Next.js, and modern CSS frameworks." },
    { title: "UI/UX Design", description: "Crafting beautiful, user-centric interfaces focused on conversion and seamless user journeys." },
    { title: "Dashboard Development", description: "Building modular, data-rich control panels that remain fully responsive and highly performant." },
    { title: "AI Integration", description: "Implementing AI-powered features, smart analytics, and automated workflows into digital platforms." },
    { title: "Interactive Web Experiences", description: "Leveraging GSAP, Framer Motion, and Three.js to create immersive storytelling interfaces." }
  ];

  return (
    <section id="services" className="flex flex-col items-center justify-center py-20 z-[20] w-full px-5 md:px-20">
      <h2 className="text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-10 text-center">
        Services & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft(0.1 * (idx % 3))}
            className="p-8 border border-cyan-500/30 rounded-2xl bg-[#030014]/50 backdrop-blur-md hover:border-cyan-400 transition-colors"
          >
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

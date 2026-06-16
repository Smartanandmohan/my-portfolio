"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="group relative flex flex-col items-center justify-center cursor-pointer hover:z-[100]"
      title={name}
    >
      <Image src={`/skills/${src}`} width={width} height={height} alt={name} className="group-hover:scale-110 transition-transform duration-300 mb-2 w-auto h-auto" />
      <span className="text-cyan-400 text-sm font-semibold whitespace-nowrap text-center">
        {name}
      </span>
    </motion.div>
  );
};

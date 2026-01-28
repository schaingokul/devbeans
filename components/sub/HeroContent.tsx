"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ This is correct


import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 lg:mt-[-360px] w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start md:ml-[-40px]  sm:ml-[-40px]">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border[#47042f88b]
 opacity-[0.0]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Dev Beans Portfolio</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best</span> project experience</span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          We are a passionate team of developers, designers, and digital creators dedicated to building powerful, user-centric solutions that drive business success. From intuitive mobile applications to dynamic websites and tailored CRM platforms, we deliver digital experiences that inspire and perform.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="#projects"
        >
          Learn More
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import {
  SparklesIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  ClockIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import WhyChooseUs from "../sub/WhychooseUs";
import MeetOurTeam from "../sub/MeetOurTeam";
import ContactUs from "./ContactUs";

const AboutUs = () => {
  return (
    <motion.div
      id="about-us"
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20  overflow-hidden mt-[-50px]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full  opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20"></div>
      </div>

      <motion.div
        variants={slideInFromLeft(0.2)}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center"
      >
        {/* Header section */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#47042f88] opacity-[0.9] mb-8"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Dev Beans Team</h1>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.3)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            About Us
          </span>
        </motion.h1>

        <motion.h2
          variants={slideInFromRight(0.3)}
          className="text-xl sm:text-2xl text-gray-300 text-center max-w-3xl mb-12"
        >
          A small team of passionate nerds building digital excellence
        </motion.h2>

        {/* Team showcase */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 w-full"
        >
          {/* Team member 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 mb-4 flex items-center justify-center">
              <UserGroupIcon className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Developers</h3>
            <p className="text-gray-400 text-center">
              Code artisans crafting robust solutions
            </p>
          </motion.div>

          {/* Team member 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mb-4 flex items-center justify-center">
              <LightBulbIcon className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Designers</h3>
            <p className="text-gray-400 text-center">
              Visual storytellers creating stunning interfaces
            </p>
          </motion.div>

          {/* Team member 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mb-4 flex items-center justify-center">
              <ShieldCheckIcon className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">QA Experts</h3>
            <p className="text-gray-400 text-center">
              Detail-oriented guardians of quality
            </p>
          </motion.div>

          {/* Team member 4 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 flex items-center justify-center">
              <CodeBracketIcon className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">DevOps</h3>
            <p className="text-gray-400 text-center">
              Infrastructure magicians keeping things running
            </p>
          </motion.div>
        </motion.div>

        {/* Core values section */}
        <motion.div variants={slideInFromLeft(0.8)} className="w-full mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Core Values
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Value 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#0f0a2a] rounded-xl p-8 border border-[#2a1b6a]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Beyond Mediocre
                </h3>
              </div>
              <p className="text-gray-400">
              We are not just here to build — we are here to innovate. Our team is dedicated to crafting standout digital solutions that rise above the ordinary. Whether it's a dynamic website, a CRM system, or a social platform, we always aim to exceed expectations and deliver top-tier quality.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#0f0a2a] rounded-xl p-8 border border-[#2a1b6a]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-white">Transparency</h3>
              </div>
              <p className="text-gray-400">
               Every successful project starts with trust. We keep our clients informed at every stage, offering clear timelines, honest feedback, and open communication. From the first idea to the final deployment, you’ll always know where your project stands.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#0f0a2a] rounded-xl p-8 border border-[#2a1b6a]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-white">Best Practices</h3>
              </div>
              <p className="text-gray-400">
              We follow industry-leading standards in every line of code we write. From scalable mobile apps to secure CRM systems, we build with reliability, performance, and long-term maintainability in mind. Best practices aren’t optional — they’re the foundation of everything we do.
              </p>
            </motion.div>

            {/* Value 4 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#0f0a2a] rounded-xl p-8 border border-[#2a1b6a]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-white">Client Focus</h3>
              </div>
              <p className="text-gray-400">
              We don't just deliver projects — we deliver impact. Your goals drive our work. Our solutions are built to help your business grow, reach your users more effectively, and stand out in a competitive market. Your success is our mission.
              </p>
            </motion.div>
          </div>
        </motion.div>
   <motion.div
          variants={slideInFromLeft(0.8)}
          className="w-full max-w-4xl bg-gradient-to-r from-[#3a1b6a] to-[#1a103d] rounded-xl p-8 sm:p-12 border border-[#3a1b6a] text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to work with passionate nerds?
          </h3>
          <p className="text-gray-300 mb-8">
            Let's create something amazing together.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white font-medium shadow-lg"
          >
            Get in Touch
          </motion.a>
        </motion.div>
        <WhyChooseUs />
        <MeetOurTeam />
        {/* CTA section */}
     
      </motion.div>
     
    </motion.div>
  );
};

export default AboutUs;

"use client";

import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  CheckBadgeIcon,
  RocketLaunchIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";

const WhyChooseUs = () => {
  const AnimatedCounter = ({
    target,
    duration = 2,
  }: {
    target: number;
    duration?: number;
  }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
      const animation = animate(count, target, {
        duration,
        onComplete: () => {
          setTimeout(() => {
            count.set(0);
            animation.play();
          }, 1000);
        },
      });

      return () => animation.stop();
    }, [count, target, duration]);

    return <motion.span>{rounded}</motion.span>;
  };
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative w-full py-20 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-fullopacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20"></div>
      </div>

      <motion.div
        variants={slideInFromTop}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center"
      >
        {/* Header section */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#47042f88] opacity-[0.9] mb-8"
        >
          <RocketLaunchIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Our Advantages</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.3)}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6"
        >
          Why{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Choose Us?
          </span>
        </motion.h2>

        <motion.p
          variants={slideInFromRight(0.3)}
          className="text-lg text-gray-300 text-center max-w-3xl mb-12"
        >
          We combine technical expertise with creative thinking to deliver
          exceptional results that drive your business forward.
        </motion.p>

        <div className="w-full flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Features */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="w-full lg:w-1/2 space-y-8"
          >
            {/* Feature 1 */}
            <motion.div
              whileHover={{ x: 10 }}
              className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] flex items-start"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 mr-4 flex-shrink-0">
                <CheckBadgeIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Growing Expertise
                </h3>
                <p className="text-gray-400">
                  We're a passionate team of developers with hands-on experience
                  in building 25+ successful web and mobile projects in just one
                  year.{" "}
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ x: 10 }}
              className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] flex items-start"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 mr-4 flex-shrink-0">
                <ClockIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Agile & On-Time
                </h3>
                <p className="text-gray-400">
                  As a startup, speed is in our DNA. We follow agile development
                  methods to ensure fast turnaround times without compromising
                  quality — helping you launch quicker and stay ahead of the
                  curve.{" "}
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ x: 10 }}
              className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] flex items-start"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 mr-4 flex-shrink-0">
                <CurrencyDollarIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {" "}
                  Startup-Friendly Pricing
                </h3>
                <p className="text-gray-400">
                  We offer premium solutions at affordable rates tailored for
                  startups, small businesses, and entrepreneurs. Our streamlined
                  processes ensure you get the best value for your investment.{" "}
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              whileHover={{ x: 10 }}
              className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] flex items-start"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 mr-4 flex-shrink-0">
                <CpuChipIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Modern Tech Stack
                </h3>
                <p className="text-gray-400">
                  From React, Node.js, and Next.js to cutting-edge frameworks
                  like Flutter and GraphQL, we use the latest technologies to
                  build scalable, secure, and future-ready solutions.{" "}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Rocket image with more energetic floating animation */}
              <motion.div
                animate={{
                  y: [0, -15, 0, -5, 0],
                  rotate: [0, 1, -1, 0.5, 0],
                  scale: [1, 1.03, 1.01, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/zet.png"
                  alt="Why choose us illustration"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* More active glow effects */}
              <motion.div
                animate={{
                  y: [0, -25, 10, -15, 0],
                  x: [0, 15, -10, 5, 0],
                  opacity: [0.3, 0.8, 0.4, 0.7, 0.3],
                  scale: [1, 1.3, 0.9, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 left-8 w-20 h-20 bg-purple-600/40 rounded-full blur-xl"
              />

              <motion.div
                animate={{
                  y: [-20, 20, -10, 15, -20],
                  x: [-10, 10, -5, 8, -10],
                  opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
                  scale: [1, 1.4, 0.8, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute bottom-8 right-8 w-24 h-24 bg-cyan-600/40 rounded-full blur-xl"
              />

              {/* Fast-moving particles */}
              <motion.div
                animate={{
                  y: [0, -40, 20, -30, 0],
                  x: [0, 25, -15, 10, 0],
                  opacity: [0, 0.8, 0, 0.6, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1,
                }}
                className="absolute top-1/4 right-1/4 w-6 h-6 bg-white/20 rounded-full blur-sm"
              />

              <motion.div
                animate={{
                  y: [-15, 30, -20, 25, -15],
                  x: [15, -20, 10, -15, 15],
                  opacity: [0, 0.7, 0, 0.5, 0],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/20 rounded-full blur-sm"
              />

              {/* Trail effect */}
              <motion.div
                animate={{
                  scaleX: [0.8, 1.2, 0.9],
                  opacity: [0.2, 0.5, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-t from-purple-500/30 to-transparent blur-md"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(1)}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-20"
        >
          {/* Stat 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] text-center"
          >
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
              <AnimatedCounter target={25} duration={3} />+
            </div>
            <p className="text-gray-300">Projects Completed</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] text-center"
          >
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
              <AnimatedCounter target={98} duration={3} />%
            </div>
            <p className="text-gray-300">Client Satisfaction</p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] text-center"
          >
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
              <AnimatedCounter target={20} duration={3} />+
            </div>
            <p className="text-gray-300">Happy Clients</p>
          </motion.div>

          {/* Stat 4 - For 24/7 you might want a different animation since it's not a number */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] text-center"
          >
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
              24/7
            </div>
            <p className="text-gray-300">Support Available</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;

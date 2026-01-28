"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { LiaLinkedin } from "react-icons/lia";
import { DiGithub } from "react-icons/di";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Vignesh Balan",
      role: "Mobile App Developer",
      bio: "Mobile Development wizard with 1+ years of experience building scalable web applications. Specializes in React Native, Node.js, and cloud architecture.",
      image: "/vignesh.jpg", // Replace with your image path
      social: {
        linkedin: "https://www.linkedin.com/in/vignesh-balan-mvgs/",
        github: "https://github.com/vigneshbalan-mvgs",
        email: "vigneshbalanmvgs2003@gmail.com",
      },
    },
    {
      id: 2,
      name: "Gokul Eshwaran",
      role: "Backend Developer",
      bio: "Full Stack Backend Developer wizard with 4+ years of experience building scalable web applications. Specializes in React, Node.js,Express and cloud architecture.",
      image: "/gokul.jpeg", // Replace with your image path
      social: {
        linkedin: "https://www.linkedin.com/in/gokul-e-248077170/",
        GitHub:"https://github.com/schaingokul",
        email: "schaingokul@gmail.com",
      },
    },
    {
      id: 3,
      name: "Nasrin Fathima",
      role: "Frontend devleoper",
      bio: "Infrastructure specialist ensuring seamless deployments and 99.99% uptime. Loves automating everything.",
      image: "/nasrin.jpg", // Replace with your image path
      social: {
        linkedin: "https://www.linkedin.com/in/nasrin-fathima-652a62327/",
        email: "banuv149@gmail.com",
      },
    },
  ];

  return (
    <motion.div
      id="meet-our-team"
      initial="hidden"
      animate="visible"
      className="relative w-full flex flex-col items-center justify-center px-4 sm:px-8 py-20 overflow-hidden"
    >
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
          Meet{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Our Team
          </span>
        </motion.h1>

        <motion.p
          variants={slideInFromRight(0.3)}
          className="text-lg text-gray-300 text-center max-w-3xl mb-12"
        >
          The passionate individuals behind Dev beans who turn ideas into
          reality.
        </motion.p>

        {/* Team members grid */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-20"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              animate={{
                y: [0, -5, 0],
                boxShadow: [
                  "0 4px 6px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px rgba(125, 59, 236, 0.2)",
                  "0 4px 6px rgba(0, 0, 0, 0.1)",
                ],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative bg-[#0f0a2a] rounded-2xl p-8 border border-[#2a1b6a] flex flex-col items-center"
            >
              {/* Floating animation for profile image */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-40 h-40 rounded-full border-4 border-[#3a1b6a] mb-6 overflow-hidden"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                {/* Animated gradient overlay */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full"
                />
              </motion.div>

              {/* Name with subtle glow */}
              <motion.h3
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 8px rgba(199, 210, 254, 0.3)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="text-2xl font-bold text-white mb-2"
              >
                {member.name}
              </motion.h3>

              <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium mb-4">
                {member.role}
              </div>

              <p className="text-gray-400 text-center mb-6">{member.bio}</p>

              {/* Social links with staggered animation */}
              <div className="flex gap-4">
                {member.social.linkedin && (
                  <motion.a
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    whileHover={{ scale: 1.3 }}
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0077b5]"
                  >
                    <LiaLinkedin className="h-6 w-6" />
                  </motion.a>
                )}
                {member.social.github && (
                  <motion.a
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: 0.1 + index * 0.3,
                    }}
                    whileHover={{ scale: 1.3 }}
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <DiGithub className="h-6 w-6" />
                  </motion.a>
                )}
                <motion.a
                  animate={{
                    y: [0, -3, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 0.2 + index * 0.3,
                  }}
                  whileHover={{ scale: 1.3 }}
                  href={`mailto:${member.social.email}`}
                  className="text-gray-400 hover:text-cyan-400"
                >
                  <EnvelopeIcon className="h-6 w-6" />
                </motion.a>
              </div>

              {/* Background floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 left-4 w-12 h-12 bg-purple-600/10 rounded-full blur-lg -z-10"
              />
              <motion.div
                animate={{
                  y: [10, -5, 10],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-4 right-4 w-14 h-14 bg-cyan-600/10 rounded-full blur-lg -z-10"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Team collaboration section */}
        {/* <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full max-w-4xl bg-gradient-to-r from-[#3a1b6a] to-[#1a103d] rounded-xl p-8 sm:p-12 border border-[#3a1b6a] text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Collaboration is our superpower</h3>
          <p className="text-gray-300 mb-6">
            We combine our diverse skills to create solutions that are greater than the sum of their parts.
          </p>
          <motion.p 
            variants={slideInFromLeft(1)}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium"
          >
            Want to join our team? We're always looking for talented individuals.
          </motion.p>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default MeetOurTeam;

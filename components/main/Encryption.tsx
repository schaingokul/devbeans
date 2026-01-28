"use client"

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center w-full h-full lg:min-h-screen xl:min-h-screen lg:mt-[-450px] xl:mt-[-450px] 2xl:mt-[-450px]">
      <div className="absoulte w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200 translate-y-[-350px] lg:translate-y-[-350px] xl:translate-y-[-350px] 2xl:translate-y-[-350px]z-[20]"
        >
         Performonce
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &
          </span>{" "}
          security
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto mt-[180px]">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
            <Image
            src="/Locktop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            />
             <Image
            src="/LockMain.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
            />
        </div>
        <div className="Welcome-box px-[15px] py-[4px] z-[20] border-[#7042f88b] opacity-[0.9]">
            <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20]  px-[5px]">
      <div className="text-[20px] font-medium text-center sm:mt-[-240px] mt-[-260px] lg:mt-[-300px] xl:mt-[-300px] 2xl:mt-[300px] text-gray-300">
        Secure your data with our advanced encryption solutions
      </div>
      </div>
      <div className="w-full flex items-center justify-center absolute mt-[100px] ">
        <video
        loop
        muted
        autoPlay
        playsInline
        preload='false'
        className="w-full h-auto"
        src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;

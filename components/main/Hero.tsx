'use client'

import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="flex flex-col h-full w-full lg:mt-[-270px] " id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotaate-100 absolute-top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent/>
    </div>
  );
};

export default Hero;

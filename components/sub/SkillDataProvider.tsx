"use client"

import React from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Image from 'next/image'
interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}
const SkillDataProvider: React.FC<Props> = ({ src, width, height, index }) => {
    const {ref,inView}=useInView({
        triggerOnce:true,
    })
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1},
    };
    const animationDelay=0.3
  return (
    <motion.div 
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={imageVariants}
    ref={ref}
    custom={index}
    transition={{delay: index * animationDelay}}
    >
<Image 
src={src}
width={width}
height={height}
alt="skills image"
/>
    </motion.div>
  )
}

export default SkillDataProvider



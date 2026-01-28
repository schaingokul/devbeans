"use client";
import React from "react";
interface Props {
  src: string;
  title: string;
  description: string;
}
import Image from "next/image";
const ProjectCart: React.FC<Props> = ({ src, title, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2a0e61] h-[430px] ">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="object-contain "
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCart;

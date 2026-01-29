// import React from "react";
// import Image from "next/image"; // ✅ This is correct
// import { Socials } from "@/constants";

// const Navbar = () => {
//   return (
//     <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
//       <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
//         <a
//           href="#about-me"
//           className="h-auto w-auto flex flex-row items-center"
//         >
//           <Image
//             src="/devbeanslogo.png"
//             alt="logo"
//             height={70}
//             width={70}
//             className="cursor-pointer hover:animate-slowspin"
//           />
//           <span className="font-extrabold  ml-[6px] hidden md:block text-white ">
//             Dev
//           </span>
//           <span className=" font-extrabold text-xl ml-[10px] hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
//             Beans
//           </span>
//         </a>
//         <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
//           <div className="flex items-center  justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] py-[10px] px-[20px] rounded-full text-gray-200">
//             <a href="#about-me" className="cursor-pointer ">
//               About
//             </a>
//             <a href="#skills" className="cursor-pointer ">
//               Our Skills
//             </a>

//             <a href="#projects" className="cursor-pointer ">
//               Projects
//             </a>
//           </div>
//         </div>
//         <div className="flex flex-row gap-5">
//             {Socials.map((social) => (
//                 <Image src={social.src} alt={social.name} key={social.name} width={24} height={24}  />
//             ))}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/devbeanslogo.png"
            alt="logo"
            height={70}
            width={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-extrabold ml-2 hidden md:block text-white">
            Dev
          </span>
          <span className="font-extrabold text-xl ml-1 hidden md:block text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-cyan-500">
            Beans
          </span>
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] py-[10px] px-[20px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer hover:text-purple-300 transition-colors"
            >
              Home
            </a>
            {/* <a href="#skills" className="cursor-pointer hover:text-purple-300 transition-colors">
              Our Technologies
            </a> */}
            <a
              href="#projects"
              className="cursor-pointer hover:text-purple-300 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#about-us"
              className="cursor-pointer hover:text-purple-300 transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="cursor-pointer hover:text-purple-300 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* Social Icons - Desktop */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 right-0 bg-[#030014] backdrop-blur-md shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4 text-center">
            <a
              href="#about-me"
              className="text-gray-200 hover:text-purple-300 transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-200 hover:text-purple-300 transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Our Skills
            </a>
            <a
              href="#projects"
              className="text-gray-200 hover:text-purple-300 transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Projects
            </a>

            <div className="flex justify-center space-x-6 pt-4">
              {Socials.map((social) => (
                <a
                  href={social.link}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMobileMenu}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

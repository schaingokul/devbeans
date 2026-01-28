// import Link from "next/link";
// import React from "react";
// import {
//   FaYoutube,
// //   RxInstagramLogo,
// //   RxLinkedinLogo,
// //   RxTwitterLogo,
// } from "react-icons/fa";
// import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
// const Footer = () => {
//   return (
//     <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
//       <div className="flex flex-col items-center w-full justify-centerm-auto">
//         <div className="w-full h-full flex flex-row md:flex-col items-center justify-around flex-wrap">
//           <div className="min-w[200px] h-auto flex flex-col items-center justify-start">
//             <div className="font-boldtext-[16px]">Community</div>
//             <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <FaYoutube />
//               <span className="text-[15px] ml-[6px]">Youtube</span>
//             </p>
//              {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <RxGithubLogo />
//               <span className="text-[15px] ml-[6px]"><a href="https://github.com/vigneshbalan-mvgs">Github</a></span>
//             </p> */}
//  <div className="flex flex-row items-center my-[15px] group cursor-pointer">
//       <RxGithubLogo className="group-hover:text-blue-400 transition-colors" />
//       <Link 
//         href="https://github.com/vigneshbalan-mvgs"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="ml-2 text-[15px] hover:underline text-blue-400 hover:text-blue-300 transition-colors"
//       >
//         Github
//       </Link>
//     </div>
//              <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <RxDiscordLogo />
//               <span className="text-[15px] ml-[6px]">Discord</span>
//             </p>
//           </div>
//     <div className="min-w[200px] h-auto flex flex-col items-center justify-start">
//             <div className="font-boldtext-[16px]">Social-Media</div>
//             <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <FaYoutube />
//               <span className="text-[15px] ml-[6px]">Instagram</span>
//             </p>
//              <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <RxGithubLogo />
//               <span className="text-[15px] ml-[6px]">Twiter</span>
//             </p>
//              <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <RxDiscordLogo />
//               <span className="text-[15px] ml-[6px]">Linkedin</span>
//             </p>
//           </div>
//             <div className="min-w[200px] h-auto flex flex-col items-center justify-start">
//             <div className="font-boldtext-[16px]">About</div>
//             <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <span className="text-[15px] ml-[6px]">Become Sponsor</span>
//             </p>
//              <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <span className="text-[15px] ml-[6px]">Learning About Me</span>
//             </p>
//              <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <span className="text-[15px] ml-[6px]">nasrin@gmail.com</span>
//             </p>
//           </div>
//         </div>
//         <div className='mb-[20px] text-[15px] text-center'>
//           &copy; Dev Beans 2025 Inc. All Rights reserved
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { RxDiscordLogo, RxGithubLogo, RxInstagramLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 relative">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start justify-between">
          
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center sm:items-start">
            <div className="font-bold text-lg mb-4">Community</div>
            <Link 
              href="https://www.youtube.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 group cursor-pointer w-full"
            >
              <FaYoutube className="group-hover:text-red-500 transition-colors" />
              <span className="text-[15px] ml-2 group-hover:text-blue-400 transition-colors">Youtube</span>
            </Link>
            
            <Link 
              href="https://github.com/mvgsio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 group cursor-pointer w-full"
            >
              <RxGithubLogo className="group-hover:text-purple-500 transition-colors" />
              <span className="text-[15px] ml-2 group-hover:text-blue-400 transition-colors">Github</span>
            </Link>
            
            <Link 
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 group cursor-pointer w-full"
            >
              <RxDiscordLogo className="group-hover:text-indigo-500 transition-colors" />
              <span className="text-[15px] ml-2 group-hover:text-blue-400 transition-colors">Discord</span>
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center sm:items-start">
            <div className="font-bold text-lg mb-4">Social Media</div>
            <Link 
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 group cursor-pointer w-full"
            >
              <RxInstagramLogo className="group-hover:text-pink-500 transition-colors" />
              <span className="text-[15px] ml-2 group-hover:text-blue-400 transition-colors">Instagram</span>
            </Link>
            
            <Link 
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 group cursor-pointer w-full"
            >
              <RxTwitterLogo className="group-hover:text-blue-400 transition-colors" />
              <span className="text-[15px] ml-2 group-hover:text-blue-400 transition-colors">Twitter</span>
            </Link>
            
            <Link 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 group cursor-pointer w-full"
            >
              <RxLinkedinLogo className="group-hover:text-blue-600 transition-colors" />
              <span className="text-[15px] ml-2 group-hover:text-blue-400 transition-colors">LinkedIn</span>
            </Link>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center sm:items-start">
            <div className="font-bold text-lg mb-4">About</div>
            <Link 
              href="/sponsor" 
              className="flex flex-row items-center my-3 group cursor-pointer w-full"
            >
              <span className="text-[15px] ml-2 group-hover:text-blue-400 transition-colors">Become Sponsor</span>
            </Link>
            
            <Link 
              href="/about" 
              className="flex flex-row items-center my-3 group cursor-pointer w-full"
            >
              <span className="text-[15px] ml-2 group-hover:text-blue-400 transition-colors">Learning About Me</span>
            </Link>
            
            <Link 
              href="mailto:nasriyafa2808@gmail.com" 
              className="flex flex-row items-center my-3 group cursor-pointer w-full"
            >
              <span className="text-[15px] ml-2 group-hover:text-blue-400 transition-colors">nasrin@gmail.com</span>
            </Link>
          </div>
        </div>

        <div className='mt-8 mb-4 text-[15px] text-center'>
          &copy; Dev Beans 2025 Inc. All Rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
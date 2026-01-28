"use client";
import React, { useState } from "react";
import ProjectCart from "../sub/ProjectCart";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
interface Service {
  src: string;
  title: string;
  description: string;
  details?: string; // Add more details for the modal
}

const Projects = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services: Service[][] = [
    [
      {
        src: "/service1.jpg",
        title: "Business Website Development",
        description:
          "Build responsive, elegant websites for clinics, portfolios, consultants & shops.",
        details:
          "We create modern, mobile-friendly websites tailored to your business needs. Our websites are optimized for performance and SEO to help you reach more customers.",
      },
      {
        src: "/service8.avif",
        title: "Custom Web Applications",
        description:
          "Advanced platforms with login, dashboard, backend & dynamic features.",
        details:
          "From CRM systems to custom SaaS solutions, we build web applications that streamline your business processes with secure authentication and real-time data.",
      },
      {
        src: "/service3.avif",
        title: "Mobile App + Website (Starter)",
        description:
          "Launch MVPs with an Android app, admin panel & website to validate your idea.",
        details:
          "Perfect for startups, we help you quickly launch a minimum viable product to test your concept with real users and gather valuable feedback.",
      },
      {
        src: "/service4.png",
        title: "Mobile App + Website (Complete)",
        description:
          "Full-stack mobile + web solutions for scaling startups & growing products.",
        details:
          "End-to-end development of production-ready applications with scalable architecture, CI/CD pipelines, and comprehensive testing.",
      },
    ],
    [
      {
        src: "/service5.jpg",
        title: "Ongoing Project Completion",
        description:
          "We help complete paused or half-built projects with code review & enhancements.",
        details:
          "We'll audit your existing codebase, identify bottlenecks, and bring your project to completion with modern best practices and improved architecture.",
      },
      {
        src: "/service6.jpg",
        title: "Quick Fixes & Minor Enhancement",
        description:
          "Small UI updates, bug fixes or content adjustments for existing products.",
        details:
          "Fast turnaround for minor improvements, security patches, or design refreshes to keep your product up-to-date without major development cycles.",
      },
      {
        src: "/service10.jpg",
        title: "Express Delivery Services",
        description:
          "We help complete paused or half-built projects with code review & enhancements.",
        details:
          "Urgent development needs met with our rapid response team, delivering critical features or fixes within tight deadlines.",
      },
      {
        src: "/service9.jpg",
        title: "Add-on Features & Integrations",
        description:
          "Boost your product with SEO, analytics, real-time chat, AI bots, and more.",
        details:
          "Enhance your existing product with powerful integrations like payment gateways, analytics, chatbots, or third-party APIs to expand functionality.",
      },
    ],
  ];

  const handleCardClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };
  return (
    <div
      className="flex flex-col items-center justify-center py-20 gap-20 mt-[-400px] mb-[450px]"
      id="projects"
    >
      {/* <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Services
      </h1> */}
      <motion.h1
        variants={slideInFromLeft(0.3)}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-6"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Our services
        </span>
      </motion.h1>
      {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCart
          src="/service1.jpg"
          title="Business Website Development"
          description="Build responsive, elegant websites for clinics, portfolios, consultants & shops."
        />
        <ProjectCart
          src="/service8.avif"
          title="Custom Web Applications"
          description="Advanced platforms with login, dashboard, backend & dynamic features."
        />
        <ProjectCart
          src="/service3.avif"
          title="Mobile App + Website (Starter)"
          description="Launch MVPs with an Android app, admin panel & website to validate your idea."
        />
          <ProjectCart
          src="/service4.png"
          title="Mobile App + Website (Complete)"
          description="	Full-stack mobile + web solutions for scaling startups & growing products."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      
        <ProjectCart
          src="/service5.jpg"
          title="Ongoing Project Completion"
          description="We help complete paused or half-built projects with code review & enhancements."
        />
           <ProjectCart
          src="/service6.jpg"
          title="Quick Fixes & Minor Enhancements"
          description="Small UI updates, bug fixes or content adjustments for existing products."
        />
           <ProjectCart
          src="/service10.jpg"
          title="Express Delivery Services"
          description="We help complete paused or half-built projects with code review & enhancements."
        />
           <ProjectCart
          src="/service9.jpg"
          title="Add-on Features & Integrations"
          description="Boost your product with SEO, analytics, real-time chat, AI bots, and more."
        />
      </div> */}
      {services.map((serviceGroup, groupIndex) => (
        <div
          key={groupIndex}
          className="h-full w-full flex flex-col md:flex-row gap-10 px-10"
        >
          {serviceGroup.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(service)}
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <ProjectCart
                src={service.src}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      ))}

      {/* {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center backdrop-blur-xl justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-cyan-400 text-2xl"
              >
                &times;
              </button>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src={selectedService.src} 
                      alt={selectedService.title}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                      {selectedService.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{selectedService.description}</p>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-2">Service Details</h3>
                      <p className="text-gray-300">{selectedService.details}</p>
                    </div>
                    <div className="mt-6">
                      <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                        Get This Service
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )} */}
      {isModalOpen && selectedService && (
        <>
          {/* Blur Backdrop - Separate element */}
          <div className="fixed inset-0 bg-violet-600 bg-opacity-30 backdrop-blur-xl z-40"></div>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-cyan-400 text-2xl"
                >
                  &times;
                </button>

                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={selectedService.src}
                        alt={selectedService.title}
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                        {selectedService.title}
                      </h2>
                      <p className="text-gray-300 mb-4">
                        {selectedService.description}
                      </p>
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Service Details
                        </h3>
                        <p className="text-gray-300">
                          {selectedService.details}
                        </p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#contact"
                          onClick={closeModal} // Close the modal when clicking
                          className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity inline-block text-center"
                        >
                          Get This Service
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;

"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import {
  SparklesIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_dclt9uk", // Replace with your actual service ID
        "template_nz3gsvb", // Replace with your actual template ID
        form.current,
        "6ixpL0JSlarG3DXMk", // Replace with your actual public key
      )
      .then(
        () => {
          setSubmitStatus("success");
          form.current?.reset();
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setSubmitStatus("error");
          setIsSubmitting(false);
        },
      );
  };

  return (
    <motion.div
      id="contact"
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 -top-50  sm:px-8 py-20 overflow-hidden "
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#47042f88] opacity-[0.9] mb-8"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Get In Touch</h1>
      </motion.div>
      <motion.h1
        variants={slideInFromLeft(0.3)}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
      >
        Contact{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Our Team
        </span>
      </motion.h1>

      <motion.p
        variants={slideInFromRight(0.3)}
        className="text-lg text-gray-300 mb-12"
      >
        Have a project in mind or want to discuss potential opportunities? Reach
        out to us - we d love to hear from you!
      </motion.p>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20"></div>

        {/* Animated floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyan-600/10 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={slideInFromLeft(0.2)}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center"
      >
        {/* Left side - Contact info */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-full lg:w-1/2 space-y-8"
        >
          {/* Contact cards */}
          <motion.div variants={slideInFromLeft(0.7)} className="space-y-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] flex items-start"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 mr-4 flex-shrink-0">
                <EnvelopeIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <a
                  href="mailto:banuv149@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  banuv149@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] flex items-start"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 mr-4 flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-400"> 8825856510</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-[#0f0a2a] rounded-xl p-6 border border-[#2a1b6a] flex items-start"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 mr-4 flex-shrink-0">
                <MapPinIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Our Location
                </h3>
                <p className="text-gray-400">Madurai, Tamil Nadu, India</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side - Contact form */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full lg:w-1/2 h-full"
        >
          <div className="max-w-2xl mx-auto mt-10 bg-[#0f0a2a] p-6 rounded-xl border border-[#2a1b6a]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send us a message
            </h2>

            {submitStatus === "success" && (
              <p className="text-green-400 mb-4">
                ✅ Message sent successfully!
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-red-400 mb-4">
                ❌ Something went wrong. Please try again.
              </p>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label className="block text-gray-300 mb-3">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded bg-[#07051a] text-white border border-[#2a1b6a]"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-3">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded bg-[#07051a] text-white border border-[#2a1b6a]"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-3">Your Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded bg-[#07051a] text-white border border-[#2a1b6a]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 mt-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;

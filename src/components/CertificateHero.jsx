// src/components/CertificatesHero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/c.jpg"; // reuse background
import { Link } from "react-router-dom";

export default function CertificatesHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden font-cursive1">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Usmani Decor Background"
          className="w-full h-full object-cover brightness-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 sm:px-16 lg:px-24 z-10 max-w-4xl"
      >
        {/* Sub Heading */}
        <h2 className="text-sm sm:text-lg text-[#D4AF37] tracking-widest uppercase mb-4">
          Our Certificates
        </h2>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Proven <span className="text-[#D4AF37]">Excellence</span> &{" "}
          <span className="text-[#C62828]">Authenticity</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 sm:text-lg mb-8 leading-relaxed">
          At <span className="font-semibold text-[#D4AF37]">Usmani Decor</span>, 
          our certifications reflect our commitment to{" "}
          <span className="font-semibold text-[#1A609F]">quality</span>,{" "}
          <span className="font-semibold text-[#C62828]">trust</span>, and{" "}
          <span className="font-semibold text-[#888888]">reliability</span>. 
          Verified excellence in every service we provide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="#certificates-section"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(26,96,159,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-[#1A609F] hover:bg-[#C62828] text-white font-semibold shadow-lg transition"
          >
            View Certificates
          </motion.a>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(212,175,55,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/about"
              target="_blank"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C62828] text-black font-semibold shadow-lg transition"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Floating Premium Shapes */}
        <div className="absolute top-10 left-5 w-16 h-16 bg-[#D4AF37]/40 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#1A609F]/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-[#C62828]/40 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </motion.div>
    </section>
  );
}

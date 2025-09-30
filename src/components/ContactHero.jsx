// src/components/ContactHero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/usmania/u10.jpg"; // reuse background

export default function ContactHero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden font-cursive1">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Usmani Decor Background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 sm:px-16 lg:px-24 z-10 max-w-4xl"
      >
        <h2 className="text-sm sm:text-lg text-[#D4AF37] tracking-widest uppercase mb-4">Contact Us</h2>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Let's Transform Your <span className="text-[#FFD700]">Space</span> into <span className="text-[#3CB371]">Luxury</span>
        </h1>
        <p className="text-gray-200 sm:text-lg mb-8 leading-relaxed">
          Reach out to <span className="font-semibold text-[#D4AF37]">Usmani Decor</span> for premium interior solutions that blend 
          <span className="font-semibold text-[#1A609F]"> style</span>, 
          <span className="font-semibold text-[#239554]"> comfort</span>, and 
          <span className="font-semibold text-[#FFD700]"> elegance</span>. 
          We're here to make your dream space a reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="tel:+917017479896"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(26,96,159,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-[#1A609F] hover:bg-[#239554] text-white font-semibold shadow-lg transition"
          >
            Call Now
          </motion.a>
          <motion.a
            href="mailto:Usmanidecoraligarh@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(212,175,55,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#239554] text-black font-semibold shadow-lg transition"
          >
            Email Us
          </motion.a>
        </div>

        {/* Floating Premium Shapes */}
        <div className="absolute top-10 left-5 w-16 h-16 bg-[#D4AF37]/40 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#1A609F]/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-[#239554]/30 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </motion.div>
    </section>
  );
}

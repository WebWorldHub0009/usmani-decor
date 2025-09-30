// src/components/GalleryHero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/About/h2.avif"; // ✅ Replace with gallery bg image

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden font-cursive1">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Usmani Decor Gallery"
          className="w-full h-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>
      </div>

      {/* Floating Luxury Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#D4AF37]/40 to-[#FF0000]/40 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-16 right-20 w-40 h-40 bg-gradient-to-r from-[#003B73]/40 to-[#FFD700]/30 rounded-full blur-3xl animate-pulse-slow delay-700"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 sm:px-12 lg:px-20 max-w-5xl"
      >
        <h2 className="text-sm sm:text-lg tracking-widest uppercase text-[#FFD700] mb-4 font-semibold">
          Our Premium Showcase
        </h2>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          Discover <span className="text-[#1A609F]">Elegance</span>,{" "}
          <span className="text-[#FF3333]">Style</span> &{" "}
          <span className="text-[#FFD700]">Luxury</span>
        </h1>

        <p className="mt-6 text-gray-200 text-lg sm:text-xl leading-relaxed font-serif">
          Step into the <span className="text-[#FFD700] font-bold">Usmani Decor</span>{" "}
          gallery – where every detail reflects{" "}
          <span className="text-[#1A609F]">sophistication</span>,{" "}
          <span className="text-[#FF3333]">passion</span>, and{" "}
          <span className="text-[#FFD700]">craftsmanship</span>.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
         
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(255,215,0,0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-[#FFD700] text-black font-bold shadow-xl transition"
          >
            Book Consultation
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

// src/components/ServicesHero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/Bn4.jpg"; 

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[90vh] md:h-[80vh] bg-black overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Usmani Decor Services"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center h-full text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-cursive1 lg:text-7xl font-extrabold text-white tracking-wide leading-tight">
          Transforming Spaces into <span className="text-[#D4AF37]">Luxury</span>
        </h1>
        <p className="mt-6 md:mt-8 font-cursive2 text-lg md:text-xl text-gray-200 max-w-xl">
          At Usmani Decor, we bring your dream interiors to life with premium designs,
          exquisite craftsmanship, and attention to every detail. Experience elegance
          that speaks.
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-6">
        
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="border border-[#D4AF37] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-[#D4AF37]/20 blur-3xl animate-blob"
      ></motion.div>
      <motion.div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#D4AF37]/30 blur-3xl animate-blob animation-delay-2000"
      ></motion.div>
    </section>
  );
}

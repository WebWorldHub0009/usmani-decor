// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/services/inte.jpg";

const OurStory = () => {
  return (
    <section className="relative w-full py-12 md:py-10 overflow-hidden font-cursive1 ">
      
      {/* Background grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full -z-20"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0 L0 0 0 60"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.5"
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Background golden/glow elements */}
      <div className="absolute -top-40 -left-40 w-72 h-72 bg-[#FFD700]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse-slow delay-500"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-cursive2 font-extrabold text-[#1C1C1C] leading-tight">
            Transforming Spaces into <span className="text-[#D4AF37]">Luxury</span> and <span className="text-[#3CB371]">Elegance</span>
          </h2>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold text-[#D4AF37]">Usmani Decor</span>, we specialize in creating interiors that balance 
            <span className="text-[#D4AF37] font-medium"> style</span>, 
            <span className="text-[#1A609F] font-medium"> comfort</span>, and 
            <span className="text-[#239554] font-medium"> functionality</span>. 
            Every project is meticulously designed to reflect sophistication and luxury.
          </p>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            From conceptualization to execution, our team ensures that each space delivers <strong>unmatched aesthetics, premium quality, and a seamless experience</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/services"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#239554] text-black font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#1A609F] hover:bg-[#D4AF37] text-white font-semibold shadow-lg transition transform hover:-translate-y-1"
            >
              Request Quote
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[450px] rounded-3xl shadow-2xl overflow-hidden ring-1 ring-[#D4AF37]/30"
        >
          <img
            src={aboutImg}
            alt="Usmani Decor Showcase"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
          />
          {/* Overlay Badge */}
          <div className="absolute bottom-6 left-6 bg-black/70 text-white px-5 py-3 rounded-xl shadow-md backdrop-blur-sm">
            <p className="text-sm uppercase tracking-wide text-[#FFD700]">Since 2012</p>
            <h3 className="text-lg md:text-xl font-cursive2 font-bold">13+ Years of Excellence</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;

// src/components/AboutSection.jsx
import React from "react";
import leftImg from "../assets/images/About/h2.avif";  
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col md:flex-row mb-0">
      {/* LEFT SIDE IMAGE */}
      <div className="md:w-1/2 relative">
        <img
          src={leftImg}
          alt="Usmani Decor Projects  "
          className="w-full h-[650px] object-cover "
          loading="lazy"
        />
        <div className="absolute inset-0 "></div>

        {/* Overlay content */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white px-4">
          <p className="uppercase text-xs sm:text-sm tracking-[0.25em] font-body">
            Crafting luxury interiors since 2012
          </p>
          <Link to={"/about"}>
            <button className="mt-6 font-body px-6 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-full transition-all">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="md:w-1/2 bg-white flex flex-col px-8 sm:px-12 py-12 relative">
        {/* Accent Border */}
        <div className="absolute top-0 left-0 w-2 h-20 bg-red-700"></div>

        {/* Heading */}
        <div>
          <h2 className="text-7xl sm:text-8xl font-cursive2 text-[#1B2A41] drop-shadow-sm">
            About Us
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-red-700 via-[#D4AF37] to-blue-700 mb-6"></div>
        </div>

        {/* Tagline */}
        <h3 className="uppercase text-xs tracking-[0.3em] text-[#1B2A41] font-body">
          Luxury • Craftsmanship • Legacy
        </h3>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1B2A41] leading-snug mt-4 font-body">
          Spaces that inspire, built with{" "}
          <span className="text-[#D4AF37] italic font-cursive1">
            passion & precision
          </span>
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 text-lg leading-relaxed mt-6 font-body">
          Since <span className="font-semibold text-red-700">2012</span>,{" "}
          <span className="font-semibold">Usmani Decor</span> has been redefining
          luxury interiors across India. We create timeless designs that blend
          elegance, comfort, and modern functionality — transforming every space
          into a story worth telling.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4 font-body">
          Our team of expert designers and skilled craftsmen specialize in
          curating bespoke interiors that reflect your lifestyle and aspirations.
          From lavish homes to stylish commercial spaces, every project is a
          fusion of innovation, artistry, and attention to detail.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4 font-body">
          At Usmani Decor, we don’t just design interiors — we craft experiences
          that inspire, endure, and celebrate the essence of luxury living.
        </p>
      </div>
    </section>
  );
}

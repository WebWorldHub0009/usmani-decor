// src/components/WhyChooseUs.jsx
import React from "react";
import why1 from "../assets/images/usmania/u4.jpg";
import why2 from "../assets/images/usmania/u5.jpg";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-8 px-6 md:px-20 ">
      {/* Section Title */}
      <h2 className="text-center text-4xl md:text-6xl lg:text-7xl font-cursive1  tracking-widest mb-6">
        WHY <span className="text-[#D4AF37]">USMANI DECOR</span>
      </h2>

      {/* Top Card */}
      <div className="grid md:grid-cols-2 gap-12 items-center border-t border-b border-gray-700 py-12">
        {/* Image Left */}
        <div className="relative md:w-full">
          <img
            src={why1}
            alt="Luxury Interiors"
            className="w-full h-[300px] object-cover rounded-xl shadow-2xl border-2 border-[#D4AF37] hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
        </div>

        {/* Text Right */}
        <div className="text-gray-300 md:pl-8">
          <h3 className="text-2xl font-cursive1 text-[#FFD700] mb-4">
            Elegance Meets Functionality
          </h3>
          <p className="font-body leading-relaxed text-lg">
            At <span className="text-red-600 font-semibold">Usmani Decor</span>, we
            transform ideas into luxurious, timeless interiors. Our expertise
            blends elegance, minimalism, and comfort to create spaces that are
            functional, stunning, and enduring. Every detail is curated with
            precision and passion, making every project a signature of
            sophistication and luxury.
          </p>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="grid md:grid-cols-2 gap-12 items-center border-b border-gray-700 py-6 mt-5">
        {/* Text Left */}
        <div className="text-gray-300 md:pr-8">
          <h3 className="text-2xl font-cursive1 text-[#D4AF37] mb-4">
            Craftsmanship & Legacy
          </h3>
          <p className="font-body leading-relaxed text-lg">
            With decades of combined experience, our team ensures perfection in
            every detail. Choosing <span className="text-red-600 font-semibold">Usmani Decor</span> 
            means selecting a legacy of trust, quality, and timeless elegance.
            We create interiors that celebrate individuality, combine modern
            innovation with classic sophistication, and transform spaces into
            luxurious living experiences.
          </p>
        </div>

        {/* Image Right */}
        <div className="relative md:w-full">
          <img
            src={why2}
            alt="Premium Design"
            className="w-full h-[300px] object-cover rounded-xl shadow-2xl border-2 border-red-700 hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent rounded-xl"></div>
        </div>
      </div>
    </section>
  );
}

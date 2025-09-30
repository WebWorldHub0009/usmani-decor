// src/components/VisionMissionGoal.jsx
import React from "react";
import { BookOpen, Target, Award } from "lucide-react";
import visionBg from "../assets/images/usmania/u15.jpg"; // Replace with premium background image

export default function VisionMissionGoal() {
  return (
    <section className="relative w-full flex flex-col md:flex-row min-h-[100vh] bg-white font-cursive1 overflow-hidden">
      
      {/* Left Side - Background Image */}
      <div
        className="w-full md:w-1/2 h-[50vh] md:h-auto bg-cover bg-center relative"
        style={{ backgroundImage: `url(${visionBg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Subtle diagonal light overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#FFD700]/20 via-transparent to-[#D4AF37]/20"></div>
      </div>

      {/* Right Side - Dark Section */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center bg-[#1C1C1C] overflow-hidden">
        {/* Diagonal background (desktop) */}
        <div className="absolute inset-0 hidden md:block bg-[#1C1C1C] transform -skew-x-[18deg] origin-top-left shadow-2xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-16 px-6 sm:px-10 md:px-16 py-16 md:py-24">
          
          {/* Vision */}
          <div className="flex items-start gap-6 relative">
            <div className="absolute top-1/2 -translate-y-1/2">
              <div className="w-14 h-14 bg-[#D4AF37] rotate-45 flex items-center justify-center shadow-xl hover:shadow-2xl transition">
                <BookOpen className="w-7 h-7 text-[#1C1C1C] -rotate-45" />
              </div>
            </div>
            <div className="ml-20 md:ml-24">
              <h3 className="text-3xl md:text-4xl font-cursive2 text-[#FFD700] font-bold mb-3">
                Our Vision
              </h3>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-lg">
                At <span className="text-[#D4AF37] font-semibold">Usmani Decor</span>, we aim to transform interiors into luxurious, elegant spaces that reflect your personality and lifestyle. Every project is crafted with <strong>precision, creativity, and luxury</strong>.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex items-start gap-6 relative">
            <div className="absolute top-1/2 -translate-y-1/2">
              <div className="w-14 h-14 bg-[#D4AF37] rotate-45 flex items-center justify-center shadow-xl hover:shadow-2xl transition">
                <Target className="w-7 h-7 text-[#1C1C1C] -rotate-45" />
              </div>
            </div>
            <div className="ml-20 md:ml-24">
              <h3 className="text-3xl md:text-4xl font-cursive2 text-[#FFD700] font-bold mb-3">
                Our Mission
              </h3>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-lg">
                Our mission is to deliver premium interior design services that combine <strong>creativity, functionality, and style</strong>. We focus on client satisfaction, attention to detail, and flawless execution for every space.
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2 text-base md:text-lg font-cursive1">
                <li>Design spaces that inspire and delight</li>
                <li>Use sustainable and luxurious materials</li>
                <li>Maintain transparency and professionalism</li>
              </ul>
            </div>
          </div>

          {/* Goal */}
          <div className="flex items-start gap-6 relative">
            <div className="absolute top-1/2 -translate-y-1/2">
              <div className="w-14 h-14 bg-[#D4AF37] rotate-45 flex items-center justify-center shadow-xl hover:shadow-2xl transition">
                <Award className="w-7 h-7 text-[#1C1C1C] -rotate-45" />
              </div>
            </div>
            <div className="ml-20 md:ml-24">
              <h3 className="text-3xl md:text-4xl font-cursive2 text-[#FFD700] font-bold mb-3">
                Our Goal
              </h3>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-lg">
                To become the <span className="text-[#FFD700] font-semibold">most trusted interior design brand</span> in India, renowned for creativity, luxury, and impeccable client experiences.
              </p>
              <p className="text-gray-400 text-base md:text-lg mt-2 font-cursive1">
                We don’t just design interiors; we craft <strong>luxurious experiences, emotions, and memories</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

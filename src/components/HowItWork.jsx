// src/components/HowWeWork.jsx
import React from "react";

export default function HowWeWork() {
  const steps = [
    {
      title: "PLANNING",
      desc: "We carefully analyze the space and create a personalized plan ensuring safety, design, and functionality.",
    },
    {
      title: "VISUALIZATION",
      desc: "Our team provides 3D design previews to help you visualize how the interiors will transform your space.",
    },
    {
      title: "EXECUTION",
      desc: "With skilled teams and premium materials, we guarantee flawless implementation and precision finishing.",
    },
    {
      title: "MAINTENANCE",
      desc: "Our expert service ensures long-term reliability, elegance, and smooth performance.",
    },
  ];

  return (
    <section className="w-full relative py-8 px-6 md:px-12 lg:px-20  overflow-hidden bg-gradient-to-br from-[#fef8f0] via-[#fff9f2] to-[#fef8f0]">
      
      {/* Circular hollow SVG background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="400" r="350" stroke="#D4AF37" strokeWidth="3" className="opacity-10" />
        <circle cx="400" cy="400" r="250" stroke="#C62828" strokeWidth="3" className="opacity-10" />
        <circle cx="400" cy="400" r="150" stroke="#1B2A41" strokeWidth="3" className="opacity-10" />
        {/* Soft glow / vignette */}
        <circle cx="400" cy="400" r="400" fill="url(#gradGlow)" className="opacity-20"/>
        <defs>
          <radialGradient id="gradGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#1B2A41" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Title */}
      <div className="text-center relative z-10 mb-8">
        <h2 className="text-3xl md:text-5xl font-cursive2 text-[#1B2A41] font-bold tracking-wide inline-block relative">
          HOW WE WORK
          <span className="block w-20 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#C62828] to-[#1B2A41] mx-auto mt-4 rounded-full"></span>
        </h2>
      </div>

      {/* Steps */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            {/* Circular Step Icon with gradient border */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border-4 border-gradient-to-r from-[#D4AF37] via-[#C62828] to-[#1B2A41] flex items-center justify-center text-2xl font-cursive1 text-[#D4AF37] shadow-xl">
              {index + 1}
            </div>

            {/* Step Title */}
            <h3 className="text-xl font-cursive2 text-[#1B2A41] mb-3 tracking-wide">
              {step.title}
            </h3>

            {/* Step Description */}
            <p className="text-gray-700 leading-relaxed text-sm font-body">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

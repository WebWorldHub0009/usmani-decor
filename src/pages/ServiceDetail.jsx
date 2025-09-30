// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import ServiceData from "./ServiceData";
import ServicesSection from "../components/ServiceSection";

export default function ServiceDetail() {
  const { slug } = useParams();

  // Find the service based on slug
  const service = ServiceData.services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center  p-6">
        <h2 className="text-3xl font-bold mb-4 text-black">Service Not Found</h2>
        <p className="text-gray-600 mb-6">The service you are looking for does not exist.</p>
        <Link
          to="/services"
          className="text-white bg-[#D4AF37] px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
    <section className="relative w-full bg-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Grid SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Decorative floating circles */}
      <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full bg-red-300/30 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-blue-300/30 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-0 w-40 h-40 rounded-full bg-[#D4AF37]/20 blur-3xl animate-blob animation-delay-1000"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gray-300/20 blur-3xl animate-blob animation-delay-3000"></div>

      {/* Top Heading */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#D4AF37] to-[#1A609F] bg-clip-text text-transparent tracking-wide">
          {ServiceData.topHeading}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-blue-600 italic">
          {ServiceData.bigQuote}
        </p>
      </div>

      {/* Service Detail */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        {/* Left Image */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[600px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {service.heading}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {service.description}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
    <ServicesSection/>
    </>
  );
}

// src/components/MapSection.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="relative w-full bg-white py-16 font-[Raleway] overflow-hidden">
      {/* Section Title */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#1C1C1C] px-8 py-3 rounded-full shadow-2xl z-10">
        <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 tracking-wide">
          <FaMapMarkerAlt className="text-[#FFD700] text-2xl" />
          Find Us on Map
        </h2>
      </div>

      {/* Map Container */}
      <div className="w-full max-w-7xl mx-auto relative overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.3)] border-4 border-[#D4AF37]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.123456789012!2d77.649123!3d28.418123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1234567890ab%3A0xabcdef1234567890!2sPlot%20No.12/2%2C%20Under%20Ground%20Floor%2C%20Above%20SBI%20Kendra%2C%20Seva%20Baraula%20Bypass%20Road%2C%20Bank%20Colony%2C%20Kundan%20Nagar%2C%20Manesar%2C%20Aligarh%20202501%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1726310782732!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl"
        ></iframe>

        {/* Premium Info Card Overlay */}
        <div className="absolute bottom-8 right-8 bg-white/90 text-black p-8 rounded-3xl max-w-sm shadow-2xl backdrop-blur-md border border-[#D4AF37]">
          <h3 className="text-2xl font-extrabold text-[#D4AF37] mb-4 flex items-center gap-2">
            <FaMapMarkerAlt /> Usmani Decor
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Plot No.12/2, Under Ground Floor, Above SBI Kendra,  
            Seva Baraula Bypass Road, Bank Colony, Kundan Nagar,  
            Manesar, Aligarh 202001, Uttar Pradesh, India
          </p>
          <a
            href="https://goo.gl/maps/YourCustomLinkHere"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-semibold px-6 py-3 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            📍 View on Google Maps
          </a>
        </div>
      </div>

      {/* Decorative Floating Blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-red-300/20 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-0 w-40 h-40 rounded-full bg-[#D4AF37]/20 blur-3xl animate-blob animation-delay-1000"></div>
    </section>
  );
};

export default MapSection;

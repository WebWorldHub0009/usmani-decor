// src/components/StatsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUsersCog, FaWrench, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

// Replace with your actual background image
import bgImage from "../assets/images/home/statssection.jpg";

const stats = [
  {
    value: "300+",
    label: "Projects Completed",
    sub: "Across Residential & Commercial Interiors",
    icon: <FaBuilding className="text-3xl text-[#D4AF37]" />,
  },
  {
    value: "20+",
    label: "Skilled Designers",
    sub: "Expert Craftsmanship & Precision",
    icon: <FaUsersCog className="text-3xl text-[#C62828]" />,
  },
  {
    value: "24/7",
    label: "Support & Maintenance",
    sub: "Reliable Service Anytime",
    icon: <FaWrench className="text-3xl text-[#1B2A41]" />,
  },
  {
    value: "4.9★",
    label: "Client Satisfaction",
    sub: "Trusted by Happy Customers",
    icon: <FaStar className="text-3xl text-[#D4AF37]" />,
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-10 overflow-hidden font-cursive1">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-lg md:text-xl text-[#D4AF37] font-semibold mb-2 tracking-widest font-cursive2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Our Achievements
        </motion.h2>

        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-12 font-cursive2 text-blue-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Excellence in Every Interior
        </motion.h1>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105 flex flex-col items-center text-center border-t-4 border-gradient-to-r from-[#D4AF37] via-[#C62828] to-[#1B2A41]"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="mt-2 font-semibold">{stat.label}</p>
              <p className="text-sm text-gray-200">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/service">
            <button className="cursor-pointer bg-gradient-to-r from-[#D4AF37] via-[#C62828] to-[#1B2A41] text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition font-semibold">
              See Our Work
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

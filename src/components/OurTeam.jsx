// src/components/OurTeam.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebookF, FaEnvelope, FaPhoneAlt, FaQuoteLeft, FaCrown, FaMedal, FaLightbulb } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineUserCircle } from "react-icons/hi";
import ownerImg from "../assets//owner.jpg"; // Owner image placeholder

const owner = {
  name: "Asif Usmani",
  position: "Owner",
  quote: "Transforming spaces with elegance and style.",
  email: "Usmanidecoraligarh@gmail.com",
  phone: "+91 7017479896 / +91 9027958538",
  points: [
    { icon: <FaCrown className="text-[#D4AF37]" />, text: "15+ years experience" },
    { icon: <FaMedal className="text-[#1A609F]" />, text: "Premium Interior Expert" },
    { icon: <FaLightbulb className="text-[#239554]" />, text: "Innovative & Visionary" },
  ],
};

// All team members in a single array
const allTeamMembers = [
  { name: "Khadija Gohar", position: "Accounts Manager" },
  { name: "Azam Malik", position: "Marketing Head" },
  { name: "Amir Malik", position: "Site Contractor" },
  { name: "Mohim Usmani", position: "Sales Department" },
  { name: "Mohd Rafi", position: "Sales Department" },
];

const floatAnimation = { animate: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } } };
const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

// Team member card
function TeamMember({ name, position }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center space-y-2 text-center min-w-[120px]"
    >
      <motion.div
        variants={floatAnimation}
        animate="animate"
        className="w-28 h-28 flex items-center justify-center bg-white border border-gray-300 shadow-md rounded-full hover:shadow-xl transition"
      >
        <HiOutlineUserCircle size={52} />
      </motion.div>
      <h4 className="font-semibold text-md text-black">{name}</h4>
      <p className="text-xs text-[#4B5563]">{position}</p>
      <div className="flex gap-3 mt-2 text-lg text-gray-400">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A609F] transition"><FaLinkedin /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#239554] transition"><FaFacebookF /></a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition"><FaXTwitter /></a>
      </div>
    </motion.div>
  );
}

// Owner card component
function OwnerCard({ owner }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto p-8 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border-t-4 border-[#D4AF37]"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg border-4 border-[#D4AF37] flex items-center justify-center bg-white"
      >
        <img src={ownerImg} alt={owner.name} className="w-full h-full object-cover" />
      </motion.div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h3 className="text-3xl md:text-4xl font-bold text-black flex items-center gap-4">
            {owner.name}
            <span className="flex gap-2 text-xl text-gray-600">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A609F] transition"><FaLinkedin /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#239554] transition"><FaFacebookF /></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition"><FaXTwitter /></a>
            </span>
          </h3>
          <p className="text-sm md:text-base text-[#239554] font-semibold uppercase">{owner.position}</p>
        </div>

        <p className="text-gray-700 italic flex items-center gap-2">
          <FaQuoteLeft className="text-[#D4AF37]" /> {owner.quote}
        </p>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          {owner.points.map((point, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/80 p-3 rounded-lg shadow hover:shadow-lg transition">
              {point.icon}
              <span className="text-[#4B5563] font-medium">{point.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-4 text-[#4B5563]">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#D4AF37]" /> <span>{owner.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#D4AF37]" /> <span>{owner.phone}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main component
export default function OurTeam() {
  return (
    <section className="py-16 px-6 md:px-10 relative text-gray-800 font-sans bg-[#F9F9F9]">
      <div className="absolute inset-0 bg-white/20 -z-10"></div>

      {/* Decorative SVG background */}
      <svg className="absolute top-0 left-0 w-full h-full -z-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <circle cx="20%" cy="10%" r="120" fill="#D4AF37" opacity="0.1" />
        <circle cx="80%" cy="20%" r="200" fill="#1A609F" opacity="0.1" />
        <circle cx="50%" cy="80%" r="150" fill="#239554" opacity="0.08" />
      </svg>

      {/* Title */}
      <div className="text-center mb-12 relative z-10">
        <h4 className="text-sm text-[#4B5563] uppercase tracking-widest font-semibold mb-2">Usmani Decor</h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Meet the <span className="bg-gradient-to-r from-[#D4AF37] to-[#1A609F] bg-clip-text text-transparent">Owner</span>
        </h2>
        <p className="text-[#4B5563] max-w-2xl mx-auto text-base md:text-lg">
          Our talented team drives excellence in premium interior solutions.
        </p>
      </div>

      {/* Owner */}
      <div className="mb-8 relative z-10">
        <OwnerCard owner={owner} />
      </div>

      {/* Team Members Heading */}
      <div className="text-center mb-6 relative z-10">
        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#D4AF37] to-[#1A609F] bg-clip-text">Team Members</h3>
      </div>

      {/* All team members in a single centered row */}
      <div className="relative z-10 flex justify-center">
        <div className="flex flex-wrap gap-10 py-4 px-2 justify-center">
          {allTeamMembers.map((member, i) => (
            <TeamMember key={i} name={member.name} position={member.position} />
          ))}
        </div>
      </div>
    </section>
  );  
} 
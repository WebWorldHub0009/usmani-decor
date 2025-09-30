// src/components/HeroSection.jsx
import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Hero images
import hero1 from "../assets/images/usmania/u13.jpg";
import hero2 from "../assets/images/usmania/u11.jpg";
import hero3 from "../assets/images/usmania/u4.jpg";
import hero4 from "../assets/images/usmania/u8.jpg";


// Background overlay
import bgHero from "../assets/images/home/modern.jpg";

const IMAGES = [
  { src: hero1, alt: "Usmani Decor 1" },
  { src: hero2, alt: "Usmani Decor 2" },
  { src: hero3, alt: "Usmani Decor 3" },
   { src: hero4, alt: "Usmani Decor 4" },
 
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleImageChange = (idx) => {
    if (idx === active) return;
    setFade(true);
    setTimeout(() => {
      setActive(idx);
      setFade(false);
    }, 300);
  };

  return (
    <section className="relative w-full text-white px-6 md:px-12 lg:px-20 py-16 z-0 overflow-hidden font-[Poppins]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
      ></div>
      <div className="absolute inset-0 z-0 bg-black/40 "></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 min-h-[64vh]">
        {/* LEFT: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.h1
            className="text-4xl md:text-5xl font-cursive2 font-extrabold leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Space with{" "}
            <span className="text-[#D4AF37] font-cursive1">Elegance & Style</span>
          </motion.h1>

          <motion.p
            className="text-white/90 max-w-xl mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to <span className="font-semibold text-[#239554]">Usmani Decor</span>, where
            premium interiors meet innovation. Experience luxury, precision, and
            bespoke designs for every corner of your home or office.
          </motion.p>

          {/* Additional content */}
          <motion.div
            className="mt-6 text-white/80 space-y-2 max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>✨ Custom-designed furniture and interiors tailored to your taste.</p>
            <p>✨ Elegant color palettes with gold, red, and dark blue accents.</p>
            <p>✨ Expert team ensuring timely delivery and premium quality.</p>
            <p>✨ 24/7 support and maintenance for a seamless experience.</p>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/about">
              <button className="bg-[#D4AF37] cursor-pointer hover:bg-[#C62828] text-black font-semibold px-6 py-3 rounded-lg shadow-md transition">
                Get Started
              </button>
            </Link>

            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center space-x-2 border cursor-pointer border-[#D4AF37] px-5 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-black transition"
            >
              <Play size={18} />
              <span>Watch Video</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-8 pt-8 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div>
              <p className="text-2xl font-bold text-[#D4AF37]">300+</p>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#C62828]">200+</p>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#239554]">100%</p>
              <p className="text-white/80">Satisfaction Guaranteed</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Image + Thumbnails */}
        <div className="w-full lg:w-1/2 hidden md:flex items-center justify-center relative">
          <motion.div
            className="relative w-[75%] h-full rounded-2xl overflow-hidden shadow-2xl"
            style={{
              minHeight: 420,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 12% 100%, 0 82%)",
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={IMAGES[active].src}
              alt={IMAGES[active].alt}
              key={IMAGES[active].src}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            />
            <div className="hidden md:block absolute top-4 left-4 bg-[#D4AF37] text-black text-xs px-3 py-1 rounded-full font-semibold shadow-md">
              Trending Now
            </div>
          </motion.div>

          {/* Vertical Thumbnails */}
          <div className="hidden md:flex flex-col gap-3 absolute right-[-60px] top-[150px] transform -translate-y-1/2">
            {IMAGES.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleImageChange(idx)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-transform ${
                  active === idx ? "scale-105 border-[#D4AF37]" : "border-white/30"
                }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* VIDEO POPUP */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative w-[90%] max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-white/20"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition z-10"
              >
                <X size={24} />
              </button>

              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/EpQVfMaq2ik?autoplay=1&mute=1"
                  title="Usmani Decor Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

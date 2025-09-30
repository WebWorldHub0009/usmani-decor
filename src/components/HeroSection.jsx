// src/components/Hero.jsx
import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCogs,
  FaShieldAlt,
  FaBuilding,
  FaArrowUp,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

// Lazy load Swiper for mobile feature cards
const Swiper = lazy(() => import("swiper/react").then((module) => ({ default: module.Swiper })));
const SwiperSlide = lazy(() => import("swiper/react").then((module) => ({ default: module.SwiperSlide })));

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import heroImg1 from "../assets/images/usmania/h1.jpg";
import heroImg2 from "../assets/images/usmania/h2.jpg";
import heroImg3 from "../assets/images/usmania/h3.jpg";
import heroImg4 from "../assets/images/usmania/u6.jpg";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % images.length), 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const cards = [
    {
      icon: <FaCogs className="text-3xl text-[#D4AF37]" />,
      title: "Smart Interiors",
      desc: "Elegant solutions tailored for your space and lifestyle.",
    },
    {
      icon: <FaBuilding className="text-3xl text-[#1A609F]" />,
      title: "Premium Design",
      desc: "Modern aesthetics that blend luxury and functionality.",
    },
    {
      icon: <FaArrowUp className="text-3xl text-[#239554]" />,
      title: "Eco-Friendly",
      desc: "Sustainable materials and energy-efficient solutions.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#9FDE01]" />,
      title: "Safety & Comfort",
      desc: "Reliable structures with a focus on user experience.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen font-sans overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <LazyLoadImage
            key={index}
            src={img}
            alt="Usmani Decor"
            
            className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-[2000ms] ease-in-out ${
              index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-5 text-white z-50 hidden md:flex">
        <FaFacebookF className="hover:text-[#D4AF37] transition text-2xl cursor-pointer" />
        <FaTwitter className="hover:text-[#1A609F] transition text-2xl cursor-pointer" />
        <FaInstagram className="hover:text-[#239554] transition text-2xl cursor-pointer" />
        <FaYoutube className="hover:text-[#9FDE01] transition text-2xl cursor-pointer" />
      </div>

      {/* Slider Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-50 hidden md:flex">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#D4AF37] scale-125 shadow-lg" : "bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 md:px-12 pt-32 md:pt-40">
        <h2 className="font-bold text-[#D4AF37] text-sm md:text-xl tracking-widest uppercase drop-shadow-md">
          Usmani Decor
        </h2>
        <h1 className="text-3xl md:text-5xl mt-3 font-extrabold text-white uppercase drop-shadow-xl leading-tight">
          <Typewriter
            words={["Luxury Interiors.", "Elegant & Stylish.", "Transforming Spaces."]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h1>
        <p className="mt-5 text-gray-200 text-sm md:text-lg max-w-3xl leading-relaxed">
          We specialize in creating premium interior solutions, blending modern design, functionality, and elegance to transform your spaces into luxurious experiences.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/services"
            className="px-6 py-3 bg-[#1A609F] hover:bg-[#239554] text-white rounded-full shadow-lg transition"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#D4AF37] hover:bg-[#1A609F] text-black rounded-full shadow-lg transition"
          >
            Request Quote
          </Link>
        </div>
      </div>

      {/* Feature Cards Desktop */}
      <div className="relative z-20 mt-10 md:mt-5 flex flex-wrap justify-center gap-6 px-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#D4AF37] text-white p-6 rounded-2xl w-72 hover:scale-105 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {card.icon}
              <h3 className="font-bold uppercase tracking-wide">{card.title}</h3>
            </div>
            <p className="text-gray-200 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Feature Cards Mobile */}
      <div className="mt-2 md:hidden w-full px-6 z-20">
        <Suspense fallback={<p className="text-center text-gray-400">Loading features...</p>}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={1.15}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#D4AF37] text-white p-6 rounded-2xl w-full hover:scale-105 hover:shadow-2xl transition">
                  <div className="flex items-center gap-3 mb-3">
                    {card.icon}
                    <h3 className="font-bold uppercase tracking-wide">{card.title}</h3>
                  </div>
                  <p className="text-gray-200 text-sm">{card.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Suspense>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/40 py-3 px-4 text-center text-xs sm:text-sm md:text-base text-gray-200 flex flex-wrap justify-center gap-3 md:gap-12">
        <span className="hover:text-[#D4AF37] transition">Luxury Design</span>
        <span className="hover:text-[#1A609F] transition">Elegance & Style</span>
        <span className="hover:text-[#239554] transition">Innovative Interiors</span>
        <span className="hover:text-[#9FDE01] transition">Client Satisfaction</span>
      </div>
    </section>
  );
}

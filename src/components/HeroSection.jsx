// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCouch,
  FaPalette,
  FaGem,
  FaShieldAlt,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

// Backgrounds for Usmani Decor
import heroImg1 from "../assets/images/usmania/h1.jpg";
import heroImg2 from "../assets/images/usmania/h2.jpg";
import heroImg3 from "../assets/images/usmania/h3.jpg";
import heroImg4 from "../assets/images/usmania/u4.jpg";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      6000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  const cards = [
    {
      icon: <FaCouch className="text-3xl text-[#D4AF37]" />,
      title: "Luxury Interiors",
      desc: "Elegant spaces designed with premium finishing touches.",
    },
    {
      icon: <FaPalette className="text-3xl text-[#1A1F71]" />,
      title: "Creative Designs",
      desc: "Custom concepts blending art, function, and style.",
    },
    {
      icon: <FaGem className="text-3xl text-[#C62828]" />,
      title: "Premium Materials",
      desc: "Hand-picked, durable and timeless decor elements.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-gray-300" />,
      title: "Trusted Quality",
      desc: "Reliable craftsmanship with attention to detail.",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden font-cursive2">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <LazyLoadImage
            key={index}
            src={img}
            alt="Usmani Decor"
            
            className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-[2000ms] ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Social Media (Desktop) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-5 text-white z-50 hidden md:flex">
        <FaFacebookF className="hover:text-[#D4AF37] transition text-2xl cursor-pointer" />
        <FaTwitter className="hover:text-[#1A1F71] transition text-2xl cursor-pointer" />
        <FaInstagram className="hover:text-[#C62828] transition text-2xl cursor-pointer" />
        <FaYoutube className="hover:text-gray-300 transition text-2xl cursor-pointer" />
      </div>

      {/* Slider Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-50 hidden md:flex">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#D4AF37] scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>

      {/* Hero Text */}
      <div className="relative bottom-20 z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        {/* Tagline */}
        <h2 className="font-cursive1 text-[#D4AF37] text-sm md:text-xl tracking-widest uppercase font-bold drop-shadow-md">
          Usmani Decor
        </h2>

        {/* Typewriter */}
        <h1 className="font-cursive1 text-2xl md:text-5xl mt-3 font-extrabold uppercase leading-tight drop-shadow-xl text-white">
          <Typewriter
            words={[
              "Luxury Interiors.",
              "Stylish. Elegant. Premium.",
              "Transforming Spaces with Art.",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h1>

        {/* Description */}
        <p className="mt-5 text-sm md:text-lg max-w-3xl md:max-w-4xl text-gray-300 leading-relaxed font-cursive2">
          At Usmani Decor, we craft interiors that blend modern aesthetics,
          timeless luxury, and comfort. From premium designs to flawless
          execution – we turn your vision into a living masterpiece.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/services"
            className="px-6 py-3 bg-[#1A1F71] hover:bg-[#C62828] rounded-full text-white font-cursive2 shadow-lg transition"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#D4AF37] hover:bg-[#1A1F71] rounded-full text-black font-cursive1 shadow-lg transition"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* Feature Cards (Desktop) */}
      <div className="absolute bottom-16 w-full hidden md:flex flex-wrap justify-center gap-6 px-6 z-20">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#D4AF37] text-white p-6 rounded-2xl w-72 hover:scale-105 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {card.icon}
              <h3 className="font-cursive1 text-lg font-bold uppercase tracking-wide text-[#D4AF37]">
                {card.title}
              </h3>
            </div>
            <p className="font-cursive2 text-sm text-gray-200">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Feature Cards (Mobile Slider) */}
      <div className="absolute bottom-20 w-full px-6 z-20 md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1.15}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="pb-10"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#D4AF37] text-white p-6 rounded-2xl w-full hover:scale-105 hover:shadow-2xl transition">
                <div className="flex items-center gap-3 mb-3">
                  {card.icon}
                  <h3 className="font-cursive1 text-base sm:text-lg font-bold uppercase tracking-wide text-[#D4AF37]">
                    {card.title}
                  </h3>
                </div>
                <p className="font-cursive2 text-xs sm:text-sm text-gray-200">
                  {card.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/40 py-3 px-4 text-center text-xs sm:text-sm md:text-base text-gray-300 tracking-wide flex flex-wrap justify-center gap-3 md:gap-12 font-cursive2">
        <span className="hover:text-[#D4AF37] transition">Luxury Design</span>
        <span className="hover:text-[#1A1F71] transition">Modern Interiors</span>
        <span className="hover:text-[#C62828] transition">Elegant Living</span>
        <span className="hover:text-[#D4AF37] transition">Client Satisfaction</span>
      </div>
    </section>
  );
}

// src/components/Service.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import pvcWall from "../assets/images/usmania/h2.jpg";
import ceiling from "../assets/images/usmania/u19.jpg";
import charcoal from "../assets/images/usmania/u13.jpg";
import wps from "../assets/images/usmania/u11.jpg";
import fluted from "../assets/images/usmania/u18.jpg";
import pvcDoor from "../assets/images/usmania/door.jpg";
import uvMarble from "../assets/images/usmania/u8.jpg";
import wallpaper from "../assets/images/usmania/u2.jpg";

import bg from "../assets/images/About/vm3.jpg";

const services = [
  { title: "PVC Wall Panel", slug: "pvc-wall-panel", image: pvcWall },
  { title: "Ceiling Panel", slug: "ceiling-panel", image: ceiling },
  { title: "Charcoal Panel", slug: "charcoal-panel", image: charcoal },
  { title: "WPS Louvers", slug: "wps-louvers", image: wps },
  { title: "Fluted Panel", slug: "fluted-panel", image: fluted },
  { title: "PVC Door", slug: "pvc-door", image: pvcDoor },
  { title: "UV Marble Sheet", slug: "uv-marble-sheet", image: uvMarble },
  { title: "Wallpaper", slug: "wallpaper", image: wallpaper },
];

export default function Service() {
  return (
    <section
      className="relative py-14 md:py-16 bg-fixed bg-cover bg-center font-[Poppins]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Heading */}
        <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-[#D4AF37]">
          Our Services
        </h2>
        <h3 className="text-3xl md:text-5xl font-cursive2 text-white mt-3 leading-tight">
          Premium <span className="text-red-500">Interior Solutions</span>
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto mt-5 mb-14 text-sm md:text-base">
          At <span className="text-[#D4AF37] font-semibold">Usmani Decor</span>, 
          we redefine spaces with elegance and style. Explore our exclusive range of services, 
          designed to bring innovation and luxury to your interiors.
        </p>

        {/* Mobile → Slider */}
        <div className="lg:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            grabCursor={true}
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300 hover:border-[#D4AF37] transition duration-500">
                  {/* Image */}
                  <div className="relative w-full h-60 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-left">
                    <h4 className="text-xl font-cursive1 text-gray-900 group-hover:text-[#D4AF37] transition">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      Discover premium quality and unique designs crafted for modern living.
                    </p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-4 inline-flex items-center text-blue-800 hover:text-red-600 font-semibold group-hover:underline transition"
                    >
                      Show More <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop → Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300 hover:border-[#D4AF37] transition duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 text-left">
                <h4 className="text-2xl font-cursive1 text-gray-900 group-hover:text-[#D4AF37] transition">
                  {service.title}
                </h4>
                <p className="text-base text-gray-600 mt-3 line-clamp-2">
                  Discover premium quality and unique designs crafted for modern living.
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center text-blue-800 hover:text-red-600 font-semibold group-hover:underline transition"
                >
                  Show More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Wholesale & Retail Line */}
<div className="relative z-10 mt-8 text-center">
  <div className="inline-block">
    <div className="">
      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
        We Deal in <span className="text-[#D4AF37]">Wholesale</span> &{" "}
        <span className="text-[#1A609F]">Retail</span>
      </h3>
      <p className="text-white text-lg mb-2 max-w-2xl mx-auto">
        Delivering excellence in both bulk and individual orders — with the same
        premium quality and trusted service.
      </p>
    </div>
  </div>
</div>


        {/* Footer CTA */}
        <p className="mt-2 text-gray-200">
          Need expert advice?{" "}
          <Link
            to="/contact"
            className="text-[#D4AF37] font-semibold underline hover:text-red-500 transition"
          >
            Get in Touch
          </Link>
        </p>
      </div>
    </section>
  );
}

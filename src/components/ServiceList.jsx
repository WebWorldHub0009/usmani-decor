// src/components/ServicesList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import bg from "../assets/images/About/vm3.jpg";

const services = [
  { title: "PVC Wall Panel", slug: "pvc-wall-panel" },
  { title: "Ceiling Panel", slug: "ceiling-panel" },
  { title: "Charcoal Panel", slug: "charcoal-panel" },
  { title: "WPS Louvers", slug: "wps-louvers" },
  { title: "Fluted Panel", slug: "fluted-panel" },
  { title: "PVC Door", slug: "pvc-door" },
  { title: "UV Marble Sheet", slug: "uv-marble-sheet" },
  { title: "Wallpaper", slug: "wallpaper" },
];

export default function ServicesList() {
  return (
    <section
      className="relative py-5 md:py-10 bg-fixed bg-cover bg-center font-[Poppins]"
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
        <h3 className="text-3xl md:text-5xl font-cursive2 text-white mt-3 mb-5 leading-tight">
          Premium <span className="text-red-500">Interior Solutions</span>
        </h3>
       

        {/* Mobile → Auto Slider */}
        <div className="lg:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            grabCursor={true}
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300 hover:border-[#D4AF37] transition duration-500 p-6 text-left">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop → Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300 hover:border-[#D4AF37] transition duration-500 p-8 text-left"
            >
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
          ))}
        </div>

        {/* Footer CTA */}
        <p className="mt-16 text-gray-200">
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

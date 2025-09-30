// src/components/ServicesSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

// Example images (replace with actual Usmani Decor images)
import pvcWall from "../assets/images/usmania/h2.jpg";
import ceiling from "../assets/images/usmania/u19.jpg";
import charcoal from "../assets/images/usmania/u13.jpg";
import wps from "../assets/images/usmania/u11.jpg";
import fluted from "../assets/images/usmania/u18.jpg";
import pvcDoor from "../assets/images/usmania/door.jpg";
import uvMarble from "../assets/images/usmania/u8.jpg";
import wallpaper from "../assets/images/usmania/u2.jpg";

const services = [
  { title: "PVC Wall Panel", slug: "pvc-wall-panel", image: pvcWall },
  { title: "Ceiling Panel", slug: "ceiling-panel", image: ceiling },
  { title: "Charcoal Panel", slug: "charcoal-panel", image: charcoal },
  { title: "WPS Louvers", slug: "wps-louvers", image: wps },
  { title: "Fluted Panel", slug: "fluted-panel", image: fluted },
  { title: "PVC Door", slug: "pvc-door", image: pvcDoor},
  { title: "UV Marble Sheet", slug: "uv-marble-sheet", image: uvMarble },
  { title: "Wallpaper", slug: "wallpaper", image: wallpaper },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-10 text-white px-6 md:px-20 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
        
        {/* Left Heading */}
        <div className="col-span-1">
          <h2 className="text-4xl md:text-5xl font-cursive2 tracking-wide leading-tight text-gray-800 mb-8">
            OUR <span className="text-[#D4AF37] italic">Services</span> <br /> 
            PREMIUM SOLUTIONS
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-body">
            At <span className="text-red-600 font-semibold">Usmani Decor</span>, we deliver excellence in every project. 
            Our services combine innovation, craftsmanship, and luxury to enhance your spaces with elegance and style.
          </p>
        </div>

        {/* Right Slider */}
        <div className="col-span-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <Link to={`/services/${service.slug}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer border border-[#D4AF37]">
                    {/* Service Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>

                    {/* Number */}
                    <div className="absolute top-6 left-6 text-[#D4AF37] text-6xl md:text-7xl font-serif opacity-20">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Service Title */}
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-lg md:text-2xl font-cursive1 text-[#FFD700] group-hover:text-[#D4AF37] transition">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Updated testimonials for interior design clients
const testimonials = [
  { name: "Amit Verma", title: "Architect, Delhi", text: "Usmani Decor transformed my living room into a luxurious masterpiece. Every detail speaks elegance." },
  { name: "Riya Kapoor", title: "Interior Designer, Mumbai", text: "Their attention to aesthetics and functionality is unmatched. Highly recommended for premium spaces." },
  { name: "Sanjay Mehra", title: "Entrepreneur, Bangalore", text: "Professional, timely, and stylish. Our office space now reflects our brand perfectly." },
  { name: "Neha Sharma", title: "Homeowner, Pune", text: "From consultation to execution, Usmani Decor delivered beyond expectations. Pure luxury!" },
  { name: "Vikram Singh", title: "Hotel Owner, Jaipur", text: "Our boutique hotel interiors have never looked better. Elegant, classy, and highly functional." },
  { name: "Priya Joshi", title: "Designer, Chennai", text: "Creative, detail-oriented, and professional. They turned my apartment into a dream home." },
];

export default function TestimonialSlider() {
  return (
    <section className="relative w-full py-14 bg-white px-4 md:px-10 font-cursive1 overflow-hidden">
      
      {/* Background Shapes (Premium subtle) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-48 h-48 bg-red-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      {/* Heading */}
      <div className="relative max-w-5xl mx-auto text-center mb-14 z-10">
        <h2 className="text-3xl md:text-5xl font-cursive2 text-gray-800">
          What Our Clients <span className="text-[#D4AF37]">Say About Us</span>
        </h2>
        <p className="italic text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
          “Trusted by homeowners, designers, and businesses for creating elegant, luxurious interiors.”
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="rounded-3xl p-8 h-full bg-gray-50 border border-gray-200 shadow-lg text-gray-800 hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 ease-in-out">
              <FaQuoteLeft className="text-4xl mb-4 text-[#D4AF37]" />
              <p className="mb-6 italic text-gray-700 leading-relaxed font-cursive1">
                "{item.text}"
              </p>
              <div>
                <p className="font-semibold text-lg text-red-600 font-cursive2">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

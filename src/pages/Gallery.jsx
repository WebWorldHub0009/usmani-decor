// src/pages/Gallery.jsx
import React, { useState } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Example gallery images (replace with real images)
import img1 from "../assets/images/usmania/u1.jpg";
import img2 from "../assets/images/usmania/u2.jpg";
import img3 from "../assets/images/usmania/u3.jpg";
import img4 from "../assets/images/usmania/u4.jpg";
import img6 from "../assets/images/usmania/u6.jpg";
import img8 from "../assets/images/usmania/u8.jpg";
import img9 from "../assets/images/usmania/u9.jpg";
import img10 from "../assets/images/usmania/u10.jpg";
import img11 from "../assets/images/usmania/u11.jpg";
import img12 from "../assets/images/usmania/u12.jpg";
import img13 from "../assets/images/usmania/u13.jpg";
import img14 from "../assets/images/usmania/u14.jpg";
import img15 from "../assets/images/usmania/u15.jpg";
import img16 from "../assets/images/usmania/u16.jpg";
import img17 from "../assets/images/usmania/u17.jpg";

import GalleryHero from "../components/GalleryHero";

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img6,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative font-cursive1">
      <GalleryHero />

      {/* Premium Heading + Quote */}
      <section className="text-center max-w-5xl mx-auto px-6 mt-8 mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-wide mb-4">
          <span className="text-[#D4AF37]">Our Premium</span> Creations
        </h1>
        <p className="text-lg md:text-xl text-gray-700 italic">
          “Every masterpiece is crafted with{" "}
          <span className="text-[#1A609F] font-semibold">passion</span>,{" "}
          <span className="text-[#C62828] font-semibold">precision</span>, and{" "}
          <span className="text-[#D4AF37] font-semibold">perfection</span>.”
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group border border-gray-200 hover:border-[#D4AF37] transition-all"
            onClick={() => openModal(index)}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <span className="text-[#D4AF37] text-lg font-semibold tracking-wide">
                View Design
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-[#C62828] hover:bg-red-700 text-white rounded-full p-2 shadow-md transition"
              onClick={closeModal}
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Image */}
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-[#D4AF37]"
            />

            {/* Navigation */}
            <button
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 hover:bg-[#1A609F] text-white p-3 rounded-full transition"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 hover:bg-[#1A609F] text-white p-3 rounded-full transition"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

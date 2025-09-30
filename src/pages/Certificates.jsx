// src/pages/CertificatePage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

import lic1 from "../assets/images/doc/gst.pdf";
import udyam from "../assets/images/doc/udyam.pdf";
import CertificatesHero from "../components/CertificateHero";

const certificates = [
  {
    id: 1,
    name: "GST Certificate",
    description:
      "Government-approved license ensuring legal compliance and taxation standards.",
    file: lic1,
    tag: "Govt Approved",
  },
  {
    id: 2,
    name: "Udyam Registration",
    description:
      "Udyam Registration Certificate under MSME, proving Usmani Decor as a verified enterprise.",
    file: udyam,
    tag: "MSME Verified",
  },
];

const CertificatePage = () => {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      <CertificatesHero />

      {/* Certificates Section */}
      <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-16 px-6 font-serif">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16" id="docs">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-wide">
              Verified{" "}
              <span className="bg-gradient-to-r from-[#1A609F] via-[#FF3333] to-[#FFD700] text-transparent bg-clip-text">
                Certificates
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              At{" "}
              <span className="font-bold text-[#1A609F]">Usmani Decor</span>, we
              believe in{" "}
              <span className="text-[#D4AF37] font-semibold">
                transparency & trust
              </span>
              . Explore our official documents that validate our compliance and
              premium service standards.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map(({ id, name, description, file, tag }) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.03 }}
                className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-6 flex flex-col transition-all duration-300"
              >
                {/* Ribbon */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF3333] to-[#1A609F] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {tag}
                </div>

                {/* Title */}
                <div className="flex items-center gap-4 mb-4">
                  <HiDocumentText className="text-[#FFD700] text-4xl drop-shadow-lg" />
                  <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 text-base leading-relaxed flex-1">
                  {description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <button
                    onClick={() => setPreviewFile(file)}
                    className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#1A609F] to-[#FF3333] hover:from-[#003B73] hover:to-[#C62828] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaEye className="animate-pulse" />
                    View
                  </button>

                  <a
                    href={file}
                    download
                    className="w-full sm:w-auto flex-1 border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaDownload />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="relative bg-gradient-to-r from-black via-[#111111] to-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <FaShieldAlt className="text-[#1A609F] text-5xl mb-4" />
            <h3 className="text-xl font-bold text-[#FFD700]">
              Government Approved
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              All our certificates are verified and approved by government
              authorities.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <FaCheckCircle className="text-[#3CB371] text-5xl mb-4" />
            <h3 className="text-xl font-bold text-[#FFD700]">
              100% Authentic
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              Genuine documents ensuring trust and transparency.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <FaUserTie className="text-[#FF3333] text-5xl mb-4" />
            <h3 className="text-xl font-bold text-[#FFD700]">
              Trusted Brand
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              Serving premium clients with credibility for years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 shadow hover:bg-red-700 transition"
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0 rounded-b-2xl"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CertificatePage;

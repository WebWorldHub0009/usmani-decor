// src/pages/ContactPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import bgContact from "../assets/images/About/cbg.avif"; 
import ContactHero from "../components/ContactHero";
import MapSection from "../components/MapSection";



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

const ContactPage = () => {
  return (
    <>
      <ContactHero/>

      <section className="w-full min-h-screen flex flex-col lg:flex-row font-cursive1 bg-gradient-to-b from-white to-gray-50 text-gray-800">
        {/* Left Section */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 uppercase">
                <span className="text-[#3CB371]">Let’s</span>{" "}
                <span className="text-[#FFD700]">Get in Touch</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-gray-700 mb-10">
                Reach out to{" "}
                <span className="text-[#D4AF37] font-semibold">
                  Usmani Decor
                </span>{" "}
                for premium interior solutions. We’re here to answer all your queries
                and turn your space into a luxury experience.
              </p>

              <div className="space-y-6 text-sm sm:text-base">
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <FaPhoneAlt className="text-[#3CB371]" /> Phone
                  </h4>
                  <p>+91 7017479896</p>
                  <p>+91 9027958538</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <FaEnvelope className="text-[#FFD700]" /> Email
                  </h4>
                  <p>Info@usmanidecor.com</p>
                  <p>Usmanidecoraligarh@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#3CB371]" /> Address
                  </h4>
                  <p>
                    Plot No.12/2 Under Ground Floor, Above SBI Kendra Seva, Baraula
                    Bypass Road, Bank Colony, Kundan Nagar, Manesar, Aligarh 202001, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 flex gap-4 text-lg text-gray-600">
                <a
                  href="https://www.facebook.com/share/1JacN4cWrv/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#3CB371] transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FFD700] transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center"
        >
          <div
            id="contact-form"
            className="absolute inset-0 bg-cover bg-center rounded-3xl overflow-hidden"
            style={{ backgroundImage: `url(${bgContact})` }}
          ></div>
          <div className="absolute inset-0 bg-[#1C1C1C]/80 rounded-3xl"></div>

          <form
            action="https://formsubmit.co/Info@usmanidecor.com"
            method="POST"
            className="relative z-10 w-full px-6 sm:px-12 lg:px-16 py-16 text-white"
          >
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-[#FFD700] pb-1 inline-block uppercase">
              Contact Form
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border-b border-gray-300 p-2 focus:outline-none text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-gray-300 p-2 focus:outline-none text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-gray-300 p-2 focus:outline-none text-white placeholder-gray-400"
              />
              <select
                name="service"
                required
                className="bg-transparent border-b border-gray-300 p-2 focus:outline-none text-white placeholder-gray-400"
              >
                <option value="" disabled selected>
                  Select Service
                </option>
                {services.map((s, idx) => (
                  <option key={idx} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-gray-300 p-2 focus:outline-none resize-none h-28 text-white placeholder-gray-400"
              ></textarea>

              <button
                type="submit"
                className="cursor-pointer col-span-1 sm:col-span-2 bg-gradient-to-r from-[#3CB371] to-[#FFD700] text-[#1C1C1C] font-bold py-3 mt-4 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-full"
              >
                Send Message
              </button>
            </div>

            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.usmanidecor.com/"
            />
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <MapSection/>
    </>
  );
};

export default ContactPage;

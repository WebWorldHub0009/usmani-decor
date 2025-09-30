// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/ulogo.png";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaSkype,
  FaHome,
  FaImages,
  FaPhoneAlt,
  FaTruckMoving,
  FaInfoCircle,
  FaEnvelope,
  FaIdBadge,
  FaFileInvoice,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// Nav items
const navItems = [
  { name: "Home", path: "/", icon: <FaHome className="inline mr-1" /> },
  { name: "About Us", path: "/about", icon: <FaInfoCircle className="inline mr-1" /> },
  { name: "Services", path: "/services", icon: <FaTruckMoving className="inline mr-1" /> },
  { name: "Gallery", path: "/gallery", icon: <FaImages className="inline mr-1" /> },
  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt className="inline mr-1" /> },
];

// Company info
const COMPANY_INFO = {
  udyam: "UDYAM-UP-02-0009174",
  mobile1: "+91 9027958538", 
  mobile: "+91 7017479896",
  email: "Usmanidecoraligarh@gmail.com",
};

// Social links
const socialLinks = {
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
  pinterest: "https://www.pinterest.com",
  twitter: "https://www.twitter.com",
  youtube: "https://www.youtube.com",
  linkedin: "https://www.linkedin.com",
  skype: "https://www.skype.com",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkClasses = (path) =>
    `cursor-pointer transition flex items-center gap-1 font-body hover:text-[#D4AF37] ${
      pathname === path ? "text-[#D4AF37] font-semibold" : "text-[#003B73]"
    }`;

  return (
    <>
      {/* Top Header */}
      <div className="bg-[#003B73] text-white text-xs md:text-sm py-2 px-4 md:px-12 font-body">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Desktop Info */}
          <div className="hidden md:flex justify-between w-full">
            <div className="flex space-x-6">
             
                 <p className="flex items-center gap-1">
                <FaPhoneAlt className="text-[#D4AF37]" />
                <span className="font-semibold text-[#D4AF37]">Mobile:</span>{" "}
                {COMPANY_INFO.mobile1}
              </p>
              <p className="flex items-center gap-1">
                <FaFileInvoice className="text-[#D4AF37]" />
                <span className="font-semibold text-[#D4AF37]">Mobile:</span>{" "}
                {COMPANY_INFO.mobile}
              </p>
            </div>
            <div className="flex space-x-6">
               <p className="flex items-center gap-1">
                <FaIdBadge className="text-[#D4AF37]" />
                <span className="font-semibold text-[#D4AF37]">UDYAM:</span>{" "}
                {COMPANY_INFO.udyam}
              </p>
              <p className="flex items-center gap-1">
                <FaEnvelope className="text-[#D4AF37]" />
                <span className="font-semibold text-[#D4AF37]">Email:</span>{" "}
                {COMPANY_INFO.email}
              </p>
           
            </div>
          </div>

          {/* Mobile Info */}
          <div className="md:hidden text-center w-full flex justify-center">
            <p className="flex items-center justify-center gap-1">
              <FaEnvelope className="text-[#D4AF37]" />
              <span className="font-semibold text-[#D4AF37]">Email:</span>{" "}
              {COMPANY_INFO.email}
            </p>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full px-4 md:px-12 py-2 bg-white shadow-md relative z-50 font-body">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Usmani Decor Logo"
              className="h-14 md:h-16 object-contain drop-shadow-lg"
            />
            
          </Link>

          {/* Mobile Toggle */}
          <div className="md:hidden text-[#003B73]">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-xl" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-sm font-medium uppercase">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={navLinkClasses(item.path)}>
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 ml-6 text-[#003B73]">
              {Object.entries(socialLinks).map(([k, url]) => (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition"
                >
                  {React.createElement(
                    {
                      facebook: FaFacebookF,
                      instagram: FaInstagram,
                      pinterest: FaPinterest,
                      twitter: FaTwitter,
                      youtube: FaYoutube,
                      linkedin: FaLinkedinIn,
                      skype: FaSkype,
                    }[k],
                    { size: 16 }
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex"
            >
              {/* Panel */}
              <motion.div
                ref={panelRef}
                className="w-64 h-full bg-white shadow-lg px-6 py-4 flex flex-col font-body"
              >
                <div className="flex justify-between items-center mb-3">
                  <img src={logo} alt="Usmani Decor" className="h-12" />
                  <FaTimes
                    className="text-xl text-[#003B73] cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>
                <hr className="mb-4 border-[#6E6E6E]" />

                <nav className="flex flex-col gap-3 text-[#003B73] text-sm">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-2 ${
                        pathname === item.path
                          ? "font-semibold text-[#D4AF37]"
                          : "hover:text-[#C62828]"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-4 border-t border-[#6E6E6E] text-xs">
                  <p className="flex items-center gap-1 py-1">
                    <FaFileInvoice />{" "}
                    <strong className="text-[#D4AF37]">UDYAM:</strong>{" "}
                    {COMPANY_INFO.udyam}
                  </p>
                  <p className="flex gap-1">
                    <FaPhoneAlt />{" "}
                    <span className="font-semibold text-[#D4AF37]">Mobile:</span>{" "}
                    {COMPANY_INFO.mobile}
                  </p>
                    <p className="flex gap-1">
                    <FaPhoneAlt />{" "}
                    <span className="font-semibold text-[#D4AF37]">Mobile:</span>{" "}
                    {COMPANY_INFO.mobile1}
                  </p>
                  <div className="flex gap-3 mt-3 text-lg text-[#003B73]">
                    {Object.entries(socialLinks).map(([k, url]) => (
                      <a
                        key={k}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D4AF37]"
                      >
                        {React.createElement(
                          {
                            facebook: FaFacebookF,
                            instagram: FaInstagram,
                            pinterest: FaPinterest,
                            twitter: FaTwitter,
                            youtube: FaYoutube,
                            linkedin: FaLinkedinIn,
                            skype: FaSkype,
                          }[k]
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Overlay */}
              <div
                className="flex-1 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default ModernNavbar;

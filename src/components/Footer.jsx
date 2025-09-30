// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaImage,
  FaCertificate,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import bgFooter from "../assets/images/home/fot1.jpg"; 
// import pvcWall from "../assets/images/pvc-wall.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Tabs
const tabs = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "About", link: "/about", icon: <FaInfoCircle /> },
  { name: "Gallery", link: "/gallery", icon: <FaImage /> },
  { name: "Certificates", link: "/certificates", icon: <FaCertificate /> },
  { name: "Services", link: "/services", icon: <FaEnvelope /> },
  { name: "Contact", link: "/contact", icon: <FaPhoneAlt /> },
];

// Services
const services = [
  { title: "PVC Wall Panel", slug: "pvc-wall-panel", },
  { title: "Ceiling Panel", slug: "ceiling-panel",  },
  { title: "Charcoal Panel", slug: "charcoal-panel",  },
  { title: "WPS Louvers", slug: "wps-louvers",  },
  { title: "Fluted Panel", slug: "fluted-panel", },
  { title: "PVC Door", slug: "pvc-door",  },
  { title: "UV Marble Sheet", slug: "uv-marble-sheet", },
  { title: "Wallpaper", slug: "wallpaper", },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative pt-15 pb-10 px-6 md:px-16 overflow-hidden font-cursive1 text-gray-100"
      style={{
        backgroundImage: `url(${bgFooter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Glow Effects */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-[#D4AF37]/20 blur-[140px] rounded-full z-0" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-[#D4AF37]/20 blur-[140px] rounded-full z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About Section */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-4xl font-bold text-[#D4AF37] mb-8 font-cursive1">About Us</h4>
          <p className="leading-relaxed text-gray-300 text-lg">
            Usmani Decor is dedicated to transforming spaces with elegance and style. From interior design to premium paneling solutions, we turn your vision into reality.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#D4AF37] text-black font-semibold rounded hover:bg-[#1A609F] transition w-max"
            >
              Webmail Login
            </a>
          </div>
          <div className="mt-6 flex space-x-4">
            {[["https://www.instagram.com", FaInstagram], ["https://www.facebook.com/share/1JacN4cWrv/", FaFacebookF], ["https://www.youtube.com", FaYoutube]].map(([url, Icon], i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-white transition">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-4xl mb-6 text-[#D4AF37] font-bold ">Quick Links</h4>
          <ul className="space-y-2">
            {tabs.map(({ name, link, icon }, i) => (
              <li key={i}>
                <Link to={link} className="flex items-center gap-2 hover:text-[#D4AF37] transition">
                  {icon} {name}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-4xl text-[#D4AF37] font-bold font-cursive1">Emails</h4>
          <ul className="mt-2 space-y-2">
            {["Info@usmanidecor.com", "Usmanidecoraligarh@gmail.com"].map((email, i) => (
              <li key={i}>
                <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-[#D4AF37] transition">
                  <FaEnvelope className="text-[#D4AF37]" /> {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-4xl mb-6 text-[#D4AF37] font-bold font-cursive1">Our Services</h4>
          <ul className="space-y-2">
            {services.map(({ title, slug }, i) => (
              <li key={i}>
                <Link to={`/services/${slug}`} className="hover:text-[#D4AF37] transition">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-4xl mb-6 text-[#D4AF37] font-bold font-cursive1">Contact Info</h4>
          <address className="not-italic leading-relaxed mb-4 text-gray-300 text-sm">
            Plot No.12/2 Under Ground Floor Above SBI Kendra Seva Baraula Bypass Road Bank Colony Kundan Nagar Manesar Aligarh 202001 Uttar Pradesh
          </address>

          <p className="text-sm mb-3">
            <FaPhoneAlt className="inline text-[#D4AF37] mr-1" />
            <a href="tel:+917017479896">+91 7017479896</a>
          </p>
          <p className="text-sm mb-3">
            <FaPhoneAlt className="inline text-[#D4AF37] mr-1" />
            <a href="tel:+919027958538">+91 9027958538</a>
          </p>

          <div className="mb-4 flex justify-center items-center ">
            <div className="relative right-10 md:right-0">
            <Translator />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Usmani Decor. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a href="https://webworldhub.co.in" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#D4AF37] transition">
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}

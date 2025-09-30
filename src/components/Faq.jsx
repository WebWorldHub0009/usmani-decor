// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCouch, FaPalette, FaRulerCombined, FaPhoneAlt } from "react-icons/fa";

// Updated categories & icons for interior design
const faqCategories = {
  "Design Concepts": {
    icon: <FaPalette className="text-[#D4AF37] text-xl" />,
    faqs: [
      {
        question: "Do you provide customized interior designs?",
        answer:
          "Absolutely! Our team creates bespoke designs tailored to your style, space, and functionality requirements.",
      },
      {
        question: "Can you work with my existing furniture?",
        answer:
          "Yes, we integrate your current furniture and décor elements into the design while elevating the overall aesthetic.",
      },
      {
        question: "Do you follow modern interior trends?",
        answer:
          "We stay updated with global trends and combine them with timeless elegance to create luxurious, contemporary interiors.",
      },
    ],
  },
  "Space Planning": {
    icon: <FaRulerCombined className="text-[#D4AF37] text-xl" />,
    faqs: [
      {
        question: "Do you help with furniture layout?",
        answer:
          "Yes, we carefully plan layouts for optimal space utilization, comfort, and visual harmony.",
      },
      {
        question: "Can you optimize small spaces?",
        answer:
          "Our designs maximize every square foot, creating functional and stylish solutions for compact areas.",
      },
      {
        question: "Do you offer 3D visualizations?",
        answer:
          "Yes, we provide realistic 3D renderings so you can visualize your dream space before execution.",
      },
    ],
  },
  "Material & Finishes": {
    icon: <FaCouch className="text-[#D4AF37] text-xl" />,
    faqs: [
      {
        question: "Do you use premium materials?",
        answer:
          "We source high-quality materials to ensure durability, elegance, and luxury in every project.",
      },
      {
        question: "Can I choose my own color palette?",
        answer:
          "Absolutely! We collaborate with you to select colors, textures, and finishes that match your style.",
      },
      {
        question: "Are eco-friendly options available?",
        answer:
          "Yes, we provide sustainable and eco-conscious materials wherever possible without compromising design.",
      },
    ],
  },
  "Consultation & Support": {
    icon: <FaPhoneAlt className="text-[#D4AF37] text-xl" />,
    faqs: [
      {
        question: "How can I schedule a consultation?",
        answer:
          "You can book online, call us directly, or visit our office. We ensure a personalized consultation experience.",
      },
      {
        question: "Do you offer project management?",
        answer:
          "Yes, we manage the entire project from concept to completion, ensuring smooth execution and timely delivery.",
      },
      {
        question: "Can I get post-project support?",
        answer:
          "Absolutely! We provide guidance and support even after project completion to maintain the luxury standard.",
      },
    ],
  },
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Design Concepts");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setOpenIndex(null);
    setActiveTab(tab);
  };

  return (
    <section className="relative w-full py-16 px-4 md:px-12 bg-white font-cursive1 text-gray-900 overflow-hidden">
      
      {/* Background Golden & Gray shapes */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-3xl animate-pulse-slow delay-500"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-cursive2 text-[#D4AF37] font-extrabold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
          Get answers about <span className="font-semibold text-red-600">Usmani Decor</span> services, designs, and support.
        </p>
      </div>

      {/* Tabs + Accordion */}
      <div className="flex flex-col md:flex-row gap-6 relative z-10">
        
        {/* Tabs */}
        <div className="md:w-1/3 flex flex-col gap-4">
          {Object.entries(faqCategories).map(([category, data], idx) => (
            <motion.button
              key={idx}
              onClick={() => handleTabChange(category)}
              whileTap={{ scale: 0.97 }}
              className={`text-left w-full px-5 py-4 rounded-xl flex items-center gap-3 font-semibold text-sm md:text-base transition-all duration-300 shadow-sm ${
                activeTab === category
                  ? "bg-[#D4AF37] text-gray-900 shadow-lg"
                  : "bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
              }`}
            >
              {data.icon}
              <span>{category}</span>
            </motion.button>
          ))}
        </div>

        {/* Accordion */}
        <div className="md:w-2/3 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {faqCategories[activeTab].faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                  <button
                    className="w-full flex justify-between items-center text-left font-cursive2 font-medium text-lg md:text-xl hover:text-[#D4AF37] transition-colors"
                    onClick={() =>
                      setOpenIndex(index === openIndex ? null : index)
                    }
                  >
                    {faq.question}
                    <span className="text-[#D4AF37] text-2xl font-bold">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-700 mt-3 text-sm md:text-base leading-relaxed font-cursive1 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

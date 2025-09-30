import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModernNavbar from "./components/ModernNavbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/FloatingButtons"
import FloatingButtons from "./components/FloatingButtons";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));

// Optional: fallback loader component
const Loader = () => (
  <div className="w-full h-screen flex items-center justify-center text-2xl font-bold">
    Loading...
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <ModernNavbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <FloatingButtons/>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

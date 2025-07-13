import React, { useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Initialize AOS when component mounts
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
  }, []);

  return (
    <div className="scroll-smooth">
      {/* Floating Theme Toggle */}
      <motion.button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 glass dark:glass-dark rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <i className={`fas ${theme === "dark" ? "fa-sun text-yellow-400" : "fa-moon text-blue-400"} text-lg`}></i>
      </motion.button>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

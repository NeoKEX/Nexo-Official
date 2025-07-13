import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950"></div>
      
      {/* Animated Gradient Waves */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-green-400/20 to-blue-800/20 animate-gradient bg-[length:200%_200%]"></div>
      </div>
      
      {/* Floating Particles */}
      <motion.div 
        className="absolute top-20 left-1/4 w-4 h-4 bg-blue-400 rounded-full"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full"
        animate={{ 
          y: [0, -40, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/6 w-2 h-2 bg-blue-300 rounded-full"
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-2/3 right-1/3 w-6 h-6 bg-green-300 rounded-full"
        animate={{ 
          y: [0, -35, 0],
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Hero Tagline */}
          <motion.h1 
            className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          >
            Crafting Scalable
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-green-300 to-blue-500 bg-clip-text text-transparent">
              Web Solutions
            </span>
            <br />
            with Precision
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Full-stack developer specializing in TypeScript, API integration, and scalable architecture
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold rounded-full overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium tracking-wider">SCROLL</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            whileHover={{ borderColor: "rgba(255,255,255,0.8)" }}
          >
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

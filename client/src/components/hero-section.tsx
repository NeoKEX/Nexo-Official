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
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-green-500/20 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-600/30 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl mb-6">
            <span className="text-gradient">Saifullah Al Neoaz</span>
          </h1>
          <h2 className="font-poppins font-semibold text-2xl md:text-3xl lg:text-4xl mb-4 text-slate-700 dark:text-slate-300">
            (nexo_here)
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Crafting Scalable Web Solutions with Precision
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => scrollToSection("portfolio")}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
        
        {/* Tech Stack Preview */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">Tech Stack</p>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            {/* TypeScript */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-12 h-12 glass dark:glass-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-js-square text-2xl text-blue-500"></i>
              </div>
              <p className="text-xs mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">TypeScript</p>
            </motion.div>
            
            {/* Node.js */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-12 h-12 glass dark:glass-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-node-js text-2xl text-green-500"></i>
              </div>
              <p className="text-xs mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">Node.js</p>
            </motion.div>
            
            {/* GitHub */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-12 h-12 glass dark:glass-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-github text-2xl text-slate-700 dark:text-slate-300"></i>
              </div>
              <p className="text-xs mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">GitHub</p>
            </motion.div>
            
            {/* Replit */}
            <motion.div 
              className="group cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-12 h-12 glass dark:glass-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-code text-2xl text-orange-500"></i>
              </div>
              <p className="text-xs mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">Replit</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

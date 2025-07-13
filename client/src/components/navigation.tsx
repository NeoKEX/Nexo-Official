import React, { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 glass dark:glass-dark transition-transform duration-300 ${
      isScrolled ? "shadow-lg" : ""
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-poppins font-bold text-xl text-gradient cursor-pointer"
               onClick={() => scrollToSection("home")}>
            Xoro
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "services", "portfolio", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-blue-500 transition-colors duration-300 ${
                  activeSection === section ? "text-blue-500" : ""
                }`}
              >
                {section}
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg glass dark:glass-dark hover:bg-blue-500/20 transition-all duration-300"
            >
              <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg glass dark:glass-dark"
            >
              <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg glass dark:glass-dark"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass dark:glass-dark rounded-lg">
            <div className="flex flex-col space-y-4">
              {["home", "about", "services", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-left hover:text-blue-500 transition-colors duration-300 ${
                    activeSection === section ? "text-blue-500" : ""
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import React from "react";

export default function Footer() {
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

  const quickLinks = ["home", "about", "services", "portfolio", "contact"];
  
  const contactInfo = [
    { icon: "fas fa-envelope", text: "salneowaz@gmail.com", color: "text-blue-500" },
    { icon: "fas fa-phone", text: "+880 1609-189135", color: "text-blue-500" },
    { icon: "fas fa-map-marker-alt", text: "Dinajpur, Bangladesh", color: "text-blue-500" },
    { icon: "fas fa-graduation-cap", text: "Holy Lang College", color: "text-blue-500" }
  ];

  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/nexo-here" },
    { icon: "fab fa-facebook", url: "https://www.facebook.com/share/19bxfCDATi/?mibextid=qi2Omg" },
    { icon: "fab fa-instagram", url: "https://www.instagram.com/nexo.o.o/" },
    { icon: "fab fa-whatsapp", url: "https://wa.me/8801609189135" }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-poppins font-bold text-xl text-gradient mb-4">Saifullah Al Neoaz</h3>
            <p className="mb-4">
              Passionate web developer from Dinajpur, Bangladesh. Specializing in modern web technologies and creating scalable solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => scrollToSection(link)}
                    className="capitalize hover:text-blue-500 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-white">Contact Info</h3>
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <p key={index}>
                  <i className={`${info.icon} mr-2 ${info.color}`}></i>
                  {info.text}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 Saifullah Al Neoaz (Xoro). All rights reserved. Built with passion and modern web technologies.</p>
        </div>
      </div>
    </footer>
  );
}

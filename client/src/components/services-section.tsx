import React from "react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-globe",
      title: "Custom Website Development",
      description: "Build responsive, fast, and scalable websites using modern technologies like React, TypeScript, and Node.js.",
      features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Modern Tech Stack"],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-500"
    },
    {
      icon: "fas fa-robot",
      title: "Bot Development",
      description: "Create intelligent bots for Discord, Telegram, or custom platforms to automate tasks and enhance user experience.",
      features: ["Discord Bots", "Telegram Bots", "API Integration", "Custom Features"],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-500"
    },
    {
      icon: "fas fa-plug",
      title: "API Integration & Development",
      description: "Seamlessly connect your applications with third-party services or build custom APIs for your business needs.",
      features: ["REST API Development", "Third-party Integration", "Database Design", "Security Implementation"],
      color: "from-blue-500 to-green-500",
      iconColor: "text-blue-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-gradient">Services</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional development services tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass dark:glass-dark rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className={`fas fa-check ${service.iconColor} mr-2`}></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center" 
          data-aos="fade-up" 
          data-aos-delay="400"
          whileHover={{ scale: 1.02 }}
        >
          <div className="glass dark:glass-dark rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="font-poppins font-bold text-3xl mb-4 text-gradient">Ready to Start Your Project?</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Let's collaborate to bring your ideas to life with cutting-edge web technologies
            </p>
            <motion.button
              onClick={scrollToContact}
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Build Something Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

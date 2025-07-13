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
    <section id="services" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Section Divider Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-slate-50 dark:fill-slate-900"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <motion.h2 
            className="font-poppins font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-green-600 via-blue-500 to-green-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional development services emphasizing scalability, automation, and clean architecture
          </motion.p>
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
              className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Hire Me to Build Your Next Project</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

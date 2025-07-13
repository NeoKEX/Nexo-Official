import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: ""
  });
  const { toast } = useToast();

  const contactMethods = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "salneowaz@gmail.com",
      link: "mailto:salneowaz@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      value: "+880 1609-189135",
      link: "https://wa.me/8801609189135",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "fab fa-facebook",
      title: "Facebook",
      value: "Connect on Facebook",
      link: "https://www.facebook.com/share/19bxfCDATi/?mibextid=qi2Omg",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "fab fa-instagram",
      title: "Instagram",
      value: "@nexo.o.o",
      link: "https://www.instagram.com/nexo.o.o/",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/nexo-here",
      link: "https://github.com/nexo-here",
      color: "from-gray-700 to-gray-900"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook", url: "https://www.facebook.com/share/19bxfCDATi/?mibextid=qi2Omg", color: "bg-blue-500 hover:bg-blue-600" },
    { icon: "fab fa-instagram", url: "https://www.instagram.com/nexo.o.o/", color: "bg-gradient-to-br from-pink-500 to-purple-600 hover:opacity-80" },
    { icon: "fab fa-github", url: "https://github.com/nexo-here", color: "bg-gray-800 hover:bg-gray-900" },
    { icon: "fab fa-whatsapp", url: "https://wa.me/8801609189135", color: "bg-green-500 hover:bg-green-600" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real implementation, this would send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      budget: ""
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-gradient">Get In Touch</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to start your project? Let's connect and bring your ideas to life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="glass dark:glass-dark rounded-2xl p-8"
            data-aos="fade-right"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-poppins font-semibold text-2xl mb-8 text-blue-500">Let's Connect</h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${method.icon} text-white`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">{method.title}</h4>
                    <span className="text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors">
                      {method.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Social Media Quick Links */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Follow me on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${social.color} text-white rounded-lg flex items-center justify-center transition-all`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="glass dark:glass-dark rounded-2xl p-8"
            data-aos="fade-left"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-poppins font-semibold text-2xl mb-8 text-green-500">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 glass dark:glass-dark rounded-lg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:outline-none transition-colors" 
                  placeholder="Enter your full name" 
                  required 
                />
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 glass dark:glass-dark rounded-lg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:outline-none transition-colors" 
                  placeholder="Enter your email address" 
                  required 
                />
              </div>
              
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 glass dark:glass-dark rounded-lg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:outline-none transition-colors" 
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="website">Website Development</option>
                  <option value="bot">Bot Development</option>
                  <option value="api">API Integration</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 glass dark:glass-dark rounded-lg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:outline-none transition-colors resize-none" 
                  placeholder="Tell me about your project..." 
                  required
                />
              </div>
              
              {/* Budget (Optional) */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold mb-2">Project Budget (Optional)</label>
                <select 
                  id="budget" 
                  name="budget" 
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 glass dark:glass-dark rounded-lg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>
              
              {/* Submit Button */}
              <motion.button
                type="submit" 
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-paper-plane mr-2"></i>Send Message
              </motion.button>
            </form>
            
            {/* Quick Response Notice */}
            <div className="mt-6 p-4 glass dark:glass-dark rounded-lg">
              <div className="flex items-center space-x-3">
                <i className="fas fa-clock text-blue-500"></i>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  I typically respond within 24 hours. For urgent inquiries, please contact me via WhatsApp.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

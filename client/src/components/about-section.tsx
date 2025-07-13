import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const skills = [
    { name: "TypeScript", percentage: 90, color: "from-blue-500 to-blue-600" },
    { name: "API Integration", percentage: 85, color: "from-blue-500 to-green-500" },
    { name: "Bot Development", percentage: 88, color: "from-green-500 to-green-600" },
    { name: "Debugging", percentage: 92, color: "from-green-500 to-blue-500" },
    { name: "Modular Design", percentage: 87, color: "from-blue-500 to-blue-700" }
  ];

  const additionalSkills = [
    "React", "Node.js", "Express", "MongoDB", "Git", "REST API"
  ];

  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate developer crafting innovative web solutions from Dinajpur, Bangladesh
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div 
            className="glass dark:glass-dark rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
            data-aos="fade-right"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-poppins font-semibold text-2xl mb-6 text-blue-500">Personal Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-user w-6 text-blue-500"></i>
                <div>
                  <span className="font-semibold">Name:</span>
                  <span className="ml-2 text-slate-600 dark:text-slate-400">Saifullah Al Neoaz (nexo_here)</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <i className="fas fa-graduation-cap w-6 text-blue-500"></i>
                <div>
                  <span className="font-semibold">College:</span>
                  <span className="ml-2 text-slate-600 dark:text-slate-400">Holy Lang College, Dinajpur</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt w-6 text-blue-500"></i>
                <div>
                  <span className="font-semibold">Location:</span>
                  <span className="ml-2 text-slate-600 dark:text-slate-400">Dinajpur, Bangladesh</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <i className="fas fa-school w-6 text-blue-500"></i>
                <div>
                  <span className="font-semibold">Class:</span>
                  <span className="ml-2 text-slate-600 dark:text-slate-400">HSC26</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <i className="fas fa-code w-6 text-blue-500"></i>
                <div>
                  <span className="font-semibold">Profession:</span>
                  <span className="ml-2 text-slate-600 dark:text-slate-400">Web Developer</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <i className="fab fa-github w-6 text-blue-500"></i>
                <div>
                  <span className="font-semibold">GitHub:</span>
                  <a href="https://github.com/nexo-here" target="_blank" rel="noopener noreferrer" 
                     className="ml-2 text-blue-500 hover:text-blue-600 transition-colors">
                    github.com/nexo-here
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Skills */}
          <motion.div 
            className="glass dark:glass-dark rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
            data-aos="fade-left"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-poppins font-semibold text-2xl mb-6 text-green-500">Core Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-blue-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <motion.div 
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Skills Tags */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Additional Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((skill, index) => (
                  <motion.span 
                    key={skill}
                    className={`px-3 py-1 ${index % 2 === 0 ? 'bg-blue-500/20 text-blue-500' : 'bg-green-500/20 text-green-500'} rounded-full text-sm`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

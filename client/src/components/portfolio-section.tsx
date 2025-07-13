import React from "react";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
      githubUrl: "https://github.com/nexo-here",
      liveUrl: "#"
    },
    {
      title: "Discord Moderation Bot",
      description: "Advanced Discord bot with moderation features, custom commands, and database integration. Serves 10,000+ users across multiple servers.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Discord.js", "TypeScript", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/nexo-here",
      liveUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization, user management, and API integrations. Built for enterprise-level data processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "Chart.js", "Express", "Socket.io"],
      githubUrl: "https://github.com/nexo-here",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Cross-platform mobile application for task management with real-time sync, offline support, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      githubUrl: "https://github.com/nexo-here",
      liveUrl: "#"
    },
    {
      title: "AI Content Generator",
      description: "Intelligent content generation tool using OpenAI API with custom fine-tuning for specific use cases and automated workflow integration.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["OpenAI API", "Python", "FastAPI", "Docker"],
      githubUrl: "https://github.com/nexo-here",
      liveUrl: "#"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools integrated with multiple exchanges.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "WebSocket", "CoinGecko API", "PWA"],
      githubUrl: "https://github.com/nexo-here",
      liveUrl: "#"
    }
  ];

  const stats = [
    { label: "Repositories", value: "50+", color: "text-blue-500" },
    { label: "Commits This Year", value: "200+", color: "text-green-500" },
    { label: "Active Projects", value: "15+", color: "text-blue-500" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-gradient">Portfolio</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing my latest projects and technical achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass dark:glass-dark rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className={`px-2 py-1 ${idx % 2 === 0 ? 'bg-blue-500/20 text-blue-500' : 'bg-green-500/20 text-green-500'} rounded text-xs`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className="fab fa-github mr-2"></i>Code
                  </motion.a>
                  <motion.a 
                    href={project.liveUrl}
                    className="flex items-center text-green-500 hover:text-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* GitHub Stats */}
        <motion.div 
          className="mt-16 text-center" 
          data-aos="fade-up" 
          data-aos-delay="700"
          whileHover={{ scale: 1.02 }}
        >
          <div className="glass dark:glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-poppins font-semibold text-2xl mb-6 text-gradient">GitHub Activity</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <motion.a 
                href="https://github.com/nexo-here" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github mr-2"></i>View All Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

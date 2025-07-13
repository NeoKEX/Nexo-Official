import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchGitHubRepos, fetchRepoLanguages, getTechnologyIcon, formatDate, type GitHubRepo } from "@/lib/github";

export default function PortfolioSection() {
  // Fetch real GitHub repositories
  const { data: repos, isLoading, error } = useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchGitHubRepos,
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
    retry: 3
  });

  const [reposWithLanguages, setReposWithLanguages] = useState<(GitHubRepo & { languages: string[] })[]>([]);

  // Fetch languages for each repository
  useEffect(() => {
    if (repos) {
      const fetchAllLanguages = async () => {
        const reposWithLangs = await Promise.all(
          repos.map(async (repo) => {
            try {
              const languages = await fetchRepoLanguages(repo.languages_url);
              return { ...repo, languages };
            } catch (error) {
              console.error(`Error fetching languages for ${repo.name}:`, error);
              return { ...repo, languages: repo.language ? [repo.language] : [] };
            }
          })
        );
        setReposWithLanguages(reposWithLangs);
      };

      fetchAllLanguages();
    }
  }, [repos]);

  // Calculate dynamic stats from GitHub data
  const stats = [
    { 
      label: "Public Repositories", 
      value: repos ? `${repos.length}+` : "Loading...", 
      color: "text-blue-500" 
    },
    { 
      label: "Total Stars", 
      value: repos ? `${repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}+` : "Loading...", 
      color: "text-yellow-500" 
    },
    { 
      label: "Total Forks", 
      value: repos ? `${repos.reduce((sum, repo) => sum + repo.forks_count, 0)}+` : "Loading...", 
      color: "text-green-500" 
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 relative overflow-hidden">
      {/* Section Divider Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white dark:fill-slate-950"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <motion.h2 
            className="font-poppins font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Showcasing my latest projects and technical achievements
          </motion.p>
        </div>
        
        {/* GitHub Repositories Loading and Error States */}
        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="glass dark:glass-dark rounded-2xl p-6 animate-pulse">
                <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded mb-4"></div>
                <div className="h-3 bg-slate-300 dark:bg-slate-600 rounded mb-2"></div>
                <div className="h-3 bg-slate-300 dark:bg-slate-600 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-slate-300 dark:bg-slate-600 rounded"></div>
                  <div className="h-6 w-16 bg-slate-300 dark:bg-slate-600 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="glass dark:glass-dark rounded-2xl p-8 max-w-md mx-auto">
              <i className="fas fa-exclamation-triangle text-yellow-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Unable to Load Projects</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {error instanceof Error ? error.message : "There was an issue connecting to GitHub. Please check back later."}
              </p>
              <motion.a 
                href="https://github.com/nexo-here" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fab fa-github mr-2"></i>View on GitHub
              </motion.a>
            </div>
          </div>
        )}

        {/* No repositories found message */}
        {!isLoading && !error && reposWithLanguages.length === 0 && (
          <div className="text-center py-12">
            <div className="glass dark:glass-dark rounded-2xl p-8 max-w-md mx-auto">
              <i className="fas fa-code text-blue-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Currently loading projects or no public repositories are available.
              </p>
              <motion.a 
                href="https://github.com/nexo-here" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fab fa-github mr-2"></i>Visit GitHub Profile
              </motion.a>
            </div>
          </div>
        )}

        {/* Real GitHub Projects Grid */}
        {reposWithLanguages.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reposWithLanguages.map((repo, index) => (
              <motion.div
                key={repo.id}
                className="glass dark:glass-dark rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -5 }}
              >
                {/* Repository Header with Gradient */}
                <div className="relative bg-gradient-to-r from-blue-500 to-green-500 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-poppins font-semibold text-lg text-white truncate">
                      {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </h3>
                    <div className="flex items-center space-x-2 text-white/80">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center text-sm">
                          <i className="fas fa-star mr-1"></i>
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center text-sm">
                          <i className="fas fa-code-fork mr-1"></i>
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {repo.description || "A project by nexo_here showcasing modern development practices and clean code architecture."}
                  </p>

                  {/* Languages/Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.languages.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                      >
                        <i className={`${getTechnologyIcon(tech)} mr-1`}></i>
                        {tech}
                      </span>
                    ))}
                    {repo.topics.slice(0, 2).map((topic, idx) => (
                      <span 
                        key={`topic-${idx}`}
                        className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded text-xs"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>

                  {/* Repository Links and Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <motion.a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        <i className="fab fa-github mr-2"></i>Source
                      </motion.a>
                      {repo.homepage && (
                        <motion.a 
                          href={repo.homepage}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-green-500 hover:text-green-600 transition-colors font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>Live
                        </motion.a>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
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

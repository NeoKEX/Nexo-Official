export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  languages_url: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  private: boolean;
}

export interface GitHubLanguages {
  [key: string]: number;
}

const GITHUB_USERNAME = 'nexo-here';
const GITHUB_API_BASE = 'https://api.github.com';

/**
 * Fetch public repositories from GitHub API
 */
export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`);
    
    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('GitHub API rate limit exceeded. Please try again later.');
      }
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    
    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forks and focus on original work
    const filteredRepos = repos
      .filter(repo => !repo.fork && !repo.private)
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .slice(0, 6); // Show top 6 most recently updated projects
    
    // If no original repos found, show all public repos (including forks)
    if (filteredRepos.length === 0) {
      return repos
        .filter(repo => !repo.private)
        .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
        .slice(0, 6);
    }
    
    return filteredRepos;
      
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
}

/**
 * Fetch languages used in a repository
 */
export async function fetchRepoLanguages(languagesUrl: string): Promise<string[]> {
  try {
    const response = await fetch(languagesUrl);
    
    if (!response.ok) {
      throw new Error(`GitHub Languages API error: ${response.status}`);
    }
    
    const languages: GitHubLanguages = await response.json();
    
    // Return languages sorted by usage (bytes of code)
    return Object.keys(languages)
      .sort((a, b) => languages[b] - languages[a])
      .slice(0, 4); // Show top 4 languages
      
  } catch (error) {
    console.error('Error fetching repository languages:', error);
    return [];
  }
}

/**
 * Get technology icon class for known technologies
 */
export function getTechnologyIcon(tech: string): string {
  const iconMap: { [key: string]: string } = {
    JavaScript: 'fab fa-js-square text-yellow-500',
    TypeScript: 'fab fa-js-square text-blue-500',
    Python: 'fab fa-python text-green-500',
    React: 'fab fa-react text-cyan-500',
    'Next.js': 'fab fa-react text-white',
    Node: 'fab fa-node-js text-green-600',
    HTML: 'fab fa-html5 text-orange-500',
    CSS: 'fab fa-css3-alt text-blue-600',
    Vue: 'fab fa-vuejs text-green-400',
    PHP: 'fab fa-php text-purple-500',
    Java: 'fab fa-java text-red-500',
    'C++': 'fas fa-code text-blue-400',
    Go: 'fab fa-golang text-cyan-600',
    Rust: 'fas fa-gear text-orange-600',
    Docker: 'fab fa-docker text-blue-500',
    Git: 'fab fa-git-alt text-red-500'
  };
  
  return iconMap[tech] || 'fas fa-code text-gray-500';
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
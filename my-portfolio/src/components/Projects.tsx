import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/jfhaque/repos")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub API Error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          throw new Error("Invalid response format");
        }
      })
      .catch((err) => {
        console.error("Error fetching GitHub repos:", err);
        setError("Failed to fetch projects. GitHub API rate limit exceeded or blocked.");
      });
  }, []);

  return (
    <section id="projects" className="bg-blue-50 text-darkBlue min-h-[90vh] py-32 px-6 relative">
      <h2 className="text-4xl font-bold text-center text-blue-900">Projects</h2>

      {error ? (
        <p className="text-center text-red-600 mt-4">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 max-w-6xl mx-auto">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="bg-lightBlue p-6 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-black">{repo.name}</h3>
              <p className="text-gray-700">{repo.description || "No description available."}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;

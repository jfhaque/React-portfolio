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

  useEffect(() => {
    fetch("https://api.github.com/users/jfhaque/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section id="projects" className="bg-darkBlue text-whiteText py-16">
      <h2 className="text-4xl font-bold text-center text-lightBlue">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 max-w-6xl mx-auto">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            className="bg-mediumBlue p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-lightBlue">{repo.name}</h3>
            <p className="text-gray-300">{repo.description || "No description available."}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightBlue hover:underline mt-4 inline-block"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

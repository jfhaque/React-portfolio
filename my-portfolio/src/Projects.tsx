import React, { useEffect, useState } from "react";

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
    <section id="projects" className="p-8">
      <h2 className="text-3xl font-bold text-center text-blue-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-gray-400">{repo.description}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

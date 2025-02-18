import React from "react";

const Profile: React.FC = () => {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-400">Junaid Haque</h1>
      <p className="text-lg mt-2">
        Game Developer with 3+ years of experience in AI-driven gameplay, game design, and 
        performance optimization. Proficient in C++ and skilled in rapid prototyping, debugging, 
        and enhancing player immersion.
      </p>
      <div className="mt-4">
        <a
          href="https://github.com/jfhaque"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mx-2"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/junaid-haque/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mx-2"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Profile;

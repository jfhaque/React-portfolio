import React from "react";
import { motion } from "framer-motion";

const Profile: React.FC = () => {
  return (
    <section className="p-12 text-center bg-[#003366]">
      <motion.img 
        src="https://via.placeholder.com/150" // Replace with your actual image URL
        alt="Junaid Haque"
        className="w-40 h-40 rounded-full mx-auto shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1 
        className="text-5xl font-bold text-blue-300 mt-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Junaid Haque
      </motion.h1>

      <motion.p 
        className="text-lg mt-4 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Game Developer | AI Gameplay | Unreal & Unity Specialist
      </motion.p>

      <motion.div 
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <a
          href="https://github.com/jfhaque"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mx-2"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/junaid-haque/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mx-2"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Profile;

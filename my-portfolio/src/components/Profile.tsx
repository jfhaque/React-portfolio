import React, { useState } from "react";
import { motion } from "framer-motion";

const Profile: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 10;
    const y = (clientY / window.innerHeight - 0.5) * 10;
    setRotate({ x, y });
  };

  return (
    <section id="profile" className="bg-blue-100 text-center pt-32 pb-40 relative min-h-screen">
      {/* Profile Picture */}
      <motion.div
        className="w-80 h-80 rounded-full mx-auto shadow-2xl border-8 border-accentBlue"
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        onMouseMove={handleMouseMove}
      >
        <img src={require("./images/profile.jpg")} alt="Junaid Haque" className="rounded-full w-full h-full object-cover" />
      </motion.div>

      {/* Name */}
      <motion.h1 className="text-7xl font-bold text-darkBlue mt-8">Junaid Haque</motion.h1>

      {/* Job Titles */}
      <motion.p className="text-2xl mt-6 text-darkBlue max-w-3xl mx-auto leading-relaxed">
        Game Developer | AI Gameplay | Unreal & Unity Specialist
      </motion.p>

      {/* About Me Section */}
      <motion.div
        className="bg-blue-200 text-black mt-16 py-12 px-8 rounded-lg max-w-5xl mx-auto shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg text-center">
          I am a passionate Game Developer with 3+ years of experience in AI-driven gameplay, game design, and performance optimization.
          Skilled in C++, Unreal Engine, and Unity, I specialize in creating immersive gaming experiences. 
          My expertise includes gameplay systems, AI behaviors, and rapid prototyping.
          I love solving complex problems and collaborating to create outstanding games!
        </p>
      </motion.div>
    </section>
  );
};

export default Profile;

import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-lightGray text-darkBlue py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-center max-w-3xl mx-auto mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I am a passionate **Game Developer** with 3+ years of experience in **AI-driven gameplay, game design, and performance optimization**. 
        Skilled in **C++, Unreal Engine, and Unity**, I specialize in creating immersive gaming experiences. 
        My expertise includes **gameplay systems, AI behaviors, and rapid prototyping**. 
        I love solving complex problems and collaborating to create outstanding games!
      </motion.p>
    </section>
  );
};

export default About;

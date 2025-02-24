import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-mediumBlue text-darkBlue py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-darkBlue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-center max-w-3xl mx-auto mt-4 text-textDark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I am a passionate <span className="text-darkBlue font-bold">Game Developer</span> with 
        <span className="text-accentBlue font-bold"> 3+ years</span> of experience in 
        <span className="text-darkBlue font-bold"> AI-driven gameplay, game design, and performance optimization</span>. 
        Skilled in <span className="text-accentBlue font-bold">C++, Unreal Engine, and Unity</span>, 
        I specialize in creating immersive gaming experiences. My expertise includes 
        <span className="text-darkBlue font-bold"> gameplay systems, AI behaviors, and rapid prototyping</span>. 
        I love solving complex problems and collaborating to create outstanding games!
      </motion.p>
    </section>
  );
};

export default About;

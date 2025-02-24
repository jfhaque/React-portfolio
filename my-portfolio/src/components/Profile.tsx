import React from "react";
import { motion } from "framer-motion";

const Profile: React.FC = () => {
  return (
    <section id="profile" className="bg-primaryBlue text-center py-32">
      <motion.img
        src={require("./images/profile.jpg")}
        alt="Junaid Haque"
        className="w-80 h-80 rounded-full mx-auto shadow-2xl border-8 border-accentBlue"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-7xl font-bold text-darkBlue mt-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Junaid Haque
      </motion.h1>

      <motion.p
        className="text-2xl mt-6 text-textDark max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-accentBlue font-bold">Game Developer</span> | 
        <span className="text-darkBlue font-bold"> AI Gameplay</span> | 
        <span className="text-accentBlue font-bold"> Unreal & Unity Specialist</span>
      </motion.p>
    </section>
  );
};

export default Profile;

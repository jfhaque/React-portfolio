import React from "react";
import { motion } from "framer-motion";

const Profile: React.FC = () => {
  return (
    <section id="profile" className="bg-lightBlue text-center py-16">
      <motion.img
        src="/images/profile.jpg" // Ensure this matches the filename in public/images/
        alt="Junaid Haque"
        className="w-40 h-40 rounded-full mx-auto shadow-lg border-4 border-darkBlue"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-5xl font-bold text-darkBlue mt-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Junaid Haque
      </motion.h1>

      <motion.p
        className="text-lg mt-4 text-gray-800 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Game Developer | AI Gameplay | Unreal & Unity Specialist
      </motion.p>
    </section>
  );
};

export default Profile;

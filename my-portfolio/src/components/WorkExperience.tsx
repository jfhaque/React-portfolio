import React from "react";
import { motion } from "framer-motion";

const WorkExperience: React.FC = () => {
  return (
    <section id="work" className="bg-white text-darkBlue py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Work Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto mt-6">
        {/* Job 1 */}
        <motion.div
          className="mb-8 p-6 bg-lightGray rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold">Game Developer - Carnegie Learning</h3>
          <p className="text-gray-700">May 2022 - Jan 2025 | St. John's, Canada</p>
          <ul className="list-disc mt-2 pl-5">
            <li>Developed and optimized gameplay mechanics and AI-driven systems.</li>
            <li>Improved game performance by 25% through multi-threaded solutions.</li>
            <li>Refined animation trees and enhanced character interactions.</li>
          </ul>
        </motion.div>

        {/* Job 2 */}
        <motion.div
          className="p-6 bg-lightGray rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold">Game Development Intern - Carnegie Learning</h3>
          <p className="text-gray-700">Jan 2021 - Apr 2022 | St. John's, Canada</p>
          <ul className="list-disc mt-2 pl-5">
            <li>Assisted in developing core gameplay mechanics and AI behavior.</li>
            <li>Debugged AI and animation issues to improve game responsiveness.</li>
            <li>Prototyped two game mechanics that were successfully implemented.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;

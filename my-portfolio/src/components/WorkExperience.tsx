import React from "react";
import { motion } from "framer-motion";

const WorkExperience: React.FC = () => {
  return (
    <section id="work" className="bg-darkBlue text-white py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Work Experience
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={require("./images/work.jpg")} alt="Work Experience" className="w-80 h-auto rounded-lg shadow-lg border-4 border-white" />
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Job 1 */}
          <div className="p-6 bg-white shadow-md rounded-lg border-l-4 border-accentBlue">
            <h3 className="text-2xl font-semibold text-darkBlue">Game Developer - Carnegie Learning</h3>
            <p className="text-gray-700">May 2022 - Jan 2025 | St. John's, Canada</p>
            <ul className="list-disc mt-2 pl-5 text-textDark">
              <li>Developed and optimized AI-driven gameplay mechanics.</li>
              <li>Improved game performance by 25% using multi-threading.</li>
              <li>Refined animation trees for enhanced character movement.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="p-6 bg-white shadow-md rounded-lg border-l-4 border-accentBlue">
            <h3 className="text-2xl font-semibold text-darkBlue">Game Development Intern - Carnegie Learning</h3>
            <p className="text-gray-700">Jan 2021 - Apr 2022 | St. John's, Canada</p>
            <ul className="list-disc mt-2 pl-5 text-textDark">
              <li>Assisted in AI development for gameplay mechanics.</li>
              <li>Debugged AI and animation interactions.</li>
              <li>Prototyped two game mechanics for final integration.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;

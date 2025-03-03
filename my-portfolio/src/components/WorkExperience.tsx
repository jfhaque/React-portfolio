import React from "react";
import { motion } from "framer-motion";

const WorkExperience: React.FC = () => {
  return (
    <section id="work" className="w-full bg-blue-70 text-white min-h-[90vh] py-32 relative">

      <motion.h2
        className="text-4xl font-bold text-center text-blue-900 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Work Experience
      </motion.h2>

      {/* Work Experience Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Side - Image */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={require("./images/work.jpg")} alt="Work Experience" className="w-500 h-auto rounded-lg shadow-lg" />
        </motion.div>

        {/* Right Side - Experience Text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Job 1 */}
          <div className="p-6 bg-blue-300 text-black shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold">Game Developer - Carnegie Learning</h3>
            <p className="text-gray-700">May 2022 - Jan 2025 | St. John's, Canada</p>
            <ul className="list-disc mt-2 pl-5 text-sm">
              <li>Developed and optimized robust gameplay mechanics and AI-driven systems in Unity and C++, enhancing interactive player experiences for more than 5.5 million users.
              </li>
              <li>Implemented gameplay features and rapid prototypes, iterating based on team and user feedback to enhance player engagement.
              </li>
              <li>Improved game performance by 25% through multi-threaded solutions, memory management, and asset optimization, ensuring a seamless experience across platforms.
              </li>
              <li>Integrated and refined animation trees, ensuring smooth character movement and gameplay mechanics.</li>
              <li>Mentored junior developers, fostering skills in AI, gameplay, and engine optimization.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="p-6 bg-blue-300 text-black shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold">Game Development Intern - Carnegie Learning</h3>
            <p className="text-gray-700">Jan 2021 - Apr 2022 | St. John's, Canada</p>
            <ul className="list-disc mt-2 pl-5 text-sm">
              <li>Assisted in the development of core gameplay mechanics, including AI behavior and interactive elements.</li>
              <li>Debugged AI and animation interactions, improving game stability and responsiveness.</li>
              <li>Prototyped two game mechanics that were successfully integrated into the final game.</li>
              <li>Conducted performance analysis and implemented optimizations to enhance rendering and frame rate stability.</li>
              <li>Collaborated with cross-functional teams to ensure seamless gameplay and immersive environments.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;

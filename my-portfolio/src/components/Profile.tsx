import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Import your icons (make sure these exist in /src/images/)
import linkedInIcon from "./images/linkedin.png";
import githubIcon from "./images/github.png";
import emailIcon from "./images/email.png";
import profileIcon from "./images/profile.jpg";
import homeBackground from "./images/homeBackground.jpg";
const Profile: React.FC = () => {
  return (
    <section
      id="profile"
      className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16"
      style={{
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      {/* Left Side - Text & Links */}
      <motion.div
        className="text-left max-w-2xl"
        initial={{ opacity: 0, x: -100 }} // Slide in from left
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 text-blue-900">
          Hi, I am <span className="text-navyBlue">Junaid Haque</span>
        </h1>

        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          <Typewriter
            words={[
              "Game Developer",
              "AI Gameplay Programmer",
              "Unreal & Unity Specialist",
              "Problem Solver"
            ]}
            loop={0} // Infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-lg font-bold mb-6">
          Passionate Game Developer with expertise in AI-driven gameplay, animation systems,
          and performance optimization across Unreal and Unity engines.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mb-6">
          <a
            href="https://www.linkedin.com/in/junaid-haque"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/jfhaque"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={githubIcon} alt="GitHub" className="w-10 h-10" />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:scale-110 transition-transform"
          >
            <img src={emailIcon} alt="Email" className="w-10 h-10" />
          </a>
        </div>

        {/* View Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-navyBlue text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-darkBlue transition duration-300"
        >
          View Resume
        </a>
      </motion.div>

      {/* Right Side - Profile Picture */}
      <motion.div
        className="w-96 h-96 rounded-full overflow-hidden shadow-xl border-8 border-accentBlue mt-10 md:mt-0"
        initial={{ opacity: 0, x: 100 }} // Slide in from right
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profileIcon}
          alt="Junaid Haque"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Profile;

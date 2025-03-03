import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Import your icons (make sure these exist in /src/images/)
import linkedInIcon from "./images/linkedin.png";
import githubIcon from "./images/github.png";
import emailIcon from "./images/email.png";
import homeBackground from "./images/homeBackground.jpg";
import programmingGif from "./images/programming.gif"
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
        <h1 className="text-4xl font-extrabold mb-4 text-blue-900">
          Hi, I am <span className="text-navyBlue">Junaid Faizan Haque</span>
        </h1>

        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          <Typewriter
            words={[
              "Game Developer",
              "AI Gameplay Programmer",
              "Unity Specialist",
            ]}
            loop={0} // Infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-m font-bold mb-6">
        I am a passionate Game Developer with over 3 years of experience specializing in AI-driven gameplay and game performance optimization.
        With expertise in C#, C++, Unreal Engine, and Unity, I focus on creating immersive gaming experiences.
        I have a proven track record in rapid prototyping, debugging, and refining features to enhance gameplay.
        I thrive in collaborative environments and am dedicated to continuously improving game systems and performance to deliver top-notch player experiences.
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
        className="w-full md:w-[600px] h-auto overflow-hidden relative z-10"
        initial={{ opacity: 0, x: 100 }} // Slide in from right
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={programmingGif} // Use your GIF as the profile image
          alt="Profile GIF"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Profile;

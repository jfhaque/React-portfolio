import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      id="contact"
      className="bg-mediumBlue text-center py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-xl font-bold text-lightBlue">Contact Me</h2>
      <p>Email: <a href="mailto:junaidfaizanhaque@gmail.com" className="text-lightBlue hover:underline">junaidfaizanhaque@gmail.com</a></p>
      <p>Location: Toronto, Canada</p>
    </motion.footer>
  );
};

export default Footer;

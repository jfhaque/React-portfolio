import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 p-6 text-center mt-8">
      <h2 className="text-xl font-bold text-blue-400">Contact Me</h2>
      <p>Email: <a href="mailto:junaidfaizanhaque@gmail.com" className="text-blue-400 hover:underline">junaidfaizanhaque@gmail.com</a></p>
      <p>Location: Toronto, Canada</p>
    </footer>
  );
};

export default Footer;

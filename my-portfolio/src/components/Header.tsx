import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-darkBlue text-white py-4 shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-center space-x-6 text-lg">
        <a href="#profile" className="hover:text-lightBlue">About</a>
        <a href="#work" className="hover:text-lightBlue">Work Experience</a>
        <a href="#projects" className="hover:text-lightBlue">Projects</a>
        <a href="#contact" className="hover:text-lightBlue">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

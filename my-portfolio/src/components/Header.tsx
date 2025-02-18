import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#001F3F] p-4 shadow-md text-center">
      <nav>
        <ul className="flex justify-center space-x-6 text-lg text-blue-300">
          <li><a href="#profile" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

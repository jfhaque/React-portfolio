import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-md text-center">
      <nav>
        <ul className="flex justify-center space-x-6 text-lg">
          <li>
            <a href="#profile" className="hover:text-blue-400">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

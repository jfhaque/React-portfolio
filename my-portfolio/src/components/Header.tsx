import React from "react";

const Header: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = window.innerHeight / 2 - targetElement.clientHeight / 2; // Center the section
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-blue-700 py-4 shadow-lg">
      <nav className="container mx-auto flex justify-center space-x-8 text-lg font-semibold text-white">
        <a href="#profile" onClick={(e) => handleSmoothScroll(e, "profile")} className="hover:text-accentBlue">About</a>
        <a href="#work" onClick={(e) => handleSmoothScroll(e, "work")} className="hover:text-accentBlue">Work Experience</a>
        <a href="#projects" onClick={(e) => handleSmoothScroll(e, "projects")} className="hover:text-accentBlue">Projects</a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="hover:text-accentBlue">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

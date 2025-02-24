import React from "react";

const Header: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="bg-darkBlue text-white py-4 shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-center space-x-8 text-lg font-semibold">
        <a href="#profile" onClick={(e) => handleSmoothScroll(e, "profile")} className="hover:text-accentBlue">About</a>
        <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="hover:text-accentBlue">Work Experience</a>
        <a href="#work" onClick={(e) => handleSmoothScroll(e, "work")} className="hover:text-accentBlue">Projects</a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="hover:text-accentBlue">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

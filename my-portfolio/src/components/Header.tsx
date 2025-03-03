import React from "react";
import myLogo from "./images/myLogo.png";

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
    <header className="fixed top-0 w-full z-50 bg-blue-800 py-4 shadow-lg">
      <div className="w-full flex items-center justify-between px-4 md:px-12">
        {/* Logo - Forced more left */}
        <a
          href="#profile"
          onClick={(e) => handleSmoothScroll(e, "profile")}
          className="cursor-pointer"
        >
          <img src={myLogo} alt="Logo" className="h-auto w-[30px] object-contain" />
        </a>

        {/* Navigation Links - Pushed more right */}
        <nav className="flex space-x-7 text-lg font-semibold text-white pr-4 md:pr-12">
          <a href="#profile" onClick={(e) => handleSmoothScroll(e, "profile")} className="hover:text-accentBlue">About</a>
          <a href="#work" onClick={(e) => handleSmoothScroll(e, "work")} className="hover:text-accentBlue">Work Experience</a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, "projects")} className="hover:text-accentBlue">Projects</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="hover:text-accentBlue">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

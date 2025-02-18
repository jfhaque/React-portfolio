import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Projects from "./Projects";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;

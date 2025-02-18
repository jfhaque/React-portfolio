import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-lightGray text-whiteText min-h-screen">
      <Header />
      <main className="container mx-auto px-6">
        <Profile />
        <About />
        <WorkExperience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;

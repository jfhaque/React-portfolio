import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Projects from "./Projects";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <div className="bg-darkBlue text-whiteText min-h-screen">
      <Header />
      <main className="container mx-auto px-6">
        <Profile />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Github from "./Components/Github";

const App = () => {
  return (
    <div className="text-neutral-200 antialiased flex items-center justify-center overflow-hidden">
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className=" container mx-auto max-w-screen-lg p-4">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Github />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

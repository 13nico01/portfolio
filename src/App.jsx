import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  return (
   <div className="overflow-x-hidden text-neutral-200 antialiased">
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
   <div className="container mx-auto px-8">
    <Navbar />
    <Hero />
   </div>
   </div>
  );
};

export default App;

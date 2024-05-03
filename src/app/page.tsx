import About from "@/components/About";
import React from "react";
import "../styles/globals.css";
import "../styles/reset.css";
import Introduce from "@/components/Introduce";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main>
      <About />
      <Introduce />
      <Skills />
    </main>
  );
};

export default Home;

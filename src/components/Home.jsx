import React from "react"
import Navigation from "./Navigation";
import Hero from "./home/Hero";
import About from "./home/About";
import Projects from "./home/Projects";
import Resume from "./home/Resume";
import Footer from "./Footer";

function Home() {

  return (
    <>
      <div className="flex-1 bg-light-mode-A text-light-mode-B ">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Footer />
      </div>
    </>
  )
}

export default Home;

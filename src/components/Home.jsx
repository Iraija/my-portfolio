import React, { useState } from "react"
import Navigation from "./Navigation";
import Hero from "./home/Hero";
import About from "./home/About";
import Projects from "./home/Projects";
import Resume from "./home/Resume";
import Footer from "./Footer";
import SideBar from "./home/general/SideBar";

function Home() {
  
  const [ burgerState, setBurgerState ] = useState(false);

  return (
    <>
      <div className="flex-1 bg-light-mode-A text-light-mode-B">
        <Navigation burgerState={burgerState} setBurgerState={setBurgerState}/>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Footer />

        {burgerState && <SideBar burgerState={burgerState} setBurgerState={setBurgerState}/>}
      </div>
    </>
  )
}

export default Home;

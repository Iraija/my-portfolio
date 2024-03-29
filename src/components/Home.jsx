import React, { useState } from "react"
import Navigation from "./Navigation";
import Hero from "./home/Hero";
import About from "./home/About";
import Projects from "./home/Projects";
import Resume from "./home/Resume";
import Footer from "./Footer";
import SideBar from "./home/general/SideBar";
import ContactModal from "./home/general/ContactModal";
import SentEmailModal from "./home/general/contactpopup/SentEmailModal";

function Home() {
  const [ darkModeState, setDarkModeState ] = useState(false);
  const [ burgerState, setBurgerState ] = useState(false);
  const [ contactState, setContactState ] = useState(false);
  const [ sentEmailState, setSentEmailState ] = useState(false);
  const [ sentState, setSentState ] = useState('true');

  return (
    <>
      <div className={`flex-1 ${darkModeState ? 'bg-dark-mode-B' : 'bg-light-mode-A'} ${darkModeState ? 'text-dark-mode-A' : 'text-light-mode-B'}`}>

        <Navigation burgerState={burgerState} setBurgerState={setBurgerState} darkModeState={darkModeState} setDarkModeState={setDarkModeState} contactState={contactState} setContactState={setContactState}/>
        <Hero setContactState={setContactState}/>
        <About />
        <Projects />
        <Resume />
        <Footer />
        
        {burgerState && 
          <SideBar setBurgerState={setBurgerState} setContactState={setContactState}/>
        }

        {contactState && 
          <ContactModal darkModeState={darkModeState} setContactState={setContactState} setSendEmailState={setSentEmailState} setSentState={setSentState} />
        }

        {sentEmailState && 
          <SentEmailModal darkModeState={darkModeState} setSentEmailState={setSentEmailState} sentState={sentState} />
        }

      </div>
    </>
  )
}

export default Home;

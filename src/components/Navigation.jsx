import React from "react"
import { Link } from "react-scroll";
import LightDarkMode from "./home/general/LightDarkMode";
import Logo from "../assets/images/logo.png";

function Navigation({ burgerState, setBurgerState, darkModeState, setDarkModeState, contactState, setContactState }) {

  return (
    <>
      <div className="flex flex-row min-w-full py-2 md:py-4 text-light-mode-A bg-light-mode-B fixed top-0 shadow-lg">
        <div className="container flex flex-row items-center">
          <Link to="hero" spy={true} smooth={true} offset={-50} duration={500} >
            <div className="cursor-pointer text-md md:text-2xl font-semibold hover:opacity-50 duration-500 flex flex-row gap-2">
              <img src={Logo} alt="" className="w-[1.50rem] md:w-[2rem] h-[1.50rem] md:h-[2rem]"/>
              <p>elijahbanguis.</p>
            </div>
          </Link>
          <div className="grow flex justify-end">
            <div className="md:hidden flex flex-row gap-5">
              <div className="flex justify-center items-center">
                <LightDarkMode darkModeState={darkModeState} setDarkModeState={setDarkModeState}/>
              </div>
              <button onClick={() => setBurgerState(!burgerState)} ><i className="fa-solid fa-bars"></i></button>
            </div>
            <ul className="hidden md:flex flex-row gap-10 text-xs md:text-sm">
              <li>
                <Link to="about" spy={true} smooth={true} offset={-75} duration={500} >
                  <p className="cursor-pointer hover:opacity-75 duration-500">About</p>
                </Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true} offset={-75} duration={500} >
                  <p className="cursor-pointer hover:opacity-75 duration-500">Projects</p>
                </Link>
              </li>
              <li>
                <Link to="resume" spy={true} smooth={true} offset={-75} duration={500} >
                  <p className="cursor-pointer hover:opacity-75 duration-500">Resume</p>
                </Link>
              </li>
              <li>
                <p onClick={() => setContactState(!contactState)} className="cursor-pointer hover:opacity-75 duration-500">Contacts</p>
              </li>
              <li>
                <LightDarkMode darkModeState={darkModeState} setDarkModeState={setDarkModeState}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation;

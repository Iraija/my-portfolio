import React from "react"
import { Link } from "react-scroll";

function Navigation() {

  return (
    <>
      <div className="flex flex-row min-w-full py-2 md:py-4 text-light-mode-A bg-light-mode-B sticky top-0 shadow-lg">
        <div className="container flex flex-row items-center">
          <Link to="hero" spy={true} smooth={true} offset={-50} duration={500} >
            <h1 className="cursor-pointer text-md md:text-2xl font-semibold hover:opacity-50 duration-500">elijah banguis.</h1>
          </Link>
          <div className="grow flex justify-end">
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
                <p className="cursor-pointer hover:opacity-75 duration-500">Contacts</p>
              </li>
            </ul>
            <button className="md:hidden"><i class="fa-solid fa-bars"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation;

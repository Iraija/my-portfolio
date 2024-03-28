import React from "react"
import { Link } from "react-scroll";

function SideBar({ setBurgerState, setContactState }) {

    const handleContact = () => {
        setBurgerState(prevState => !prevState);
        setContactState(prevState => !prevState);
    }

  return (
    <>
        <div className="fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-50 flex justify-end">
            <div className="bg-light-mode-B w-[12rem] px-5 text-light-mode-A">
                <div className="w-full flex justify-end">
                    <button onClick={() => setBurgerState(prevState => !prevState)} className="text-lg py-2"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <ul className="flex flex-col gap-5 text-xs">
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-75} duration={500} >
                            <p onClick={() => setBurgerState(prevState => !prevState)} className="cursor-pointer hover:opacity-75 duration-500 flex flex-row gap-5 items-center"><i className="fa-solid fa-user w-2"></i><span>About</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" spy={true} smooth={true} offset={-75} duration={500} >
                            <p onClick={() => setBurgerState(prevState => !prevState)} className="cursor-pointer hover:opacity-75 duration-500 flex flex-row gap-5 items-center"><i className="fa-solid fa-diagram-project w-2"></i><span>Projects</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to="resume" spy={true} smooth={true} offset={-75} duration={500} >
                            <p onClick={() => setBurgerState(prevState => !prevState)} className="cursor-pointer hover:opacity-75 duration-500 flex flex-row gap-5 items-center"><i className="fa-solid fa-file w-2"></i><span>Resume</span></p>
                        </Link>
                    </li>
                    <li>
                        <p onClick={handleContact} className="cursor-pointer hover:opacity-75 duration-500 flex flex-row gap-5 items-center"><i className="fa-solid fa-paper-plane w-2"></i><span>Contacts</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default SideBar;

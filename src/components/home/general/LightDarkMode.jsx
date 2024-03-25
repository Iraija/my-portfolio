import React, { useState } from "react"

function LightDarkMode({ darkModeState, setDarkModeState }) {

    const handleDarkMode = () => {
        setDarkModeState(!darkModeState);
    }

  return (
    <>
        <div onClick={handleDarkMode} id="switch" className={`flex justify-${darkModeState ? 'end' : 'start'} text-light-mode-B p-[0.15rem] border-2 rounded-full w-[2.25rem] cursor-pointer`}>
            {!darkModeState && <i className="fa-solid fa-sun text-[0.50rem] h-3 w-3 rounded-full bg-light-mode-A flex justify-center items-center"></i>}
            {darkModeState && <i className="fa-solid fa-moon text-[0.50rem] h-3 w-3 rounded-full bg-light-mode-A flex justify-center items-center"></i>}
        </div>
    </>
  )
}

export default LightDarkMode;

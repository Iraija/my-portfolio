import React from "react"

function Hero() {

  return (
    <>
      <div className="container flex justify-center items-center h-screen py-16 " id="hero">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="h-40 w-40 md:h-60 md:w-60 bg-black rounded-full">
          </div>
          <div className="flex flex-col gap-2 text-center md:text-start">
            <p className="text-3xl md:text-7xl font-bold">
              Hi, I'm Elijah.
            </p>
            <p className="text-sm md:text-base font-medium">
              Front-End Web Developer & Graphic Designer
            </p>
            <div className="flex flex-row gap-5 text-xs md:text-base font-semibold justify-center pt-1 md:pt-3">
              <button className="px-3 py-2 bg-gray-400 bg-opacity-25 hover:bg-opacity-50 duration-500 rounded-lg"><i className="fa-solid fa-paper-plane"></i><span> Contact me!</span></button>
              <a href="https://www.linkedin.com/in/elijah-banguis-82238a256" target="_blank" className="px-3 py-2 bg-gray-400 bg-opacity-25 hover:bg-opacity-50 duration-500 rounded-lg"><i className="fa-brands fa-linkedin"></i><span> Lets connect!</span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;

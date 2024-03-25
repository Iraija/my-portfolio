import React from "react"

function About() {

  return (
    <div className="container pb-10" id="about">
        <h1 className="text-2xl md:text-3xl font-bold">About Me</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="flex flex-col py-10">
                <p className="text-xs md:text-base text-justify">
                    Hi, my name is Elijah Banguis. I am a Front-End Web Developer and a Graphic Designer. I love and enjoy exploring new things to
                    discover everything related to creativity and innovation. I specialize in developing front-end web applications, UI/UX design, and system prototyping, as well as creating digital arts,
                    brand identity design, and graphic design.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About;

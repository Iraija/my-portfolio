import React from "react"
import { Link } from "react-scroll";
import Logo from "../assets/images/logo.png";

function Footer() {

    return (
        <div className="text-light-mode-A min-w-full flex flex-col justify-center items-center gap-1 bg-light-mode-B py-2 md:py-4">
            <Link to="hero" spy={true} smooth={true} offset={-50} duration={500} >
                <div className="cursor-pointer text-md md:text-2xl font-semibold hover:opacity-50 duration-500 flex flex-row gap-2">
                    <img src={Logo} alt="" className="w-[2rem] h-[2rem]"/>
                    <p>elijahbanguis.</p>
                </div>
            </Link>
            <ul className="flex flex-row gap-5 md:gap-10 text-sm md:text-lg">
                <li>
                    <a href="https://github.com/Iraija" target="_blank"><i className="fa-brands fa-github"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/elijah-banguis-82238a256" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100070504183637" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;

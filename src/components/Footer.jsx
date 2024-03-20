import React from "react"

function Footer() {

    return (
        <div className="text-light-mode-A min-w-screen flex flex-col justify-center items-center gap-1 bg-light-mode-B py-2 md:py-4">
            <p className="text-md md:text-2xl font-medium">elijah banguis.</p>
            <ul className="flex flex-row gap-5 md:gap-10 text-sm md:text-lg">
                <li>
                    <i class="fa-brands fa-github"></i>
                </li>
                <li>
                    <i class="fa-brands fa-linkedin"></i>
                </li>
                <li>
                <i class="fa-brands fa-facebook"></i>
                </li>
            </ul>
        </div>
    )
}

export default Footer;

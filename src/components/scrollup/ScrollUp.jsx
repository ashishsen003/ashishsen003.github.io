import './scrollUp.css'
import React from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");

        if (this.scrollY >= 700) {
            scrollUp.classList.add("show-scroll");
        }
        else {
            scrollUp.classList.remove("show-scroll");
        }
    })
  return (
    <a href="#" className="scrollup">
        <FaCircleArrowUp  className="scrollup__icon"/>
    </a>
  )
}

export default ScrollUp

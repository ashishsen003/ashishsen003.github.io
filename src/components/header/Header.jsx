import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const Header = ()=>{
    return(
        // <header id='home'>
        //     <div className='container header__container'>
        //         <h5>Hello I'm</h5>
        //         <h1>Ashish Kumar</h1>
        //         <h5 className='text-light'>Fullstack Developer</h5>
        //         <CTA />
        //         <HeaderSocials />
        //         <div className='me'>
        //             <img src={ME} alt="me" />
        //         </div>
        //         <a href="#contact" className='scroll__down'>Scroll Down</a>
        //     </div>
        // </header>

        <header id='home'>
            <div className='container header__container'>

                <div className='info__header'>
                    <h4 className='hello__tag'>Hello, 🖐️ I'm</h4>
                    <h1 className='name__tag'>Ashish Kumar</h1>
                    <h2 className='text-light'>Fullstack Web Developer</h2>
                    {/* <CTA />
                    <HeaderSocials /> */}
                    <div className="cta">
                        {/* <a href={Resume} download className='btn'>Resume</a> */}
                        <a href="#contact" className='btn'>Say Hello <PiPaperPlaneTiltFill /></a>
                    </div>
                    <div className='header__socials'>
                        <a href="https://github.com/ashishsen003" target='_blank'><FaGithub /> </a>
                        <a href="https://www.linkedin.com/in/ashish-kumar997" target='_blank'><BsLinkedin /></a>
                    </div>
                    
                </div>

                <div className='info__header'>
                    <div className='me'>
                        <img src={ME} alt="me" />
                    </div>
                </div>

                {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
            </div>
        </header>
    )
}

export default Header
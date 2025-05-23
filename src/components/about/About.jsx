import React from 'react'
import ME from '../../assets/me-about.jpg'
import Resume from '../../assets/Ashish-Kumar-Resume.pdf'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { CgFileDocument } from "react-icons/cg";
import { FcDocument } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { PiTreeStructureBold } from "react-icons/pi";

const About = () => {

const openResume = ()=>{
    return (
        window.open(
            // 'https://drive.google.com/file/d/1ZqVsjJcex75B8w1N8VqQo5INazmy-dCd/view?usp=drive_link',
            // 'https://drive.google.com/file/d/16Xefo6z9TWJPRjeywMOApu_N5lBxsH8S/view?usp=drive_link',
            'https://drive.google.com/file/d/1as_nPgHCvT_s5nh8TT4-3JLGEE4JRjKh/view?usp=sharing',
            "_blank",
            "noreferrer"
        )
        )
    }

  return (
    <section id='about'>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <img src={ME}  alt="" className='about__me-image' />
            </div>
            <div className="about__content">
                <div className="about__cards" >
                    <article className='about__card'>
                        <BiCodeBlock className='about__icon'/>
                        <h5>Coding</h5>
                        <small>1200+ Hours</small>
                    </article>
                    <article className='about__card'>
                        <FaLaptopCode className='about__icon'/>
                        <h5>Projects</h5>
                        <small>4+ Completed</small>
                    </article>
                    <article className='about__card'>
                        <PiTreeStructureBold className='about__icon'/>
                        <h5>DSA</h5>
                        <small>400+ Solved</small>
                    </article>
                </div>
                <p>I am a Full-Stack Web Developer with a specialisation in MERN Stack, JavaScript, HTML and CSS. I'm enthusiastic about leveraging my knowledge to build impactful products and services that cater to people's needs. My goal is to contribute to a company that crafts inventive applications focused on users.</p>
                <a href={Resume} onClick={()=>openResume()} download className='btn'>Resume <CgFileDocument /></a>
                {/* <a href={Resume} onClick={()=>openResume()} download target="_blank" className='btn btn-primary'></a> */}
            </div>
        </div>
    </section>
  )
}

export default About
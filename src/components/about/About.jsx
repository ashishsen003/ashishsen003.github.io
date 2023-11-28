import React from 'react'
import ME from '../../assets/me-about.jpg'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
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
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>
                    <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>Clients</h5>
                        <small>200+ Worldwide</small>
                    </article>
                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                        <small>80+ Completed</small>
                    </article>
                </div>
                <p>Aspiring Full Stack Developer with Expertise in CSS, HTML, JS, and React. Proficient in data structures and basic algorithms. Skilled in effective communication and collaborative teamwork, with strong leadership capabilities.</p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About
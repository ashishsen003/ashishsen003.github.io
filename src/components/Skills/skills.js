import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt, FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiPostman, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";



const Skills = () => {
  return (
    <section id='skills'>
        {/* <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Lorem</span>
        <div className='skillBars'>
          <div className='skillBar'>
              <img src={UIDesign} alt='' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2>Web Development</h2>
                <p>I am proficient in Mern stack like React, Javascript, HTML, CSS</p>
              </div>
          </div>
          <div className='skillBar'>
              <img src={WebDesign} alt='' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2></h2>
                <p></p>
              </div>
          </div>
          <div className='skillBar'>
              <img src={AppDesign} alt='' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2></h2>
                <p></p>
              </div>
          </div>
        </div> */}
        <h2>Skills</h2>
        <div className='container experience__container'>
          <div className='.experience__frontend'>
            <h3>Frontend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'><FaReact className='experience__details-icon' /><h4>React</h4></article>
              <article className='experience__details'><TbBrandNextjs className='experience__details-icon' /><h4>Next JS</h4></article>
              <article className='experience__details'><SiTailwindcss className='experience__details-icon' /><h4>Tailwind CSS</h4></article>
              <article className='experience__details'><IoLogoJavascript className='experience__details-icon' /><h4>Javascript</h4></article>
              <article className='experience__details'><FaHtml5 className='experience__details-icon' /><h4>HTML5</h4></article>
              <article className='experience__details'><IoLogoCss3 className='experience__details-icon' /><h4>CSS3</h4></article>
              <article className='experience__details'><SiRedux className='experience__details-icon' /><h4>Redux</h4></article>
              <article className='experience__details'><BiLogoTypescript className='experience__details-icon' /><h4>Typescript</h4></article>
            </div>
          </div>
          <div className='.experience__backend'>
            <h3>Backend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'><FaNode className='experience__details-icon' /><h4>Node JS</h4></article>
              <article className='experience__details'><SiExpress className='experience__details-icon' /><h4>Express JS</h4></article>
              <article className='experience__details'><SiMongodb className='experience__details-icon' /><h4>Mongo DB</h4></article>
              <article className='experience__details'><FaGithub className='experience__details-icon' /><h4>Github</h4></article>
              <article className='experience__details'><SiMongoose className='experience__details-icon' /><h4>Mongoose</h4></article>
              <article className='experience__details'><FaGitAlt  className='experience__details-icon' /><h4>Git</h4></article>
              <article className='experience__details'><SiPostman  className='experience__details-icon' /><h4>Postman</h4></article>
            </div>
          </div>

          
          
        </div>

    </section>
  )
}

export default Skills
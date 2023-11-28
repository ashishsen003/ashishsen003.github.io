import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Ashish</span> <br />Full Stack Web Developer</span>
          <span className='introPara'>I am a skilled full stack web developer from delhi</span>
          <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg' /> Hire me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro
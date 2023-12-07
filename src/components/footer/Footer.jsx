import React from 'react'
import './footer.css'
import { FaFacebookF, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { SiWhatsapp } from "react-icons/si";
import {Link} from 'react-scroll'
import { CiLinkedin } from "react-icons/ci";
import logo from '../../assets/footer-logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
        {/* <a href="#" className='footer__logo'>Ashish Kumar</a> */}
        <div className='logo__div'>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <ul className='permalinks'>
          <Link to='home' spy={true} smooth={true} offset={-100} duration={300} className='desktopMenulistitem'>Home</Link>
          <Link to='about' spy={true} smooth={true} offset={-100} duration={300} className='desktopMenulistitem'>About</Link>
          <Link to='skills' spy={true} smooth={true} offset={-100} duration={300} className='desktopMenulistitem'>Skills</Link>
          <Link to='portfolio' spy={true} smooth={true} offset={-100} duration={300} className='desktopMenulistitem'>Portfolio</Link>
          <Link to='contact' spy={true} smooth={true} offset={-100} duration={300} className='desktopMenulistitem' style={{border: '0'}}>Contact</Link>
        </ul>

        <div className='footer__socials'>
            <a href="https://www.facebook.com/profile.php?id=100007193314454" target='_blank'><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/ashish-kumar997" target='_blank'><FaLinkedin /></a>
            <a href="https://wa.me/+919999463234" target='_blank'><SiWhatsapp /></a>
        </div>

        <div className="footer__copyright">
            <small>© Design and develop by Ashish Kumar. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
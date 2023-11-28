import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Ashish Kumar</a>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer__socials'>
            <a href="https://facebook"><FaFacebookF /></a>
            <a href="https://facebook"><FiInstagram /></a>
            <a href="https://facebook"><IoLogoTwitter /></a>
        </div>

        <div className="footer__copyright">
            <small>© Ashish Kumar. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
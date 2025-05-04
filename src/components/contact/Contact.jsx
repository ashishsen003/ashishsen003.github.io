import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { FaLinkedin } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g7r9idr', 'template_myk25ny', form.current, 'wfkJNGdX_rAtEquls')
    .then((result) => {
      console.log(result.text);
      e.target.reset()
      alert('Email Sent!')
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ashishsen997@gmail.com</h5>
            <a href="mailto:ashishsen997@gmail.com" target='_blank'>Send a mail</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 99994 63234</h5>
            <a href="https://wa.me/+919999463234" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>ashish-kumar997</h5>
            <a href="https://www.linkedin.com/in/ashish-kumar997" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon' />
            <h4>Github</h4>
            <h5>ashishsen003</h5>
            <a href="https://github.com/ashishsen003" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='send-btn'>Send Message <PiPaperPlaneTiltFill /></button>
        </form>
      </div>
    </section>
  )
}

export default Contact
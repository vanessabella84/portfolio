import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer>
        <a href='a' className='footer__logo'>Vanessa Bella</a>
        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experince'>Experince</a></li>
          <li><a href='#service'>Service</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
          <li><a href='#contact'>Contact</a></li>

        </ul>
        <div className='footer__socials'>
          <a href='https://facebook.com'><FaFacebook/></a>
          <a href='https://instagram.com'><FiInstagram/></a>
          <a href='https://twitter.com'><IoLogoTwitter /></a>
        </div>
<div className='footer__copyright'>
  <small>&copy; Vanessa Bella Personal Portfolio</small>
</div>

      </footer>
    </div>
  )
}

export default Footer

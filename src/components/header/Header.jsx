import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../images/Me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>

      <div className=".container header__container">
        <h5 className="text-light">Hello I'm</h5>
        <h1>Vanessa Bella</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
     

        <div className='me'>
          <img src={Me} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
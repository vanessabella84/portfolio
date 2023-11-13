import React from 'react'
import './about.css'
import blkwhtePhoto from '../../images/blkwhtephoto.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (

    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={blkwhtePhoto } alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icons' />
              <h5>Experince</h5>
              <small>1+ Years Working </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icons' />
              <h5>Clients</h5>
              <small>Many</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icons' />
              <h5>Projects</h5>
              <small>Completed</small>
            </article>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Qui officia temporibus optio similique consequatur, maiores non veniam perspiciatis deserunt
            dolrum voluptatum odio iste omnis, eum nam quos nisi mollitia ut.
          </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>


  )
}

export default About
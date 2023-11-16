import React from 'react'
import './portfolio.css'
import extremephoto from '../../images/extremephoto.jpg'
import booklibphoto from '../../images/booklibphoto.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={extremephoto} alt='' />
          </div>
          <h3>Extreme Adventures</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/Alien-pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={booklibphoto} alt='' />
          <h3>Book Library</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/Alien-pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
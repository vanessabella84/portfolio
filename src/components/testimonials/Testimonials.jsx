import React from 'react'
import './testimonials.css'
import testpic from '../../images/testpic.jpg'



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avater'>
            <img src={testpic} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Adriana Collins</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quos asperiores perferendis,
            atque voluptatum et nam dolores. Odio nobis maiores ipsa optio eligendi?
            Quisquam ullam placeat dolores cupiditate ea perspiciatis nemo?
          </small>
        </article>

      </div>
    </section>



  )
}

export default Testimonials
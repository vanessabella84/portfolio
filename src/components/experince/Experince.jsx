import React from 'react'
import './experince.css'
import { BsFillPatchCheckFill} from 'react-icons/bs'

const Experince = () => {
  return (
    <section id='experince'>
      <h5>The Skills I Have</h5>
      <h2>My Experince</h2>

      <div className='container experince__container'>
        <div className='experince__frontend'>
          <h3>Frontend Development</h3>
          <div className='experince__content'>

            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>

            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icons' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icons' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icons' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icons' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experince</small>
              </div>
            </article>
          </div>
        </div>

        {/* end of frontend */}

        <div className='experince__backend'>
          <h3>Backend Development</h3>
          <div className='experince__content'>
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icons' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icons' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icons' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icons' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icons' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>



          </div>

        </div>
      </div>
    </section >



  )
}

export default Experince
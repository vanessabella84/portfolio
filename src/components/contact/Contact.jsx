import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4bezlie', 'template_mx6k5hl', form.current, '6-b_L4j8RFooKoG7x')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Tounch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>vanessa.r.bella84@gmail.com</h5>
              <a href="mailto:vanessa.r.bella84@gmail.com" target='_blank'>Send A Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Vanessa Bella</h5>
              <a href="https://www.messenger.com/t/100094599611592 target='_blank'">Send A Message</a>
          </article> 
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>vanessa.r.bella84@gmail.com</h5>
              <a href="https//api.whatsapp.com/send?phone16026148708" target='_blank'>Send A Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}

        <form ref={form}  onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
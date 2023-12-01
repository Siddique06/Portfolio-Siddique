import React from 'react'
import './css/contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
   <section id='Contact'> 
   <h5>Get In Touch</h5>
   <h2>Contact Me</h2>
     <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <AiTwotoneMail className='icon'/>
          <h4>Email</h4>
          <h5>ranasiddique06@gmail.com</h5>
          <a href="mailto:ranasiddique06@gmail.com">Send a message</a>
        </article>
        <article className="contact__option">
          <BsMessenger className='icon' />
          <h4>Messenger</h4>
          <h5>M Siddiq</h5>
          <a href="mailto:ranasiddique06@gmail.com">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='icon' />
          <h4>WhatsApp</h4>
          <h5>+923257866663</h5>
          <a href="ma">Send a message</a>
        </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name ' required/>
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="10" placeholder='Your Message' required></textarea>
          <button type='submmit' className='btn btn-primary'>Send Message</button>
        </form>
     </div>
   
   </section>
  )
}

export default Contact

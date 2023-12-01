import React from 'react'
import './css/about.css';
import './index.css'
import ME from './assets/dp2.png'
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {BsFillFolderFill} from 'react-icons/bs'
const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className='about__icon'/>
              <h5>Experince</h5>
              <small>1+ years of Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <BsFillFolderFill className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed </small>
            </article>
            
            
            
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora ducimus aliquid totam voluptate ad magnam quaerat expedita.
               Nam ut quidem aspernatur sint? Omnis, quisquam consectetur! Suscipit molestias culpa ad!</p>
            <a href="#Contact" className='btn btn-primary'>Let's Talk</a>   
        </div>
      </div>
      
    </section>
  )
}

export default About

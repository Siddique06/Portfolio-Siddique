import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './css/services.css'
const Serv = () => {
  return (
    <section id='Serv'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
           
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>
          {/*START WEB DEVLOPMETs */}
          <article className="services">
          <div className="services__head">
            <h3>Web Devlopment</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>
        {/*END OF WEB */}
        <article className="services">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Serv

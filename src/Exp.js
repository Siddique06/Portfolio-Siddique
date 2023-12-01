import React from 'react'
import './css/exp.css'
import { BsFileCheckFill } from 'react-icons/bs'
const Exp = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container ">
        <div className="experience__frontend">
          <h3>Frontend Devlopment</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFileCheckFill className='icon' />
              <div>
                <h4>HTML</h4>
                <small id='text-lign'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFileCheckFill className='icon' />
              <div>
                <h4>CSS</h4>
                <small id='text-lign'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFileCheckFill className='icon' />
              <div>
                <h4>Javscript</h4>
                <small id='text-lign'>Experiences</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFileCheckFill className='icon' />
              <div>
                <h4>Bootstrap</h4>
                <small id='text-lign'>Experiences</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFileCheckFill className='icon' />
              <div>
                <h4>Taliwand</h4>
                <small id='text-lign'>Experiences</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFileCheckFill className='icon' />
              <div>
                <h4>React</h4>
                <small id='text-lign'>Experiences</small>
              </div>

            </article>
          </div>
        </div>

      </div>
    </section >
  )
}

export default Exp

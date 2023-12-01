import React from 'react'
import './css/portfolio.css'

import IMG1 from './assets/portfolio1.jpg'
import IMG2 from './assets/portfolio2.jpg'
import IMG3 from './assets/portfolio3.jpg'
import IMG4 from './assets/portfolio4.jpg'
import IMG5 from './assets/portfolio5.png'
import IMG6 from './assets/portfolio6.jpg'
//We are displaying images dynamically so we are using map() && array
const data = [
  {
    id: 1,
    image: IMG1

  },
  {
    id: 2,
    image: IMG2

  },
  {
    id: 3,
    image: IMG3
  },
  {
    id: 4,
    image: IMG4
  },
  {
    id: 5,
    image: IMG5
  },
  {
    id: 6,
    image: IMG6

  }


]
const Portolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image }) => {
            return (
              <article key={id } article className='portfolio_item' >
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>This is portfolio item title</h3>
                <div className="portfolio_item-ctr">
                  <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
                  <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>

              </article>
            )
          })
        }


      </div>


    </section >
  )
}

export default Portolio

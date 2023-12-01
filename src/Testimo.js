import React from 'react'
import './css/Testi.css'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



import avt1 from './assets/avatar1.jpg'
import avt2 from './assets/avatar2.jpg'
import avt3 from './assets/avatar3.jpg'
import avt4 from './assets/avatar4.jpg'
const data = [
  {
    id: 1,
    image: avt1,
    name: 'Ernest Achiever'
  },
  {
    id: 2,
    image: avt2,
    name: 'David '
  },
  {
    id: 3,
    image: avt3,
    name: ' Tom Hollad'
  },
  {
    id: 4,
    image: avt4,
    name: 'Johnny Deep'
  }
]
const Testimo = () => {
  return (
    <section id='testimonials'>
      <h5>Review from the client</h5>
      <h2>Testimonials</h2>


      <Swiper className="container testi__container"
        modules={[ Pagination, ]}
        spaceBetween={40}
        slidesPerView={1}
        
        pagination={{ clickable: true }}>
      
        


        {
          data.map(({ id, image, name }) => {
            return (

              <SwiperSlide key={id} className='testi'>
                <div className="client__avatar">
                  <img src={image} alt="" />
                </div>
                <h5 className='cleint__name'>{name}</h5>
                <small className="client__review">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Est, nisi voluptatem ex sequi cum magnam dolorem! Perferendis, debitis quidem!
                  Unde doloribus iste deleniti. Quis totam impedit beatae consequuntur iusto nihil.

                </small>

              </SwiperSlide>

            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimo

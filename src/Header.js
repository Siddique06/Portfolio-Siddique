import React from 'react'
import './css/header.css';
import CTS from './CTS'
import dp from './assets/dp.png'
import Hserv from './Hserv';
const Header = () => {
  return (
    <header>
      <div className="conatiner header__container">
        <h5>HEllo I'm</h5>
        <h1>Muhammad Siddique </h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTS />
        <Hserv />
        <div className="try">
          <div className="me">
            <img src={dp} alt="" />
          </div>

        </div>

        <a href="#Contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header

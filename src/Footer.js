import React from 'react'
import './css/footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="hane" className='Footer__logo'>Egator</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#Serv">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          
          <li><a href="#Contact">Portfolio</a></li>
          
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com"><FaFacebookF/></a>
          <a href="https://instagram.com"><AiFillInstagram/></a>
          <a href="https://twitter.com"><BsTwitter/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy;All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer

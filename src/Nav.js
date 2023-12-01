import React from 'react'
import './css/nav.css'
import {FiHome } from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
     

    
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><FiHome/></a>
      <a href="#About" onClick={()=>setActiveNav('#About')} className={activeNav==='#About' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#Exp')} className={activeNav==='#Exp' ? 'active' : ''}><BiBookBookmark/></a>
      <a href="#Serv" onClick={()=>setActiveNav('#Serv')} className={activeNav==='#Serv' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#Contact" onClick={()=>setActiveNav('#Contact')} className={activeNav==='#Contact' ? 'active' : ''}><BiMessageRoundedDetail/></a>
      


      
      </nav>
  )
}

export default Nav

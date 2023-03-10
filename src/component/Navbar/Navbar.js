import React from 'react'
import Logo from '../Images/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='n-left'>
          <img src={Logo} alt=''/>
         
        </div>
        <ul className='n-right'>
          <li><a href=''>Home</a></li>
          <li><a href=''>About</a></li>
          <li><a href=''>Administration</a></li>
          <li><a href=''>Departments</a></li>
          <li><a href=''>Testimonial</a></li>
          <li><a href=''>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar
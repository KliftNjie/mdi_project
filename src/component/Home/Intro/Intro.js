import React from 'react'
import Navbar from '../Navbar/Navbar.js'


import './Intro.css'
const Intro = () => {
  return (
    <div className='intro'>
        <Navbar/>
        <div className='sub-i'>
            <div className='sub-i-left'>
                <span className='header-intro'>Managment Development Institute</span>
                <br/>
                <br/>
                <br/>
                <span className='i-body'>
                   A Center Of Excellence
                </span>
            </div>
           
        </div>
    </div>
  )
}

export default Intro
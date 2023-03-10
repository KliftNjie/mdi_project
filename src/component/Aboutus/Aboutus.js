import React from 'react'
import "./Aboutus.css"
import Card from '../Card/Card';
import Resume from "./CV.pdf"

const Aboutus = () => {


  return (
    <div className='services'>
        <div className='s-left'>
            <span>About Us</span>
           
            <span>
                Lorem ispum is simpley dummy text of printing of printing <br/>Lorem
                ispum is simpley dummy text of printing
            </span>
            <a href={Resume} download>
            <button className="button s-button">Learn More</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className='s-right'>
          <div className='card1'>
            <Card emoji= "" heading = {'Glance Of MDI'} 
            detail={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis?"} />
          </div>
          <div className='card2'>
            <Card emoji="" heading = {'History'} 
            detail={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis?"} />

          </div>
          <div className='card3'>
            <Card emoji= "" heading = {'Mission And Vision'} 
            detail={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis?"} />
          </div>
        </div>
    </div>
  )
}

export default Aboutus
import React from 'react'
import "./Aboutus.css"
import Card from '../Card/Card';
import { delay, motion } from 'framer-motion'
const Aboutus = () => {
  const transition = {duration: 2, type: 'spring', delay:0.5}
  const transition2 = {duration: 4, type: 'spring',delay:1}
  const transition3 = {duration: 6, type: 'spring', delay:1.5}

  return (
    <div className='services'>
        <div
           
           

        className='s-left'>
            <span>About Us</span>
           
            <span>
                Lorem ispum is simpley dummy text of printing of printing <br/>Lorem
                ispum is simpley dummy text of printing
            </span>
           
            <button className="button s-button">Learn More</button>
          _
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className='s-right'>
          <motion.div
              initial= {{top: '0'}}
    
              whileInView= {{top: "10rem"}}
              transition= {transition}
          
          className='card1'>
            <Card emoji= "" heading = {'Glance Of MDI'} 
            detail={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis?"} />
          </motion.div>
          <motion.div 
               initial= {{top: '0' , left: "17rem"}}
               whileInView= {{top: "7rem", left:"17rem"}}
               transition= {transition2}
          className='card2'>
            <Card emoji="" heading = {'History'} 
            detail={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis?"} />

          </motion.div>
          <motion.div 
             initial= {{top: '0rem' , left: "34rem"}}
             whileInView= {{top: "4rem", left:"34rem"}}
             transition= {transition3}
          className='card3'>
            <Card emoji= "" heading = {'Mission And Vision'} 
            detail={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis?"} />
          </motion.div>
        </div>
    </div>
  )
}

export default Aboutus
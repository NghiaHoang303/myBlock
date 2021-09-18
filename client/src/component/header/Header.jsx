import React, {useState} from 'react'
import './header.css'
import headerImg from '../../assets/images/vietnam-6.png'
import headerImg1 from '../../assets/images/Vietnam-landscape.jpg'
import headerImg2 from '../../assets/images/mai-chau-noresize.jpg'
import { headerData } from './headerData'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaLongArrowAltUp} from 'react-icons/fa'

export default function Header( {sliders} ) {
   
    const [current, setCurrent] = useState(0);
    const length = sliders.length;

    const nextSlider = () => {
        setCurrent(current === length - 1 ? 0 : current + 1 )
    }

    const prevSlider = () => {
        setCurrent(current === 0 ? length - 1 : current - 1 )
    }

    if(!Array.isArray(sliders) || sliders.length === 0) {
        return null;
    }

    console.log(current);
    return (
       <div className="header slider" data-aos="zoom-in">
           <FaArrowAltCircleLeft className= 'left-arrow' onClick={prevSlider}/>
           <FaArrowAltCircleRight className= 'right-arrow' onClick={nextSlider}/>
          
           <div className='headerTitle'>
                <span className='headerTitleSm'>Nghia Hoang</span>
                <span className='headerTitleLg'> Blog</span>  
            </div>
        {headerData.map((slide, index) => {
            return (
                <>
            <div className = {index === current ? 'slide active' : 'slide'} 
            // key = {index} 
            >
                    {
                        index === current && (
                            <img className='headerImage' src= {slide.image} alt= 'my country' className = 'imageSlider'/>
                        )
                    }
                </div>
                </>

               
            )
        })}

       </div>
    )
}

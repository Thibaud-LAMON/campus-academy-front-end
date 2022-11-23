import React from 'react'
import image from './images/image-carousel.png';
import './carousel.css';

function Carousel() {
  return (
    <div className='carousel'>
        <p className='title'>Popular on Netflix</p>

        <ul className='liste'>
            <img src={image} className='image'/>
            <img src={image} className='image'/>
            <img src={image} className='image'/>
            <img src={image} className='image'/>
            <img src={image} className='image'/>
            <img src={image} className='image'/>
            <img src={image} className='image'/>
            <img src={image} className='image'/>
            <img src={image} className='image'/>
        </ul>
    </div>
  )
}

export default Carousel
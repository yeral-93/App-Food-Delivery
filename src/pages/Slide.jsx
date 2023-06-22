import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import mujer1 from '../asset/Svg.png'
import hombre1 from '../asset/Svg (1).png'
import mujer2 from '../asset/Svg (2).png'

const Slide = () => {
  return (
   <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item className='mx-auto'>
        <img
          className="d-block w-50 mt-5 "
          src={mujer1}
          alt="First slide"
        />
        <p className="mt-5 fs-4 text-center">Choose what to eat choosing from 
a variety of restaurants from the list</p>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-5"
          src={hombre1}
          alt="Second slide"
        />
        <p className="mt-5 fs-4 text-center">Choose where you want to deliver
 by indicating on the map</p>

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mt-5"
          src={mujer2}
          alt="Third slide"
        />
<p className="mt-5 fs-4 text-center">We will deliver as soon as possible</p>
        
      </Carousel.Item>
      
      
    </Carousel>
    
    </>
    
    
    
  )
}

export default Slide
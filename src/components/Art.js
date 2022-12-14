import React, { Component } from 'react'
import './Art.css';


//carousel photos
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Art(){

  //Items for the carousel
  const handleDragStart = (e) => e.preventDefault();

  const items = [
      <img className='image' alt='parrots' src={require('../images/Parrots.png')} onDragStart={handleDragStart} role="presentation" />,
      <img className='image' alt='red car' src={require('../images/red-car.png')} onDragStart={handleDragStart} role="presentation" />,
      <img className='image' alt='fishes' src={require('../images/nemo.png')} onDragStart={handleDragStart} role="presentation" />,
      <img className='image' alt='giants' src={require('../images/giant.png')} onDragStart={handleDragStart} role="presentation" />,
      <img className='image' alt='jesus' src={require('../images/enric.png')} onDragStart={handleDragStart} role="presentation" />,
      <img className='image' alt='lemons' src={require('../images/lemons.png')} onDragStart={handleDragStart} role="presentation" />,
      <img className='image' alt='tentacle' src={require('../images/tentacle.png')} onDragStart={handleDragStart} role="presentation" />,
      <img className='image' alt='swan' src={require('../images/swan.png')} onDragStart={handleDragStart} role="presentation" />,        
  ];

  //Responsiveness 
  const responsive = {
      0: { items: 1 },
      600: { items: 2 },
      1250: { items: 3 },
      1300: { items: 4 },
  }
  
  return (
    <div className='art light-theme' id='art'>
      <div className='art-content'>
          <h2 className='white-text'>My Art.</h2>
          <h3 className='white-text description'>This is a showcase of the best paintings I created during this year (2022) using watercolor and black markers.</h3>
          <AliceCarousel className='carousel'
              autoPlay
              infinite
              animationDuration={3000}
              responsive={responsive}
              keyboardNavigation
              mouseTracking 
              items={items}
              paddingLeft={1}
              disableButtonsControls                
          />
      </div>
    </div>
  )
}

export default Art


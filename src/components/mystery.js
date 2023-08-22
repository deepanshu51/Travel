import React from 'react';
import "../App.css";

const ImageComponentd = () => {
  return (
    <div>
    <div className="tex">
     <p>Embarking on a sail in the Atlantic Ocean with uncharted waters is a thrilling and daring endeavor.</p>   
    </div>
    <div className="image-container">
      <div className='top-images'>
      <div className='xt'>
      <img src="images/ocean1.jpg" alt="Image 1" />
      <p>The ship rocks gently with the rhythm of the waves, and the scent of saltwater permeates the air, creating an invigorating atmosphere.</p>
      </div>
      <div className='xt'>
      <img src="images/ocean2.jpg" alt="Image 2" />
      <p>The moment the wind catches the canvas, the ship begins to pick up speed, gently gliding through the water.</p>
      </div>
      </div>
      <div className='bottom-images'>
      <div className='xt'>
      <img src="images/ocean3.jpg" alt="Image 1" />
      <p>The temperature changes subtly as the sun climbs higher in the sky, its warm rays comforting against the cool ocean breeze.</p>
      </div>
      <div className='xt'>
      <img src="images/ocean5.jpg" alt="Image 2" />
      <p>The passage of time becomes marked by celestial events—the position of the sun, the emergence of stars at night, and perhaps even the sight of a distant whale breaching the surface.</p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ImageComponentd;
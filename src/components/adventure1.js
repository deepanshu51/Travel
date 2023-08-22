import React from 'react';
import "../App.css";

const ImageComponent = () => {
  return (
    <div>
    <div className="tex">
    <p> The waterfalls in the Amazon jungle remain largely untouched, preserving their pristine beauty and natural ecosystems.</p>
    </div>
    <div className="image-container">
      <div className='top-images'>
      <div className='xt'>
      <img src="images/waterfall1.jpg" alt="Image 1" />
      <h3><strong>Cachoeira de Iracema :</strong></h3>
      <p>An excellent place to spend the day with family and friends. The river is a spectacular place that deserves to be preserved. Some tourists drop trash in this beautiful place.</p>
      </div>
      <div className='xt'>
      <img src="images/waterfall2.jpg" alt="Image 2" />
      <h3><strong>Cachoeira do Santuario :</strong></h3>
      <p>The Coca Cola colored water here is clear and refreshing and the setting is out of this world. There are several areas here that combine to make a water wonderland. Take your suits, a picnic basket and join the locals in slipping and sliding in this picturesque place.</p>
      </div>
      </div>
      <div className='bottom-images'>
      <div className='xt'>
      <img src="images/waterfall3.jpg" alt="Image 3" />
      <h3><strong>Cachoeira do Mutum :</strong></h3>
      <p>The most beautiful of all the others, friendly price and good water for swimming or resting, walking all day, but this one is the best of all.</p>
      </div>
      <div className='xt'>
      <img src="images/waterfall4.jpg" alt="Image 4" />
      <h3><strong>Kaieteur Falls :</strong></h3>
      <p> It is one of the worlds largest waterfalls.</p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ImageComponent;
import React from 'react';
import "../App.css";

const ImageComponentc = () => {
  return (
    <div>
    <div className="tex">
    <p>Bali, a picturesque Indonesian province, is renowned for its stunning islands that offer a diverse range of natural beauty, cultural heritage, and recreational opportunities. </p>
    </div>
    <div className="image-container">
      <div className='top-images'>
      <div className='xt'>
      <img src="images/ireland1.jpg" alt="Image 1" />
      <p>Those who want to explore its diverse flora and fauna must take a cruise in Bali, because the true heart of Bali lies in its waters. These cruises, much like the scenery in Bali are distinct and offer umpteen choices to travelers.</p>
      </div>
      <div className='xt'>
      <img src="images/ireland2.webp" alt="Image 2" />
      <p>The Dolphin Watching Tour is amongst the most popular Bali day tours. The tour begins at Lovina beach, which is known for its black sand, coral reefs, and dolphins. Traverse through the placid sea waters on a traditional small boat as you spot these massive mammals in their natural habitat.</p>
      </div>
      </div>
      <div className='bottom-images'>
      <div className='xt'>
      <img src="images/ireland3.jpg" alt="Image 3" />
      <p>Savor the night breeze on the deck as you sail through the calm waters across the magnificent Bali coastline.</p>
      </div>
      <div className='xt'>
      <img src="images/ireland4.jpeg" alt="Image 4" />
      <p>A small group cruise on a traditional Indonesian wooden ship, this Bali cruise tour is an approximate three hour trip which includes live Indonesian music and dance, and a hearty buffet meal.</p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ImageComponentc;
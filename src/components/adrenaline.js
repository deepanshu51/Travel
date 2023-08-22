import React from 'react';
import "../App.css";

const ImageComponenta = () => {
  return (
    <div>
    <div className="tex">
     <p>The Sahara Desert, with its vast expanse of golden sand dunes and mesmerizing landscapes, offers a truly captivating experience, especially when explored through a guided camel tour.</p>   
    </div> 
    <div className="image-container">
      <div className='top-images'>
      <div className='xt'>
      <img src="images/des1.jpg" alt="Image 1" />
      <p>Riding through the desert on a camel is incredible. You feel like a Bedouin or a Nomad.</p>
      </div>
      <div className='xt'>
      <img src="images/des2.jpg" alt="Image 2" />
      <p>The scenery is amazing – red sand, dunes for miles, the dark blue sky, and unless you ride to an oasis which you may well do, there is nothing around.</p>
      </div>
      </div>
      <div className='bottom-images'>
      <div className='xt'>
      <img src="images/des3.jpg" alt="Image 1" />
      <p>you can take a break in these tiny villages and talk to the locals, who are actually more than happy to narrate some of their famous folk tales — which are quite intriguing!</p>
      </div>
      <div className='xt'>
      <img src="images/des4.jpg" alt="Image 2" />
      <p>Additionally, a ride here also presents you the best views of the Aravalli ranges one of the world oldest mountain ranges, along with bewitching sunrises and sunsets.</p>
      </div>
     </div>
    </div>
    </div>
  );
};

export default ImageComponenta;
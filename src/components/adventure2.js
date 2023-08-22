import React from 'react';
import "../App.css";

const ImageComponentb = () => {
  return (
    <div>
    <div className="tex">
    <p>Sports in the Himalayan mountains offer athletes an extraordinary blend of natural beauty, physical exertion, and spiritual connection.</p>
    </div>
    <div className="image-container">
      <div className='top-images'>
      <div className='xt'>
      <img src="images/mount1.jpg" alt="Image 1" />
      <h3><strong>Bungee Jumping :</strong></h3>
      <p>Bungee jumping is one of extra adventure funs that are a challenging sport in Nepal run by professional jumpers/drivers under the secured backup.</p>
      </div>
      <div className='xt'>
      <img src="images/mount2.jpg" alt="Image 2" />
      <h3><strong>Skiing :</strong></h3>
      <p>Skiing in Kashmir is one of the most thrilling winter sports adventure activities that you can undertake while on vacation there because it delivers adventure seekers the ultimate rush and thrill.</p>
      </div>
      </div>
      <div className='bottom-images'>
      <div className='xt'>
      <img src="images/mount3.jpg" alt="Image 1" />
      <h3><strong>Rafting :</strong></h3>
      <p>Rafting is also a competitive sport practiced around the world which culminates in a world rafting championship event between the participating nations.</p>
      </div>
      <div className='xt'>
      <img src="images/mount4.jpg" alt="Image 2" />
      <h3><strong>Cycling :</strong></h3>
      <p>Cycling helps you to experience everything in person. Be it the texture of the trail, aroma of wildflowers, the panoramic views, or the hairpin bends of the road – everything will leave you speechless.</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ImageComponentb;
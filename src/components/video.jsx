import React from 'react';

const video = () => {

  return (
    <div>
      <video controls width="640" height="360">
        <source src="videos/adventure_project.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default video;

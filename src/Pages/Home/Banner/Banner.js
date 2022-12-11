import React from 'react';
import image from '../../../assets/images/banner/unnamed.webp';

const Banner = () => {
  return (
    <div className='flex justify-around items-center mt-8'>
      
      <div>
        <p>Hello everybody I am,</p>
        <h1>SHOUROV HASAN</h1>
        <h3>Frontend Developer</h3>
        <p>Passionate about building first-class web applications. I always love to do clean and reusable code.</p>

        <div>icon</div>


        <a href='https://drive.google.com/file/d/1bwGiLoJzJiaPqvo5lKzsiXNXSTkHJlwr/view?usp=sharing' className=''>Download Resume</a>
      </div>

      <div>
        <img src={image} alt="" />
      </div>

    </div>
  );
};

export default Banner;
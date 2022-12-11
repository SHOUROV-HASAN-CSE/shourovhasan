import React from 'react';
import image from '../../../assets/images/banner/unnamed.webp';
import github from '../../../assets/images/icon/github-icon-1.svg';
import linkedin from '../../../assets/images/icon/linkedin-icon-2.svg';
import facebook from '../../../assets/images/icon/facebook-2020-2-1.svg';
import twitter from '../../../assets/images/icon/twitter-6.svg';
import gmail from '../../../assets/images/icon/gmail-icon.svg';


const Banner = () => {
  return (
    <div className='flex justify-around items-center mt-8 mb-16'>
      
      <div>
        <p><i>Hello everybody I am,</i></p>
        <h1 className='text-4xl font-semibold text-[#008140] mt-5'>SHOUROV HASAN</h1>
        <h3 className='text-2xl font-semibold mt-3'>Frontend Developer</h3>
        <p className='my-2 text-lg font-medium text-gray-500'>Passionate about building first-class web applications. I always love to do clean and reusable code.</p>

        <div className='my-5 flex items-center'>
          <a href="https://github.com/SHOUROV-HASAN-CSE"><img className='w-8' src={github} alt="" /></a>
          <a href="https://www.linkedin.com/in/shourov-hasan/"><img className='w-8 ml-3' src={linkedin} alt="" /></a>
          <a href="https://www.facebook.com/shourovhasan171/"><img className='w-10 ml-3' src={facebook} alt="" /></a>
          <a href="https://twitter.com/"><img className='w-10 ml-2' src={twitter} alt="" /></a>
          <p ><img className='w-8 ml-3' src={gmail} alt="" /></p>
        </div>


        <a href='https://drive.google.com/file/d/1bwGiLoJzJiaPqvo5lKzsiXNXSTkHJlwr/view?usp=sharing' className='btn btn-success'>Download Resume</a>
      </div>

      <div>
        <img className='w-96 rounded-full' src={image} alt="" />
      </div>

    </div>
  );
};

export default Banner;
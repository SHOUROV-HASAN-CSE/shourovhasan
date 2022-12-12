import React from 'react';
import image from '../../assets/images/skillshare/skill-share.PNG';
import image1 from '../../assets/images/skillshare/Capture 1.PNG';
import image2 from '../../assets/images/skillshare/Capture 2.PNG';
import image3 from '../../assets/images/skillshare/Capture 3.PNG';

const Skillshare = () => {
  return (
    <div className='md:flex mt-10'>
      <div className="carousel md:w-2/3">
  <div id="slide1" className="carousel-item relative w-full">
    <img className="w-full" src={image} alt="" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image1} className="w-full" alt=""/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image2} className="w-full" alt=""/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={image3} className="w-full"alt="" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>


<div className='md:w-1/2 p-6 bg-[#d9d9d9] rounded-lg'>
  
<div>
  <h1><span className='font-bold'>Description:  </span> This website is an resale camera and gear base website.
This website all data provide in mongodb data server.
Here 3 category user Feature. buyer, seller and Admin.
Here is a Private option that uses private routes.
Here login page 2 verification method is used.
After login seller account you can added new Product.</h1>

<h3 className='text-lg font-bold mt-8'>Technology use:</h3>
<button className="btn btn-success m-2">React Js</button>
<button className="btn btn-success m-2">Node Js</button>
<button className="btn btn-success m-2">Express Js</button>
<button className="btn btn-success m-2">Mongo DB</button>
<button className="btn btn-success m-2">Bootstrap</button>
</div>
<div className='mt-8 flex justify-center'>
  <a href="https://legendary-peony-679d17.netlify.app/"><button className="btn btn-outline btn-primary m-2">Live Preview</button></a>
  <a href="/"><button className="btn btn-outline btn-secondary m-2">Client Site Code</button></a>
  <a href="/"><button className="btn btn-outline btn-secondary m-2">Server Site Code</button></a>
</div>
</div>

    </div>
  );
};

export default Skillshare;
import React from 'react';
import image from '../../assets/images/creativephotography/Capture.PNG';
import image1 from '../../assets/images/creativephotography/Capture 1.PNG';
import image2 from '../../assets/images/creativephotography/Capture 2.PNG';
import image3 from '../../assets/images/creativephotography/Capture 3.PNG';


const Creativephotography = () => {
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
  <h1><span className='font-bold'>Description:  </span> This website is an Photography base website.
My Clicking best photo Gallery added in this site.
You can See card photo click to full skin.
Here is a Private option that uses private routes.
Here login page 2 verification method is used.
After login you can added new services.</h1>

<h3 className='text-lg font-bold mt-8'>Technology use:</h3>
<button className="btn btn-success m-2">React Js</button>
<button className="btn btn-success m-2">Node Js</button>
<button className="btn btn-success m-2">Mongodb</button>
<button className="btn btn-success m-2">Express JS</button>
<button className="btn btn-success m-2">Tailwind CSS</button>
<button className="btn btn-success m-2">Daisy UI</button>
</div>
<div className='mt-8 flex justify-center'>
  <a href="https://creative-photography-c9a0d.web.app/"><button className="btn btn-outline btn-primary m-2">Live Preview</button></a>
  <a href="https://github.com/SHOUROV-HASAN-CSE/creative-photography-client"><button className="btn btn-outline btn-secondary m-2">Client Site Code</button></a>
  <a href="https://github.com/SHOUROV-HASAN-CSE/creative-photography-server"><button className="btn btn-outline btn-secondary m-2">Server Site Code</button></a>
</div>
</div>

    </div>
  );
};

export default Creativephotography;
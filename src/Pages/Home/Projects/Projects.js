import React from 'react';
import skillshare from '../../../assets/images/Product/skill-share.PNG';
import cameracorner from '../../../assets/images/Product/camera-corner.PNG';
import creativephotography from '../../../assets/images/Product/creative-photography.PNG';

const Projects = () => {
  return (
    <div id='projects'>
      <h1 className='text-center text-5xl text-[#008140]'>Projects</h1>
        <div className=' mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          
        
        <div className="card w-96 bg-base-100 shadow-2xl">
  <figure className="px-2 pt-5">
    <img src={skillshare} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Skill Share</h2>
    <p>This website is an Programming base website.</p>
    <div className="card-actions">
     <a href="https://legendary-peony-679d17.netlify.app/"> <button className="btn btn-primary">live site</button></a>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-2xl">
  <figure className="px-2 pt-5">
    <img src={cameracorner} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Camera Corner</h2>
    <p>Creative Photography is an Wedding Photographic Website.</p>
    <div className="card-actions">
      <a href="https://camera-corner.web.app/"><button className="btn btn-primary">live site</button></a>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-2xl">
  <figure className="px-2 pt-5">
    <img src={creativephotography} alt="Shoes" className="rounded-lg" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Creative Photography</h2>
    <p>Camera Corner is an Camera And Gear resale Website.</p>
    <div className="card-actions">
      <a href="https://creative-photography-c9a0d.web.app/"><button className="btn btn-primary">live site</button></a>
    </div>
  </div>
</div>


 </div>

 </div>
    
  );
};

export default Projects;
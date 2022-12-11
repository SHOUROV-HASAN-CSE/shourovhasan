import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className='text-center text-5xl text-[#008140]'>About</h1>

      <div className='flex items-center my-6'>
      <div className='w-1/2'>
      <h1 className='text-4xl font-semibold text-[#008140] mb-5'>SHOUROV HASAN</h1>
        <p className='font-semibold'>Determined Junior Developer with the ability to adapt in both self-starting and collaborative environments. Specialize in Designing, Developing, and Debugging. Passionate about building first-class web applications. I always love to do clean and reusable code.</p>
      </div>

      <div>
        <h1 className='text-4xl font-semibold my-5'>Education</h1>
        <h3 >Diploma in Computer Technology (2015-2019)</h3>
        <h2 className='text-2xl font-semibold text-[#008140] mb-8'>Gopalganj Polytechnic Institute</h2>

        <h1 className='text-4xl font-semibold mb-5'>Trainning</h1>
        <h3>Complete Web Development with Jhanker Mahbub (2021)</h3>
        <h2 className='text-2xl font-semibold text-[#008140] mb-5'>Programming Hero</h2>

        <h3>Web Development (2020)</h3>
        <h2 className='text-2xl font-semibold text-[#008140] mb-5'>Learning & Earning Development Project</h2>
      </div>

      </div>

    </div>
  );
};

export default About;
import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Skill/>
      < Projects/>
      <Contact/>
    </div>
  );
};

export default Home;
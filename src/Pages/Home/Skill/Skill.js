import React from 'react';
import react from '../../../assets/images/icon/react-2.svg';
import javascript from '../../../assets/images/icon/javascript-1.svg';
import figma from '../../../assets/images/icon/figma-1.svg';
import firebase from '../../../assets/images/icon/firebase-2.svg';
import netlify from '../../../assets/images/icon/netlify.svg';
import nodejs from '../../../assets/images/icon/nodejs-1.svg';
import tailwind from '../../../assets/images/icon/tailwind-css-2.svg';
import bootstrap from '../../../assets/images/icon/bootstrap-4.svg';
import gitbash from '../../../assets/images/icon/git-bash.svg';
import github from '../../../assets/images/icon/github-icon-1.svg';

const Skill = () => {
  return (
    <div className='flex gap-20 justify-center my-24 '>
      <img className='w-14' src={react} alt="" />
      <img className='w-14' src={javascript} alt="" />
      <img className='w-14' src={firebase} alt="" />
      <img className='w-16' src={nodejs} alt="" />
      <img className='w-16' src={gitbash} alt="" />
      <img className='w-16' src={tailwind} alt="" />
      <img className='w-16' src={netlify} alt="" />
      <img className='w-14' src={github} alt="" />
      <img className='w-12' src={figma} alt="" />
      <img className='w-14' src={bootstrap} alt="" />
    </div>
  );
};

export default Skill;
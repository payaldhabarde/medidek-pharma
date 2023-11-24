import React from 'react'

import { CgFormatSlash } from "react-icons/cg";
import AboutUsHome from '../Home/AboutUsHome'
import Testimoniols from '../Home/Testimoniols';
import OurTeam from '../Home/OurTeam';
import LiveCients from '../Home/LiveClients';
const AboutOurSelf = () => {
  return (
    <>
     <div style={{ backgroundImage:`url(${"https://bayareaheart.com/wp-content/uploads/2020/05/Untitled-1-768x312.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center", opacity:0.9, 
  }} className='p-20 text-center relative mt-12' >
     
        <h1 className='text-4xl font-semibold text-white mb-5'>About-Us</h1>
        <div className='flex space-x-3 text-blue-300 justify-center'>
          <span >Home</span>
          <CgFormatSlash className='h-6 text-white' />

          <span>Pages</span>
          <CgFormatSlash className='h-6 text-white' />
          <span className='text-orange-700 opacity-95'>About</span>
        </div>
      </div>
     <div className='mt-8'></div>
     <OurTeam/>
      <Testimoniols/>
      <AboutUsHome/>
      <div className='mt-24 mb-24'></div>
      <LiveCients/>
    </>
   
  )
}

export default AboutOurSelf

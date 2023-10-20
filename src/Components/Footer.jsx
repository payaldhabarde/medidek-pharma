import React from 'react'
import { BiLogoFacebook, BiLogoTwitter,BiLogoGoogle,BiLogoLinkedin,BiLogoYoutube } from "react-icons/bi";
import { FaLocationDot,FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import Footer2 from './Footer2';
const Footer = () => {
  return (
    <>
  
   
     <div className=' bg-[#1F51C6] '>
<div className='flex justify-between text-white  '>
        <div className='mb-4 mt-2 ml-4'>
            
            <p className='font-semibold text-xl mt-2 '>Medidek Socials</p>
            
        </div>

        <div className='flex '>
      
        
        </div>


        <div className='mr-4 mt-6  gap-4'>
            <h1 className='text-2xl font-semibold'>Contact Us</h1><br/>
            <div className='flex '>
           <FaLocationDot/>&nbsp;&nbsp; <span> Jaripatka, Ginger Mall, Nagpur, 440014.</span></div><br/>
           <div className='flex'>  <FaPhone/> &nbsp;&nbsp; <span>  0 (022) 223 77667</span></div><br/>
           <div className='flex'>   <HiOutlineMail/>&nbsp; &nbsp; <span>  medidek.in</span></div>
        </div>
        

       
        </div> 
        <p className='font-sm text-gray-400 opacity-60 text-center '>© Copyright 2023. All Rights Reserved.</p>
        </div>
       
    </>
  )
}

export default Footer

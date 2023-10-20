import React from 'react'
import { BsStopwatch } from "react-icons/bs";
import { BiLogoFacebook, BiLogoTwitter,BiLogoGoogle,BiLogoLinkedin,BiLogoYoutube } from "react-icons/bi";
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
const Navbar1 = () => {
  return (
    <>

     <div className='flex relative justify-between bg-[#1F51C6] opacity-95 text-white gap-5 '>
        <div className='flex justify-between items-center p-3 ml-9  space-x-4'>
        <BsStopwatch/>
    <span className='font-thin text-sm'>Opening Hours: Mon - Sat 8.00 - 18.00</span>
    </div> 
    
    <div className='flex justify-center items-center mr-9  space-x-4'>
       
        <p className='font-thin text-sm'>Follow us:</p>
        <div className='flex gap-4 items-center'>
        <BiLogoFacebook/>
        <BiLogoTwitter/>
        <BiLogoGoogle/>
        <BiLogoLinkedin/>
        <BiLogoYoutube/>
        </div>
   </div>    
    </div> 
    <Navbar2/>
    <Navbar3/>
    </>
  )
}

export default Navbar1

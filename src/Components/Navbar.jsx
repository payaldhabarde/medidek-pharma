import React from 'react'
import { BsStopwatch } from "react-icons/bs";
import { BiLogoFacebook, BiLogoTwitter,BiLogoGoogle,BiLogoLinkedin,BiLogoYoutube } from "react-icons/bi";
const Navbar = () => {
  return (
    <>

     <div className='md:flex relative justify-between bg-[#EC5C42] opacity-95 text-white gap-5 '>
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
    </>
  )
}

export default Navbar

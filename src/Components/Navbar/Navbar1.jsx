import React, { useContext, useState } from 'react'
import { BsStopwatch } from "react-icons/bs";
import { PiInstagramLogoBold } from "react-icons/pi";


import { BiLogoFacebook, BiLogoTwitter,BiLogoGoogle,BiLogoLinkedin,BiLogoYoutube } from "react-icons/bi";

const Navbar1 = () => {
const[register,setRegister]=useState(false);
  return (
    <>

     <div className='flex relative sticky justify-between bg-[#1F51C6] opacity-95 text-white md:gap-3 gap-5 '>
        <div className='flex justify-between items-center p-3  ml-3  space-x-4'>
       <BsStopwatch/>
    <span className='font-thin text-sm '>Opening Hours: Mon - Sat 8.00 - 18.00</span>
    </div> 
    
    <div className='flex justify-center items-center mr-12 space-x-4'>
       
        <p className='font-thin sm:font-thin text-sm '>Follow us:</p>
        <div className='flex gap-4 items-center'>
       <a href='https://www.facebook.com/profile.php?id=100094316681517' target="_blank"><BiLogoFacebook/></a>
        <a href='https://www.bing.com/search?q=medidek&qs=n&form=QBRE&sp=-1&lq=0&pq=medidek&sc=11-7&sk=&cvid=0FE97BC133114E39B00A871B546F31D9&ghsh=0&ghacc=0&ghpl=' target="_blank"><BiLogoGoogle/></a>
       <a href='https://www.linkedin.com/company/medidek-pharmaceuticals/' target="_blank"><BiLogoLinkedin/></a>
       <a href='https://www.instagram.com/medidekofficial/' target="_blank"><PiInstagramLogoBold  /></a>
       <a to='https://www.youtube.com/@MedidekSocial' target="_blank"><BiLogoYoutube/></a>
        </div>
   </div>    
    </div> 
    
   
    </>
  )
}

export default Navbar1

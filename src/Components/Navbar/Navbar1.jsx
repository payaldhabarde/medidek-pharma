import React, { useContext, useState } from 'react'
import { BsStopwatch } from "react-icons/bs";
import { BiLogoFacebook, BiLogoTwitter,BiLogoGoogle,BiLogoLinkedin,BiLogoYoutube } from "react-icons/bi";
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
import Home2 from '../Home/Home2';
import OurTeam from '../Home/OurTeam';
import Blogs from '../Home/Blogs';
import Testimoniols from '../Home/Testimoniols';
import Contact1 from '../Contact/Contact1';
import Products from '../Home/Products';
import AboutUsHome from '../Home/AboutUsHome';
import DevelopmentPipline from '../Home/DevelopmentPipline';

import ProductHome from "../../NewComponent/ProductHome"
const Navbar1 = () => {
const[register,setRegister]=useState(false);
  return (
    <>

     <div className='flex relative sticky justify-between bg-[#1F51C6] opacity-95 text-white md:gap-3 gap-5 '>
        <div className='flex justify-between items-center p-3  ml-9  space-x-4'>
       <BsStopwatch/>
    <span className='font-thin text-sm '>Opening Hours: Mon - Sat 8.00 - 18.00</span>
    </div> 
    
    <div className='flex justify-center items-center mr-9 space-x-4'>
       
        <p className='font-thin sm:font-thin text-sm '>Follow us:</p>
        <div className='flex gap-4 items-center'>
        <BiLogoFacebook/>
        <BiLogoTwitter/>
        <a href='https://www.medidek.in/'><BiLogoGoogle/></a>
       <a href='https://www.linkedin.com/company/medidek/posts/?feedView=all'><BiLogoLinkedin/></a>
        <BiLogoYoutube/>
        </div>
   </div>    
    </div> 
<ProductHome/>

    <Navbar3 />
    <Home2/>
    {!register && <OurTeam/>}
    {!register &&<Blogs/>}
    {!register &&<Testimoniols/>}
    <Contact1/>
    <div className='mt-32'></div>
    <Products/>

   <div className='mb-2'></div>
   
   <AboutUsHome/>
   <div className='mb-32'></div>
   <DevelopmentPipline/>
   
    </>
  )
}

export default Navbar1

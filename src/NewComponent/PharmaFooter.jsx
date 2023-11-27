import React from 'react'
import { GrFacebookOption,GrYoutube } from "react-icons/gr";
import { PiTwitterLogoFill } from "react-icons/pi";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaCcPaypal,FaGooglePay } from "react-icons/fa";
import { SiPhonepe, SiPaytm} from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { BiLogoFacebook, BiLogoTwitter,BiLogoGoogle,BiLogoLinkedin,BiLogoYoutube } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { PiInstagramLogoBold } from "react-icons/pi";

import { useState } from 'react'
const PharmaFooter = () => {
  const buyMedicine = useNavigate()
  const subscribe= useNavigate();

  const[inputValue, setValue]=useState({
    email:"",
  })

  const getdata= (e) =>{
    const{id, value} =e.target;
    console.log(id, value)
    setValue({...inputValue, [id]:value})
  }

  const apicall =async(e) =>{
    e.preventDefault()
    const{email}=inputValue;
    const respc =await axios.post("http://localhost:5000/newsletter",{email})
    console.log(respc);
  if(respc.status === 200){
    toast(respc.data.msg);
    subscribe('/')
  }else{
    toast('something went wrong!')
  }
}

  return (
    <>

    <div className='bg-[#1F51C6] text-white '>
     <div className=' mt-20 ml-4 w-full  flex justify-evenly '>
        
        <div className='text-sm space-y-3 ml-11 mt-5'>
        <Link to='/contactus' onClick='scroll-mt-px'><h1 className='cursor-pointer font-semibold '>Contact Us</h1></Link>
            <p className='text-sm opacity-70'>Call us 24/7</p>
            <h1 className='text-lg font-semibold'>+91-8087036722</h1>
            <p className='text-sm'>2nd floor, Ginger Square Mall, Bus<br/> Stop, Main Rd,
Jaripatka,Nagpur,<br/> Maharashtra 440014</p>
<span className='flex gap-3 text-white mt-5 '>

<a href='https://www.facebook.com/profile.php?id=100094316681517' target='_blank' className='cursor-pointer'><BiLogoFacebook/></a>
        <a href='https://www.bing.com/search?q=medidek&qs=n&form=QBRE&sp=-1&lq=0&pq=medidek&sc=11-7&sk=&cvid=0FE97BC133114E39B00A871B546F31D9&ghsh=0&ghacc=0&ghpl=' target='_blank' className='cursor-pointer '><BiLogoGoogle /></a>
       <a href='https://www.linkedin.com/company/medidek-pharmaceuticals/' target='_blank' className='cursor-pointer'><BiLogoLinkedin/></a>
       <a href='https://www.instagram.com/medidekofficial/' target='_blank' className='cursor-pointer'><PiInstagramLogoBold  /></a>
       <a href='https://www.youtube.com/@MedidekSocial' target='_blank' className='cursor-pointer'><BiLogoYoutube/></a>
       
</span>
        </div>


        <div className='text-sm mt-5'>
            <h1 className='font-semibold '>Company</h1>
            <div className='text-sm space-y-1 mt-5'>
            <a href='/contactus' onClick='scroll-mt-px' target='_blank' className='cursor-pointer'><p>Support Center</p></a>
            <p>Policy</p>
            <p>Term & Conditions</p>
            <p>Register a seller</p>
            </div>
        </div>

        <div className='text-sm mt-5'>
            <h1 className='font-semibold '>Pharma Support</h1>
            <div className='text-sm space-y-1 mt-5'>
            <a href='/contactus' onClick='scroll-mt-px' target='_blank' className='cursor-pointer' > <p>About Us</p></a>
            <a href='/contactus' onClick='scroll-mt-px' target='_blank' className='cursor-pointer'> <p>Contact</p></a>
            <a href='/faq' onClick='scroll-mt-px' target='_blank' className='cursor-pointer'> <p>FAQ</p></a>
            </div></div>

            <div className='text-sm mt-5'>
            <h1 className='font-semibold '>Pharma Market</h1>
            <div className='text-sm space-y-1 mt-5'>
            <p>Store Location</p>
            <p>Advertises on Pharma</p>
            <p>Affiliate Program</p>
            <p>Partnership</p></div></div>

            <div className='text-sm mr-20 space-y-8'>
            <h1 className='font-semibold mt-5'>Newsletter</h1>

            <p className='text-sm'>Subscribe now to get all of our<br/> special
offers,newest updates<br/>& coupons on your e-mail. Don't <br/>Worries.We not spam.</p>
            
            <div class="flex items-center w-64 border-b border-gray-300 py-2">
    <input onChange={(e)=>getdata(e)} class="appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none" id='email' type="email" placeholder="Email Address" aria-label="Full name"/>
    <button onClick={apicall} className='text-sm cursor-pointer text-white font-semibold' >SUBSCRIBE</button>
    </div>
            </div>

        </div> 
           
        <hr className='w-full  mt-5'/>
        <div className='mt-1 flex justify-evenly mr-16'>
        <a href='https://www.medidek.in/'> <img src='imgs/MedidekWhite.png' className='w-48 h-20 ml-5'/></a>

          <div className='text-center mt-9 ml-16  '>
        <p className='text-xs  '>© 2023 Medidek™. All Rights Reserved.</p>
       
        </div>
         <div className='flex gap-5 mt-5 '>
        <p className='text-sm ml-32 '>We Using Safe Payment For</p>
        <span className='flex gap-1 text-white '>
        <FaCcPaypal className='w-11 h-6'/>
        <SiPhonepe className='w-11 h-6'/>
        <SiPaytm className='w-11 h-6'/>
        <FaGooglePay className='w-11 h-6 '/></span>
        
        </div>
        
        </div></div>
        
    </>
  )
}

export default PharmaFooter

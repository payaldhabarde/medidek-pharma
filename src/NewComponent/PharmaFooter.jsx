import React from 'react'
import { GrFacebookOption,GrYoutube } from "react-icons/gr";
import { PiTwitterLogoFill } from "react-icons/pi";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaCcPaypal,FaGooglePay } from "react-icons/fa";
import { SiPhonepe, SiPaytm} from "react-icons/si";
import { useNavigate } from 'react-router-dom';


const PharmaFooter = () => {
  const buyMedicine = useNavigate()

  return (
    <>
     <div className=' mt-20 ml-24 flex justify-between '>
        
        <div className='text-sm space-y-3 ml-11'>
            <h1 className='font-semibold '>Contact Us</h1>
            <p className='text-xs opacity-70'>Call us 24/7</p>
            <h1 className='text-lg font-semibold text-blue-800'>1800 97 97 69</h1>
            <p className='text-xs'>2nd floor, Ginger Square Mall, Bus<br/> Stop, Main Rd,
Jaripatka,Nagpur,<br/> Maharashtra 440014</p>
<span className='flex gap-3 mt-5'>
<GrFacebookOption className='text-[#3b5998]'/>
<PiTwitterLogoFill className='text-[#55acee]'/>
<TiSocialGooglePlus className='text-[#dc4e41]'/>
<GrYoutube className='text-[#cd201f]'/>
</span>
        </div>


        <div className='text-sm '>
            <h1 className='font-semibold '>Company</h1>
            <div className='text-xs space-y-1 mt-5'>
            <p>Support Center</p>
            <p>Policy</p>
            <p>Term & Conditions</p>
            <p>Shipping</p>
            <p>Return</p>
            <p>Register a seller</p>
            <p>FAQs</p></div>
        </div>

        <div className='text-sm '>
            <h1 className='font-semibold '>Pharma Support</h1>
            <div className='text-xs space-y-1 mt-5'>
            <p>About Us</p>
            <p>Affiliate</p>
            <p>Carrer</p>
            <p>Contact</p></div></div>

            <div className='text-sm '>
            <h1 className='font-semibold '>Pharma Market</h1>
            <div className='text-xs space-y-1 mt-5'>
            <p>Store Location</p>
            <p>Advertises on Pharma</p>
            <p>Affiliate Program</p>
            <p>Partnership</p></div></div>

            <div className='text-sm mr-20 space-y-8'>
            <h1 className='font-semibold '>Newsletter</h1>

            <p className='text-xs'>Register now to get updates on promotions &<br/> coupons. Don't Worries.We not spam.</p>
            
            <div >
            <input type='email' name='email' placeholder='Email Address' className='border-2 border-blue-800 w-40 h-9 p-2'/>
            <button className='py-2 px-3 bg-blue-800'>Subscribe</button>
            </div>
            </div>

        </div> 
           
        <hr className='w-[1150px] ml-20 mt-16'/>
        <div className='mt-7 flex justify-between mr-16'>
          <img src='imgs/m-logo.png' className='w-56 h-12 ml-24'/>

          <div className='text-center mt-12 ml-6 mb-4'>
        <p className='text-xs  '>© 2023 Medidek™. All Rights Reserved.</p>
        <button onClick={() =>buyMedicine('/category')} className='bg-blue-800 text-white  rounded px-8'><span className='text-xs text-center'>Buy Medicines</span></button>
        </div>
         <div className='flex gap-5'>
        <p className='text-xs ml-32 '>We Using Safe Payment For</p>
        <span className='flex gap-1 text-blue-800 '>
        <FaCcPaypal className='w-11 h-6'/>
        <SiPhonepe className='w-11 h-6'/>
        <SiPaytm className='w-11 h-6'/>
        <FaGooglePay className='w-11 h-6'/></span>
        
        </div>
        
        </div>
        
    </>
  )
}

export default PharmaFooter

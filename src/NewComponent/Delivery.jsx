import React from 'react'
import { GiMedicines } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSolidMessageRoundedEdit } from "react-icons/bi"
import Discount from './Discount';
import ShopByCategory from './ShopByCategory';
const Delivery = () => {
  return (
    <>
    
    <div className='flex'>
        <div>
    <div style={{ backgroundImage:`url(${"https://www.tenaflypediatrics.com/wp-content/uploads/2018/04/Hospital-Background.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center", opacity:0.9, 
  }} className='p-20 text-end opacity-30 mt-12 h-80 w-[910px] ml-9 inset-10 cover' >

      <div className='text-white space-y-2 ml-24'>
       <h1 className='font-semibold text-3xl'>ESSENTIAL PRODUCTS</h1> 
       <h1 className='text-3xl'>In the Pharmaceuticals</h1>
       <p className='text-sm'>Drugs that enhance resistace and the</p>
       <p className='text-sm'>support items to prevent the disease</p>
       <button className='bg-blue-800 w-24 mr-14 h-9 rounded-xl'>Shop Now</button>
       </div>
    </div>

    <div className='flex gap-2'>
        <div className='flex ml-8 mt-5 gap-3'>
        <GiMedicines className='w-8 h-8 text-blue-800 mt-1' />
        <div>
        <h1 className='font-semibold text-sm'>Reliable</h1>
        <p className='text-sm'>Over 25K products</p></div>
        </div>
        <div className='flex ml-12 mt-5 gap-4'>
        <CiDeliveryTruck className='w-8 h-8 text-blue-800 mt-1' />
        <div>
        <h1 className='font-semibold text-sm'>Home Delivery</h1>
        <p className='text-sm'>Free delivery to your home</p></div>
        </div>
        <div className='flex ml-12 mt-5 gap-4'>
        <RiSecurePaymentLine className='w-8 h-8 text-blue-800 mt-1' />
        <div>
        <h1 className='font-semibold text-sm'>Secure Payment</h1>
        <p className='text-sm'>100% Secure Payment</p></div>
        </div>
        <div className='flex ml-12 mt-5 gap-4'>
        <BiSolidMessageRoundedEdit className='w-8 h-8 text-blue-800 mt-1' />
        <div>
        <h1 className='font-semibold text-sm'>24/7 Support</h1>
        <p className='text-sm'>Dedicated support in 24hrs</p></div>
        </div>
    </div></div>
<Discount/>
    </div>
    <ShopByCategory/>
    </>
  )
}

export default Delivery

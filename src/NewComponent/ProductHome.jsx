import React from 'react'
import { MdKeyboardArrowDown,MdMenu } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { LiaPhoneSolid } from "react-icons/lia";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const ProductHome = () => {
const navchng =useNavigate()
  return (
    <>
      <div>
        <div className='flex mt-8 ml-1'>
      <img src='imgs/m-logo.png' className='w-48 h-18 '/>
    <MdMenu className='mt-1 w-20 h-6'/>
    <div className='flex border border-gray-200 rounded-l-lg w-2/5 h-12 justify-start'>
        <h1 className='flex ml-3 mt-3'>All <MdKeyboardArrowDown className='mt-1 ml-1'/></h1>
        <RxDividerVertical className='mt-2 ml-1 h-8 w-6'/> 
        <input type='search' name='search' placeholder="I'm shopping for..." className='ml-3 '/>
    </div>
    <button className='bg-blue-800 rounded-r-lg w-20 h-12 text-white'>Search</button>
    
    <LiaPhoneSolid className='mt-1 w-8 h-8 ml-9 opacity-50'/>
    <span className='ml-3'>
        <h1 className='text-sm'>Hotline</h1>
       <p className='text-blue-800 text-sm font-semibold'> 1-800-234-6534</p>
    </span>
    <FiShoppingCart className='ml-6 w-8 h-6 mt-2 opacity-60'/>
    <IoPersonOutline onClick={()=>navchng("/regist")} className='ml-9 w-8 h-6 mt-2 opacity-60'/>

    <span className='ml-3'>
    
        <h1 onClick={()=>navchng("/regist")}  className='text-sm'>Log in</h1>
       <p onClick={()=>navchng("/regist")}   className='text-blue-800 text-sm font-semibold'> Register</p>
    </span>
    </div>
 
      </div>
      

     
    </>
  )
}

export default ProductHome

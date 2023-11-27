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
        <div className='flex mt-2 ml-1'>
    <a href='/'>  <img src='imgs/m-logo.png' className='w-48 h-18 '/></a>
    <MdMenu className='mt- w-24 h-8'/>
    
        <form className='top-0'>
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div class="relative w-full ">
            <input type="search" id="search-dropdown" class="block p-2.5 w-[520px] z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required/>
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full w-16 text-white bg-[#1F51C6] rounded-e-lg border border-blue-700 hover:bg-[#1F51C6] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#1F51C6] dark:focus:ring-[#1F51C6]">
                <svg class="w-6 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

    
    
    <LiaPhoneSolid className='mt-1 w-8 h-8 ml-16 opacity-50'/>
    <span className='ml-3'>
        <h1 className='text-sm'>Hotline</h1>
       <p className='text-[#1F51C6] text-sm font-semibold'> 1800-234-6534</p>
    </span>
    
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

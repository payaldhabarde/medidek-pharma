import React from 'react'
import { TfiAlignLeft } from "react-icons/tfi";
import { BsFillBellFill, BsFillEnvelopeFill, BsJustify, BsPersonCircle, BsSearch } from 'react-icons/bs'
import { RiAppsFill } from "react-icons/ri";
import { HiMoon } from "react-icons/hi";
const DashNavbar = () => {
  return (
    <>
     <div className='flex gap-56'>
    <div className='flex gap-2'>
        <TfiAlignLeft/>
        <img src='m-logo.png' className='w-32 h-8'/>
    </div>
    
    <div className='flex border border-gray-200 rounded-l-lg w-2/5 h-12 justify-start'>
        <input type='search' name='search' placeholder="I'm shopping for..." className='ml-3 '/>
    </div>

    <div className='flex mr-9'>
      <BsFillBellFill className='w-16 h-5' />
      <RiAppsFill className='w-16 h-5'/>
      <HiMoon className='w-16 h-5'/>

      
<img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="relative w-10 h-10 rounded-full cursor-pointer" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="User dropdown" />


<div id="userDropdown" class="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div class="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>

      </div>
    </div> 
    </>
  )
}

export default DashNavbar

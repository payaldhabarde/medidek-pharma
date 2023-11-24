import React from 'react'

import { FaRegHandshake } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { WiCloud } from "react-icons/wi";
import { GiCutDiamond } from "react-icons/gi";
const AboutUsHome = () => {

    
  return (
    <>
  <div className='md:flex justify-between p-12 '>
<div className=''>
<h1 className='md:text-4xl md:font-semibold sm:text-center mb-6 opacity-80'>Why Choose Us?</h1> 
        <button type="button" class="text-[#1F51C6] hover:text-white border-2 border-[#1F51C6] hover:bg-[#1F51C6] focus:ring-4 focus:outline-none focus:ring-blue-300 sm:font-medium sm:rounded-lg sm:text-sm sm:px-14 sm:py-3.5 md::m-auto mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-[#1F51C6] dark:focus:ring-[#1F51C6] justify-center md:flex mt-8 ml-1 ">About Us</button>
</div>


<div>
  <div className='md:flex gap-4 mb-11'>
  <GiCutDiamond className=' text-white ml-1 mt-1 md:w-12 md:h-12 border-2 rounded-md border-white hover:animate-ping hover:bg-blue-700 bg-[#1F51C6]'/>
  <div>
 <h1 className='font-semibold opacity-80 sm:text-xl'>Newest Technologies</h1>
<p>Consetetur sadipscing elitr diam nonumy<br/> eirmod tempor invidunt.</p>
 </div>
  </div>

  <div>
    <div className='md:flex gap-4 '>
    <WiCloud className=' text-white ml-1 mt-1 md:w-12 md:h-12 border-2 rounded-md border-white hover:animate-ping hover:bg-blue-700 bg-[#1F51C6]'/>

    <div className=''>
 <h1 className='font-semibold opacity-80 text-xl '>Taking Care of Nature</h1>
<p>Ut labore et dolore magna aliquyam erat<br/> sed diam voluptua.</p>
</div>
    </div>
  </div>

</div>


<div>
<div className='md:flex gap-4 mb-11 '>
<IoPricetagOutline className=' text-white mt-1 md:w-12 md:h-12 border-2 rounded-md border-white hover:animate-ping hover:bg-[#1F51C6] bg-[#1F51C6]'/>

<div>
 <h1 className='font-semibold opacity-80  text-xl'>Fair Prices</h1>
<p>At vero eos et accusam ejusto duo <br/>dolores et ea rebum clita gubergren.</p>
</div>
</div>

<div className='md:flex gap-4'>
<FaRegHandshake className=' text-white ml-1 mt-1 md:w-12 md:h-12 border-2 rounded-md border-white hover:animate-ping hover:bg-blue-700 bg-[#1F51C6]'/>

<div>
 <h1 className='sm:font-semibold opacity-80 sm:text-xl'>High Customer Satisfaction</h1>
<p>Nosea takimata sanctus est lorem ipsum<br/> dolor sit amet.</p>
</div>

</div>
</div>
  </div>


        </>
    )
}

export default AboutUsHome
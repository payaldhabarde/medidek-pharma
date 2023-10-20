import React from 'react'
import { BsPerson,BsLightbulb } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";

import Products from './Products';
import AboutUs from './AboutUs';
import DevelopmentPipline from './DevelopmentPipline';
const OurTeam = () => {
  return (
    <>
      <div className='ml-24 mt-32'>
        <div className='text-center'>
    <h1 className='text-4xl font-medium'> Welcome to Our Site!</h1> 
<p className='text-md text-gray-400 mt-4 mb-4'>We are a biopharmaceuticals company focused on the discovery, development and commercialization of<br/> innovative therapies intended to improve outcomes in patients sufferings.</p>
</div>

<div className=' flex flex-row items-center p-4'>


<div className='border border-solid border-gray-300 ml-5 w-80 h-96 rounded text-center hover:rounded-md '>

    <BsPerson className='w-16 h-16 text-[#1F51C6] hover:animate-ping font-center ml-32 mt-8  '/><br/>
    <h1 className='font-medium text-3xl'>Pharma Team</h1><br/>
<p className='text-md text-gray-400'>Company was founded by scientists<br/> dedicated to create new therapeutics.</p><br/><br/><br/>
<button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-3 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Our Team</button>
</div>

<div className='border border-solid border-gray-300 ml-5 border border-solid border-gray-300 ml-5 w-80 h-96 rounded text-center '>
<BsLightbulb className='w-16 h-16 text-[#1F51C6] hover:animate-ping ml-32 mt-8'/><br/>
    <h1 className='font-medium text-3xl'>Pharma Team</h1><br/>
<p className='text-md text-gray-400'>Company was founded by scientists<br/> dedicated to create new therapeutics.</p><br/><br/><br/>
<button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-3 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Our Team</button>
</div>

<div className='border border-solid border-gray-300 ml-5 border border-solid border-gray-300 ml-5 w-80 h-96 rounded text-center hover:border-blue-700 transition -all'>

<FaRegPaperPlane className='w-16 h-16 text-[#1F51C6] hover:animate-ping hover:text-green-300 ml-32 mt-8'/><br/>
    <h1 className='font-medium text-3xl'>Pharma Team</h1><br/>
<p className='text-md text-gray-400'>Company was founded by scientists<br/> dedicated to create new therapeutics.</p><br/><br/><br/>
<button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-3 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Our Team</button>
</div>
</div>
</div>
   
   <div className='mt-32'></div>
   <Products/>

   <div className='mb-32'></div>
   <AboutUs/>
   <div className='mb-32'></div>
   <DevelopmentPipline/>
   <div className='mb-32'></div>
    </>

  )
}

export default OurTeam
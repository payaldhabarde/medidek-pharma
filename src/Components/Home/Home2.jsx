import React, { useState } from 'react'
import { Carousel } from "@material-tailwind/react";

import { RxCornerTopLeft,RxCornerTopRight,RxCornerBottomRight,RxCornerBottomLeft } from "react-icons/rx";

const Home2 = ({open ,setOpen}) => {

  const [count, setCount] = useState(0)
  const setFunction =()=>{

    if(count <= 0)
    setCount(count + 1)
  if(count < 0 || count >=3 )
  setCount(0)

  }
  return (
    <>
{
  !open && <div onClick={() => setOpen(!open)}></div>
}
    <div >
    
     <Carousel className=" wrapper rounded-xl  ">
     
        <div className='image-scroll hover:border border-blue-700 relative z-0'>

        <div className='bg-transparent text-center animated-bounce absolute z-40' >
        <div className='flex text-blue-800  justify-between t-20'>
        <div className='flex items-center '> <RxCornerTopLeft className='w-12 h-12 '/></div>
          
          <div className='flex items-center '> <RxCornerTopRight className='w-12 h-12 mr-64 mt-12'/></div>
          </div>


            <div className='relative z-0' >
              <p className='text-2xl mb-4 text-blue-800'>Our researchers are focused on</p>
              <h1 className='text-blue-800 mb-6 font-bold text-6xl'>Developing Innovative<br/>
New Therapies...</h1>
<span className='text-blue-800 block mb-6'>Our mission is to build a healthier tomorrow for patients<br/>
with progressive non-viral liver diseases</span>
<button class="bg-white mt-8 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border-2 border-blue-500 rounded shadow">
  Discover Now
</button>

           
        </div>

        <div className='flex text-blue-800  justify-between '>
        <div className='' > <RxCornerBottomLeft className='w-12 h-12 ml-64 mb-12'/></div>
          
          <div className=' '> <RxCornerBottomRight className='w-12 h-12 mr-64 mb-12'/></div>
          </div>
      </div>
       <img
         src="https://www.elationhealth.com/wp-content/uploads/2022/06/iStock-1273890900-1024x599.jpeg"
         alt="image 1"
         className=" h-[500px] w-full object-cover bg-opacity-10"
         
       />
      
      
       </div>
      <div>

      <div className='bg-transparent text-center animated-bounce absolute z-40' >
        <div className='flex text-blue-800  justify-between t-20'>
        <div > <RxCornerTopLeft className='w-12 h-12 ml-64 mt-12'/></div>
          
          <div> <RxCornerTopRight className='w-12 h-12 mr-64 mt-12'/></div>
          </div>
            <div >
              <p className='text-2xl mb-4 text-white'>Our researchers are focused on</p>
              <h1 className='text-blue-800 mb-6 font-bold text-6xl'>Developing Innovative<br/>
New Therapies...</h1>
<span className='text-white block mb-6'>Our mission is to build a healthier tomorrow for patients<br/>
with progressive non-viral liver diseases</span>
<button class="bg-white mt-8 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border-2 border-blue-500 rounded shadow">
  Discover Now
</button>

           
        </div>

        <div className='flex text-blue-800  justify-between '>
        <div > <RxCornerBottomLeft className='w-12 h-12 ml-64 mb-12'/></div>
          
          <div> <RxCornerBottomRight className='w-12 h-12 mr-64 mb-12'/></div>
          </div>
      </div>
       <img
         src="https://www.dialexa.com/wp-content/uploads/2023/06/frontdoor_tile_color-768x512.png"
         alt="image 2"
         className=" h-[500px] w-full object-cover opacity-60"
       /></div>


       <div className='relative z-0'>
        
       <div className='bg-transparent text-center animated-bounce absolute z-40' >
        <div className='flex text-blue-800  justify-between t-20'>
        <div > <RxCornerTopLeft className='w-12 h-12 mr-64 mt-12 items-center'/></div>
          
          <div> <RxCornerTopRight className='w-12 h-12 mr-64 mt-12'/></div>
          </div>
            <div >
              <p className='text-2xl mb-4 text-white '>Our researchers are focused on</p>
              <h1 className='text-blue-800 mb-6 font-bold text-6xl'>Developing Innovative<br/>
New Therapies...</h1>
<span className='text-gray-300 block mb-6'>Our mission is to build a healthier tomorrow for patients<br/>
with progressive non-viral liver diseases</span>
<button class="bg-white mt-8 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border-2 border-blue-500 rounded shadow">
  Discover Now
</button>

           
        </div>

        <div className='flex text-blue-800  justify-between '>
        <div > <RxCornerBottomLeft className='w-12 h-12 ml-64 mb-12'/></div>
          
          <div> <RxCornerBottomRight className='w-12 h-12 mr-64 mb-12'/></div>
          </div>
      </div>
       <img
         src="https://precisionlabtesting.com/wp-content/uploads/2021/03/blood-test.jpg"
         alt="image 3"
         className=" h-[500px] w-full object-cover opacity-50"
       /></div>

       </Carousel>


      
      </div>
     </>
   );
 }
    

export default Home2

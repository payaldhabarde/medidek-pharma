import React from 'react'
import { RxCornerTopLeft,RxCornerTopRight,RxCornerBottomRight,RxCornerBottomLeft } from "react-icons/rx";


const Front = () => {
  return (
    <>
      <div className='bg-blue-700 text-center animated-bounce block' >
        <div className='flex text-white  justify-between '>
        <div > <RxCornerTopLeft className='w-12 h-12 ml-64 mt-12'/></div>
          
          <div> <RxCornerTopRight className='w-12 h-12 mr-64 mt-12'/></div>
          </div>
            <div >
              <p className='text-2xl mb-4 text-white'>Our researchers are focused on</p>
              <h1 className='text-cyan-400 mb-6 font-bold text-6xl'>Developing Innovative<br/>
New Therapies...</h1>
<span className='text-white block mb-6'>Our mission is to build a healthier tomorrow for patients<br/>
with progressive non-viral liver diseases</span>
<button class="bg-white mt-8 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border-2 border-blue-500 rounded shadow">
  Discover Now
</button>   
    </div>

    <div >
              <p className='text-2xl mb-4 text-white'>Our researchers are focused on</p>
              <h1 className='text-cyan-400 mb-6 font-bold text-6xl'>Developing Innovative<br/>
New Therapies...</h1>
<span className='text-white block mb-6'>Our mission is to build a healthier tomorrow for patients<br/>
with progressive non-viral liver diseases</span>
<button class="bg-white mt-8 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border-2 border-blue-500 rounded shadow">
  Discover Now
</button>   
    </div>

    <div >
              <p className='text-2xl mb-4 text-white'>Our researchers are focused on</p>
              <h1 className='text-cyan-400 mb-6 font-bold text-6xl'>Developing Innovative<br/>
New Therapies...</h1>
<span className='text-white block mb-6'>Our mission is to build a healthier tomorrow for patients<br/>
with progressive non-viral liver diseases</span>
<button class="bg-white mt-8 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border-2 border-blue-500 rounded shadow">
  Discover Now
</button>   
    </div>
        <div className='flex text-white  justify-between '>
        <div > <RxCornerBottomLeft className='w-12 h-12 ml-64 mb-12'/></div>
          
          <div> <RxCornerBottomRight className='w-12 h-12 mr-64 mb-12'/></div>
          </div>
      </div>

    </>
  )
}

export default Front

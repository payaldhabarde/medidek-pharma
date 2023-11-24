import React from 'react'
import { useNavigate } from 'react-router-dom'

const Image2 = () => {
    const navigate = useNavigate()
  return (
    <>
        <div style={{ backgroundImage:`url(${"https://s43365.pcdn.co/wp-content/uploads/2021/05/Ivermectin-iStock-1313740892-th-800x420.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center",  
  }} className=' duration-700 ease-in-out h-[580px] w-5/6 opacity-85 mt-32 flex justify-center ml-24'>

<div className='text-white mt-12 font-semibold mt-0'>
<p  className='mt-24 text-xl font-medium text-center hidden'> We are dedicated to the</p>
<h1 className='text-5xl'>Discovery, Development &</h1>
<h1 className='text-5xl text-center'>Commercialization </h1>
    
  </div></div>

</>
  )
  }

  export default Image2

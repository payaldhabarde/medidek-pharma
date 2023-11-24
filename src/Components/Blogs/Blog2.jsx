import React from 'react'
import { CgShapeCircle } from "react-icons/cg";
import Blog3 from './Blog3';


const Blog2 = () => {
  return (
    <>
   
    <div style={{ backgroundImage:`url(${"https://en-media.thebetterindia.com/uploads/2019/06/Representative-image-only-2019-06-11T165300.276.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center",  
  }} className=' h-[540px] w-6/6 opacity-75 mt-24 flex justify-center ml-8 '>

<div className='text-white font-semibold mt-20'>
<p  className='mt-24 text-xl font-medium text-center '> Our researchers are focused on</p>
<h1 className='text-6xl mt-3'>Developing Innovative</h1>
<h1 className='text-6xl text-center'>New Therapies... </h1>
    
  <div className='flex gap-1 justify-center font-bold mt-32'>
   <button><CgShapeCircle /></button>
   <button><CgShapeCircle /></button>
   <button><CgShapeCircle /></button>

   </div></div></div>

   <div style={{ backgroundImage:`url(${"https://s43365.pcdn.co/wp-content/uploads/2021/05/Ivermectin-iStock-1313740892-th-800x420.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center",  
  }} className='hidden duration-700 ease-in-out h-[580px] w-5/6 opacity-85 mt-32 flex justify-center ml-24'>

<div className='text-white mt-12 font-semibold mt-0'>
<p  className='mt-24 text-xl font-medium text-center hidden'> We are dedicated to the</p>
<h1 className='text-5xl'>Discovery, Development &</h1>
<h1 className='text-5xl text-center'>Commercialization </h1>
    
  </div></div>

   <div style={{ backgroundImage:`url(${"https://medicalpharmanews.com/wp-content/uploads/2018/11/antipir%C3%A9tcos.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center",  
  }} className='hidden duration-700 ease-in-out h-[580px] w-5/6 opacity-75 mt-32 flex justify-center ml-9'>

<div className='text-white font-semibold mt-24'>
<p  className='mt-24 text-xl font-medium text-center '> We will Help You</p>
<h1 className='text-5xl'>To Live Healthy Life</h1>
    
  </div></div>

  <Blog3/>
    </>
  )
}

export default Blog2

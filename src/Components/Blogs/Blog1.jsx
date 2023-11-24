import React from 'react'

import { CgFormatSlash } from "react-icons/cg";
import { Link } from 'react-router-dom';
import Blog2 from './Blog2';
import BlogSocial from './BlogSocial';
const Blog1 = () => {
  return (
    <>
   
       <div style={{ backgroundImage:`url(${"https://bayareaheart.com/wp-content/uploads/2020/05/Untitled-1-768x312.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center", opacity:0.9, 
  }} className='p-20 text-center relative mt-12 w-full' >
     
        <h1 className='text-4xl font-semibold text-white mb-5'>Blogs</h1>
        <div className='flex space-x-3 text-blue-300 justify-center'>
          <span >Home</span>
          <CgFormatSlash className='h-6 text-white' />

          <span>Blog</span>
          <CgFormatSlash className='h-6 text-white' />
          <span className='text-orange-700 opacity-95'>All</span>
        </div>
      </div>

     <Blog2/>



  
    </>
  )
}

export default Blog1

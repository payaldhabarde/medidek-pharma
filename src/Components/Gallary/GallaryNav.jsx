import React from 'react'
import { CgFormatSlash } from "react-icons/cg";
import { Link } from 'react-router-dom';
const GallaryNav = () => {
  return (
    <>
       <div style={{ backgroundImage:`url(${"https://bayareaheart.com/wp-content/uploads/2020/05/Untitled-1-768x312.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center", opacity:0.9, 
  }} className='p-20 text-center relative mt-12' >
     
        <h1 className='text-4xl font-semibold text-white mb-5'>Gallary</h1>
        <div className='flex space-x-3 text-blue-300 justify-center'>
          <span >Home</span>
          <CgFormatSlash className='h-6 text-white' />

          <span>Gallary</span>
          <CgFormatSlash className='h-6 text-white' />
          <span className='text-orange-700 opacity-95'>All</span>
        </div>
      </div>

      <div className='flex space-x-8 mt-24 mb-32 text-sm font-semibold text-gray-400 justify-center'>
    <span className='text-orange-500'>All</span>
    <Link to='/medical'> <span>Medical</span></Link>
    <Link to='/pharmacists'> <span>Clinic</span></Link>
   <Link to='/dental'> <span>Dental</span> </Link>
   <Link to='/pharmacists'><span>Pharmacists</span></Link></div>
    </>
  )
}

export default GallaryNav

import React from 'react'
import GallaryPagination from './GallaryPagination'
import GallaryNav from './GallaryNav'
const Dental = () => {
  return (
   <>
<GallaryNav/>
<div className='ml-64 mb-48'> 
      <div className='slide '>
    <img src='http://en.sospharmasolution.com/attachments/Image/comprimes.jpg?template=generic' class="rounded-[12px] "/>    
    </div>

    <div className='slide '>
    <img src='https://pluspng.com/img-png/dentist-png-hd-dentist-treating-a-patient-960.png' class="rounded-[12px] "/>    
    </div>

    <div className='slide '>
    <img src='https://www.pinclipart.com/picdir/big/249-2494453_pharmaceutical-image-clipart.png' class="rounded-[12px] mt-4 "/>    
    </div>
    </div>
    <GallaryPagination/>
    </>
  )
}

export default Dental
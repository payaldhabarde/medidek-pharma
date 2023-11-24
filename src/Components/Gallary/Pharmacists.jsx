import React from 'react'

import GallaryPagination from './GallaryPagination'
import GallaryNav from './GallaryNav'
const Pharmacists = () => {
  return (
    <>

     <GallaryNav/>
<div className='ml-64 mb-48'> 
      <div className='slide '>
    <img src='https://www.tecnatox.cat/images/toxicology.png' class="rounded-[12px] "/>    
    </div>

    <div className='slide '>
    <img src='https://pluspng.com/img-png/dentist-png-hd-dentist-treating-a-patient-960.png' class="rounded-[12px] "/>    
    </div>

    <div className='slide '>
    <img src='https://thumbs.dreamstime.com/b/hands-holding-smartphone-video-call-screen-conversation-doctor-242943189.jpg' class="rounded-[12px] mt-4 "/>    
    </div>
    </div>
    <GallaryPagination/> 
    </>
  )
}

export default Pharmacists


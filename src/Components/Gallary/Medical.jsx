import React from 'react'
import GallaryPagination from './GallaryPagination'
import GallaryNav from './GallaryNav'
const Medical = () => {
  return (
    <>
      <GallaryNav/>
<div className='ml-64 mb-48'> 
      <div className='slide '>
    <img src='https://diagnoplus.co.in/images/Diagno5.png' class="rounded-[12px] "/>    
    </div>

    <div className='slide '>
    <img src='https://www.news.lk/media/k2/items/cache/4eb935fa2448cab6dc3a8c7fe74715dd_XL.jpg' class="rounded-[12px] "/>    
    </div>

    <div className='slide '>
    <img src='https://media.istockphoto.com/vectors/a-mans-hand-is-holding-a-smartphone-with-an-online-doctor-app-on-the-vector-id1179146237?k=20&m=1179146237&s=612x612&w=0&h=GH1GQ0J5ZnvXorTb4-9KlnSK4T8XHsRCOh-TumsSzHE=' class="rounded-[12px] mt-7 "/>    
    </div>
    </div>
    <GallaryPagination/>
    </>
  )
}

export default Medical

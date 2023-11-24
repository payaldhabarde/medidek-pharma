import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
const NavbarHome = () => {
  const changeNav = useNavigate()
  return (
    <>
      <div>
<div className='mt-6 ml-11 '>

    <div className='flex gap-6  '>
        
        <span onClick={()=>changeNav("/soon")} className='flex mt-2'>All Medicines <MdKeyboardArrowDown className='mt-1 ml-1'/></span>
        <span onClick={()=>changeNav("/soon")} className='flex mt-2'>Our Products <MdKeyboardArrowDown className='mt-1 ml-1'/></span>
        <span onClick={()=>changeNav("/soon")} className='mt-2'>Personal Care</span>
        <span onClick={()=>changeNav("/soon")} className='mt-2'>Family Care</span>
      </div>
  
</div>

      </div>

    </>
  )
}

export default NavbarHome

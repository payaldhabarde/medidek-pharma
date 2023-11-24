import React from 'react'
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import UserProfileSelect from './UserProfileSelect';
import Sidebar from './Sidebar';
import './sidebar.css'
const DashboardHome = () => {
  return (
    <>
    <div className='w-[1150px] ml-24 h-[600px] border-2 border-blue-800'>
<div className='flex justify-between'>
  <div >
    <Sidebar/>
    </div>

<div className='flex justify-between mt-4 ml-2 mr-2'>
              <div className='flex '>
             <FaHandHoldingMedical className='w-8 h-8 text-blue-800'/>
             <img src='imgs/m-logo.png' className='w-48 h-12 '/>
              </div>
              <div className='flex gap-3'>
                <FaBell className='text-blue-800 font-bold w-8 h-6'/>
                <BsQuestionCircleFill className='text-blue-800 font-bold w-8 h-6'/>
                <MdOutlineMailOutline className='text-blue-800 font-bold w-8 h-6'/>
                <div className='flex'>
                <img class="w-10 h-10 rounded-full" src="https://th.bing.com/th/id/OIP.ZP-E8ZFH11wb1XSm0dn-5wHaJQ?rs=1&pid=ImgDetMain" alt="Rounded avatar"/>
                <span className='flex'>Parinita shah<span></span> <IoIosArrowDown className='mt-1 ml-1'/></span>
       
                </div>
              </div>
            </div>
      
        
      </div>
      </div>
    </>
  )
}

export default DashboardHome

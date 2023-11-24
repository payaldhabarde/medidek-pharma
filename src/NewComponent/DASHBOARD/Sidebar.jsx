import React from 'react'
import { BsCart3, BsFillArchiveFill, BsFillGearFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsList, BsListCheck, BsMenuButtonWideFill, BsPeopleFill } from 'react-icons/bs'
import { FaDashcube } from 'react-icons/fa6'
import DashHome from './DashHome'

const Sidebar = () => {
  return (
    <>
    <div className='flex'>
     <div id='sidebar'>
        <div className='sidebar-title '>
         <div className='sidebar-brand flex gap-2'>
            <BsCart3 className='icon-header'/>Profile
         </div>
         <span className='icon close-icon'>X</span>
        </div>

        <ul>
            <li className='sidebar-list-item'>
               <a className='flex gap-2'>
                <BsGrid1X2Fill className='icon'/>Dashboard
               </a>
            </li>

            <li className='sidebar-list-item'>
               <a className='flex gap-2'>
                <BsPeopleFill className='icon'/>Users
               </a>
            </li>

            <li className='sidebar-list-item'>
               <a className='flex gap-2'>
                <BsFillArchiveFill className='icon'/>Products
               </a>
            </li>

            <li className='sidebar-list-item'>
               <a className='fle gap-2'>
                <BsFillGrid3X3GapFill className='icon'/>Categories
               </a>
            </li>
            <li className='sidebar-list-item'>
               <a className='flex gap-2'>
                <BsMenuButtonWideFill  className='icon'/>Reports
               </a>
            </li>

            <li className='sidebar-list-item '>
               <a className='flex gap-2'>
                <FaDashcube className='icon'/>Support
               </a>
            </li>

            <li className='sidebar-list-item'>
               <a className='flex gap-2'>
                <FaDashcube className='icon'/>Subscribers
               </a>
            </li>

            <li className='sidebar-list-item'>
               <a className='flex gap-2'>
                <FaDashcube className='icon'/>Referal
               </a>
            </li>

            <li className='sidebar-list-item'>
               <a className='flex gap-2'>
                <BsListCheck className='icon'/>Enquiry
               </a>
            </li>

            <li className='sidebar-list-item'>
               <a className='flex gap-2'>
                <BsFillGearFill className='icon'/>Setting
               </a>
            </li>
        </ul>
        </div> 

        <DashHome/>
        </div>
    </>
  )
}

export default Sidebar

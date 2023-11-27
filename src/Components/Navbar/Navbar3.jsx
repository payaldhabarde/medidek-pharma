import React, { useState } from 'react'
import { BiSearch,BiSolidUser } from "react-icons/bi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Register from '../Registration/Register'
import { Link } from 'react-router-dom';

const Navbar3 = () => {

    const [search,setSearch] = useState(false)
  return (
    <>
<div className="  flex  justify-between mt-1 p-2 bg-[#1F51C6] text-white font-semibold font-1.1em text-center relative">
    <div className="sticky flex space-x-4 ml-5 p-1">
        <span className='text-black'>Home</span>   
       <a href='/all' target="_blank"> <span onClick='scroll-mt-px'>Products</span></a>
       <a href='/gallary1' target="_blank"> <span onClick='scroll-mt-px' target="_blank">Gallery</span></a>
       <a href='/blognw' target="_blank"> <span onClick='scroll-mt-px'>Blogs</span></a>
        <a href='/contactus' target="_blank"> <span onClick='scroll-mt-px'>Contacts</span></a>
         </div>

         
        </div>
    </>
    
  )
}

export default Navbar3

import React, { useState } from 'react'
import { BiSearch,BiSolidUser } from "react-icons/bi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
const Navbar3 = () => {

    const [search,setSearch] = useState(false)
  return (
    <>
<div className="flex justify-between mt-9 p-5 bg-[#1F51C6] text-white font-semibold font-1.1em text-center relative">
    <div className="flex space-x-4 ml-5 p-3">
        <span className='text-black'>Home</span>   
        <span>Products</span>
        <span>Gallery</span>
        <span>Blogs</span>
        <span>Contacts</span>
         </div>

         <div className='flex space-x-8 mr-8 p-3'>

<div>
<BiSearch onClick={()=>setSearch(!search )}/>
 <div className=" flex absolute h-screen w-full"  style={{display: search ? 'flex' : 'none', flexDirection: 'row', alignItems: 'start'}}>
  <MdClose/>
  <hr className="my-12 h-0.5  " />
    <input
      type="search"
      placeholder="Search" />
    <FaSearch/>
  </div>
   </div>
            <BiSolidUser/>
            <RiShoppingBasketLine/>
         </div>
        </div>
    </>
  )
}

export default Navbar3

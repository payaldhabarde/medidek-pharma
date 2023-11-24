import React, { useState } from 'react'
import { BiSearch,BiSolidUser } from "react-icons/bi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Register from '../Registration/Register'
import { Link } from 'react-router-dom';

const Navbar3 = ({register, setRegister}) => {

    const [search,setSearch] = useState(false)
  return (
    <>
<div className="  flex  justify-between mt-9 p-5 bg-[#1F51C6] text-white font-semibold font-1.1em text-center relative">
    <div className="sticky flex space-x-4 ml-5 p-3">
        <span className='text-black'>Home</span>   
       <Link to='/productsdata'> <span>Products</span></Link>
       <Link to='/gallary1'> <span>Gallery</span></Link>
       <Link to='/blognw'> <span>Blogs</span></Link>
        <Link to='/contactus'> <span>Contacts</span></Link>
         </div>

         
        </div>
        { register && <Register/>}
    </>
    
  )
}

export default Navbar3

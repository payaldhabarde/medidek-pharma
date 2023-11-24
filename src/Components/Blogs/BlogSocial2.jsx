import React from 'react'
import { BiSolidPencil } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
const BlogSocial2 = () => {
  return (
    <>
      <div className='mt-12'>
        <h1 className='text-2xl font-bold opacity-70'>Newsletter</h1>

        <section className=" flex flex-col right-0 ">
    <form action="POST" className="mx-auto mt-8 rounded w-[320px] h-14 border-2 border-gray-300">
      <label htmlFor="email" className='flex'>
         
        <input className="form-input w-full ml-4 outline-0 " type="email" name="email" id="email" placeholder="email@kemuscorp.com" />
        <BiSolidPencil className="w-6 h-6 mt-3 mr-5 text-light-blue-200 font-bold" />
      </label>
    </form>
  </section>

  <h1 className='mt-4'>Enter Email here to be updated. We promise<br/> not to send you spam!</h1>
    
  <h1 className='text-2xl font-bold opacity-70 mt-9'>Recent Posts</h1>

  <div>

    <div className='flex gap-5 mt-5'>
        <img src='https://blog.telewellnessmd.com/hubfs/BLOG_IMAGES_ORIG/20978884_xxl.jpg' className='w-20 h-20'/>
    <div className=' '>
        <h1 className='text-sm'>Photography Series Beef ribeye <br/>pork chop</h1>
        <div className='flex justify-between  gap-8 ml-3 mt-1 text-gray-400 opacity-85 '>
            <div className='flex mt-3 text-sm'><IoPersonSharp/> &nbsp;&nbsp;By Smith john </div><div className='flex mt-3 mr-2 text-sm'> <BiSolidMessageRounded/>&nbsp;&nbsp;87</div></div>
    </div>
    </div>
  </div>

  <div className='flex gap-5 mt-5'>
        <img src='https://th.bing.com/th/id/OIP.aasMjThh6jHI9dkflPOi5gHaFc?pid=ImgDet&w=178&h=130&c=7&dpr=2' className='w-20 h-20'/>
    <div className=' '>
        <h1 className='text-sm'>Photography Series Beef ribeye <br/>pork chop</h1>
        <div className='flex justify-between  gap-8 ml-3 mt-1 text-gray-400 opacity-85 '>
            <div className='flex mt-3 text-sm'><IoPersonSharp/> &nbsp;&nbsp;By Smith john </div><div className='flex mt-3 mr-2 text-sm'> <BiSolidMessageRounded/>&nbsp;&nbsp;87</div></div>
    </div>
    </div>
  

    <div className='flex gap-5 mt-5'>
        <img src='https://th.bing.com/th/id/OIP.d8RLV0JHxyZ8Nd_GPblhRwHaE6?rs=1&pid=ImgDetMain' className='w-20 h-20'/>
    <div className=' '>
        <h1 className='text-sm'>Photography Series Beef ribeye <br/>pork chop</h1>
        <div className='flex justify-between  gap-8 ml-3 mt-1 text-gray-400 opacity-85 '>
            <div className='flex mt-3 text-sm'><IoPersonSharp/> &nbsp;&nbsp;By Smith john </div><div className='flex mt-3 mr-2 text-sm'> <BiSolidMessageRounded/>&nbsp;&nbsp;87</div></div>
    </div>
    </div>
  
     </div>

     <div className='mt-12'>
        <h1 className='text-2xl font-bold opacity-70'>Search On Website</h1>

        <section className=" flex flex-col right-0 ">
    <form action="POST" className="mx-auto mt-8 rounded w-[320px] h-14 border-2 border-gray-300">
      <label htmlFor="search" className='flex'>
         
        <input className="form-input w-full ml-4 outline-0 " type="search" name="search" id="search" placeholder="Search Here" />
        <FaSearch className="w-6 h-6 mt-3 mr-5 text-light-blue-200 font-bold" />
      </label>
    </form>
  </section>
  </div>
    </>
  )
}

export default BlogSocial2

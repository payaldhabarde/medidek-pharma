import React from 'react'
import { FaFacebookF,FaTwitter,FaGoogle,FaInstagram,FaYoutube,FaSoundcloud,FaComments ,FaDribbble       } from "react-icons/fa";
import BlogSocial2 from './BlogSocial2';
import { HiPencilAlt } from "react-icons/hi";
const BlogSocial = () => {
  return (
    <>
    
    <div className=''>
        
     <h1 className=' text-2xl font-bold'>Get in Touch</h1>
    <div className='w-[320px]  mt-5 h-16 bg-[#4267B2] text-white  flex text-sm justify-between items-center top-4'>
      
     <div className='flex gap-2   '>
    <FaFacebookF className='ml-4 text-white '/>
    <h3 className=' '>FACEBOOK</h3></div>
    <h3 className='mr-4'>9.8K FANS</h3>
    </div>
    
    <div className='w-[320px]  mt-2 h-16 bg-[#1DA1F2] text-white flex text-sm justify-between items-center top-4'>
      
     <div className='flex gap-2 '>
    <FaTwitter  className='ml-4 text-white '/>
    <h3 className=''>TWITTER</h3></div>
    <h3 className='mr-4'>9.8K FOLLOWERS</h3>
    </div>

    <div className='w-[320px]  mt-2 h-16 bg-[#DB4437] text-white flex text-sm justify-between items-center top-4'>
      
     <div className='flex gap-2 '>
    <FaGoogle   className='ml-4 text-white '/>
    <h3 className=''>GOOGLE</h3></div>
    <h3 className='mr-4'>9.8K FOLLOWERS</h3>
    </div>
    <div className='w-[320px]  mt-2 h-16 bg-[#3d6c87] text-white flex text-sm justify-between items-center top-4'>
      
     <div className='flex gap-2 '>
    <FaInstagram className='ml-4 text-white '/>
    <h3 className=''>INSTAGRAM</h3></div>
    <h3 className='mr-4'>9.8K FANS</h3>
    </div>
    <div className='w-[320px]  mt-2 h-16 bg-[#FF0000] text-white flex text-sm justify-between items-center top-4'>
      
     <div className='flex gap-2 '>
    <FaYoutube   className='ml-4 text-white '/>
    <h3 className=''>YOUTUBE </h3></div>
    <h3 className='mr-4'>9.8K FANS</h3>
    </div>
    <div className='w-[320px]  mt-2 h-16 bg-[#F26F23]  flex text-sm justify-between items-center top-4'>
      
     <div className='flex gap-2 '>
    <FaSoundcloud className='ml-4 text-white '/>
    <h3 className=''>SOUNDCLOUD </h3></div>
    <h3 className='mr-4'>9.8K FOLLOWERS</h3>
    </div>
    <div className='w-[320px]  mt-2 h-16 bg-[#ea4c89] text-white flex text-sm justify-between items-center top-4'>
      
     <div className='flex gap-2 '>
    <FaDribbble  className='ml-4 text-white '/>
    <h3 className=''>DRIBBBLE</h3></div>
    <h3 className='mr-4'>9.8K FOLLOWERS</h3>
    </div>
    <div className='w-[320px]  mt-2 h-16 bg-[#7b7b7b] text-white flex text-sm justify-between items-center top-4'>
      
     <div className='flex gap-2 '>
    <HiPencilAlt className='ml-4 text-white '/>
    <h3 className=''>PENCILALT</h3></div>
    <h3 className='mr-4'>1 POST</h3>
    </div>
    <div className='w-[320px]  mt-2 h-16 bg-[#363636] text-white flex text-sm justify-between items-center top-4'>
      
     <div className='flex gap-2 '>
    <FaComments  className='ml-4 text-white '/>
    <h3 className=''>COMMENT </h3></div>
    <h3 className='mr-4'>0 COMMENTS</h3>
    </div>
    
    </div>
    <BlogSocial2/>
    </>
  )
}
export default BlogSocial

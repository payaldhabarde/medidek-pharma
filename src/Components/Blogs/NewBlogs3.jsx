import React from 'react'

import { IoPersonSharp } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import BlogPagination from './BlogPagination';
const NewBlogs3 = () => {
  return (
    <>
      <div style={{ backgroundImage:`url(${"http://ww1.prweb.com/prfiles/2014/09/11/12163870/Pharma+Packaging+Solutions+Products.png"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center", opacity:0.9, 
  }} className='p-20 text-center relative mt-12 w-[770px] h-[430px] ml-9 inset-0 bg-opacity-20' >


<div className='flex absolute left-0 top-0'>
    <div className='w-20 h-20 bg-[#1F51C6] text-white rounded-r-lg text-center  hover:bg-gray-600 '>
        <h1 className='mt-3 text-4xl font-semibold'>09</h1>
        <p>10/17</p>
    </div> </div>
  </div>
  <div className='ml-9 border-2 border-gray-300 rounded-b-lg w-[770px] h-96 '>
  <h1 className='mt-6 text-xl font-semibold opacity-75 ml-20'>dsgh shjfdhs dsjdh hfdh hfsdjsh</h1>
        <div className='flex justify-center gap-[430px] text-center ml-3 mt-1 text-gray-400 opacity-85 text-sm'>
            <div className='flex gap-4'><IoPersonSharp className='mr-3'/> By Smith john </div><div className='flex gap-4 justify-right'> <BiSolidMessageRounded className=' '/>87</div></div>
         

            <div className='ml-20 mt-4 space-y-2'>
                <h1>Abbott: Strange as it may seem, they give ball players nowadays very peculiar names.</h1>

<p className='bg-gray-200 w-[670px] h-8'>Costello: Funny names?</p>

<h1>Abbott: Nicknames, nicknames. Now, on the St. Louis team we have Who's on first, What's on second, I Don't Know is on third–</h1>

<h1 className='bg-gray-200 w-[670px] '>Costello: That's what I want to find out. I want you to tell me the names of the fellows on the St. Louis team.</h1>

<h1 >Abbott: I'm telling you. Who's on first, What's on second, I Don't Know is on third–</h1>

<p className='bg-gray-200 w-[670px] h-8'>Costello: You know the fellows' names?</p>

<p>Abbott: Yes.</p>
            </div>   </div>
    
    <BlogPagination/>
    </>
  )
}

export default NewBlogs3

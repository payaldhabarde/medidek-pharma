import React from 'react'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";

const Blogs = () => {
  return (
    <>
    <div className='mt-24'>
     <h1 className='text-center font-semibold text-4xl mb-5 mt-5 opacity-75'>Our Recent Blogs</h1> 
<div className='flex justify-center'>

<div className='flex'><GrFormPrevious/><button className='text-red-400 text-sm font-semibold opacity-70'>  Prev &nbsp;&nbsp;&nbsp;</button></div>
<div className='flex'> <button className='text-blue-700 text-sm font-semibold opacity-70'>Next</button><GrFormNext/></div>
</div>
</div>


<div className='flex mt-12 ml-12'>

    <div>
<div className='flex'>
    <div className='w-20 h-24 bg-[#1F51C6] text-white rounded-l-lg text-center ml-4 hover:bg-gray-600 '>
        <h1 className='mt-3 text-4xl font-semibold'>09</h1>
        <p>10/17</p>
    </div>
    <div className='w-[480px] h-24 mr-2 bg-gray-200 rounded-r-lg hover:bg-blue-700 hover:text-white'>
        <h1 className='mt-3 ml-3 text-xl font-semibold opacity-75'>dsgh shjfdhs dsjdh hfdh hfsdjsh</h1>
        <div className='flex justify-between ml-3 mt-1 text-gray-400 opacity-85 text-sm'>
            <div className='flex'><IoPersonSharp/> &nbsp;&nbsp;By Smith john </div><div className='flex mr-2'> <BiSolidMessageRounded/>&nbsp;&nbsp;87</div></div>
    </div>
</div>
<div>
</div>
<div>
</div>

<div className='mt-9'>
<div className='flex'>
    <div className='w-20 h-24 bg-[#1F51C6] text-white rounded-l-lg text-center ml-4 hover:bg-gray-600 '>
        <h1 className='mt-3 text-4xl font-semibold'>09</h1>
        <p>10/17</p>
    </div>
    <div className='w-[480px] h-24 mr-2 bg-gray-200 rounded-r-lg hover:bg-blue-700 hover:text-white'>
        <h1 className='mt-3 ml-3 text-xl font-semibold opacity-75'>dsgh shjfdhs dsjdh hfdh hfsdjsh</h1>
        <div className='flex justify-between ml-3 mt-1 text-gray-400 opacity-85 text-sm'>
            <div className='flex'><IoPersonSharp/> &nbsp;&nbsp;By Smith john </div><div className='flex mr-2'> <BiSolidMessageRounded/>&nbsp;&nbsp;87</div></div>
    </div>
</div>
</div>

<div className='mt-9'>
<div className='flex'>
    <div className='w-20 h-24 bg-[#1F51C6] text-white rounded-l-lg text-center ml-4 hover:bg-gray-600 '>
        <h1 className='mt-3 text-4xl font-semibold'>09</h1>
        <p>10/17</p>
    </div>
    <div className='w-[480px] h-24 mr-2 bg-gray-200 rounded-r-lg hover:bg-blue-700 hover:text-white'>
        <h1 className='mt-3 ml-3 text-xl font-semibold opacity-75'>dsgh shjfdhs dsjdh hfdh hfsdjsh</h1>
        <div className='flex justify-between ml-3 mt-1 text-gray-400 opacity-85 text-sm'>
            <div className='flex'><IoPersonSharp/> &nbsp;&nbsp;By Smith john </div><div className='flex mr-2'> <BiSolidMessageRounded/>&nbsp;&nbsp;87</div></div>
    </div>
</div>
</div>
    </div>


    <div className='flex ml-4 relative'>
        <img src='https://img.freepik.com/free-photo/biotechnology-specialist-laboratory-conducting-experiments_23-2150468692.jpg?w=1380&t=st=1697531083~exp=1697531683~hmac=9ba499217d1506b647fb3ac3a891ad250abb8a3b999b2058d2a767afaeca8989' className='w-[560px] h-[480px] opacity-70 rounded-md'/>
    
    <div className='flex absolute'>
    <div className='w-20 h-20 bg-[#1F51C6] text-white rounded-r-lg text-center  hover:bg-gray-600 '>
        <h1 className='mt-3 text-4xl font-semibold'>09</h1>
        <p>10/17</p>
    </div> 

    <div className='w-96 h-20 pt-96 '>
        <h1 className='mt-3 text-xl font-bold text-[#0e162a]'>Meatloaf Kielbasa Meatball T-bone  Pork</h1>
        <div className='flex justify-between mt-1 text-white font-extrabold text-sm'>
            <div className='flex'><IoPersonSharp/> &nbsp;&nbsp;By Smith john </div><div className='flex mr-2'> <BiSolidMessageRounded/>&nbsp;&nbsp;87</div></div>
    </div>
    </div>
    </div>
</div>

<div className='mb-32'></div>
    </>
  )
}
export default Blogs

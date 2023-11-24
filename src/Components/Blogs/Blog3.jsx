import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import NewBlogs from './NewBlogs';
import BlogPagination from './BlogPagination';
import BlogSocial from './BlogSocial';
const Blog3 = () => {
  return (
    <>
    <div className='flex'><div>
     <div> <div className='flex ml-9 relative mt-24 '>
        <img src='https://images.unsplash.com/photo-1639772823849-6efbd173043c?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[770px] h-[530px] opacity-95 rounded'/>
    
    <div className='flex absolute'>
    <div className='w-20 h-20 bg-[#1F51C6] text-white rounded-r-lg text-center  hover:bg-gray-600 '>
        <h1 className='mt-3 text-4xl font-semibold'>09</h1>
        <p>10/17</p>
    </div> </div>
</div>

<div className='top-0 ml-9 w-[770px] h-64 mr-2 bg-gray-50 rounded-b-lg hover:bg-blue-700 hover:text-white'>
        <h1 className='mt-3 ml-3 text-xl font-semibold opacity-75'>dsgh shjfdhs dsjdh hfdh hfsdjsh</h1>
        <div className='flex justify-between ml-3 mt-1 text-gray-400 opacity-85 text-sm'>
            <div className='flex'><IoPersonSharp/> &nbsp;&nbsp;By Smith john </div><div className='flex mr-2'> <BiSolidMessageRounded/>&nbsp;&nbsp;87</div></div>

            <h1 className='mt-6 mb-24'>Short ribs tenderloin corned beef pork. Picanha filet mignon cupim pastrami flank turkey jowl pork pork belly biltong venison sausage leberkas strip steak chicken. Pork chop pig prosciutto beef ribs ribeye brisket doner corned beef cupim frankfurter. Pancetta shoulder jerky, tenderloin cupim tail ribeye bresaola short ribs pig frankfurter doner ground round andouille. Pig sausage picanha, cupim strip steak jowl alcatra turducken.</h1>
    </div>

    </div>

    <div className='flex'>
       <div className='flex ml-9 relative mt-24 '>
        <img src='https://images.unsplash.com/photo-1639772823849-6efbd173043c?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[340px] h-[260px] opacity-95 rounded-l-lg'/>
        <div className='flex absolute'>
    <div className='w-20 h-20 bg-[#1F51C6] text-white rounded-r-lg text-center  hover:bg-gray-600 '>
        <h1 className='mt-3 text-4xl font-semibold'>09</h1>
        <p>10/17</p>
    </div> </div>
    </div>
    <div className='top-0 mt-24 w-[430px] h-[260px] mr-2 bg-gray-50 rounded-r-lg hover:bg-blue-700 hover:text-white text-center'>
        <h1 className='mt-3 ml-5 text-xl font-semibold opacity-75'>dsgh shjfdhs dsjdh hfdh hfsdjsh</h1>
        <div className='flex justify-between ml-3 mt-1 text-gray-400 opacity-85 text-sm'>
            <div className='flex'><IoPersonSharp/> &nbsp;&nbsp;By Smith john </div><div className='flex mr-2'> <BiSolidMessageRounded/>&nbsp;&nbsp;87</div></div>

            <h1 className='mt-6 mb-24'>Short ribs tenderloin corned beef pork. Picanha filet mignon cupim pastrami flank turkey jowl pork pork belly biltong venison sausage leberkas strip steak chicken. </h1>
</div>
    </div>
   
   <NewBlogs/></div>

   <div className='mt-24 ml-7'>
 
    <BlogSocial/></div>

   </div>
    </>
  )
}
export default Blog3


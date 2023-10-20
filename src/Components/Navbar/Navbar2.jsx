import React from 'react'
import { TiPencil } from "react-icons/ti";
import { SlLocationPin } from "react-icons/sl";
const Navbar2 = () => {
  return (
    <>
<div className='flex justify-between items-center p-2 bg-white m-5 object-center'>
       
<img src='/imgs/m-logo.png' className='w-60 h-18'/>

<div className='flex gap-4 ml-9 '>
   <div className='w-12 h-12 border-2 rounded border-[#1F51C6] hover:animate-ping flex'>
   <TiPencil className='w-8 h-8 text-[#1F51C6] ml-1 mt-1'/>
    </div>

<div>
<h1 className='text-2xl font-semibold'>0 (022) 223 77667</h1>
<a className='text-gray-500 font-semibold' href='medidek.in'>medidek.in</a>
</div>

</div>

<div className='flex gap-4 '>
   <div className='w-12 h-12 border-2 rounded border-[#1F51C6] hover:animate-ping  '>
            <SlLocationPin className='w-8 h-8 text-[#1F51C6] ml-1 mt-1'/>
            </div>

            <div>
                
<h1 className='text-2xl font-semibold'>Medidek Pharmaceuticals LLP.</h1>
<h1 className='text-gray-500 font-semibold'>Jaripatka, Ginger Mall, Nagpur, 440014. </h1>

            </div>
        </div>

        </div>
 
    </>
  )
}

export default Navbar2

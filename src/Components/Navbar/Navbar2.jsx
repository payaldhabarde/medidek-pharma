import React from 'react'
import { TiPencil } from "react-icons/ti";
import { SlLocationPin } from "react-icons/sl";
const Navbar2 = () => {
  return (
    <>
<div className='sticky  sm:flex md:flex justify-between items-center p-2 bg-white m-5 object-center'>
       
<a href='https://www.medidek.in/'><img src='/imgs/m-logo.png' className=' w-60 h-18'/></a>

<div className='flex gap-4 ml-9 '>
   <div className='sm:w-12 sm:h-12 border-2 rounded border-[#1F51C6] hover:animate-ping flex'>
   <TiPencil className='w-8 h-8 text-[#1F51C6] ml-1 mt-1'/>
    </div>

<div>
<a  href='https://www.bing.com/search?pglt=41&q=gmail&cvid=cd7d88ad4fb343a0b7baf7139ed05ed9&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBBFGD3SAQg0ODgzajBqMagCALACAA&FORM=ANNTA1&PC=U531'>
<h1 className='text-2xl sm:text-md font-semibold'>0 (022) 223 77667</h1>
<p className='text-gray-500 font-semibold'>medidek.in</p></a>
</div>

</div>

<div className='flex gap-4 '>
   <div className='w-12 h-12 border-2 rounded border-[#1F51C6] hover:animate-ping  '>
            <a href='https://maps.app.goo.gl/t3WgDwRDmZo4Mim77'><SlLocationPin className='w-8 h-8 text-[#1F51C6] ml-1 mt-1'/></a>
            </div>

            <div>
                
            <a href='https://maps.app.goo.gl/t3WgDwRDmZo4Mim77'><h1 className='text-2xl font-semibold'>Medidek Pharmaceuticals LLP.</h1>
<h1 className='text-gray-500 font-semibold'>Jaripatka, Ginger Mall, Nagpur, 440014. </h1></a>

            </div>
        </div>

        </div>
 
    </>
  )
}

export default Navbar2

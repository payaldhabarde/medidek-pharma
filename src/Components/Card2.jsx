import React from 'react'

import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Card2 = () => {
  const navigate= useNavigate()
  return (
    <>
    <div className='main bg-deep-orange-50 h-[370px] gap-5  flex flex-wrap text-white font-semibold'>
      

<AiOutlineArrowLeft className='w-6 h-8 text-blue-800 mt-48 ml-7'/>
      <div
  class="cards block rounded-lg p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 bg-blue-gray-200 w-56 h-[310px] ml-2 mt-6  ">
    <img src='https://th.bing.com/th/id/OIP.mecCVzuOGnH5upoqb67iwgHaHa?pid=ImgDet&rs=1' className='w-48 h-32 rounded'/>
  <h5
    class="mb-2 text-lg mt-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50 font-semibold">
    Medik8 Press & Clear
  </h5>
  <p className='ml-4 space-x-2 mb-4'>
  <span class="mb-4 text-base text-neutral-600 dark:text-neutral-200 ">
    $56
  </span>
  <span class="mb-4 text-base text-neutral-600 dark:text-neutral-200 line-through">
    $56
  </span></p>
  <button onClick={()=>navigate("/productsview")}
    type="button"
    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-blue-gray-700"
    data-te-ripple-init
    data-te-ripple-color="light">
    Read More
  </button>
</div>


<div
  class="cards block rounded-lg p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 bg-blue-gray-200 w-56 h-[310px] ml-9 mt-6  ">
    <img src='https://5.imimg.com/data5/SELLER/Default/2022/8/IY/RV/OB/25603680/pantoprazole-for-injection-500x500.jpg' className='w-48 h-32 rounded'/>
  <h5
    class="mb-2 text-lg mt-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50 font-semibold">
    Medik8 Press & Clear
  </h5>
  <p className='ml-4 space-x-2 mb-4'>
  <span class="mb-4 text-base text-neutral-600 dark:text-neutral-200 ">
    $56
  </span>
  <span class="mb-4 text-base text-neutral-600 dark:text-neutral-200 line-through">
    $56
  </span></p>
  <button onClick={()=>navigate("/productsview")}
    type="button"
    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-blue-gray-700"
    data-te-ripple-init
    data-te-ripple-color="light">
    Read More
  </button>
</div>
<div
  class="cards block rounded-lg p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 bg-blue-gray-200 w-56 h-[310px] ml-9 mt-6  ">
    <img src='https://5.imimg.com/data5/ANDROID/Default/2022/12/AS/DC/HF/147909362/product-jpeg-500x500.jpg' className='w-48 h-32 rounded'/>
  <h5
    class="mb-2 text-lg mt-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50 font-semibold">
    Medik8 Press & Clear
  </h5>
  <p className='ml-4 space-x-2 mb-4'>
  <span class="mb-4 text-base text-neutral-600 dark:text-neutral-200 ">
    $56
  </span>
  <span class="mb-4 text-base text-neutral-600 dark:text-neutral-200 line-through">
    $56
  </span></p>
  <button onClick={()=>navigate("/productsview")}
    type="button"
    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-blue-gray-700"
    data-te-ripple-init
    data-te-ripple-color="light">
    Read More
  </button>
</div>

<div
  class="cards block rounded-lg  p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 bg-blue-gray-200 w-56 h-[310px] ml-9 mt-6  ">
    <img src='https://5.imimg.com/data5/SELLER/Default/2021/8/NR/UG/CA/51551794/whatsapp-image-2021-08-07-at-5-40-33-pm-1000x1000.jpeg' className='w-48 h-32 rounded'/>
  <h5
    class="mb-2 text-lg mt-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50 font-semibold">
    Medik8 Press & Clear
  </h5>
  <p className='ml-4 space-x-2 mb-4'>
  <span class="mb-4 text-base text-neutral-600 dark:text-neutral-200 ">
    $56
  </span>
  <span class="mb-4 text-base text-neutral-600 dark:text-neutral-200 line-through">
    $56
  </span></p>
  <button onClick={()=>navigate("/productsview")}
    type="button"
    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-blue-gray-700 mb-3"
    data-te-ripple-init
    data-te-ripple-color="light">
   Read More
  </button>
</div>

       
       <AiOutlineArrowRight className=' w-6 h-8 text-blue-800  mt-48 mr-3'/>




    </div>
   
    </>
  )
}

export default Card2

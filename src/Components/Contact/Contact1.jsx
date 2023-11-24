import React from 'react'
import {useAuth} from "../Axios"
const Contact1 = () => {
    const {token,settoken}=useAuth();
  return (
    <>
     <div className='md:w-full md:h-3/5  '>
    <h1 className='md:text-4xl font-semibold text-[#2e3e64] text-center opacity-85 '
    >Contact Form</h1>  <br/><br/>
   
    
<form >
    <div class="md:flex justify-between ">
        
        <div>
        <div className='ml-80'>
            <input type="text" id="first_name" class="bg-white border-2 border-blue-800 text-gray-900 text-md  focus:ring-blue-500 focus:border-blue-500 block w-[340px] p-3.5 dark:bg-gray-200 dark:border-blue-800 dark:placeholder-blue-200 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800" placeholder="Name" required/>
        </div>
        <div className='mt-6 ml-80'>
           <input type="tel" id="phone" class="bg-white border-2 border-blue-800 text-gray-900 text-md  focus:ring-blue-500 focus:border-blue-500 block md:w-[340px] p-3.5 dark:bg-white dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
       </div>
        
     </div>

    <div className='md:flex-1 ml-6  '>
    <div>
    <input type="email" id="email" class="bg-white border-2 border-blue-800 text-gray-900 sm:text-md  focus:ring-blue-500 focus:border-blue-500 block md:w-[340px] p-3.5 dark:bg-white dark:border-gray-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-800" placeholder="Email address" required/>
    </div> 
        <div className='mt-6'>
          
            <input type="text" id="visitors" class="bg-white border-2 border-blue-800 text-gray-900 text-md  focus:ring-blue-500 focus:border-blue-500 block md:w-[340px] p-3.5 dark:bg-white dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enquiry Subject" required/>
        </div>

        </div>

</div>

<div>

<div className='ml-80 mt-6 '>  

<textarea id="message" rows="4" class="block p-2.5 md:w-[706px] md:h-48 sm:text-sm px-12 text-gray-900 bg-white border-2 border-blue-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enquiry Regarding..."></textarea><br/>

</div>
    </div>
    <div className='md:flex justify-center ml-12'>
    <button type="button" onClick={()=>settoken("kuch bhi")} class="text-blue-800 hover:text-white border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:text-sm px-11 py-3.5  mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 justify-center flex text-center ">{token}</button></div>
</form>
</div>
    
    </>
  )
}

export default Contact1

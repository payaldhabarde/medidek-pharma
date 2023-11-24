import React from 'react'

const ContactDetails = () => {
  return (
    <>
     <div className='flex flex-col gap-8 '>

      <div className='flex gap-4 p-3 w-full'>
        <input type='text' name='name' placeholder='Name'  className='border-2 border-blue-600  py-3 px-6 w-96 rounded-lg '/>
        <input type='text' name='name' placeholder='Last Name' className='border-2 border-blue-600 py-3 px-6 w-96 rounded-lg '/>
        </div>
        <div className='flex gap-4 ml-3'>
        <input type='email' name='email' placeholder='Email' className='border-2 w-96 border-blue-600 py-3 px-6 rounded-lg'/>
        <input type='password' name='password' placeholder='Password' className='border-2 border-blue-600 py-3 px-6 w-96 rounded-lg'/>
        </div>
        <div className=''>
          <input type='text' placeholder='Type your Query here..' name='text' className='text-center w-[785px] ml-3 h-32 border border-2 border-blue-700 rounded-lg'/>
        </div>
        <div className='flex gap-5 p-3 ml-32'>
         <button className='text-md text-lime-500 py-2.5  bg-blue-gray-700 rounded-full px-12'>Read More</button>
        <button className='bg-green-500 py-2.5 px-12 rounded-full'>Submit</button>
        </div>
     </div>

    </>
  )
}

export default ContactDetails 

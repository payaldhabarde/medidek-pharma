import React from 'react'
import NewBlogs3 from './NewBlogs3'

const NewBlogs2 = () => {
  return (
    <>
   
      <div style={{ backgroundImage:`url(${"https://static1.squarespace.com/static/52536652e4b007332ef4ecf4/t/5b23054ff950b7b70c755d12/1529021781817/63636161577781.5a72ee16ef0df.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center", opacity:0.9, 
  }} className='p-20 text-center relative mt-12 w-[770px] h-64 ml-9 inset-0 bg-opacity-30' >


<div className='mt-5 absolute text-red-300 '>
    <h1>“We are SO thrilled with the patio… thank you for making such a beautiful space. A couple of</h1> 
    <h1 >days ago one of the residents that ‘can’t’ stand up in the bathroom was standing“</h1>

    <h1 className='mt-8 text-lg font-semibold text-blue-800'>Felicia L. Brooks</h1>
    <p className='font-medium text-blue-800'>Customer</p>
</div>
<div className='flex absolute left-0 top-0'>
    <div className='w-20 h-20 bg-[#1F51C6] text-white rounded-r-lg text-center  hover:bg-gray-600 '>
        <h1 className='mt-3 text-4xl font-semibold'>09</h1>
        <p>10/17</p>
    </div> </div>
  </div>
 
 
 <NewBlogs3/>
    </>
  )
}

export default NewBlogs2

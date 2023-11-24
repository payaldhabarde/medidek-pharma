import React,{useNavigate} from 'react'
import { CgFormatSlash } from "react-icons/cg";


const Register = () => {

  return (
    <>
  
  <div className=''>
    <div style={{ backgroundImage:`url(${"https://bayareaheart.com/wp-content/uploads/2020/05/Untitled-1-768x312.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center", opacity:0.9, 
  }} className='p-20 text-center relative' >
     
        <h1 className='text-4xl font-semibold text-white mb-5'>Registration</h1>
        <div className='flex space-x-3 text-blue-300 justify-center'>
          <span >Home</span>
          <CgFormatSlash className='h-6 text-white' />

          <span>Shop</span>
          <CgFormatSlash className='h-6 text-white' />
          <span className='text-orange-700 opacity-95'>Registration</span>
        </div>
      </div>

        <form className='ml-16 mt-12 mr-16'>
          <div className='flex justify-center mt-6 '>

            <div className='w-6/12  ml-8'>
              <label class='block text-gray-700  font-thin text-md '>First Name : </label>
              <input type='name' name='name' class='p-3.5 w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>

            <div className='w-6/12  mr-2'>
              <lable class='block text-gray-700 font-thin text-md '>Last Name : </lable>
              <input type='email' name='email' class='p-3.5 w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>

          </div>
          <div className='flex justify-center mt-6 w-full'>

            <div className='w-6/12  ml-8'>
              <label class='block text-gray-700  font-thin text-md '>Company Name : </label>
              <input type='name' name='name' class='p-3.5 w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>

            <div className='w-6/12 mr-2'>
              <lable class='block text-gray-700 font-thin text-md '>Email : </lable>
              <input type='email' name='email' class='p-3.5 w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>

          </div>
          <div>
            <div className=' ml-8 mt-2 w-[1105px]'>
              <lable class='block text-gray-700 font-thin text-md '>Address : </lable>
              <input type='address' name='address' class='p-3.5 w-[1053px] border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>
          </div>
          <div className='flex justify-center mt-6 w-full'>

            <div className='w-6/12  ml-8'>
              <label class='block text-gray-700  font-thin text-md '>Town / City : </label>
              <input type='city' name='city' class='p-3.5 w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>

            <div className='w-6/12  mr-2'>
              <lable class='block text-gray-700 font-thin text-md '>State / Province : </lable>
              <input type='state' name='state' class='p-3.5 w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>

          </div>


          <div className='flex justify-center mt-6 w-full'>

            <div className='w-6/12  ml-8'>
              <label class='block text-gray-700  font-thin text-md '>Postcode : </label>
              <input type='postcode' name='postcode' class='p-3.5 w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>

            <div className='w-6/12  mr-2'>
              <lable class='block text-gray-700 font-thin text-md'>Country : </lable>
              <input type='country' name='country' class='p-3.5 block w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm peer' />
            </div>

          </div>

          <div className='flex justify-center mt-6 w-full'>

            <div className='w-6/12 ml-8'>
              <label class='block text-gray-700  font-thin text-md '>Phone : </label>
              <input type='phone' name='phone' class='p-3.5 w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>

            <div className='w-6/12  mr-2'>
              <lable class='block text-gray-700 font-thin text-md '>Fax : </lable>
              <input type='fax' name='fax' class='p-3.5 w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>

          </div>

          <div className='flex justify-center mt-6 w-full'>

            <div className='w-6/12  ml-8'>
              <label class='block text-gray-700  font-thin text-md '>Password : </label>
              <input type='password' name='password' class='p-3.5 w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>

            <div className='w-6/12 mr-2'>
              <lable class='block text-gray-700 font-thin text-md '>Confirm Password : </lable>
              <input type='password' name='password' class='p-3.5 w-11/12 border-2 focus:outline-none focus:border-gray-400 rounded border-slate-400 mt-2 sm:text-sm ' />
            </div>

          </div>
          <div className='ml-12 mt-6'>
            <div class="flex items-center mb-4">
              <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-1" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Ship to this address</label>
            </div>
            <div class="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-2" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Ship to different address</label>
            </div></div>

          <div className='mt-16 ml-12'>
            <button type="button" class="text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow shadow-blue-600/80 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded text-sm px-12 py-3.5 text-center mr-2 mb-2">Register Now</button>

            <button type="button" class="text-white bg-gradient-to-r from-gray-600 via-gray-800 to-gray-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400 dark:focus:ring-gray-800 shadow shadow-gray-600/80 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded text-sm px-12 py-3.5 text-center mr-2 mb-2">Clear Form</button>
          </div>
        </form></div>
      
      <div className='mb-32'></div>
    </>
  )
}
export default Register

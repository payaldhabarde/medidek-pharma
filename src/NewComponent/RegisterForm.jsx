import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";

import { ToastContainer, toast } from 'react-toastify';
import { GrFacebookOption,GrYoutube } from "react-icons/gr";
import { PiTwitterLogoFill } from "react-icons/pi";
import { TiSocialGooglePlus } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {useState} from "react"
const RegisterForm = () => {
  const [error, setError]=useState(false);
  const registerNavigate = useNavigate()
  const [inputvalue, setValue] =useState({
    email:"",
    password:""
  });

  const getdata=(e)=>{
    const{id,value} =e.target;
    console.log(id, value)
    setValue({...inputvalue,[id]:value})
  }

  const apicall = async(e)=>{

    const{email,password}=inputvalue;
    if(!email || !password. includes("@gmail.com")){
      toast("pls filled all filled")
      setError(true);
      return;
    }
    e.preventDefault()
    const responce =await axios.post("https://payalweb-medidekpharma.onrender.com/login",inputvalue)
    console.log(responce);
    if(responce.status === 200 ){
     toast(responce.data.msg) ;
     registerNavigate('/')
    }else{
      toast('Something went wrong!!!!');
    }
  }
  return (
    <div>

        
<form
    class="bg-white shadow-lg mt-12 ml-80 rounded-md p-5 md:p-10 flex flex-col w-11/12 max-w-lg"
  >
    <span className='flex ml-2 gap-3 '>
    <h1 className='mt-4 text-lg'>Sign in with</h1>
      <span className='flex gap-3 mt-5'>
<GrFacebookOption className='text-blue-800 w-7 h-7  '/>
<TiSocialGooglePlus className='text-blue-800 w-7 h-7  '/>
<FaLinkedinIn className='text-blue-800 w-7 h-7  '/>

</span></span>
<span className='flex ml-2 gap-1'>
<hr className='w-48 mt-6 mr-2'/>
<p className='mt-3'>or</p>
<hr className='w-48 mt-6 ml-2'/></span>
    <label for="email" class="mb-5 mt-4">
      <span>Email</span>
      <input
        type="email"
        onChange={(e)=>getdata(e)}
        name="email"
        id="email"
        class="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800"
        placeholder=" "
        required
      />
      { error && !inputvalue.firstname && <span>pls filld firstname</span>}
    </label>
    <label for="password" class="mb-5">
      <span>Password</span>
      <input
        type="password"
        onChange={(e)=>getdata(e)}
        name="password"
        id="password"
        class="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800"
        placeholder=" "
        required
      />
      { error && !inputvalue.firstname && <span>pls filld firstname</span>}
    </label>
    <button onClick={apicall} type="submit" class="mt-5 bg-blue-500 py-3 rounded-md text-white">Submit</button>
    <div class="flex items-center mb-4 mt-8 ">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <span className='flex gap-48 '><label for="default-checkbox" class="ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    <label onClick={()=>registerNavigate("/reset")} for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300  ">Forgot Password?</label></span>
</div>

<p className='text-sm font-semibold mt-2'> Don't have an account? <span onClick={()=>registerNavigate("/regist")} className=' cursor-pointer text-orange-800'>Register here</span></p>
  </form>
    </div>
  )
}

export default RegisterForm

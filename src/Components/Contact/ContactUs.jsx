import React from 'react'
import { BiLogoFacebook,BiLogoInstagram,BiLogoGoogle,BiLogoLinkedin } from "react-icons/bi";
import { FaPeopleLine } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FcSalesPerformance } from "react-icons/fc";
import { FaAdversal } from "react-icons/fa";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const ContactUs = () => {

  const buyMedicine = useNavigate()
  const subscribe= useNavigate();

  const[inputValue, setValue]=useState({
    email:"",
  })

  const getdata= (e) =>{
    const{id, value} =e.target;
    console.log(id, value)
    setValue({...inputValue, [id]:value})
  }

  const apicall =async(e) =>{
    e.preventDefault()
    const{email}=inputValue;
    const respc =await axios.post("http://localhost:5000/newsletter",{email})
    console.log(respc);
  if(respc.status === 200){
    toast(respc.data.msg);
    subscribe('/')
  }else{
    toast('something went wrong!')
  }
}
  return (
    <>
      <div className='ml-14 text-center mb-12 '>
      <h1 className='text-5xl mb-6 mt-6 mr-11'>We’d love to hear from you</h1>
<span className='mb-8 text-md mt-24 mr-3'>Whether you’re curious about features,
 a free trial, or even press—we’re ready to answer
  any and all<br/> questions.</span>
     
     <div className='bg-blue-800 w-full h-96 mt-6 rounded-lg mr-5'>
     <div className='flex gap-9 mt-8 text-center text-blue-800 '>

        <div className='w-64 h-80 bg-blue-50 mt-7 ml-9 rounded-lg'>
        
        <BiSupport className='w-24 h-24 ml-20 text-blue-800'/>
            <h1 className='text-lg font-bold mt-4'>Support</h1>
            <p className='text-sm mt-5'>
Need a hand using Unbounce or managing your account?
 Chat with a real, live human or self-serve using our Help Center.</p>

 <a href='#contactus'><button className='py-2.5 px-3 text-white bg-blue-700 rounded-lg mt-5'>Get Support</button></a>
        </div>


        <div className='w-64 h-80 bg-blue-50 rounded-lg border-2 mt-7 border-blue-800'>
      
      <FcSalesPerformance className='w-24 h-24 ml-20 text-blue-800'/>
          <h1 className='text-lg font-bold mt-4'>Sales</h1>
          <p className='text-sm mt-5'>
Need a hand using Unbounce or managing your account?
Chat with a real, live human or self-serve using our Help Center.</p>

<a href='#contactus'><button className='py-2.5 px-3 text-white bg-blue-700 rounded-lg mt-5'>Get Support</button></a>
      </div>


        <div className='w-64 h-80 bg-blue-50 rounded-lg border-2 mt-7 border-blue-800'>
      
      <FaAdversal className='w-24 h-24 ml-20 text-blue-800'/>
          <h1 className='text-lg font-bold mt-4'>Branding</h1>
          <p className='text-sm mt-5'>
Need a hand using Unbounce or managing your account?
Chat with a real, live human or self-serve using our Help Center.</p>

<a href='#contactus'><button className='py-2.5 px-3 text-white bg-blue-700 rounded-lg mt-5'>Get Support</button></a>
      </div>

      <div className='w-64 h-80 bg-blue-50 rounded-lg border-2 mt-7 border-blue-800'>
      
      <FaPeopleLine className='w-24 h-24 ml-20 text-blue-800'/>
          <h1 className='text-lg font-bold mt-4'>Distributership</h1>
          <p className='text-sm mt-5'>
Need a hand using Unbounce or managing your account?
Chat with a real, live human or self-serve using our Help Center.</p>

<a href='#contactus'><button className='py-2.5 px-3 text-white bg-blue-700 rounded-lg mt-5'>Get Support</button></a>
      </div>
      </div>

       
     </div>
      </div>

      <div className='flex w-full ml-20 mt-12 justify-evenly' id='contactus'>
        <div className='mt-3'>
        <img src='https://cdn.dribbble.com/users/1602563/screenshots/8869646/qw.gif' className='w-96 h-64'/>
        </div>

     <div className='mr-32'>
  <h1 className='text-sm font-semibold mt-12  text-blue-800'><i>THANK YOU!</i></h1>

<p className='text-xs text-gray-500 opacity-80 mt-3'>We have added you to our mailing list.<br/> You will be among the first <r/>people to get all of our special<br/> offers, newest updates, and announcements.<br/> We will do our best not to bore <br/>you with marketing emails!</p>
     <div class="flex items-center w-64 mt-12 mr-16 border-b border-teal-500 py-2">
    <input onChange={(e)=>getdata(e)} class="appearance-none bg-transparent border-none w-full text-blue-800 mr-3 py-1 px-2 leading-tight focus:outline-none" id='email' type="email" placeholder="Email Address" aria-label="Full name"/>
    <button onClick={apicall} className='text-sm text-blue-800 font-semibold'>SUBSCRIBE</button>
    </div>

</div>
      </div>

      <div className='flex justify-center mt-24 mb-24 gap-5 ml-2'>

        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.378340065861!2d79.08654737409158!3d21.177124280509638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c130e31378b3%3A0x17c624e5d39fc9e3!2sMedidek%20Healthcare%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1699351535983!5m2!1sen!2sin" width="550" height="450" style={{border:0, borderRadius:10}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='bg-gray-200 h-96... w-[550px] text-blue-800 font-semibold text-center rounded-lg content-start'>
            <img src='./imgs/m-logo.png' className='w-[400px] h-[70px] ml-20 mt-9'/>
            <p className='mt-8'>2nd floor, Ginger Square Mall, Bus Stop, Main Rd,<br/> Jaripatka,Nagpur, Maharashtra 440014</p>
            <p className='mt-2'>221-400-4110 / medidek.in</p>
            <p className='mt-5 left-3'>Get Directions</p>
            <div className='flex w-full text-blue-800 justify-center mt-5'> 
            <BiLogoFacebook className='w-12 h-8 '/>
            <BiLogoInstagram className='w-12 h-8 '/>
        <BiLogoGoogle className='w-12 h-8 '/>
        <BiLogoLinkedin className='w-12 h-8'/>
       
       </div>

       <button onClick={()=>subscribe("/frm")} className='py-3 px-14 bg-white border border-2 border-gray-300 hover:bg-blue-700 hover:text-white hover:border-gray-300 mt-11 font-semibold text-blue-800 rounded ml-2'>Enquire Now</button>


    
        </div>
      </div>
    </>
  )
}

export default ContactUs

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BuyMedicine = () => {

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
    const respc =await axios.post("https://payalweb-medidekpharma.onrender.com/newsletter",{email})
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
      <div className='flex justify-evenly mt-8 items-center relative inset-0' >

       <div className='w-48 rounded-full bg-gray-100 h-48'> <img src='imgs/m-logo.png' className='mt-16 w-48 h-11 '/>
       </div>

       <div >
    <img src='https://www.indium.com/blog/media/images/0608/medical.jpg' className='rounded-full h-64 w-64 mt-5'/>
</div>
        <div className='space-y-3 relative inset-0'>
            <h1 className='text-2xl font-semibold'>Buy Medicines<br/> Faster with one tap <br/>away..</h1>
        <p className='text-sm opacity-50'>Search and buy medicines fatster on your<br/> mobiles</p>
       
  <div class="flex items-center w-64 border-b border-teal-500 py-2">
    <input onChange={(e)=>getdata(e)} class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id='email' type="email" placeholder="Email Address" aria-label="Full name"/>
    <button onClick={apicall} className='text-sm text-blue-800 font-semibold'>SUBSCRIBE</button>
    </div></div>


    </div>
   
    </>
  )
}

export default BuyMedicine


import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const RegisterUser = () => {
    const loginNavigate = useNavigate()
    const[error, setError]=useState(false);
    const [inputvalue,setinputvalue]=useState({
        firstname:"",
        lastname:"",
        phone:"",
        email:"",
        password:"" 
    });

    const getinput =(e)=>{
        const {id,value} =e.target;
        console.log(id,value)
        setinputvalue({...inputvalue,[id]:value})
    }

    const apicall = async(e)=>{
        const {firstname,lastname,phone,email,password} =inputvalue;
        if(!firstname || !lastname ||!phone ||!email|| !password ||!email.includes("@gmail.com")){
            toast("pls filled all field");
            setError(true)
            return ;
        }
        e.preventDefault()
        const resp = await axios.post("https://payalweb-medidekpharma.onrender.com/register",inputvalue)
        console.log(resp);
        if(resp.status ===200){
            toast(resp.data.msg)
            loginNavigate("/")
        }
        else{
            toast("user registration failed");
        }
    }

  return (
    <>
     <div className='w-[900px] h-full ml-64'>
<form >
    <div class="grid gap-6 mb-6 md:grid-cols-1 mt-9 ">
        <div>
            <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="firstname" onChange={(e)=>getinput(e)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
            { error && !inputvalue.firstname && <span>pls filld firstname</span>}
        </div>
        <div>
            <label htmlFor="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="lastname" onChange={(e)=>getinput(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>{error && !inputvalue.lastname && <span>pls filled lastname</span>}
        </div>
        
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="number" id="phone" onChange={(e)=>getinput(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
            {error && !inputvalue.phone && <span>pls filled phone number</span>}
        </div>
    </div>
    <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" onChange={(e)=>getinput(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
            {error && !inputvalue.email && <span>pls filled Email Address</span>}
        </div> 
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" onChange={(e)=>getinput(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
        {error && !inputvalue.password && <span>pls filled password </span>}
    </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" onChange={(e)=>getinput(e)} type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" onChange={(e)=>getinput(e)} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <div className='flex justify-between'>
    <button  onClick={apicall} type="submit" id='submit' class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
<p>Already have an account?<button onClick={()=>loginNavigate("/signup")} className='text-blue-800 py-2 px-4 font-semibold rounded-md'>Login here</button> </p>
</div>
</form>
       
    </div> 
    <div className='mb-24'></div>
    </>

  )
}

export default RegisterUser

import React from 'react'
import './demoCss.css'
import {useAuth} from "./Axios"
const Demo = () => {
  const {token,settoken}=useAuth();
  return (
    <>
    
<div className='card flex mb-8 bg-gray-400'>

<div className=' relative'>
<div className='mt-2 absolute '>
<img src='https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?w=1380&t=st=1697543813~exp=1697544413~hmac=3d7d2ba3263002cfec8e0de501a20e08f1592f4eafae1eaf52065991343026f9' className=' w-32 bg-white h-32  ml-32 rounded-full text-center'/></div>
<div className='sub h-80 w-96 border-2 ml-2 border-white rounded text-center mt-20 '>

    <p className='text-md italic text-gray-500 font-thin mt-20'>Opening this asset with the online editor<br/> counts as a download Opening this asset<br/> with the online editor counts as a download.</p>

    <button onClick={()=>settoken("kuchbhi")} className='text-2xl text-white mt-5 font-semibold'>Smith Thomas</button>
    <p className='text-md text-orange-700 opacity-90'>{token}</p>
</div></div>
</div>

<Navbar1 setRegister={setRegister} register={register}/>
{!register && <Home2/> }
{!register && <OurTeam/> }
 {!register && <Blogs/>}
 <div className='mt-24'></div>
 {!register && <Testimoniols/>}
 {!register &&<Contact1/>}
    </>
  )
}

export default Demo

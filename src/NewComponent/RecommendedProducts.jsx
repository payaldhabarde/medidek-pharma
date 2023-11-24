import React from 'react'
import { FaStar } from "react-icons/fa";
import { VscCircle } from "react-icons/vsc";
const RecommendedProducts = () => {
  return (
    <>
    <div className='mt-12 bg-gray-100 w-full h-[450px] '>
       <div className='flex justify-between'>
            <div className='ml-6 flex gap-12 mt-7'>
    <h1 className='ml-8 top-6 text-lg opacity-80'>Deals Of The Day</h1>
    <h1 className='text-sm bg-blue-800 text-white p-1 h-6 w-36 text-center rounded'>Ends In 10:23:56</h1></div>
    <button className='mr-20 opacity-80 text-sm'>View All</button>
    </div>
     <div className='flex gap-20 mt-11 ml-14 bg-white h-80 w-[1200px] '>
    
        <div className='mt-6 ml-5 items-center space-y-2'>
        <img src='https://th.bing.com/th/id/OIP.-xctzWeodN9MaheBHfIqxAHaHa?rs=1&pid=ImgDetMain' className='w-24 h-32'/>    
            <p className='text-sm text-center'>$76 & <span>$89</span></p>
            <h1 className='text-center'>New Component<br/>Deals Of The Day </h1>
            <span className='flex text-sm justify-center space-x-1'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </span>
        </div>
        
        <div className='mt-6  space-y-2'>
        <img src='https://th.bing.com/th/id/OIP.OXIuY70KiFY6MZV-cE0WEQHaHa?rs=1&pid=ImgDetMain' className='w-24 h-32'/>    
        <p className='text-sm text-center'>$76 & <span>$89</span></p>
            <h1 className='text-center'>New Component<br/>Deals Of The Day </h1>
            <span className='flex text-sm justify-center space-x-1'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </span>
        </div>

        <div className='mt-6 space-y-2'>
        <img src='https://www.delybazar.com/blog/wp-content/uploads/2016/11/personal-care-products-for-healthy-skin-1200x700.png' className='w-24 h-32'/>    
        <p className='text-sm text-center'>$76 & <span>$89</span></p>
            <h1 className='text-center'>New Component<br/>Deals Of The Day </h1>
            <span className='flex text-sm justify-center space-x-1'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </span>
        </div>

        <div className='mt-6 space-y-2'>
        <img src='https://cancercareparcel.com/wp-content/uploads/2017/08/new-chemo-comfort-group-scaled.jpg' className='w-24 h-32'/>    
        <p className='text-sm text-center'>$76 & <span>$89</span></p>
            <h1 className='text-center'>New Component<br/>Deals Of The Day </h1>
            <span className='flex text-sm justify-center space-x-1'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </span>
        </div>

        <div className='mt-6 space-y-2'>
        <img src='https://i.pinimg.com/474x/5a/66/e4/5a66e492d21c59fc44295d6a3a2d1683.jpg' className='w-24 h-32'/>    
        <p className='text-sm text-center'>$76 & <span>$89</span></p>
            <h1 className='text-center'>New Component<br/>Deals Of The Day </h1>
            <span className='flex text-sm justify-center space-x-1'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </span>
        </div>

        <div className='mt-6 space-y-2'>
        <img src='https://m.media-amazon.com/images/I/718euSqcD0L._SL1500_.jpg' className='w-24 h-32'/>    
        <p className='text-sm text-center'>$76 & <span>$89</span></p>
            <h1 className='text-center'>New Component<br/>Deals Of The Day </h1>
            <span className='flex text-sm justify-center space-x-1'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </span>
        </div>
       
          </div>
        
        </div>

 
    </>
  )
}

export default RecommendedProducts

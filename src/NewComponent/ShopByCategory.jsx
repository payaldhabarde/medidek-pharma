import React from 'react'
import DealsOfTheDay from './DealsOfTheDay'

const ShopByCategory = () => {
  return (
    <>
    <div className='mt-12 bg-gray-100 w-full h-80 '>
        <div >
    <h1 className='ml-8 mt-5 text-xl'>Shop By Category</h1></div>
    
     <div className='flex gap-20 mt-8 ml-8 bg-white h-56 w-[1200px]'>
    
        <div className='mt-6 ml-5'>
        <img src='https://th.bing.com/th/id/OIP.-xctzWeodN9MaheBHfIqxAHaHa?rs=1&pid=ImgDetMain' className='w-24 h-32'/>    
            <h1 className='mt-4 text-center'>Ayush</h1>
        </div>
        
        <div className='mt-6 '>
        <img src='https://th.bing.com/th/id/OIP.OXIuY70KiFY6MZV-cE0WEQHaHa?rs=1&pid=ImgDetMain' className='w-24 h-32'/>    
            <h1 className='mt-4 text-center'>Fitness</h1>
        </div>

        <div className='mt-6 '>
        <img src='https://www.delybazar.com/blog/wp-content/uploads/2016/11/personal-care-products-for-healthy-skin-1200x700.png' className='w-24 h-32'/>    
            <h1 className='mt-4 text-center'>Personal Care</h1>
        </div>

        <div className='mt-6 '>
        <img src='https://cancercareparcel.com/wp-content/uploads/2017/08/new-chemo-comfort-group-scaled.jpg' className='w-24 h-32'/>    
            <h1 className='mt-4 text-center'>Family Care</h1>
        </div>

        <div className='mt-6 '>
        <img src='https://i.pinimg.com/474x/5a/66/e4/5a66e492d21c59fc44295d6a3a2d1683.jpg' className='w-24 h-32'/>    
            <h1 className='mt-4 text-center'>Lifestyle</h1>
        </div>

        <div className='mt-6 '>
        <img src='https://th.bing.com/th/id/OPA.fTxQLLOWDNtvAA474C474?o=5&pid=21.1&w=160&h=167&dpr=2' className='w-24 h-32'/>    
            <h1 className='mt-4 text-center'>Treatments</h1>
        </div>
        
        <div className='mt-6 '>
        <img src='https://m.media-amazon.com/images/I/718euSqcD0L._SL1500_.jpg' className='w-24 h-32'/>    
            <h1 className='mt-4 text-center'>Devices</h1>
        </div>
        </div> </div>

        <DealsOfTheDay/>
    </>
  )
}

export default ShopByCategory
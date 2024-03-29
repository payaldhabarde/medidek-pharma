import React from 'react'
import ProductSlider from '../Slider/ProductSlider'
import { useNavigate } from 'react-router-dom'

const Products = ({open}) => {
  const navigate= useNavigate()
  return (
    <>
  <div className='w-screen h-[600px] z-0 bg-gradient-to-r mt-32 from-[#1F51C6] to-[#1F51C6]  '>
      <div className=' flex justify-block mt-5 h-screen cover gap-5 w-full justify-between  items-center space-evenly z-[95]'>
     <div className='ml-16 mb-[12rem]'>
         <h1 className='text-white text-4xl font-semibold'>See Our Products </h1><br/><br/>
 <h2 className='text-md text-white '>We have several product candidates in development that we believe<br/> have been significantly de-risked.</h2><br/>
 
 <p className='text-sm  text-gray-200'>been significantly de-risked. At vero eos et accusam justo duo dolores etea <br/>rebuitet clita kasd gubergren nosea takimata sanctus est lorem ipsum dolor<br/> consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut<br/> labore magna aliquyam sedam voluptua at vero eos et accusam et justo duo dolores.</p><br/>
 
 
  
 <a href="/all" target='_blank' ><button type="button" class="text-white hover:text-[#1F51C6] border-2 border-white hover:bg-white focus:ring-4 focus:outline-none cursor-pointer focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-3 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-300 dark:focus:ring-blue-800 font-semibold" onClick='scroll-mt-px' >See All Products</button></a>
    
     </div>
 
     <div>
         <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU61kbQSeQHdSVsiKH9ia0EuYuxcipzUutLRk4nFl9dWqICT0QY0NtyhtZDy1ueCNCThvIsKjd5-Rwwmmb4ysoFz9qFvp32rNoxfBxJ4pJZdmoRm2eEC7yQbTGU2auVOVM-ApWCF5kixnBtN2EWUY_K3Qtc_ybp3CPJNT6ueuYaD_PbEk1lN8bkc_cAw/s1500/1111111111.jpg' className='w-4/5 ml-6 z-10 h-96 rounded-md mb-[9rem] '/>
     </div>
     
     </div> 
 
    
 </div> 
    

    </>
  )
}

export default Products
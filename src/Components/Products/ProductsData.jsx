import React from 'react'
import { ProductArray } from './ProductArray'
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate,Link } from 'react-router-dom';

const ProductsData = () => {

    const navigate= useNavigate()
  return (
    <div className='flex flex-wrap justify-evenly'>
        
      {
        ProductArray.map((p)=>(
            <>
           <div>
            <div className='mt-5 mb-5 mr-5 flex ml-8  w-[280px] h-56 bg-gray-200 border-2 border-blue-800'>
            <img src={p.img} className='w-32 h-48'/>
        
            
           <div key={p.id} className='ml-5 mt-2'>
             <h1>{p.productName}</h1>
            <h1>{p.productPrice}</h1>
            <h1>{p.minQty}</h1>
            
<button onClick={()=>navigate("/productsview")} className='py-2 px-4 rounded bg-blue-800'>Read More</button>
            </div>
            </div></div>
          
          </>


        ))
        
      }
<br/>
       
       <AiOutlineArrowLeft className='w-8 h-8 text-blue-800 mt-5 '/>
       
       <AiOutlineArrowRight className='w-8 h-8 text-blue-800 mt-5 ml-1'/>
    </div>
       
  )
}

export default ProductsData

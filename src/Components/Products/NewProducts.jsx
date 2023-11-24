import React,{useState,useEffect} from 'react'
import { CgFormatSlash } from "react-icons/cg";
const NewProducts = () => {
const[products, setProducts] = useState([])

useEffect(() => {
fetchApi()
}, [])

const fetchApi= async() =>{
const res = await fetch('https://fakestoreapi.com/products/')

const data=await res.json();

console.log(data);

setProducts(data)
}
  return (
    <>
 <div style={{ backgroundImage:`url(${"https://bayareaheart.com/wp-content/uploads/2020/05/Untitled-1-768x312.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center", opacity:1.5, 
  }} className='p-16 text-center relative' >
     
        <h1 className='text-4xl font-bold text-white mb-5'>Products</h1>
        <div className='flex space-x-3 text-blue-300 justify-center'>
          <span >Home</span>
          <CgFormatSlash className='h-6 text-white' />

          <span>Shop</span>
          <CgFormatSlash className='h-6 text-white' />
          <span className='text-orange-700 opacity-90'>Products</span>
        </div>
      </div> 
    <div className='mt-12'>
    <div className='flex gap-9 mb-8'>

</div>
{
    products && products?.map((p)=>(
        <div className='flex gap-9'>
        
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-6">
            <a href="#">
                <img class="rounded-t-lg" src={p.image} />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{p.title} </h5>
                </a><span class="text-md mr-8 ml-3 font-medium text-gray-900 line-through dark:text-white content-center">$109</span>
                <span class="text-md font-bold text-gray-900 dark:text-white ">{p.price}</span>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-3">{p.description}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                     <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        </div>   
    ))
}

</div>
    </>
  )
}

export default NewProducts

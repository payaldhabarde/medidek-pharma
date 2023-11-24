import React from 'react'
import { CgFormatSlash } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
const Cart = () => {
let color=['blue', 'yellow', 'orange'];  
  return (
    <>
    <div style={{ backgroundImage:`url(${"https://bayareaheart.com/wp-content/uploads/2020/05/Untitled-1-768x312.jpg"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: " center", opacity:1.5, 
  }} className='p-16 text-center relative mt-8' >
     
        <h1 className='text-4xl font-bold text-white mb-5'>Products</h1>
        <div className='flex space-x-3 text-blue-300 justify-center'>
          <span >Home</span>
          <CgFormatSlash className='h-6 text-white' />

          <span>Shop</span>
          <CgFormatSlash className='h-6 text-white' />
          <span className='text-orange-700 opacity-90'>Products</span>
        </div>
      </div> 
      <div className='flex '>
        <div >
      <div className='mt-24 ml-20 '>
        <h1 className='text-2xl font-semibold opacity-80'>Search</h1>
      <form className='mt-6'>
        <label class="relative block">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                    height="30" viewBox="0 0 30 30">
                    <path
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                    </path>
                </svg>
            </span>
            <input
                class="w-64 bg-white placeholder:font-italitc border border-slate-300 rounded-full py-2 pl-10 pr-4 focus:outline-none"
                placeholder="Search here..." type="text" />
        </label>
    </form>
    </div>
    <div className='mt-12 ml-20 '>
        <h1 className='text-2xl font-semibold opacity-80'>Categories</h1>
        <div className='flex gap-4 mt-6 text-gray-500 opacity-90'>
            <FaCheck className='text-blue-800 font-bold'/>
            <h1>All News</h1>
            <p className='ml-12'>/ 185</p>
        </div>
        <div className='flex gap-4 mt-6 text-gray-500 opacity-90'>
            <FaCheck className='text-blue-800 font-bold'/>
            <h1>All News</h1>
            <p className='ml-12'>/ 185</p>
        </div>
        <div className='flex gap-4 mt-6 text-gray-500 opacity-90'>
<FaCheck className='text-blue-800 font-bold'/>
<h1>All News</h1>
<p className='ml-12'>/ 185</p>
</div>
<div className='flex gap-4 mt-6 text-gray-500 opacity-90'>
            <FaCheck className='text-blue-800 font-bold'/>
            <h1>All News</h1>
            <p className='ml-12'>/ 185</p>
        </div>
        <div className='flex gap-4 mt-6 text-gray-500 opacity-90'>

            <FaCheck className='text-blue-800 font-bold'/>
            <h1>All News</h1>
            <p className='ml-12 '>/ 185</p>
        </div>

        </div>

<div className='ml-20'>
       <h1 className='mb-3 mt-12  text-2xl font-semibold opacity-75'>Filters by Price</h1>
       <input type='range' min="0" max="100" value="20" className=''/>
       <p className='text-medium text-gray-500 opacity-90'>Price: $30 - $145</p>
       <button className='text-sm bg-transparent border-2 border-blue-400 rounded py-3 px-14 mt-3 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white'>Filter Now</button></div>

       </div>


<div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-48 mt-24">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://cdn.nutrabay.com/wp-content/uploads/2023/05/NB-NUT-1014-06-01.jpg" alt="Apple Watch"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                Nutrabay Gold Tri-Blend <br/>Whey Protein
                </td>
             
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://th.bing.com/th/id/OIP.-pJ8PTUndwCLn6f_Bo0hwQHaHg?pid=ImgDet&rs=1" alt="Apple Imac"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    
                   Dabur Honitus Herbal<br/> Cough Remedy - 1mg"
                </td>
                
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $97.6
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://static1.industrybuying.com/products/medical-supplies-equipment/diagnostic-products/blood-pressure-monitors/MED.BLO.32375607_1668016423062.webp" alt="Iphone 12"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                BPL Medical Technologies<br/> Blood Pressure Monitor B1
                </td>
                
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $1768 
                </td>
               
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://static1.industrybuying.com/products/medical-supplies-equipment/diagnostic-products/blood-pressure-monitors/MED.BLO.32375607_1668016423062.webp" alt="Iphone 12"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                BPL Medical Technologies<br/> Blood Pressure Monitor B1
                </td>
                
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $1768 
                </td>
               
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://static1.industrybuying.com/products/medical-supplies-equipment/diagnostic-products/blood-pressure-monitors/MED.BLO.32375607_1668016423062.webp" alt="Iphone 12"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                BPL Medical Technologies<br/> Blood Pressure Monitor B1
                </td>
                
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $1768 
                </td>
               
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://static1.industrybuying.com/products/medical-supplies-equipment/diagnostic-products/blood-pressure-monitors/MED.BLO.32375607_1668016423062.webp" alt="Iphone 12"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                BPL Medical Technologies<br/> Blood Pressure Monitor B1
                </td>
                
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $1768 
                </td>
               
            </tr>
        </tbody>
    </table>
</div>

</div>

<div className='flex gap-16 ml-8 mt-12'>
  <div>
       <h1 className='mb-12 mt-12 ml-20 text-2xl font-semibold opacity-75'>Sales Product</h1>
       <div className='flex gap-6 ml-12'>
        <div className='bg-gray-100 h-24 w-24 '>
        <img src='https://m.media-amazon.com/images/I/71t9JRry+3L._SL1500_.jpg' className='w-16 h-16 mt-5 ml-5'/>
        </div>
        <div>
          <h3>Cetaphil Gentle Skin <br/>Cleanser, 125 ml</h3>
          <div className='flex text-orange-600'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          <span class="mt-1 text-sm font-thin line-through text-gray-900">$32</span><span class="mt-1  ml-3 text-sm font-medium text-gray-900">$78</span>
        </div>
       </div>
       
       <div className='flex gap-6 ml-12 mt-5'>
        <div className='bg-gray-100 h-24 w-24 '>
        <img src='https://th.bing.com/th/id/OIP.cSzYDq6--cgaxRk3nO08-QHaHa?w=200&h=200&c=7&r=0&o=5&dpr=2&pid=1.7' className='w-16 h-16 mt-5 ml-5'/>
        </div>
        <div>
          <h3>Cetaphil Gentle Skin <br/>Cleanser, 125 ml</h3>
          <div className='flex text-orange-600'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          <span class="mt-1 text-sm font-thin line-through text-gray-900">$32</span><span class="mt-1  ml-3 text-sm font-medium text-gray-900">$78</span>
        </div>
       </div>

       <div className='flex gap-6 ml-12 mt-5'>
        <div className='bg-gray-100 h-24 w-24 '>
        <img src='https://m.media-amazon.com/images/I/71t9JRry+3L._SL1500_.jpg' className='w-16 h-16 mt-5 ml-5'/>
        </div>
        <div>
          <h3>Cetaphil Gentle Skin <br/>Cleanser, 125 ml</h3>
          <div className='flex text-orange-600'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          <span class="mt-1 text-sm font-thin line-through text-gray-900">$32</span><span class="mt-1  ml-3 text-sm font-sm text-gray-900 text-red-700 ">$78</span>
        </div>
       </div></div>

       <div className='border-2 border-gray-300 w-96 h-80  py-12'>
        <div className='ml-9'>
        <h1 className='text-3xl font-semibold opacity-70 mb-4'>Discount Codes</h1>
<p className='text-gray-400 opacity-80 font-light'>Enter coupon code if you have one</p>
<input type='text' name='text' placeholder='Coupon code' className='px-12 py-3 border-2 border-gray-400 rounded mb-4 mt-4'/><br/>
<button className='bg-black text-white py-3 px-5 rounded font-semibold mt-3'>Apply Coupon</button>
        </div>

        
       </div>

       <div className='border-2 border-gray-300 w-96 mb-12 py-12'>
        <div className='ml-8'>
        <h1 className='text-3xl font-semibold opacity-70 mb-4'>Enquiry Regarding</h1>
<p className='text-gray-400 opacity-80 font-light'>Enter details regarding product</p>
<input type='text' name='text' placeholder='Coupon code' className='px-16 py-3 border-2 border-gray-400 rounded mb-4 mt-4'/><br/>
<input type='text' name='text' placeholder='State/Country' className='px-16 py-3 border-2 border-gray-400 rounded mb-4 mt-4'/><br/>
<input type='text' name='text' placeholder='Postcode/ Zip' className='px-16 py-3 border-2 border-gray-400 rounded mb-4 mt-4'/><br/>
<button className='bg-black text-white py-3 px-9 rounded font-semibold mt-2'>Submit</button>
        </div>

        
       </div>
       </div>


       <div className='flex gap-5'>
        
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://cdn.nutrabay.com/wp-content/uploads/2023/05/NB-NUT-1014-06-01.jpg" alt="Apple Watch"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                Nutrabay Gold Tri-Blend <br/>Whey Protein
                </td>
             
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://th.bing.com/th/id/OIP.-pJ8PTUndwCLn6f_Bo0hwQHaHg?pid=ImgDet&rs=1" alt="Apple Imac"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Dabur Honitus Herbal<br/> Cough Remedy - 1mg"
                </td>
                
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $97.6
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://static1.industrybuying.com/products/medical-supplies-equipment/diagnostic-products/blood-pressure-monitors/MED.BLO.32375607_1668016423062.webp" alt="Iphone 12"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                BPL Medical Technologies<br/> Blood Pressure Monitor B1
                </td>
                
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $1768 
                </td>
               
            </tr>
        </tbody>
    </table>
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://cdn.nutrabay.com/wp-content/uploads/2023/05/NB-NUT-1014-06-01.jpg" alt="Apple Watch"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                Nutrabay Gold Tri-Blend<br/> Whey Protein
                </td>
             
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://th.bing.com/th/id/OIP.-pJ8PTUndwCLn6f_Bo0hwQHaHg?pid=ImgDet&rs=1" alt="Apple Imac"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    
Dabur Honitus Herbal<br/> Cough Remedy - 1mg"
                </td>
                
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $97.6
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="https://static1.industrybuying.com/products/medical-supplies-equipment/diagnostic-products/blood-pressure-monitors/MED.BLO.32375607_1668016423062.webp" alt="Iphone 12"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                BPL Medical Technologies Blood Pressure Monitor B1
                </td>
                
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $1768 
                </td>
               
            </tr>
        </tbody>
    </table>
</div>
       </div>



       
    </>
  )
}

export default Cart

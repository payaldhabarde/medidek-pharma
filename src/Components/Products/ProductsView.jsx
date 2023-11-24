import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProductsView = () => {
    const navigat= useNavigate()
  return (
    <>
    <div className=' bg-blue-gray-700 text-white flex space-x-1 w-full'>
        <div className=''>
     <div className='flex justify-start gap-9 mt-2 h-80'>
        <div className='mt-3 ml-12 '><img src='https://5.im.com/data5/ANDROID/Default/2022/6/CB/PR/VL/141511891/product-jpeg-1000x1000.jpg' className='w-[690px] h-64 bg-light-blue-50'/></div>
        
        <div className='mt-3 space-y-3'>
            <h1> Accu-Chek Active Test Strips, 100 Count</h1>
<p>Manufacturer/Marketer</p>
<h3>ROCHE DIABETES CARE INDIA PVT LTD</h3>
<p>Consume Type</p>
<p>NON CONSUMABLE</p>
<button className='px-6 py-2 bg-orange-700 rounded-lg mr-5'>in stock</button>
<button onClick={()=>navigat("/enquiryform")} className='px-4 py-2 bg-blue-700 rounded-lg ml-5'>Enquire Now</button>
</div> </div>
     
<div className=' ml-5 bg-blue-gray-700 text-white '>
        <h1>PRODUCT DETAILS</h1>
<p>Description</p>
<p>Proven Accuracy: The Accu-Chek Active strips are simple and effective and<br/> help you to keep tabs on your diabetes regularly. It also fulfills <br/>ISO 15197:2013 standards of accuracy.</p>

<p>Uses of Accu-Chek Active Test Strips, 100 Count</p>
<p>Diabetes care</p>
<p>Key Benefits</p>
<p>Easy-handling: A clear protective barrier runs along the entire length of the <br/>test strip to protect the strip and the chemistry, which makes it easy to use.<br/>
Clever functionality: Accu-Chek Active strip is a hassle-free product. The blood <br/>is automatically absorbed by the strip and spreads quickly across it. The <br/>system then provides a fast and accurate result.</p>
<p>Blood volume: 1-2 μl.</p>
<p>Measuring Range : 10 mg/dl - 600 mg/dl.</p>
<p>Directions for Use</p>
<p>There is no setup required.</p>
<p>Just insert a test strip, apply a small blood sample and read <br/>your blood glucose result on the large display.</p>
<p>Variant</p>
<p className='divide-x'>Active</p>
</div>

<div className=' bg-blue-gray-700 ml-5 text-white '>
<p>Other Information (ACC0113)</p>
<p>This item is Not Returnable.</p>

<p>Expires on or after - Dec-24</p>

</div>
</div>



</div>
 

    </>
  )
}
export default ProductsView

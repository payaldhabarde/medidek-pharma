import React from 'react'
import { Carousel } from "@material-tailwind/react";

const Home2 = () => {
  return (
    <>
    
     <Carousel className="rounded-xl">
        <div className='image-scroll hover:border border-blue-700 '>
       <img
         src="https://www.elationhealth.com/wp-content/uploads/2022/06/iStock-1273890900-1024x599.jpeg"
         alt="image 1"
         className="h-96 w-full object-cover bg-opacity-95"
         
       />
      
       </div>
      <div>
       <img
         src="https://www.dialexa.com/wp-content/uploads/2023/06/frontdoor_tile_color-768x512.png"
         alt="image 2"
         className="h-96 w-full object-cover opacity-90"
       /></div>
       <div>
       <img
         src="https://precisionlabtesting.com/wp-content/uploads/2021/03/blood-test.jpg"
         alt="image 3"
         className="h-96 w-full object-cover opacity-80"
       /></div>
     </Carousel>
     </>
   );
 }
    

export default Home2

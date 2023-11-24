import ProductData from './ProductData';
import React from 'react'
const Demo = () => {

  return (
   
<div className='flex flex-wrap gap-8 mt-8 ml-4'>
  {
ProductData.map((c) =>{
  return(
    <div>
      <h1 className='text-center'>{c.id} &nbsp;{c.title}</h1>
      <img src={c.img} className='w-32 h-32' />
      <h1>{c.link}</h1>
    </div>
    
  )
}


)
  }
</div>


  );
};

export default Demo
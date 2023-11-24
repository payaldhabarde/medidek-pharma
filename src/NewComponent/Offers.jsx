import React from 'react'

const Offers = () => {
  return (
    <>
      <div className='flex h-32 ml-4 justify-evenly  items-center mt-24 bg-blue-800 text-white'>

<div className=''>
 
    <h1 className='text-4xl'>20%</h1>
    <p className='text-sm opacity-60'>Discount</p>
    <h2 className='text-lg'>Limited Stock Only</h2>
</div>


<div>
    <h1 className='text-lg'>Mask Sanitizers And<br/> Safty Gear</h1>
    <p className='text-sm opacity-70'>Stay Safe, Stay Protected! Choose a Safty kit to help</p>
    <p className='text-sm opacity-70'>your family prevetation disease.</p>
</div>

<div>
  <img src='https://media.istockphoto.com/id/878129954/vector/online-pharmacy-or-drugstore.jpg?s=1024x1024&w=is&k=20&c=dPqI-1c52hXLUSZi-x8y2DGlmd-9RXYjPLcetBouLJk=' className='w-24 h-24'/>    
          
</div>

<div>
  <span >$123 <p className='text-3xl font-semibold text-green-600'> $90.06</p></span>
  <button className='bg-white px-4 text-blue-800 py-1 mt-1 rounded'>Explore</button>
</div>

      </div>
    </>
  )
}

export default Offers

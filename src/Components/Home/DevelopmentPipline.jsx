import React, { useEffect, useState } from 'react'
import './dev.css'
const timer = 240;

const DevelopmentPipline = () => {
  const [count, setCount] = useState(0)
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  const [countThree, setCountThree] = useState(0)
  const [countFour, setCountFour] = useState(0)

  const handler = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    if (count <= 24) {
      setTimeout(handler, timer)
    }

    clearTimeout(timer);
  }, [count])


  const timer2 = 5;
  const handlerOne = () => {
    setCountOne(countOne + 1)
  }
  useEffect(() => {
    if (countOne <= 850) {
      setTimeout(handlerOne, timer2)
    }

    clearTimeout(timer2);
  }, [countOne])

  const timer3 = 70;
  const handlerTwo = () => {
    setCountTwo(countTwo + 1)
  }
  useEffect(() => {
    if (countTwo <= 75) {
      setTimeout(handlerTwo, timer3)
    }

    clearTimeout(timer3);
  }, [countTwo])



  const handlerThree = () => {
    setCountThree(countThree + 1)
  }
  useEffect(() => {
    if (countThree <= 673) {
      setTimeout(handlerThree, timer2)
    }

    clearTimeout(timer2);
  }, [countThree])



  const handlerFour = () => {
    setCountFour(countFour + 1)
  }
  useEffect(() => {
    if (countFour <= 751) {
      setTimeout(handlerFour, timer2)
    }

    clearTimeout(timer2);
  }, [countFour])
  return (
    <>
      <div className='relative'>
        <div className='flex justify-between z-10 p-14 right-0 text-center absolute -top-20 w-full text-white bg-gradient-to-r from-[#1F51C6] to-[#1F51C6] bg-opacity-80 font-thin '>

          <div>
            <h1 className='counter text-4xl font-semibold' >{count}</h1>
            <p>Years Experience</p>
          </div>

          <div>
            <h1 className='counter text-4xl font-semibold' >{countOne}</h1>
            <p>Medicament Invented</p>
          </div>

          <div>
            <h1 className='counter text-4xl font-semibold' >{countTwo}</h1>
            <p>Awards Winned</p>
          </div>

          <div>
            <h1 className='counter text-4xl font-semibold'>{countThree} k</h1>
            <p>Happy Clients</p>
          </div>

          <div>
            <h1 className='counter text-4xl font-semibold'>{countFour}</h1>
            <p>Pharmacies Partners</p>
          </div>

        </div>
        <div className='bg-slate-800 '>
        <div className=' relative z-0 h-[920px] mb-18 '>
            <img src='https://turkishdoc.com/wp-content/uploads/2023/01/image-2-5.png' 
            className='w-[900px] h-[920px] -left-5 justify-self-start inset-y-3 bg-blue-gray-800' />
          </div>
        <div className='bg-transparent absolute top-10 '>
        
          

          <div className='pipeline mt-24 ml-[650px]  w-96 '>
            <h1 className='text-3xl font-semibold text-white mb-6'>Development pipeline</h1>
            <p className='text-md text-cyan-300 mb-7'>Balanced mix of new substance developments and life cycle management opportunities.</p>

            <p className='text-gray-400 mb-4'>We focus on core competencies and its many years of experience. We thus hold a leading position in many therapeutic fields: for instance in the treatment of hemophilia and multiple sclerosis, in contrast media and oral contraception. We are also striving for such a leading position in oncology.</p>

            <div className='flex justify-between mt-6 left-30 gap-12 '>
              <div className=' '>
                <div className='animation w-40 h-40 bg-wite mb-8 rounded hover:bg-blue-800 hover:border-4 text-center hover:text-white hover:border-gray-100'>
                  <h1 className='text-3xl bg-wite hover:text-white font-semibold p-5'>01</h1>
                  <p className='text-xl font-semibold opacity-80'>Research & FPreclinical</p>
                </div>
                <div className='animation w-40 h-40 bg-wite mb-8 rounded hover:border-4 text-center hover:text-white hover:border-gray-100 hover:bg-blue-800'>
                  <h1 className='text-3xl text-blue-700 font-semibold p-5 hover:text-white'>02</h1>
                  <p className='text-xl font-semibold opacity-80'>Starting <br />Phase</p>
                </div>  </div>

              <div>
                <div className='animation w-40 h-40 text-center bg-blue-700 hover:border-4  hover:text-white hover:border-gray-100 mb-8 rounded hover:bg-blue-800'>
                  <h1 className='text-3xl text-blue-700 font-semibold p-5 hover:text-white'>03</h1>
                  <p className='text-xl font-semibold opacity-80'>Medium<br /> Phase</p>
                </div>
                <div className='animation w-w-40 h-40 hover:border-4 text-center hover:text-white hover:border-gray-100 bg-blue-700 mb-8 rounded hover:bg-blue-800'>
                  <h1 className='text-3xl text-blue-700 font-semibold p-5 hover:text-white'>04</h1>
                  <p className='text-xl font-semibold opacity-80'>Finising <br />Phase</p></div>

              </div>

              <div>

                <div className='transition delay-300 duration-300 ease-in-out ... animation w-40 h-40 hover:border-4 text-center hover:text-white hover:border-gray-100 bg-blue-700 mb-8 rounded mr-7 hover:bg-blue-800'>
                  <h1 className='text-3xl text-blue-700 font-semibold p-5 hover:text-white'>05</h1>
                  <p className='text-xl font-semibold opacity-80'>After Drug Approval</p>
                </div>
                <div className=' animation w-40 h-40 hover:border-4 text-center hover:text-white hover:border-slate-300 bg-blue-700 mb-8 rounded hover:bg-blue-800'>
                  <h1 className=' text-3xl text-blue-700 font-semibold p-5 hover:text-white'>06</h1>
                  <p className='text-xl font-semibold opacity-80'>Drugs<br /> Production</p>
                </div>
              </div></div>
            </div>
            </div>
          </div>
        </div>
        <div className='mb-24'></div>
    </>
  )
}

export default DevelopmentPipline

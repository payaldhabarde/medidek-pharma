import React, { useEffect, useState } from 'react'
import './dev.css'
const timer = 240;

const LiveCients = () => {
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
  
      <div className=''>
        <div className='flex justify-between z-10 p-14 right-0 text-center  -top-20 w-full text-white bg-gradient-to-r from-[#1F51C6] to-[#1F51C6] bg-opacity-80 font-thin '>

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
        </div>
  
  )
}

export default LiveCients

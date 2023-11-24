import React, { useEffect, useState } from 'react'
const timer= 100;
const Pipline = () => {
  const [count,setCount] = useState(0)
  const [countone,setCountOne] = useState(0)
  const [count2,setCount2] = useState(0)
  const [count3,setCount3] = useState(0)
const handler =()=>{
  setCount(count +1) 
}
  useEffect(() => {
    if(count <= 25 ){
      setTimeout(handler , timer)
    }

    clearTimeout(timer);
  }, [count])

  const handlerone =()=>{
    setCount(countone +1) 
  }
    useEffect(() => {
      if(countone <= 893 ){
        setTimeout(handlerone , timer)
      }
  
      clearTimeout(timer);
    }, [countone])

    const handlertwo =()=>{
        setCount(counttwo +1) 
      }
        useEffect(() => {
          if(counttwo <= 75 ){
            setTimeout(handlertwo , timer)
          }
      
          clearTimeout(timer);
        }, [counttwo])

        const handlerthree =()=>{
            setCount(countthree +1) 
          }
            useEffect(() => {
              if(countthree <= 673 ){
                setTimeout(handlerthree , timer)
              }
          
              clearTimeout(timer);
            }, [countthree])

            const handlerfour =()=>{
                setCount(countfour +1) 
              }
                useEffect(() => {
                  if(countfour <= 751 ){
                    setTimeout(handlerfour , timer)
                  }
              
                  clearTimeout(timer);
                }, [countfour])
  return(
    <>
    </>
  )
};

export default Pipline
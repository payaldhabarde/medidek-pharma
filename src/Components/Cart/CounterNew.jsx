import React, { useState } from "react";
import './autoSlide.css'
const CounterNew = () => {
   
        const [count, setCounter] = useState(0);
      const increaseAndLog = () =>{
        setCounter(count + 1)
        console.log("we are logging");
      }
        return(
            <>
  <button onClick={increaseAndLog}>add</button>

  <button onClick={()=>setCounter(count-1)}>sub</button>

  <p>{count}</p>
  


<div className="slide overflow-hidden w-full">
  <figure className="relative w-[700px] m-0 left-0 animation: 20s slider infinite">

    <img src="https://th.bing.com/th/id/R.e4b2c17c034722868c93a1f0ec04b4c8?rik=alNRpxS69p0uaQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-s7Pi03dL7io%2fTa7iPBU8GPI%2fAAAAAAAAAfo%2frNva-nxiIL0%2fs1600%2fflower09.jpg&ehk=MFXbzV1nYwHHSlEF4aTAqGop0k7Bp3s%2bVKkNDSjb%2fS4%3d&risl=&pid=ImgRaw&r=0" className="w-[600px] float-left"/>
    <img src="https://th.bing.com/th/id/R.3175dc540dfe6b9e4ac00517086e4700?rik=N5QK4nhTaaewfA&riu=http%3a%2f%2fwww.forestwander.com%2fwp-content%2foriginal%2f2011_02%2fbeautiful-pink-flower.jpg&ehk=odzj%2bukR0ES%2bVffERmcJ08qxlxnGZlOdQfyrBzhZj3A%3d&risl=&pid=ImgRaw&r=0" className="w-[600px] float-left"/>
    <img src="https://th.bing.com/th/id/R.224d7228691ef6fc2455f0e1ec52791b?rik=QJ0r1TQLYsrtoA&riu=http%3a%2f%2fcloudmind.info%2fwp-content%2fuploads%2f2014%2f12%2fblue-water-lily-flower-flowers-hd-wallpaper-beautiful-gallery-hd1.jpg&ehk=NvVhumUlyoj4etzuWQ1jlUt53mf9nO1liWbEjlLun94%3d&risl=&pid=ImgRaw&r=0" className="w-[600px] float-left"/>
    <img src="https://th.bing.com/th/id/OIP.Ut8fN3CZVjfRXcD701MmMgHaJC?pid=ImgDet&rs=1" className="w-[600px] float-left" />
  </figure>

</div>
            </>
        )
    }

export default CounterNew

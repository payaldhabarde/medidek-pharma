import React from 'react'
import Navbar1 from './Components/Navbar/Navbar1'
import Footer from './Components/Footer'
import {Routes, Route} from 'react-router-dom'
import OurTeam from './Components/Home/OurTeam'
import Home2 from './Components/Home/Home2'
import Home4 from './Components/Home/Products'
import Home5 from './Components/Home/AboutUs'
import Contact1 from './Components/Contact/Contact1'
import Blogs from './Components/Home/Blogs'
import Testimoniols from './Components/Home/Testimoniols'
import Contact2 from './Components/Contact/Contact2'
import Footer2 from './Components/Footer2'
import Demo from './Components/Demo'
import ProductSlider from './Components/Slider/ProductSlider'
const App = () => {
  return (
    <div>

<Navbar1/>
<Home2/> 
<OurTeam/> 
 <Blogs/>
 <div className='mt-24'></div>
 <Testimoniols/>
<Routes>

</Routes>

<Contact1/>
<div className='mb-32'></div>


<Footer2/>
   
    </div>
  )
}

export default App




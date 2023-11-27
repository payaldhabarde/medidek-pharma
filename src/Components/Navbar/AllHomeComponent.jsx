import React from 'react'
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
import Home2 from '../Home/Home2';
import OurTeam from '../Home/OurTeam';
import Blogs from '../Home/Blogs';
import Testimoniols from '../Home/Testimoniols';
import Contact1 from '../Contact/Contact1';
import Products from '../Home/Products';
import AboutUsHome from '../Home/AboutUsHome';
import DevelopmentPipline from '../Home/DevelopmentPipline';

import ProductHome from "../../NewComponent/ProductHome"
import HomeSlider from '../Slider/HomeSlider';
import Ourteam2 from '../Home/Ourteam2';
const AllHomeComponent = () => {
  return (
    <div>
      <HomeSlider/>
   <Ourteam2/>
   <Products/>
   
    </div>
  )
}

export default AllHomeComponent

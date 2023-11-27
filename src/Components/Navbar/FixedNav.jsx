import React from 'react'
import Navbar1 from './Navbar1'
import AllHomeComponent from './AllHomeComponent'

import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
import ProductHome from '../../NewComponent/ProductHome';
const FixedNav = () => {
  return (
    <>
      <div class="sticky top-0 z-50 bg-gray-50 ">
        <Navbar1/>
      <ProductHome/>
      <Navbar3 />
      </div>

      <AllHomeComponent/>
    </>
  )
}

export default FixedNav

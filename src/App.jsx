import React, { useState }  from 'react'
import Navbar1 from './Components/Navbar/Navbar1'
import Footer from './Components/Footer'
import {Routes, Route} from 'react-router-dom'
import OurTeam from './Components/Home/OurTeam'
import Home2 from './Components/Home/Home2'
import Home5 from './Components/Home/AboutUsHome'
import ContactDetails from './Components/Cart/ContactDetails'
import Blogs from './Components/Home/Blogs'
import Testimoniols from './Components/Home/Testimoniols'
import ContactUs from './Components/Contact/ContactUs'
import Footer2 from './Components/Footer2'
import Demo5 from './Components/Cart/Demo5'
import ProductSlider from './Components/Slider/ProductSlider'
import Register from './Components/Registration/Register'
import Front from './Components/Home/Front'
import Cart from './Components/Cart/Cart'
import PaginationNew from './Components/Cart/PaginationNew'
import NewProduts from './Components/Products/NewProducts'
import NewProducts from './Components/Products/NewProducts'
import ProductEnquiry from './Components/Products/ProductEnquiry'
import CounterNew from './Components/Cart/CounterNew'
import ProductsData from './Components/Products/ProductsData'
import ProductsView from './Components/Products/ProductsView'
import EnquiryForm from './Components/Products/EnquiryForm'
import Gallary1 from './Components/Gallary/Gallary1'
import Dental from './Components/Gallary/Dental'
import Pharmacists from './Components/Gallary/Pharmacists'
import Medical from './Components/Gallary/Medical'
import AboutOurSelf from './Components/About/AboutOurSelf'
import Blog1 from './Components/Blogs/Blog1'
import Image2 from './Components/Blogs/Image2'
import ClientTestimoniols from './Components/Home/ClientTestimoniols'
import ProductHome from './NewComponent/ProductHome'
import RegisterForm from './NewComponent/RegisterForm'
import ResetPassword from './NewComponent/ResetPassword'
import CommingSoon from './NewComponent/CommingSoon'
import RegisterUser from './NewComponent/RegisterUser'
import ShopByCategory from './NewComponent/ShopByCategory'
import Practice from './Practice1/Practice'
import DashboardHome from './NewComponent/DASHBOARD/DashboardHome'

import PharmaFooter from './NewComponent/PharmaFooter'
import Sidebar from './NewComponent/DASHBOARD/Sidebar'
import AllDashComponent from './NewComponent/DASHBOARD/AllDashComponent'

import DashboardTest from './NewComponent/DASHBOARD/DashboardTest'
const App = () => {
  const [register,setRegister] = useState(false)

  return (
    <div>
  

<Routes>
  <Route path='/a' element={<ProductHome/>}/>
<Route path='/' element={<Navbar1/>}/>
<Route path='/newproducts' element={<NewProducts/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/contactus' element={<ContactUs/>}/>
<Route path='/productsview' element={<ProductsView/>}/>
<Route path='/enquiryform' element={<EnquiryForm/>}/>
<Route path='/productsdata' element={<ProductsData/>}/>
<Route path='/gallary1' element={<Gallary1/>}/>
<Route path='dental' element={<Dental/>}/>
<Route path='/pharmacists' element={<Pharmacists/>}/>
<Route path='/medical' element={<Medical/>}/>
<Route path='/about' element={<AboutOurSelf/>}/>

<Route path='/blognw' element={<Blog1/>}/>
<Route path='/image2' element={<Image2/>}/>
<Route path='/foot' elemet={<Footer2/>}/>
<Route path='/signup' element={<RegisterForm/>}/>
<Route path='/reset' element={<ResetPassword/>}/>
<Route path='/soon' element={<CommingSoon/>}/>
<Route path='/regist' element={<RegisterUser/>}/>
<Route path='/category' element={<ShopByCategory/>}/>
<Route path='/practice1' element={<Practice/>}/>
</Routes>
{/* <EnquiryForm/> */}
<AllDashComponent/>
<DashboardTest/>
    </div>


  )
}

export default App




import React from 'react'
import HealthConcerns from './HealthConcerns'
import Delivery from './Delivery'
import Offers from './Offers';
import RecommendedProducts from './RecommendedProducts';
import BuyMedicine from './BuyMedicine';
import ExpertAdvice from './ExpertAdvice';
import AboutPharma from './AboutPharma';
import PharmaFooter from './PharmaFooter';
import RegisterForm from './RegisterForm';
import RegisterForm2 from './RegisterForm2';

import NavbarHome from './NavbarHome';
const AllComponents = () => {
  return (
    <>
        <NavbarHome/>
        <Delivery/>
       <HealthConcerns/>
        <Offers/>
        <RecommendedProducts/>
        <BuyMedicine/>
        <ExpertAdvice/>
    </>
  )
}

export default AllComponents

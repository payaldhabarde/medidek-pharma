import React from 'react'
import { GiCancer,GiHeartOrgan } from "react-icons/gi";
import { BiSolidInjection } from "react-icons/bi";
import { LuBaby } from "react-icons/lu";
import { MdOutlineBloodtype } from "react-icons/md";
import { FaNutritionix } from "react-icons/fa6";
import { TbDentalBroken } from "react-icons/tb";
import { GiLiver } from "react-icons/gi";
import { GiMedicalThermometer } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { FaVirusCovid } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { GiStomach } from "react-icons/gi";
import { RiStethoscopeLine } from "react-icons/ri";

import { FaRibbon } from "react-icons/fa6";

const HealthConcerns = () => {
  return (
    <>
    <h1 className='mt-8 ml-6'>Shop By Health Concerns</h1>
     <div>
    <div className='grid grid-cols-4 mt-9 ml-24'>
        <span className='flex gap-2'>
         <FaRibbon className='w-6 h-8 text-blue-800'/>
          Cancer
        </span>

        <span className='flex gap-2'>
         <BiSolidInjection className='w-6 h-8 text-blue-800'/>
          Personal
        </span>

        <span className='flex gap-2'>
         <FaHeartbeat className='w-6 h-8 text-blue-800'/>
          Cardiac
        </span>

        <span className='flex gap-2'>
         <FaBrain className='w-6 h-8 text-blue-800'/>
          Nerve
        </span>
    </div>

    <div className='grid grid-cols-4 mt-9 ml-24'>
        <span className='flex gap-2'>
         <FaRibbon className='w-6 h-8 text-blue-800'/>
          Cancer
        </span>

        <span className='flex gap-2'>
         <BiSolidInjection className='w-6 h-8 text-blue-800'/>
          Osteoartheitis
        </span>

        <span className='flex gap-2'>
         <RiStethoscopeLine className='w-6 h-8 text-blue-800'/>
          Ear, nose & throat
        </span>

        <span className='flex gap-2'>
         <GiStomach className='w-6 h-8 text-blue-800'/>
          Stomach/ Gastrointestinal
        </span>
    </div>


    <div className='grid grid-cols-4 mt-9 ml-24'>
        <span className='flex gap-2'>
         <GiHeartOrgan className='w-6 h-8 text-blue-800'/>
          Cancer
        </span>

        <span className='flex gap-2'>
         <GiKidneys className='w-6 h-8 text-blue-800'/>
         Kidney
        </span>

        <span className='flex gap-2'>
         <FaVirusCovid className='w-6 h-8 text-blue-800'/>
         Infectious
        </span>

        <span className='flex gap-2'>
         <FaEye className='w-6 h-8 text-blue-800'/>
          Opathamonology
        </span>
    </div>

    

    <div className='grid grid-cols-4 mt-9 ml-24'>
        <span className='flex gap-2'>
         <BiSolidInjection className='w-6 h-8 text-blue-800'/>
          Immunization
        </span>

        <span className='flex gap-2'>
         <GiLiver className='w-6 h-8 text-blue-800'/>
          Liver / Hapatobiliary
        </span>

        <span className='flex gap-2'>
         <img src='imgs/allergy.png' className='w-11 h-7 '/>
          Genetic, Immune, Allergic
        </span>

        <span className='flex gap-2'>
         <GiMedicalThermometer  className='w-6 h-8 text-blue-800'/>
     Diabetes
        </span>
    </div>

    <div className='grid grid-cols-4 mt-9 ml-24'>
        <span className='flex gap-2'>
         <TbDentalBroken className='w-6 h-6 text-blue-800'/>
         Dentomaxillofacial
        </span>

        <span className='flex gap-2'>
         <FaNutritionix className='w-6 h-6 text-blue-800'/>
        Nutrition
        </span>

        <span className='flex gap-2'>
         <MdBloodtype className='w-6 h-6 text-blue-800'/>
          Hematology
        </span>

        <span className='flex gap-2'>
         <LuBaby className='w-6 h-6 text-blue-800'/>
          Baby & Children
        </span>
    </div>
    </div> 
    </>
  )
}

export default HealthConcerns
import React from 'react'
import { BiLogoFacebook,BiLogoInstagram, BiLogoTwitter,BiLogoGoogle,BiLogoLinkedin,BiLogoYoutube } from "react-icons/bi";

const Footer2 = () => {
  return (
    <>
    <div className=''>


    <footer class="bg-blue-800 rounded-md shadow dark:bg-blue-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-2">
        <div class="sm:flex sm:items-center sm:justify-between">
           <div> <a href="https://medidek.in/" class="flex items-center mb-4 sm:mb-0">
            <img src='/imgs/MedidekWhite.png' className='w-80 h-40 '/><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <div className='flex gap-4 ml-10 mt-5 text-2xl text-white '>
        <BiLogoFacebook/>
        <BiLogoTwitter/>
        <BiLogoGoogle/>
        <BiLogoLinkedin/>
        <BiLogoYoutube/>
        <BiLogoInstagram/>
        </div></div>
            <ul class="flex flex-wrap items-center text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://medidek.in/" class="hover:underline">Medidek™</a>. All Rights Reserved.</span>
    </div>
</footer>



</div>
    </>
  )
}

export default Footer2

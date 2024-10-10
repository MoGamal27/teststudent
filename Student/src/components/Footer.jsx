import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return <>
  
  
<footer className=" bg-slate-50 ">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <div  className="flex items-center">

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Arabe</span>
        </div>
        <div className="flex pt-4 gap-1">
            <NavLink to={'https://wa.me/972502926398'}><FaWhatsapp className='text-3xl text-teal-700'/></NavLink>
            <NavLink to={'https://www.facebook.com/profile.php?id=61553501452544&mibextid=ZbWKwL'}><RiFacebookCircleLine className='text-3xl font-bold text-teal-700'/></NavLink>
            <NavLink to={'https://www.facebook.com/profile.php?id=61553501452544&mibextid=ZbWKwL'}><FaInstagram className='text-3xl font-bold text-teal-700'/></NavLink>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900   dark:text-black">Company Specialization</h2>
          <ul className="text-gray-500 dark:text-black font-medium">
            <li className="mb-4">
              <p>Reparatory English for school</p>
            </li>
            <li className='pb-2'>
              <p>English for Students</p>
            </li>
            <li className='pb-2'>
              <p>English for Adults</p>
            </li>
            <li className='pb-2'>
              <p>Business English</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-black">information</h2>
          <ul className="text-gray-500 dark:text-black font-medium">
            <li className="mb-4">
            <Link>terms and conditions</Link>
            </li>
            <li>
              <Link>privacy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-black">Contact Info</h2>
          <ul className="text-gray-500 dark:text-black font-medium">
            <li className="mb-4">
              <Link><span>what's App</span>  - +972 54-648-7767</Link>
            </li>
            <li>
              <Link>Email-eteachermode@gmail.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <hr />
    <p className='text-center pt-2'>© Copyright 2023 by Arabe</p>
  </div>
</footer>

  
  
  </>
}

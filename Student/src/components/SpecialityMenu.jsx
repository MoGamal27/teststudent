import React from 'react'
import { GiTeacher } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

export default function SpecialityMenu() {
  return (
  <section className='flex max-w-7xl mx-auto px-4 sm:px-6 lg:px8 items-center flex-col sm:flex-row'>
        <div className='flex flex-col items-center gap-4 py-6 text-gray-800'>
      <div className='flex gap-8 rounded-lg mx-auto p-16 bg-white px-4 sm:px-6 lg:px-8 items-center flex-col sm:flex-row'>
    <div className='justify-center items-center flex'>
    <p><span>Created for the academy Curriculum</span> <br /> Lorem ipsum dolor sit amet. </p>
    <div className='flex border-2 bg-teal-800 text-white text-3xl rounded-full p-4'>
     <GiTeacher/>
    </div>
    </div>
    <div className='justify-center items-center flex'>
    <p><span>Created for the academy Curriculum</span> <br /> Lorem ipsum dolor sit amet. </p>
    <div className='flex border-2 bg-teal-800 text-white text-3xl rounded-full p-4'>
     <FaBookOpen/>
    </div>
    </div>
    <div className='justify-center items-center flex'>
    <p><span>Created for the academy Curriculum</span> <br /> Lorem ipsum dolor sit amet. </p>
    <div className='flex border-2 bg-teal-800 text-white text-3xl rounded-full p-4'>
     <SiBookstack/>
    </div>
    </div>
      </div>
    </div>
  </section>
  )
}

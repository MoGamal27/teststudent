import React from 'react'
import logo1 from "/src/assets/assets_frontend/comp-video-bg.png"
import { useNavigate } from 'react-router-dom'
export default function Banner() {

    const navigate = useNavigate()

  return (
    <div className='flex items-center justify-center bg-slate-200 p-10 rounded-lg px-6 sm:px-10  md:px-14 lg:px-12 my-20 md:mx-10'>
        <div>
            <div>
                <p className='font-bold text-2xl'>Learn More About Arabe</p>
                <p className='font-semibold mt-4'>Arabe is a platform for learning and mastering the English language, offering convenient and easy methods for all ages and professions. At Tulkka, we are dedicated to helping people achieve their English language goals via dedicated 1 on 1 classes. With our affordable pricing, high quality lessons and flexible options, learning English has never been easier. Join us today and start your English language journey with Tulkka.</p>
            </div>
            <button onClick={()=> navigate('/about')} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Discover Now</button>
        </div>


        <div className='hidden items-center justify-center md:block w-[1980px] '>
             <img className='w-full  'src={logo1} alt="" />
        </div>
    </div>
  )
}

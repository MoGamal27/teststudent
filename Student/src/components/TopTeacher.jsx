import React, { useContext } from 'react'
import { doctors } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

export default function TopTeacher() {



       const navigate =  useNavigate();
       const {doctors} = useContext(AppContext);
    
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Get to Know Our Teachers</h1>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,2).map((item , index)=>(
            <div onClick={()=> navigate(`/apponintment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                    </div>
                    <p>{item.name}</p>
                    <p>{item.speciality}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

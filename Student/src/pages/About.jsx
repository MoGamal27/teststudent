import React from 'react'
import logo from "/src/assets/assets_frontend/about-img.png"
export default function About() {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>us</span></p>
      </div>
        
        <div className='my-10 pb-20  justify-center  flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[380px]' src={logo} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to Arabe, the leading platform for English language studies with a unique focus on providing tailored materials to suit the curriculum in Israel. Our commitment to excellence is reflected in our specialized programs designed to cater to various age groups and learning objectives.</p>
            <p>At Arabe, we believe that knowledge is power and that mastering the English language is key to unlocking a world of opportunities. Our carefully selected teachers have over a decade of experience in the field and possess exceptional skills to ensure that our students receive the best possible education. We believe that every student deserves the chance to succeed, and that's why we offer flexible and affordable options to suit every budget and schedule.</p>
            <p>Our goal is to empower our students to achieve their academic and professional goals by providing them with the necessary tools and support to excel in their classes and improve their language skills. Whether it's through practicing the lessons they learn at school, preparing for exams, or receiving individualized attention, we are committed to providing a high-quality education to all our students.</p>
          </div>
        </div>
    </div>
  )
}

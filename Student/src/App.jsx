import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Teacher from './pages/Teacher'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyApponint from './pages/MyApponint'
import Apponint from './pages/Apponint'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='mx-4 sm:mx-[5%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/teacher/:speciality' element={<Teacher/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-apponint' element={<MyApponint/>}/>
        <Route path='/apponintment/:docId' element={<Apponint/>}/>
      </Routes>
    <Footer/>
    </div>
  )
}

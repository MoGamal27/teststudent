import React from 'react'
import { useParams } from 'react-router-dom'

export default function Teacher() {

  const {speciality} =useParams();
  console.log(speciality);
  
  return (
    <div>Teacher</div>
  )
}

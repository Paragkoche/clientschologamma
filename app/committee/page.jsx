"use client";
import React, { useEffect } from 'react'

function Committee() {
  useEffect(() => {
    const fetchData = async()=>{
      const res =await fetch('https://adminab9211.vercel.app/api/committee/')
      const data = await res.json()
      console.log(data)
    }
fetchData()
  }, [])
  
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
    <h1 className='text-[64px] text-green-500 drop-shadow-xl '>Comming Soon...</h1>
  </div>
  )
}

export default Committee

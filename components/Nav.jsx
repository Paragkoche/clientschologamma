"use client"
import { navLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import { useState } from 'react'

// bg-[#00a0ee]
function Nav() {
const [toggle,setToggle] = useState(false)
  return (
    <div className=''>
       
   <nav className='hidden md:flex justify-between  backdrop-blur-md  shadow-xl  px-[10px] py-[15px] fixed z-[50] w-screen ' >
  
    <div className="">
        <Image src={'/schologamma_-removebg-preview.png'} width={50} height={50} className='w-[50px] height-[50px]' />
    </div>
    <div className=" flex flex-row items-center ">

    {navLinks.map(item=>(
        <div className="text-[18px] mx-[10px] font-semibold text-cyan-800 hover:underline  hover:text-cyan-500  drop-shadow-md"><Link href={item.path}>{item.name}</Link></div>
    ))}
    </div>

   </nav>

{/* for mobile */}

   <nav className='flex md:hidden justify-center  flex-col backdrop-blur-md  shadow-xl  px-[10px] py-[15px] fixed z-[50] w-screen ' >
  <div className="flex items-end justify-between ">
  <div className="">
      <Image src={'/schologamma_-removebg-preview.png'} width={50} height={50} className='w-[50px] height-[50px]' />
  </div>
<button className="text-[70px] text-cyan-700" onClick={()=>setToggle(pre =>!pre)}>{toggle&&<GrClose className='text-cyan-700 text-[40px]'/>} {toggle===false && <FiMenu />}</button>
  </div>


  <div className={`flex flex-col justify-start h-screen items-center ${toggle?'flex':'hidden'}`}>

  {navLinks.map((item ,i)=>(
      <div key={i}className="text-[18px] mx-[10px] font-semibold text-cyan-800 hover:underline  hover:text-cyan-500  drop-shadow-md"><Link href={item.path}>{item.name}</Link></div>
  ))}
  </div>




 </nav>

    </div>
  )
}

export default Nav

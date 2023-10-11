import React from 'react'
import { cardData } from '@/constant'
import Image from 'next/image'
const AdCard = ({name , position ,url}) =>{
    return (  
        <div class="w-[300px] h-[370px] m-[40px] bg-slate-50 rounded-md shadow-lg flex justify-center flex-col items-center ">
    <div class="">
      <Image src={url} width={200} height={200} className='w-[200px] h-[200px] rounded-full ' alt="img" />
    </div>
    <div class="">
      <div class="text-center font-semibold text-gray-600">
        <h2 >{name} <br /><span className='text-orange-400'>{position}</span></h2>
   
      </div>
    </div>
  </div>)
}

function Admin() {
  return (
    <div>
      {/* <section className="adhead"> */}
        <h3 className='text-black text-center font-extrabold text-[45px]'>Our Admins</h3>
    <div className="flex flex-row flex-wrap justify-center items-center ">
        {cardData?.map((item ,index)=>(
            <AdCard key={index} {...item}/>

        ))}
{/* <AdCard /> */}
{/* <AdCard /> */}
{/* <AdCard /> */}

    </div>
    </div>
  )
}

export default Admin

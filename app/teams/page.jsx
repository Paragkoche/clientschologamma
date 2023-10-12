"use client"
import ProfileClientCard from '@/components/ProfileClientCard'
import React, { useEffect, useState } from 'react'

function Teams() {
// const [dataTeam , setDataTeam] = useState([])
//   useEffect(() => {
//     const fetchData =async()=>{
//       // console.log(process.env.ADMIN_URL)
//   const res = await fetch(`${process.env.ADMIN_URL}/api/teams/viewid/2023/` )

//       // const res =await fetch(`${process.env.ADMIN_URL}/api/`)
// const data =await res.json();
// console.log("ima here")
// console.log(data)
//     }

//     fetchData();
//   }, [])
  
  return (
    
    <div className='flex justify-center items-center h-screen w-screen'>
    <h1 className='text-[64px] text-green-500 drop-shadow-xl '>Comming Soon...</h1>
    

<div className="flex flex-row justify-around items-center flex-wrap w-[100%]">
  {/* {dataTeam?.filter(item=>item.type =="Admin").map(item =>(
   <ProfileClientCard key={item._id}  {...item} year={'2023'}  />
  ))} */}
</div>
  </div>
  
  )
}

export default Teams

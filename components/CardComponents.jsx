import { cardContent } from '@/constant'
import { Poppins } from 'next/font/google'
import React from 'react'
const poppins = Poppins({subsets:['latin','devanagari','latin-ext'] ,
weight:'700'})
import Image from 'next/image'
import Link from 'next/link'
const CardleftImage = ({title , description ,imageLink ,buttonClickLink ,side})=>{
  return (
    <section class="Event">

    <div class="Event-img">
    
        <Image src={imageLink} width={500} height={500} alt="event" class="cardimg "/>
    </div>
    <div class="Event-Content">
        <h3 class={`he1 ${poppins.className} drop-shadow-md mb-[30px]`}>{title}</h3>
        <p class="Event-Description text-gray-500 mb-[30px]">{description}</p>
      
        <div class="event-button">
        <button  class=" px-[16px] py-[8px]  rounded-lg border-4  border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white">
                   <Link href={buttonClickLink}> More...
                   </Link>  
                      </button>
        </div>
    </div>
</section>

  )
}

const CardRightImage = ({title , description ,imageLink ,buttonClickLink ,side})=>{
  return (
    <section class="Committee">
            <div class="Committee-img">
                
            <Image src={imageLink} width={500} height={500} alt="Committee" class="cardimg"/>
            </div>
            <div class="Committee-Content">
                <h3 class={`he2 ${poppins.className} drop-shadow-md mb-[30px]`}>{title}</h3>
                <p class="Committee-Description mb-[30px] ">{description}</p>
                <div class="committee-button">
                    <button  class=" px-[16px] py-[8px]  rounded-lg border-4  border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white">
                    <Link href={buttonClickLink}> More...
                   </Link> 
                      </button>
               </div>
            </div>
        </section>
  )
}
export default function CardComponents() {
  return (
    <div>
        
    <section className="cards">
 

{/* for card */}

<CardleftImage {...cardContent[0]}/>
<CardRightImage {...cardContent[1]} />
<CardleftImage {...cardContent[2]} />
      
      </section>
   
    </div>
  )
}

import Image from 'next/image'
import React from 'react'

export default function Favouriate() {
  return (
    <div className='bg-white p-3 rounded-full text-[#4FA38F]'>
       <Image src='/icons/Vector.png' alt="favouriate icon" 
          width={20}
              height={15}
        className='object-cover'
       />
       
      </div>
  )
}

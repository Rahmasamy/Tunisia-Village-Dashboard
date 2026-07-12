import React from 'react'
import Image from 'next/image'
// import logo from '/imgs/logo.png'
export default function Logo() {
  return (
    <>
     <Image src='/imgs/logo.png' alt="Logo" 
       width={60}
      height={50}
      className='object-cover'
     />
    </>
  )
}

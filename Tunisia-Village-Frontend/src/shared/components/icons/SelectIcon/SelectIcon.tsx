import Image from 'next/image'
import React from 'react'

export default function SelectIcon() {
  return (
    <>
      <Image src='/icons/select.png' alt="select icon" 
                     width={10}
                  height={10}
                    className='object-cover'
                   />
    </>
  )
}

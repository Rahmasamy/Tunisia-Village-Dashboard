import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../common/Buttons/button'

export default function LoginBtn() {
  return (
    <Link href="/login" passHref>
      <Button className='bg-[#008767] px-5 py-2 text-white flex gap-2 items-center rounded-3xl'>
        <span className='font-bold'>
          تسجيل الدخول
        </span>
        <Image src='/icons/person.png' alt="person icon"
          width={25}
          height={15}
          className='object-cover'
        />
      </Button>
    </Link>
  )
}

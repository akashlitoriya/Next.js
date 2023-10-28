import React from 'react'
import blog from "../../public/blog.png"
import Image from 'next/image'
import ButtonComp from './ButtonComp'
import Link from 'next/link'
const Hero = () => {
  
  return (
    <div className='w-10/12 mx-auto h-[calc(100vh-3.5rem)]  flex justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl font-bold font-serif'>Blog App</h1>
        <p className='text-lg font-semibold text-gray-600'>Unlock the World of Words: Your Ultimate Blogging Companion</p>
        {/* <ButtonComp /> */}
        <Link href="/signup" className='px-5 py-2 rounded-lg bg-gray-700 text-gray-50 w-fit hover:scale-105 transition-all duration-200'>Get Started</Link>
      </div>
      <div>
        <Image src={blog} alt='hero image' height={300} className=''/>
      </div>
    </div>
  )
}

export default Hero

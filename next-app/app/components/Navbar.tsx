import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-14 border-b-2 border-gray-700'>
      <div className='w-10/12 mx-auto h-full flex justify-between items-center'>
        <div className='font-semibold text-lg capitalize '>
            <Link href={"/"}>Blog App</Link>
        </div>
        <div className='flex flex-row gap-3'>
            <button className='border-2 border-gray-900 rounded-md px-5 py-2 transition-all duration-150 hover:text-gray-50 hover:bg-gray-900'>Login</button>
            <button className='border-2 border-gray-900 rounded-md px-5 py-2 transition-all duration-150 hover:text-gray-50 hover:bg-gray-900'>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

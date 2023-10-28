'use client'
import React from 'react'

interface btn  {
    text: string,
    handler: () => void
}

const ButtonComp = (btn:btn) => {
  return (
    <button onClick={btn.handler} className='px-5 py-2 bg-gray-800 text-gray-50'>{btn.text}</button>
  )
}

export default ButtonComp

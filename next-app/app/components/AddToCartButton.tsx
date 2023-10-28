'use client'
import React from 'react'

const AddToCartButton = () => {
  return (
    <div>
      <button onClick={()=>console.log("Add to cart")} className='p-3 bg-gray-700 rounded-lg text-white'>Add To Cart</button>
    </div>
  )
}

export default AddToCartButton

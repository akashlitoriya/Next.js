"use client"
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import Hero from './components/Home'
import Feed from './components/Feed'
export default function Home() {
  return (
    <main>
      {/* {/* <h1>HomePage of our Website</h1>
      {/* Anchor tag is a bad way to navigate in next.js. As it will reload the page and will not use the client side routing. */}
      {/* <a href='/user' className='text-blue-700'>User</a> 

       Use Link tag to navigate in next.js. It will use client side routing. 
      <Link href="/user" className='text-blue-600'>User</Link>
      <Link href="/user/profile" className='text-blue-600 block'>Profile</Link>

       <ProductCard />  */}

       <Hero />
       <Feed />
    </main>
  )
}

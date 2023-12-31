"use client"
import React, { use, useState, useEffect } from 'react'
import {getFeed} from '../utils/services/api'
import PostCard from './PostCard';
const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        const fetchPosts = async() => {
            const res = await getFeed();
            setPosts(res);
            //console.log("Posts response:", res);
        }
        fetchPosts();
    })
    if(posts.length === 0) return (<div className='w-full h-full flex justify-center items-center'><h1 className='text-3xl font-bold font-sans text-gray-950'>Loading...</h1></div>)
  return (
    <div className='w-full h-full'>
      <div className='w-10/12 mx-auto '>
        <h1 className='text-3xl font-bold font-sans text-gray-950'>Feed</h1>
        <div className='flex flex-col flex-wrap md:flex-row gap-7'>
          {
            posts?.length > 0 && (
              posts?.map((post:any)=>(
                <PostCard key={post?._id} {...post}/>
              ))
              
            )
          }
          
        </div>
      </div>
    </div>
  )
}

export default Feed

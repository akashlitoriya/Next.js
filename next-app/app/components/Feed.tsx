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
            console.log("Posts response:", res);
        }
        fetchPosts();
    })
  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold font-sans text-gray-950'>Feed</h1>
        <div className='flex flex-row gap-7'>
          {
            posts.length > 0 && (
              posts.map((post:any)=>(
                <PostCard key={post._id} {...post}/>
              ))
              
            )
          }
          
        </div>
      </div>
    </div>
  )
}

export default Feed

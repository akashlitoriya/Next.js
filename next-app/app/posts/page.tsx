"use client"
import React, { useEffect, useState } from 'react'
import { getPosts } from '../utils/services/api'
import { useAppSelector } from '../redux/app';
import PostCard from '../components/PostCard';

const PostComp = () => {
    const [posts, setPosts] = useState([]);
    const user = useAppSelector((state) => state.auth)
    useEffect(()=>{
        const fetchPosts = async()=>{
            const res = await getPosts(user._id, user.token);
            setPosts(res);
            console.log("Posts response:", res);
        }
        fetchPosts();
    },[])

    
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col w-10/12 mx-auto gap-10 mt-10'>
        <h1 className='text-3xl font-bold font-sans text-gray-950'>Posts</h1>
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

export default PostComp

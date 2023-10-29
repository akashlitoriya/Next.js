"use client"
import React, { useEffect, useState } from 'react'
import { getPosts } from '../utils/services/api'
import { useAppSelector } from '../redux/app';
import PostCard from '../components/PostCard';
import { useRouter } from 'next/navigation';
import {AiFillPlusCircle} from 'react-icons/ai'
const PostComp = () => {
    const router = useRouter();
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

    if(!posts) return <h1>No post Available</h1>
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col w-10/12 mx-auto gap-10 mt-10'>
        <h1 className='text-3xl font-bold font-sans text-gray-950'>Posts</h1>
        <div className='flex flex-col md:flex-row gap-7'>
          {
            posts.length > 0 && (
              posts.map((post:any)=>(
                <PostCard key={post._id} {...post}/>
              ))
              
            )
          }
          
        </div>
        <div className='absolute md:right-24 md:bottom-20'> 
          <button onClick={() => router.push('/createPost')} className='px-5 py-2 rounded-lg bg-gray-800 text-white flex flex-row items-center gap-2'><AiFillPlusCircle className="text-lg"/><span>Create Blog</span></button>
        </div>

      </div>
      
    </div>
  )
}

export default PostComp

"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { createPost } from '../utils/services/api'
import { useAppSelector } from '../redux/app'
const CreatePost = () => {
    const router = useRouter();
    const user = useAppSelector((state) => state.auth);
    const {register, handleSubmit} = useForm();
    const [file, setFile] = React.useState(null);
    const onSubmit =  async(data:any) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('body', data.body);
        if(file){
            formData.append('attachmentFile', file);
        }
        
        const res = await createPost(formData, user.token);
        console.log("Create post response:", res);
        router.push('/posts')
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file:any = e.target.files?.[0];
        if(file){
            setFile(file);
        }
    };
  return (
    <div className='w-full h-full mt-10'>
        <div className='mx-auto w-10/12 max-w-md md:max-w-fit flex flex-col gap-6 items-center justify-center'>
            <h1 className='text-3xl font-bold'>Create Post</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="title">Title</label>
                    <input type="text" {...register('title', {required: true})} className='p-3 w-full border-b-2 border-gray-800 bg-gray-200 text-gray-950 rounded-lg' placeholder='Enter Title'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="body">Body</label>
                    <textarea {...register('body', {required: true})} className='p-3 w-full border-b-2 border-gray-800 bg-gray-200 text-gray-950 rounded-lg' placeholder='Enter Body'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="attachment">Attachment</label>
                    <input type="file" onChange={handleFileChange}  className='p-3 w-full border-b-2 border-gray-800 bg-gray-200 text-gray-950 rounded-lg' />
                </div>
                <div className='flex flex-row justify-between'>
                    <button type="submit" className='px-5 py-2 bg-gray-900 hover:bg-gray-800 text-gray-50 transition-all duration-200 rounded-lg'>Submit</button>
                    <button onClick={()=>{router.push('/posts')}} className='px-5 py-2 bg-gray-300 text-gray-950 hover:bg-gray-400 transition-all duration-200 rounded-lg'>Cancel</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default CreatePost

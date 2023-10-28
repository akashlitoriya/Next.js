'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/authSlice'
import { login } from '../utils/services/api'
import { useRouter } from 'next/navigation'
const LoginComp = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const router = useRouter();
    const onSubmit = async(data:any) => {
        const res = await login(data);
        console.log("Login response:", res);
        dispatch(setUser(res));
        router.push('/posts');
    }

  return (
    <div className='w-full h-full mx-auto'>
      <div className='flex flex-col gap-10 justify-center items-center mt-20'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type='email' className='border-b-2 rounded-lg bg-gray-100 border-gray-700 text-gray-950 p-3' placeholder='Enter your email' {...register('email', {required: true})}/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='password'>Password</label>
                <input type='password' className='border-b-2 rounded-lg bg-gray-100 border-gray-700 text-gray-950 p-3' placeholder='Type your password' {...register('password', {required: true})}/>
            </div>
            <div className='flex flex-row justify-between items-start'>
                <button className='px-5 py-2 rounded-md bg-gray-950 text-gray-50 hover:bg-gray-800 transition-all duration-200' type='submit'>Login</button>
                <button className='px-5 py-2 rounded-md bg-gray-400 text-gray-950 hover:bg-gray-300 transition-all duration-200' type='reset'>Cancel</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginComp

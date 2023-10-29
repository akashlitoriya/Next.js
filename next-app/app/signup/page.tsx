'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { signup } from '../utils/services/api';
import { useRouter } from 'next/navigation';
const SignUpComp = () => {
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = async(data:any) => {
        const res = await signup(data);
        router.push('/login')
    }
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex flex-col gap-7 items-center justify-center mt-20'>
        <h1 className='text-3xl font-bold'>Signup</h1>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name<sup className='text-red-700 text-lg'>*</sup></label>
                <input type='text' {...register("name", {required: true})} className='border-b-2 rounded-lg bg-gray-100 border-gray-700 p-3 text-gray-950' placeholder='Enter your name'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email<sup className='text-red-700 text-lg'>*</sup></label>
                <input type='email' {...register("email", {required:true})} className='border-b-2 rounded-lg bg-gray-100 border-gray-700 text-gray-950 p-3' placeholder='Enter your email'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='password'>Password<sup className='text-red-700 text-lg'>*</sup></label>
                <input type='text' {...register("password", {required:true})} className='border-b-2 rounded-lg bg-gray-100 border-gray-700 text-gray-950 p-3' placeholder='Type your password'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='confirmPassword'>Confirm Password<sup className='text-red-700 text-lg'>*</sup></label>
                <input type='text' {...register("confirmPassword", {required:true})} className='border-b-2 rounded-lg bg-gray-100 border-gray-700 text-gray-950 p-3' placeholder='Re-type your password'/>
            </div>
            <div className='flex justify-between'>
                <button type='submit' className='px-5 py-2 bg-gray-950 text-gray-50 transition-all duration-200 hover:bg-gray-800 rounded-md'>Sign Up</button>
                <button type='reset' className='px-5 py-2 bg-gray-500 text-gray-950 rounded-md hover:bg-gray-300 transition-all duration-200'>Cancel</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpComp

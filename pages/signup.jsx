import React,{useState} from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const signup = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <div className="fixed inset-0 flex bg-white max-w-xxl items-center justify-center bordered shadow-sm bg-black bg-opacity-50 z-50">
      <div className="bg-pink-300  p-6 w-full max-w-md shadow-lg">
        <Link href="/" className='btn btn-sm btn-circle btn-ghost hover:bg-red-400 hover:text-white relative float-right bg-black text-white right-2 top-1 text-white'>X</Link>
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit((data) => console.log(data))} className="space-y-4">
        <div>
            <label className="block text-sm font-medium mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full border border-gray-300 rounded px-3 py-2"
             {...register('fullname', { required: true })}
              placeholder='Enter your full name'
            />
            {errors.fullname && <p  className='error text-red-500'>Name is required.</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              {...register('email', { required: true })}
              placeholder='Enter your email'
            />
            {errors.email && <p  className='error text-red-500'>Email is required.</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
                {...register('password', { required: true })}
              placeholder='Enter your password'
            />
            {errors.password && <p  className='error text-red-500'>Password is required.</p>}
          </div>
          <div className="redirect">
            <Link href="/"><h2 className='text-bold text-red-600'>Have account? </h2></Link>
            
          </div>
          <div className="flex justify-center gap-2">
            <button type="submit" className="px-6 py-2 cursor-pointer hover:bg-red-400 hover:text-white bg-green-600 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default signup

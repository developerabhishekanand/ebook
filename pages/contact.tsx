import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <div className="flex bg-zinc-200  p-8 bg-white max-w-xl m-auto mt-8 items-center justify-center  shadow-sm bg-black bg-opacity-50 z-50">
      <div className="p-6 bg-white bordered w-full max-w-md shadow-md">
        <Link href="/" className='btn btn-sm btn-circle btn-ghost hover:bg-red-400 hover:text-white relative float-right bg-black text-white right-2 top-1 text-white'>X</Link>
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit((data) => console.log(data))} className="space-y-4">
        <div>
            <label className="block text-sm font-medium mb-1" htmlFor="fullName">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded px-3 py-2"
             {...register('name', { required: true })}
              placeholder='Enter your name'
            />
            {errors.name && <p  className='error text-red-500'>Name is required.</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              {...register('email', { required: false })}
              placeholder='Enter your email'
            />
            {errors.email && <p  className='error text-red-500'>Email is optional.</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Message
            </label>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Type your message </legend>
              <textarea className="textarea h-24" placeholder="Message"></textarea>
              <div className="label">Optional</div>
            </fieldset>
          </div>
          <div className="flex justify-start gap-2">
            <button type="submit" className="px-6 py-2 cursor-pointer hover:bg-red-400 hover:text-white bg-blue-600 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact

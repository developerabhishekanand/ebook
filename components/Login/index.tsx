// components/LoginModal.tsx
'use client';

import { useLoginModal } from "../../context/LoginModalContext";
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export const LoginModal = ()=> {
  const { isOpen, closeModal } = useLoginModal();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bordered shadow-sm bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <button className='btn btn-sm btn-circle btn-ghost hover:bg-red-400 hover:text-white relative float-right bg-black text-white right-2 top-1 text-white' onClick={closeModal}>X</button>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit((data) => console.log(data))} className="space-y-4">
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
            {errors.password && <p className='error text-red-500'>Password is required.</p>}
          </div>
           <div className="not-registered flex justify-start gap-2">
              <h2>Not Registered ?  </h2><Link href="/signup" className='text-red-600 hover:text-red-800' onClick={closeModal}> SignUp! </Link>
            </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

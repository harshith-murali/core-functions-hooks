"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Login = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/products");
    }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg'>Go to Products</button>
    </div>
  )
}

export default Login

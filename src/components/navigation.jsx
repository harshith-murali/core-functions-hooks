"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
const Navigation = () => {
    const pathname = usePathname();

    const isActive = (path) => pathname === path ? 'text-gray-300 underline' : 'text-white';

  return (
    <div>
        <nav className='bg-gray-800 text-white p-4'>
            <Link 
            href='/about/dashboard'
            className={`hover:text-gray-300 ${isActive('/about/dashboard')}`}
            >
                Dashboard
            </Link>

            <Link 
            href='/about/settings'
            className={`ml-4 hover:text-gray-300 ${isActive('/about/settings')}`}
            >
                Settings
            </Link>
        </nav>
    </div>
  )
}

export default Navigation

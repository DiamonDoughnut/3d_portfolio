'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils'

const Navbar = () => {
    const path = usePathname();
    console.log(path)
  return (
    <header className='header'>
        <Link href={'/'} className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
        <p className='blue-gradient_text'>CS</p>
        </Link>
        <nav className='flex text-lg gap-7 font-medium'>
            <Link href={'/about'} className={cn(path === '/about' ? "text-blue-500" : "text-white")}>
              About
            </Link>
            <Link href={'/projects'} className={cn(path === '/projects' ? "text-blue-500" : "text-white")}>
              Projects
            </Link>
        </nav>
    </header>
  )
}

export default Navbar
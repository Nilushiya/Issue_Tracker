'use client'
import classNames from 'classnames';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
    const currentPath = usePathname()
    const links = [
        {label : 'Dashboard' , href:'/'},
        {label : 'Issues' , href:'/issues'}
    ]
  return (
    <nav className='flex space-x-4 px-6 border-b mb-4 h-14 items-center'>
        <Link href ="/"><AiFillBug /></Link>
        <ul className='flex space-x-4'>
            {links.map(link => 
                <Link 
                    href={link.href} 
                    key={link.href} 
                    // className={`${link.href=== currentPath ? 'text-zinc-900':'text-zinc-400'} hover:text-zinc-900 transition-colors`}>
                    className={
                        classNames({
                            'text-zinc-900': link.href === currentPath,
                            'text-zinc-500': link.href !== currentPath,
                            'hover : text-zinc-800 transition-colors': true
                        })
                    }>
                    {link.label}
                </Link>
            )}
        </ul>
    </nav>
  )
}

export default NavBar
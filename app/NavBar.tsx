import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
    const links = [
        {label : 'Dashboard' , href:'/'},
        {label : 'Issues' , href:'/issues'}
    ]
  return (
    <nav className='flex space-x-4 px-6 border-b mb-4 h-14 items-center'>
        <Link href ="/"><AiFillBug /></Link>
        <ul className='flex space-x-4'>
            {links.map(link => 
                <Link href={link.href} key={link.href} className='text-zinc-400 hover:text-zinc-900 transition-colors'>{link.label}</Link>
            )}
        </ul>
    </nav>
  )
}

export default NavBar
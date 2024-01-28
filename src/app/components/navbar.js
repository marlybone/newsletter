"use client"
import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const navigationLinks = [
    { href: '/', text: 'Home'},
    { href: '/About', text: 'About'},
    { href: '/Spotlight', text: 'Spotlight'}
   ]
  function Navigate({href, text}) {
    const router = useRouter();
    const isActive = router.asPath === href;
     return (
      <li>
      <NextLink href={href}
      className={`${isActive
      ? ' text-blue-500' : 'text-emerald-500'}`}>
        <span className='text-black text-xl'>{text}</span>
      </NextLink>
      </li>
     )
  };

  return (
    <div className='opacity-100 shadow-xl sticky top-0 left-0 w-full z-50 h-24 backdrop-filter backdrop-blur-sm'>
        <div className=''>
        <nav className=''>
      <ul className="">
      {navigationLinks.map((link) => (
        <Navigate key={link.href} href={link.href} text={link.text}/>
      ))}
      </ul>
      </nav>
      </div>
      </div>
  );
};


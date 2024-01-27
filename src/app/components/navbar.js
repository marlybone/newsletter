
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='opacity-10 bg-white shadow-xl'>
        <div className=''>
      <Link href="/">
      </Link>
      <ul className="">
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Spotlight">Spotlight</Link>
        </li>
      </ul>
      </div>
      </div>
  );
};


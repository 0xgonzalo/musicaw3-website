'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MenuHamburguesa } from '@/components/utils/icons';

export default function Navbar() {

  const [displayPhoneMenu, setDisplayPhoneMenu] = useState(false);

  return(
    <nav className="fixed top-0 flex flex-row min-w-screen w-screen justify-center z-50 drop-shadow-md bg-background-white">
      <div className="flex flex-col md:flex-row min-w-full md:items-center md:justify-between px-4 md:px-36 py-6 text-primary">
        <div className="flex flex-row justify-between items-center">
          <a href="/" className='mr-8 min-w-[96px]'>
            <img src="./logo-mw3.png" alt="musicaw3-logo" className="" />
          </a>
          <button onClick={() => setDisplayPhoneMenu(!displayPhoneMenu)} className="block md:hidden pr-2">
            <MenuHamburguesa />
          </button>
        </div>
        <ul className={`${displayPhoneMenu ? "flex flex-col py-6" : "hidden"}
                          md:h-full
                          md:flex md:flex-row
                          gap-x-12 gap-y-3 
                          items-center
                          text-lg md:text-md font-bold`}>
          <li className="hover:opacity-80 transition duration-200">
            <Link href='/about-us' onClick={() => setDisplayPhoneMenu(false)}>About</Link>
          </li>
          <li className="hover:opacity-80 transition duration-200">
            <Link href='/eventos' onClick={() => setDisplayPhoneMenu(false)}>Events</Link>
          </li>
          <li className="hover:opacity-80 transition duration-200">
            <Link href='/egresados' onClick={() => setDisplayPhoneMenu(false)}>Drops</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.svg';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar/';

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <header className="absolute top-[40px] left-0 right-0 z-[60]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link
            href={`/`}
            className="relative z-[60] w-[100px] h-[40px] xl:w-[120px]"
          >
            <Image src={logo} fill alt="logo" className="object-contain" />
          </Link>

          {/* menu */}
          <button
            onClick={() => setActive(!active)}
            className="menu w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none"
          >
            {/* span 1 */}
            <span
              className={`${
                active ? 'top-1/2 rotate-45' : 'top-0 translate-y-0'
              }`}
            ></span>

            {/* span 2 */}
            <span className={`${active ? 'opacity-0' : 'top-1/2'}`}></span>

            {/* span 3 */}
            <span
              className={`${
                active ? 'top-1/2 -rotate-45' : 'bottom-0 translate-y-0'
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* navbar */}
      <AnimatePresence mode="wait">{active && <Navbar />}</AnimatePresence>
    </header>
  );
};

export default Header;

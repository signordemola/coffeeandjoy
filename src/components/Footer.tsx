import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '../../public/logo.svg';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const links = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/',
    name: 'Explore',
  },
  {
    href: '/',
    name: 'About',
  },
  {
    href: '/',
    name: 'Menu',
  },
  {
    href: '/',
    name: 'Contact',
  },
];

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0"></div>
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          <Link href={`/`} className="relative w-[120px] h-[50px] mx-auto">
            <Image
              alt=""
              src={logo}
              fill
              objectFit="contain"
              className="object-contain"
            />
          </Link>

          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            {links?.map((link, index) => {
              return (
                <Link
                  href={link.href}
                  key={index}
                  className="uppercase text-white tracking-widest hover:text-accent"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <ul className='flex text-white text-xl gap-4'>
            <Link
              href={`/`}
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaYoutube />
            </Link>{' '}
            <Link
              href={`/`}
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaFacebookF />
            </Link>{' '}
            <Link
              href={`/`}
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaTwitter />
            </Link>{' '}
            <Link
              href={`/`}
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaInstagram />
            </Link>
          </ul>

          <div className="border-t border-white/20 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>&copy; Copyright - Zenbrew. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

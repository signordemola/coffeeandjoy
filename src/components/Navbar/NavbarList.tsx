import Link from 'next/link';
import { motion } from 'framer-motion';

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

const getLetter = (name: string) => {
  let letters: JSX.Element[] = [];
  name.split('').forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnime}
        initial="initial"
        animate="enter"
        exit={`exit`}
        custom={[index * 0.03, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });

  return letters;
};

const letterAnime = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: (index: number | any) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.75, 0, 0.23, 1], delay: index[0] },
  }),
  exit: (index: number | any) => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.85, ease: [0.75, 0, 0.23, 1], delay: index[1] },
  }),
};

const NavbarList = () => {
  return (
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
      {links?.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className="flex overflow-hidden hover:text-white transition-all"
          >
            {getLetter(link.name)}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavbarList;

import { motion } from 'framer-motion';
import NavbarList from './NavbarList';

const heightAnime = {
  initial: {
    height: 0,
  },
  open: {
    height: '100vh',
    transition: { duration: 0.85, ease: [0.75, 0, 0.23, 1] },
  },
  close: {
    height: 0,
    transition: { duration: 0.85, ease: [0.75, 0, 0.23, 1] },
  },
};

const Navbar = () => {
  return (
    <motion.nav
      variants={heightAnime}
      initial="initial"
      animate="open"
      exit={`close`}
      className="bg-primary/95 overflow-hidden absolute z-50 -top-full w-full"
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <NavbarList />
      </div>
    </motion.nav>
  );
};

export default Navbar;

'use client';

import About from '@/components/About';
import Explore from '@/components/Explore';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import OpeningHours from '@/components/OpeningHours';
import Testimonials from '@/components/Testimonials';

import { useEffect } from 'react';

export default function Home() {
  // locomotive scroll
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <About />
      <Menu />

      <OpeningHours />
      <Testimonials />
    </div>
  );
}

import Image from 'next/image';
import React from 'react';

import openingImg from '../../public/opening-hours/img.png';
import program from '../../public/opening-hours/program-badge.svg';

import Badge from './Badge';
import Seperator from './Seperator';

const OpeningHours = () => {
  return (
    <section className="flex bg-primary h-[60vh] xl:h-[80vh]">
      <div className="hidden relative xl:flex flex-1 justify-center items-center">
        <div className="w-full h-full absolute z-40 top-0 bg-black/60"></div>
        <Image
          src={openingImg}
          alt=""
          fill
          quality={100}
          priority
          className="object-cover"
        />

        <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
      </div>

      <div className="relative flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center">
        <div className="w-full h-full absolute top-0 bg-black/[0.85] z-10"></div>

        <div className='z-20 flex flex-col items-center justify-center'>
          <h2 className='h2 text-white mb-4'>Opening Hours</h2>
          <Seperator bg="accent" />

          <div className='mt-12 relative w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]'>
            <Image
              alt=""
              src={program}
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;

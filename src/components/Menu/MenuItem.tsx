import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface MenuItemProp {
  imgSrc: string | StaticImageData;
  name: string;
  description: string;
  price: string;
}

const MenuItem = ({ imgSrc, name, description, price }: MenuItemProp) => {
  return (
    <div className="flex items-center gap-4">
      {/* img */}
      <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full">
        <Image
          src={imgSrc}
          fill
          priority
          quality={100}
          alt={name}
          className="object-cover"
        />
      </div>

      {/* text */}
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex justify-between items-baseline gap-4 font-primary text-primary font-semibold leading-none">
          {/* name */}
          <p className="uppercase text-[22px] leading-none">{name}</p>
          {/* dash border */}
          <div className="flex-1 border-b border-dashed border-primary"></div>
          {/* price in naira */}
          <p className="text-[30px]">#{price}</p>
        </div>
        {/* description */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;

import Image from 'next/image';
import React from 'react';

import accent from '../../public/separator-accent.svg';
import white from '../../public/separator-white.svg';

const Seperator = ({ bg = 'white' }) => {
  const imgSrc = bg === 'accent' ? accent : white;
  return (
    <div className="relative w-[168px] h-[26px] mx-auto">
      <Image src={imgSrc} fill alt="image-seperator" />
    </div>
  );
};

export default Seperator;

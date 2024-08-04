import Image from 'next/image';
import React from 'react';

import badge from '../../public/badge.svg'

interface BadgeProps {
  containerStyles?: string;
}

const Badge = ({ containerStyles }: BadgeProps) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image
        src={badge}
        fill
        alt="badge"
        className="object-contain"
      />
    </div>
  );
};

export default Badge;

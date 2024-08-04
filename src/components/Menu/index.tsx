import React from 'react';

import menuImageOne from '../../../public/menu/coffee-1.png';
import menuImageTwo from '../../../public/menu/coffee-2.png';
import menuImageThree from '../../../public/menu/coffee-3.png';
import menuImageFour from '../../../public/menu/coffee-4.png';
import menuImageFive from '../../../public/menu/coffee-5.png';
import Seperator from '../Seperator';
import MenuItem from './MenuItem';

const menuItems = [
  {
    imgSrc: menuImageOne,
    name: 'Expresso',
    description: 'Rich and bold shot of coffee',
    price: '3,300',
  },
  {
    imgSrc: menuImageTwo,
    name: 'Cappuccino',
    description: 'Expresso with steamed milk and foam',
    price: '4,500',
  },
  {
    imgSrc: menuImageThree,
    name: 'Latte',
    description: 'Expresso with steamed milk',
    price: '4,200',
  },
  {
    imgSrc: menuImageFive,
    name: 'Double Expresso',
    description: 'Expresso with double shots',
    price: '5,200',
  },
  {
    imgSrc: menuImageFour,
    name: 'Americano',
    description: 'Expresso with hot water',
    price: '4,500',
  },
  {
    imgSrc: menuImageFive,
    name: 'Mocha',
    description: 'Expresso with chocolate and steamed milk',
    price: '4,850 ',
  },
  {
    imgSrc: menuImageThree,
    name: 'Mochiato',
    description: 'Expresso with chocolate and steamed milk',
    price: '4,350',
  },
  {
    imgSrc: menuImageTwo,
    name: 'FLat White',
    description: 'Expresso with chocolate and steamed milk',
    price: '4,440',
  },
];

const Menu = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Our Menu</h2>
          <div className="mb-4">
            <Seperator bg="accent" />
          </div>

          <p className="text-center max-w-[620px] mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et
            nihil eligendi eaque? Sunt, voluptates pariatur earum eius nisi
            beatae asperiores eligendi tempora, facilis deleniti aspernatur sit
            ex neque repellendus?
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 xl:gap-24">
          {/* menu */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {menuItems?.map((item, index) => {
              const { name, imgSrc, description, price } = item;
              return (
                <MenuItem
                  name={name}
                  imgSrc={imgSrc}
                  description={description}
                  price={price}
                  key={index}
                />
              );
            })}
          </div>

          <button className="btn"> View full menu</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

import Image from 'next/image';
import React from 'react';

import exploreCup from '../../public/explore/cup.png';
import exploreCoffeeOne from '../../public/explore/coffees/coffee-1.svg';
import exploreCoffeeTwo from '../../public/explore/coffees/coffee-2.svg';
import exploreCoffeeThree from '../../public/explore/coffees/coffee-3.svg';
import exploreCoffeeFour from '../../public/explore/coffees/coffee-4.svg';

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* item 1 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src={exploreCoffeeOne}
                    width={56}
                    height={56}
                    alt="coffee one"
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Rich Expresso Blends
                </h3>
                <p className="max-w-[400px] ">
                  Indulge in the deep, robust flavors of our expertly crafted
                  espresso blends. Perfect for a quick pick-me-up or a leisurely
                  afternoon treat.
                </p>
              </div>
            </div>

            {/* item 2 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src={exploreCoffeeTwo}
                    width={56}
                    height={56}
                    alt="coffee two"
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Classic Drip Coffee
                </h3>
                <p className="max-w-[400px] ">
                  Enjoy the comforting taste of our classic drip coffee, brewed
                  to perfection. A timeless choice for coffee enthusiasts who
                  appreciate simplicity.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src={exploreCup}
                fill
                alt=""
                className='object-cover'
                quality={100}
                  priority
                  data-scroll
                  data-scroll-speed="0.1"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* item 3 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src={exploreCoffeeThree}
                    width={56}
                    height={56}
                    alt="coffee three"
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Smooth Cold Brews
                </h3>
                <p className="max-w-[400px] ">
                  Refresh yourself with our smooth and invigorating cold brew
                  options. Ideal for those warm days when you need a cool,
                  caffeinated boost.
                </p>
              </div>
            </div>

            {/* item 4 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src={exploreCoffeeFour}
                    width={56}
                    height={56}
                    alt="coffee four"
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Flavorful Latte Varieties
                </h3>
                <p className="max-w-[400px] ">
                  Experience the rich and creamy flavors of our diverse latte
                  selections. From vanilla to caramel, we have a latte to suit
                  every taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;

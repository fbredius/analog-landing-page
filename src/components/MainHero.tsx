import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">{mainHero.title}</span>{' '}
          <span className={`block text-primary`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 flex items-center lg:justify-start">
          <div className="w-1/3">
            <a
                href={mainHero.primaryAction.href}
                className={`w-full flex items-center`}
            >
              <img
                  className="w-full"
                  src="/assets/images/Download_on_the_App_Store_Badge_NL_RGB_blk_100317.svg"
                  alt="Apple App Store Badge Analog App"
              />
            </a>
          </div>
          {/*<div className="mt-3 sm:mt-0 sm:ml-3">*/}
          {/*  <a*/}
          {/*    href={mainHero.secondaryAction.href}*/}
          {/*    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-background bg-border hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}*/}
          {/*  >*/}
          {/*    {mainHero.secondaryAction.text}*/}
          {/*  </a>*/}
          {/*</div>*/}
          <div className="w-1/3 ml-5">
            <a
              href={mainHero.thirdAction.href}
              className={`w-full flex items-center`}
            >
              <img
                  className="w-full"
                  src="/assets/images/google-play-badge.png"
                  alt="Google Play Badge Analog App"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;

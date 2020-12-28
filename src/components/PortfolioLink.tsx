import React from 'react';
import 'balloon-css';

export const PortfolioLink = () => {
  return (
    <a
      href='https://mertciflikli.com/'
      target='_blank'
      rel='noreferrer'
      aria-label='Check my portfolio!'
      data-balloon-pos='right'
      className='tooltip-red'
    >
      {' '}
      <img
        className='portfolio-link tooltip-slide'
        src='./images/portfol.png'
        alt='mert'
      />
    </a>
  );
};

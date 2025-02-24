import React from 'react';
import Hero from './Hero';

const Navbar = () => {
  return (
    <div className='banner'>
      <div className='main-nav'>
        <div className='main-nav__logo-box'>
          <h2 className='main-nav__logo-text'>
            <a className='main-nav__logo-link' href='./index.html'>
              JK
            </a>
          </h2>
        </div>
        <div className='main-nav__menu-box'>
          <ul className='menu-list'>
            <li className='menu-list__item'>
              <svg className='menu-list__icon'>
                <use xlinkHref='img/sprite.svg#icon-text'></use>
              </svg>
              <a href='#about' className='menu-list__link'>
                About
              </a>
            </li>
            <li className='menu-list__item'>
              <svg className='menu-list__icon'>
                <use xlinkHref='img/sprite.svg#icon-laptop'></use>
              </svg>
              <a href='#section-portfolio' className='menu-list__link'>
                Portfolio
              </a>
            </li>
            <li className='menu-list__item'>
              <svg className='menu-list__icon'>
                <use xlinkHref='img/sprite.svg#icon-mail'></use>
              </svg>
              <a href='#section-contact' className='menu-list__link'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='main-nav__social-box'>
          <ul className='social-list'>
            <li className='social-list__item'>
              <a
                href='https://twitter.com/JonKumar89'
                className='social-list__link'
                target='_blank'
                rel='noreferrer'
              >
                <svg className='social-list__icon'>
                  <use xlinkHref='./img/sprite2.svg#icon-twitter'></use>
                </svg>
              </a>
            </li>
            <li className='social-list__item'>
              <a
                href='https://www.linkedin.com/in/jon-kumar/'
                target='_blank'
                rel='noreferrer'
                className='social-list__link'
              >
                <svg className='social-list__icon'>
                  <use xlinkHref='./img/sprite.svg#icon-linkedin'></use>
                </svg>
              </a>
            </li>
            <li className='social-list__item'>
              <a
                href='https://github.com/badjonz'
                target='_blank'
                rel='noreferrer'
                className='social-list__link'
              >
                <svg className='social-list__icon'>
                  <use xlinkHref='./img/sprite.svg#icon-github'></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Hero />
      <svg
        className='wave'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#f4f9fc'
          fillOpacity='1'
          d='M0,96L48,96C96,96,192,96,288,112C384,128,480,160,576,186.7C672,213,768,235,864,234.7C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
};

export default Navbar;

// src/hooks/useSmoothScroll.js
import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.classList.contains('menu-list__link')) {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
      }
    };

    const menu = document.querySelector('.menu-list');
    menu.addEventListener('click', handleClick);

    return () => menu.removeEventListener('click', handleClick);
  }, []);
};

export default useSmoothScroll;

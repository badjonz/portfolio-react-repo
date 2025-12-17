import React, { useState } from 'react';

const skills = [
  // Primary skills (Page 1)
  { name: 'HTML5', icon: 'img/SVG/html5.svg' },
  { name: 'CSS3', icon: 'img/SVG/css3.svg' },
  { name: 'JavaScript', icon: 'img/SVG/javascript.svg' },
  { name: 'React', icon: 'img/SVG/react.svg' },
  { name: 'TypeScript', icon: 'img/SVG/typescript.svg' },
  { name: 'Tailwind CSS', icon: 'img/SVG/tailwindcss.svg' },
  // Secondary skills (Page 2)
  { name: 'Sass', icon: 'img/SVG/sass.svg' },
  { name: 'PostgreSQL', icon: 'img/SVG/postgresql.svg' },
  { name: 'Figma', icon: 'img/SVG/figma.svg' },
  { name: 'GitHub', icon: 'img/SVG/github.svg' },
  { name: 'WordPress', icon: 'img/SVG/wordpress.svg' },
  { name: 'PHP', icon: 'img/SVG/php.svg' },
];

const SKILLS_PER_PAGE = 6;

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const totalPages = Math.ceil(skills.length / SKILLS_PER_PAGE);

  const handlePrev = () => {
    if (isAnimating) return;
    setSlideDirection('slide-right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
      setSlideDirection('slide-in-left');
      setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection('');
      }, 300);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setSlideDirection('slide-left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
      setSlideDirection('slide-in-right');
      setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection('');
      }, 300);
    }, 300);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === currentPage) return;
    const direction = index > currentPage ? 'left' : 'right';
    setSlideDirection(`slide-${direction}`);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(index);
      setSlideDirection(`slide-in-${direction === 'left' ? 'right' : 'left'}`);
      setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection('');
      }, 300);
    }, 300);
  };

  const visibleSkills = skills.slice(
    currentPage * SKILLS_PER_PAGE,
    currentPage * SKILLS_PER_PAGE + SKILLS_PER_PAGE
  );

  return (
    <section className='skill'>
      <button
        className='skill__nav skill__nav--prev'
        onClick={handlePrev}
        aria-label='Previous skills'
      >
        <svg viewBox='0 0 24 24' className='skill__nav-icon'>
          <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
        </svg>
      </button>

      <div className={`skill__box ${slideDirection}`}>
        {visibleSkills.map((skill) => (
          <div className='skill__item' key={skill.name}>
            <img
              src={skill.icon}
              alt={skill.name}
              className='skill__icon'
            />
          </div>
        ))}
      </div>

      <button
        className='skill__nav skill__nav--next'
        onClick={handleNext}
        aria-label='Next skills'
      >
        <svg viewBox='0 0 24 24' className='skill__nav-icon'>
          <path d='M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z' />
        </svg>
      </button>

      <div className='skill__dots'>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`skill__dot ${index === currentPage ? 'skill__dot--active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

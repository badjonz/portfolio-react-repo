import React from 'react';
import { useInView } from 'react-intersection-observer';
// import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const About = () => {
  const { ref: aboutRef, inView: aboutVisible } = useInView({
    threshold: 0.4, // Trigger when 40% of the element is visible
    triggerOnce: true, // Only trigger once
  });

  return (
    <section id='about' className='about' ref={aboutRef}>
      <div className='row'>
        <div className='col-1-of-2 item-1'>
          <div
            className={`article-heading u-margin-bottom-small ${
              aboutVisible ? 'isOpen' : ''
            }`}
          >
            <h2 className='heading-secondary'>
              A little about me<span className='fullstop'>.</span>
            </h2>
          </div>
          <div
            className={`article-content u-margin-bottom-big  ${
              aboutVisible ? 'isOpen' : ''
            }`}
          >
            <p>
              Welcome to my portfolio, I am an aspiring Front-end Developer.
              Here, I am showcasing the skills I have gained from continuously
              gaining knowledge through courses and developing my own projects.
            </p>
            <br />
            <p>
              I have been living in Japan for over 4 years and my passion is web
              development. I enjoy the process of building stylish, clean, and
              responsive web applications. It is my dream to build a career as a
              Software Engineer specializing in Front-end web development.
            </p>
            <br />
            <p>
              Outside of my professional ambitions, my hobbies range from
              learning about the stars and the history of the universe to
              sitting down at the edge of my seat nervously watching a football
              match.
            </p>
          </div>
        </div>
        <div className='col-1-of-2 item-2'>
          <div className={`composition  ${aboutVisible ? 'isOpen' : ''}`}>
            <img
              src='img/universe.jpg'
              alt='Universe'
              className='composition__photo composition__photo--p3'
            />
            <img
              src='img/football-fan.jpg'
              alt='Football'
              className='composition__photo composition__photo--p2'
            />
            <img
              src='img/music-prod.jpg'
              alt='Music Production'
              className='composition__photo composition__photo--p1'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
              Welcome to my portfolio! I am a Frontend Developer and UI/UX Designer
              based in Trinidad and Tobago. Here, I showcase the skills I have built
              through continuous learning, professional courses, and hands-on projects.
            </p>
            <br />
            <p>
              After spending over 7 years in Japan, I have returned to Trinidad and
              Tobago where I continue to pursue my passion for web development. I
              specialize in building stylish, clean, and responsive web applications
              using modern technologies like React. My goal is to create impactful
              digital experiences as a Software Engineer.
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

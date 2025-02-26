import { useState, useEffect, useRef } from 'react';

const PortfolioModal = ({ portfolio, onClose }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setIsActive(true);
  }, []);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Animation trigger
  useEffect(() => {
    setIsActive(true);
  }, []);

  // Handle video playback
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    }

    // Cleanup function
    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.removeAttribute('src'); // Remove the video source
        videoElement.load(); // Reset the video element
      }
    };
  }, [portfolio.video]); // Re-run effect if video source changes

  return (
    <div
      className={`portfolio-overlay portfolio-overlay--${portfolio.id} ${
        isActive ? 'active' : ''
      }`}
    >
      <div
        ref={modalRef}
        className={`portfolio-information portfolio-information--${portfolio.id}`}
      >
        <div className='portfolio-information__close'>
          <button onClick={onClose}>&#10006;</button>
        </div>

        <div className='portfolio-information__video'>
          <video
            ref={videoRef}
            className='portfolio-information__video-content'
            muted
            loop
          >
            <source src={portfolio.video} type='video/mp4' />
            <source
              src={portfolio.video.replace('.mp4', '.webm')}
              type='video/webm'
            />
            Your browser is not supported!
          </video>
        </div>

        <div className='portfolio-information__content'>
          <div className='portfolio-information__heading'>
            <h3 className='heading-tertiary'>{portfolio.title}</h3>
          </div>

          {portfolio.description.map((paragraph, index) => (
            <p className='portfolio-information__info' key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className='portfolio-information__footer'>
          <p className='portfolio-information__lang'>
            {portfolio.technologies.join(' &middot; ')}
          </p>
          <a
            className='portfolio-information__btn btn'
            href={portfolio.link}
            target='_blank'
            rel='noreferrer'
          >
            View More
          </a>
        </div>

        <div
          className={`portfolio-information__bg-pic portfolio-information__bg-pic--${portfolio.id}`}
        />

        <svg
          className='portfolio-information__wave'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#aadcec'
            fillOpacity='.75'
            d='M0,0L80,42.7C160,85,320,171,480,176C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          />
        </svg>
      </div>
    </div>
  );
};

export default PortfolioModal;

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PortfolioModal from './PortfolioModal';
import ImageComponent from '../ImageComponent';

const Portfolio = () => {
  const { ref: porfolioRef, inView: portfolioVisible } = useInView({
    threshold: 0.15, // Trigger when 15% of the element is visible
    triggerOnce: true, // Only trigger once
  });
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  // Portfolio data (replace with your actual data)
  const portfolios = [
    {
      id: 1,
      title: 'Kirsha Health - Consultation Website',
      category: 'Healthcare Analytics / Consulting / Data Management',
      image: './img/kirsha-health.png',
      blhash: 'LFL;,4v#~EX-00WAnmf+01FyEcv}',
      video: './img/kirsha-demo.mp4',
      description: [
        'This was a freelance project that I undertook to develop a clean, mobile-responsive website for a healthcare solutions company specializing in Medicare Advantage and Prescription Drug risk adjustment.',
      ],
      technologies: ['HTML', 'CSS3', 'PHP', 'SASS', 'JavaScript', 'WordPress'],
      link: 'http://www.kirsha.health/',
    },
    {
      id: 2,
      title: 'Kodomo Gakuen - School Website',
      category: 'Education / Kindergarten / Childcare',
      image: './img/Kodomo-gakuen.png',
      blhash: 'LFL;,4v#~EX-00WAnmf+01FyEcv}',
      video: './img/kodomo-gakuen-vid.mp4',
      description: [
        'I have developed a Kindergarten/Preschool website that is currently live. The website has both Japanese and English language capabilities.',
        "I utilized skills I have learn't through courses as well as outside of those courses having to research how to implement the dual languages among other different features.",
      ],
      technologies: ['React', 'NextJS', 'Tailwind CSS'],
      link: 'http://www.kodomogakuen.com/',
    },
    {
      id: 3,
      title: "Jon's Portfolio - Portfolio Website",
      category: 'Learning / Career / Skills',
      image: './img/jon-portfolio.png',
      blhash: 'L9PZ_o~p~p4UyZIUNF%24p_3%g4n',
      video: './img/jon-portfolio-vid.mp4',
      description: [
        'This is my personal portfolio website that showcases my projects, my learning through courses, and a little about me. ',
        'This website utilizes many of the skills I have gained throughout the years from school, personal self study and experience. ',
      ],
      technologies: ['React', 'HTML5', 'CSS3', 'BEM', 'SASS', 'JavaScript'],
      link: 'https://jonkumar.netlify.app/',
    },
    {
      id: 4,
      title: 'Bankist - Fictional Bank Website',
      category: 'Course / JavaScript / Learning',
      image: './img/bankist2.png',
      blhash: 'LePZu;ayofs;~qa{kBj[0Kj[WBWB',
      video: './img/bankist-vid.mp4',
      description: [
        'Coursework; This is a marketing website for a fictional bank.',
        'This was through a JavaScript course I did. It focussed on Advanced DOM manipulation techniques and handling of events. It taught me about lazy loading images and why we do it, implementing tabbed and slider components, and event propagation and delegation. ',
      ],
      technologies: ['JavaScript'],
      link: 'https://bankist-dom.netlify.app/',
    },
    {
      id: 5,
      title: 'Github Finder',
      category: 'Course / React Front to Back / Learning',
      image: './img/github-finder-app.png',
      blhash: 'L47K-$~qxtRP~W_3xuM{_4?bofM{',
      video: './img/github-finder-app-vid.mp4',
      description: [
        'Coursework; In this project I used the Github REST API to search for users and get their profile data and display it. ',
        'I learned about interacting with a third party API, diving deeper into the context API with the use of reducers. I also got a taste of the CSS framework Tailwind CSS, utilizing a Tailwind component called Daisy UI. ',
      ],
      technologies: ['React', 'REST API', 'Tailwind CSS', 'Context API'],
      link: 'https://github-finder-jon-repo.vercel.app/',
    },
    {
      id: 6,
      title: 'Forkify - Recipe Website',
      category: 'Course / JavaScript & API / Learning',
      image: './img/forkify.png',
      blhash: 'LIR_@h.lujM]MatRtlVsU[kWo~nh',
      video: './img/forkify-vid.mp4',
      description: [
        'Coursework; This was a food recipe web application called Forify where you can search for many different types recipes, change the serving sizes, add recipes and bookmark them. ',
        "This was the final project of the JavaScript course where we utilize techniques I learn't throughout the course such as classes, modules, promises, fetch and async/await. The software architecture used to build this project was the MVC (Model-View-Controller) architecture. ",
      ],
      technologies: ['JavaScript', 'API', 'MVC Architecture'],
      link: 'https://forkify-v2.netlify.app/',
    },
  ];

  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
  };

  const handleCloseModal = () => {
    setSelectedPortfolio(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isDesktop) {
      if (currentSlide === portfolios.length - 2) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    } else {
      if (currentSlide === portfolios.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    }
  };

  const prevSlide = () => {
    if (isDesktop) {
      if (currentSlide === 0) {
        setCurrentSlide(portfolios.length - 2);
      } else {
        setCurrentSlide((prev) => prev - 1);
      }
    } else {
      if (currentSlide === 0) {
        setCurrentSlide(portfolios.length - 1);
      } else {
        setCurrentSlide((prev) => prev - 1);
      }
    }
  };

  return (
    <section
      className={`section-portfolio ${
        portfolioVisible ? '' : 'section--hidden'
      }`}
      id='section-portfolio'
      ref={porfolioRef}
    >
      <div className='portfolio-heading u-margin-bottom-medium'>
        <h2 className='heading-secondary'>
          Projects I've worked on<span className='fullstop'>.</span>
        </h2>
      </div>
      <div
        className='portfolio-nav-button portfolio-nav-button--prev'
        onClick={prevSlide}
      >
        <span>
          <strong>{'<<'}</strong>
        </span>
      </div>
      <div
        className='portfolio-nav-button portfolio-nav-button--next'
        onClick={nextSlide}
      >
        <span>
          <strong>{'>>'}</strong>
        </span>
      </div>

      <div className='slider'>
        {portfolios.map((portfolio, i) => (
          <div
            className='portfolio'
            style={{ transform: `translateX(${106 * (i - currentSlide)}%)` }}
            key={portfolio.id}
          >
            <div className='portfolio__content'>
              <button
                className='portfolio__link'
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  handlePortfolioClick(portfolio);
                }}
              >
                {/* <LazyLoadImage
                  key={portfolio.title}
                  src={portfolio.image}
                  effect='blur'
                  placeholderSrc={portfolio.placeholder}
                  className='portfolio__pic'
                /> */}
                <ImageComponent
                  src={portfolio.image}
                  blHash={portfolio.blhash}
                  cssClass='portfolio__pic'
                />
                {/* <img
                  src={portfolio.image}
                  alt=''
                  className='portfolio__pic lazy-img'
                /> */}
              </button>
            </div>
            <div className='portfolio__info'>
              <h2 className='portfolio__heading'> {portfolio.title}</h2>
              <span className='portfolio__category'>{portfolio.category}</span>
            </div>
          </div>
        ))}
      </div>
      {selectedPortfolio && (
        <PortfolioModal
          portfolio={selectedPortfolio}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Portfolio;

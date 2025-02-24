// 'use strict';

// // const menu = document.querySelector(".main-nav__menu-link");
// const mainMenuWrap = document.querySelector('.menu-wrap');
// const mainMenu = document.querySelector('.main-menu');
// const about = document.querySelector('#about');
// const articleHeading = document.querySelector('.article-heading');
// const articleContent = document.querySelector('.article-content');
// const composition = document.querySelector('.composition');
// const tabPort = window.matchMedia('(max-width: 1200px)');
// // const aboutSection = document.querySelector(".about");

// // menu.addEventListener("click", function (e) {
// //   e.preventDefault();
// //   mainMenuWrap.style.height = "100%";
// //   mainMenu.classList.add("isopen");
// // });

// /*
// const i = {};
// i.am = "Jon Kumar, a front end web developer";
// i.love = ["wife", "family", "close freinds", "learning", ""];
// */

// // Smooth scroll to sections /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.querySelector('.menu-list').addEventListener('click', function (e) {
//   e.preventDefault();

//   // Matching strategy
//   if (e.target.classList.contains('menu-list__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// //////////////////////////////////////////////////////////////

// const obsCallback = function (entries) {
//   const [entry] = entries;
//   if (entry.isIntersecting) {
//     articleHeading.classList.add('isOpen');
//     articleContent.classList.add('isOpen');
//     composition.classList.add('isOpen');
//   }
// };

// const obsOptions = {
//   root: null,
//   // rootMargin: "-180px",
//   // threshold: [],
//   threshold: 0.4,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(about);

// // SLIDER FOR PORTFOLIO ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const slidePortfolio = function () {
//   const portfolios = document.querySelectorAll('.portfolio');
//   const slider = document.querySelector('.slider');
//   const portfolioBtnNext = document.querySelector(
//     '.portfolio-nav-button--next'
//   );
//   const portfolioBtnPrev = document.querySelector(
//     '.portfolio-nav-button--prev'
//   );
//   let curSlide = 0;
//   let maxSlide = portfolios.length;
//   portfolios.forEach((p, i) => (p.style.transform = `translateX(${106 * i}%)`)); // 0%, 100%, 200%

//   const goToPortfolio = function (portfolio) {
//     portfolios.forEach((p, i) => {
//       p.style.transform = `translateX(${106 * (i - portfolio)}%)`;
//     });
//   };

//   const nextPortfolio = function () {
//     if (tabPort.matches) {
//       if (curSlide === maxSlide - 1) curSlide = 0;
//       else curSlide++;
//     }
//     if (!tabPort.matches) {
//       if (curSlide === maxSlide - 2) curSlide = 0;
//       else curSlide++;
//     }
//     goToPortfolio(curSlide);
//   };
//   const prevPortfolio = function () {
//     if (tabPort.matches) {
//       if (curSlide === 0) curSlide = maxSlide - 1;
//       else curSlide--;
//     }

//     if (!tabPort.matches) {
//       if (curSlide === 0) curSlide = maxSlide - 2;
//       else curSlide--;
//     }

//     goToPortfolio(curSlide);
//   };

//   // Event Handlers
//   portfolioBtnNext.addEventListener('click', nextPortfolio);
//   portfolioBtnPrev.addEventListener('click', prevPortfolio);

//   const init = function () {
//     goToPortfolio(0);
//   };

//   init();
// };

// slidePortfolio();

// // Reveal Portfolio Section //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const portfolioSection = document.querySelector('.section-portfolio');

// const revealPortfolio = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target);
// };

// const portfolioObserver = new IntersectionObserver(revealPortfolio, {
//   root: null,
//   threshold: 0.15,
// });

// portfolioObserver.observe(portfolioSection);
// portfolioSection.classList.add('section--hidden');

// // ON HOVER PLAY PORTFOLIO VID /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // $(document).ready(function () {
// //   $(".portfolio-information__video-content")
// //     .on("mouseover", function (event) {
// //       this.play();
// //     })
// //     .on("mouseout", function (event) {
// //       this.pause();
// //     });
// // });

// // Lazy loading images
// const imgTargets = document.querySelectorAll('img[data-src]');

// const loadImg = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   // Replace src with data-src
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener('load', function () {
//     entry.target.classList.remove('lazy-img');
//   });
//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: '-180px',
// });

// imgTargets.forEach((img) => imgObserver.observe(img));

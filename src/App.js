import React from 'react';
import Layout from './components/Layout';
// import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <Layout>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Layout>
  );
}

export default App;

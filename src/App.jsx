import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* Background */}
      <div className='fixed  top-0 -z-10 h-full w-1/3'>
        <div className="absolute top-0 z-[-2] h-screen w-screen" style={{backgroundImage: 'linear-gradient( 85.2deg,  rgba(33,3,40,1) 7.5%, rgba(65,5,72,1) 88.7% )'}}>
        </div>
      </div>

      {/* Navbar fixed */}
      <div className="navbar fixed top-0 left-0 w-full z-50" >
        <Navbar />
      </div>

      {/* Main content with padding to avoid overlap */}
      <div className='container mx-auto px-8 pt-16'>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id='skills'>
          <Technologies />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contacts'>
          <Contacts />
        </section>
      </div>
    </div>
  );
};

export default App;

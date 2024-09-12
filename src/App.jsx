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
      <div className='fixed  top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
          rgba(255,255,255,0))]">
        </div>
      </div>

      {/* Navbar fixed */}
      <div className="fixed top-0 left-0 w-full z-50  bg-neutral-950 
         ">
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

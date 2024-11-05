import React from 'react';
import Footer from './Footer/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app-container">
      {/* home */}
      <Home />
      {/* about */}
      <About />

      {/* skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import Skills from './pages/Skills/Skills';
import './App.css';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
   
      <div className="light font-link" id='top'>

        <ErrorBoundary>
        <Header />
        </ErrorBoundary>

        <About />
        <Project />
        <Skills />
        <Contact /> 
        <ErrorBoundary>
        <Footer />
        </ErrorBoundary>
      </div>
   
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from "@vercel/speed-insights/react"  

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import Certifications from './components/Certifications';

function App() {
  return (
    <HelmetProvider>
    <SpeedInsights />
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/Certifications" element={<Certifications />} /> */}
            <Route path="/Home" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
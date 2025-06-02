import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/Certifications">Certifications</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="/resume.docx" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-start bg-gray-800 px-6 py-4 space-y-3 text-sm font-medium">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li><Link to="/Certifications" onClick={() => setIsOpen(false)}>Certifications</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><a href="/resume.docx" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Resume</a></li>
        </ul>
      )}
    </header>
  );
}

  import React from 'react';
  import { Link } from 'react-router-dom';

  export default function Header() {
    return (
      <header className="bg-gray-900 text-white shadow-md">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/Certifications">Certifications</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="/resume.docx" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </header>
    );
  }
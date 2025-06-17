import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8">
  <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-4">
    
    <p className="text-sm text-gray-300">
      UI Developer with 3+ years of experience building responsive, accessible web apps using React and Tailwind CSS.
    </p>

    <p className="text-green-400 font-semibold">
      ✅ Open to frontend developer roles · Remote or On-site
    </p>

    <div className="flex space-x-6">
      <a href="/Akhil_Pekala_Resume.docx" className="text-blue-400 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
      <a href="https://github.com/Akhil-Ak-04" target="_blank" rel="noreferrer">
        <img src="/icon-github.png" className="w-5 h-5 hover:scale-150 transition" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/akhil-pekala-a04289155" target="_blank" rel="noreferrer">
        <img src="/icon-linkedin.png" className="w-5 h-5 hover:scale-150 transition" alt="LinkedIn" />
      </a>
    </div>

    <p className="text-xs text-gray-500">© {new Date().getFullYear()} Akhil Pekala · Hyderabad, India</p>
  </div>
</footer>

  );
}

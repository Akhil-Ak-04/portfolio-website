import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      // Adjust the fade logic: fades out after 100px or near bottom
      if (currentScroll > 100 || currentScroll >= maxScroll - 100) {
        setOpacity(0);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Akhil's Portfolio</title>
        <meta name="description" content="Learn more about Pratik, a UI Developer with 3 years of experience at TCS." />
      </Helmet>

      <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-[calc(100vh-80px)] bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 text-white">
        <img
          src="/your-photo.jpg"
          alt="Akhil Pekala"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          Hi, I'm <span className="text-yellow-300">Akhil Pekala</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-6">
          UI Developer | React & Tailwind Specialist
        </p>
        <a
          href="/Projects"
          className="mt-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded shadow hover:bg-gray-100 transition"
        >
          View Projects
        </a>

        {/* Scroll Indicator with fading opacity */}
        <div
          className="absolute bottom-6 text-white text-sm animate-bounce transition-opacity duration-500"
          style={{ opacity }}
        >
          ↓ Scroll down
        </div>
      </section>
    </>
  );
}

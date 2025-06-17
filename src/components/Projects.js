import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Projects() {
  return (
    <>
    <Helmet>
        <title>Projects</title>
        <meta name="description" content="Learn more about Pratik, a UI Developer with 3 years of experience at TCS." />
    </Helmet>
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Project 1 */}
        <div className="bg-gradient-to-b from-blue-100 to-white shadow-lg rounded p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Weather App</h3>
          <p className="text-gray-600">A responsive Weather App built with React and Tailwind CSS, fetching real-time data from the OpenWeatherMap API.</p>
          <a href='https://weather-app-akhil-react.vercel.app/' target='_new'><button type="button" class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Click Here</button></a>
        </div>
      </div>
    </section>
    </>
  );
}
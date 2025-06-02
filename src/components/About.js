import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
    <Helmet>
        <title>About Akhil</title>
        <meta name="description" content="Learn more about Pratik, a UI Developer with 3 years of experience at TCS." />
    </Helmet>
    <section className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 text-lg">
        Detail-oriented UI Developer with 3.3 years of experience in designing and developing responsive, user-centric websites. Skilled in HTML, CSS, JavaScript, React JS, and modern frameworks to deliver visually appealing and high-performance interfaces. Proven ability to work independently and in cross-functional teams to enhance digital experiences, streamline development, and reduce costs.
      </p>
    </section>
    </>
  );
}

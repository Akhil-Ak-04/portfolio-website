import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Certifications() {
  return (
    <>
    <Helmet>
        <title>Certifications</title>
        <meta name="description" content="Learn more about Pratik, a UI Developer with 3 years of experience at TCS." />
    </Helmet>
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Certification 1 */}
        <div className="bg-white shadow-lg rounded p-6">
          <h3 className="text-xl font-semibold mb-2">Certification 1</h3>
          <p className="text-gray-600">Certification description here.</p>
        </div>

        {/* Certification 2 */}
        <div className="bg-white shadow-lg rounded p-6">
          <h3 className="text-xl font-semibold mb-2">Certification 2</h3>
          <p className="text-gray-600">Certification description 2.</p>
        </div>
      </div>
    </section>
    </>
  );
}

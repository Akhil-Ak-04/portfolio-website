import React from 'react';
import { Helmet } from 'react-helmet-async';

const skills = ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Git', 'JSON', 'Grape JS', 'Adobe Express', 'Adobe Workfront'];

export default function Skills() {
  return (
    <>
    <Helmet>
        <title>Skills</title>
        <meta name="description" content="Learn more about Pratik, a UI Developer with 3 years of experience at TCS." />
    </Helmet>
    <section className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 px-10">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full shadow text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
    </>
  );
}

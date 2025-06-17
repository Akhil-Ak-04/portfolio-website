import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
    <Helmet>
       <title>Contact</title>
        <meta name="description" content="Learn more about Pratik, a UI Developer with 3 years of experience at TCS." />
    </Helmet>
    <section className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
      <form action="https://formspree.io/f/xqablkeq" method="POST" className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
        <input type="email" name="_replyto" placeholder="Your Email" required className="w-full p-2 border rounded" />
        <textarea name="message" rows="5" placeholder="Please write about your company" required className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Send</button>
      </form>
    </section>
    </>
  );
}

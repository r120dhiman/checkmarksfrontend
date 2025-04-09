import React from 'react';
import { Link } from 'react-router';

const ContactusPage = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-pink-200 to-violet-300 overflow-hidden">
      {/* Blurred overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>

      <div className="relative z-10 bg-white/80 rounded-2xl shadow-xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-violet-600 text-center mb-6">
          Contact Us
        </h1>

        <div className="space-y-4 text-gray-800 font-medium text-center">
          <p>
            📧 <span className="text-blue-700">Email:</span>{' '}
            <a
              href="mailto:checkmarks.tech@gmail.com"
              className="underline hover:text-pink-600"
            >
              checkmarks.tech@gmail.com
            </a>
          </p>
          <p>
            📍 <span className="text-blue-700">Address:</span> IIT BHU, Varanasi
          </p>
          <p>
            📞 <span className="text-blue-700">Phone:</span>{' '}
            <a href="tel:9050635560" className="underline hover:text-violet-600">
              9050635560
            </a>
          </p>
        </div>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ContactusPage;
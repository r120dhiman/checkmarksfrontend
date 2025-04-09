import React from 'react';
import { useNavigate, Link } from 'react-router';

const AboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-pink-200 to-violet-300 overflow-hidden">
      {/* Blurred overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>

      <div className="relative z-10 bg-white/80 rounded-2xl shadow-xl p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-violet-600 text-center mb-6">
          About Us
        </h1>

        <div className="space-y-6 text-gray-800 font-medium text-lg">
          <p>
            <span className="font-semibold text-blue-700">CheckMarks</span> is your smart companion for cracking engineering entrances like JEE. We provide a powerful tool to <span className="text-violet-600">instantly check your JEE Mains score</span> just by uploading your response sheet.
          </p>

          <p>
            Our platform also offers <span className="text-pink-600">1-on-1 personalized mentorship</span> by IITians for JEE Advanced — designed by last year's toppers who understand the journey deeply.
          </p>

          <p>
            After the exams, we help you make smart choices in <span className="text-blue-600">JoSAA counselling</span> through data-driven advice and mentoring sessions — all at a very nominal cost.
          </p>

          <p>
            Our proprietary <span className="text-violet-600">Percentile Predictor</span> is built on real JEE data to give you the most accurate insight on your expected rank and college possibilities.
          </p>

          <p className="text-center mt-6 text-pink-700 font-semibold">
            With CheckMarks — you don’t just guess, you prepare smart.
          </p>
        </div>

        {/* Mentorship Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate('/mentorship')}
            className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-violet-500 via-pink-400 to-blue-500 hover:shadow-lg transition-all duration-200"
          >
            Explore Mentorship
          </button>
        </div>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default AboutUsPage;
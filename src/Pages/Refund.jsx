import React from 'react';
import { Link } from 'react-router-dom';

const CancellationAndRefundPage = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-pink-200 to-violet-300 overflow-hidden px-4">
      {/* Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>

      <div className="relative z-10 bg-white/80 rounded-2xl shadow-xl p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-violet-600 text-center mb-6">
          Cancellation & Refund Policy
        </h1>

        <div className="space-y-6 text-gray-800 font-medium text-base leading-relaxed">
          <p>
            At CheckMarks, we aim to provide valuable services to every JEE aspirant. Please read our refund and cancellation policies carefully before purchasing.
          </p>

          <div>
            <h2 className="font-semibold text-lg text-violet-700">1. Mentorship Program Cancellation</h2>
            <p>
              Once enrolled in the mentorship program, cancellation is not applicable as the sessions are personalized and time-bound.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-violet-700">2. Refund Policy</h2>
            <ul className="list-disc list-inside pl-2">
              <li>All payments are final and non-refundable.</li>
              <li>Refunds will not be processed for digital services like score predictions or counseling data access.</li>
              <li>In exceptional cases (technical errors or duplicate payment), refund requests can be submitted via email.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-violet-700">3. How to Request a Refund</h2>
            <p>
              Send an email to <span className="text-blue-600">checkmarks.tech@gmail.com</span> within 24 hours of payment, describing the issue. Include transaction details for verification.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-violet-700">4. Timeline</h2>
            <p>
              If eligible, refunds will be processed within 5–7 business days to the original payment method.
            </p>
          </div>

          <p className="text-center font-semibold text-pink-700 mt-4">
            By making a payment on CheckMarks, you agree to this cancellation and refund policy.
          </p>
        </div>

        {/* Home Button using Link */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-400 via-pink-400 to-violet-400 text-white font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition duration-200"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CancellationAndRefundPage;
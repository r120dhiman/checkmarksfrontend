import React from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const mentorshipContent = [
  {
    title: "Crack JEE Advanced with 1-on-1 mentorship by IITians",
    description:
      "Get personally guided by experienced IITians who have been through the JEE journey and know what it takes to succeed.",
  },
  {
    title: "Smart Study Strategy",
    description:
      "Follow daily routines, use the right resources, and apply revision methods that work—taught by past toppers.",
  },
  {
    title: "Time & Stress Management",
    description:
      "Learn how to schedule effectively and maintain a balanced mindset without feeling overwhelmed.",
  },
  {
    title: "Paper Attempting Strategy",
    description:
      "Know how to approach the JEE paper with speed and accuracy. Maximize your performance with every attempt.",
  },
  {
    title: "Consistent Feedback",
    description:
      "Track your improvement through regular progress reviews and performance checks.",
  },
  {
    title: "Personalized Doubt Solving",
    description:
      "Ask anything, anytime. Clear your doubts in one-on-one sessions—no confusion left behind.",
  },
  {
    title: "Make It Count",
    description:
      "Make your final JEE prep phase impactful with focused mentorship and expert support.",
  },
];

function Mentorship() {
  const paymentButtonId = import.meta.env.VITE_APP_RAZORPAY_KEY;
  const scriptContainerRef = useRef(null);
  const navigate = useNavigate();
  const userData = localStorage.getItem('Authinfo');

  useEffect(() => {
    if (!scriptContainerRef.current || !userData) return;

    scriptContainerRef.current.innerHTML = '';
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", paymentButtonId);
    script.async = true;

    script.onerror = () => {
      console.error('Failed to load Razorpay script');
    };

    if (scriptContainerRef.current) {
      scriptContainerRef.current.appendChild(script);
    }

    return () => {
      if (scriptContainerRef.current) {
        scriptContainerRef.current.innerHTML = '';
      }
    };
  }, [paymentButtonId, userData]);

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center justify-center">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-md p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          One-on-One JEE Mentorship – ₹499 Only
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Trusted by aspirants. Learn directly from IITians. Simple, personal, and effective guidance to crack JEE Advanced.
        </p>
        <ul className="space-y-5">
          {mentorshipContent.map((item, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-blue-700">{item.title}</h2>
              <p className="text-gray-700 mt-1">{item.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          {userData ? (
            <form ref={scriptContainerRef} className="mb-4" />
          ) : (
            <>
              <button
                onClick={handleLoginRedirect}
                className="bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200 transform hover:scale-[1.02]"
              >
                Login to Purchase Mentorship
              </button>
              <p className="text-red-500 mt-4">
                Please login to proceed with payment
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mentorship;

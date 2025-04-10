import React from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { BookOpen, Clock, Target, Brain, MessageCircle, Star, Trophy } from "lucide-react";

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

const iconMap = {
  "Crack JEE Advanced": <Trophy className="w-6 h-6" />,
  "Smart Study Strategy": <BookOpen className="w-6 h-6" />,
  "Time & Stress Management": <Clock className="w-6 h-6" />,
  "Paper Attempting Strategy": <Target className="w-6 h-6" />,
  "Consistent Feedback": <Star className="w-6 h-6" />,
  "Personalized Doubt Solving": <MessageCircle className="w-6 h-6" />,
  "Make It Count": <Brain className="w-6 h-6" />
};

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 text-transparent bg-clip-text mb-6"
          >
            One-on-One JEE Mentorship
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            ₹449 Only
          </motion.div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by aspirants. Learn directly from IITians. Simple, personal, and effective guidance to crack JEE Advanced.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {mentorshipContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-violet-100 rounded-lg">
                  {iconMap[item.title.split(" ")[0]] || <Star className="w-6 h-6 text-violet-600" />}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-center shadow-xl"
        >
          {userData ? (
            <form ref={scriptContainerRef} className="mb-4" />
          ) : (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your JEE Preparation?
              </h3>
              <button
                onClick={handleLoginRedirect}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Login to Purchase Mentorship
              </button>
              <p className="text-pink-200 mt-4">
                Please login to proceed with payment
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Mentorship;

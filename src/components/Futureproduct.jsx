import React from "react";

export default function FutureProduct() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-200 via-pink-100 to-violet-200 p-6 m-4 overflow-hidden rounded-4xl">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30 z-0" />

      {/* Faint Emoji Layer */}
      <div className="absolute inset-0 opacity-10 text-[120px] flex flex-wrap justify-center items-center gap-10 pointer-events-none z-0">
        🎯 📊 📝 🎓 🧠 💡
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-10">
          🌟 Ongoing live program
        </h1>
        <div className="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 transition-transform hover:scale-[1.01]">
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">JEE Advance mentorship </h2>
          <p className="text-gray-800 text-base">
          You’ve come so far—make your final preparation phase count with expert mentorship
           
            <br />
            One-on-one mentorship from IITians for your JEE Advance.
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl p-6 font-bold text-center text-blue-800 mb-10">
          🌟Future Products
        </h1>

        {/* Percentile Checker Card */}
        <div className="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-8 transition-transform hover:scale-[1.01]">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-2">Predict your Percentile</h2>
          <p className="text-gray-800 text-base">
            Under <span className="font-medium">Check Competition</span>, we provide average scores shift-wise
            and a real data-driven percentile prediction engine.
            <br />
            Visit again in 3–4 days while we finish collecting marks data. 📈
          </p>
        </div>

        {/* Mentorship Card */}
        <div className="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 transition-transform hover:scale-[1.01]">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">JoSAA Counseling</h2>
          <p className="text-gray-800 text-base">
          The most important part after the chaos of entrance exams is choosing the right college.
          Let us help you maximize your preparation outcome. 🎯
           
            <br />
            One-on-one mentorship from IITians for JoSAA counseling after your JEE Mains & Advance.
          </p>
        </div>
      </div>
    </div>
  );
}
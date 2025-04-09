// import React from "react";
// import { motion } from "framer-motion";
// import { PiStrategy, PiMathOperationsBold, PiBrainBold } from "react-icons/pi";
// import { Link } from "react-router-dom";

// const textContent = `Welcome to our exclusive mentorship program designed to guide and support you every step of the way in your journey. Whether you're just starting out or looking to scale, our mentors bring real-world experience to help you succeed.`;

// const Mentorship = () => {
//   const words = textContent.split(" ");

//   return (
//     <div className="w-full md:w-2/5 p-4 sticky left-0">
//       <div className="relative backdrop-blur-md bg-blue-200/30 rounded-2xl shadow-lg p-6 overflow-hidden">
//         {/* Background Icons */}
//         <PiStrategy className="absolute text-blue-300/40 text-[8rem] top-2 left-4 -z-10" />
//         <PiMathOperationsBold className="absolute text-blue-300/40 text-[6rem] bottom-6 right-8 -z-10 rotate-12" />
//         <PiBrainBold className="absolute text-blue-300/40 text-[7rem] top-20 right-2 -z-10 -rotate-6" />

//         {/* Animated Text */}
//         <div className="text-xl font-semibold text-blue-900 mb-4 relative z-10">
//           {words.map((word, index) => (
//             <motion.span
//               key={index}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.05 }}
//               className="inline-block mr-1"
//             >
//               {word}
//             </motion.span>
//           ))}
//         </div>

//         {/* Blinking Button */}
//         <Link to="/checkout">
//           <div className="relative z-10 inline-block animate-pulse">
//             <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition shadow-lg ring-2 ring-blue-400">
//               Checkout
//             </button>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Mentorship;
import React from "react";
import { motion } from "framer-motion";
import { PiStrategy, PiMathOperationsBold, PiBrainBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const mentorshipPoints = [
  {
    
    title: "Crack JEE Advanced with 1-on-1 mentorship by IITians",
    description:
      "Personally guided by those who’ve cracked JEE Advanced and understand the journey deeply.",
  },
  {
    title: "Smart Study Strategy",
    description:
      "Learn proven daily routines, resource planning, and revision techniques from toppers.",
  },
  {
    title: "Time & Stress Management",
    description:
      "Master scheduling to cover your syllabus effectively without burnout.",
  },
  
  {
    title: "Paper Attempting Strategy",
    description:
      "Learn how to analyze, attempt, and maximize your score under time pressure.",
  },
  {
    title: "Consistent Feedback",
    description:
      "Track your progress regularly with detailed performance reviews.",
  },
  {
    title: "Personalized Doubt Solving",
    description:
      "Get all your questions answered one-on-one—no confusion left behind.",
  },
  {
    title: "Make It Count",
    description:
      "You’ve come so far—make your final preparation phase count with expert mentorship.",
  },
];

const Mentorship = () => {
  return (
    <div className="w-full p-4 my-4 px-4 sticky left-0">
      
      <div className="relative rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-pink-100 via-violet-100 to-blue-100 backdrop-blur-md">
        {/* Background Gradients */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-300 opacity-30 rounded-full filter blur-3xl z-0 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-violet-300 opacity-30 rounded-full filter blur-3xl z-0 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-300 opacity-20 rounded-full filter blur-2xl z-0 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>

        {/* Background Icons */}
        <PiStrategy className="absolute text-blue-300/40 text-[8rem] top-2 left-4 z-0" />
        <PiMathOperationsBold className="absolute text-blue-300/40 text-[6rem] bottom-6 right-8 z-0 rotate-12" />
        <PiBrainBold className="absolute text-blue-300/40 text-[7rem] top-20 right-2 z-0 -rotate-6" />

        {/* Content */}
        <div className="relative z-10 p-8">
          <div className="text-blue-900 space-y-6 mb-6 text-sm leading-relaxed font-medium">
            {mentorshipPoints.map((point, index) => (
              <div key={index}>
                <p className="font-bold text-base mb-1">{point.title}</p>
                <div className="flex flex-wrap">
                  {point.description.split(" ").map((word, wIndex) => (
                    <motion.span
                      key={wIndex}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.5 + wIndex * 0.2 }}
                      className="mr-1"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Blinking Button */}
          <Link to="/checkout">
            <div className="inline-block animate-pulse">
              <button className="px-5 py-2 bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-yellow-300 rounded-md hover:brightness-110 transition shadow-lg ring-2 ring-violet-300">
                Register Now 
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
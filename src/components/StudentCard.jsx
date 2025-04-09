import React,{useLocation} from "react";
import { motion } from "framer-motion";

const StudentCard = () => {
    const location = useLocation();
    const data = location.state?.dataInfo || {}; // Handle undefined state
  
    return (
      <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-xl font-bold text-blue-400">{data.name || "N/A"}</h2>
        <p className="text-gray-400"><strong>Shift:</strong> {data.shift || "N/A"}</p>
        <p className="text-gray-400"><strong>Email:</strong> {data.email || "N/A"}</p>
        <p className="text-green-400"><strong>Score:</strong> {data.score || "N/A"}</p>
      </div>
    );
  };

export default StudentCard;
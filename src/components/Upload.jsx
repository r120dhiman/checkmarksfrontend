import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router";

const FileUpload = () => {
  const API_URL=import.meta.env.VITE_APP_BACKEND_URL;
  const [file, setFile] = useState(null);
  const [userId] = useState("67bf4fbccd7796becb5e7c95");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [jeeDate, setJeeDate] = useState("");
  const [jeeShift, setJeeShift] = useState("1");
  const [agree, setAgree] = useState(false);
  const [showAd, setShowAd] = useState(false); 
  const [responseData , setResponseData ] = useState();

  const shiftOptions = [
    { title: "Shift 1 (9:00 AM - 12:00 PM)", value: "1" },
    { title: "Shift 2 (3:00 PM - 6:00 PM)", value: "2" },
  ];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return setMessage("Please select a file.");
    if (!name || !email  || !city || !jeeDate)
      return setMessage("All fields are required.");
    // if (!/^[6-9]\d{9}$/.test(phone))
    //   return setMessage("Please enter a valid 10-digit Indian phone number.");
    if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email))
      return setMessage("Please enter a valid email address.");
    if (!agree) return setMessage("You must agree to the terms and conditions.");

    setShowAd(true);

    const formData = new FormData();
    formData.append("file", file);

    const userData = {
      name,
      email,
      // phone,
      city,
      jeeDate,
      jeeShift
    };

    formData.append("formData", JSON.stringify(userData));

    try {
      setLoading(true);
      setMessage("");
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("File uploaded successfully!");
      setResponseData(response.data);
      
    } catch (error) {
      console.error("Upload error:", error);
      setMessage(error.response?.data?.message || "Upload failed. Please try again.");
    } finally {
      setShowAd(false);
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Ad overlay */}
      {showAd && (
  <div className="fixed inset-0 bg-white/30 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6">
    <button
      onClick={() => setShowAd(false)}
      className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
    >
      &times;
    </button>
    <div className="bg-white/20 border border-white/30 rounded-2xl p-8 max-w-lg text-center shadow-xl">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text mb-4">
        Hold Tight! We're Generating Your Score...
      </h2>
      <p className="text-lg text-yellow-600 font-medium mb-6">
        Meanwhile, Check our 1-on-1 JEE Advance mentorship program led by IITians .<br/>
        You’ve come so far—make it to your Dream college with expert Mentorship.
      </p>
      <p className="text-lg text-violet-400 font-medium mb-6">
        
        Score will display on Homepage itself.
      </p>
      <a
        href="/mentorship"
        className="inline-block bg-gradient-to-r from-blue-400 to-violet-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
      >
        Grab your Mentorship Now!
      </a>
    </div>
  </div>
)}

      {/* Main content */}
      <div className={`flex justify-center items-center min-h-screen bg-white px-4 py-6 ${showAd ? 'blur-sm' : ''}`}>
        <div className="w-full max-w-full bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-violet-700 via-pink-400 to-indigo-400 text-transparent bg-clip-text text-center">
            Upload Your File
          </h2>

          <div className="mt-4">
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-lg cursor-pointer"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 border rounded-lg"
              autoComplete="email"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full p-2 border rounded-lg"
              pattern="[6-9]{1}[0-9]{9}"
              maxLength="10"
              title="Enter a valid 10-digit Indian phone number"
            /> */}
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 mb-1">Select JEE Mains Date:</label>
            <input
              type="date"
              value={jeeDate}
              onChange={(e) => setJeeDate(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 mb-1">Select JEE Mains Shift:</label>
            <select
              value={jeeShift}
              onChange={(e) => setJeeShift(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              {shiftOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mr-2"
            />
            <label htmlFor="agree" className="text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>

          <button
            onClick={handleUpload}
            className="mt-4 w-full bg-gradient-to-r from-violet-400 via-pink-300 to-indigo-400 text-white py-2 rounded-lg hover:shadow-md transition duration-200 disabled:bg-gray-300"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload"}
          </button>

          {message && (
            <p
              className={`mt-4 text-center ${
                message.includes("successfully") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
      {responseData  && <>
        <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-bold text-blue-400">{name || "N/A"}</h2>
          <p className="text-gray-400"><strong>Shift:</strong> {jeeShift|| "N/A"}</p>
          <p className="text-gray-400"><strong>Email:</strong> {email || "N/A"}</p>
          <p className="text-green-400"><strong>Score:</strong> {responseData.total || "N/A"}</p>
          <p className="text-green-400"><strong>MCQ Score:</strong> {responseData.mcqResult.total_score || "N/A"}</p>
          <p className="text-green-400"><strong> SA Score:</strong> {responseData.total-responseData.mcqResult.total_score  || "N/A"}</p>
        </div>
        </>
      }
    </div>
  );
};

export default FileUpload;
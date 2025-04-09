import React, { useState } from "react";
import api from "../Api/api"
import {useNavigate} from 'react-router-dom'
import {useGoogleLogin} from '@react-oauth/google'

const Login = () => {
  const [email, setEmail] = useState("");
  const navigator=useNavigate();
  const [password, setPassword] = useState("");
const [User, setUser] = useState()
const responseGoogle= async (authresult) => {
  try {
    if(authresult['code']){
      console.log(authresult['code'])
      const data=await api.googleauth(authresult['code']);
      console.log(data);
      setUser(data);
      navigator('/');
    }
  } catch (error) {
    console.log(error)
  }
}

const handleLoginwithgoogle=useGoogleLogin({
  onSuccess: responseGoogle,
  onError: responseGoogle,
  flow:'auth-code'
})

  return (
    <div className="flex min-h-screen items-center justify-center bg-white ">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-white mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-violet-400 hover:bg-violet-500 text-white py-2 rounded-lg transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

       
      </div>
    </div>
  );
};

export default Login;
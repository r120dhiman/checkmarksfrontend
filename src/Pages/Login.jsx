import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Login() {
    const API_URL = import.meta.env.VITE_APP_BACKEND_URL;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post(`${API_URL}/user/login`, formData);
            if (response.data.token) {
                localStorage.setItem('Authinfo', response.data.token);
                navigate('/');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-pink-200 to-violet-300 overflow-hidden px-4">
            {/* Blur Effect */}
            <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>

            {/* Main Content */}
            <div className="relative z-10 bg-white/80 rounded-2xl shadow-xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-violet-600 text-center mb-6">
                    Welcome Back
                </h1>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Password</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={() => navigate('/forgot-password')}
                            className="text-sm text-violet-600 hover:text-pink-600"
                        >
                            Forgot Password?
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="text-sm text-violet-600 hover:text-pink-600"
                        >
                            Back to Home
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-4 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>

                    <div className="text-center text-gray-600">
                        Don't have an account?{' '}
                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                            className="text-violet-600 hover:text-pink-600 font-medium"
                        >
                            Sign up here
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
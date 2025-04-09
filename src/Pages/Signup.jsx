import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');

    const checkPasswordStrength = (password) => {
        const lengthRegex = /.{8,}/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        if (password === '') return '';
        
        let strength = 0;
        if (lengthRegex.test(password)) strength++;
        if (uppercaseRegex.test(password)) strength++;
        if (lowercaseRegex.test(password)) strength++;
        if (numberRegex.test(password)) strength++;
        if (specialCharRegex.test(password)) strength++;

        if (strength < 2) return 'Weak';
        if (strength < 4) return 'Moderate';
        return 'Strong';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (checkPasswordStrength(formData.password) === 'Weak') {
            setError('Please choose a stronger password');
            return;
        }

        try {
            const response = await axios.post('https://checkmarksbackend.onrender.com/user/signup', formData);
            if (response.data) {
                navigate('/login');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred during signup');
        }
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-pink-200 to-violet-300 overflow-hidden px-4">
            {/* Blur Effect */}
            <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>

            {/* Main Content */}
            <div className="relative z-10 bg-white/80 rounded-2xl shadow-xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-violet-600 text-center mb-6">
                    Create Account
                </h1>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
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
                            name="password"
                            value={formData.password}
                            onChange={(e) => {
                                setFormData({...formData, password: e.target.value});
                                setPasswordStrength(checkPasswordStrength(e.target.value));
                            }}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Create a strong password"
                        />
                        
                        {passwordStrength && (
                            <div className={`mt-2 text-sm ${
                                passwordStrength === 'Strong' ? 'text-green-600' :
                                passwordStrength === 'Moderate' ? 'text-yellow-600' :
                                'text-red-600'
                            }`}>
                                Password Strength: {passwordStrength}
                            </div>
                        )}

                        <div className="mt-3 text-sm text-gray-600">
                            <p className="font-medium mb-1">Password must contain:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>At least 8 characters</li>
                                <li>One uppercase letter</li>
                                <li>One lowercase letter</li>
                                <li>One number</li>
                                <li>One special character</li>
                            </ul>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition duration-200 transform hover:scale-[1.02]"
                    >
                        Sign Up
                    </button>

                    <div className="text-center text-gray-600">
                        Already have an account?{' '}
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="text-violet-600 hover:text-pink-600 font-medium"
                        >
                            Login here
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;

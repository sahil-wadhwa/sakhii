// src/pages/signup.js
'use client';

import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import { Eye, EyeOff, Calendar, User, Lock, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-4"
      >
        <div className="text-center">
          <div className='w-full justify-center flex mr-4'><img src='/logo_pink.png' alt='logo' width={100} height={100}></img></div>
          <h2 className="text-2xl text-black font-bold">Sign Up</h2>
          <p className="text-sm text-gray-500">Welcome! Let's get you started.</p>
        </div>

        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-3 text-gray-400" size={18} color='black'/>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* DOB */}
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-400" size={18} color='black'/>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-gray-400" size={18} color='black'/>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            className="w-full pl-10 pr-10 py-2 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 text-black">
            <input type="checkbox" name="remember" onChange={handleChange} />
            Remember me
          </label>
          <a href="#" className="text-indigo-600 font-medium hover:underline">Forgot password?</a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Sign In
        </button>

        {/* Or with */}
        <div className="text-center text-sm text-gray-500">Or continue with</div>
        <div className="flex gap-4">
          <button type="button" className="w-full text-black border flex justify-center items-center gap-4 py-2 rounded-md hover:bg-gray-50">
            <FcGoogle/>Google
          </button>
          <button type="button" className="w-full text-black border flex justify-center items-center gap-4 py-2 rounded-md hover:bg-gray-50">
            <FaFacebook/>Facebook
          </button>
        </div>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-500 mt-2">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 font-medium hover:underline">
            Log In
          </a>
        </p>
      </form>
    </div>
  );
}

'use client';

import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Mail, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: '', type: 'error' });

  // Hide popup after 3 seconds
  useEffect(() => {
    if (popup.show) {
      const timeout = setTimeout(() => setPopup({ ...popup, show: false }), 3000);
      return () => clearTimeout(timeout);
    }
  }, [popup]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.message === 'Login successful') {
        setPopup({ show: true, message: data.message, type: 'success' });
        router.push('/');
      } else {
        setPopup({ show: true, message: data.message || 'Login failed', type: 'error' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setPopup({ show: true, message: 'Something went wrong', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 relative">

      {/* Toast Popup */}
      {popup.show && (
        <div className={`fixed top-6 right-6 z-50 px-4 py-3 rounded-lg shadow-md text-white
          ${popup.type === 'error' ? 'bg-red-500' : 'bg-green-500'} animate-fade-in`}
        >
          <div className="flex items-center gap-2">
            <span>{popup.message}</span>
            <button onClick={() => setPopup({ ...popup, show: false })}>
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-4"
      >
        <div className="text-center">
          <div className='w-full justify-center flex mr-4'>
            <img src='/logo_pink.png' alt='logo' width={100} height={100} />
          </div>
          <h2 className="text-2xl text-black font-bold">Log In</h2>
          <p className="text-sm text-gray-500">Welcome back! Let's pick up where you left</p>
        </div>

        {/* Email */}
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
          disabled={loading}
          className={`w-full py-2 rounded-md font-semibold transition ${
            loading
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {loading ? (
            <div className="flex justify-center items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Logging in...
            </div>
          ) : (
            'Log In'
          )}
        </button>

        {/* Or continue with */}
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
          Don't have an account?{' '}
          <a href="/signup" className="text-indigo-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

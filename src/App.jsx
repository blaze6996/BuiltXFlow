import React, { useState } from 'react';
import { Linkedin, Instagram, Twitter, Youtube, Moon, Sun } from 'lucide-react';

export default function LaunchPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const bgClass = isDark 
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
    : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300';
  
  const textPrimary = isDark ? 'text-white' : 'text-gray-800';
  const textSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
  const inputBg = isDark ? 'bg-gray-800/80 border-gray-600 text-white placeholder-gray-400' : 'bg-white/80 border-gray-300 text-gray-800 placeholder-gray-500';
  const buttonBg = isDark ? 'from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500' : 'from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800';
  const socialBg = isDark ? 'bg-gray-800/80 hover:bg-gray-700' : 'bg-white/80 hover:bg-white';
  const socialText = isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900';
  const orbitColor = isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.2)';

  return (
    <div className={`min-h-screen ${bgClass} flex items-center justify-center p-4 relative overflow-hidden transition-all duration-500`}>
      {/* Theme toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 w-14 h-14 rounded-full ${socialBg} backdrop-blur-sm flex items-center justify-center ${socialText} shadow-lg hover:shadow-xl transition-all transform hover:scale-110`}
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-72 h-72 ${isDark ? 'bg-purple-500/20' : 'bg-white/20'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 ${isDark ? 'bg-blue-500/20' : 'bg-gray-400/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 ${isDark ? 'bg-indigo-500/20' : 'bg-gray-300/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl w-full text-center space-y-8">
        {/* Crazy Unique Logo */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="relative w-20 h-20">
            {/* Rotating orbital rings */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className={`absolute inset-0 border-4 ${isDark ? 'border-purple-500' : 'border-gray-700'} rounded-full opacity-30`}></div>
              <div className={`absolute top-0 left-1/2 w-3 h-3 ${isDark ? 'bg-purple-500' : 'bg-gray-700'} rounded-full transform -translate-x-1/2 -translate-y-1/2`}></div>
            </div>
            <div className="absolute inset-0 animate-spin-reverse" style={{ animationDelay: '0.5s' }}>
              <div className={`absolute inset-2 border-4 ${isDark ? 'border-blue-500' : 'border-gray-600'} rounded-full opacity-30`}></div>
              <div className={`absolute bottom-0 left-1/2 w-3 h-3 ${isDark ? 'bg-blue-500' : 'bg-gray-600'} rounded-full transform -translate-x-1/2 translate-y-1/2`}></div>
            </div>
            {/* Center core */}
            <div className={`absolute inset-0 flex items-center justify-center`}>
              <div className={`w-10 h-10 ${isDark ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-gray-800 to-gray-900'} rounded-lg transform rotate-45 animate-pulse shadow-2xl`}>
                <div className={`w-full h-full flex items-center justify-center transform -rotate-45`}>
                  <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-white'}`}>⚡</span>
                </div>
              </div>
            </div>
            {/* Floating particles */}
            <div className={`absolute top-0 right-0 w-2 h-2 ${isDark ? 'bg-cyan-400' : 'bg-gray-500'} rounded-full animate-ping`}></div>
            <div className={`absolute bottom-0 left-0 w-2 h-2 ${isDark ? 'bg-pink-400' : 'bg-gray-500'} rounded-full animate-ping`} style={{ animationDelay: '1s' }}></div>
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold ${isDark ? 'bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400' : 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900'} bg-clip-text text-transparent animate-gradient`}>
            BuiltXFlow
          </h1>
        </div>

        {/* Launching Soon */}
        <div className="space-y-4">
          <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary} animate-fade-in`}>
            Launching Soon
          </h2>
          <p className={`text-lg md:text-xl ${textSecondary} max-w-2xl mx-auto leading-relaxed`}>
            BuiltXFlow is the platform where developers build up their skills, showcase real projects, and
            connect with a global dev community. Please enter your email to join the waitlist.
          </p>
        </div>

        {/* Email input */}
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`flex-1 px-6 py-4 rounded-xl ${inputBg} backdrop-blur-sm border-2 focus:outline-none ${isDark ? 'focus:border-purple-500' : 'focus:border-gray-700'} transition-all shadow-lg`}
            />
            <button
              onClick={handleSubmit}
              className={`px-8 py-4 bg-gradient-to-r ${buttonBg} text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
            >
              Join Waitlist
            </button>
          </div>
          {submitted && (
            <p className={`mt-4 ${isDark ? 'text-green-400' : 'text-green-600'} font-semibold animate-fade-in`}>
              Thank you! You're on the list! 🎉
            </p>
          )}
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 pt-8">
          <button className={`w-12 h-12 ${socialBg} backdrop-blur-sm rounded-full flex items-center justify-center ${socialText} transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1`}>
            <Linkedin size={20} />
          </button>
          <button className={`w-12 h-12 ${socialBg} backdrop-blur-sm rounded-full flex items-center justify-center ${socialText} transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1`}>
            <Instagram size={20} />
          </button>
          <button className={`w-12 h-12 ${socialBg} backdrop-blur-sm rounded-full flex items-center justify-center ${socialText} transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1`}>
            <Twitter size={20} />
          </button>
          <button className={`w-12 h-12 ${socialBg} backdrop-blur-sm rounded-full flex items-center justify-center ${socialText} transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1`}>
            <Youtube size={20} />
          </button>
        </div>
      </div>

    </div>
  );
}
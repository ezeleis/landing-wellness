import React from 'react';

export default function ComingSoonBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-3 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <span className="font-bold text-lg">🚀 COMING SOON</span>
        </div>
        <div className="hidden md:block h-4 w-px bg-white/30"></div>
        <span className="hidden sm:block text-sm md:text-base font-medium">
          Revolutionary AI Wellness Platform • Launching Q2 2024
        </span>
        <div className="hidden md:block h-4 w-px bg-white/30"></div>
        <button className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full text-sm font-medium transition-colors">
          Join Waitlist
        </button>
      </div>
    </div>
  );
}
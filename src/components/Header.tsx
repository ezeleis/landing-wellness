import React from 'react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/6863422dcf5556a44fd35da4_1757542028937_f730805a.png" 
              alt="HealthiPhy.ai" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a 
              href="#waitlist" 
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-300"
            >
              Join Waitlist
            </a>

          </div>
        </div>
      </div>
    </header>
  );
}
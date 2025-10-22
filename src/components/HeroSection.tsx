import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/6863422dcf5556a44fd35da4_1757613732486_cec73ca7.png" 
            alt="HealthiPhy.ai Logo" 
            className="h-32 md:h-40 mx-auto"
          />
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg font-semibold mb-8 animate-bounce shadow-lg">
          <Sparkles className="w-5 h-5" />
          🚀 COMING SOON
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Making Optimum Health Choices Simple And...{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Addictive!
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed font-semibold">
          🚀 COMING SOON: The Health Platform That Changes Everything
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium">
          Finally... A Wellness System That Makes Getting Healthy As Irresistible As Checking Your Phone
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={() => {
              document.getElementById('email-opt-in')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
              });
            }}
          >
            🔥 GET EARLY ACCESS NOW
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          ⚡ Takes 30 seconds • 🔒 100% secure • 💯 No spam, ever
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-green-600">✅</span>
            <span>10,000+ People Waiting</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✅</span>
            <span>87% Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✅</span>
            <span>4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Gift, Star, Shield, Clock } from "lucide-react";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Limited Access Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-lg font-bold mb-8 shadow-lg animate-pulse">
            <Clock className="w-5 h-5 mr-2" />
            🏆 LIMITED EARLY ACCESS - Only 100 Founding Members
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Be Among the First 100 Health Champions
          </h2>
          
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Join our exclusive early access list and get:
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Gift className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">🎁 FREE Health Assessment</h3>
              <p className="text-sm opacity-80">(normally $97)</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">🎁 Founding Member Pricing</h3>
              <p className="text-sm opacity-80">(50% off lifetime)</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="font-bold text-lg mb-2">🎁 Priority Access</h3>
              <p className="text-sm opacity-80">when we launch</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 text-4xl">🤖</div>
              <h3 className="font-bold text-lg mb-2">🎁 Personal AI Setup</h3>
              <p className="text-sm opacity-80">Health Agent session</p>
            </div>
          </div>

          {/* Email Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8">
            <h3 className="text-2xl font-bold mb-6">⚡ SECURE YOUR SPOT NOW</h3>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8"
              >
                🔥 GET EARLY ACCESS
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="text-sm opacity-80 space-y-1">
              <p>⚡ Takes 30 seconds • 🔒 100% secure • 💯 No spam, ever</p>
              <p>✅ Free $97 assessment included</p>
              <p>✅ 50% founding member discount</p>
              <p>✅ Priority access when we launch</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-lg">
            <div className="flex items-center gap-2">
              <span className="text-yellow-300">⭐</span>
              <span>4.9/5 Rating from beta testers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300">🔒</span>
              <span>HIPAA Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-300">📊</span>
              <span>87% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
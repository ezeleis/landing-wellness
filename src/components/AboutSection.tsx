import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🧠 Your Health, Powered by Health Experts + Thinking AI
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            You Don't Have to Guess Anymore or Sort Through Slick Marketing for That One Magic Pill.
          </p>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            Get a clear plan forward to your optimum health, backed by:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">✅</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Health experts from around the world</h3>
                <p className="text-gray-600">Access to a global network of certified health professionals and specialists</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">✅</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced AI that learns YOUR unique needs</h3>
                <p className="text-gray-600">Personalized recommendations that adapt and evolve with your health journey</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">✅</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time biometric tracking (Oura Ring + more)</h3>
                <p className="text-gray-600">Seamless integration with your favorite wearables and health devices</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">✅</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gamification that makes healthy habits stick</h3>
                <p className="text-gray-600">Turn your wellness journey into an engaging, rewarding experience</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">🧠</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">AI Health Agent</h4>
                <p className="text-gray-600 mb-6">Your personal health companion that never sleeps</p>
                
                <div className="bg-white rounded-lg p-4 text-left">
                  <div className="text-sm text-gray-500 mb-2">Latest Insight:</div>
                  <div className="text-gray-800 font-medium">"Based on your sleep data, consider adjusting your evening routine for better recovery."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
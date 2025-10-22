import React from 'react';

export default function GamificationSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold mb-6 shadow-lg">
            🎮 LEVEL UP YOUR HEALTH GAME
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Level Up Your Health Game Like Never Before
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Tired of starting health programs you never finish? What if we told you there's a way to make optimal health choices so addictive, you'll actually CRAVE making better decisions?
          </p>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            Our AI-powered platform gamifies healthy choices, making behavior modification genuinely addictive. Each better decision earns XP, unlocks achievements, and builds unstoppable momentum toward your optimal health.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">XP & Achievement System</h3>
            <p className="text-gray-600">Earn points for every healthy choice you make and unlock exclusive achievements for reaching wellness milestones.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Streak Rewards</h3>
            <p className="text-gray-600">Build momentum with daily streaks that reward consistency in exercise, nutrition, sleep, and mindfulness practices.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Progress Tracking</h3>
            <p className="text-gray-600">Visual progress that motivates continued growth with personalized wellness journeys and guided missions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
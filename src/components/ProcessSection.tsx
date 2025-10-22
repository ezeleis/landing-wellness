import React from 'react';

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎯 3 Simple Steps to Agentic Longevity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your personalized path to optimal health in three easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Your Health Intake
            </h3>
            <p className="text-gray-600 mb-4">(5 minutes)</p>
            <p className="text-gray-700">
              Your AI agent starts learning your unique profile, health history, and wellness goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Connect Your Data
            </h3>
            <p className="text-gray-600 mb-4">(Labs, wearables, lifestyle)</p>
            <p className="text-gray-700">
              It reads and makes sense of YOUR personal health data for truly personalized insights.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Your Custom Protocol
            </h3>
            <p className="text-gray-600 mb-4">(Dynamic & evolving)</p>
            <p className="text-gray-700">
              Personalized plan that adapts as you level up and achieve your health milestones.
            </p>
          </div>
        </div>

        {/* Why People Are Waiting */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            🌟 Why 10,000+ People Are Waiting for This
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">87% Success Rate</h4>
              <p className="text-gray-600">Users actually achieve their health goals</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Real Results</h4>
              <p className="text-gray-600">Average user gains 15 health levels in 30 days</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">HIPAA Secure</h4>
              <p className="text-gray-600">Your data stays private, always</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">4.9/5 Rating</h4>
              <p className="text-gray-600">From beta testers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
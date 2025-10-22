import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">HealthiPhy.ai</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Making Optimum Health Addictive
            </p>
          </div>

          <div className="mb-8">
            <p className="text-gray-400 mb-4">Questions? Email us at:</p>
            <a 
              href="mailto:support@healthiphy.ai" 
              className="text-blue-400 hover:text-blue-300 text-lg font-medium"
            >
              support@healthiphy.ai
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 HealthiPhy.ai - Making Optimum Health Addictive
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function HeroForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setEmail('');
    setName('');
    setIsSubmitting(false);
    
    // Show success message (you could add toast here)
    alert('Thank you! We\'ll notify you when HealthiPhy.ai launches.');
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access</h3>
        <p className="text-gray-600">Be the first to experience AI-powered wellness</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full"
          />
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          No spam. Unsubscribe anytime. Privacy policy applies.
        </p>
      </form>
    </div>
  );
}
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const EmailOptInSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="email-opt-in" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Stay Updated on Your Health Journey
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Be the first to know when HealthiPhy.ai launches. Get exclusive early access and health optimization tips.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div>
            <Label htmlFor="firstName" className="sr-only">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="sr-only">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="sr-only">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
          >
            Get Early Access
          </Button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default EmailOptInSection;
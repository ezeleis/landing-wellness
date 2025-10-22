import React from 'react';
import ComingSoonBanner from './ComingSoonBanner';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import GamificationSection from './GamificationSection';
import ProcessSection from './ProcessSection';
import WaitlistSection from './WaitlistSection';
import EmailOptInSection from './EmailOptInSection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ComingSoonBanner />
      <div className="pt-16">
        <Header />
        <main>
          <HeroSection />
          <GamificationSection />
          <AboutSection />
          <ProcessSection />
          <WaitlistSection />
          <EmailOptInSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
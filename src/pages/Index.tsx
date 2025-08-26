import React from 'react';
import Header from '../components/Header';
import Hero from '../components/sections/Hero';
import BenefitsQuick from '../components/sections/BenefitsQuick';
import Demo from '../components/sections/Demo';
import Features from '../components/sections/Features';
import Highlights from '../components/sections/Highlights';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import SocialProof from '../components/sections/SocialProof';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Hero />
        <BenefitsQuick />
        <Demo />
        <Features />
        <Highlights />
        <Pricing />
        <FAQ />
        <SocialProof />
        <FinalCTA />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

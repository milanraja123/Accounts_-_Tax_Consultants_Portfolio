/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Language, translations } from './types';

// Layout Components
import { Footer } from './components/layout';

// Section Components
import {
  HeroSection,
  FeaturesSection,
  AboutSection,
  ServicesSection,
  StrategicMarketingSection,
  TeamSection,
  WhyChooseSection,
  ExpertAdviceSection,
} from './components/sections';

// Pages
import ContactPage from './pages/ContactPage';

// Other Components
import ContactModal from './components/ContactModal';

// Home Page Component
function HomePage() {
  // Language state
  const [lang, setLang] = useState<Language>('EN');

  // UI state
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Get active dictionary based on language state
  const dict = translations[lang];

  return (
    <div
      id="landing-hero-root"
      className="min-h-screen bg-white text-[#131926] relative overflow-hidden flex flex-col font-jakarta"
    >
      {/* Hero Section with integrated Navbar */}
      <HeroSection
        lang={lang}
        dict={dict}
        setIsContactOpen={setIsContactOpen}
      />

      {/* Features Section */}
      <FeaturesSection dict={dict} />

      {/* About Us Section */}
      <AboutSection
        dict={dict}
        setIsContactOpen={setIsContactOpen}
      />

      {/* Services Section */}
      <ServicesSection
        dict={dict}
        setIsContactOpen={setIsContactOpen}
      />

      {/* Strategic Marketing Section */}
      <StrategicMarketingSection dict={dict} />

      {/* Team Section */}
      <TeamSection dict={dict} />

      {/* Why Choose Section */}
      <WhyChooseSection
        dict={dict}
        setIsContactOpen={setIsContactOpen}
      />

      {/* Expert Advice Section */}
      <ExpertAdviceSection
        lang={lang}
        dict={dict}
      />

      {/* Footer */}
      <Footer
        lang={lang}
        dict={dict}
        setIsContactOpen={setIsContactOpen}
      />

      {/* Contact Form Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        dict={dict}
      />
    </div>
  );
}

// Contact Page Wrapper
function ContactPageWrapper() {
  const [lang] = useState<Language>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dict = translations[lang];

  return (
    <>
      <ContactPage dict={dict} setIsContactOpen={setIsContactOpen} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        dict={dict}
      />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

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
import IncomeTaxFilingPage from './pages/IncomeTaxFilingPage';
import ISOCertificationPage from './pages/ISOCertificationPage';
import GSTRegistrationPage from './pages/GSTRegistrationPage';
import GSTReturnFilingPage from './pages/GSTReturnFilingPage';
import MSMERegistrationPage from './pages/MSMERegistrationPage';
import PrivateLimitedCompanyPage from './pages/PrivateLimitedCompanyPage';
import ProprietorshipFirmPage from './pages/ProprietorshipFirmPage';
import FSSAIRegistrationPage from './pages/FSSAIRegistrationPage';
import TrademarkRegistrationPage from './pages/TrademarkRegistrationPage';

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

// Income Tax Filing Page Wrapper
function IncomeTaxFilingPageWrapper() {
  const [lang] = useState<Language>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dict = translations[lang];

  return (
    <>
      <IncomeTaxFilingPage dict={dict} setIsContactOpen={setIsContactOpen} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        dict={dict}
      />
    </>
  );
}

// ISO Certification Page Wrapper
function ISOCertificationPageWrapper() {
  const [lang] = useState<Language>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dict = translations[lang];

  return (
    <>
      <ISOCertificationPage dict={dict} setIsContactOpen={setIsContactOpen} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        dict={dict}
      />
    </>
  );
}

// GST Registration Page Wrapper
function GSTRegistrationPageWrapper() {
  const [lang] = useState<Language>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dict = translations[lang];

  return (
    <>
      <GSTRegistrationPage dict={dict} setIsContactOpen={setIsContactOpen} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        dict={dict}
      />
    </>
  );
}

// GST Return Filing Page Wrapper
function GSTReturnFilingPageWrapper() {
  const [lang] = useState<Language>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dict = translations[lang];

  return (
    <>
      <GSTReturnFilingPage dict={dict} setIsContactOpen={setIsContactOpen} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        dict={dict}
      />
    </>
  );
}

// MSME Registration Page Wrapper
function MSMERegistrationPageWrapper() {
  const [lang] = useState<Language>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dict = translations[lang];

  return (
    <>
      <MSMERegistrationPage dict={dict} setIsContactOpen={setIsContactOpen} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        dict={dict}
      />
    </>
  );
}

// Private Limited Company Page Wrapper
function PrivateLimitedCompanyPageWrapper() {
  const [lang] = useState<Language>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dict = translations[lang];

  return (
    <>
      <PrivateLimitedCompanyPage dict={dict} setIsContactOpen={setIsContactOpen} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        dict={dict}
      />
    </>
  );
}

// Proprietorship Firm Page Wrapper
function ProprietorshipFirmPageWrapper() {
  const [lang] = useState<Language>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dict = translations[lang];

  return (
    <>
      <ProprietorshipFirmPage dict={dict} setIsContactOpen={setIsContactOpen} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        dict={dict}
      />
    </>
  );
}

// FSSAI Registration Page Wrapper
function FSSAIRegistrationPageWrapper() {
  const [lang] = useState<Language>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dict = translations[lang];

  return (
    <>
      <FSSAIRegistrationPage dict={dict} setIsContactOpen={setIsContactOpen} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        dict={dict}
      />
    </>
  );
}

// Trademark Registration Page Wrapper
function TrademarkRegistrationPageWrapper() {
  const [lang] = useState<Language>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dict = translations[lang];

  return (
    <>
      <TrademarkRegistrationPage dict={dict} setIsContactOpen={setIsContactOpen} />
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
        <Route path="/income-tax-filing" element={<IncomeTaxFilingPageWrapper />} />
        <Route path="/iso-certification" element={<ISOCertificationPageWrapper />} />
        <Route path="/gst-registration" element={<GSTRegistrationPageWrapper />} />
        <Route path="/gst-return-filing" element={<GSTReturnFilingPageWrapper />} />
        <Route path="/msme-registration" element={<MSMERegistrationPageWrapper />} />
        <Route path="/private-limited-company-registration" element={<PrivateLimitedCompanyPageWrapper />} />
        <Route path="/proprietorship-firm-registration" element={<ProprietorshipFirmPageWrapper />} />
        <Route path="/fssai-registration" element={<FSSAIRegistrationPageWrapper />} />
        <Route path="/trademark-registration" element={<TrademarkRegistrationPageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

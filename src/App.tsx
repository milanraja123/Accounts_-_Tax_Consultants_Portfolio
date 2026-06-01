/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ChevronDown, Check, ArrowUpRight, Menu, X, Landmark, Compass, Award, ExternalLink, ShieldCheck, Mail, HeartHandshake, BookOpen, Wallet, Network } from 'lucide-react';
import { Language, translations } from './types';
import ContactModal from './components/ContactModal';
import HeroGraphic from './components/HeroGraphic';

// Import our custom generated high-key corporate meeting image
import businessMeetingImg from './assets/images/business_meeting_1780338519626.png';
import aboutUsImg from './assets/images/about_us_light_bulb_1780339109753.png';

// Team member portrait images
import teamAhmedGauharImg from './assets/images/team_ahmed_gauhar_1780340091431.png';
import teamGabrielaChivuImg from './assets/images/team_gabriela_chivu_1780340109608.png';
import teamDiyarUcakImg from './assets/images/team_diyar_ucak_1780340125728.png';

// Footer Background
import footerBannerBgImg from './assets/images/footer_banner_bg_1780340288358.png';
import davidProfileImg from './assets/images/david_profile_portrait_1780340543652.png';
import trustAccountantImg from './assets/images/trust_accountant_1780340780265.png';
import expertAdvisorImg from './assets/images/expert_advisor_1780341179206.png';
import davidLeoAvatarImg from './assets/images/david_leo_avatar_1780341197475.png';
import strategicMarketingImg from './assets/images/strategic_marketing_1780342531109.png';

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Get active dictionary based on language state
  const dict = translations[lang];

  // Custom Monogram SVG to replicate the exact "AD" logo
  const ADMonogram = ({ className = "h-8 w-8" }: { className?: string }) => (
    <div className={`relative flex items-center justify-center rounded-full bg-[#131926] ${className} select-none`}>
      <svg viewBox="0 0 100 100" className="h-[60%] w-[60%]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 28,75 L 43,25 L 53,25 L 68,75 M 34,60 L 62,60"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 52,25 C 72,25 82,40 82,50 C 82,60 72,75 52,75"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  // Sub-navigation dropdown definitions to make the page premium and interactive
  const navDropdowns: Record<string, Array<{ label: string; desc: string; icon: any }>> = {
    Services: [
      { label: 'Corporate Accounting', desc: 'Compliant tax, financial statements and auditing.', icon: Landmark },
      { label: 'Tax Advisory', desc: 'Capital and corporate tax strategy optimization.', icon: ShieldCheck },
      { label: 'Consulting', desc: 'Operational advisory & efficiency roadmaps.', icon: Compass },
    ],
    'Web Development': [
      { label: 'Enterprise Platforms', desc: 'Secure custom cloud web apps.', icon: Award },
      { label: 'Corporate Portals', desc: 'Dedicated investor relations & client interfaces.', icon: ExternalLink },
    ],
    About: [
      { label: 'Our Story', desc: 'How we became top advisors in Northern Europe.', icon: HeartHandshake },
      { label: 'Meet the Partners', desc: 'Expert consultants with global reach.', icon: Mail },
    ],
  };

  const navItems = ['Services', 'Web Development', 'About', 'Blog', 'Contact us', 'Career'];

  return (
    <div id="landing-hero-root" className="min-h-screen bg-white text-[#131926] relative overflow-hidden flex flex-col font-sans">
      
      {/* 1. TOP TICKER BAR */}
      <div id="ticker-top-bar" className="bg-[#10141e] text-white py-2 px-4 shadow-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans tracking-wide">
          <div className="flex items-center space-x-2 text-center sm:text-left gap-1 mb-1.5 sm:mb-0">
            <span className="text-gray-400 font-medium">Recent Weblog :</span>
            <span className="text-slate-300 font-semibold hover:text-white transition-colors cursor-pointer">
              {dict.tickerText}
            </span>
          </div>

          <div className="flex items-center space-x-3 gap-1">
            <button
              id="lang-btn-en"
              onClick={() => { setLang('EN'); setActiveDropdown(null); }}
              className={`cursor-pointer font-bold px-1.5 py-0.5 rounded transition-all ${
                lang === 'EN' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <span className="text-gray-600">|</span>
            <button
              id="lang-btn-dk"
              onClick={() => { setLang('DK'); setActiveDropdown(null); }}
              className={`cursor-pointer font-bold px-1.5 py-0.5 rounded transition-all ${
                lang === 'DK' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              DK
            </button>
          </div>
        </div>
      </div>

      {/* 2. CHIC DESKTOP NAVIGATION BAR */}
      <header id="main-navigation-header" className="relative bg-white z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand Frame */}
          <div id="logo-branding-frame" className="flex items-center space-x-3 cursor-pointer group">
            <ADMonogram className="h-9 w-9 border border-gray-100 transition-transform group-hover:scale-105" />
            <span className="text-base font-extrabold tracking-[0.2em] text-[#131926] font-sans">
              AD <span className="font-medium text-gray-500">FINANCY</span>
            </span>
          </div>

          {/* Nav Items with Floating Micro-menus */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-8 relative">
            {navItems.map((item) => {
              const hasDropdown = !!navDropdowns[item];
              const isSelected = activeDropdown === item;

              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <button
                    id={`nav-link-${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      if (item === 'Contact us') setIsContactOpen(true);
                    }}
                    className="flex items-center text-[14px] font-semibold text-slate-700 hover:text-[#131926] transition-colors py-3 cursor-pointer"
                  >
                    <span>{dict[item.toLowerCase().replace(' ', '') as keyof typeof dict] || item}</span>
                    {hasDropdown && (
                      <ChevronDown className="h-3.5 w-3.5 ml-1 text-slate-400 transition-transform duration-200" />
                    )}
                  </button>

                  {/* Micro dropdown component */}
                  <AnimatePresence>
                    {hasDropdown && isSelected && (
                      <motion.div
                        id={`dropdown-menu-${item.toLowerCase()}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full w-80 bg-white border border-slate-100 rounded-xl shadow-xl p-4 z-50 grid gap-3"
                      >
                        {navDropdowns[item].map((sub, sidx) => {
                          const IconComp = sub.icon;
                          return (
                            <div
                              key={sidx}
                              className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group/item"
                            >
                              <div className="p-1.5 rounded bg-slate-100 text-[#131926] group-hover/item:bg-[#1a253c] group-hover/item:text-white transition-colors">
                                <IconComp className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-[#131926]">{sub.label}</div>
                                <div className="text-[10px] text-gray-500 mt-0.5">{sub.desc}</div>
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Quick Call Link Segment */}
          <div id="hotline-contact-card" className="hidden sm:flex items-center space-x-3 select-none">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#131926] text-white">
              <Phone className="h-4 w-4 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">{dict.callUs}</span>
              <span className="text-sm font-extrabold text-[#131926]">+45 71469728</span>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-burger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg text-[#131926] hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-drawer-overlay"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    id={`mobile-nav-${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (item === 'Contact us') setIsContactOpen(true);
                    }}
                    className="block w-full text-left font-bold text-[#131926] hover:text-slate-500 py-2 border-b border-slate-50"
                  >
                    {dict[item.toLowerCase().replace(' ', '') as keyof typeof dict] || item}
                  </button>
                ))}
                
                {/* Mobile call link info */}
                <div className="pt-4 flex items-center space-x-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1a253c] text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold">{dict.callUs}</div>
                    <div className="text-sm font-extrabold text-[#11192b]">+45 71469728</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. CORE HERO SECTION GRID */}
      <main id="main-hero-showcase" className="flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div id="hero-left-content" className="lg:col-span-5 space-y-8 select-text">
              
              {/* Standalone Circular Logo Badge */}
              <motion.div
                id="hero-standalone-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex"
              >
                <ADMonogram className="h-16 w-16 shadow-lg" />
              </motion.div>

              {/* Exact Matching Headline with Literal Gap Spacing Before Comma */}
              <div className="space-y-4">
                <h1
                  id="hero-main-title"
                  className="text-[40px] sm:text-[48px] md:text-[54px] font-extrabold leading-[1.12] text-[#131926] tracking-tight"
                >
                  {lang === 'EN' ? (
                    <>
                      Accounting <span className="inline-block mr-1">,</span>Tax <br />
                      <span className="text-[#131926] font-extrabold">& Financial Services</span>
                    </>
                  ) : (
                    <>
                      Regnskab <span className="inline-block mr-1">,</span>Skat <br />
                      <span className="text-[#131926] font-extrabold">& Finansielle ydelser</span>
                    </>
                  )}
                </h1>

                {/* Subtitle Message */}
                <p id="hero-subphrase" className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed max-w-md">
                  {dict.subtitle}
                </p>
              </div>

              {/* Exact-looking CTA Button Set */}
              <div id="hero-btn-group" className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="hero-get-in-touch-btn"
                  onClick={() => setIsContactOpen(true)}
                  className="cursor-pointer bg-[#1a253c] hover:bg-[#11192b] text-white px-8 py-4 font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg rounded-[4px] border border-transparent"
                >
                  {dict.getInTouch}
                </button>

                <button
                  id="hero-about-us-btn"
                  onClick={() => {
                    const scrollTarget = document.getElementById('footer-scroll-anchor');
                    if (scrollTarget) {
                      scrollTarget.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="cursor-pointer bg-white border border-gray-300 hover:border-gray-500 text-slate-700 hover:text-slate-900 px-8 py-4 font-bold text-sm tracking-wide transition-all rounded-[4px] flex items-center justify-center gap-2"
                >
                  <span>{dict.aboutUsBtn}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Right overlapping composition Column */}
            <div id="hero-right-composition" className="lg:col-span-7 relative flex items-center justify-center">
              <div className="relative w-full max-w-[580px] h-full">
                
                {/* 1. Underlying dynamic dashboard (HeroGraphic) */}
                <div className="w-full h-full">
                  <HeroGraphic />
                </div>

                {/* 2. Overlapping Foreground Portrait Card */}
                <motion.div
                  id="overlapping-photography-card"
                  initial={{ opacity: 0, x: -30, y: 15 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
                  className="absolute top-[8%] left-[2%] w-[68%] aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                  style={{
                    boxShadow: '-15px 25px 50px -10px rgba(0,0,0,0.15)',
                  }}
                >
                  <img
                    id="meeting-foreground-image"
                    src={businessMeetingImg}
                    alt="Business Advisory Consultation Team"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover float-left"
                  />
                  
                  {/* Subtle decorative subtle gloss glass element overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent h-1/4 pointer-events-none" />
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* 4. BOTTOM SEAMBLESSED SCROLL TRIGGER BUTTON */}
      <div id="footer-scroll-anchor" className="relative flex justify-center z-30">
        
        {/* White circle down arrow cutout and badge button */}
        <div className="absolute -bottom-7 flex flex-col items-center select-none">
          <div className="relative flex items-center justify-center h-14 w-14">
            
            {/* Pulsing dotted dashed frame perimeter */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"
            />
            
            <motion.button
              id="scroll-arrow-btn"
              onClick={() => {
                alert(lang === 'EN' ? 'Consultancy Hub presentation expanded!' : 'Konsulenthub-præsentationen er udvidet!');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:border-gray-200 text-gray-500 hover:text-black transition-colors"
            >
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <ChevronDown className="h-5 w-5 stroke-[2.5]" />
              </motion.div>
            </motion.button>

          </div>
        </div>
      </div>

      {/* 5. BLACK/NAVY DYNAMIC FEATURES GRID SECTION */}
      <section id="features-highlight-section" className="bg-[#10141e] text-white py-20 pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient background decorative light glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 mt-6">
          
          {/* Header Title with Flanking Spiral Arrow Drawings */}
          <div className="flex items-center justify-center gap-4 md:gap-10 mb-16 text-center select-none">
            {/* Left Spiral Arrow */}
            <svg viewBox="0 0 100 80" className="hidden md:block w-[75px] h-[65px] opacity-40 text-gray-400 flex-shrink-0 transform -scale-x-100 rotate-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M 15,10 C 35,5 55,-5 72,15 C 88,35 82,60 62,55 C 42,50 38,25 58,30 C 78,35 82,65 72,75" />
              <path d="M 80,67 L 72,75 L 63,72" />
            </svg>

            <div className="space-y-1">
              <h2 className="text-3xl sm:text-[38px] font-extrabold text-white tracking-tight leading-tight font-sans">
                {dict.featuresTitle}
              </h2>
              <p className="text-3xl sm:text-[38px] font-extrabold text-white tracking-tight leading-tight font-sans">
                {dict.featuresSubtitle}
              </p>
            </div>

            {/* Right Spiral Arrow */}
            <svg viewBox="0 0 100 80" className="hidden md:block w-[75px] h-[65px] opacity-40 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M 15,10 C 35,5 55,-5 72,15 C 88,35 82,60 62,55 C 42,50 38,25 58,30 C 78,35 82,65 72,75" />
              <path d="M 80,67 L 72,75 L 63,72" />
            </svg>
          </div>

          {/* Elegant 2x2 Grid with Exact Color Matching */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1: Quality */}
            <motion.div
              id="feature-card-quality"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.0 }}
              className="bg-[#212530] border border-white/5 rounded-2xl p-8 md:p-10 flex items-start gap-6 hover:border-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#131926] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                {/* SVG badge representing check-in-seal Quality */}
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#94a3b8" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" d="M12 19.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5-7.5 3.358-7.5 7.5 3.358 7.5 7.5 7.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5l2 2 4.5-4.5" stroke="#38bdf8" strokeWidth="2" />
                </svg>
              </div>
              <div className="space-y-2 select-text">
                <h3 className="text-xl font-bold text-white tracking-wide">{dict.qualityTitle}</h3>
                <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed font-light">{dict.qualityDesc}</p>
              </div>
            </motion.div>

            {/* Card 2: Punctual */}
            <motion.div
              id="feature-card-punctual"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#212530] border border-white/5 rounded-2xl p-8 md:p-10 flex items-start gap-6 hover:border-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#131926] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                {/* SVG badge with clock with tiny secure check symbol */}
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#94a3b8" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#94a3b8" />
                  <path d="M12 7v5l2.5 1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 3v1M12 20v1M4 12h1M20 12h1" strokeLinecap="round" />
                  <circle cx="17" cy="17" r="3" fill="#131926" stroke="#38bdf8" strokeWidth="1.2" />
                  <path d="M16 17l.7.7 1.3-1.3" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="space-y-2 select-text">
                <h3 className="text-xl font-bold text-white tracking-wide">{dict.punctualTitle}</h3>
                <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed font-light">{dict.punctualDesc}</p>
              </div>
            </motion.div>

            {/* Card 3: Experince */}
            <motion.div
              id="feature-card-experience"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#212530] border border-white/5 rounded-2xl p-8 md:p-10 flex items-start gap-6 hover:border-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#131926] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                {/* SVG Thumbsup badge with feedback stars on top */}
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#94a3b8" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  {/* Small feedback stars */}
                  <path d="M10 2.5l.3.5.5.1-.4.4.1.5-.5-.3-.5.3.1-.5-.4-.4.5-.1z" fill="#38bdf8" stroke="transparent" />
                  <path d="M15 3l.3.5.5.1-.4.4.1.5-.5-.3-.5.3.1-.5-.4-.4.5-.1z" fill="#38bdf8" stroke="transparent" />
                  <path d="M19 4.5l.3.5.5.1-.4.4.1.5-.5-.3-.5.3.1-.5-.4-.4.5-.1z" fill="#38bdf8" stroke="transparent" />
                </svg>
              </div>
              <div className="space-y-2 select-text">
                <h3 className="text-xl font-bold text-white tracking-wide">{dict.experienceTitle}</h3>
                <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed font-light">{dict.experienceDesc}</p>
              </div>
            </motion.div>

            {/* Card 4: Support */}
            <motion.div
              id="feature-card-support"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#212530] border border-white/5 rounded-2xl p-8 md:p-10 flex items-start gap-6 hover:border-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#131926] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                {/* SVG representing holding / clasping partnership hands */}
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#cbd5e1" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 16s1.5-1.5 3-3 2.5-4 1-5.5-3-2.5-4.5-1-3 3-3 3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 8s-1.5 1.5-3 3-2.5 4-1 5.5 3 2.5 4.5 1 3-3 3-3" stroke="#38bdf8" strokeWidth="2" />
                  <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="#94a3b8" />
                </svg>
              </div>
              <div className="space-y-2 select-text">
                <h3 className="text-xl font-bold text-white tracking-wide">{dict.supportTitle}</h3>
                <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed font-light">{dict.supportDesc}</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5.5. ABOUT US EXACT MATCH DETAIL SECTION */}
      <section id="about-us-detailed-section" className="bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Left Column: Hand-held glowing bulb picture card */}
            <motion.div
              id="about-us-image-frame"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
              style={{
                boxShadow: '-10px 20px 40px -15px rgba(0, 0, 0, 0.12)',
              }}
            >
              <img
                id="about-us-glowing-image"
                src={aboutUsImg}
                alt="Creative ideas and finance strategies with glowing bulb"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Right Column: Exact typography & content details */}
            <motion.div
              id="about-us-text-frame"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Overline heading */}
              <div className="text-xs font-bold tracking-[0.16em] text-[#64748b] uppercase select-none">
                {dict.aboutUsHeader}
              </div>

              {/* Two Lines Heading matches spacing */}
              <div className="space-y-1">
                <h2 className="text-3xl sm:text-[36px] font-bold text-[#131926] leading-tight tracking-tight font-sans">
                  {dict.aboutUsHeadline1}
                </h2>
                <p className="text-3xl sm:text-[36px] font-extrabold text-[#131926] leading-tight tracking-tight font-sans">
                  {dict.aboutUsHeadline2}
                </p>
              </div>

              {/* Bold / Medium paragraph */}
              <p className="text-sm sm:text-[15px] font-semibold text-[#334155] leading-relaxed select-text">
                {dict.aboutUsText1}
              </p>

              {/* Subdued descriptive narrative */}
              <p className="text-[13px] sm:text-sm text-gray-400 font-light leading-relaxed select-text">
                {dict.aboutUsText2}
              </p>

              {/* About Us Button */}
              <div className="pt-2">
                <button
                  id="about-us-section-cta-btn"
                  onClick={() => setIsContactOpen(true)}
                  className="cursor-pointer bg-[#1a253c] hover:bg-[#11192b] text-white px-8 py-4 font-bold text-sm tracking-wide rounded-[4px] shadow-md hover:shadow-lg transition-all"
                >
                  {dict.aboutUsBtn}
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5.6. DYNAMIC THREE-COLUMN SERVICES OVERVIEW (MATCHING DESIGN & BACKGROUND) */}
      <section id="services-grid-section" className="relative bg-[#10141e] text-white py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
        
        <div className="max-w-6xl mx-auto relative z-10 space-y-16">
          
          {/* Header Title Information */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 id="services-main-section-title" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {dict.servicesSectionTitle}
            </h2>
            <div id="services-subtitle-overline" className="text-[12px] md:text-xs font-bold tracking-[0.25em] text-[#94a3b8] uppercase">
              {dict.servicesSectionSub}
            </div>
            <p id="services-main-desc" className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
              {dict.servicesSectionDesc}
            </p>
          </div>

          {/* Three Column Matrix with dividing borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/10 md:divide-x md:divide-white/10 py-6 md:py-0">
            
            {/* Column 1: Accounting */}
            <motion.div
              id="service-col-accounting"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-8 md:p-12 space-y-6 flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
            >
              <div className="space-y-4">
                <h3 className="text-3xl md:text-[34px] font-bold text-white tracking-tight leading-none group-hover:text-[#38bdf8] transition-colors">
                  {dict.servicesSectionAccountingTitle}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light select-text">
                  {dict.servicesSectionAccountingDesc}
                </p>
              </div>

              <div className="pt-4">
                <button
                  id="accounting-see-more-btn"
                  onClick={() => setIsContactOpen(true)}
                  className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-[#38bdf8] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>{dict.seeMore}</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>

            {/* Column 2: Tax */}
            <motion.div
              id="service-col-tax"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-8 md:p-12 space-y-6 flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
            >
              <div className="space-y-4">
                <h3 className="text-3xl md:text-[34px] font-bold text-white tracking-tight leading-none group-hover:text-[#38bdf8] transition-colors">
                  {dict.servicesSectionTaxTitle}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light select-text">
                  {dict.servicesSectionTaxDesc}
                </p>
              </div>

              <div className="pt-4">
                <button
                  id="tax-see-more-btn"
                  onClick={() => setIsContactOpen(true)}
                  className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-[#38bdf8] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>{dict.seeMore}</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>

            {/* Column 3: Consulting */}
            <motion.div
              id="service-col-consulting"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group p-8 md:p-12 space-y-6 flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
            >
              <div className="space-y-4">
                <h3 className="text-3xl md:text-[34px] font-bold text-white tracking-tight leading-none group-hover:text-[#38bdf8] transition-colors">
                  {dict.servicesSectionConsultingTitle}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light select-text">
                  {dict.servicesSectionConsultingDesc}
                </p>
              </div>

              <div className="pt-4">
                <button
                  id="consulting-see-more-btn"
                  onClick={() => setIsContactOpen(true)}
                  className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-[#38bdf8] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>{dict.seeMore}</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5.6.8. STRATEGIC MARKETING SECTION */}
      <section id="strategic-marketing-section" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Top Banner Card with Background Image overlay */}
          <div className="relative rounded-[32px] overflow-hidden aspect-[21/9] sm:aspect-[2.4/1] shadow-xl text-white group bg-slate-900 border-4 border-white">
            <img
              src={strategicMarketingImg}
              alt="Strategic Marketing Collage"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transform group-hover:scale-[1.01] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Gradient Overlay for supreme text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 sm:from-black/75 sm:via-black/15 sm:to-black/5" />

            {/* Banner Contents Flex container */}
            <div className="absolute inset-0 p-6 sm:p-10 md:p-12 flex flex-col justify-end">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                
                {/* Headline (Bottom-left) */}
                <div className="max-w-lg text-left space-y-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold tracking-tight text-white leading-tight font-sans drop-shadow-sm select-text">
                    {dict.growthMarketingTitle}
                  </h2>
                </div>

                {/* Overlap badge bottom-right */}
                <div className="flex-shrink-0 self-start md:self-end">
                  <div className="bg-black/35 backdrop-blur-md border border-white/10 rounded-2xl py-3 px-5 text-left shadow-lg select-none min-w-[200px]">
                    <div className="text-[#519d6d] text-xl sm:text-2xl font-black tracking-tight leading-none">
                      {dict.growthMarketingConsultingYears}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-gray-300 tracking-wider uppercase mt-1 leading-none">
                      {dict.growthMarketingConsultingLabel}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Grid: 3 Clean White/Mild-Gray Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Column 1: Consultancy */}
            <motion.div
              id="marketing-feature-1"
              whileHover={{ y: -3 }}
              className="bg-white rounded-[28px] p-8 text-left shadow-sm border border-emerald-500/5 hover:border-emerald-500/15 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Green circle link icon */}
                <div className="w-12 h-12 rounded-full bg-[#ebf4ee] flex items-center justify-center text-[#3c8e59] flex-shrink-0 select-none">
                  <Network className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-base sm:text-lg font-extrabold text-[#111927] tracking-tight">
                    {dict.growthMarketingCard1Title}
                  </h4>
                  <p className="text-[13px] text-gray-500 font-light leading-relaxed select-text">
                    {dict.growthMarketingCard1Desc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Audit & Assurance */}
            <motion.div
              id="marketing-feature-2"
              whileHover={{ y: -3 }}
              className="bg-white rounded-[28px] p-8 text-left shadow-sm border border-emerald-500/5 hover:border-emerald-500/15 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Green circle Book icon */}
                <div className="w-12 h-12 rounded-full bg-[#ebf4ee] flex items-center justify-center text-[#3c8e59] flex-shrink-0 select-none">
                  <BookOpen className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-base sm:text-lg font-extrabold text-[#111927] tracking-tight">
                    {dict.growthMarketingCard2Title}
                  </h4>
                  <p className="text-[13px] text-gray-500 font-light leading-relaxed select-text">
                    {dict.growthMarketingCard2Desc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Column 3: Tax Planning Services */}
            <motion.div
              id="marketing-feature-3"
              whileHover={{ y: -3 }}
              className="bg-white rounded-[28px] p-8 text-left shadow-sm border border-emerald-500/5 hover:border-emerald-500/15 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Green circle wallet icon */}
                <div className="w-12 h-12 rounded-full bg-[#ebf4ee] flex items-center justify-center text-[#3c8e59] flex-shrink-0 select-none">
                  <Wallet className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-base sm:text-lg font-extrabold text-[#111927] tracking-tight">
                    {dict.growthMarketingCard3Title}
                  </h4>
                  <p className="text-[13px] text-gray-500 font-light leading-relaxed select-text">
                    {dict.growthMarketingCard3Desc}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
      
      {/* 5.7. OUR TEAM SECTION (EXACT REPLICA DESIGN) */}
      <section id="our-team-section" className="bg-white py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Centered Section Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 id="team-section-title" className="text-4xl sm:text-[40px] font-bold text-gray-900 tracking-tight leading-tight">
              {dict.teamTitle}
            </h2>
            <p id="team-section-subtitle" className="text-sm sm:text-[15px] font-light text-gray-500 leading-relaxed max-w-md md:max-w-xl mx-auto select-text">
              {dict.teamDesc}
            </p>
          </div>

          {/* Three-Column Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            
            {/* Team Member 1: Ahmed Gauhar */}
            <motion.div
              id="team-card-ahmed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col space-y-5"
            >
              {/* Image Frame with subtle rounded corners */}
              <div className="w-full aspect-[3/4] bg-gray-50 overflow-hidden rounded-[4px] border border-gray-100 shadow-sm">
                <img
                  src={teamAhmedGauharImg}
                  alt="Ahmed Gauhar - Founder"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300 transform hover:scale-[1.02]"
                />
              </div>
              
              {/* Profile Bar with Badge */}
              <div className="flex items-center gap-4">
                {/* Dark Blue Logo Badge */}
                <div className="w-12 h-12 rounded-full bg-[#1a253c] text-white flex items-center justify-center font-bold text-sm tracking-wider flex-shrink-0 select-none">
                  AD
                </div>
                {/* Details stack */}
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-[#111927] text-sm sm:text-base select-text">
                    Ahmed Gauhar
                  </span>
                  <span className="text-xs sm:text-[13px] text-gray-500 font-medium select-text">
                    {dict.founderRole}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Team Member 2: Gabriela Chivu */}
            <motion.div
              id="team-card-gabriela"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col space-y-5"
            >
              {/* Image Frame with subtle rounded corners */}
              <div className="w-full aspect-[3/4] bg-gray-50 overflow-hidden rounded-[4px] border border-gray-100 shadow-sm">
                <img
                  src={teamGabrielaChivuImg}
                  alt="Gabriela Chivu - Assistant"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300 transform hover:scale-[1.02]"
                />
              </div>

              {/* Profile Bar with Badge */}
              <div className="flex items-center gap-4">
                {/* Dark Reddish/Brown Logo Badge */}
                <div className="w-12 h-12 rounded-full bg-[#4a1212] text-white flex items-center justify-center font-bold text-sm tracking-wider flex-shrink-0 select-none">
                  AD
                </div>
                {/* Details stack */}
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-[#111927] text-sm sm:text-base select-text">
                    Gabriela Chivu
                  </span>
                  <span className="text-xs sm:text-[13px] text-gray-500 font-medium select-text">
                    {dict.assistantRole}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Team Member 3: Diyar Ucak */}
            <motion.div
              id="team-card-diyar"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col space-y-5"
            >
              {/* Image Frame with subtle rounded corners */}
              <div className="w-full aspect-[3/4] bg-gray-50 overflow-hidden rounded-[4px] border border-gray-100 shadow-sm">
                <img
                  src={teamDiyarUcakImg}
                  alt="Diyar Ucak - Accountant"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300 transform hover:scale-[1.02]"
                />
              </div>

              {/* Profile Bar with Badge */}
              <div className="flex items-center gap-4">
                {/* Dark Reddish/Brown Logo Badge */}
                <div className="w-12 h-12 rounded-full bg-[#4a1212] text-white flex items-center justify-center font-bold text-sm tracking-wider flex-shrink-0 select-none">
                  AD
                </div>
                {/* Details stack */}
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-[#111927] text-sm sm:text-base select-text">
                    Diyar Ucak
                  </span>
                  <span className="text-xs sm:text-[13px] text-gray-500 font-medium select-text">
                    {dict.accountantRole}
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5.7.5. WHY CHOOSE DAVID SECTION (STYLISH SAGE CANVAS & GRID) */}
      <section id="why-choose-david-section" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Rounded Box Card */}
          <div className="bg-[#f3f6f3] rounded-[32px] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center shadow-sm">
            
            {/* Left Column: Portrait photo within double-border shadow frame */}
            <motion.div
              id="david-photo-container"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 w-full relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white group/portrait"
            >
              <img
                src={davidProfileImg}
                alt="David, CPA - Tax & Finance Expert"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Right Column: Title and 2x2 Feature Grid */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Overline Badge */}
              <div className="flex items-center gap-2 select-none">
                {/* Custom Green Sparkle Vector */}
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-[#3c8e59] fill-current animate-pulse" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8Q12 2 12 2" />
                </svg>
                <div id="why-overline-text" className="text-xs font-black tracking-wider text-[#1e293b] uppercase">
                  {dict.whyTitleOverline}
                </div>
              </div>

              {/* Dynamic Headline with Highlighted Part */}
              <div className="space-y-3">
                <h2 id="why-title-h2" className="text-3xl sm:text-[44px] font-extrabold text-[#111927] tracking-tight leading-none font-sans">
                  {dict.whyDavidTitlePart1}
                  <span className="text-[#3c8e59] relative inline-block ml-1">
                    {dict.whyDavidTitlePart2}
                  </span>
                </h2>
                <p id="why-helper-subtitle" className="text-sm sm:text-[15px] font-light text-gray-500 leading-relaxed max-w-xl">
                  {dict.whyDavidSub}
                </p>
              </div>

              {/* 2x2 Grid of Rounded White Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                
                {/* Grid Item 1 */}
                <motion.div
                  id="why-card-1"
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-500/5 hover:border-emerald-500/10 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#ebf4ee] flex items-center justify-center text-[#3c8e59] flex-shrink-0 select-none">
                      {/* Briefcase/Credential portfolio outline icon */}
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-extrabold text-[#111927] tracking-tight">
                        {dict.whyDavidCard1Title}
                      </h4>
                      <p className="text-[12px] text-gray-400 font-light leading-relaxed select-text">
                        {dict.whyDavidCard1Desc}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Grid Item 2 */}
                <motion.div
                  id="why-card-2"
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-500/5 hover:border-emerald-500/10 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#ebf4ee] flex items-center justify-center text-[#3c8e59] flex-shrink-0 select-none">
                      {/* Shield of Ethics Outline */}
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-extrabold text-[#111927] tracking-tight">
                        {dict.whyDavidCard2Title}
                      </h4>
                      <p className="text-[12px] text-gray-400 font-light leading-relaxed select-text">
                        {dict.whyDavidCard2Desc}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Grid Item 3 */}
                <motion.div
                  id="why-card-3"
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-500/5 hover:border-emerald-500/10 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#ebf4ee] flex items-center justify-center text-[#3c8e59] flex-shrink-0 select-none">
                      {/* Double Users outline / personalized advisory */}
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-extrabold text-[#111927] tracking-tight">
                        {dict.whyDavidCard3Title}
                      </h4>
                      <p className="text-[12px] text-gray-400 font-light leading-relaxed select-text">
                        {dict.whyDavidCard3Desc}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Grid Item 4 */}
                <motion.div
                  id="why-card-4"
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-500/5 hover:border-emerald-500/10 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#ebf4ee] flex items-center justify-center text-[#3c8e59] flex-shrink-0 select-none">
                      {/* Wallet line / tax savings expert */}
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h14v4" />
                        <path d="M4 6v12a2 2 0 0 0 2 2h14v-4" />
                        <path d="M18 12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4v-6z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-extrabold text-[#111927] tracking-tight">
                        {dict.whyDavidCard4Title}
                      </h4>
                      <p className="text-[12px] text-gray-400 font-light leading-relaxed select-text">
                        {dict.whyDavidCard4Desc}
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Get in Touch CTA pill button with arrow circle */}
              <div className="pt-2">
                <button
                  id="why-david-section-cta"
                  onClick={() => setIsContactOpen(true)}
                  className="cursor-pointer group inline-flex items-center gap-3 bg-[#519d6d] hover:bg-[#43835a] text-white font-extrabold text-sm px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <span>{dict.getInTouch}</span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#519d6d] transform group-hover:translate-x-1 transition-transform">
                    <Check className="h-3.5 w-3.5 stroke-[3] text-[#519d6d]" />
                  </div>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5.7.8. TRUST ACCOUNTANTS INTEGRATION SECTION */}
      <section id="trust-accountants-section" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Main Content Grid: Image Left, Text/Stats Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Custom organic rounded shaped photo frame */}
            <motion.div
              id="trust-photo-container"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 w-full relative aspect-[3/4] bg-gray-50 overflow-hidden rounded-[32px] rounded-tl-[100px] rounded-br-[100px] shadow-xl border-4 border-white"
            >
              <img
                src={trustAccountantImg}
                alt="Our professional accountant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Right Column: Title, paragraph and large green stats */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Dynamic Header */}
              <div className="space-y-4">
                <h2 id="trust-section-title-h2" className="text-3xl sm:text-[44px] font-extrabold text-[#111927] tracking-tight leading-tight font-sans">
                  {dict.trustTitle}
                </h2>
                <p id="trust-section-desc-p" className="text-sm sm:text-[15px] font-light text-gray-500 leading-relaxed max-w-xl select-text">
                  {dict.trustDesc}
                </p>
              </div>

              {/* Grid block displaying large green digital KPI indicators */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                {/* Stat 1 */}
                <div id="trust-stat-audits" className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-black text-[#519d6d] tracking-tight select-none">
                    {dict.trustAuditValue}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold tracking-wider text-[#64748b] uppercase select-none">
                    {dict.trustAuditLabel}
                  </div>
                </div>

                {/* Stat 2 */}
                <div id="trust-stat-filing" className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-black text-[#519d6d] tracking-tight select-none">
                    {dict.trustFilingValue}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold tracking-wider text-[#64748b] uppercase select-none">
                    {dict.trustFilingLabel}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Banner bottom block: Dark teal premium looking for premium accounting CTA card */}
          <motion.div
            id="premium-cta-banner-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#20313c] rounded-3xl p-8 sm:p-12 md:py-14 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 text-left shadow-lg relative overflow-hidden"
          >
            {/* Soft Ambient decorative background gradient to replicate illustration premium accent */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-2 relative z-10 max-w-xl">
              <h3 className="text-2xl sm:text-[34px] font-extrabold text-white tracking-tight leading-tight font-sans">
                {dict.ctaBannerTitle}
              </h3>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="cursor-pointer bg-white text-[#2a3c46] hover:bg-gray-100 active:scale-95 font-bold text-sm tracking-wide px-8 py-4 rounded-xl shadow-md transition-all uppercase"
              >
                {dict.ctaBannerBtn}
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5.7.9. EXPERT ADVICE FOR BUSINESSES & TESTIMONIALS */}
      <section id="expert-advice-section" className="bg-[#fbfcfa] py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Main advice row: content left, gorgeous portrait right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Col: Explanations + stats */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <h2 id="expert-advice-title-h2" className="text-3xl sm:text-[44px] font-extrabold text-[#111927] tracking-tight leading-tight font-sans">
                  {dict.expertAdviceTitle}
                </h2>
                <p id="expert-advice-desc-p" className="text-sm sm:text-[15px] font-light text-gray-500 leading-relaxed max-w-xl select-text">
                  {dict.expertAdviceSub}
                </p>
              </div>

              {/* Statistics Row layout */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                {/* Stat 1 */}
                <div id="expert-stat-1" className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-black text-[#519d6d] tracking-tight select-none">
                    {dict.expertAdviceStat1Value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold tracking-wider text-[#64748b] uppercase select-none">
                    {dict.expertAdviceStat1Label}
                  </div>
                </div>

                {/* Stat 2 */}
                <div id="expert-stat-2" className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-black text-[#519d6d] tracking-tight select-none">
                    {dict.expertAdviceStat2Value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold tracking-wider text-[#64748b] uppercase select-none">
                    {dict.expertAdviceStat2Label}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Custom leaf/organic shaped photo frame */}
            <motion.div
              id="expert-photo-container"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 w-full relative aspect-[3/4] bg-gray-50 overflow-hidden rounded-[40px] rounded-tl-[120px] rounded-br-[120px] shadow-xl border-4 border-white"
            >
              <img
                src={expertAdvisorImg}
                alt="Our Expert Advisor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
            </motion.div>

          </div>

          {/* Testimonial Box */}
          <motion.div
            id="expert-testimonial-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-[32px] p-8 md:p-12 lg:p-14 shadow-sm border border-gray-100 flex flex-col space-y-8 relative overflow-hidden"
          >
            
            {/* Top Row: Quotes SVG Icon */}
            <div className="flex justify-start">
              <svg className="w-12 h-12 text-[#a3d9b4] fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 10.143-9.609v3.767c-3.678.068-5.169 1.526-5.169 4.158h5.025v9.075h-10.016zm-14.017 0v-7.391c0-5.704 3.748-9.57 10.162-9.609v3.767c-3.678.068-5.169 1.526-5.169 4.158h5.025v9.075h-10.018z" />
              </svg>
            </div>

            {/* Quote Text with precise green highlights */}
            <blockquote className="text-left font-sans">
              <p className="text-lg sm:text-[22px] md:text-2xl font-bold text-[#111927] leading-relaxed select-text">
                " {lang === 'EN' ? (
                  <>
                    When we needed funding to initiate a <span className="text-[#3c8e59]">new</span> project, <span className="text-[#3c8e59]">their</span> team provided us with excellent options and <span className="text-[#3c8e59]">guided us through the</span> loan process seamlessly. The personalized attention and <span className="text-[#3c8e59]">tailored</span> financial solutions were exactly what we were looking for.
                  </>
                ) : (
                  <>
                    Da vi havde brug for finansiering til at starte et <span className="text-[#3c8e59]">nyt</span> projekt, gav <span className="text-[#3c8e59]">deres</span> team os fremragende muligheder og <span className="text-[#3c8e59]">guidede os problemfrit igennem</span> låneprocessen. Den personlige opmærksomhed og de <span className="text-[#3c8e59]">skræddersyede</span> økonomiske løsninger var præcis det, vi søgte.
                  </>
                )} "
              </p>
            </blockquote>

            {/* Author Profile + Swiper indicator dots */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-50">
              
              {/* Profile stack */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={davidLeoAvatarImg}
                  alt="David Leo"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-gray-100 shadow-sm"
                />
                <div className="flex flex-col leading-tight text-left">
                  <span className="font-bold text-[#111927] text-sm sm:text-base select-text">
                    {dict.testimonialAuthorName}
                  </span>
                  <span className="text-xs sm:text-[13px] text-gray-500 font-medium select-text">
                    {dict.testimonialAuthorTitle}
                  </span>
                </div>
              </div>

              {/* Slider dots indicator exactly representing caravan slider dots */}
              <div className="flex items-center gap-2 select-none self-start sm:self-center">
                <div className="w-7 h-1.5 rounded-full bg-[#824bb0]" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* 5.8. FOOTER WITH NEWSLETTER OVERLAP BANNER SECTION */}
      <footer id="main-application-footer" className="relative w-full overflow-hidden">
        
        {/* Banner with background image */}
        <div className="relative py-14 px-6 md:px-12 lg:px-16 bg-[#161d2d] text-white">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src={footerBannerBgImg}
              alt="Background collage"
              className="w-full h-full object-cover opacity-25 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#161d2d]/80" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* Title / CTA */}
            <div className="max-w-xl text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight font-sans">
                {dict.footerJoinTitle}
              </h3>
            </div>

            {/* Input Form exactly as depicted in illustration */}
            <div className="w-full md:w-auto flex-shrink-0">
              <div className="bg-white rounded-lg p-1 w-full md:w-[480px] flex items-center justify-between shadow-lg">
                <input
                  type="email"
                  placeholder={dict.footerSubscribePlaceholder}
                  className="bg-transparent text-gray-800 placeholder-gray-400 font-light text-sm px-4 py-2 w-full focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="cursor-pointer bg-[#1c2333] hover:bg-[#111622] text-white px-6 py-3 font-semibold text-xs tracking-wider uppercase rounded-md transition-colors flex-shrink-0 flex items-center gap-1.5"
                >
                  <span>{dict.footerSubscribeBtn}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lower footer: light slate-blue-gray background */}
        <div className="bg-[#f3f5f8] text-gray-800 py-16 px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            
            {/* 3 Columns structure */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-16">
              
              {/* Brand Col */}
              <div className="md:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  {/* Reuse ADMonogram nicely */}
                  <ADMonogram className="h-10 w-10" />
                  <span className="font-extrabold text-[22px] tracking-wider text-[#131926] font-sans">
                    FINANCY
                  </span>
                </div>
                
                <p className="text-xs sm:text-[13px] text-gray-500 font-normal leading-relaxed text-justify pr-0 md:pr-12 select-text">
                  {dict.footerDescText}
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="cursor-pointer inline-flex items-center gap-0.5 ml-1 text-xs font-semibold text-[#1a253c] hover:underline"
                  >
                    <span>{dict.seeMore}</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </p>
              </div>

              {/* Useful Links Col */}
              <div className="md:col-span-3 space-y-6 text-left">
                <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#131926]">
                  {dict.footerUsefulLinksTitle}
                </h4>
                <ul className="space-y-3.5 text-xs text-gray-500 font-medium">
                  <li>
                    <a href="#services-grid-section" className="hover:text-gray-900 transition-colors">
                      {dict.services}
                    </a>
                  </li>
                  <li>
                    <a href="#about-us-detailed-section" className="hover:text-gray-900 transition-colors">
                      {dict.aboutUsBtn}
                    </a>
                  </li>
                  <li>
                    <a href="#features-explore" className="hover:text-gray-900 transition-colors">
                      {lang === 'EN' ? 'Weblog' : 'Blog'}
                    </a>
                  </li>
                  <li>
                    <button onClick={() => setIsContactOpen(true)} className="cursor-pointer hover:text-gray-900 transition-colors text-left w-full">
                      {dict.career}
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contact Info Col */}
              <div className="md:col-span-3 space-y-6 text-left">
                <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#131926]">
                  {dict.footerContactInfoTitle}
                </h4>
                <ul className="space-y-3.5 text-xs text-gray-500 font-medium select-text">
                  <li className="hover:text-gray-900 transition-colors underline decoration-dotted">
                    {dict.footerAddressLabel}
                  </li>
                  <li className="hover:text-gray-900 transition-colors">
                    <a href="tel:+4571469728" className="hover:underline">
                      {dict.footerTelLabel}
                    </a>
                  </li>
                  <li className="hover:text-gray-900 transition-colors font-mono">
                    {dict.footerFaxLabel}
                  </li>
                  <li className="hover:text-gray-900 transition-colors">
                    <a href="mailto:Contact@adfinancy.com" className="hover:underline">
                      {dict.footerEmailLabel}
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            {/* Divider line exactly matching screenshot */}
            <div className="border-t border-gray-200/80 w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
              <div>
                <a href="https://karmatechhub.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors font-medium">
                  Karmatechhub.com
                </a>
              </div>
              <div className="flex items-center gap-6 font-medium">
                <a href="#" className="hover:text-gray-600 transition-colors">
                  {lang === 'EN' ? 'Terms and conditions' : 'Vilkår og betingelser'}
                </a>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  {lang === 'EN' ? 'Privacy policy' : 'Fortrolighedspolitik'}
                </a>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  {lang === 'EN' ? 'Product' : 'Produkt'}
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* 6. CONTACT FORM MODAL popup */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        dict={dict}
      />
    </div>
  );
}

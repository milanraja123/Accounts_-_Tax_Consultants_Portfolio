/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Language, TranslationDictionary } from '../../types';
import HeroNavbar from '../layout/HeroNavbar';

// Import images
import businessMeetingImg from '../../assets/images/business_meeting_1780338519626.png';

interface HeroSectionProps {
  lang: Language;
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function HeroSection({ lang, dict, setIsContactOpen }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen bg-[#07050f] text-white font-sans overflow-hidden select-none">
      {/* 1. Background Image Wrapper */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 transform scale-105"
        style={{
          backgroundImage: `url(${businessMeetingImg})`,
          transformOrigin: "center"
        }}
      />

      {/* 2. Geometric Diagonal Stripe Overlays (Matching screenshot violet geometric bands) */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden">
        {/* Stripe Area 1: Deep Dark Overlay (Left Zone for optimal text legibility) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.82 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#030206] via-[#090714] to-transparent"
          style={{
            clipPath: "polygon(0 0, 48% 0, 68% 100%, 0 100%)",
          }}
        />

        {/* Stripe Area 2: Deep Slate-Violet band */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.72 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="absolute inset-0 w-full h-full bg-[#1b0a3c]"
          style={{
            clipPath: "polygon(47.9% 0, 62% 0, 82% 100%, 67.9% 100%)",
            mixBlendMode: "multiply",
          }}
        />

        {/* Stripe Area 3: Brighter Indigo/Purple Geometric Slash */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 0.58 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3c2583] to-[#251558]"
          style={{
            clipPath: "polygon(61.9% 0, 86% 0, 106% 100%, 81.9% 100%)",
          }}
        />

        {/* Stripe Area 4: High Density Deep Purple (Right Edge Zone) */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.86 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.5 }}
          className="absolute inset-0 w-full h-full bg-[#100624]"
          style={{
            clipPath: "polygon(85.9% 0, 100% 0, 100% 100%, 105.9% 100%)",
          }}
        />
      </div>

      {/* 3. Header Navigation */}
      <HeroNavbar dict={dict} setIsContactOpen={setIsContactOpen} />

      {/* 4. Hero Content Section */}
      <main className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center pt-16 md:pt-28 pb-24 md:pb-36 min-h-[calc(100vh-96px)]">
        <div className="max-w-3xl">
          {/* Subheader Accent Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-white tracking-[0.2em] font-extrabold text-[11px] sm:text-[13px] uppercase mb-4 block leading-none font-jakarta">
              TAAXWALA ASSOCIATE
            </span>
          </motion.div>

          {/* Main Hero Header Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.08] mb-6 select-none font-jakarta"
          >
           Accounting & Tax
            <br />
            Consultant Company
          </motion.h1>

          {/* Hero Paragraph Copy */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl mb-4 font-normal font-jakarta"
          >
           Taaxwala Associate operates as an independent provider of tax consultancy and business compliance services. We are neither a practicing CA/CS/legal firm nor an authorized representative of any government body. Our offerings include taxation guidance, compliance assistance, and educational courses only.
          </motion.p>

          {/* Disclaimer Description */}
          {/* <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            className="text-white/50 text-[11px] sm:text-xs leading-relaxed max-w-xl mb-9 font-normal font-jakarta"
          >
            Taaxwala Associate operates as an independent provider of tax consultancy and business compliance services. We are neither a practicing CA/CS/legal firm nor an authorized representative of any government body. Our offerings include taxation guidance, compliance assistance, and educational courses only.
          </motion.p> */}

          {/* CTA Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.45 }}
          >
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#3D306F] hover:bg-[#483a80]/90 text-white font-medium text-xs tracking-wider px-8 py-4 uppercase transition-all duration-200 outline-none select-none cursor-pointer transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-indigo-900/45 active:scale-95 font-jakarta"
            >
              {dict.getInTouch}
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TranslationDictionary } from '../../types';

interface FeaturesSectionProps {
  dict: TranslationDictionary;
}

export default function FeaturesSection({ dict }: FeaturesSectionProps) {
  return (
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
            <h2 className="text-3xl sm:text-[38px] font-extrabold text-white tracking-tight leading-tight font-grotesk">
              {dict.featuresTitle}
            </h2>
            <p className="text-3xl sm:text-[38px] font-extrabold text-white tracking-tight leading-tight font-grotesk">
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
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#94a3b8" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" d="M12 19.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5-7.5 3.358-7.5 7.5 3.358 7.5 7.5 7.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5l2 2 4.5-4.5" stroke="#38bdf8" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-2 select-text">
              <h3 className="text-xl font-bold text-white tracking-wide font-poppins">{dict.qualityTitle}</h3>
              <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed font-light font-opensans">{dict.qualityDesc}</p>
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
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#94a3b8" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="#94a3b8" />
                <path d="M12 7v5l2.5 1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3v1M12 20v1M4 12h1M20 12h1" strokeLinecap="round" />
                <circle cx="17" cy="17" r="3" fill="#131926" stroke="#38bdf8" strokeWidth="1.2" />
                <path d="M16 17l.7.7 1.3-1.3" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="space-y-2 select-text">
              <h3 className="text-xl font-bold text-white tracking-wide font-poppins">{dict.punctualTitle}</h3>
              <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed font-light font-opensans">{dict.punctualDesc}</p>
            </div>
          </motion.div>

          {/* Card 3: Experience */}
          <motion.div
            id="feature-card-experience"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#212530] border border-white/5 rounded-2xl p-8 md:p-10 flex items-start gap-6 hover:border-white/10 transition-all duration-300 shadow-lg"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#131926] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#94a3b8" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                <path d="M10 2.5l.3.5.5.1-.4.4.1.5-.5-.3-.5.3.1-.5-.4-.4.5-.1z" fill="#38bdf8" stroke="transparent" />
                <path d="M15 3l.3.5.5.1-.4.4.1.5-.5-.3-.5.3.1-.5-.4-.4.5-.1z" fill="#38bdf8" stroke="transparent" />
                <path d="M19 4.5l.3.5.5.1-.4.4.1.5-.5-.3-.5.3.1-.5-.4-.4.5-.1z" fill="#38bdf8" stroke="transparent" />
              </svg>
            </div>
            <div className="space-y-2 select-text">
              <h3 className="text-xl font-bold text-white tracking-wide font-poppins">{dict.experienceTitle}</h3>
              <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed font-light font-opensans">{dict.experienceDesc}</p>
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
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#cbd5e1" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 16s1.5-1.5 3-3 2.5-4 1-5.5-3-2.5-4.5-1-3 3-3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 8s-1.5 1.5-3 3-2.5 4-1 5.5 3 2.5 4.5 1 3-3 3-3" stroke="#38bdf8" strokeWidth="2" />
                <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="#94a3b8" />
              </svg>
            </div>
            <div className="space-y-2 select-text">
              <h3 className="text-xl font-bold text-white tracking-wide font-poppins">{dict.supportTitle}</h3>
              <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed font-light font-opensans">{dict.supportDesc}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

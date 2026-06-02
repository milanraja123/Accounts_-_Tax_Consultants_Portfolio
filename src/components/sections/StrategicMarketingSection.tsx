/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Network, BookOpen, Wallet } from 'lucide-react';
import { TranslationDictionary } from '../../types';

// Import image
import strategicMarketingImg from '../../assets/images/strategic_marketing_1780342531109.png';

interface StrategicMarketingSectionProps {
  dict: TranslationDictionary;
}

export default function StrategicMarketingSection({ dict }: StrategicMarketingSectionProps) {
  return (
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
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold tracking-tight text-white leading-tight font-grotesk drop-shadow-sm select-text">
                  {dict.growthMarketingTitle}
                </h2>
              </div>

              {/* Overlap badge bottom-right */}
              <div className="flex-shrink-0 self-start md:self-end">
                <div className="bg-black/35 backdrop-blur-md border border-white/10 rounded-2xl py-3 px-5 text-left shadow-lg select-none min-w-[200px]">
                  <div className="text-[#519d6d] text-xl sm:text-2xl font-black tracking-tight leading-none font-grotesk">
                    {dict.growthMarketingConsultingYears}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-gray-300 tracking-wider uppercase mt-1 leading-none font-poppins">
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
                <h4 className="text-base sm:text-lg font-extrabold text-[#111927] tracking-tight font-poppins">
                  {dict.growthMarketingCard1Title}
                </h4>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed select-text font-opensans">
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
                <h4 className="text-base sm:text-lg font-extrabold text-[#111927] tracking-tight font-poppins">
                  {dict.growthMarketingCard2Title}
                </h4>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed select-text font-opensans">
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
                <h4 className="text-base sm:text-lg font-extrabold text-[#111927] tracking-tight font-poppins">
                  {dict.growthMarketingCard3Title}
                </h4>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed select-text font-opensans">
                  {dict.growthMarketingCard3Desc}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

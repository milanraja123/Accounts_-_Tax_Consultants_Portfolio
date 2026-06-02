/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TranslationDictionary } from '../../types';

// Import image
import trustAccountantImg from '../../assets/images/trust_accountant_1780340780265.png';

interface TrustSectionProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function TrustSection({ dict, setIsContactOpen }: TrustSectionProps) {
  return (
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
              <h2 id="trust-section-title-h2" className="text-3xl sm:text-[44px] font-extrabold text-[#111927] tracking-tight leading-tight font-grotesk">
                {dict.trustTitle}
              </h2>
              <p id="trust-section-desc-p" className="text-sm sm:text-[15px] font-light text-gray-500 leading-relaxed max-w-xl select-text font-opensans">
                {dict.trustDesc}
              </p>
            </div>

            {/* Grid block displaying large green digital KPI indicators */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              {/* Stat 1 */}
              <div id="trust-stat-audits" className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-[#519d6d] tracking-tight select-none font-grotesk">
                  {dict.trustAuditValue}
                </div>
                <div className="text-[10px] sm:text-xs font-bold tracking-wider text-[#64748b] uppercase select-none font-poppins">
                  {dict.trustAuditLabel}
                </div>
              </div>

              {/* Stat 2 */}
              <div id="trust-stat-filing" className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-[#519d6d] tracking-tight select-none font-grotesk">
                  {dict.trustFilingValue}
                </div>
                <div className="text-[10px] sm:text-xs font-bold tracking-wider text-[#64748b] uppercase select-none font-poppins">
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
            <h3 className="text-2xl sm:text-[34px] font-extrabold text-white tracking-tight leading-tight font-grotesk">
              {dict.ctaBannerTitle}
            </h3>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="cursor-pointer bg-white text-[#2a3c46] hover:bg-gray-100 active:scale-95 font-semibold text-sm tracking-wide px-8 py-4 rounded-xl shadow-md transition-all uppercase font-poppins"
            >
              {dict.ctaBannerBtn}
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

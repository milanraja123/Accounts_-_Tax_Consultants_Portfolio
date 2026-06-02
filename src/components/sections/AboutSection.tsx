/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TranslationDictionary } from '../../types';

// Import image
import aboutUsImg from '../../assets/images/about_us_light_bulb_1780339109753.png';

interface AboutSectionProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function AboutSection({ dict, setIsContactOpen }: AboutSectionProps) {
  return (
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
            <div className="text-xs font-bold tracking-[0.16em] text-[#64748b] uppercase select-none font-poppins">
              {dict.aboutUsHeader}
            </div>

            {/* Two Lines Heading matches spacing */}
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-[36px] font-bold text-[#131926] leading-tight tracking-tight font-grotesk">
                {dict.aboutUsHeadline1}
              </h2>
              <p className="text-3xl sm:text-[36px] font-extrabold text-[#131926] leading-tight tracking-tight font-grotesk">
                {dict.aboutUsHeadline2}
              </p>
            </div>

            {/* Bold / Medium paragraph */}
            <p className="text-sm sm:text-[15px] font-semibold text-[#334155] leading-relaxed select-text font-poppins">
              {dict.aboutUsText1}
            </p>

            {/* Subdued descriptive narrative */}
            <p className="text-[13px] sm:text-sm text-gray-400 font-light leading-relaxed select-text font-opensans">
              {dict.aboutUsText2}
            </p>

            {/* About Us Button */}
            <div className="pt-2">
              <button
                id="about-us-section-cta-btn"
                onClick={() => setIsContactOpen(true)}
                className="cursor-pointer bg-[#1a253c] hover:bg-[#11192b] text-white px-8 py-4 font-semibold text-sm tracking-wide rounded-[4px] shadow-md hover:shadow-lg transition-all font-poppins"
              >
                {dict.aboutUsBtn}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

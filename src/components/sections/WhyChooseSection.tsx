/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Cpu, Users, Package, HeartHandshake, BadgeCheck, Lock, Star, Trophy, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TranslationDictionary } from '../../types';

// Import image
import davidProfileImg from '../../assets/images/david_profile_portrait_1780340543652.png';

interface WhyChooseSectionProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

interface WhyCard {
  id: string;
  titleKey: keyof TranslationDictionary;
  descKey: keyof TranslationDictionary;
  icon: React.ReactNode;
}

const whyCards: WhyCard[] = [
  {
    id: '1',
    titleKey: 'whyDavidCard1Title',
    descKey: 'whyDavidCard1Desc',
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    id: '2',
    titleKey: 'whyDavidCard2Title',
    descKey: 'whyDavidCard2Desc',
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: '3',
    titleKey: 'whyDavidCard3Title',
    descKey: 'whyDavidCard3Desc',
    icon: <Package className="w-5 h-5" />,
  },
  // {
  //   id: '4',
  //   titleKey: 'whyDavidCard4Title',
  //   descKey: 'whyDavidCard4Desc',
  //   icon: <HeartHandshake className="w-5 h-5" />,
  // },
  // {
  //   id: '5',
  //   titleKey: 'whyDavidCard5Title',
  //   descKey: 'whyDavidCard5Desc',
  //   icon: <BadgeCheck className="w-5 h-5" />,
  // },
  {
    id: '4',
    titleKey: 'whyDavidCard6Title',
    descKey: 'whyDavidCard6Desc',
    icon: <Lock className="w-5 h-5" />,
  },
  {
    id: '5',
    titleKey: 'whyDavidCard7Title',
    descKey: 'whyDavidCard7Desc',
    icon: <Star className="w-5 h-5" />,
  },
];

export default function WhyChooseSection({ dict, setIsContactOpen }: WhyChooseSectionProps) {
  const navigate = useNavigate();

  return (
    <section id="why-choose-section" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Main Rounded Box Card */}
        <div className="bg-[#f3f6f3] rounded-[32px] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start shadow-sm">

          {/* Left Column: Portrait photo within double-border shadow frame */}
          <motion.div
            id="why-photo-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white group/portrait"
          >
            <img
              src={davidProfileImg}
              alt="Taxwala Associate - Tax & Finance Expert"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />

            {/* Milestone Badge on Image */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#3c8e59] flex items-center justify-center text-white flex-shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#3c8e59] tracking-tight font-grotesk">
                    {dict.whyMilestoneValue}
                  </div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider font-poppins">
                    {dict.whyMilestoneLabel}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Title and Feature Grid */}
          <div className="lg:col-span-7 space-y-8 text-left">

            {/* Overline Badge */}
            <div className="flex items-center gap-2 select-none">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-[#3c8e59] fill-current animate-pulse" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8Q12 2 12 2" />
              </svg>
              <div id="why-overline-text" className="text-xs font-bold tracking-wider text-[#1e293b] uppercase font-poppins">
                {dict.whyTitleOverline}
              </div>
            </div>

            {/* Dynamic Headline with Highlighted Part */}
            <div className="space-y-3">
              <h2 id="why-title-h2" className="text-3xl sm:text-[40px] font-extrabold text-[#111927] tracking-tight leading-tight font-grotesk">
                {dict.whyDavidTitlePart1}
                <span className="text-[#3c8e59] relative inline-block">
                  {dict.whyDavidTitlePart2}
                </span>
              </h2>
              <p id="why-helper-subtitle" className="text-sm sm:text-[15px] font-light text-gray-500 leading-relaxed max-w-xl font-opensans">
                {dict.whyDavidSub}
              </p>
            </div>

            {/* Grid of Rounded White Cards - Now shows all 7 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {whyCards.map((card) => (
                <motion.div
                  key={card.id}
                  id={`why-card-${card.id}`}
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-emerald-500/5 hover:border-emerald-500/10 transition-all flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#ebf4ee] flex items-center justify-center text-[#3c8e59] flex-shrink-0 select-none">
                    {card.icon}
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <h4 className="text-sm font-bold text-[#111927] tracking-tight font-poppins">
                      {dict[card.titleKey]}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-light leading-relaxed select-text font-opensans">
                      {dict[card.descKey]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Get in Touch CTA pill button */}
            <div className="pt-2">
              <button
                id="why-section-cta"
                onClick={() => navigate("/contact")}
                className="cursor-pointer group inline-flex items-center gap-3 bg-[#519d6d] hover:bg-[#43835a] text-white font-semibold text-sm px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all font-poppins"
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
  );
}

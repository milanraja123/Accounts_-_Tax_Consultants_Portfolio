/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { TranslationDictionary } from '../../types';

interface ServicesSectionProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function ServicesSection({ dict, setIsContactOpen }: ServicesSectionProps) {
  return (
    <section id="services-grid-section" className="relative bg-[#10141e] text-white py-24 px-6 md:px-12 lg:px-16 overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">

        {/* Header Title Information */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 id="services-main-section-title" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-grotesk">
            {dict.servicesSectionTitle}
          </h2>
          <div id="services-subtitle-overline" className="text-[12px] md:text-xs font-bold tracking-[0.25em] text-[#94a3b8] uppercase font-poppins">
            {dict.servicesSectionSub}
          </div>
          <p id="services-main-desc" className="text-sm md:text-base text-gray-400 font-light leading-relaxed font-opensans">
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
              <h3 className="text-3xl md:text-[34px] font-bold text-white tracking-tight leading-none group-hover:text-[#38bdf8] transition-colors font-grotesk">
                {dict.servicesSectionAccountingTitle}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light select-text font-opensans">
                {dict.servicesSectionAccountingDesc}
              </p>
            </div>

            <div className="pt-4">
              <button
                id="accounting-see-more-btn"
                onClick={() => setIsContactOpen(true)}
                className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-[#38bdf8] transition-colors group-hover:translate-x-1 duration-200 font-poppins"
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
              <h3 className="text-3xl md:text-[34px] font-bold text-white tracking-tight leading-none group-hover:text-[#38bdf8] transition-colors font-grotesk">
                {dict.servicesSectionTaxTitle}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light select-text font-opensans">
                {dict.servicesSectionTaxDesc}
              </p>
            </div>

            <div className="pt-4">
              <button
                id="tax-see-more-btn"
                onClick={() => setIsContactOpen(true)}
                className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-[#38bdf8] transition-colors group-hover:translate-x-1 duration-200 font-poppins"
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
              <h3 className="text-3xl md:text-[34px] font-bold text-white tracking-tight leading-none group-hover:text-[#38bdf8] transition-colors font-grotesk">
                {dict.servicesSectionConsultingTitle}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light select-text font-opensans">
                {dict.servicesSectionConsultingDesc}
              </p>
            </div>

            <div className="pt-4">
              <button
                id="consulting-see-more-btn"
                onClick={() => setIsContactOpen(true)}
                className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-[#38bdf8] transition-colors group-hover:translate-x-1 duration-200 font-poppins"
              >
                <span>{dict.seeMore}</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

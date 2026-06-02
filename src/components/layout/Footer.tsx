/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight } from 'lucide-react';
import { Language, TranslationDictionary } from '../../types';
import ADMonogram from '../ui/ADMonogram';

// Import image
import footerBannerBgImg from '../../assets/images/footer_banner_bg_1780340288358.png';

interface FooterProps {
  lang: Language;
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function Footer({ lang, dict, setIsContactOpen }: FooterProps) {
  return (
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
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight font-grotesk">
              {dict.footerJoinTitle}
            </h3>
          </div>

          {/* Input Form exactly as depicted in illustration */}
          <div className="w-full md:w-auto flex-shrink-0">
            <div className="bg-white rounded-lg p-1 w-full md:w-[480px] flex items-center justify-between shadow-lg">
              <input
                type="email"
                placeholder={dict.footerSubscribePlaceholder}
                className="bg-transparent text-gray-800 placeholder-gray-400 font-light text-sm px-4 py-2 w-full focus:outline-none font-opensans"
                required
              />
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="cursor-pointer bg-[#1c2333] hover:bg-[#111622] text-white px-6 py-3 font-semibold text-xs tracking-wider uppercase rounded-md transition-colors flex-shrink-0 flex items-center gap-1.5 font-poppins"
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
                <span className="font-extrabold text-[22px] tracking-wider text-[#131926] font-grotesk">
                  Taaxwala Associate
                </span>
              </div>

              <p className="text-xs sm:text-[13px] text-gray-500 font-normal leading-relaxed text-justify pr-0 md:pr-12 select-text font-opensans">
                {dict.footerDescText}
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="cursor-pointer inline-flex items-center gap-0.5 ml-1 text-xs font-semibold text-[#1a253c] hover:underline font-poppins"
                >
                  <span>{dict.seeMore}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </p>
            </div>

            {/* Useful Links Col */}
            <div className="md:col-span-3 space-y-6 text-left">
              <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#131926] font-poppins">
                {dict.footerUsefulLinksTitle}
              </h4>
              <ul className="space-y-3.5 text-xs text-gray-500 font-medium font-opensans">
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
              <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#131926] font-poppins">
                {dict.footerContactInfoTitle}
              </h4>
              <ul className="space-y-3.5 text-xs text-gray-500 font-medium select-text font-opensans">
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
          <div className="border-t border-gray-200/80 w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-opensans">
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
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, Heart } from 'lucide-react';
import { Language, TranslationDictionary } from '../../types';

// Import images
import footerBannerBgImg from '../../assets/images/footer_banner_bg_1780340288358.png';
import taxwalaLogo from '../../assets/images/Taxwala_logo.jpeg';

interface FooterProps {
  lang: Language;
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function Footer({ lang, dict, setIsContactOpen }: FooterProps) {
  return (
    <footer id="main-application-footer" className="relative w-full overflow-hidden">

      
      {/* <div className="relative py-14 px-6 md:px-12 lg:px-16 bg-[#161d2d] text-white">
        
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
          
          <div className="max-w-xl text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight font-grotesk">
              {dict.footerJoinTitle}
            </h3>
          </div>

          
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
      </div> */}

      {/* Lower footer: light slate-blue-gray background */}
      <div className="bg-[#f3f5f8] text-gray-800 py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">

          {/* 3 Columns structure */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-16">

            {/* Brand Col */}
            <div className="md:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src={taxwalaLogo}
                  alt="Taxwala Logo"
                  className="h-12 w-auto rounded-lg"
                />
                <span className="font-extrabold text-[22px] tracking-wider text-[#131926] font-grotesk">
                  Taxwala Associate
                </span>
              </div>

              <p className="text-xs sm:text-[13px] text-gray-500 font-normal leading-relaxed text-justify pr-0 md:pr-12 select-text font-opensans">
                Taxwala Associate operates as an independent provider of tax consultancy and business compliance services. We are neither a practicing CA/CS/legal firm nor an authorized representative of any government body. Our offerings include taxation guidance, compliance assistance, and educational courses only.
              </p>
            </div>

            {/* Quick Links Col */}
            <div className="md:col-span-3 space-y-6 text-left">
              <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#131926] font-poppins">
                Quick Links
              </h4>
              <ul className="space-y-3 text-xs text-gray-500 font-medium font-opensans">
                <li>
                  <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-gray-900 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-900 transition-colors">Contact Us</a>
                </li>
                <li>
                  <a href="/income-tax-filing" className="hover:text-gray-900 transition-colors">Income Tax Filing</a>
                </li>
                <li>
                  <a href="/gst-registration" className="hover:text-gray-900 transition-colors">GST Registration</a>
                </li>
                <li>
                  <a href="/private-limited-company-registration" className="hover:text-gray-900 transition-colors">Company Registration</a>
                </li>
                <li>
                  <a href="/trademark-registration" className="hover:text-gray-900 transition-colors">Trademark Registration</a>
                </li>
                <li>
                  <a href="/career" className="hover:text-gray-900 transition-colors">Career</a>
                </li>
              </ul>
            </div>

            {/* Contact Info Col */}
            <div className="md:col-span-3 space-y-6 text-left">
              <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#131926] font-poppins">
                {dict.footerContactInfoTitle}
              </h4>
              <ul className="space-y-4 text-xs text-gray-500 font-medium select-text font-opensans">
                {/* Address */}
                <li className="space-y-1">
                  <span className="text-[#131926] font-semibold block">Office Address</span>
                  <span className="block">91b Aurobindo Sarani,</span>
                  <span className="block">kolkata -700006 (Hatibagan)</span>
                  <span className="block">West Bengal, India</span>
                </li>
                {/* Phone */}
                <li className="space-y-1">
                  <span className="text-[#131926] font-semibold block">Phone</span>
                  <a href="tel:+919062453147" className="block hover:text-gray-900 transition-colors">
                    +91 90624 53147 (Primary)
                  </a>
                  <a href="tel:+917980776643" className="block hover:text-gray-900 transition-colors">
                    +91 79807 76643 (Support)
                  </a>
                </li>
                {/* Email */}
                <li className="space-y-1">
                  <span className="text-[#131926] font-semibold block">Email</span>
                  <a href="mailto:taxwalaassociates.dtc@gmail.com" className="block hover:text-gray-900 transition-colors">
                    taxwalaassociates.dtc@gmail.com
                  </a>
                  {/* <a href="mailto:support@Taxwala.com" className="block hover:text-gray-900 transition-colors">
                    support@Taxwala.com
                  </a> */}
                </li>
                {/* Hours */}
                <li className="space-y-1">
                  <span className="text-[#131926] font-semibold block">Office Hours</span>
                  <span className="block">Tue - Sun: 11:00 AM - 8:00 PM</span>
                  {/* <span className="block">Mo: 10:00 AM - 4:00 PM</span> */}
                </li>
              </ul>
            </div>

          </div>

          {/* Divider line exactly matching screenshot */}
          <div className="border-t border-gray-200/80 w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-opensans">
            <div className="flex items-center gap-6 font-medium">
              <a href="#" className="hover:text-gray-600 transition-colors">
                Terms and conditions
              </a>
              <a href="#" className="hover:text-gray-600 transition-colors">
                Privacy policy
              </a>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-700 font-bold">
              <Heart className="w-3 h-3 fill-red-500 text-red-500" />
              <span>Developed and maintained by <a href="https://www.ryouinfotech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 underline transition-colors">RyouInfotech</a></span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

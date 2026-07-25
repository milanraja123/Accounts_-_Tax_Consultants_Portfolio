/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import TrustSection from '../components/sections/TrustSection';
import Navbar from '../components/layout/Navbar';
import LocationMap from '../components/ui/LocationMap';

interface ContactPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function ContactPage({ dict, setIsContactOpen }: ContactPageProps) {
  const contactInfo = [
    {
      icon: Building2,
      title: 'Office Address',
      details: [
        'Taxwala Associate',
        '91b Aurobindo Sarani',
        'kolkata -700006 (Hatibagan)',
        'West Bengal, India',
      ],
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 90624 53147 (Primary)',
        '+91 79807 76643 (Support)',
      ],
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'taxwalaassociates.dtc@gmail.com',
      ],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Tuesday - Friday: 11:00 AM - 8:00 PM',
        'Monday: Closed',
        'Public Holidays: Closed',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f6f3] text-[#111927] font-jakarta">
      {/* Navbar */}
      <Navbar dict={dict} variant="light" />

      {/* Trust Section */}
      <TrustSection dict={dict} setIsContactOpen={setIsContactOpen} />

      {/* Main Content */}
      <main className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="text-[12px] md:text-xs font-bold tracking-[0.25em] text-[#3c8e59] uppercase mb-4 font-poppins">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111927] tracking-tight leading-tight mb-6 font-grotesk">
            Contact Us
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed max-w-2xl mx-auto font-opensans">
            Have questions about our tax consultancy services? We're here to help.
            Reach out to us through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
          {contactInfo.map((info, index) => {
            const IconComp = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-white border border-emerald-500/5 rounded-2xl p-8 md:p-10 flex items-start gap-6 hover:border-emerald-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                  <IconComp className="h-7 w-7 text-[#3c8e59]" />
                </div>
                <div className="space-y-3 select-text">
                  <h3 className="text-xl font-bold text-[#111927] tracking-wide font-poppins">
                    {info.title}
                  </h3>
                  <div className="space-y-1.5">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-light font-opensans"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 bg-white border border-emerald-500/5 rounded-2xl p-8 md:p-10 relative z-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
              <MapPin className="h-7 w-7 text-[#3c8e59]" />
            </div>
            <h3 className="text-xl font-bold text-[#111927] tracking-wide font-poppins">
              Find Us On Map
            </h3>
          </div>
          <div className="relative w-full rounded-xl overflow-hidden border border-emerald-500/5">
            <LocationMap />
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center relative z-10"
        >
          <p className="text-gray-400 text-xs leading-relaxed max-w-2xl mx-auto font-opensans">
            Taxwala Associate operates as an independent provider of tax consultancy
            and business compliance services. We are neither a practicing CA/CS/legal
            firm nor an authorized representative of any government body.
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-500/10 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-gray-400 text-sm font-opensans">
            &copy; {new Date().getFullYear()} Taxwala Associate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

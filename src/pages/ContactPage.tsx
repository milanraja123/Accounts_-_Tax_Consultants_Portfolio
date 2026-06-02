/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowLeft,
  Building2,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import TrustSection from '../components/sections/TrustSection';

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
        'Taaxwala Associate',
        '123 Business Park, Tower A, 5th Floor',
        'Andheri East, Mumbai - 400069',
        'Maharashtra, India',
      ],
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 98765 43210 (Primary)',
        '+91 98765 43211 (Support)',
        '+91 22 2845 6789 (Landline)',
      ],
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'contact@taaxwala.com',
        'support@taaxwala.com',
        'info@taaxwala.com',
      ],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 7:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed',
        'Public Holidays: Closed',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f6f3] text-[#111927] font-jakarta">
      {/* Header */}
      <header className="relative z-30 w-full border-b border-emerald-500/10 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <svg
              className="w-8 h-8 text-[#111927] transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <circle cx="12" cy="13" r="2.5" />
              <path d="M8.5 18.5a3.5 3.5 0 0 1 7 0" />
            </svg>
            <span className="text-2xl font-bold tracking-tight text-[#111927] select-none font-grotesk">
              Taaxwala
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-gray-500 hover:text-[#3c8e59] transition-colors text-sm font-medium font-poppins"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

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
          <div className="relative w-full h-64 bg-[#f3f6f3] rounded-xl flex items-center justify-center border border-emerald-500/5">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#3c8e59] mx-auto mb-3" />
              <p className="text-gray-600 text-sm font-opensans">Mumbai, Maharashtra, India</p>
              <p className="text-gray-400 text-xs mt-2 font-opensans">
                Interactive map coming soon
              </p>
            </div>
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
            Taaxwala Associate operates as an independent provider of tax consultancy
            and business compliance services. We are neither a practicing CA/CS/legal
            firm nor an authorized representative of any government body.
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-500/10 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-gray-400 text-sm font-opensans">
            &copy; {new Date().getFullYear()} Taaxwala Associate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

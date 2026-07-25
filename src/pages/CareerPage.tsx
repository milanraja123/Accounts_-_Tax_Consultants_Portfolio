/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';

interface CareerPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function CareerPage({ dict, setIsContactOpen }: CareerPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f3f6f3] text-[#111927] font-jakarta">
      {/* Navbar */}
      <Navbar dict={dict} variant="light" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#10141e] via-[#1a1f2e] to-[#0f1320] text-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[12px] md:text-xs font-bold tracking-[0.25em] text-[#38bdf8] uppercase mb-4 font-poppins">
              Join Our Team
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 font-grotesk">
              Build Your Career with Taxwala
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-opensans">
              Join India's growing tax consultancy firm. We're looking for passionate individuals who want to make a difference in the world of taxation and business compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">

        {/* Career Options */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-8 font-grotesk text-center">
            We Are Hiring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Internship Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-blue-500/10 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#111927] mb-3 font-grotesk">Internship</h3>
              <p className="text-gray-500 font-opensans">
                Kickstart your career with hands-on experience in taxation and business compliance.
              </p>
            </motion.div>

            {/* Full Time Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white border border-emerald-500/10 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#ebf4ee] flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-[#3c8e59]" />
              </div>
              <h3 className="text-2xl font-bold text-[#111927] mb-3 font-grotesk">Full Time</h3>
              <p className="text-gray-500 font-opensans">
                Join our team of experienced professionals and grow your career with us.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* How to Apply */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-[#3c8e59] to-[#2d6b43] rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 font-grotesk">
                How to Apply?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto font-opensans">
                Interested in joining our team? Send your CV and cover letter to our email or contact us directly. We'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="mailto:taxwalaassociates.dtc@gmail.com?subject=Job Application"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1 font-poppins">Email Your CV</h3>
                    <p className="text-xs text-white/80 font-opensans">taxwalaassociates.dtc@gmail.com</p>
                  </div>
                </div>
              </a>

              <a
                href="tel:+919062453147"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1 font-poppins">Call Us</h3>
                    <p className="text-xs text-white/80 font-opensans">+91 90624 53147</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-500/10 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-gray-400 text-sm font-opensans">
            &copy; {new Date().getFullYear()} Taxwala Associate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

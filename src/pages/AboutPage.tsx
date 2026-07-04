/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';
import { Footer } from '../components/layout';
import AboutSection from '../components/sections/AboutSection';
import TeamSection from '../components/sections/TeamSection';

interface AboutPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function AboutPage({ dict, setIsContactOpen }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#111927] font-jakarta">
      {/* Navbar */}
      <Navbar dict={dict} variant="light" />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#1a253c] via-[#243047] to-[#1a253c] pt-16 pb-20 md:pt-20 md:pb-28 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold uppercase tracking-wider rounded-full mb-6 font-poppins">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-grotesk leading-tight">
              Who We Are
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-opensans leading-relaxed">
              Your trusted partner for business registration, tax filing, and compliance services across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <div className="-mt-8">
        <AboutSection dict={dict} setIsContactOpen={setIsContactOpen} />
      </div>

      {/* Our Values Section */}
      <section className="bg-[#f8faf8] py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold tracking-[0.16em] text-[#3c8e59] uppercase mb-4 block font-poppins">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#131926] font-grotesk">
              What Drives Us Forward
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trust & Integrity',
                description: 'We build lasting relationships with our clients through transparency, honesty, and unwavering commitment to ethical practices.',
                icon: '🤝'
              },
              {
                title: 'Expert Knowledge',
                description: 'Our team stays updated with the latest regulations and best practices to provide you with accurate and reliable guidance.',
                icon: '📚'
              },
              {
                title: 'Client Success',
                description: 'Your success is our success. We are dedicated to helping your business grow and achieve its full potential.',
                icon: '🚀'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#3c8e59]/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#131926] mb-3 font-grotesk">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-opensans">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection dict={dict} />

      {/* Stats Section */}
      <section className="bg-[#1a253c] py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '5000+', label: 'Clients Served' },
              { number: '98%', label: 'Success Rate' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-grotesk">{stat.number}</div>
                <div className="text-white/60 text-sm font-medium font-poppins">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer dict={dict} setIsContactOpen={setIsContactOpen} />
    </div>
  );
}

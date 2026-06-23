/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle,
  FileCheck,
  Shield,
  Award,
  ChevronDown,
  FileText,
  Clock,
  BadgeCheck,
  Building2,
  Users,
  Globe,
  Search,
  Scale,
  Briefcase,
  TrendingUp,
  ShoppingCart,
  Megaphone,
  AlertTriangle,
  Calendar,
  RefreshCw,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';

interface TrademarkRegistrationPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function TrademarkRegistrationPage({ dict, setIsContactOpen }: TrademarkRegistrationPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whyRequired = [
    'Secure your brand or company name so competitors can\'t use similar name',
    'Give protection so other companies can\'t use your brand without permission',
    'Protect existing customers from fake similar brand names',
    'Protection on Domain Names for internet-based startups',
    'Different identity on e-commerce platforms like Flipkart, Amazon, Paytm',
    'Helps register a private limited company with same brand name',
  ];

  const onlineVsOffline = [
    'Lowest fee or cost for trademark registration',
    'No need to visit any government department or office',
    'Track application status online easily',
    'Easy resubmission or changes of trademark online',
    'Easy reply on Trademark Objection',
    'Download Trademark Certificate online',
    'Easy preparation of Trademark Search Report',
  ];

  const packageIncludes = [
    'Consultation on choosing the right Trademark Class',
    'Consultation on Brand Registration Law & regulations',
    'Preparation of Search Report on Trademark',
    'Preparation and filing of Trademark application with logo',
    'Delivery of Valid Trademark Acknowledgement',
    'Regular updates on proceedings',
  ];

  const documentsRequired = [
    'PAN Card Copy (Personal / Company / Firm)',
    'Address Proof (Aadhaar Card / Voter ID / Passport)',
    'Trademark Authority Letter (Format provided during registration)',
    'Registration certificate if any (Company/Firm)',
  ];

  const informationRequired = [
    { title: 'Applicant Name', desc: 'Register as individual or Pvt Ltd / LLP / Partnership / Proprietorship firm' },
    { title: 'Business Type', desc: 'Trader or Manufacturer or Service Provider' },
    { title: 'Business Nature', desc: 'Short info about products or services for proper class selection' },
    { title: 'Brand/Company Name', desc: 'Brand name used to provide services or products to customers' },
    { title: 'Logo (Optional)', desc: 'PNG or JPEG image file of the company logo' },
    { title: 'Communication Address', desc: 'Official address for government correspondence' },
  ];

  const benefits = [
    { title: 'Increase Trustworthiness', desc: 'Trademark ™ symbol provides more brand value & trust authority between customers.', icon: BadgeCheck },
    { title: 'File Case Against Competitors', desc: 'Stop competitors from copying your brand identity or selling duplicates.', icon: Scale },
    { title: 'Increase Brand Value', desc: 'Trademark is treated as company assets - valuable when selling your business.', icon: TrendingUp },
    { title: 'Unique Brand Identity', desc: 'Gives unique identity for all your products under the company.', icon: Award },
    { title: 'Digital Asset Protection', desc: 'Protects domain name and logo - restrict use of other extensions.', icon: Globe },
    { title: 'Works as PR', desc: '™ symbol in ads and campaigns creates bigger image for customers.', icon: Megaphone },
    { title: 'E-Commerce Ready', desc: 'Required by Flipkart, Amazon etc. for selling products.', icon: ShoppingCart },
    { title: 'Global Protection', desc: 'File trademark in other countries for worldwide brand protection.', icon: Globe },
  ];

  const registrationProcess = [
    {
      phase: 'Phase 1',
      title: 'Initial Registration',
      steps: [
        'Prepare basic documents and brand logo',
        'File TM Application Form with Government Fee',
        'Attach trademark lawyer\'s digital signature',
        'Pay Government fee online',
        'Get acknowledgement receipt - use "TM" before brand name',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Examination Report',
      steps: [
        'Wait 3-12 months for examination',
        'Department examines trade name & logo',
        'Objection report issued if any issues',
        'Reply to objection with evidence',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Trademark Publication',
      steps: [
        'After satisfactory objection reply',
        'Trademark published in Trademark Journal',
        'Brand name advertised publicly',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Opposition Period',
      steps: [
        '4 months opposition window',
        'Others can file objection with documents',
        'If no opposition, proceed to certificate',
      ],
    },
  ];

  const trademarkSymbols = [
    { symbol: '®', name: 'R Symbol', desc: 'Permanent protection - use only after getting final trademark certificate.' },
    { symbol: '™', name: 'TM Symbol', desc: 'Temporary protection - use after submitting trademark application. Refers to unregistered trademark.' },
  ];

  const faqs = [
    {
      question: 'How to select a good Trademark name for business?',
      answer: 'Research your brand name availability, check if it\'s used by any other company, and verify domain name availability. Conduct a brand search in India before finalizing.',
    },
    {
      question: 'What are the features of Trademark Registration?',
      answer: 'Mainly 3 features: Unique Brand Identity, Secure/Protect your Brand Name, and Increase your trust authority among customers.',
    },
    {
      question: 'Who is qualified for Trademark Registration?',
      answer: 'Trademark can be registered by any person, even foreigners can register trademark in India. There is no specific qualification required.',
    },
    {
      question: 'Who can take benefits from Registered Trademark?',
      answer: 'Trademark owner, individual, or sole proprietor takes the benefits. They can easily sell trademark value to buyer parties.',
    },
    {
      question: 'Can corrections be made after filing Trademark application?',
      answer: 'Yes, changes or corrections can be made at a later stage by submitting a correction trademark form.',
    },
    {
      question: 'Can trademark registry remove the trademark?',
      answer: 'Yes, if trademark is not qualified with govt terms or no reply is given on objection report, they can remove or cancel the trademark.',
    },
    {
      question: 'What is most important in a Trademark application?',
      answer: 'Brand name/word or logo and Class selection are the most important factors. Take care of these before filing.',
    },
    {
      question: 'Is logo included in trademark registration?',
      answer: 'Yes, logo or tagline is included but design is not registered with trademark. For design, you need Copyright Registration.',
    },
    {
      question: 'Can domain name be protected with Trademark?',
      answer: 'Yes, domain name can be protected with Trademark Registration.',
    },
    {
      question: 'Can I protect my idea with Trademark?',
      answer: 'No, ideas cannot be protected with trademark. You need Patent Registration for that. Trademark is only for brand names.',
    },
    {
      question: 'Can I file trademark in multiple classes?',
      answer: 'Yes, but Rs. 4,500 fee applies per class. Filing in multiple classes doubles your cost.',
    },
    {
      question: 'What cannot be trademarked?',
      answer: 'Generally, you cannot trademark: people\'s names/surnames, colors, smells, locations, or sounds.',
    },
    {
      question: 'Can I transfer my trademark to another person/company?',
      answer: 'Yes, trademarks can be transferred. In mergers & acquisitions, companies often pay primarily for the trademark.',
    },
    {
      question: 'Can I use residential address for Trademark Registration?',
      answer: 'Yes, you can use your residential address for Trademark Registration without any issues.',
    },
    {
      question: 'How to check Trademark application status online?',
      answer: 'Go to Indian Govt Registry Website, insert your class & trade name to get status on your screen.',
    },
  ];

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
              Brand Protection
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 font-grotesk">
              Trademark Registration Online
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-opensans">
              India's Govt Certified Portal for Trademark Registration. Protect your brand name and logo with expert assistance.
            </p>
            <div className="mt-6 text-3xl md:text-4xl font-extrabold text-[#3c8e59] font-grotesk">
              Starting @ 6,800/- INR
            </div>
            <p className="text-xs text-gray-500 mt-2 font-opensans">(All Inclusive)</p>
            <div className="mt-8">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#3c8e59] hover:bg-[#2d6b43] text-white font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Get Proposal
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-6 font-opensans max-w-2xl mx-auto">
              Disclaimer: We are not a Trademark Agent or Attorney. Trademark services are provided through registered Trademark Attorneys.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">

        {/* What is Trademark */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is Trademark Registration?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              <strong>Trademark</strong> is very important for any business or brand in India. Every business that wants to secure their brand name and logo must go for trademark registration. Trademark Registry gives protection on each brand name with logo in their respective trademark class.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              There are <strong>45 Trademark classes</strong> where you can register your brand name in the field related to your business. If you want to protect your design, idea, product, or service, you can go with <strong>Patent Registration</strong>. For design protection, choose <strong>Copyright Registration</strong>.
            </p>
          </div>
        </motion.section>

        {/* Why Required */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Why is Trademark Registration Required?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <ul className="space-y-3">
              {whyRequired.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600 font-opensans">
                  <CheckCircle className="w-5 h-5 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Trademark Registration Cost
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg font-bold text-[#111927] mb-4 font-poppins">Fee Structure</h3>
              <div className="space-y-4">
                <div className="bg-[#ebf4ee] rounded-lg p-4">
                  <div className="text-sm text-gray-500 font-poppins mb-1">Government Fee (Per Class)</div>
                  <div className="text-2xl font-bold text-[#3c8e59] font-grotesk">4,500/- INR</div>
                  <p className="text-xs text-gray-500 mt-1 font-opensans">Includes trade name + logo for one class</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 font-poppins mb-1">Attorney Fee (Market Price)</div>
                  <div className="text-2xl font-bold text-blue-600 font-grotesk">2,000 - 3,000/- INR</div>
                  <p className="text-xs text-gray-500 mt-1 font-opensans">Professional charges vary</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3c8e59] to-[#2d6b43] rounded-2xl p-6 text-white shadow-lg">
              <div className="text-sm font-semibold tracking-wider uppercase mb-2 text-white/80 font-poppins">
                Our Package
              </div>
              <div className="text-4xl font-extrabold font-grotesk mb-4">
                6,799<span className="text-lg font-normal">/- INR</span>
              </div>
              <h4 className="font-semibold mb-3 font-poppins">Package Includes:</h4>
              <ul className="space-y-2">
                {packageIncludes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-white/90 font-opensans">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsContactOpen(true)}
                className="mt-6 w-full bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm py-3 rounded-full transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        </motion.section>

        {/* Online vs Offline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Benefits of Online Trademark Registration
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <p className="text-gray-600 leading-relaxed font-opensans mb-6">
              Trademark Registry now has a dedicated govt portal for simplified online registration. Here are the benefits:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {onlineVsOffline.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#ebf4ee] rounded-lg p-3">
                  <CheckCircle className="w-5 h-5 text-[#3c8e59] flex-shrink-0" />
                  <span className="text-sm text-gray-600 font-opensans">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Documents Required */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Documents Required
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <ul className="space-y-3">
              {documentsRequired.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600 font-opensans">
                  <FileCheck className="w-5 h-5 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Information Required */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Information Required
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {informationRequired.map((info, idx) => (
              <div key={idx} className="bg-white border border-emerald-500/5 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="w-8 h-8 rounded-lg bg-[#3c8e59] text-white flex items-center justify-center font-bold text-sm mb-3">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-bold text-[#111927] mb-1 font-poppins">{info.title}</h3>
                <p className="text-xs text-gray-500 font-opensans">{info.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Benefits of Trademark Registration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white border border-emerald-500/5 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5 text-[#3c8e59]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111927] mb-1 font-poppins">{benefit.title}</h3>
                  <p className="text-xs text-gray-500 font-opensans">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Registration Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Trademark Registration Process
          </h2>
          <div className="space-y-6">
            {registrationProcess.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#3c8e59] text-white flex items-center justify-center font-bold text-lg font-grotesk">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-xs text-[#3c8e59] font-semibold uppercase tracking-wider font-poppins">{phase.phase}</div>
                    <h3 className="text-lg font-bold text-[#111927] font-poppins">{phase.title}</h3>
                  </div>
                </div>
                <ul className="ml-16 space-y-2">
                  {phase.steps.map((step, sidx) => (
                    <li key={sidx} className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                      <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Final Certificate */}
            <div className="bg-gradient-to-r from-[#3c8e59] to-[#2d6b43] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-poppins">Final Trademark Registration Certificate</h3>
                  <p className="text-sm text-white/80 font-opensans">
                    If no opposition is filed, authority issues final certificate valid for <strong>10 years</strong> from filing date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Trademark Symbols */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Trademark Symbols
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trademarkSymbols.map((symbol, idx) => (
              <div key={idx} className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#ebf4ee] flex items-center justify-center text-4xl font-bold text-[#3c8e59]">
                    {symbol.symbol}
                  </div>
                  <h3 className="text-lg font-bold text-[#111927] font-poppins">{symbol.name}</h3>
                </div>
                <p className="text-sm text-gray-600 font-opensans">{symbol.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Validity & Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Validity & Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#ebf4ee] flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#3c8e59]" />
                </div>
                <h3 className="text-lg font-bold text-[#111927] font-poppins">Validity</h3>
              </div>
              <p className="text-gray-600 font-opensans mb-3">
                Trademark is registered in India for at least <strong>10 years</strong>. After that, renewal is required.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#3c8e59] font-semibold">
                <RefreshCw className="w-4 h-4" />
                <span>Renewal available by paying govt fee</span>
              </div>
            </div>

            <div className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#ebf4ee] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#3c8e59]" />
                </div>
                <h3 className="text-lg font-bold text-[#111927] font-poppins">Timeline</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 font-opensans">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3c8e59]" />
                  <span>Application filing: <strong>3-4 days</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3c8e59]" />
                  <span>Final certificate: <strong>6-8 months</strong> (if no objection)</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Trademark Objection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Trademark Objection
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-800 mb-2 font-poppins">What is Trademark Objection?</h3>
                <p className="text-sm text-amber-700 font-opensans mb-4">
                  When you file your trademark application, you may receive objection from competitors, similar companies, or govt officer regarding brand name or logo issues.
                </p>
                <h4 className="font-semibold text-amber-800 mb-2 font-poppins">Trademark Objection Reply</h4>
                <p className="text-sm text-amber-700 font-opensans">
                  You have approximately <strong>30 days</strong> to respond to trademark objection by uploading proper documents and written revert on stamp paper.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="bg-white border border-emerald-500/5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="text-sm font-semibold text-[#111927] font-poppins pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3c8e59] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-sm text-gray-600 leading-relaxed font-opensans">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-[#3c8e59] to-[#2d6b43] rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 font-grotesk">
              Ready to Protect Your Brand?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-opensans">
              Get your Trademark Registration done with expert assistance. Protect your brand name and logo with India's trusted service.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
            >
              Register Trademark @ 6,799/-
            </button>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-500/10 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-gray-400 text-sm font-opensans">
            &copy; {new Date().getFullYear()} Taaxwala Associate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

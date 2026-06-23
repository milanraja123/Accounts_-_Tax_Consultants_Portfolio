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
  Utensils,
  Truck,
  Factory,
  CreditCard,
  ClipboardList,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';

interface FSSAIRegistrationPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function FSSAIRegistrationPage({ dict, setIsContactOpen }: FSSAIRegistrationPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const licenseTypes = [
    {
      title: 'FSSAI Basic Registration',
      turnover: 'Less than Rs. 12 Lakh/year',
      govtFee: '100/- Per Year',
      description: 'Required by small businesses just starting out with turnover less than 12 lakh rupees annually.',
      icon: Building2,
      color: 'emerald',
      forWhom: ['Small food businesses', 'Startups', 'Home-based food businesses', 'Petty retailers'],
    },
    {
      title: 'FSSAI State License',
      turnover: 'Rs. 12 Lakh - Rs. 20 Cr/year',
      govtFee: '2,000 - 5,000/- Per Year',
      description: 'Required when turnover crosses 12 lakh but is less than 20 crores annually.',
      icon: Factory,
      color: 'blue',
      forWhom: ['Medium food businesses', 'Manufacturers', 'Distributors', 'Wholesalers'],
    },
    {
      title: 'FSSAI Central License',
      turnover: 'More than Rs. 20 Cr/year',
      govtFee: '7,500/- Per Year',
      description: 'Required for import/export business, government supply, or large-scale operations exceeding 20 crores.',
      icon: Globe,
      color: 'purple',
      forWhom: ['Import/Export businesses', 'Government suppliers', 'Large manufacturers', 'Multi-state operators'],
    },
  ];

  const benefits = [
    { title: 'Customer Confidence', desc: 'Increase customer confidence in terms of food safety and quality.', icon: Shield },
    { title: 'Legal Compliance', desc: 'Helps in removal of multiple legal regulations and complications.', icon: BadgeCheck },
    { title: 'Product Innovation', desc: 'Helps in promoting innovative food products in the market.', icon: Award },
  ];

  const personalDocuments = [
    'PAN Card: Copy of PAN (mandatory identity proof)',
    'Aadhaar Card / Voter ID / Driving License / Passport (any one)',
    'Passport size Photo',
  ];

  const officeDocuments = [
    'Latest Utility Bill (Electricity / Water Bill)',
    'Copy of Rent Agreement (if rented property)',
    'Copy of property paper (if owned property)',
  ];

  const basicRegistrationDocs = [
    'Form-A completely filled and signed by all directors/partners/proprietor',
    'Declaration regarding food safety management system (FSMS) on letterhead',
    'Proof of Income determining annual turnover',
    'Nomination of person appointed in Form No.IX with Board Resolution',
    'Self Declaration by Director',
    'Affidavit on Non-Judicial Stamp paper',
  ];

  const stateCentralDocs = [
    'Duly filled Form-B signed by directors/partners/proprietor',
    'List of Partners/Proprietor with complete address and contact',
    'Blueprint/layout plan of processing unit with installed capacity',
    'Constitution of company (MOA/AOA) or Partnership Deed',
    'Analysis report as per business activity',
    'Food safety management system and certificate',
    'Declaration regarding FSMS on letterhead',
    'Proof of Income determining annual turnover',
    'Nomination in Form No.IX with Board Resolution',
    'Self Declaration by Director',
    'NOC from local authority',
    'Affidavit on Non-Judicial Stamp paper',
    'List of food category to be manufactured',
    'Production unit Photograph',
    'Any other documents as required by authority',
  ];

  const applicationProcess = [
    { step: '1', title: 'Submit Application', desc: 'Fill customized FSSAI form with necessary details and make payment online.' },
    { step: '2', title: 'Confirmation', desc: 'Receive confirmation via SMS & email with documents checklist.' },
    { step: '3', title: 'Send Documents', desc: 'Send scanned copies of documents via email.' },
    { step: '4', title: 'Processing', desc: 'Our professional submits your application and delivers the certificate.' },
  ];

  const forms = [
    {
      name: 'Form A',
      type: 'Basic FSSAI Registration',
      description: 'Basic registration form filled by food business operator. Comprises of FBO\'s Business activities.',
    },
    {
      name: 'Form B',
      type: 'State/Central FSSAI License',
      description: 'Mandatory form with required documents for State or Central license registration.',
    },
  ];

  const faqs = [
    {
      question: 'Who requires FSSAI Registration?',
      answer: 'FSSAI Registration is required for all types of food-related businesses including food processing, manufacturing, distribution, retail, catering, and import/export. It\'s mandatory from the start irrespective of turnover.',
    },
    {
      question: 'What is the difference between FSSAI Registration and License?',
      answer: 'FSSAI Registration (Basic) is for small businesses with turnover less than 12 lakhs. FSSAI License (State/Central) is for businesses with higher turnover or specific requirements like interstate/international operations.',
    },
    {
      question: 'Can I apply for FSSAI Registration online?',
      answer: 'Yes, FSSAI Registration can be applied online, but it requires a professional to properly submit your application with all required documents.',
    },
    {
      question: 'What is the validity of FSSAI License?',
      answer: 'FSSAI License is issued for 1-5 years depending on your application. After expiry, renewal process is required to continue operations.',
    },
    {
      question: 'Can I start food business from home?',
      answer: 'Yes, you can operate a food business from your residential property. The same documentation requirements apply, and you\'ll need utility bills and property documents.',
    },
    {
      question: 'What is the government fee for FSSAI Registration?',
      answer: 'Government fee varies: Basic Registration - Rs. 100/year, State License - Rs. 2,000-5,000/year, Central License - Rs. 7,500/year. Professional fees are additional.',
    },
    {
      question: 'What is Form A and Form B in FSSAI?',
      answer: 'Form A is for Basic FSSAI Registration (turnover below 12 lakhs). Form B is for State and Central FSSAI License (higher turnover or specialized operations).',
    },
    {
      question: 'How long does it take to get FSSAI Registration?',
      answer: 'Basic FSSAI Registration typically takes 7-15 days. State License takes 30-60 days. Central License may take 60-90 days depending on documentation and verification.',
    },
    {
      question: 'Is FSSAI Registration mandatory for restaurants?',
      answer: 'Yes, FSSAI Registration is mandatory for all restaurants, hotels, cafes, cloud kitchens, food trucks, and any establishment serving food to customers.',
    },
    {
      question: 'What happens if I operate without FSSAI License?',
      answer: 'Operating without FSSAI License is illegal and can result in penalties up to Rs. 5 lakhs, imprisonment up to 6 months, or both. Your business can also be shut down.',
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
              Food License
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 font-grotesk">
              FSSAI Registration Online
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-opensans">
              Get your Food License (FSSAI Registration) for all types of food-related businesses. Required for food processing, manufacturing, distribution, and retail.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#3c8e59] hover:bg-[#2d6b43] text-white font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">

        {/* Who Requires FSSAI */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Who Requires FSSAI Registration?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              <strong>FSSAI Registration</strong> or Food License is required for all types of food-related businesses. Whether you're thinking of starting a food business through food processing, manufacturing, or distribution - it's required from the start <strong>irrespective of turnover</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {benefits.map((benefit, idx) => {
                const IconComp = benefit.icon;
                return (
                  <div key={idx} className="bg-[#ebf4ee] rounded-xl p-5 border border-[#3c8e59]/20">
                    <div className="w-10 h-10 rounded-xl bg-[#3c8e59] text-white flex items-center justify-center mb-3">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#111927] mb-1 font-poppins">{benefit.title}</h3>
                    <p className="text-xs text-gray-600 font-opensans">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Types of FSSAI License */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Types of FSSAI Registration / License
          </h2>
          <p className="text-gray-600 leading-relaxed font-opensans mb-6">
            There are 3 types of Food License or FSSAI License categories based on your business turnover and operations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenseTypes.map((license, idx) => {
              const IconComp = license.icon;
              const bgColors: Record<string, string> = {
                emerald: 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-white',
                blue: 'border-blue-200 bg-gradient-to-br from-blue-50 to-white',
                purple: 'border-purple-200 bg-gradient-to-br from-purple-50 to-white',
              };
              const iconColors: Record<string, string> = {
                emerald: 'bg-emerald-500',
                blue: 'bg-blue-500',
                purple: 'bg-purple-500',
              };
              const textColors: Record<string, string> = {
                emerald: 'text-emerald-600',
                blue: 'text-blue-600',
                purple: 'text-purple-600',
              };
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className={`rounded-2xl p-6 border-2 ${bgColors[license.color]} shadow-lg`}
                >
                  <div className={`w-12 h-12 rounded-xl ${iconColors[license.color]} text-white flex items-center justify-center mb-4`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 font-poppins ${textColors[license.color]}`}>{license.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 font-opensans">{license.description}</p>

                  <div className="bg-white/70 rounded-lg p-3 mb-3">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-poppins mb-1">Turnover</div>
                    <div className="text-sm font-bold text-[#111927] font-opensans">{license.turnover}</div>
                  </div>

                  <div className="bg-white/70 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-poppins mb-1">Govt Fee</div>
                    <div className={`text-lg font-bold font-grotesk ${textColors[license.color]}`}>{license.govtFee}</div>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-poppins mb-2">Best For:</div>
                    <ul className="space-y-1">
                      {license.forWhom.map((item, iidx) => (
                        <li key={iidx} className="flex items-center gap-2 text-xs text-gray-600 font-opensans">
                          <CheckCircle className="w-3 h-3 text-[#3c8e59]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Food Safety Department */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is Food Safety Department?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                <Utensils className="w-7 h-7 text-[#3c8e59]" />
              </div>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed font-opensans">
                  <strong>Food Safety and Standards Authority of India (FSSAI)</strong> is the department responsible for food-related regulations. It works on:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    Framing rules regarding food-related articles
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    Implementation of food safety policies
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    Providing scientific and technical support to central government
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    Collection of food consumption data with general awareness
                  </li>
                </ul>
              </div>
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
            Documents Required for FSSAI Registration
          </h2>

          <div className="space-y-6">
            {/* Personal Documents */}
            <div className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#3c8e59]" />
                </div>
                <h3 className="text-lg font-bold text-[#111927] font-poppins">Personal Documents</h3>
              </div>
              <ul className="space-y-2">
                {personalDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Documents */}
            <div className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#3c8e59]" />
                </div>
                <h3 className="text-lg font-bold text-[#111927] font-poppins">Registered Office Documents</h3>
              </div>
              <ul className="space-y-2">
                {officeDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    {doc}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-3 italic font-opensans">
                Note: Can be residential property - no issue with that.
              </p>
            </div>

            {/* Basic Registration Additional */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-emerald-700 font-poppins">Additional for Basic Registration</h3>
              </div>
              <ul className="space-y-2">
                {basicRegistrationDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-emerald-700 font-opensans">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* State/Central License Additional */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-blue-700 font-poppins">Additional for State/Central License</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {stateCentralDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-blue-700 font-opensans">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Fee Structure */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            FSSAI Registration Fee Structure
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <p className="text-gray-600 leading-relaxed font-opensans mb-6">
              FSSAI Registration fee is divided into <strong>Government Fee</strong> (official application processing) and <strong>Professional Fee</strong> (CA/Lawyer charges for application preparation).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-bold text-[#111927] font-poppins">License Type</th>
                    <th className="text-right py-3 px-4 text-sm font-bold text-[#111927] font-poppins">Government Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm text-gray-600 font-opensans">FSSAI Basic Registration</td>
                    <td className="py-3 px-4 text-sm text-[#3c8e59] font-bold font-poppins text-right">100/- Per Year</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm text-gray-600 font-opensans">FSSAI State License</td>
                    <td className="py-3 px-4 text-sm text-[#3c8e59] font-bold font-poppins text-right">2,000 - 5,000/- Per Year</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-600 font-opensans">FSSAI Central License</td>
                    <td className="py-3 px-4 text-sm text-[#3c8e59] font-bold font-poppins text-right">7,500/- Per Year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4 font-opensans italic">
              * Professional fees for application preparation are additional
            </p>
          </div>
        </motion.section>

        {/* FSSAI Forms */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            FSSAI Registration Forms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forms.map((form, idx) => (
              <div key={idx} className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#3c8e59] text-white flex items-center justify-center font-bold text-lg font-grotesk">
                    {form.name.split(' ')[1]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111927] font-poppins">{form.name}</h3>
                    <p className="text-xs text-[#3c8e59] font-semibold font-poppins">{form.type}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-opensans">{form.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Application Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            How to Apply for FSSAI Registration?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {applicationProcess.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#3c8e59] text-white flex items-center justify-center font-bold text-xl font-grotesk mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-[#111927] mb-2 font-poppins">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-opensans">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Validity */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Validity of FSSAI License
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                <Calendar className="w-7 h-7 text-[#3c8e59]" />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed font-opensans mb-4">
                  FSSAI License is issued by the department for <strong>1-5 years</strong> based on your application. After expiry, there is a renewal process to continue operations.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 font-opensans">
                    <strong>Important:</strong> Apply for renewal before license expiry to avoid penalties and business disruption.
                  </p>
                </div>
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
              Ready to Get Your FSSAI License?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-opensans">
              Start your food business legally with proper FSSAI Registration. Our experts will guide you through the entire process.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
            >
              Apply for FSSAI Now
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

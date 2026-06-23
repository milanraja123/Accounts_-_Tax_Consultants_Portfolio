/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  CheckCircle,
  FileCheck,
  Users,
  Briefcase,
  Shield,
  Award,
  CreditCard,
  ChevronDown,
  FileText,
  TrendingUp,
  Clock,
  PenTool,
  IdCard,
  Search,
  FileSignature,
  Receipt,
  Landmark,
  Globe,
  BadgeCheck,
  UserCheck,
  Scale,
  Rocket,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';

interface PrivateLimitedCompanyPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function PrivateLimitedCompanyPage({ dict, setIsContactOpen }: PrivateLimitedCompanyPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const registrationSteps = [
    { step: '1', title: 'Apply for DSC', desc: 'Apply for Digital Signature Certificate for all directors of the Private Limited Company.', icon: PenTool },
    { step: '2', title: 'Apply for DIN', desc: 'Apply for Director Identification Number for all persons who will be directors.', icon: IdCard },
    { step: '3', title: 'Name Approval', desc: 'Check company name availability on MCA Portal and apply for name approval with RUN Form.', icon: Search },
    { step: '4', title: 'SPICe+ Filing', desc: 'File SPICe+ (INC-32) Private Limited Incorporation Form with E-MoA & E-AOA.', icon: FileSignature },
    { step: '5', title: 'PAN & TAN', desc: 'Apply for PAN & TAN which is issued along with Certificate of Incorporation.', icon: Receipt },
  ];

  const benefits = [
    { title: 'Easy Setup', desc: 'Easily setup and recommended for growing startups.', icon: Rocket },
    { title: 'Limited Liability', desc: 'Limited liability protection for all members.', icon: Shield },
    { title: 'More Credibility', desc: 'More credibility compared to other business forms.', icon: Award },
    { title: 'Raise Funds', desc: 'Easily raise funds from investors and VCs.', icon: TrendingUp },
    { title: 'ESOP Options', desc: 'ESOP options available to motivate employees.', icon: Users },
    { title: 'Name Protection', desc: 'Company name is protected across India.', icon: BadgeCheck },
  ];

  const pricingIncludes = [
    '2 Directors DIN + DSC',
    'Name Approval of Company',
    'MOA & AOA Drafting & Printing',
    'Certificate of Incorporation',
    'PAN & TAN of the Company',
  ];

  const freeWithPackage = [
    'MSME Registration Certificate',
    '10+ Premium Legal Agreement Templates',
  ];

  const costBreakdown = [
    { item: '2 Digital Signatures (1000*2)', cost: '2,000' },
    { item: 'Director Identification Number (500*2)', cost: '1,000' },
    { item: 'Stamp Duty (Approx)', cost: '2,500' },
    { item: 'Notary Fees', cost: '1,000' },
    { item: 'Govt Fee for RUN+PAN+TAN', cost: '1,200' },
    { item: 'Professional Fee (Market Price)', cost: '3,000-5,000' },
  ];

  const directorDocuments = [
    'Directors Personal PAN Card Copy',
    'Directors Aadhaar Card/Voter ID/Passport/Driving License (any one)',
    'Passport Size Photograph',
  ];

  const companyDocuments = [
    'Company Business Address Proof (Electricity Bill)',
    'NOC from Owner or Rent Agreement',
    'Sale Deed (if owned property)',
  ];

  const otherEntityOptions = [
    { name: 'Proprietorship Firm', desc: 'Single owner business' },
    { name: 'Partnership Firm', desc: 'Two or more partners' },
    { name: 'OPC Registration', desc: 'One Person Company' },
    { name: 'LLP Registration', desc: 'Limited Liability Partnership' },
  ];

  const annualCompliance = [
    'Appointment of Auditor with statutory audit of accounts',
    'Filing of AGM, Annual Return and Financial Statement',
    'Filing of Income Tax Return',
  ];

  const faqs = [
    {
      question: 'Can I register a Private Limited Company at my home address?',
      answer: 'Yes, you can register your company at your residential address. There is no issue - you only need the utility bill copy of the same.',
    },
    {
      question: 'Can I register family members in the company if I have no partner?',
      answer: 'Yes, it\'s a good idea to register your family member on paper. Later, you can change this or transfer the shares of the directors.',
    },
    {
      question: 'How many days does it take to register a private limited company?',
      answer: 'It takes minimum 10 to 15 days on average to register a private limited company in India.',
    },
    {
      question: 'How much does private limited company registration cost?',
      answer: 'It costs around Rs. 10,999/- INR except in some states like Punjab, Kerala, and MP due to higher Stamp Duty.',
    },
    {
      question: 'What is meant by authorized capital of 1 lakh rupees?',
      answer: 'It\'s just a maximum share value which you can issue in your company. It doesn\'t mean you have to invest 1 lakh rupees - you can start with any amount of capital.',
    },
    {
      question: 'Is GST Registration required for private limited company?',
      answer: 'GST Registration is optional till Rs. 20 lakh turnover (Rs. 10 lakh for north-east states). It\'s completely separate from private limited company registration.',
    },
    {
      question: 'Is registration with Startup India possible?',
      answer: 'Yes, with private limited company registration, Startup India registration is possible. Simply register your pvt ltd company and then register with the Startup India portal.',
    },
    {
      question: 'Can I run multiple businesses under one private limited company?',
      answer: 'Yes, you can run multiple businesses under one private limited company. For example, if you deal in both trading of products and services, you can mention this in your MOA.',
    },
    {
      question: 'What is DSC (Digital Signature Certificate)?',
      answer: 'In private limited company, all eForms are filed with DSC. At the end of the process, it will be delivered at your address via USB Token.',
    },
    {
      question: 'How do I register my company name or logo in India?',
      answer: 'With private limited company registration, your company name is secured. For logo registration, there is separate trademark registration.',
    },
    {
      question: 'What are the minimum requirements to become a director?',
      answer: 'Any individual, company, or NRI can become director if they are 18+ years of age and have Director Identification Number.',
    },
    {
      question: 'What is the validity of Private Limited Company Registration?',
      answer: 'It\'s lifetime validity, but company name can be terminated from ROC if business is not started within 1 year or if regular Annual Returns are not filed.',
    },
    {
      question: 'Can I become director if I\'m working in a private job?',
      answer: 'Yes, you can become director if you are not bound by any employment contract. Check your employment agreement for details.',
    },
    {
      question: 'Do I need to visit any government office?',
      answer: 'No, it\'s all done online. You just need to provide scanned documents via email or WhatsApp.',
    },
    {
      question: 'Are FDI or local investors allowed in private limited company?',
      answer: 'Yes, Venture Capitalist firms and Angel investors are allowed to invest in private limited company.',
    },
    {
      question: 'What are the mandatory annual compliances?',
      answer: 'Annual compliance includes: Appointment of Auditor with statutory audit, Filing of AGM/Annual Return/Financial Statement, and Income Tax Return filing.',
    },
    {
      question: 'Is Private Limited Company best for NRIs or Foreign Nationals?',
      answer: 'Yes, because it doesn\'t require prior approval from RBI. They can easily setup through this legal entity.',
    },
    {
      question: 'Can I convert my private limited company to other entity?',
      answer: 'Yes, conversion to LLP or OPC is possible, but you can\'t convert to basic forms like Proprietorship or Partnership.',
    },
    {
      question: 'What is limited liability protection?',
      answer: 'Limited liability protection means you\'re only responsible for limited amount of debt. Your personal assets are separate from company liabilities.',
    },
    {
      question: 'What else do I need apart from Pvt Ltd Company Registration?',
      answer: 'No other mandatory registration after opening current bank account. Optional registrations include MSME, Trademark, FSSAI License, or Patent Registration.',
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
              Business Registration
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 font-grotesk">
              Private Limited Company Registration
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-opensans">
              Start Your Pvt Ltd Company with 100% Govt Certified Portal. Get FREE Consultancy and register your company in seconds!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#3c8e59] hover:bg-[#2d6b43] text-white font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Get Proposal
              </button>
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-bold text-sm px-10 py-4 rounded-full transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">

        {/* What is Private Limited Company */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is Private Limited Company Registration?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              Private Limited Company Registration is one of the most popular legal entities in India. In simplified terms, it's a proper company registration with the Ministry of Corporate Affairs (MCA) that gives you rights to do business anywhere in India or outside.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              MCA registers your Pvt Ltd company and provides you a <strong>CIN Number</strong> with <strong>Certificate of Incorporation</strong>. At the end of the process, you simply open a current bank account on the Company Name based on the Certificate and start your company operations.
            </p>
            <div className="bg-[#ebf4ee] rounded-xl p-6 border border-[#3c8e59]/20 mt-4">
              <h4 className="font-semibold text-[#111927] mb-3 font-poppins">Pvt Ltd Company Registration Rules:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600 font-opensans">
                  <CheckCircle className="w-4 h-4 text-[#3c8e59]" />
                  Require minimum 2 directors or partners in the Private Limited Company
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-opensans">
                  <CheckCircle className="w-4 h-4 text-[#3c8e59]" />
                  Authorised Share Capital: 1 Lakh Rupees (proposed value, not required to invest)
                </li>
              </ul>
            </div>
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
            Pvt Ltd Company Registration Fees
          </h2>
          <div className="bg-gradient-to-r from-[#3c8e59] to-[#2d6b43] rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              <div>
                <div className="text-sm font-semibold tracking-wider uppercase mb-2 text-white/80 font-poppins">
                  Cheapest Cost - All Inclusive
                </div>
                <div className="text-5xl md:text-6xl font-extrabold font-grotesk mb-2">
                  10,999<span className="text-2xl font-normal">/- INR</span>
                </div>
                <p className="text-white/80 font-opensans text-sm">(Exclude GST) + GST Credit Available</p>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                  <h3 className="text-base font-bold mb-3 font-poppins">Package Includes:</h3>
                  <ul className="space-y-2">
                    {pricingIncludes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/90 font-opensans text-sm">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                  <h3 className="text-base font-bold mb-3 font-poppins">FREE with Package:</h3>
                  <ul className="space-y-2">
                    {freeWithPackage.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/90 font-opensans text-sm">
                        <Award className="w-4 h-4 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Book Now
              </button>
            </div>
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
            Private Limited Company Registration Process
          </h2>
          <p className="text-gray-600 leading-relaxed font-opensans mb-6">
            Simple 5-step process to register your Private Limited Company in India:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {registrationSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-white border border-emerald-500/5 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#3c8e59] text-white flex items-center justify-center font-bold text-lg font-grotesk mx-auto mb-3">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center mx-auto mb-3">
                    <IconComp className="w-5 h-5 text-[#3c8e59]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111927] mb-2 font-poppins">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-opensans">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-6 bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-[#111927] font-poppins">Timeline</h4>
                <p className="text-sm text-gray-600 font-opensans">DSC & DIN takes 1-2 days, Name approval takes 2-3 days. Total minimum <strong>10-15 days</strong> to complete incorporation.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pvt Ltd Company Registration Online */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Pvt Ltd Company Registration Online
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <p className="text-gray-600 leading-relaxed font-opensans mb-4">
              Pvt Ltd Company Registration Online is possible through the official MCA Government Website, but you can't do it yourself. It requires additional digital signature attestation from a <strong>Practicing Chartered Accountant</strong>, <strong>Company Secretary</strong>, or <strong>Lawyer</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              This means you need to hire a good CA to get your Private Limited Company Registration done anywhere in India.
            </p>
            <div className="mt-6 bg-[#ebf4ee] rounded-xl p-4 border border-[#3c8e59]/20">
              <p className="text-sm text-[#3c8e59] font-semibold font-poppins">
                Let us handle everything - Our expert CAs will complete your registration hassle-free!
              </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-[#3c8e59]" />
                </div>
                <h3 className="text-lg font-bold text-[#111927] font-poppins">Directors Documents</h3>
              </div>
              <ul className="space-y-3">
                {directorDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#3c8e59]" />
                </div>
                <h3 className="text-lg font-bold text-[#111927] font-poppins">Company Documents</h3>
              </div>
              <ul className="space-y-3">
                {companyDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
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
            Benefits of Private Limited Company
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ebf4ee] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6 text-[#3c8e59]" />
                  </div>
                  <h3 className="text-base font-bold text-[#111927] mb-2 font-poppins">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-opensans">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Cost Breakdown */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Cost Breakdown
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-bold text-[#111927] font-poppins">Item</th>
                    <th className="text-right py-3 px-4 text-sm font-bold text-[#111927] font-poppins">Cost (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm text-gray-600 font-opensans">{item.item}</td>
                      <td className="py-3 px-4 text-sm text-[#3c8e59] font-semibold font-poppins text-right">{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Company Name Availability */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Company Name Availability
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                <Search className="w-7 h-7 text-[#3c8e59]" />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed font-opensans">
                  In private limited company, you need to choose a <strong>unique name</strong>. Once a name is registered with MCA, no other company can use the same name - it's like Brand Registration.
                </p>
                <p className="text-gray-600 leading-relaxed font-opensans">
                  You need to provide 3-4 names during the approval process. MCA will check and approve based on name availability rules and regulations.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Other Entity Options */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Other Business Entity Options
          </h2>
          <p className="text-gray-600 leading-relaxed font-opensans mb-6">
            If you think Private Limited Company is expensive for starting, you can choose these alternatives:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherEntityOptions.map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white border border-emerald-500/5 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center"
              >
                <h3 className="text-sm font-bold text-[#3c8e59] mb-1 font-poppins">{option.name}</h3>
                <p className="text-xs text-gray-500 font-opensans">{option.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Annual Compliance */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Annual Compliance Requirements
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <p className="text-gray-600 leading-relaxed font-opensans mb-6">
              Mandatory annual compliance for Private Limited Company includes:
            </p>
            <ul className="space-y-3">
              {annualCompliance.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600 font-opensans">
                  <div className="w-6 h-6 rounded-full bg-[#3c8e59] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              Ready to Start Your Pvt Ltd Company?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-opensans">
              Get your Private Limited Company registered with our expert assistance. 100% online process with FREE consultancy and MSME registration included!
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
            >
              Register Now @ 10,999/-
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

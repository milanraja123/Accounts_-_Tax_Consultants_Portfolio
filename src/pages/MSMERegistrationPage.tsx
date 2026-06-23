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
  Globe,
  Zap,
  ChevronDown,
  Factory,
  TrendingUp,
  Landmark,
  BadgeCheck,
  Receipt,
  FileText,
  Scale,
  Lightbulb,
  Truck,
  ClipboardList,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';

interface MSMERegistrationPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function MSMERegistrationPage({ dict, setIsContactOpen }: MSMERegistrationPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const classifications = [
    {
      title: 'Micro Industries',
      manufacturingLimit: 'Up to Rs. 25 Lakhs',
      serviceLimit: 'Up to Rs. 10 Lakhs',
      icon: Building2,
      color: 'emerald',
    },
    {
      title: 'Small Industries',
      manufacturingLimit: 'Up to Rs. 5 Crores',
      serviceLimit: 'Up to Rs. 2 Crores',
      icon: Factory,
      color: 'blue',
    },
    {
      title: 'Medium Industries',
      manufacturingLimit: 'Up to Rs. 10 Crores',
      serviceLimit: 'Up to Rs. 5 Crores',
      icon: Landmark,
      color: 'purple',
    },
  ];

  const documentsRequired = [
    'Aadhaar Number',
    'Name of Applicant',
    'Social Category',
    'Gender',
    'Name of Enterprise / Business',
    'Type of Organization',
    'PAN Number',
    'Location of Plant',
    'Current Office Address',
    'Mobile Number',
    'E-Mail ID',
    'Date of Commencement of Business',
    'Bank Account Number',
    'Bank IFS Code',
    'Main Business Activity of Enterprise',
    'NIC 2 Digit Code',
    'Additional details about Business',
    'Number of employees',
    'Investment in Plant & Machinery / Equipment',
    'Scan copy of Aadhaar card',
  ];

  const benefits = [
    {
      title: 'Easy Bank Loans',
      desc: 'Registered businesses can avail collateral-free loans where property is not pledged with banks. Govt and SIDBI work together to implement this scheme.',
      icon: CreditCard,
    },
    {
      title: 'Reservation Benefits',
      desc: 'Government amended industrial act where registered businesses can increase production of goods and employment opportunities.',
      icon: Award,
    },
    {
      title: 'Easy Business Bank Account',
      desc: 'MSME Certificate is treated as legal entity proof, making it easy to open current bank accounts or apply for other registrations like GST.',
      icon: Landmark,
    },
    {
      title: 'International Trade Fairs',
      desc: 'Get government support and special consideration to participate in international and national trade fairs organized by MSME Department.',
      icon: Globe,
    },
    {
      title: 'Octroi Benefits',
      desc: 'Get refund of octroi imposed on goods and services, reducing unnecessary costs for small enterprises.',
      icon: Receipt,
    },
    {
      title: 'Stamp Duty Waived Off',
      desc: 'Previously only IT Parks or SEZ availed stamp duty benefits, now all small enterprises can avail these benefits.',
      icon: FileText,
    },
    {
      title: 'Income Tax Exemption',
      desc: 'Businesses doing innovative or society improvement work can take income tax benefits in initial years under startup scheme.',
      icon: Shield,
    },
    {
      title: 'Bar Code Registration Reimbursement',
      desc: 'Manufacturing units required barcode registration can get subsidy under this scheme.',
      icon: ClipboardList,
    },
    {
      title: 'NSIC Performance Subsidy',
      desc: 'Avail benefits of subsidy on various expenses through NSIC Performance and Credit Rating.',
      icon: TrendingUp,
    },
    {
      title: 'Industrial Promotion Subsidy',
      desc: 'Government promotes small enterprises by providing industrial promotion benefits in terms of subsidy.',
      icon: Factory,
    },
    {
      title: 'Protection from Delayed Payments',
      desc: 'File cases against buyers for delayed payments and get dispute settlement in minimum time.',
      icon: Scale,
    },
    {
      title: 'Reduced Bank Interest Rates',
      desc: '60% of bank advances must go to micro enterprises with preferential interest rates.',
      icon: CreditCard,
    },
    {
      title: '15% Capital Subsidy',
      desc: 'Get 15% capital subsidy to purchase plant and machinery for your enterprise.',
      icon: Zap,
    },
    {
      title: 'Security Deposit Waived Off',
      desc: 'Security deposit requirements are waived off for MSME registered enterprises.',
      icon: Shield,
    },
    {
      title: 'Electricity Bill Concession',
      desc: 'MSME Udyog Aadhar Certificate holders can avail concession in electricity bills in particular areas.',
      icon: Lightbulb,
    },
    {
      title: 'ISO Certificate Subsidy',
      desc: 'Get subsidy for ISO Certification to show credibility when applying for big projects.',
      icon: BadgeCheck,
    },
    {
      title: 'Government Tender Preference',
      desc: 'MSME certified enterprises are preferred in government tenders during bidding - crucial for winning big tenders.',
      icon: FileCheck,
    },
    {
      title: '50% Patent Registration Subsidy',
      desc: 'Innovative firms get 50% waived off in patent government registration fee.',
      icon: Lightbulb,
    },
  ];

  const bankLoanRules = [
    '40% of total advances must go to micro and small enterprises in manufacturing with investment up to Rs.10 lakh and service enterprises with investment up to Rs.4 lakh.',
    '20% of total advances should go to manufacturing enterprises with Rs.10-25 lakh investment and service enterprises with investment above Rs.4 lakh.',
    '60% of the advances must go to micro enterprises overall.',
  ];

  const processSteps = [
    { step: '1', title: 'Gather Documents', desc: 'Collect all required documents including Aadhaar, PAN, business details, and bank information.' },
    { step: '2', title: 'Fill Application', desc: 'Complete the MSME registration application with accurate business and personal details.' },
    { step: '3', title: 'Submit Online', desc: 'Submit the application to the respective government office according to latest rules.' },
    { step: '4', title: 'Verification', desc: 'Application is verified by DIC (District Industries Centre) department.' },
    { step: '5', title: 'Certificate Issued', desc: 'MSME Registration Certificate with MSME Number is issued within 2-3 days.' },
  ];

  const faqs = [
    {
      question: 'What is MSME Registration?',
      answer: 'MSME Registration is a certification issued by the respective state government department to avail benefits under the MSME Act. From 2015, the government modified MSME/SSI Registration to Udyog Aadhar Registration.',
    },
    {
      question: 'Who can apply for MSME Registration?',
      answer: 'Any enterprise including firms, shops, public/private limited companies, LLPs involved in manufacturing or service sector can apply for MSME registration to avail its benefits.',
    },
    {
      question: 'Is MSME Registration mandatory?',
      answer: 'MSME Registration is not mandatory but highly recommended for small and medium businesses to avail government schemes, subsidies, and other benefits under the MSMED Act.',
    },
    {
      question: 'What is the classification criteria for MSME?',
      answer: 'Classification is based on investment in plant & machinery: Micro (up to Rs.25L manufacturing/Rs.10L service), Small (up to Rs.5Cr/Rs.2Cr), Medium (up to Rs.10Cr/Rs.5Cr).',
    },
    {
      question: 'How long does MSME Registration take?',
      answer: 'The usual time is between 2-3 days to complete all documentation and receive the MSME Registration Certificate.',
    },
    {
      question: 'What is Udyog Aadhar?',
      answer: 'Udyog Aadhar is the new name for MSME/SSI Registration introduced by the government in 2015. It\'s a simplified online registration process linked to your Aadhaar number.',
    },
    {
      question: 'Can I get bank loans easily with MSME Registration?',
      answer: 'Yes, MSME registered businesses can avail collateral-free loans. Banks have specific targets where 60% of advances must go to micro enterprises.',
    },
    {
      question: 'Where is MSME Registration done?',
      answer: 'MSME Registration is done online but each state has a separate DIC (District Industries Centre) department that approves the certificate. Contact your nearby DIC for assistance.',
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 font-grotesk">
              MSME Registration Online
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-opensans">
              Apply for MSME Registration Online anywhere in India. Government Recognized Portal with 1 Lakh+ certificates issued.
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

        {/* What is MSME Registration */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is MSME Registration?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              MSME Registration plays a very important role for small and medium businesses across India. Numerous surveys show that a country's true economic growth is reckoned not just on its large-scale industries and foreign investments but also on its small and medium level industries, including various cottage industries operating in India.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              For a developing country like India, whose economy is basically dependent on agriculture and small-scale industries, applying for MSME registration or SSI Registration is considered as its backbone. Every state in India has its own tradition and culture, and with its huge stock of natural resources and intense climate variations, promoting and working in such industries on a large scale is very common among traders.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              <strong>MSME Registration</strong> is a certification issued by the respective state government department to avail benefits under the MSME Act. From 2015, the government modified MSME/SSI Registration and it has been changed to <strong>Udyog Aadhar Registration</strong>.
            </p>
          </div>
        </motion.section>

        {/* Why MSME is Important */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Why MSME Registration is Important?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              MSME registration is essential for developing transparency and accountability. The Government of India has categorized these industries under <strong>MSME - Micro, Small and Medium Enterprises</strong>. MSME is an authorized body that helps in promoting these industries throughout the country with the help of officially legalized Act.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              One unique advantage of MSME registration is that it authorizes numerous incentives to industries included under the MSMED Act. Apart from enterprises, firms, shops, public and private limited companies, and LLPs are also eligible to apply for registration under MSME to avail its benefits.
            </p>
            <div className="bg-[#ebf4ee] rounded-xl p-6 border border-[#3c8e59]/20 mt-4">
              <h4 className="font-semibold text-[#111927] mb-3 font-poppins">Key Advantages:</h4>
              <ul className="space-y-2">
                {['Simple access to government subsidies', 'Easy bank loan approvals', 'Eligibility for beneficial government schemes', 'Clarity in exercise, banking, and direct tax laws'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Classification Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Classification under MSME Registration
          </h2>
          <p className="text-gray-600 leading-relaxed font-opensans mb-6">
            An industry owner must know the requisites to classify their company and file application in the correct category. The Government of India has set the following classification:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classifications.map((item, idx) => {
              const IconComp = item.icon;
              const bgColors: Record<string, string> = {
                emerald: 'bg-emerald-50 border-emerald-200',
                blue: 'bg-blue-50 border-blue-200',
                purple: 'bg-purple-50 border-purple-200',
              };
              const iconColors: Record<string, string> = {
                emerald: 'bg-emerald-100 text-emerald-600',
                blue: 'bg-blue-100 text-blue-600',
                purple: 'bg-purple-100 text-purple-600',
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
                  className={`rounded-2xl p-6 border ${bgColors[item.color]} shadow-lg`}
                >
                  <div className={`w-14 h-14 rounded-xl ${iconColors[item.color]} flex items-center justify-center mb-4`}>
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 font-poppins ${textColors[item.color]}`}>{item.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-poppins mb-1">Manufacturing Sector</div>
                      <div className="text-sm font-semibold text-[#111927] font-opensans">{item.manufacturingLimit}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-poppins mb-1">Service Sector</div>
                      <div className="text-sm font-semibold text-[#111927] font-opensans">{item.serviceLimit}</div>
                    </div>
                  </div>
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
            MSME Registration Process
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <p className="text-gray-600 leading-relaxed font-opensans mb-6">
              MSME Registration process is completely online but requires professional assistance to fill up the application and get approval from the department. While MSMED Act is not compulsory, it is always recommended for government backing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#3c8e59] text-white flex items-center justify-center font-bold text-lg font-grotesk mx-auto mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#111927] mb-1 font-poppins">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-opensans">{step.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-[#ebf4ee] rounded-xl p-4 border border-[#3c8e59]/20">
              <p className="text-sm text-gray-600 font-opensans">
                <strong>Timeline:</strong> The usual time is between 2-3 days to complete all the documentation of the registration.
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
            Documents & Details Required
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {documentsRequired.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3c8e59] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-sm text-gray-600 font-opensans">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Benefits under MSME Registration
          </h2>
          <p className="text-gray-600 leading-relaxed font-opensans mb-6">
            MSME Registration provides you the right to avail benefits under government schemes. The Government will include your company in Central and State Government schemes with complete transparency.
          </p>
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
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className="bg-white border border-emerald-500/5 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5 text-[#3c8e59]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111927] mb-2 font-poppins">{benefit.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-opensans">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Bank Loan Rules */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Bank Loan Policies for MSME
          </h2>
          <div className="bg-gradient-to-r from-[#3c8e59] to-[#2d6b43] rounded-3xl p-8 text-white shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Landmark className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 font-poppins">Reduction in Interest Rates by Major Banks</h3>
                <p className="text-white/80 text-sm font-opensans">Under MSME scheme, all major banks have specific policies regarding loans:</p>
              </div>
            </div>
            <div className="space-y-4">
              {bankLoanRules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    #{idx + 1}
                  </div>
                  <p className="text-sm text-white/90 font-opensans">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Where to Register */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Where is MSME Registration Done?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                <Building2 className="w-7 h-7 text-[#3c8e59]" />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed font-opensans">
                  MSME Registration is done online, but each state has a separate <strong>DIC (District Industries Centre)</strong> department. These authorities approve the MSME Registration Certificate with the MSME Number.
                </p>
                <p className="text-gray-600 leading-relaxed font-opensans">
                  If you want to avail the schemes or benefits under MSME, you need to contact your nearby DIC Department for assistance.
                </p>
                <div className="bg-[#ebf4ee] rounded-lg p-4 border border-[#3c8e59]/20">
                  <p className="text-sm text-[#3c8e59] font-semibold font-poppins">
                    Let our experts handle your MSME registration - we work with all state DIC departments across India.
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
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white border border-emerald-500/5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="text-base font-semibold text-[#111927] font-poppins pr-4">{faq.question}</span>
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
                      <div className="px-6 pb-6">
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
              Ready to Register Your MSME?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-opensans">
              Get your MSME Registration done quickly with our expert assistance. Avail government schemes, subsidies, and bank loan benefits for your business.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
            >
              Get Started Today
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

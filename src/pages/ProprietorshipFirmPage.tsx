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
  Clock,
  BadgeCheck,
  Receipt,
  User,
  Wallet,
  Star,
  Phone,
  Mail,
  MessageCircle,
  XCircle,
  AlertTriangle,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';

interface ProprietorshipFirmPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function ProprietorshipFirmPage({ dict, setIsContactOpen }: ProprietorshipFirmPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const legalEntityOptions = [
    {
      title: 'Option 1: MSME + CA Certificate',
      price: '1,499',
      conditions: [
        'Deals within the state only (e.g., Delhi to Delhi)',
        'Within state expected turnover less than 20 lakh rupees',
      ],
      includes: ['MSME Registration Certificate', 'CA Certificate'],
      color: 'emerald',
    },
    {
      title: 'Option 2: GST Registration',
      price: '1,999',
      conditions: [
        'Inter-state sales or services (e.g., Rajasthan to Delhi)',
        'E-commerce or internet-based business',
        'Trader, Retailer, Manufacturer, or Aggregator',
        'Within state turnover more than 20 lakh rupees',
      ],
      includes: ['MSME Registration Certificate', 'GST Registration Certificate'],
      color: 'blue',
    },
  ];

  const registrationSteps = [
    { step: '1', title: 'Fill Application', desc: 'Fill-up your Proprietorship Firm Application simplified form.' },
    { step: '2', title: 'Make Payment', desc: 'Pay online via cards/netbanking/UPI/wallets in a secure way.' },
    { step: '3', title: 'Submit Documents', desc: 'Assign dedicated CA/Legal expert & submit docs via email or WhatsApp. Be Relax!' },
  ];

  const whyMyOnlineCA = [
    { title: 'Best Pricing', desc: 'Better & cheap pricing compared to agents or traditional portals.', icon: Wallet },
    { title: 'Govt Recognized', desc: 'Recognized under Govt Official Startup India Programme.', icon: BadgeCheck },
    { title: '5 Star Reviews', desc: 'Highest Social True Reviews on Facebook with 5 Star Ratings.', icon: Star },
    { title: 'Dedicated Support', desc: 'Support via Emails, Calls & WhatsApp.', icon: MessageCircle },
    { title: 'Free Consultancy', desc: 'Free Premium Legal Consultancy to start your business.', icon: Users },
    { title: 'Money Back Guarantee', desc: '100% Money Back Guarantee on any service.', icon: Shield },
  ];

  const documentsRequired = [
    'PAN Card of Applicant',
    'Aadhaar Card / Voter ID / Driving License / Passport (any one)',
    'Firm Address Proof: Electricity Bill / Gas Bill / Phone Bill',
  ];

  const gstAdditionalDocs = [
    'Passport Size Photograph',
    'Personal Bank Account Cancel Cheque / Statement / Passbook Front Page',
  ];

  const benefits = [
    { title: '1 Person Required', desc: 'Single entrepreneur can start the business.', icon: User },
    { title: 'Single Owner', desc: 'Complete ownership of the business.', icon: Briefcase },
    { title: 'Easy to Start & Close', desc: 'Simple process to begin and wind up.', icon: Clock },
    { title: 'Complete Control', desc: 'Full control over all business decisions.', icon: Shield },
    { title: 'Lower Cost', desc: 'Lower cost of formation and compliance.', icon: Wallet },
  ];

  const disadvantages = [
    'Lack of Resources',
    'Unlimited Liability',
    'Lack of Credibility',
    'Cannot raise funds easily',
    'Cannot add Partners',
  ];

  const annualCompliance = [
    { title: 'GST Returns', desc: 'If applied for GST Registration, file GST Returns based on business activity.' },
    { title: 'Income Tax Return', desc: 'Show business income in personal annual return (no separate PAN for firm).' },
  ];

  const timeline = [
    { service: 'MSME Registration + CA Certification', time: '2-6 days' },
    { service: 'GST Registration', time: '7 days avg' },
  ];

  const faqs = [
    {
      question: 'Does it require commercial property or office for registration?',
      answer: 'No, you can register on your residential property also, whether it\'s rented or own property. You just need utility bills copy with permission from your landlord or owner.',
    },
    {
      question: 'Is NOC required for rental or own property?',
      answer: 'If the bill copy is on another person\'s name, then yes, No Objection Certificate is required. Standard format is shared by us at a later stage.',
    },
    {
      question: 'Can I keep any name for the Firm?',
      answer: 'Yes, you can keep any name for the Firm. It\'s not related to private limited company or LLP. You have to keep name without any extension. Example: myonlineca technologies.',
    },
    {
      question: 'Can I register the firm on my family member\'s name?',
      answer: 'Yes, you can register your firm on your family member\'s name if you have any objection. Same documents are required as mentioned above.',
    },
    {
      question: 'Is there any other way to register apart from the 2 options?',
      answer: 'Yes, but they are expensive with less validity: a) Shop Act License - for physical shops, but very expensive in some states. b) Income Tax Return (Business ITR) - only for old traditional businesses already running.',
    },
    {
      question: 'Is Sole Proprietorship Firm Registration mandatory?',
      answer: 'Proprietorship firm is an unregistered legal entity. It needs only legal entity proof from the government to deal with vendors or banks. There is no Registration Certificate under the Firm Act.',
    },
    {
      question: 'What are the disadvantages of Proprietorship Firm?',
      answer: 'Main disadvantages include: Lack of Resources, Unlimited Liability, Lack of Credibility, Cannot raise funds easily, and Cannot add Partners.',
    },
    {
      question: 'Can NRI become Proprietor?',
      answer: 'No, Sole Proprietorship Registration is not for NRI (Non-Resident Person). It requires only Indian resident person. NRIs can invest in the proprietorship but cannot be the proprietor.',
    },
    {
      question: 'How much money is required to start Proprietorship?',
      answer: 'Unlike private limited company, proprietorship doesn\'t require any specific capital to show on paper. You can start with any amount in your business.',
    },
    {
      question: 'What are the annual compliances for Proprietorship?',
      answer: 'Only 2 compliances: a) GST Returns - if you have GST Registration, file returns based on business activity. b) Income Tax Return - show business income in your personal annual return.',
    },
    {
      question: 'Can I convert Proprietorship into Private Limited Company?',
      answer: 'Yes, you can convert your sole proprietorship firm into private limited company. There is a standard process for the same.',
    },
    {
      question: 'How to register the name in Sole Proprietorship?',
      answer: 'There are no rules for proprietorship registration names. You can keep any name that\'s not trademarked by another company. For security, you can go with trademark registration on your brand name.',
    },
    {
      question: 'How will I get my GST/MSME/CA Certificate?',
      answer: 'GST & MSME Certificate come as digital certificate via email. CA Certificate hard copy is sent via courier. Government-issued documents are mostly in soft copy only.',
    },
    {
      question: 'Do I need to visit any office for registration?',
      answer: 'No, you don\'t need to go anywhere. Just send documents via email or WhatsApp and your work is done.',
    },
    {
      question: 'How can I check validity of the Govt issued certificate?',
      answer: 'You will get verification steps to check your certificate validity on the government website. We properly register your Proprietorship Firm with the government.',
    },
    {
      question: 'Is Proprietorship Firm same as Company Registration?',
      answer: 'No, they are different. Proprietorship is a simple firm legal entity not properly registered with government, requiring only legal entity proof. Private Limited Company is properly registered with Ministry of Corporate Affairs.',
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
              Proprietorship Firm Registration
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-opensans">
              Sole Proprietorship Firm Registration Online with Govt Certified Portal. Start your business with minimal compliance and cost.
            </p>
            <div className="mt-6 text-3xl md:text-4xl font-extrabold text-[#3c8e59] font-grotesk">
              Starting @ 1,499/- INR
            </div>
            <div className="mt-8">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#3c8e59] hover:bg-[#2d6b43] text-white font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">

        {/* What is Proprietorship */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is Proprietorship Firm Registration?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              <strong>Sole Proprietorship Firm Registration</strong> is a Single Person Firm Registration. The main objective is to open a Current Bank Account on the name of the business. It's a simple firm structure that enables doing business in India with <strong>less compliance and lower cost</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              A Sole Proprietorship Firm requires minimum <strong>2 Legal Entity Proofs</strong> to open a Current Bank Account.
            </p>
          </div>
        </motion.section>

        {/* Legal Entity Options */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            2 Legal Entity Proof Options
          </h2>
          <p className="text-gray-600 leading-relaxed font-opensans mb-6">
            Choose the right legal entity certificate based on your business requirements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalEntityOptions.map((option, idx) => {
              const bgColors: Record<string, string> = {
                emerald: 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-white',
                blue: 'border-blue-200 bg-gradient-to-br from-blue-50 to-white',
              };
              const badgeColors: Record<string, string> = {
                emerald: 'bg-emerald-500',
                blue: 'bg-blue-500',
              };
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className={`rounded-2xl p-6 border-2 ${bgColors[option.color]} shadow-lg`}
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-4 ${badgeColors[option.color]}`}>
                    {option.title}
                  </div>
                  <div className="text-3xl font-extrabold text-[#111927] mb-4 font-grotesk">
                    {option.price}<span className="text-base font-normal text-gray-500">/- INR</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 font-poppins">Applicable when:</h4>
                    <ul className="space-y-2">
                      {option.conditions.map((condition, cidx) => (
                        <li key={cidx} className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                          <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                          <span>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 font-poppins">Includes:</h4>
                    <ul className="space-y-1">
                      {option.includes.map((item, iidx) => (
                        <li key={iidx} className="flex items-center gap-2 text-sm text-[#3c8e59] font-semibold font-opensans">
                          <BadgeCheck className="w-4 h-4" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Free with Package */}
          <div className="mt-6 bg-[#ebf4ee] rounded-2xl p-6 border border-[#3c8e59]/20">
            <h4 className="font-semibold text-[#111927] mb-3 font-poppins">FREE with Every Package:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-600 font-opensans">
                <Award className="w-4 h-4 text-[#3c8e59]" />
                <span>10+ Premium Legal Agreements</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 font-opensans">
                <FileText className="w-4 h-4 text-[#3c8e59]" />
                <span>Premium Invoice Templates</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#3c8e59] hover:bg-[#2d6b43] text-white font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
            >
              Book Now
            </button>
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
            Proprietorship Firm Registration Process
          </h2>
          <p className="text-gray-600 leading-relaxed font-opensans mb-6">
            Simple 3 steps to register your Firm:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {registrationSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#3c8e59] text-white flex items-center justify-center font-bold text-xl font-grotesk mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#111927] mb-2 font-poppins">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-opensans">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why MyOnlineCA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Why Register Online with Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMyOnlineCA.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white border border-emerald-500/5 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-5 h-5 text-[#3c8e59]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111927] mb-1 font-poppins">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-opensans">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
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
            <h3 className="text-lg font-bold text-[#111927] mb-4 font-poppins">Basic Documents:</h3>
            <ul className="space-y-3 mb-6">
              {documentsRequired.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600 font-opensans">
                  <CheckCircle className="w-5 h-5 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h4 className="text-base font-bold text-blue-700 mb-3 font-poppins">Additional for GST Registration:</h4>
              <ul className="space-y-2">
                {gstAdditionalDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-blue-700 font-opensans">
                    <FileCheck className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-500 mt-4 font-opensans italic">
              Note: No issues if electricity bill is on another person's name.
            </p>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Registration Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-[#3c8e59]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111927] font-poppins">{item.service}</h3>
                  <p className="text-lg font-extrabold text-[#3c8e59] font-grotesk">{item.time}</p>
                </div>
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
            Benefits of Proprietorship Firm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
                  className="bg-white border border-emerald-500/5 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ebf4ee] flex items-center justify-center mb-3 mx-auto">
                    <IconComp className="w-6 h-6 text-[#3c8e59]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111927] mb-1 font-poppins">{benefit.title}</h3>
                  <p className="text-xs text-gray-500 font-opensans">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Disadvantages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Disadvantages to Consider
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <ul className="space-y-2">
                  {disadvantages.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-amber-800 font-opensans">
                      <XCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
            Annual Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {annualCompliance.map((item, idx) => (
              <div key={idx} className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                    <Receipt className="w-5 h-5 text-[#3c8e59]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#111927] mb-1 font-poppins">{item.title}</h3>
                    <p className="text-sm text-gray-500 font-opensans">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
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
              Ready to Start Your Proprietorship Firm?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-opensans">
              Get your Sole Proprietorship Firm registered with our expert assistance. Lowest cost, fastest processing, and dedicated support!
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
            >
              Register Now @ 1,499/-
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

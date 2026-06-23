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
  ChevronDown,
  FileText,
  Clock,
  BadgeCheck,
  Receipt,
  Wallet,
  Star,
  MessageCircle,
  FileSignature,
  Stamp,
  CreditCard,
  Home,
  Search,
  UserPlus,
  Scale,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';

interface PartnershipFirmPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function PartnershipFirmPage({ dict, setIsContactOpen }: PartnershipFirmPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const importantFactors = [
    { title: 'Partnership Deed', desc: 'On Stamp Paper with Notarised', icon: FileSignature },
    { title: 'PAN & TAN', desc: 'Of the Partnership Firm', icon: CreditCard },
    { title: 'MSME Registration', desc: 'Under MSME Act 2006', icon: Building2 },
  ];

  const packages = [
    {
      title: 'Basic Partnership Firm Registration',
      price: '2,499',
      color: 'emerald',
      includes: [
        'Partnership Deed Drafting Service by Legal Expert',
        'PAN & TAN Application',
        'Partnership Firm Registration under MSME Act',
      ],
    },
    {
      title: 'Premium Partnership Firm Registration',
      price: '3,999',
      color: 'blue',
      includes: [
        'All Basic Package Features',
        'GST Registration on Partnership Firm Name',
      ],
    },
  ];

  const registrationProcess = [
    { step: '1', title: 'Fill Application', desc: 'Fill-up simplified Partnership Application Form.' },
    { step: '2', title: 'Make Payment', desc: 'Pay online via cards/netbanking/UPI/wallet securely.' },
    { step: '3', title: 'Submit Documents', desc: 'Assign dedicated legal expert & submit docs via email or WhatsApp. Be Relax!' },
  ];

  const detailedSteps = [
    'Choose Partnership Firm Name',
    'Fill-up Application form with business and personal details',
    'Create Partnership Agreement/Deed with our professionals',
    'Print deed on stamp paper & sign by all partners with notarization',
    'Email scanned Deed copy and apply for PAN & TAN',
    'Get PAN & TAN Acknowledgement via Email',
    'Receive Partnership Firm PAN Card physical copy',
    'Apply for MSME Registration with our professionals',
    'Get MSME Certificate and legal agreements on email',
    'Open current bank account with Deed, PAN, TAN & MSME',
  ];

  const documentsRequired = [
    {
      title: 'ID & Address Proof of Partners',
      items: ['PAN Card', 'Passport', 'Voter ID', 'Aadhaar Card', 'Driving License'],
    },
  ];

  const propertyDocs = [
    { type: 'Rented Property', docs: 'Rent Agreement + NOC from Landlord' },
    { type: 'Own Property', docs: 'Electricity Bills or any Address Proof' },
  ];

  const features = [
    { title: '2 Persons Required', desc: 'Minimum 2 partners to start', icon: Users },
    { title: 'Shared Responsibilities', desc: 'Partners share duties of business', icon: Scale },
    { title: 'More Capital', desc: 'More capital can be brought in', icon: Wallet },
    { title: 'Easy Setup', desc: 'Simple registration process', icon: CheckCircle },
  ];

  const whyChooseUs = [
    { title: 'Best Pricing', desc: 'Better & cheap pricing compared to agents or traditional portals.', icon: Wallet },
    { title: 'Govt Recognized', desc: 'Recognized under Govt Official Startup India Programme.', icon: BadgeCheck },
    { title: '5 Star Reviews', desc: 'Highest Social True Reviews on Facebook with 5 Star Ratings.', icon: Star },
    { title: 'Dedicated Support', desc: 'Support via Emails, Calls & WhatsApp.', icon: MessageCircle },
    { title: 'Free Consultancy', desc: 'Free Premium Legal Consultancy to start your business.', icon: Users },
    { title: 'Money Back Guarantee', desc: '100% Money Back Guarantee on any service.', icon: Shield },
  ];

  const deedContents = [
    'Name of the Firm',
    'Full Address of registered office',
    'Brief Description of business nature',
    'Profit Sharing Ratio between partners',
    'Name & Full Address of all Partners',
    'Salary Amount (if any) to Partners',
    'Capital Contribution by each Partner',
  ];

  const annualCompliance = [
    { title: 'Business Partnership ITR', desc: 'Annual Income Tax Return for the firm' },
    { title: 'Personal ITR', desc: 'Personal Income Tax Return of partners' },
    { title: 'GST Return Filing', desc: 'If GST registered, file periodic returns' },
  ];

  const faqs = [
    {
      question: 'Can residential address be used for partnership firm registration?',
      answer: "Yes, you can use the partner's residential property (home address) for registration. It requires only proof like electricity bill copy, rental agreement, or NOC.",
    },
    {
      question: 'What is NOC (No Objection Certificate)?',
      answer: "If the electricity bill is on another person's name, NOC is required stating the owner has no objection to commercial activity. It doesn't change your residential meter connection.",
    },
    {
      question: 'How to register my Partnership Firm name? Is it possible?',
      answer: 'Partnership firm name identity protection is not available. You can choose any firm name. For name security, you can go with Trademark Registration.',
    },
    {
      question: 'We are working employees. Can we register on family member name?',
      answer: 'Yes, you can register on family member names. There is no issue. Basic documents mentioned above are required for online partnership firm registration.',
    },
    {
      question: 'What capital is required to start a partnership firm?',
      answer: 'Nothing specific. You just need to deposit the amount required to maintain current bank account balance. You can show any capital amount - no requirements like private limited company.',
    },
    {
      question: 'Why is Partnership Firm an Unregistered Legal Entity?',
      answer: 'Partnership firm can be registered under Partnership Act with Registrar of Firms. But after introducing LLP Registration, most people skip ROF registration due to expensive cost. Disadvantages: Cannot file case against partner/firm/third party, cannot avail power to claim set off.',
    },
    {
      question: 'What is Partnership Firm Registration under MSME Act 2006?',
      answer: 'Registrar of Firms registration is expensive and optional. You can skip it and apply under MSME Act instead. MSME Registration Certificate helps easily open a current bank account.',
    },
    {
      question: 'What are requirements to become a partner?',
      answer: 'Only Indian resident persons are allowed for partnership firm. If you have any foreign partner, you need to go with Private Limited Company instead.',
    },
    {
      question: 'What are annual compliance/yearly maintenance costs?',
      answer: 'Three main compliances: Business Partnership ITR, Personal ITR, and GST Return Filing (if applicable). Cost is approximately 4000-5000/- per year.',
    },
    {
      question: 'Can we convert partnership firm to private limited company?',
      answer: 'Yes, you can convert. You need to setup a new private limited company and arrange an agreement between the partnership and private limited company.',
    },
    {
      question: 'What is the timeline for Partnership Firm Registration?',
      answer: 'Minimum 2 days for deed drafting, 4-6 days for PAN Card acknowledgement, then 1 day for MSME Registration Certificate.',
    },
    {
      question: 'How to open current bank account for Partnership Firm?',
      answer: 'Banks require partnership deed with identity/address proof and separate partnership firm PAN card as per RBI compliance.',
    },
    {
      question: 'How to create separate PAN Card for Partnership Firm?',
      answer: 'Once you notarize the deed, you can apply for PAN card with our help.',
    },
    {
      question: 'Will my partnership firm have registration certificate?',
      answer: 'You will get MSME Certificate for legal entity proof. We do not deal with Registrar of Firms certificate as it is optional and very expensive.',
    },
    {
      question: 'Is investment possible in partnership firm?',
      answer: 'Yes, investment is possible but there is no limited liability like LLP or Pvt Ltd Company. Any Indian resident person can invest.',
    },
    {
      question: 'How to notarize Partnership Deed?',
      answer: 'After printing deed on stamp paper, notarize it with a lawyer in presence of all partners.',
    },
    {
      question: 'Is Partnership Deed Registration compulsory or optional?',
      answer: 'Partnership Deed Registration with Registrar of Firms is optional. It is expensive, so you can skip it.',
    },
    {
      question: 'Do I have to visit any department?',
      answer: 'No, everything is online with us. But you need to print on stamp paper and notarize, which requires physical presence of partners.',
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
              Partnership Firm Registration
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-opensans">
              #1 Portal to get done registration of partnership firm at Cheapest Cost with simple 3 Steps.
            </p>
            <div className="mt-6 text-3xl md:text-4xl font-extrabold text-[#3c8e59] font-grotesk">
              Starting @ 2,499/- INR
            </div>
            <div className="mt-8">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#3c8e59] hover:bg-[#2d6b43] text-white font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Get Proposal
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">

        {/* What is Partnership */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is Partnership Registration?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <p className="text-gray-600 leading-relaxed font-opensans mb-6">
              <strong>Partnership Firm</strong> is the most popular form of business entity in India for Partner Entrepreneurs. It needs just <strong>2 persons to start a business</strong>.
            </p>

            <h3 className="text-lg font-bold text-[#111927] mb-4 font-poppins">3 Important Factors under Partnership Firm Registration:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {importantFactors.map((factor, idx) => {
                const IconComp = factor.icon;
                return (
                  <div key={idx} className="bg-[#ebf4ee] rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3c8e59] flex items-center justify-center flex-shrink-0">
                      <IconComp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111927] font-poppins">{factor.title}</h4>
                      <p className="text-xs text-gray-500 font-opensans">{factor.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Pricing Packages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Partnership Firm Registration Fees
          </h2>
          <p className="text-gray-600 leading-relaxed font-opensans mb-6">
            We have the lowest pricing guarantee for Startups & Small Business:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, idx) => {
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
                  className={`rounded-2xl p-6 border-2 ${bgColors[pkg.color]} shadow-lg`}
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-4 ${badgeColors[pkg.color]}`}>
                    {idx === 1 ? 'RECOMMENDED' : 'BASIC'}
                  </div>
                  <h3 className="text-lg font-bold text-[#111927] mb-2 font-poppins">{pkg.title}</h3>
                  <div className="text-3xl font-extrabold text-[#111927] mb-4 font-grotesk">
                    {pkg.price}<span className="text-base font-normal text-gray-500">/- INR</span>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 font-poppins">Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, iidx) => (
                        <li key={iidx} className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                          <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
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
                <span>10+ Premium Legal Agreements Templates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 font-opensans">
                <FileText className="w-4 h-4 text-[#3c8e59]" />
                <span>Premium Invoice Templates</span>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-sm text-amber-800 font-opensans">
              <strong>Note:</strong> Printing of the Deed on Stamp Paper and Notarization Services not included in the above package which requires physical presence of all partners.
            </p>
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
            Partnership Firm Process and Procedure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {registrationProcess.map((step, idx) => (
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

        {/* Documents Required */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Documents Required for Partnership Firm
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#111927] mb-4 font-poppins flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#3c8e59]" />
                ID & Address Proof of Partners (any one):
              </h3>
              <div className="flex flex-wrap gap-2">
                {['PAN Card', 'Passport', 'Voter ID', 'Aadhaar Card', 'Driving License'].map((doc, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-[#ebf4ee] text-[#3c8e59] text-sm font-medium rounded-full font-opensans">
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#111927] mb-4 font-poppins flex items-center gap-2">
                <Home className="w-5 h-5 text-[#3c8e59]" />
                Business Place Address Proof:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {propertyDocs.map((prop, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h4 className="text-sm font-bold text-[#111927] mb-1 font-poppins">{prop.type}</h4>
                    <p className="text-sm text-gray-600 font-opensans">{prop.docs}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 font-opensans italic">
                Note: Business place and home place can be same.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Detailed Steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Steps to Register a Partnership Firm
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="space-y-4">
              {detailedSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#3c8e59] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 font-grotesk">
                    {idx + 1}
                  </div>
                  <p className="text-gray-600 font-opensans pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Features of Partnership Firm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white border border-emerald-500/5 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ebf4ee] flex items-center justify-center mb-3 mx-auto">
                    <IconComp className="w-6 h-6 text-[#3c8e59]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111927] mb-1 font-poppins">{feature.title}</h3>
                  <p className="text-xs text-gray-500 font-opensans">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Detailed Guide - Partnership Deed */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            How to Create Partnership Deed?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <p className="text-gray-600 leading-relaxed font-opensans mb-6">
              Partnership deed is an agreement between partners where all terms and conditions are mentioned. It's always written on stamp paper & notarized.
            </p>
            <h3 className="text-lg font-bold text-[#111927] mb-4 font-poppins">Partnership Deed Includes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {deedContents.map((content, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 font-opensans">
                  <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0" />
                  <span>{content}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6 font-opensans italic">
              Apart from this, deed includes rules regarding admission of partner, retirement, death, etc. After drafting, print on stamp paper & get notarized.
            </p>
          </div>
        </motion.section>

        {/* ROF Registration (Optional) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Register Partnership Deed with Registrar of Firms (Optional)
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed font-opensans mb-4">
              Partnership Deed Registration with Registrar of Firms is <strong>optional but expensive</strong>. If needed, submit these documents:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-gray-700 font-opensans">
                <FileCheck className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Application for Registration of Partnership in Form No. 1</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700 font-opensans">
                <FileCheck className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Duly filled specimen of Affidavit</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700 font-opensans">
                <FileCheck className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Certified True Copy of Partnership Deed</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700 font-opensans">
                <FileCheck className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Ownership proof or rental/lease agreement of principal place</span>
              </li>
            </ul>
            <p className="text-sm text-amber-700 font-opensans">
              <strong>Our Recommendation:</strong> Skip ROF registration and go with MSME Registration instead - it's cheaper and serves as valid legal entity proof.
            </p>
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
            Annual Compliance (Yearly Maintenance)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {annualCompliance.map((item, idx) => (
              <div key={idx} className="bg-white border border-emerald-500/5 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center mb-3">
                  <Receipt className="w-5 h-5 text-[#3c8e59]" />
                </div>
                <h3 className="text-base font-bold text-[#111927] mb-1 font-poppins">{item.title}</h3>
                <p className="text-sm text-gray-500 font-opensans">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 font-opensans text-center">
            Estimated yearly compliance cost: <strong>4,000 - 5,000/- INR</strong>
          </p>
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
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center mb-3 mx-auto">
                  <FileSignature className="w-7 h-7 text-[#3c8e59]" />
                </div>
                <h3 className="text-base font-bold text-[#111927] font-poppins">Deed Drafting</h3>
                <p className="text-2xl font-extrabold text-[#3c8e59] font-grotesk">2 Days</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center mb-3 mx-auto">
                  <CreditCard className="w-7 h-7 text-[#3c8e59]" />
                </div>
                <h3 className="text-base font-bold text-[#111927] font-poppins">PAN Card</h3>
                <p className="text-2xl font-extrabold text-[#3c8e59] font-grotesk">4-6 Days</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center mb-3 mx-auto">
                  <BadgeCheck className="w-7 h-7 text-[#3c8e59]" />
                </div>
                <h3 className="text-base font-bold text-[#111927] font-poppins">MSME Certificate</h3>
                <p className="text-2xl font-extrabold text-[#3c8e59] font-grotesk">1 Day</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Why Choose Us for Partnership Firm?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
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
              Ready to Register Your Partnership Firm?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-opensans">
              Get your Partnership Firm registered with our expert assistance. Lowest cost, fastest processing, and dedicated support!
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
            >
              Register Now @ 2,499/-
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

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Receipt,
  CheckCircle,
  FileCheck,
  Building,
  Briefcase,
  Users,
  Truck,
  Globe,
  ShoppingCart,
  AlertTriangle,
  Clock,
  Shield,
  ChevronDown,
  FileText,
  CreditCard,
  TrendingUp,
  Wallet,
  Package,
  MapPin,
  HelpCircle,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';

interface GSTRegistrationPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function GSTRegistrationPage({ dict, setIsContactOpen }: GSTRegistrationPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whoNeedsGST = [
    { title: 'Aggregate Turnover Exceeding Threshold', desc: 'If your aggregate turnover in a financial year exceeds Rs.40 lakh (Rs.20 lakh for special category states), GST registration is mandatory.', icon: TrendingUp },
    { title: 'Casual Taxable Person', desc: 'A person who occasionally supplies goods or services in a state where they have no fixed place of business needs GST registration.', icon: Briefcase },
    { title: 'Non-Resident Taxable Person', desc: 'Non-residents who supply goods or services in India must register for GST regardless of turnover.', icon: Globe },
    { title: 'Agents & Input Service Distributors', desc: 'Agents who make taxable supplies on behalf of other taxable persons, and Input Service Distributors need GST registration.', icon: Users },
    { title: 'E-Commerce Operators', desc: 'Every e-commerce operator and persons supplying goods/services through e-commerce platforms require GST registration.', icon: ShoppingCart },
    { title: 'Inter-State Suppliers', desc: 'Persons making inter-state taxable supplies of goods or services must register regardless of turnover threshold.', icon: Truck },
    { title: 'Online Information Services', desc: 'Persons supplying online information and database access or retrieval services from outside India to India.', icon: Globe },
    { title: 'TDS/TCS Deductors', desc: 'Persons required to deduct tax at source (TDS) or collect tax at source (TCS) under GST must register.', icon: Receipt },
    { title: 'Reverse Charge Recipients', desc: 'Persons liable to pay tax under reverse charge mechanism need to register for GST.', icon: CreditCard },
  ];

  const features = [
    { title: 'Expert CA Assistance', desc: 'Dedicated Chartered Accountant for your GST registration process', icon: Users },
    { title: 'Fast Processing', desc: 'Quick turnaround time with efficient document processing', icon: Clock },
    { title: 'Complete Support', desc: 'End-to-end support from application to certificate receipt', icon: Shield },
    { title: 'Document Verification', desc: 'Thorough verification of all documents before submission', icon: FileCheck },
    { title: 'Status Updates', desc: 'Regular updates on your application status', icon: TrendingUp },
    { title: 'Post Registration Help', desc: 'Guidance on GST compliance after registration', icon: HelpCircle },
  ];

  const benefits = [
    { title: 'Legal Recognition', desc: 'GST registration provides legal recognition to your business as a supplier of goods or services.', icon: Shield },
    { title: 'Input Tax Credit', desc: 'Claim input tax credit on purchases and reduce your tax liability on sales.', icon: Wallet },
    { title: 'Interstate Sales', desc: 'Conduct interstate sales without any restrictions after GST registration.', icon: Truck },
    { title: 'Online Business', desc: 'Essential for selling on e-commerce platforms like Amazon, Flipkart, etc.', icon: ShoppingCart },
    { title: 'Business Credibility', desc: 'Enhances business credibility and trust among customers and suppliers.', icon: Building },
    { title: 'Government Tenders', desc: 'Required for participating in government tenders and contracts.', icon: FileText },
  ];

  const documentsIndividual = [
    'PAN Card of the Proprietor',
    'Aadhaar Card of the Proprietor',
    'Photograph (Passport Size)',
    'Bank Account Details (Cancelled Cheque/Statement)',
    'Address Proof of Business (Electricity Bill/Rent Agreement)',
    'NOC from Owner (if rented)',
  ];

  const documentsPartnership = [
    'PAN Card of the Partnership Firm',
    'Partnership Deed',
    'PAN and Aadhaar of all Partners',
    'Photograph of all Partners',
    'Address Proof of Business Place',
    'Bank Account Details of Firm',
    'Authorization Letter',
  ];

  const documentsCompany = [
    'PAN Card of the Company',
    'Certificate of Incorporation',
    'MOA/AOA',
    'Board Resolution',
    'PAN and Aadhaar of Directors',
    'Photograph of Directors',
    'Address Proof of Registered Office',
    'Bank Account Details',
  ];

  const processSteps = [
    { step: '1', title: 'Document Collection', desc: 'Gather all required documents based on your business type.' },
    { step: '2', title: 'Application Preparation', desc: 'Our experts prepare the GST REG-01 application form.' },
    { step: '3', title: 'Submission', desc: 'Application submitted on the GST portal with digital signature.' },
    { step: '4', title: 'ARN Generation', desc: 'Application Reference Number generated for tracking.' },
    { step: '5', title: 'Verification', desc: 'GST officer verifies the application and documents.' },
    { step: '6', title: 'Certificate Issuance', desc: 'GST Registration Certificate issued with GSTIN.' },
  ];

  const penalties = [
    { offense: 'Not obtaining GST registration when required', penalty: 'Rs.10,000 or tax evaded, whichever is higher' },
    { offense: 'Not filing GST returns', penalty: 'Rs.50 per day for CGST + Rs.50 per day for SGST (Max Rs.5,000 each)' },
    { offense: 'Fraudulent registration or invoice', penalty: '100% of tax due or Rs.10,000, whichever is higher' },
    { offense: 'Not displaying GSTIN', penalty: 'Rs.25,000 penalty' },
    { offense: 'Late payment of tax', penalty: '18% per annum interest on delayed payment' },
  ];

  const gstinStructure = [
    { position: '1-2', description: 'State Code (e.g., 27 for Maharashtra, 07 for Delhi)' },
    { position: '3-12', description: 'PAN Number of the taxpayer' },
    { position: '13', description: 'Entity code of the same PAN holder in a state' },
    { position: '14', description: 'Blank - reserved for future use (currently "Z")' },
    { position: '15', description: 'Check digit for error detection' },
  ];

  const faqs = [
    {
      question: 'What is GST Registration?',
      answer: 'GST Registration is the process of obtaining a unique identification number (GSTIN) under the Goods and Services Tax regime. It is mandatory for businesses with turnover exceeding the prescribed threshold limits and for certain categories of persons regardless of turnover.',
    },
    {
      question: 'What is the GST registration threshold limit?',
      answer: 'The threshold limit is Rs.40 lakh for suppliers of goods (Rs.20 lakh for special category states) and Rs.20 lakh for suppliers of services (Rs.10 lakh for special category states). However, certain categories must register regardless of turnover.',
    },
    {
      question: 'How long does GST registration take?',
      answer: 'The GST registration process typically takes 3-7 working days from the date of application submission, subject to proper documentation and verification by the GST officer.',
    },
    {
      question: 'Can I register for GST voluntarily?',
      answer: 'Yes, you can register for GST voluntarily even if your turnover is below the threshold limit. Voluntary registration allows you to claim input tax credit and conduct interstate business.',
    },
    {
      question: 'What documents are required for GST registration?',
      answer: 'The documents vary based on business type but generally include PAN Card, Aadhaar Card, photographs, address proof of business place, bank account details, and business registration documents (if applicable).',
    },
    {
      question: 'Can I have multiple GST registrations?',
      answer: 'Yes, you need separate GST registration for each state where you have a place of business. You can also opt for separate registration for multiple business verticals within the same state.',
    },
    {
      question: 'What is GSTIN?',
      answer: 'GSTIN (Goods and Services Tax Identification Number) is a unique 15-digit alphanumeric code assigned to every registered taxpayer. It includes state code, PAN, entity code, and check digit.',
    },
    {
      question: 'Is GST registration required for e-commerce sellers?',
      answer: 'Yes, GST registration is mandatory for all persons supplying goods or services through e-commerce platforms, regardless of turnover threshold.',
    },
    {
      question: 'What happens if I don\'t register for GST when required?',
      answer: 'Operating without GST registration when required is an offense. Penalties include Rs.10,000 or the amount of tax evaded, whichever is higher. Repeated offenses can lead to higher penalties.',
    },
    {
      question: 'Can GST registration be cancelled?',
      answer: 'Yes, GST registration can be cancelled voluntarily if the business is discontinued, transferred, or no longer liable for registration. The department can also cancel registration for non-compliance.',
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
              GST Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 font-grotesk">
              GST Registration
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-opensans">
              New GST Registration Online - Get your GSTIN quickly with our expert assistance. Fast, reliable, and hassle-free registration process.
            </p>
            <div className="mt-8">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#3c8e59] hover:bg-[#2d6b43] text-white font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Register Now @ 999/-
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">

        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is GST Registration?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              GST Registration is the process by which a taxpayer gets registered under GST (Goods and Services Tax). Once you are registered, you will be provided with a unique 15-digit Goods and Services Tax Identification Number called GSTIN. GST registration is mandatory for businesses whose turnover exceeds the threshold limits prescribed under the GST law.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              GST has replaced multiple indirect taxes that were previously levied by the Central and State Governments, such as VAT, Service Tax, Central Excise, etc. It is a single tax on the supply of goods and services, from the manufacturer to the consumer, with credits of input taxes paid at each stage.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              The registration under GST law is PAN-based and state-specific. This means that businesses operating in multiple states need to obtain separate registration for each state. The GSTIN helps in identification of the taxpayer and is used for filing returns, claiming input tax credit, and compliance with GST regulations.
            </p>
          </div>
        </motion.section>

        {/* Who Needs GST Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Who Requires GST Registration?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoNeedsGST.map((item, idx) => {
              const IconComp = item.icon;
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
                  <h3 className="text-base font-bold text-[#111927] mb-2 font-poppins">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-opensans">{item.desc}</p>
                </motion.div>
              );
            })}
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
            GST Registration Package
          </h2>
          <div className="bg-gradient-to-r from-[#3c8e59] to-[#2d6b43] rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="text-sm font-semibold tracking-wider uppercase mb-2 text-white/80 font-poppins">
                  All-Inclusive Package
                </div>
                <div className="text-5xl md:text-6xl font-extrabold font-grotesk mb-2">
                  999<span className="text-2xl font-normal">/- INR</span>
                </div>
                <p className="text-white/80 font-opensans">Complete GST Registration Service</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-w-[280px]">
                <h3 className="text-lg font-bold mb-4 font-poppins">Package Includes:</h3>
                <ul className="space-y-3">
                  {['Expert CA Assistance', 'Document Verification', 'Application Filing', 'ARN Generation', 'GST Certificate', 'Post-Registration Support'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/90 font-opensans">
                      <CheckCircle className="w-5 h-5 text-white/90 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Why Choose Us for GST Registration?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-6 h-6 text-[#3c8e59]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#111927] mb-1 font-poppins">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-opensans">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
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
            Benefits of GST Registration
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

        {/* Documents Required Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Documents Required for GST Registration
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Individual/Proprietor */}
            <div className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#3c8e59]" />
                </div>
                <h3 className="text-lg font-bold text-[#111927] font-poppins">Individual / Proprietor</h3>
              </div>
              <ul className="space-y-2">
                {documentsIndividual.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partnership Firm */}
            <div className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#3c8e59]" />
                </div>
                <h3 className="text-lg font-bold text-[#111927] font-poppins">Partnership Firm / LLP</h3>
              </div>
              <ul className="space-y-2">
                {documentsPartnership.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center">
                  <Building className="w-5 h-5 text-[#3c8e59]" />
                </div>
                <h3 className="text-lg font-bold text-[#111927] font-poppins">Private / Public Company</h3>
              </div>
              <ul className="space-y-2">
                {documentsCompany.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                    <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* GSTIN Structure Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Understanding GSTIN Structure
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <p className="text-gray-600 leading-relaxed font-opensans mb-6">
              GSTIN is a unique 15-digit alphanumeric identification number assigned to every registered taxpayer. Here's how the GSTIN is structured:
            </p>
            <div className="bg-[#ebf4ee] rounded-xl p-6 mb-6">
              <div className="text-center font-mono text-2xl md:text-3xl font-bold text-[#3c8e59] tracking-wider">
                27AAPFU0939F1ZV
              </div>
              <div className="text-center text-sm text-gray-500 mt-2 font-opensans">
                Example GSTIN Format
              </div>
            </div>
            <div className="space-y-3">
              {gstinStructure.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 rounded-lg bg-gray-50">
                  <div className="w-16 h-8 rounded-lg bg-[#3c8e59] text-white flex items-center justify-center font-bold text-sm font-poppins flex-shrink-0">
                    {item.position}
                  </div>
                  <p className="text-sm text-gray-600 font-opensans">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            GST Registration Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative"
              >
                <div className="w-10 h-10 rounded-full bg-[#3c8e59] text-white flex items-center justify-center font-bold text-lg font-grotesk mb-4">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-[#111927] mb-2 font-poppins">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-opensans">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Penalties Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Penalties for Non-Compliance
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-gray-600 leading-relaxed font-opensans">
                Non-compliance with GST registration requirements can lead to severe penalties. It's essential to register on time and stay compliant with all GST regulations.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-bold text-[#111927] font-poppins">Offense</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-[#111927] font-poppins">Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  {penalties.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm text-gray-600 font-opensans">{item.offense}</td>
                      <td className="py-3 px-4 text-sm text-red-600 font-semibold font-opensans">{item.penalty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              Ready to Get Your GST Registration?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-opensans">
              Let our expert consultants handle your GST registration process. Quick, accurate, and hassle-free service with dedicated support throughout the process.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
            >
              Get Started @ 999/-
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

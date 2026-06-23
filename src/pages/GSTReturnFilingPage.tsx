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
  Calendar,
  Clock,
  FileText,
  Upload,
  Mail,
  CreditCard,
  ChevronDown,
  AlertTriangle,
  Building,
  Truck,
  Globe,
  Users,
  Laptop,
  ClipboardList,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';

interface GSTReturnFilingPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function GSTReturnFilingPage({ dict, setIsContactOpen }: GSTReturnFilingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const gstrTypes = [
    {
      name: 'GSTR-1',
      description: 'Details of all outward supplies of taxable goods and services to be filed by registered taxable supplier.',
      dueDate: '10th of the next month',
      icon: FileText,
    },
    {
      name: 'GSTR-2',
      description: 'Details of all inward supplies of taxable goods and services to be filed by registered taxable recipient.',
      dueDate: '15th of next month',
      icon: Receipt,
    },
    {
      name: 'GSTR-3',
      description: 'Auto-filled form based on outward and inward supplies with payment of tax furnished in GSTR-1 and 2.',
      dueDate: '20th of the next month',
      icon: ClipboardList,
    },
    {
      name: 'GSTR-3B',
      description: 'Summary return with details of taxable supply of goods and services. No invoice level information required.',
      dueDate: '20th of every month',
      icon: FileCheck,
    },
    {
      name: 'GSTR-4',
      description: 'Quarterly return containing details of outward supplies, tax payable and payment of tax for composition dealers.',
      dueDate: '18th of month succeeding quarter',
      icon: Calendar,
    },
    {
      name: 'GSTR-5',
      description: 'Return for non-resident taxable person containing outward supplies, imports, input tax, tax paid and remaining stock.',
      dueDate: '20th of the next month',
      icon: Globe,
    },
    {
      name: 'GSTR-6',
      description: 'Return for Input Service Distributor containing details of credit distributed.',
      dueDate: '13th of the next month',
      icon: Building,
    },
    {
      name: 'GSTR-7',
      description: 'Return containing details of tax deduction at source (TDS).',
      dueDate: '10th of the next month',
      icon: CreditCard,
    },
    {
      name: 'GSTR-8',
      description: 'Return for e-commerce operators containing details of supplies made through platform and tax collected.',
      dueDate: '10th of every month',
      icon: Laptop,
    },
    {
      name: 'GSTR-9',
      description: 'Annual return filed by registered taxable person summarizing all monthly/quarterly returns.',
      dueDate: '31st December of next FY',
      icon: Calendar,
    },
    {
      name: 'GSTR-10',
      description: 'Final return filed by person whose registration has been surrendered or cancelled.',
      dueDate: 'Within 3 months of cancellation',
      icon: FileText,
    },
    {
      name: 'GSTR-11',
      description: 'Details of inward supplies furnished by person having Unique Identification Number (UIN).',
      dueDate: '28th of following month',
      icon: Users,
    },
  ];

  const filingSteps = [
    { step: '1', title: 'Login to GST Portal', desc: 'Login with your user ID and password on the GST Portal for GST e-filing.' },
    { step: '2', title: 'Navigate to GSTR-3B', desc: 'Proceed with the GSTR-3B Return tab and insert your sales amount with tax & purchase amount with input credit.' },
    { step: '3', title: 'Create Challan', desc: 'Make the payment of GST by creating the challan through the portal.' },
    { step: '4', title: 'Submit Return', desc: 'Submit the GST e-filing and generate ARN number for your records.' },
  ];

  const procedureSteps = [
    {
      step: '1',
      title: 'Download Simplified Excel Template',
      desc: 'Every registered person has to upload invoices on GST portal. We provide a simplified excel template where you can maintain your invoice records easily.',
      icon: FileText,
    },
    {
      step: '2',
      title: 'Email to GST Experts',
      desc: 'Once you prepare your data, email it to our GST Experts who will review all entries and prepare GSTR-1, 2, 3 & maintain your GST compliance.',
      icon: Mail,
    },
    {
      step: '3',
      title: 'Filing of GSTR Returns',
      desc: 'Once your data is finalized, our GST Expert files your GSTR Returns with proper challan & generates the ARN Number.',
      icon: Upload,
    },
  ];

  const gstr3bDueDates = [
    { turnover: 'Less than Rs. 1.5 Cr', frequency: 'Monthly', dueDate: '20th of every month' },
    { turnover: 'More than Rs. 1.5 Cr', frequency: 'Monthly', dueDate: '20th of every month' },
  ];

  const gstr1DueDates = [
    { turnover: 'Less than Rs. 1.5 Cr', frequency: 'Quarterly', dueDate: '31st of month following quarter' },
    { turnover: 'More than Rs. 1.5 Cr', frequency: 'Monthly', dueDate: '10th of next month' },
  ];

  const currentDueDates = [
    { form: 'GSTR-3B', period: 'Monthly', dueDate: '20th of next month' },
    { form: 'GSTR-1 (Quarterly)', period: 'Apr-Jun', dueDate: '31st July' },
    { form: 'GSTR-1 (Monthly)', period: 'Monthly', dueDate: '10th of next month' },
    { form: 'GSTR-4', period: 'Apr-Jun', dueDate: '18th of following month' },
    { form: 'GSTR-5', period: 'Monthly', dueDate: '20th of next month' },
    { form: 'GSTR-5A', period: 'Monthly', dueDate: '20th of next month' },
    { form: 'GSTR-6', period: 'Monthly', dueDate: '13th of next month' },
    { form: 'GSTR-9', period: 'Annual', dueDate: '31st December' },
  ];

  const documentsRequired = [
    'Sales invoices of taxable goods and services',
    'Purchase invoices with GST details',
    'Bank statements for payment verification',
    'Previous return filing details',
    'Input tax credit details',
    'HSN/SAC codes for goods and services',
  ];

  const faqs = [
    {
      question: 'What is GST Return Filing?',
      answer: 'GST Return Filing is the process of submitting details of your business transactions (sales, purchases, tax collected, and tax paid) to the government through the GST portal. It is mandatory for all GST registered businesses.',
    },
    {
      question: 'What is GSTR-3B?',
      answer: 'GSTR-3B is a summary return that contains details of taxable supplies, input tax credit claimed, and tax payable. It needs to be filed monthly by the 20th of the following month.',
    },
    {
      question: 'What is the difference between GSTR-1 and GSTR-3B?',
      answer: 'GSTR-1 contains detailed invoice-wise information of all outward supplies (sales), while GSTR-3B is a summary return with consolidated figures of sales, purchases, and tax liability. Both need to be filed.',
    },
    {
      question: 'What happens if I miss the GST return filing date?',
      answer: 'Late filing attracts a late fee of Rs. 50 per day for CGST and Rs. 50 per day for SGST (Rs. 100 total per day), with a maximum of Rs. 5,000 each. Additionally, interest at 18% per annum is charged on the tax due.',
    },
    {
      question: 'Can I file GST returns myself?',
      answer: 'Yes, you can file GST returns yourself through the GST portal. However, it requires understanding of GST laws, proper record maintenance, and technical knowledge of the portal. Many businesses prefer to use professional assistance.',
    },
    {
      question: 'What is GSTR-2?',
      answer: 'GSTR-2 is an auto-populate return containing details of all inward supplies (purchases) and input tax credit. Currently, GSTR-2 filing is suspended, and input details are captured through GSTR-3B.',
    },
    {
      question: 'Do I need GST software to file returns?',
      answer: 'While GST software can simplify the process, it is not mandatory. You can use the GST portal\'s offline utility or simplified excel sheets. Software is recommended for businesses with high transaction volumes.',
    },
    {
      question: 'What is the due date for GSTR-1?',
      answer: 'For turnover less than Rs. 1.5 Cr, GSTR-1 is filed quarterly by 31st of the month following the quarter. For turnover above Rs. 1.5 Cr, it is filed monthly by the 10th of the next month.',
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
              GST Return Filing
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-opensans">
              Timely and accurate GST return filing with expert assistance. Stay compliant with all GST regulations and avoid penalties.
            </p>
            <div className="mt-8">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#3c8e59] hover:bg-[#2d6b43] text-white font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                File GST Return Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">

        {/* GST Return Dates Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            GST Return Filing Dates
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-6">
            <p className="text-gray-600 leading-relaxed font-opensans">
              Understanding GST Return Filing dates is crucial for compliance. There are primarily 3 types of filing dates based on the type of return:
            </p>

            {/* GSTR-3B */}
            <div className="bg-[#ebf4ee] rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#111927] mb-3 font-poppins flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#3c8e59] text-white flex items-center justify-center text-sm font-bold">A</span>
                GSTR-3B - Summary Return
              </h3>
              <p className="text-gray-600 leading-relaxed font-opensans mb-4">
                GSTR-3B is mainly a summary return where you provide sales and purchase data and make tax payment. The due date depends on your aggregate turnover:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gstr3bDueDates.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-[#3c8e59]/20">
                    <div className="text-sm font-semibold text-[#3c8e59] mb-1 font-poppins">{item.turnover}</div>
                    <div className="text-gray-600 text-sm font-opensans">Filed: {item.frequency}</div>
                    <div className="text-[#111927] font-bold mt-2 font-poppins">{item.dueDate}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* GSTR-1 */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#111927] mb-3 font-poppins flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">B</span>
                GSTR-1 - Sales Return
              </h3>
              <p className="text-gray-600 leading-relaxed font-opensans mb-4">
                GSTR-1 is also called the sales return where you provide all sales details including B2B dealer details with their GSTIN. All outward supply details are mentioned in this return.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gstr1DueDates.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="text-sm font-semibold text-blue-600 mb-1 font-poppins">{item.turnover}</div>
                    <div className="text-gray-600 text-sm font-opensans">Filed: {item.frequency}</div>
                    <div className="text-[#111927] font-bold mt-2 font-poppins">{item.dueDate}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* GSTR-2 */}
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#111927] mb-3 font-poppins flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold">C</span>
                GSTR-2 - Purchase Return
              </h3>
              <p className="text-gray-600 leading-relaxed font-opensans">
                GSTR-2 is an auto-populate return where all input tax credit details are mentioned. All purchase details are also mentioned in GSTR-2. Currently, GSTR-2 filing is suspended by the government.
              </p>
              <div className="mt-3 flex items-center gap-2 text-amber-700 text-sm font-opensans">
                <AlertTriangle className="w-4 h-4" />
                <span>Note: GSTR-2 is currently not required to be filed practically.</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to File GST Return */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            How to File GST Return
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <p className="text-gray-600 leading-relaxed font-opensans mb-6">
              GST Return Filing is an online procedure. If you have GST Software, it will be easy to file returns. The GST Portal also provides an offline excel utility which is easy to use. Below are the simplified steps:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filingSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="w-10 h-10 rounded-full bg-[#3c8e59] text-white flex items-center justify-center font-bold text-lg font-grotesk mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#111927] mb-2 font-poppins">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-opensans">{step.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 font-opensans">
                <strong>Note:</strong> In GSTR-1, you have to upload each invoice details individually.
              </p>
            </div>
          </div>
        </motion.section>

        {/* GST Return Filing Procedure */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Our GST Return Filing Procedure
          </h2>
          <p className="text-gray-600 leading-relaxed font-opensans mb-6">
            We have built a simplified process where you just need to maintain your invoice records. At the end of the month, you can file returns through our GST Experts assistance plan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {procedureSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#3c8e59] text-white flex items-center justify-center font-bold text-lg font-grotesk">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-[#3c8e59]" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#111927] mb-2 font-poppins">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-opensans">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Types of GST Return Forms */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Types of GST Return Forms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gstrTypes.map((form, idx) => {
              const IconComp = form.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ebf4ee] flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-[#3c8e59]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#3c8e59] font-poppins">{form.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-opensans mb-3">{form.description}</p>
                  <div className="flex items-center gap-2 text-xs text-[#111927] font-semibold font-poppins bg-[#ebf4ee] rounded-lg px-3 py-2">
                    <Clock className="w-3.5 h-3.5 text-[#3c8e59]" />
                    Due: {form.dueDate}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Important Due Dates */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Important GST Return Filing Dates
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-bold text-[#111927] font-poppins">Form</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-[#111927] font-poppins">Period</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-[#111927] font-poppins">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {currentDueDates.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm font-semibold text-[#3c8e59] font-poppins">{item.form}</td>
                      <td className="py-3 px-4 text-sm text-gray-600 font-opensans">{item.period}</td>
                      <td className="py-3 px-4 text-sm text-gray-600 font-opensans">{item.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* GST Payment Due Date */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            GST Payment Due Date
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-7 h-7 text-[#3c8e59]" />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed font-opensans">
                  You can make GST payment via online net banking, NEFT Transfer, or E-challan in banks. Generate the challan through your dashboard and make the GST Payment.
                </p>
                <p className="text-gray-600 leading-relaxed font-opensans">
                  You need an online internet banking account for GST Payments. During GSTR-3B filing, you must make the payment in advance on a monthly basis.
                </p>
                <div className="bg-[#ebf4ee] rounded-lg p-4 border border-[#3c8e59]/20">
                  <h4 className="font-semibold text-[#111927] mb-2 font-poppins">Payment Methods:</h4>
                  <ul className="space-y-1">
                    {['Online Net Banking', 'NEFT/RTGS Transfer', 'E-Challan at Bank', 'Over the Counter (OTC) at authorized banks'].map((method, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 font-opensans">
                        <CheckCircle className="w-4 h-4 text-[#3c8e59]" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About GST Software */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            All About GST Software
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                <Laptop className="w-7 h-7 text-[#3c8e59]" />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed font-opensans">
                  There are many GST software options in the market costing Rs. 5,000 to Rs. 10,000 or more per annum. However, this can be expensive for small businesses who may not have knowledge about GST Returns and Accounts.
                </p>
                <p className="text-gray-600 leading-relaxed font-opensans">
                  Small businesses often need to hire an accountant for data entry in addition to expensive software. Instead, you can use our GST Assistant Plan where you maintain your records in a simplified excel sheet, and we file the returns for you.
                </p>
                <div className="bg-gradient-to-r from-[#3c8e59] to-[#2d6b43] rounded-xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-2 font-poppins">Our GST Assistant Plan</h4>
                  <ul className="space-y-2">
                    {['Simplified Excel Templates', 'Expert Review of Data', 'Complete Return Filing', 'Compliance Management'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm font-opensans text-white/90">
                        <CheckCircle className="w-4 h-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
            Documents Required for GST Return Filing
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <p className="text-gray-600 leading-relaxed font-opensans mb-6">
              GST Return filing requires mainly the sales invoices of taxable services or goods. Follow these standard guidelines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {documentsRequired.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-4 h-4 text-[#3c8e59]" />
                  </div>
                  <span className="text-sm text-gray-600 font-opensans">{doc}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#ebf4ee] rounded-xl p-6 border border-[#3c8e59]/20">
              <h4 className="font-semibold text-[#111927] mb-3 font-poppins">Standard Guidelines:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                  <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                  Prepare each invoice as per the GST Law
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                  <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                  Maintain records online or offline as bookkeeping
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 font-opensans">
                  <CheckCircle className="w-4 h-4 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                  Try to maintain records in your GST Filing software or use our simplified excel sheets
                </li>
              </ul>
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
              Need Help with GST Return Filing?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-opensans">
              Let our expert GST consultants handle your return filing. Timely, accurate, and hassle-free service with dedicated support throughout the process.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
            >
              Get Expert Assistance
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

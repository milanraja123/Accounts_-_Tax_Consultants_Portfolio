/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  FileText,
  CheckCircle,
  Calendar,
  CreditCard,
  FileCheck,
  Users,
  Building,
  Briefcase,
  ClipboardList,
  BadgeCheck,
  Plane,
  Home,
  TrendingUp,
  Shield,
  Receipt,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';

interface IncomeTaxFilingPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function IncomeTaxFilingPage({ dict, setIsContactOpen }: IncomeTaxFilingPageProps) {
  const itrForms = [
    {
      name: 'ITR 1',
      description: 'The form ITR 1 is for resident individuals who have total income upto Rs. 50 lakh. You will have to provide break up of your salary and house property.',
      icon: FileText,
    },
    {
      name: 'ITR 2',
      description: 'The form ITR 2 is applicable for individuals and HUFs not having income from profits and gains of business or profession.',
      icon: Users,
    },
    {
      name: 'ITR 3',
      description: 'The Form ITR 3 is for individuals and HUFs having income from profits and gains of business or profession.',
      icon: Briefcase,
    },
    {
      name: 'ITR 4',
      description: 'The Form ITR 4 is for presumptive income from business and profession.',
      icon: TrendingUp,
    },
    {
      name: 'ITR 5',
      description: 'The Form ITR 5 is for persons other than individual HUF company i.e. Firms, association of person and body of individuals.',
      icon: Building,
    },
    {
      name: 'ITR 6',
      description: 'The Form ITR 6 is for companies other than companies claiming exemption under Section 11.',
      icon: Building,
    },
    {
      name: 'ITR 7',
      description: 'The Form ITR 7 for person including companies which are required to furnish return under Section 139(4A) or 139(4B) or 139(4C) or 139(4D) or 139(4E) or 139(4F) of the Income Tax Act.',
      icon: ClipboardList,
    },
  ];

  const benefits = [
    { title: 'Loan', desc: 'An individual who has filed INCOME TAX RETURN can help him in availing vehicle or home loans as many banks asks for a copy of Income tax Returns.', icon: Home },
    { title: 'To claim refund', desc: 'If any refund claim is due to you from the income tax department you will have to file return in order to receive the refund claim.', icon: CreditCard },
    { title: 'To carry forward losses', desc: 'If you are incurring any capital losses, you cannot carry forward the same if you have not filed an income tax return.', icon: TrendingUp },
    { title: 'Visa processing', desc: 'If you are planning to travel overseas, there might be chances that at the time of visa interview you are required to furnish your Income tax return receipt of last years.', icon: Plane },
    { title: 'Buying high life insurance policy', desc: 'If you are planning to buy any life insurance policy like of Rs. 50 lakh or Rs. 1 Crore, then the life insurance company like LIC might ask for your Income Tax Return receipts of previous years.', icon: Shield },
    { title: 'Government tender', desc: 'If you are planning to obtain any government tender in future, you should have your income tax returns receipts of the last few years. This is required to support your financial status.', icon: BadgeCheck },
  ];

  const documents = [
    'PAN Card Registration',
    'Aadhar Number',
    'Bank Account details',
    'Form 16',
    'Form 16A',
    'Form 26AS',
    'Investment details',
    'Rent receipts for claiming house rent allowance',
    'Bank Passbook',
    'Fixed deposit statement',
    'Proof of investment',
    'Medical expenses receipts, if any',
    'Proof of home loan interest, if any',
    'Share transaction statement, if any',
    'GST Registration Number Details if any',
  ];

  const mandatoryCases = [
    'If your taxable income is more than 2.5 lakh Rupees in a year',
    'If you want to claim any TDS Refund',
    'If you want to take the benefits of carry forward of the losses',
    'If foreign travel expenses is more than 2 lakh rupees in a year',
    'If electricity bill expenses more than 1 lakh rupees in a year',
    'If total business sales or turnover more than 60 lakh rupees in a year',
    'If you have TDS more than 25000 rupees in a year',
  ];

  const pricingPlans = [
    { name: 'ITR-1', desc: 'Salary + Other Income', price: '1499' },
    { name: 'ITR-4', desc: 'Business + Other Income', price: '1499' },
    { name: 'ITR-2', desc: 'Salary + Stock Market + Other Income', price: '2999' },
    { name: 'ITR-3', desc: 'Salary + Stocks + F&O + Intraday + Other Income', price: '3499*' },
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
              Tax Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 font-grotesk">
              Income Tax Filing
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-opensans">
              File your Income Tax Returns hassle-free with our expert tax consultants. Quick, accurate, and compliant filing services.
            </p>
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
            Introduction on Income Tax
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              In India, there are two types of taxes one is direct tax which is directly levied upon the income of the individual and another is indirect tax which is levied indirectly upon an individual. Example of direct tax is income tax and of indirect tax is Goods and Services Tax, service tax etc.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              Every individual who receives income in India is subject to income tax under the Income Tax Act, 1961. Under Income Tax Act there can be income from 5 different heads which are Income from salary, house property, capital gains, business and profession and other sources. Income of individuals, Hindu undivided family, association of person, body of individuals firms and companies are taxed under the Income tax act.
            </p>
          </div>
        </motion.section>

        {/* What is ITR Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is Income Tax Return
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              Income Tax Return is a form in which the taxpayer whether it be an individual or firm or Hindu undivided family, discloses details of its income, claims exemptions and deductions which are applicable on it and the amount of tax payable on such income. The Income Tax Return also reflects the amount of taxes paid by the taxpayer.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              Income tax return is form in which the taxpayer files data and information regarding his income and tax payable thereon at the end of every financial year.
            </p>
          </div>
        </motion.section>

        {/* E-Filing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is Income Tax eFiling
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              Income Tax can be filed by the two way i.e is the Online Method and another offline Method. Now as per the Government Instructions all the income tax return will be filed only through ITR eFiling Method. Offline Method is not available.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans font-semibold">
              ITR Online eFiling is Mandatory From 1st April 2022 in the following cases:
            </p>
            <ul className="space-y-2 ml-4">
              {mandatoryCases.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600 font-opensans">
                  <CheckCircle className="w-5 h-5 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
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
            Income Tax Return Filing Fee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ebf4ee] flex items-center justify-center mx-auto mb-4">
                  <Receipt className="w-6 h-6 text-[#3c8e59]" />
                </div>
                <h3 className="text-lg font-bold text-[#111927] mb-1 font-poppins">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-4 font-opensans">{plan.desc}</p>
                <div className="text-2xl font-extrabold text-[#3c8e59] font-grotesk">
                  {plan.price}<span className="text-sm font-normal text-gray-500">/- INR</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="bg-[#ebf4ee] border border-[#3c8e59]/20 rounded-2xl p-6 mt-6">
            <p className="text-sm text-gray-700 font-opensans mb-2">
              <strong>#1</strong> All Plans above Include Dedicated ITR Filing by Experienced Tax Consultant.
            </p>
            <p className="text-sm text-gray-700 font-opensans mb-4">
              <strong>#2</strong> Income Tax Final Intimation & Refund Assistance
            </p>
            <p className="text-xs text-gray-500 font-opensans">
              *not included Tax Audit or Books of Accounts Preparations for FNO.
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

        {/* ITR Forms Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Type of Income Tax Return Form
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itrForms.map((form, idx) => {
              const IconComp = form.icon;
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
                    <h3 className="text-lg font-bold text-[#111927] mb-2 font-poppins">{form.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-opensans">{form.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Due Date Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Income Tax E-filing Due Date
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                <Calendar className="w-7 h-7 text-[#3c8e59]" />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed font-opensans">
                  The due date of E-filling of income tax returns depends upon the taxpayer. If the taxpayer is individual, body of individuals, association of persons, Hindu undivided family then the due date for filling income tax return is <strong className="text-[#3c8e59]">July 31</strong> every financial year.
                </p>
                <p className="text-gray-600 leading-relaxed font-opensans">
                  However, for business and companies which require audit the date for filling income tax return is <strong className="text-[#3c8e59]">September 30</strong> every financial year.
                </p>
                <p className="text-gray-600 leading-relaxed font-opensans">
                  For any person who is required to furnish report in form No. 32CEB under section 92E the date for filling income tax return is <strong className="text-[#3c8e59]">November 30</strong> every financial year.
                </p>
                <p className="text-gray-600 leading-relaxed font-opensans text-sm bg-amber-50 border border-amber-200 rounded-lg p-3">
                  If the taxpayer does not file the income tax return in time, then he will have to pay the late fee along with the tax payable.
                </p>
              </div>
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
            Benefits of Income Tax Return Filing
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
                  <h3 className="text-lg font-bold text-[#111927] mb-2 font-poppins">{benefit.title}</h3>
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
            Documents Required for Income Tax eFiling
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-4 h-4 text-[#3c8e59]" />
                  </div>
                  <span className="text-sm text-gray-600 font-opensans">{doc}</span>
                </div>
              ))}
            </div>
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
              Ready to File Your Income Tax Return?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-opensans">
              Let our expert tax consultants handle your ITR filing. Quick, accurate, and hassle-free service with dedicated support.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
            >
              Get Started Now
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

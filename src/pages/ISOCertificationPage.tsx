/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  Award,
  CheckCircle,
  FileText,
  Shield,
  Globe,
  Building2,
  Users,
  Clock,
  BadgeCheck,
  ClipboardList,
  Briefcase,
  Factory,
  Recycle,
  Plane,
  FileCheck,
} from 'lucide-react';
import { TranslationDictionary } from '../types';
import Navbar from '../components/layout/Navbar';

interface ISOCertificationPageProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

export default function ISOCertificationPage({ dict, setIsContactOpen }: ISOCertificationPageProps) {
  const isoTypes = [
    { name: 'ISO 9001', desc: 'Quality management system which provides confidence in your product', icon: BadgeCheck },
    { name: 'ISO 13485', desc: 'Sector-specific quality standard for medical devices', icon: Shield },
    { name: 'ISO 14001', desc: 'Environmental management system certification', icon: Recycle },
    { name: 'OHSAS 18001', desc: 'Occupational health and safety management system', icon: Users },
    { name: 'AS9100', desc: 'Quality management system standards for the aerospace industry', icon: Plane },
    { name: 'ISO ITAR', desc: 'For manufacturing, sales and distribution of technology', icon: Factory },
    { name: 'Lean Manufacturing', desc: 'For maximization of output while minimizing the waste', icon: Briefcase },
    { name: 'R2 Certification', desc: 'For handling electronic waste responsibly', icon: Recycle },
  ];

  const certificationBodies = [
    'Bureau Veritas',
    'BSI',
    'Intertek',
    'TuvNord',
  ];

  const bodyAttributes = [
    'Should have a good reputation in the market',
    'Should be accredited i.e. licensed to provide you ISO Certification',
    'Must be specialized in your area of work and ISO Certification',
    'Should have more experience',
    'Provides integrated audits',
    'Is flexible towards your organization and to work with your organization',
    'Cost must be reasonable',
  ];

  const certificationProcess = [
    'Select ISO standard in which you want a certificate and an ISO certification body for certification',
    'Make an application to the ISO certification body in its prescribed format containing the rights and duties of the owner of the organization and liabilities issues, access rights and confidentiality clauses',
    'The ISO certification body will review your application and documents provided in the application. The ISO certification body will review the quality manuals and documents of your organization',
    'The ISO certification body identifies the major weakness/faults in the system and then will provide a cure period to the organization to rectify such faults and weakness',
    'The Organization has to prepare an action plan for curing the faults mentioned by the ISO Certification body. It shall contain a list of actions to be taken for meeting the standards',
    'Then the ISO certification body will carry an initial certification audit to check the changes made and analyze the non-compliances in the organization',
    'In case all the non-compliance are fulfilled then the ISO audit report will be created and you will be granted ISO certification',
  ];

  const costFactors = [
    'Number of employees',
    'Implemented ISO standard',
    'Number of processes involved',
    'Level of risk in the nature of work',
    'The number of working shifts etc.',
  ];

  const timelines = [
    { size: 'Small & Micro Organization', duration: '6-8 months' },
    { size: 'Medium Enterprise', duration: '8-12 months' },
    { size: 'Large Organization', duration: '12-15 months' },
  ];

  const documentsRequired = [
    { category: 'Scope of the QMS', mandatory: 'Monitoring and measuring equipment calibration records', nonMandatory: 'Procedure for addressing risks and opportunities' },
    { category: 'QMS Policy and Objectives', mandatory: 'Design and development outputs review', nonMandatory: 'Procedure for design and development' },
    { category: 'Criteria for Evaluation', mandatory: 'Design and development inputs', nonMandatory: 'Sale procedure' },
    { category: 'Selection of Suppliers', mandatory: 'Records of design and development controls and outputs', nonMandatory: '-' },
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
              Business Certification
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 font-grotesk">
              ISO Certification in India
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-opensans mb-8">
              Apply for ISO Certification and Registration in India with Lowest Cost. Get certified to prove your organization's quality standards.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#3c8e59] text-white px-6 py-3 rounded-full font-bold text-lg font-grotesk">
              Start Just at <span className="text-2xl">1499/-</span> INR
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
            Introduction about ISO Certification in India
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              In today's competitive world, you have to provide people with better quality services and to maintain a good image in the market. Even if your organization wants to sell and reach the international market, you have to prove your organization worthiness and your products in the market.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              ISO Certification in India helps in that. ISO Certification certifies that your goods/services, as well as your organization, provide quality and other standards as per the international standards.
            </p>
          </div>
        </motion.section>

        {/* What is ISO Registration */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is ISO Registration
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                <Globe className="w-7 h-7 text-[#3c8e59]" />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed font-opensans">
                  International Standard Organization for Standards (ISO) is an international entity which develops ISO standards in furtherance of international trade. It was formed in 1947 as an organization to promote international industrial and commercial standards.
                </p>
                <p className="text-gray-600 leading-relaxed font-opensans">
                  Around <strong className="text-[#3c8e59]">162 countries</strong> are members of ISO and has been laying down standards for international trade and facilitates world trade by providing a common standards for all the countries.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What is ISO Certification */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is ISO Certification in India
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-4">
            <p className="text-gray-600 leading-relaxed font-opensans">
              ISO certification ensures that the products or services provided are meeting standards and quality. ISO is an independent and nongovernmental organization providing standards for quality, efficiency and safety of goods and services of an organization.
            </p>
            <p className="text-gray-600 leading-relaxed font-opensans">
              The ISO certificate certifies the organization's quality management systems. There are various objectives of ISO:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {['Increase the quality and productivity of the organization', 'Making organization hub for profitable opportunities', 'Customer and employee satisfaction', 'Best quality products and services'].map((obj, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600 font-opensans">
                  <CheckCircle className="w-5 h-5 text-[#3c8e59] flex-shrink-0" />
                  <span>{obj}</span>
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
            ISO Registration Fees
          </h2>
          <div className="bg-gradient-to-br from-[#3c8e59] to-[#2d6b43] rounded-2xl p-8 md:p-10 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-extrabold font-grotesk mb-2">
                  1499/- <span className="text-xl font-normal">INR</span>
                </div>
                <p className="text-white/80 text-sm font-opensans">(All Inclusive)</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm font-opensans">#1 ISO Registration by Professional Legal Expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm font-opensans">#2 ISO Registration application Preparation and Drafting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm font-opensans">#3 Submission of the ISO Registration with the Govt with proper documents</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-[#3c8e59] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-poppins cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        </motion.section>

        {/* Types of ISO Certification */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Type of ISO Certification in India
          </h2>
          <p className="text-gray-600 mb-6 font-opensans">
            There are various types of ISO certification for your goods and services. You have to select certifications on the basis of your business and the goods and services you provide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isoTypes.map((iso, idx) => {
              const IconComp = iso.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-6 h-6 text-[#3c8e59]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111927] mb-1 font-poppins">{iso.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-opensans">{iso.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ISO Certification Body */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            ISO Certification Body
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] space-y-6">
            <p className="text-gray-600 leading-relaxed font-opensans">
              It must be kept in mind that ISO itself does not provide certificates for quality however, parties can grant you certification. There are various ISO certification bodies in India:
            </p>
            <div className="flex flex-wrap gap-3">
              {certificationBodies.map((body, idx) => (
                <span key={idx} className="px-4 py-2 bg-[#ebf4ee] text-[#3c8e59] rounded-full text-sm font-semibold font-poppins">
                  {body}
                </span>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-6">
              <h4 className="text-lg font-bold text-[#111927] mb-4 font-poppins">Attributes for selecting proper ISO Certification Body:</h4>
              <ul className="space-y-2">
                {bodyAttributes.map((attr, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 font-opensans">
                    <CheckCircle className="w-5 h-5 text-[#3c8e59] flex-shrink-0 mt-0.5" />
                    <span>{attr}</span>
                  </li>
                ))}
              </ul>
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
            Documents Required for ISO Certification
          </h2>
          <p className="text-gray-600 mb-6 font-opensans">
            The documents required for ISO Certification depends upon the type of ISO Certification you are obtaining. Let's take the example of ISO 9001 (Quality Management System):
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-emerald-500/5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden">
              <thead>
                <tr className="bg-[#ebf4ee]">
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#111927] font-poppins">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#111927] font-poppins">Mandatory Records</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#111927] font-poppins">Non-Mandatory Documents</th>
                </tr>
              </thead>
              <tbody>
                {documentsRequired.map((doc, idx) => (
                  <tr key={idx} className="border-t border-gray-100">
                    <td className="px-6 py-4 text-sm text-[#111927] font-semibold font-poppins">{doc.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-opensans">{doc.mandatory}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-opensans">{doc.nonMandatory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* ISO Certification Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            ISO Certification Process
          </h2>
          <div className="space-y-4">
            {certificationProcess.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#3c8e59] flex items-center justify-center flex-shrink-0 text-white font-bold font-grotesk">
                  {idx + 1}
                </div>
                <p className="text-gray-600 leading-relaxed font-opensans pt-2">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ISO Certification Cost */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            ISO Certification Cost Factors
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <p className="text-gray-600 mb-6 font-opensans">
              While applying for ISO certification, the organization always has to check the cost which is involved. The cost varies from organization to organization based on:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {costFactors.map((factor, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-[#ebf4ee] rounded-xl">
                  <FileCheck className="w-5 h-5 text-[#3c8e59] flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-opensans">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            Timeline in ISO Registration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timelines.map((timeline, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#ebf4ee] flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-[#3c8e59]" />
                </div>
                <h3 className="text-lg font-bold text-[#111927] mb-2 font-poppins">{timeline.size}</h3>
                <p className="text-2xl font-extrabold text-[#3c8e59] font-grotesk">{timeline.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ISO Certification Consultant */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111927] mb-6 font-grotesk">
            What is ISO Certification Consultant?
          </h2>
          <div className="bg-white border border-emerald-500/5 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#ebf4ee] flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-[#3c8e59]" />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed font-opensans">
                  Due to more and more competition, organizations are also focusing on the quality of their product and making a good public image. ISO certification helps to certify the image and quality of your goods and services as well as your organization.
                </p>
                <p className="text-gray-600 leading-relaxed font-opensans">
                  Many people who are expert in the ISO standards, who are experienced are becoming consultants. Such ISO Certification Consultants advise and makes the organizations understand the process as well as your organization and tell you the best way to implement ISO certification and its requirements.
                </p>
              </div>
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
            <Award className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 font-grotesk">
              Ready to Get ISO Certified?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-opensans">
              Get your ISO certification with our expert consultants. We provide end-to-end assistance for ISO registration at the lowest cost.
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

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Briefcase,
  BadgeCheck,
  Receipt,
  FileCheck,
  ShieldCheck,
} from 'lucide-react';
import { TranslationDictionary } from '../../types';

interface HeroNavbarProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

// Sub-navigation dropdown definitions
const navDropdowns: Record<string, Array<{ label: string; desc: string; icon: any }>> = {
  'Business Registration': [
    { label: 'Private Limited Company', desc: 'Register your Pvt Ltd company.', icon: Building2 },
    { label: 'Sole Proprietorship', desc: 'Start as a sole trader easily.', icon: Briefcase },
    { label: 'Trademark Registration', desc: 'Protect your brand identity.', icon: BadgeCheck },
    { label: 'ISO Certification', desc: 'Get ISO certified for your business.', icon: ShieldCheck },
    { label: 'MSME Registration', desc: 'Register under MSME for benefits.', icon: Building2 },
    { label: 'FSSAI Registration', desc: 'Food license for food businesses.', icon: ShieldCheck },
  ],
  'GST Services': [
    { label: 'GST Registration', desc: 'Get your GST number quickly.', icon: Receipt },
    { label: 'GST Return Filing', desc: 'Timely GST return submissions.', icon: FileCheck },
  ],
};

const navItems = [
  'Home',
  'Tax Filing',
  'Business Registration',
  'GST Services',
  'About',
];

// Route mapping for nav items and dropdown items
const serviceRoutes: Record<string, string> = {
  'Home': '/',
  'Tax Filing': '/income-tax-filing',
  'About': '/#about',
  'Contact Us': '/contact',
  'ISO Certification': '/iso-certification',
  'GST Registration': '/gst-registration',
  'GST Return Filing': '/gst-return-filing',
  'MSME Registration': '/msme-registration',
  'Private Limited Company': '/private-limited-company-registration',
  'Sole Proprietorship': '/proprietorship-firm-registration',
  'FSSAI Registration': '/fssai-registration',
  'Trademark Registration': '/trademark-registration',
};

export default function HeroNavbar({ dict, setIsContactOpen }: HeroNavbarProps) {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleServiceClick = (label: string) => {
    setActiveDropdown(null);
    if (serviceRoutes[label]) {
      navigate(serviceRoutes[label]);
    } else if (label === 'Live Chat') {
      setIsContactOpen(true);
    }
  };

  return (
    <>
      {/* Header Navigation */}
      <header className="relative z-30 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-24 flex items-center justify-between">

          {/* Logo Brand Group */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            {/* Custom SVG Finance House Icon */}
            <svg
              className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <circle cx="12" cy="13" r="2.5" />
              <path d="M8.5 18.5a3.5 3.5 0 0 1 7 0" />
            </svg>
            <span className="text-2xl font-bold tracking-tight text-white select-none font-grotesk">
              Taaxwala
            </span>
          </motion.div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const hasDropdown = !!navDropdowns[item];
              const isSelected = activeDropdown === item;
              const hasRoute = !!serviceRoutes[item];

              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  {hasRoute ? (
                    <Link
                      to={serviceRoutes[item]}
                      onClick={() => setActiveLink(item)}
                      className={`relative flex items-center py-2 px-3 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer font-poppins ${
                        activeLink === item
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item}
                      {activeLink === item && (
                        <motion.div
                          layoutId="heroActiveUnderline"
                          className="absolute bottom-0 left-3 right-3 h-[2px] bg-white"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setActiveLink(item)}
                      className={`relative flex items-center py-2 px-3 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer font-poppins ${
                        activeLink === item
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item}
                      {hasDropdown && (
                        <ChevronDown
                          className={`h-3.5 w-3.5 ml-1 text-white/50 transition-transform duration-200 ${
                            isSelected ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                      {activeLink === item && (
                        <motion.div
                          layoutId="heroActiveUnderline"
                          className="absolute bottom-0 left-3 right-3 h-[2px] bg-white"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-80 bg-gradient-to-br from-white/10 via-white/5 to-purple-900/20 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-4 z-50"
                        style={{
                          backdropFilter: 'blur(20px) saturate(180%)',
                          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        }}
                      >
                        {/* Dropdown Header */}
                        <div className="px-3 pb-3 mb-3 border-b border-white/10 flex items-center justify-between">
                          <span className="text-xs font-bold text-white uppercase tracking-wider font-grotesk drop-shadow-sm">
                            {item}
                          </span>
                          <span className="text-[10px] font-semibold text-purple-300 bg-purple-400/20 backdrop-blur-sm px-2.5 py-1 rounded-full font-poppins border border-purple-400/30">
                            {navDropdowns[item].length} options
                          </span>
                        </div>

                        <div className="space-y-1 max-h-[320px] overflow-y-auto scrollbar-thin">
                          {navDropdowns[item].map((sub, sidx) => {
                            const IconComp = sub.icon;
                            return (
                              <div
                                key={sidx}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer group/item border border-transparent hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10"
                                onClick={() => {
                                  setActiveLink(item);
                                  handleServiceClick(sub.label);
                                }}
                              >
                                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm text-white/90 group-hover/item:bg-gradient-to-br group-hover/item:from-purple-500/40 group-hover/item:to-purple-600/30 group-hover/item:text-white transition-all duration-200 flex-shrink-0 border border-white/5 group-hover/item:border-purple-400/30 group-hover/item:shadow-lg group-hover/item:shadow-purple-500/20">
                                  <IconComp className="h-4 w-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-[13px] font-semibold text-white/95 group-hover/item:text-white font-poppins drop-shadow-sm">
                                    {sub.label}
                                  </div>
                                  <div className="text-[11px] text-white/50 leading-relaxed mt-0.5 font-opensans group-hover/item:text-white/60">
                                    {sub.desc}
                                  </div>
                                </div>
                                <ChevronDown className="h-3.5 w-3.5 text-white/30 -rotate-90 group-hover/item:text-purple-300 group-hover/item:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1.5" />
                              </div>
                            );
                          })}
                        </div>

                        {/* View All Link */}
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <button
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveLink(item);
                              setIsContactOpen(true);
                            }}
                            className="w-full text-center text-xs font-bold text-white bg-gradient-to-r from-purple-600/80 to-purple-500/80 hover:from-purple-500/90 hover:to-purple-400/90 backdrop-blur-sm py-2.5 rounded-xl transition-all duration-200 font-poppins border border-purple-400/30 hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20"
                          >
                            Explore All {item} →
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Contact Button (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <Link
              to="/contact"
              className="bg-[#3D306F] border border-purple-500/30 hover:border-purple-400/50 text-white px-7 py-3 tracking-wider text-xs font-bold uppercase transition duration-150 cursor-pointer hover:bg-[#483a80] active:scale-95 leading-none font-poppins inline-block"
            >
              {dict.contactUs}
            </Link>
          </motion.div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-white/80 p-2 focus:outline-none transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 left-0 w-full bg-[#0a0715]/95 border-b border-white/5 backdrop-blur-md z-40 lg:hidden flex flex-col py-6 px-6 space-y-2 max-h-[70vh] overflow-y-auto"
          >
            {navItems.map((item) => {
              const hasDropdown = !!navDropdowns[item];
              const hasRoute = !!serviceRoutes[item];

              return (
                <div key={item} className="border-b border-white/5 last:border-b-0">
                  {hasRoute ? (
                    <Link
                      to={serviceRoutes[item]}
                      onClick={() => {
                        setActiveLink(item);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between w-full text-left text-base font-semibold py-3 tracking-wide transition-all duration-150 cursor-pointer font-poppins ${
                        activeLink === item
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <span>{item}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        if (hasDropdown) {
                          setActiveDropdown(activeDropdown === item ? null : item);
                        } else {
                          setActiveLink(item);
                          setMobileMenuOpen(false);
                        }
                      }}
                      className={`flex items-center justify-between w-full text-left text-base font-semibold py-3 tracking-wide transition-all duration-150 cursor-pointer font-poppins ${
                        activeLink === item
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <span>{item}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`h-4 w-4 text-white/40 transition-transform duration-200 ${
                            activeDropdown === item ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>
                  )}

                  {/* Mobile Sub-menu */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === item && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-3 pb-3 space-y-1"
                      >
                        {navDropdowns[item].map((sub, sidx) => {
                          const IconComp = sub.icon;
                          return (
                            <button
                              key={sidx}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveLink(item);
                                handleServiceClick(sub.label);
                              }}
                              className="flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                            >
                              <div className="p-1.5 rounded-lg bg-white/10">
                                <IconComp className="h-4 w-4 text-white/70" />
                              </div>
                              <span className="text-sm font-medium text-white/80">{sub.label}</span>
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-purple-600 text-white py-3 mt-4 tracking-wider text-xs font-bold uppercase hover:bg-purple-500 transition duration-150 cursor-pointer text-center rounded-lg font-poppins block"
            >
              {dict.contactUs}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

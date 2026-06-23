/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
  Users,
} from 'lucide-react';
import { TranslationDictionary } from '../../types';

interface NavbarProps {
  dict: TranslationDictionary;
  variant?: 'light' | 'dark';
}

// Sub-navigation dropdown definitions
const navDropdowns: Record<string, Array<{ label: string; desc: string; icon: any; subItems?: Array<{ label: string; desc: string; icon: any }> }>> = {
  'Popular Services': [
    { label: 'Private Limited Company', desc: 'Register your Pvt Ltd company.', icon: Building2 },
    { label: 'Sole Proprietorship', desc: 'Start as a sole trader easily.', icon: Briefcase },
    { label: 'Trademark Registration', desc: 'Protect your brand identity.', icon: BadgeCheck },
    { label: 'ISO Certification', desc: 'Get ISO certified for your business.', icon: ShieldCheck },
    { label: 'MSME Registration', desc: 'Register under MSME for benefits.', icon: Building2 },
    { label: 'FSSAI Registration', desc: 'Food license for food businesses.', icon: ShieldCheck },
  ],
  'Business Registration': [
    {
      label: 'Firm Registration',
      desc: 'Register your firm easily.',
      icon: Briefcase,
      subItems: [
        { label: 'Proprietorship Registration', desc: 'Start as a sole trader.', icon: Briefcase },
        { label: 'Partnership Firm', desc: 'Register partnership firms.', icon: Users },
      ]
    },
    {
      label: 'Company Registration',
      desc: 'Register your company.',
      icon: Building2,
      subItems: [
        { label: 'Private Limited Company', desc: 'Register Pvt Ltd company.', icon: Building2 },
        { label: 'LLP Registration', desc: 'Limited Liability Partnership.', icon: Users },
        { label: 'One Person Company', desc: 'OPC for single entrepreneur.', icon: Briefcase },
      ]
    },
  ],
  'GST Services': [
    { label: 'GST Registration', desc: 'Get your GST number quickly.', icon: Receipt },
    { label: 'GST Return Filing', desc: 'Timely GST return submissions.', icon: FileCheck },
  ],
};

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Tax Filing', path: '/income-tax-filing' },
  { label: 'Popular Services', path: null },
  { label: 'Business Registration', path: null },
  { label: 'GST Services', path: null },
  { label: 'About', path: '/#about' },
];

// Route mapping for dropdown items
const serviceRoutes: Record<string, string> = {
  'Tax Filing': '/income-tax-filing',
  'Contact Us': '/contact',
  'ISO Certification': '/iso-certification',
  'GST Registration': '/gst-registration',
  'GST Return Filing': '/gst-return-filing',
  'MSME Registration': '/msme-registration',
  'Private Limited Company': '/private-limited-company-registration',
  'Sole Proprietorship': '/proprietorship-firm-registration',
  'Proprietorship Registration': '/proprietorship-firm-registration',
  'Partnership Firm': '/partnership-firm-registration',
  'LLP Registration': '/llp-registration',
  'One Person Company': '/one-person-company-registration',
  'FSSAI Registration': '/fssai-registration',
  'Trademark Registration': '/trademark-registration',
};

export default function Navbar({ dict, variant = 'light' }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);
  const [expandedMobileSubItem, setExpandedMobileSubItem] = useState<string | null>(null);

  const isLight = variant === 'light';

  const handleServiceClick = (label: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (serviceRoutes[label]) {
      navigate(serviceRoutes[label]);
    }
  };

  const isActivePath = (path: string | null) => {
    if (!path) return false;
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Header Navigation */}
      <header className={`relative z-30 w-full border-b ${isLight ? 'border-gray-200 bg-white' : 'border-white/10 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">

          {/* Logo Brand Group */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer group">
            <svg
              className={`w-8 h-8 transition-transform duration-300 group-hover:scale-105 ${isLight ? 'text-[#3c8e59]' : 'text-white'}`}
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
            <span className={`text-2xl font-bold tracking-tight select-none font-grotesk ${isLight ? 'text-[#111927]' : 'text-white'}`}>
              Taaxwala
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const hasDropdown = !!navDropdowns[item.label];

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-150 cursor-pointer font-poppins rounded-lg ${
                        isActivePath(item.path)
                          ? isLight ? 'text-[#3c8e59]' : 'text-white'
                          : isLight ? 'text-gray-600 hover:text-[#3c8e59] hover:bg-gray-50' : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-150 cursor-pointer font-poppins rounded-lg ${
                        activeDropdown === item.label
                          ? isLight ? 'text-[#3c8e59] bg-gray-50' : 'text-white bg-white/5'
                          : isLight ? 'text-gray-600 hover:text-[#3c8e59] hover:bg-gray-50' : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute left-0 top-full mt-2 w-80 rounded-2xl shadow-xl p-4 z-50 ${
                          isLight
                            ? 'bg-white border border-gray-200'
                            : 'bg-gradient-to-br from-white/10 via-white/5 to-purple-900/20 backdrop-blur-2xl border border-white/20'
                        }`}
                      >
                        {/* Dropdown Header */}
                        <div className={`flex items-center gap-2 px-3 py-2 mb-2 rounded-lg ${isLight ? 'bg-[#ebf4ee]' : 'bg-white/10'}`}>
                          <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-[#3c8e59]' : 'text-white/90'} font-poppins`}>
                            {item.label}
                          </span>
                        </div>

                        <div className="space-y-1 max-h-[320px] overflow-y-auto scrollbar-thin">
                          {navDropdowns[item.label].map((sub, sidx) => {
                            const IconComp = sub.icon;
                            const hasSubItems = sub.subItems && sub.subItems.length > 0;
                            const isSubExpanded = hoveredSubItem === sub.label;
                            return (
                              <div
                                key={sidx}
                                onMouseEnter={() => hasSubItems && setHoveredSubItem(sub.label)}
                                onMouseLeave={() => setHoveredSubItem(null)}
                              >
                                <div
                                  className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer group/item border border-transparent ${
                                    isLight
                                      ? 'hover:bg-[#ebf4ee] hover:border-[#3c8e59]/20'
                                      : 'hover:bg-white/10 hover:border-white/20'
                                  } ${isSubExpanded && isLight ? 'bg-[#ebf4ee]' : ''} ${isSubExpanded && !isLight ? 'bg-white/10' : ''}`}
                                  onClick={() => !hasSubItems && handleServiceClick(sub.label)}
                                >
                                  <div className={`p-2.5 rounded-xl flex-shrink-0 transition-all duration-200 ${
                                    isLight
                                      ? 'bg-[#ebf4ee] text-[#3c8e59] group-hover/item:bg-[#3c8e59] group-hover/item:text-white'
                                      : 'bg-white/10 text-white/90 group-hover/item:bg-purple-500/40 group-hover/item:text-white'
                                  }`}>
                                    <IconComp className="h-4 w-4" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className={`text-[13px] font-semibold font-poppins flex items-center justify-between ${isLight ? 'text-[#111927]' : 'text-white/95'}`}>
                                      {sub.label}
                                      {hasSubItems && (
                                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isSubExpanded ? 'rotate-180' : ''}`} />
                                      )}
                                    </div>
                                    <div className={`text-[11px] leading-relaxed mt-0.5 font-opensans ${isLight ? 'text-gray-500' : 'text-white/50'}`}>
                                      {sub.desc}
                                    </div>
                                  </div>
                                </div>

                                {/* Inline Nested Submenu */}
                                <AnimatePresence>
                                  {hasSubItems && isSubExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className={`ml-6 mt-1 pl-4 border-l-2 ${isLight ? 'border-[#3c8e59]/30' : 'border-white/20'}`}>
                                        {sub.subItems!.map((subItem, subIdx) => {
                                          const SubIconComp = subItem.icon;
                                          return (
                                            <div
                                              key={subIdx}
                                              className={`flex items-center gap-3 p-2.5 rounded-lg transition-all duration-200 cursor-pointer group/subitem ${
                                                isLight
                                                  ? 'hover:bg-[#ebf4ee]'
                                                  : 'hover:bg-white/10'
                                              }`}
                                              onClick={() => handleServiceClick(subItem.label)}
                                            >
                                              <div className={`p-1.5 rounded-lg flex-shrink-0 transition-all duration-200 ${
                                                isLight
                                                  ? 'bg-[#ebf4ee] text-[#3c8e59] group-hover/subitem:bg-[#3c8e59] group-hover/subitem:text-white'
                                                  : 'bg-white/10 text-white/90 group-hover/subitem:bg-purple-500/40 group-hover/subitem:text-white'
                                              }`}>
                                                <SubIconComp className="h-3 w-3" />
                                              </div>
                                              <span className={`text-[12px] font-medium ${isLight ? 'text-gray-700' : 'text-white/90'}`}>
                                                {subItem.label}
                                              </span>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Contact Button (Right) */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`px-7 py-3 tracking-wider text-xs font-bold uppercase transition duration-150 cursor-pointer leading-none font-poppins inline-block rounded-lg ${
                isLight
                  ? 'bg-[#3c8e59] hover:bg-[#2d6b43] text-white'
                  : 'bg-[#3D306F] border border-purple-500/30 hover:border-purple-400/50 text-white hover:bg-[#483a80]'
              }`}
            >
              {dict.contactUs}
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors cursor-pointer ${isLight ? 'text-[#111927] hover:text-[#3c8e59]' : 'text-white hover:text-white/80'}`}
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
            className={`fixed top-20 left-0 w-full z-40 lg:hidden flex flex-col py-6 px-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto ${
              isLight ? 'bg-white border-b border-gray-200' : 'bg-[#0a0715]/95 border-b border-white/5 backdrop-blur-md'
            }`}
          >
            {navItems.map((item) => {
              const hasDropdown = !!navDropdowns[item.label];

              return (
                <div key={item.label} className={`border-b last:border-b-0 ${isLight ? 'border-gray-100' : 'border-white/5'}`}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between w-full text-left text-base font-semibold py-3 tracking-wide transition-all duration-150 cursor-pointer font-poppins ${
                        isActivePath(item.path)
                          ? isLight ? 'text-[#3c8e59]' : 'text-white'
                          : isLight ? 'text-gray-600 hover:text-[#3c8e59]' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`flex items-center justify-between w-full text-left text-base font-semibold py-3 tracking-wide transition-all duration-150 cursor-pointer font-poppins ${
                        isLight ? 'text-gray-600 hover:text-[#3c8e59]' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${isLight ? 'text-gray-400' : 'text-white/40'} ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>
                  )}

                  {/* Mobile Sub-menu */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-3 pb-3 space-y-1"
                      >
                        {navDropdowns[item.label].map((sub, sidx) => {
                          const IconComp = sub.icon;
                          const hasSubItems = sub.subItems && sub.subItems.length > 0;
                          return (
                            <div key={sidx}>
                              <button
                                onClick={() => {
                                  if (hasSubItems) {
                                    setExpandedMobileSubItem(expandedMobileSubItem === sub.label ? null : sub.label);
                                  } else {
                                    handleServiceClick(sub.label);
                                  }
                                }}
                                className={`flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-lg transition-colors border border-transparent ${
                                  isLight
                                    ? 'hover:bg-[#ebf4ee] hover:border-[#3c8e59]/20'
                                    : 'hover:bg-white/5 hover:border-white/10'
                                }`}
                              >
                                <div className={`p-1.5 rounded-lg ${isLight ? 'bg-[#ebf4ee]' : 'bg-white/10'}`}>
                                  <IconComp className={`h-4 w-4 ${isLight ? 'text-[#3c8e59]' : 'text-white/70'}`} />
                                </div>
                                <span className={`text-sm font-medium flex-1 ${isLight ? 'text-gray-600' : 'text-white/80'}`}>{sub.label}</span>
                                {hasSubItems && (
                                  <ChevronDown
                                    className={`h-3.5 w-3.5 transition-transform duration-200 ${isLight ? 'text-gray-400' : 'text-white/40'} ${
                                      expandedMobileSubItem === sub.label ? 'rotate-180' : ''
                                    }`}
                                  />
                                )}
                              </button>

                              {/* Mobile Nested Sub-menu */}
                              <AnimatePresence>
                                {hasSubItems && expandedMobileSubItem === sub.label && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="pl-6 pt-1 space-y-1"
                                  >
                                    {sub.subItems!.map((subItem, subIdx) => {
                                      const SubIconComp = subItem.icon;
                                      return (
                                        <button
                                          key={subIdx}
                                          onClick={() => handleServiceClick(subItem.label)}
                                          className={`flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-colors border border-transparent ${
                                            isLight
                                              ? 'hover:bg-[#ebf4ee] hover:border-[#3c8e59]/20'
                                              : 'hover:bg-white/5 hover:border-white/10'
                                          }`}
                                        >
                                          <div className={`p-1 rounded-lg ${isLight ? 'bg-[#ebf4ee]' : 'bg-white/10'}`}>
                                            <SubIconComp className={`h-3.5 w-3.5 ${isLight ? 'text-[#3c8e59]' : 'text-white/70'}`} />
                                          </div>
                                          <span className={`text-xs font-medium ${isLight ? 'text-gray-600' : 'text-white/80'}`}>{subItem.label}</span>
                                        </button>
                                      );
                                    })}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
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
              className={`py-3 mt-4 tracking-wider text-xs font-bold uppercase transition duration-150 cursor-pointer text-center rounded-lg font-poppins block ${
                isLight
                  ? 'bg-[#3c8e59] hover:bg-[#2d6b43] text-white'
                  : 'bg-purple-600 hover:bg-purple-500 text-white'
              }`}
            >
              {dict.contactUs}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

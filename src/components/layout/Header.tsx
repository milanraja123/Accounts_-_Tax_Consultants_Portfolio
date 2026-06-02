/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  Award,
  ShieldCheck,
  Mail,
  HeartHandshake,
  FileText,
  Calculator,
  Building2,
  Receipt,
  Briefcase,
  Users,
  ClipboardCheck,
  FileCheck,
  BadgeCheck,
  Scale,
  HelpCircle,
  MessageCircle,
  Headphones,
  BookOpen,
  TrendingUp,
  PiggyBank,
  Wallet,
  CalendarCheck,
} from 'lucide-react';
import { TranslationDictionary } from '../../types';
import ADMonogram from '../ui/ADMonogram';

interface HeaderProps {
  dict: TranslationDictionary;
  activeDropdown: string | null;
  setActiveDropdown: (dropdown: string | null) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setIsContactOpen: (open: boolean) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

// Sub-navigation dropdown definitions
const navDropdowns: Record<string, Array<{ label: string; desc: string; icon: any }>> = {
  'Popular Services': [
    { label: 'Tax Filing', desc: 'Quick and accurate tax return filing.', icon: FileText },
    { label: 'Bookkeeping', desc: 'Professional bookkeeping services.', icon: BookOpen },
    { label: 'Payroll Services', desc: 'Hassle-free payroll management.', icon: Wallet },
    { label: 'Financial Planning', desc: 'Strategic financial advisory.', icon: TrendingUp },
    { label: 'Audit Services', desc: 'Comprehensive audit solutions.', icon: ClipboardCheck },
    { label: 'Investment Advisory', desc: 'Smart investment strategies.', icon: PiggyBank },
  ],
  'Business Registration': [
    { label: 'Company Formation', desc: 'Register your new business entity.', icon: Building2 },
    { label: 'Sole Proprietorship', desc: 'Start as a sole trader easily.', icon: Briefcase },
    { label: 'Partnership Registration', desc: 'Register partnership firms.', icon: Users },
    { label: 'LLP Registration', desc: 'Limited Liability Partnership setup.', icon: Scale },
    { label: 'Trademark Registration', desc: 'Protect your brand identity.', icon: BadgeCheck },
  ],
  'GST Services': [
    { label: 'GST Registration', desc: 'Get your GST number quickly.', icon: Receipt },
    { label: 'GST Return Filing', desc: 'Timely GST return submissions.', icon: FileCheck },
    { label: 'GST Compliance', desc: 'Stay compliant with GST rules.', icon: ShieldCheck },
    { label: 'GST Audit', desc: 'Professional GST audit services.', icon: ClipboardCheck },
    { label: 'GST Refund', desc: 'Claim your GST refunds.', icon: Wallet },
  ],
  'Support': [
    { label: 'Help Center', desc: 'Find answers to common questions.', icon: HelpCircle },
    { label: 'Live Chat', desc: 'Chat with our support team.', icon: MessageCircle },
    { label: 'Call Support', desc: '24/7 phone support available.', icon: Headphones },
    { label: 'Knowledge Base', desc: 'Articles and tutorials.', icon: BookOpen },
    { label: 'Contact Us', desc: 'Get in touch with our team.', icon: Mail },
  ],
  'About': [
    { label: 'Our Story', desc: 'How we became top advisors in Northern Europe.', icon: HeartHandshake },
    { label: 'Meet the Partners', desc: 'Expert consultants with global reach.', icon: Users },
    { label: 'Careers', desc: 'Join our growing team.', icon: Briefcase },
    { label: 'Awards & Recognition', desc: 'Our achievements and milestones.', icon: Award },
  ],
};

const navItems = [
  'Income Tax Filing',
  'Book Consultancy',
  'Popular Services',
  'Business Registration',
  'GST Services',
  'Support',
  'About',
];

export default function Header({
  dict,
  activeDropdown,
  setActiveDropdown,
  mobileMenuOpen,
  setMobileMenuOpen,
  setIsContactOpen,
  activeNav,
  setActiveNav,
}: HeaderProps) {
  return (
    <header id="main-navigation-header" className="relative bg-white z-40 border-b border-gray-200 shadow-sm">
      {/* Full-width navigation bar */}
      <div className="w-full px-4 lg:px-6 xl:px-8 h-16 lg:h-[70px] flex items-center justify-between">

        {/* Logo Brand Frame */}
        <div id="logo-branding-frame" className="flex items-center space-x-2 cursor-pointer group flex-shrink-0">
          <ADMonogram className="h-8 w-8 border border-gray-100 transition-transform group-hover:scale-105" />
          <span className="text-sm lg:text-base font-black tracking-[0.12em] text-[#131926] font-grotesk">
            Taaxwala <span className="font-semibold text-gray-500">Associate</span>
          </span>
        </div>

        {/* Nav Items - Centered with proper spacing */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center justify-center flex-1 mx-4">
          <div className="flex items-center space-x-0.5 xl:space-x-1">
            {navItems.map((item) => {
              const hasDropdown = !!navDropdowns[item];
              const isSelected = activeDropdown === item;
              const isActionItem = item === 'Income Tax Filing' || item === 'Book Consultancy';
              const isActive = activeNav === item;

              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <button
                    id={`nav-link-${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      if (isActionItem) {
                        setIsContactOpen(true);
                      } else {
                        setActiveNav(item);
                      }
                    }}
                    className={`
                      relative flex items-center text-xs font-semibold transition-all py-2 px-3 cursor-pointer whitespace-nowrap font-poppins
                      ${isActionItem
                        ? 'text-[#3c8e59] hover:text-[#2d6b43]'
                        : 'text-[#10141e] hover:text-[#10141e]/70'
                      }
                    `}
                  >
                    {isActionItem && (
                      <span className="mr-1.5">
                        {item === 'Income Tax Filing' ? (
                          <Calculator className="h-3.5 w-3.5" />
                        ) : (
                          <CalendarCheck className="h-3.5 w-3.5" />
                        )}
                      </span>
                    )}
                    <span>{item}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 ml-1 text-slate-400 transition-transform duration-200 ${
                          isSelected ? 'rotate-180' : ''
                        }`}
                      />
                    )}

                    {/* Active underline */}
                    {isActive && !isActionItem && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#10141e]" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && isSelected && (
                      <motion.div
                        id={`dropdown-menu-${item.toLowerCase().replace(/\s+/g, '-')}`}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-2xl p-3 z-50"
                      >
                        {/* Dropdown Header */}
                        <div className="px-3 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-[#131926] uppercase tracking-wider font-grotesk">
                            {item}
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-poppins">
                            {navDropdowns[item].length} options
                          </span>
                        </div>

                        <div className="space-y-1 max-h-[320px] overflow-y-auto">
                          {navDropdowns[item].map((sub, sidx) => {
                            const IconComp = sub.icon;
                            return (
                              <div
                                key={sidx}
                                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-all cursor-pointer group/item border border-transparent hover:border-slate-200"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setActiveNav(item);
                                  if (sub.label === 'Contact Us' || sub.label === 'Live Chat') {
                                    setIsContactOpen(true);
                                  }
                                }}
                              >
                                <div className="p-2 rounded-lg bg-slate-100 text-[#131926] group-hover/item:bg-[#131926] group-hover/item:text-white transition-all flex-shrink-0">
                                  <IconComp className="h-4 w-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs font-semibold text-[#131926] group-hover/item:text-[#131926] font-poppins">
                                    {sub.label}
                                  </div>
                                  <div className="text-[10px] text-gray-500 leading-tight mt-0.5 font-opensans">
                                    {sub.desc}
                                  </div>
                                </div>
                                <ChevronDown className="h-3 w-3 text-slate-300 -rotate-90 group-hover/item:text-slate-500 group-hover/item:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                              </div>
                            );
                          })}
                        </div>

                        {/* View All Link */}
                        <div className="mt-3 pt-3 border-t border-slate-100">
                          <button
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveNav(item);
                              setIsContactOpen(true);
                            }}
                            className="w-full text-center text-xs font-bold text-white bg-[#131926] hover:bg-[#0a0f18] py-2.5 rounded-lg transition-colors"
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
          </div>
        </nav>

        {/* Right side: Phone + Mobile menu */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          {/* Quick Call Link Segment */}
          <div id="hotline-contact-card" className="hidden md:flex items-center space-x-2 select-none bg-slate-50 rounded-xl px-3 py-2">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#131926] text-white">
              <Phone className="h-4 w-4 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{dict.callUs}</span>
              <span className="text-sm font-black text-[#131926]">+45 71469728</span>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-burger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg text-[#131926] hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => {
                const hasDropdown = !!navDropdowns[item];
                const isActionItem = item === 'Income Tax Filing' || item === 'Book Consultancy';
                const isActive = activeNav === item;

                return (
                  <div key={item} className="border-b border-slate-100 last:border-b-0">
                    <button
                      id={`mobile-nav-${item.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => {
                        if (isActionItem) {
                          setMobileMenuOpen(false);
                          setIsContactOpen(true);
                        } else if (hasDropdown) {
                          setActiveDropdown(activeDropdown === item ? null : item);
                        }
                        if (!isActionItem) {
                          setActiveNav(item);
                        }
                      }}
                      className={`
                        relative flex items-center justify-between w-full text-left font-bold py-3 text-sm px-2 transition-all
                        ${isActionItem
                          ? 'text-[#3c8e59]'
                          : 'text-[#10141e]'
                        }
                      `}
                    >
                      <span className="flex items-center gap-2">
                        {isActionItem && (
                          item === 'Income Tax Filing' ? (
                            <Calculator className="h-4 w-4" />
                          ) : (
                            <CalendarCheck className="h-4 w-4" />
                          )
                        )}
                        {item}
                      </span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                            activeDropdown === item ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                      {/* Active underline for mobile */}
                      {isActive && !isActionItem && (
                        <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#10141e]" />
                      )}
                    </button>

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
                                  setActiveDropdown(null);
                                  setActiveNav(item);
                                  if (sub.label === 'Contact Us' || sub.label === 'Live Chat') {
                                    setIsContactOpen(true);
                                  }
                                }}
                                className="flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                              >
                                <div className="p-1.5 rounded-lg bg-slate-100">
                                  <IconComp className="h-4 w-4 text-slate-600" />
                                </div>
                                <span className="text-sm font-bold text-[#131926]">{sub.label}</span>
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Mobile call link info */}
              <div className="pt-4 flex items-center space-x-3 bg-slate-50 rounded-xl p-3 mt-2">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#131926] text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase">{dict.callUs}</div>
                  <div className="text-sm font-black text-[#131926]">+45 71469728</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

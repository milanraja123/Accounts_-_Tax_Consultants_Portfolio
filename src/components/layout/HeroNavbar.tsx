/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { TranslationDictionary } from '../../types';

interface HeroNavbarProps {
  dict: TranslationDictionary;
  setIsContactOpen: (open: boolean) => void;
}

// Mega menu structure - organized by categories
const megaMenuData = {
  'Services': {
    featured: {
      title: 'Popular Services',
      items: [
        { label: 'Private Limited Company', route: '/private-limited-company-registration' },
        { label: 'GST Registration', route: '/gst-registration' },
        { label: 'Income Tax Filing', route: '/income-tax-filing' },
        { label: 'Trademark Registration', route: '/trademark-registration' },
      ]
    },
    columns: [
      {
        title: 'Business Registration',
        items: [
          { label: 'Private Limited Company', route: '/private-limited-company-registration' },
          { label: 'LLP Registration', route: '/llp-registration' },
          { label: 'One Person Company', route: '/one-person-company-registration' },
          { label: 'Proprietorship Firm', route: '/proprietorship-firm-registration' },
          { label: 'Partnership Firm', route: '/partnership-firm-registration' },
        ]
      },
      {
        title: 'Tax & GST',
        items: [
          { label: 'Income Tax Filing', route: '/income-tax-filing' },
          { label: 'GST Registration', route: '/gst-registration' },
          { label: 'GST Return Filing', route: '/gst-return-filing' },
        ]
      },
      {
        title: 'Licenses & Certifications',
        items: [
          { label: 'ISO Certification', route: '/iso-certification' },
          { label: 'FSSAI Registration', route: '/fssai-registration' },
          { label: 'MSME Registration', route: '/msme-registration' },
          { label: 'Trademark Registration', route: '/trademark-registration' },
        ]
      },
    ]
  }
};

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: null, hasMegaMenu: true },
  { label: 'About', path: '/about' },
];

export default function HeroNavbar({ dict, setIsContactOpen }: HeroNavbarProps) {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const handleNavigate = (route: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    navigate(route);
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
              const isSelected = activeMegaMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && setActiveMegaMenu(item.label)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => setActiveLink(item.label)}
                      className={`relative flex items-center py-2 px-3 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer font-poppins ${
                        activeLink === item.label
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {activeLink === item.label && (
                        <motion.div
                          layoutId="heroActiveUnderline"
                          className="absolute bottom-0 left-3 right-3 h-[2px] bg-white"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setActiveLink(item.label)}
                      className={`relative flex items-center py-2 px-3 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer font-poppins ${
                        activeLink === item.label || isSelected
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {item.hasMegaMenu && (
                        <ChevronDown
                          className={`h-3.5 w-3.5 ml-1 text-white/50 transition-transform duration-200 ${
                            isSelected ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                      {activeLink === item.label && (
                        <motion.div
                          layoutId="heroActiveUnderline"
                          className="absolute bottom-0 left-3 right-3 h-[2px] bg-white"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  )}
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

        {/* Mega Menu Dropdown - Full Width */}
        <AnimatePresence>
          {activeMegaMenu && megaMenuData[activeMegaMenu as keyof typeof megaMenuData] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full w-full z-50 bg-[#0f0a1f]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl"
              onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Featured Section - Left Column */}
                  <div className="col-span-3 pr-8 border-r border-white/10">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-purple-400">
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.title}
                    </h3>
                    <div className="space-y-1">
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.items.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigate(item.route)}
                          className="flex items-center gap-2 w-full text-left py-2.5 px-3 rounded-lg transition-all duration-150 group hover:bg-white/5 text-white/80 hover:text-white"
                        >
                          <ChevronRight className="h-3.5 w-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-150 text-purple-400" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Columns */}
                  {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].columns.map((column, colIdx) => (
                    <div key={colIdx} className="col-span-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-white">
                        {column.title}
                      </h3>
                      <div className="space-y-1">
                        {column.items.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNavigate(item.route)}
                            className="flex items-center gap-2 w-full text-left py-2 px-2 rounded-lg transition-all duration-150 group hover:bg-white/5 text-white/70 hover:text-white"
                          >
                            <span className="text-sm">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/60">
                      Need help choosing the right service?
                    </p>
                    <Link
                      to="/contact"
                      onClick={() => setActiveMegaMenu(null)}
                      className="text-sm font-semibold flex items-center gap-1 transition-colors text-purple-400 hover:text-purple-300"
                    >
                      Contact our experts
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/5 last:border-b-0">
                {item.path ? (
                  <Link
                    to={item.path}
                    onClick={() => {
                      setActiveLink(item.label);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between w-full text-left text-base font-semibold py-3 tracking-wide transition-all duration-150 cursor-pointer font-poppins ${
                      activeLink === item.label
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setExpandedMobileCategory(expandedMobileCategory === item.label ? null : item.label)}
                      className={`flex items-center justify-between w-full text-left text-base font-semibold py-3 tracking-wide transition-all duration-150 cursor-pointer font-poppins ${
                        activeLink === item.label
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasMegaMenu && (
                        <ChevronDown
                          className={`h-4 w-4 text-white/40 transition-transform duration-200 ${
                            expandedMobileCategory === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* Mobile Mega Menu Content */}
                    <AnimatePresence>
                      {item.hasMegaMenu && expandedMobileCategory === item.label && megaMenuData[item.label as keyof typeof megaMenuData] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-3 pb-4 space-y-4"
                        >
                          {megaMenuData[item.label as keyof typeof megaMenuData].columns.map((column, colIdx) => (
                            <div key={colIdx}>
                              <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-white/50">
                                {column.title}
                              </h4>
                              <div className="space-y-1">
                                {column.items.map((subItem, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => handleNavigate(subItem.route)}
                                    className="flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors text-white/70 hover:bg-white/5 hover:text-white"
                                  >
                                    <span className="text-sm">{subItem.label}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}

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

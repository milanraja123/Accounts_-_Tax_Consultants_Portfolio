/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { TranslationDictionary } from '../../types';

// Import logo
import taxwalaLogo from '../../assets/images/Taxwala_logo.jpeg';

interface NavbarProps {
  dict: TranslationDictionary;
  variant?: 'light' | 'dark';
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
  { label: 'Career', path: '/career' },
];

export default function Navbar({ dict, variant = 'light' }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const isLight = variant === 'light';

  const handleNavigate = (route: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    navigate(route);
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
          <Link to="/" className="flex items-center space-x-3 cursor-pointer group">
            <img
              src={taxwalaLogo}
              alt="Taxwala Logo"
              className="h-12 w-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <span className={`text-2xl font-bold tracking-tight uppercase select-none font-grotesk ${isLight ? 'text-[#111927]' : 'text-white'}`}>
              Taxwala
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setActiveMegaMenu(item.label)}
                onMouseLeave={() => setActiveMegaMenu(null)}
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
                      activeMegaMenu === item.label
                        ? isLight ? 'text-[#3c8e59] bg-gray-50' : 'text-white bg-white/5'
                        : isLight ? 'text-gray-600 hover:text-[#3c8e59] hover:bg-gray-50' : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasMegaMenu && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          activeMegaMenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                )}
              </div>
            ))}
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

        {/* Mega Menu Dropdown - Full Width */}
        <AnimatePresence>
          {activeMegaMenu && megaMenuData[activeMegaMenu as keyof typeof megaMenuData] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`absolute left-0 right-0 top-full w-full z-50 ${
                isLight
                  ? 'bg-white border-b border-gray-200 shadow-xl'
                  : 'bg-[#0f0a1f]/98 backdrop-blur-xl border-b border-white/10'
              }`}
              onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Featured Section - Left Column */}
                  <div className={`col-span-3 pr-8 border-r ${isLight ? 'border-gray-200' : 'border-white/10'}`}>
                    <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isLight ? 'text-[#3c8e59]' : 'text-purple-400'}`}>
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.title}
                    </h3>
                    <div className="space-y-1">
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.items.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigate(item.route)}
                          className={`flex items-center gap-2 w-full text-left py-2.5 px-3 rounded-lg transition-all duration-150 group ${
                            isLight
                              ? 'hover:bg-[#ebf4ee] text-gray-700 hover:text-[#3c8e59]'
                              : 'hover:bg-white/5 text-white/80 hover:text-white'
                          }`}
                        >
                          <ChevronRight className={`h-3.5 w-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-150 ${isLight ? 'text-[#3c8e59]' : 'text-purple-400'}`} />
                          <span className="text-sm font-medium">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Columns */}
                  {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].columns.map((column, colIdx) => (
                    <div key={colIdx} className="col-span-3">
                      <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {column.title}
                      </h3>
                      <div className="space-y-1">
                        {column.items.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNavigate(item.route)}
                            className={`flex items-center gap-2 w-full text-left py-2 px-2 rounded-lg transition-all duration-150 group ${
                              isLight
                                ? 'hover:bg-gray-50 text-gray-600 hover:text-[#3c8e59]'
                                : 'hover:bg-white/5 text-white/70 hover:text-white'
                            }`}
                          >
                            <span className="text-sm">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className={`mt-8 pt-6 border-t ${isLight ? 'border-gray-200' : 'border-white/10'}`}>
                  <div className="flex items-center justify-between">
                    <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-white/60'}`}>
                      Need help choosing the right service?
                    </p>
                    <Link
                      to="/contact"
                      onClick={() => setActiveMegaMenu(null)}
                      className={`text-sm font-semibold flex items-center gap-1 transition-colors ${
                        isLight ? 'text-[#3c8e59] hover:text-[#2d6b43]' : 'text-purple-400 hover:text-purple-300'
                      }`}
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
            className={`fixed top-20 left-0 w-full z-40 lg:hidden flex flex-col py-6 px-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto ${
              isLight ? 'bg-white border-b border-gray-200' : 'bg-[#0a0715]/95 border-b border-white/5 backdrop-blur-md'
            }`}
          >
            {navItems.map((item) => (
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
                  <>
                    <button
                      onClick={() => setExpandedMobileCategory(expandedMobileCategory === item.label ? null : item.label)}
                      className={`flex items-center justify-between w-full text-left text-base font-semibold py-3 tracking-wide transition-all duration-150 cursor-pointer font-poppins ${
                        isLight ? 'text-gray-600 hover:text-[#3c8e59]' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasMegaMenu && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${isLight ? 'text-gray-400' : 'text-white/40'} ${
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
                              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-gray-500' : 'text-white/50'}`}>
                                {column.title}
                              </h4>
                              <div className="space-y-1">
                                {column.items.map((subItem, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => handleNavigate(subItem.route)}
                                    className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${
                                      isLight
                                        ? 'text-gray-600 hover:bg-[#ebf4ee] hover:text-[#3c8e59]'
                                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                                    }`}
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

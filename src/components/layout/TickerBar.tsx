/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, TranslationDictionary } from '../../types';

interface TickerBarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  setActiveDropdown: (dropdown: string | null) => void;
  dict: TranslationDictionary;
}

export default function TickerBar({ lang, setLang, setActiveDropdown, dict }: TickerBarProps) {
  return (
    <div id="ticker-top-bar" className="bg-[#10141e] text-white py-2 px-4 shadow-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] font-poppins tracking-wide">
        <div className="flex items-center space-x-2 text-center sm:text-left gap-1 mb-1.5 sm:mb-0">
          <span className="text-gray-400 font-medium">Recent Weblog :</span>
          <span className="text-slate-300 font-semibold hover:text-white transition-colors cursor-pointer">
            {dict.tickerText}
          </span>
        </div>

        <div className="flex items-center space-x-3 gap-1">
          <button
            id="lang-btn-en"
            onClick={() => { setLang('EN'); setActiveDropdown(null); }}
            className={`cursor-pointer font-bold px-1.5 py-0.5 rounded transition-all ${
              lang === 'EN' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            EN
          </button>
          <span className="text-gray-600">|</span>
          <button
            id="lang-btn-dk"
            onClick={() => { setLang('DK'); setActiveDropdown(null); }}
            className={`cursor-pointer font-bold px-1.5 py-0.5 rounded transition-all ${
              lang === 'DK' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            DK
          </button>
        </div>
      </div>
    </div>
  );
}

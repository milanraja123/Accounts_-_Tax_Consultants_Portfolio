/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Users, MessageSquare } from 'lucide-react';
import { Language, TranslationDictionary } from '../../types';

// Import images
import expertAdvisorImg from '../../assets/images/expert_advisor_1780341179206.png';
import davidLeoAvatarImg from '../../assets/images/david_leo_avatar_1780341197475.png';

interface ExpertAdviceSectionProps {
  lang: Language;
  dict: TranslationDictionary;
}

interface Testimonial {
  quote: string;
  authorName: string;
  authorTitle: string;
}

export default function ExpertAdviceSection({ lang, dict }: ExpertAdviceSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      quote: dict.testimonial1Quote,
      authorName: dict.testimonial1AuthorName,
      authorTitle: dict.testimonial1AuthorTitle,
    },
    {
      quote: dict.testimonial2Quote,
      authorName: dict.testimonial2AuthorName,
      authorTitle: dict.testimonial2AuthorTitle,
    },
    {
      quote: dict.testimonial3Quote,
      authorName: dict.testimonial3AuthorName,
      authorTitle: dict.testimonial3AuthorTitle,
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="expert-advice-section" className="bg-[#fbfcfa] py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Main advice row: content left, gorgeous portrait right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Col: Explanations + stats */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h2 id="expert-advice-title-h2" className="text-3xl sm:text-[44px] font-extrabold text-[#111927] tracking-tight leading-tight font-grotesk">
                {dict.expertAdviceTitle}
              </h2>
              <p id="expert-advice-desc-p" className="text-sm sm:text-[15px] font-light text-gray-500 leading-relaxed max-w-xl select-text font-opensans">
                {dict.expertAdviceSub}
              </p>
            </div>

            {/* Statistics Row layout */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              {/* Stat 1 */}
              <div id="expert-stat-1" className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-[#519d6d] tracking-tight select-none font-grotesk">
                  {dict.expertAdviceStat1Value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold tracking-wider text-[#64748b] uppercase select-none font-poppins">
                  {dict.expertAdviceStat1Label}
                </div>
              </div>

              {/* Stat 2 */}
              <div id="expert-stat-2" className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-[#519d6d] tracking-tight select-none font-grotesk">
                  {dict.expertAdviceStat2Value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold tracking-wider text-[#64748b] uppercase select-none font-poppins">
                  {dict.expertAdviceStat2Label}
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Custom leaf/organic shaped photo frame */}
          <motion.div
            id="expert-photo-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full relative aspect-[3/4] bg-gray-50 overflow-hidden rounded-[40px] rounded-tl-[120px] rounded-br-[120px] shadow-xl border-4 border-white"
          >
            <img
              src={expertAdvisorImg}
              alt="Our Expert Advisor"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </div>

        {/* Client Feedback Section */}
        <div className="space-y-10">

          {/* Headline Banner */}
          <motion.div
            id="testimonial-headline-banner"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#111927] to-[#1e293b] rounded-[24px] p-6 md:p-8 lg:p-10 text-center relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#3c8e59]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#3c8e59]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Stats badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-[#3c8e59]" />
                <span className="text-white font-bold text-sm font-poppins">10000+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MessageSquare className="w-4 h-4 text-[#3c8e59]" />
                <span className="text-white font-bold text-sm font-poppins">1000+ Social Reviews</span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight font-grotesk relative z-10">
              {dict.testimonialHeadline}
            </h3>

            {/* Star rating */}
            <div className="flex items-center justify-center gap-1 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-2 text-white/80 font-semibold text-sm font-poppins">5.0 Average Rating</span>
            </div>
          </motion.div>

          {/* Testimonial Slider */}
          <motion.div
            id="testimonial-slider"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-[32px] p-8 md:p-12 lg:p-14 shadow-sm border border-gray-100 relative overflow-hidden"
          >

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all z-10 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all z-10 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="px-8 md:px-12">
              {/* Top Row: Quotes SVG Icon */}
              <div className="flex justify-start mb-6">
                <svg className="w-12 h-12 text-[#a3d9b4] fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 10.143-9.609v3.767c-3.678.068-5.169 1.526-5.169 4.158h5.025v9.075h-10.016zm-14.017 0v-7.391c0-5.704 3.748-9.57 10.162-9.609v3.767c-3.678.068-5.169 1.526-5.169 4.158h5.025v9.075h-10.018z" />
                </svg>
              </div>

              {/* Animated Quote */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <blockquote className="text-left">
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#111927] leading-relaxed select-text font-poppins">
                      "{testimonials[currentSlide].quote}"
                    </p>
                  </blockquote>

                  {/* Author Profile */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3c8e59] to-[#2d6b43] flex items-center justify-center text-white font-bold text-lg font-grotesk">
                        {testimonials[currentSlide].authorName.charAt(0)}
                      </div>
                      <div className="flex flex-col leading-tight text-left">
                        <span className="font-semibold text-[#111927] text-sm sm:text-base select-text font-poppins">
                          {testimonials[currentSlide].authorName}
                        </span>
                        <span className="text-xs sm:text-[13px] text-gray-500 font-medium select-text font-opensans">
                          {testimonials[currentSlide].authorTitle}
                        </span>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider dots */}
              <div className="flex items-center justify-center gap-2 mt-8 select-none">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all cursor-pointer rounded-full ${
                      currentSlide === index
                        ? 'w-8 h-2 bg-[#3c8e59]'
                        : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

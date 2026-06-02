/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { TranslationDictionary } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  dict: TranslationDictionary;
}

export default function ContactModal({ isOpen, onClose, dict }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            id="modal-content-container"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-8 shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#10172a] font-grotesk">{dict.modalTitle}</h3>
                  <p className="text-sm text-gray-500 mt-1 font-opensans">{dict.modalSub}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 font-poppins">
                      {dict.nameLabel}
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full text-sm rounded-lg border border-gray-300 px-4 py-3 focus:border-[#1a253c] focus:outline-none focus:ring-2 focus:ring-[#1a253c]/20 transition-all font-opensans"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 font-poppins">
                      {dict.emailLabel}
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full text-sm rounded-lg border border-gray-300 px-4 py-3 focus:border-[#1a253c] focus:outline-none focus:ring-2 focus:ring-[#1a253c]/20 transition-all font-opensans"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 font-poppins">
                      {dict.messageLabel}
                    </label>
                    <textarea
                      id="message-input"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What services are you looking for..."
                      className="w-full text-sm rounded-lg border border-gray-300 px-4 py-3 focus:border-[#1a253c] focus:outline-none focus:ring-2 focus:ring-[#1a253c]/20 transition-all font-opensans"
                    />
                  </div>
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full bg-[#1a253c] text-white hover:bg-[#11192b] font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all font-poppins"
                >
                  {dict.submitBtn}
                </button>
              </form>
            ) : (
              <motion.div
                id="form-success-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[#10172a] font-grotesk">Sent Successfully!</h3>
                <p className="text-gray-600 max-w-sm font-opensans">{dict.successMessage}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

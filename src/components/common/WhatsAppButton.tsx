"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Auto-show popup after 8 seconds
      const popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 8000);
      return () => clearTimeout(popupTimer);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const quickMessages = [
    { text: "Product Inquiry", message: "Hello! I'd like to inquire about your homeopathic products." },
    { text: "Become Distributor", message: "I'm interested in becoming a distributor for NHRL." },
    { text: "Become Dealer", message: "I want to know about dealer opportunities." },
    { text: "Place Order", message: "I'd like to place a bulk order. Please share your product catalog." },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white rounded-2xl shadow-strong border border-gray-100 w-64 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">NHRL Support</div>
                  <div className="text-white/80 text-xs">Typically replies in 5 min</div>
                </div>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="text-white/70 hover:text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message */}
            <div className="p-3">
              <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-700 mb-3">
                Hello! 👋 How can we help you today?
              </div>

              {/* Quick Messages */}
              <div className="space-y-1.5">
                {quickMessages.map((item) => (
                  <a
                    key={item.text}
                    href={getWhatsAppLink(SITE_CONFIG.contact.whatsapp, item.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-3 py-2 text-xs font-medium text-[#25D366] border border-[#25D366]/30 rounded-xl hover:bg-[#25D366]/5 transition-colors"
                    onClick={() => setShowPopup(false)}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPopup(!showPopup)}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center relative"
        aria-label="Open WhatsApp chat"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.button>
    </div>
  );
}

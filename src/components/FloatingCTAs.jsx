import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const FloatingCTAs = ({ onOpenLeadModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918882333651?text=Hello%20Mangalam%20Aerovista%2C%20I%20am%20interested%20in%20Dholera%20Smart%20City%20plots."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/50 hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat on WhatsApp
        </span>
        {/* WhatsApp SVG */}
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.534 1.761.814 2.796.814 3.182 0 5.768-2.587 5.768-5.766 0-3.179-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.519-4.481 10-10 10-1.802 0-3.486-.481-4.945-1.321l-5.055 1.323 1.348-4.927c-.947-1.528-1.503-3.329-1.503-5.075 0-5.519 4.481-10 10-10 5.519 0 10 4.481 10 10zm-3.527 4.095c-.198-.099-1.17-.577-1.352-.643-.182-.066-.314-.099-.446.099s-.512.643-.628.775c-.116.132-.231.149-.429.05-.198-.099-.838-.309-1.596-.985-.59-.526-.988-1.176-1.104-1.374s-.012-.305.087-.404c.089-.089.198-.231.297-.347s.132-.198.198-.33c.066-.132.033-.248-.016-.347s-.446-1.074-.611-1.471c-.161-.387-.324-.334-.446-.34-.116-.006-.248-.007-.38-.007s-.347.05-.529.248c-.182.198-.694.678-.694 1.653s.71 1.917.809 2.049c.099.132 1.398 2.134 3.387 2.991.473.204.843.326 1.131.418.475.151.907.13 1.248.079.38-.057 1.17-.478 1.335-.941.165-.463.165-.86.116-.941-.05-.082-.182-.132-.38-.231z" />
        </svg>
      </a>

      {/* Instant Call / Site Visit Button */}
      <a
        href="tel:+918882333651"
        className="flex items-center gap-2 bg-gradient-to-r from-slate-900 to-blue-950 hover:from-blue-900 hover:to-slate-900 text-white px-5 py-3 rounded-full shadow-2xl border border-slate-700 hover:scale-105 transition-all text-xs sm:text-sm font-bold tracking-wide cursor-pointer"
      >
        <Phone size={16} className="text-amber-400 animate-bounce" />
        <span className="hidden sm:inline">Call Expert:</span>
        <span className="text-amber-400">+91 88823 33651</span>
      </a>
    </div>
  );
};
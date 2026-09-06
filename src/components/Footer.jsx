import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';

export const Footer = ({ onOpenLeadModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Strip */}
        <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-amber-950/40 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl mb-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-[#f5a623] text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck size={14} /> 100% Verified Investment
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Ready to Secure Your Plot in Mangalam Aerovista?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Book a complimentary VIP site visit with free AC transport pickup and customized investor advisory.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenLeadModal}
              className="px-6 py-3.5 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold rounded shadow-lg transition-all cursor-pointer text-xs sm:text-sm uppercase tracking-wider"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Book Free Site Visit
            </button>
            <a
              href="tel:+918882784781"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold rounded border border-white/20 transition-all text-xs sm:text-sm flex items-center gap-2"
            >
              <Phone size={16} className="text-[#f5a623]" />
              <span>+91 888 278 4781</span>
            </a>
          </div>
        </div>

        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#f5a623] flex items-center justify-center text-[#f5a623] font-black text-xl shadow-md bg-white">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  MANGALAM
                </span>
                <span className="font-bold text-xs text-[#f5a623] tracking-[0.2em] uppercase mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  AEROVISTA
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Prime residential, commercial, and industrial plotting developers in Navagam, 3 Km from Dholera Airport. Committed to legal transparency, NA permissions, and assured rental returns.
            </p>
            
            {/* Custom SVG Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded bg-slate-900 hover:bg-[#f5a623] hover:text-black text-slate-400 flex items-center justify-center border border-slate-800 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded bg-slate-900 hover:bg-[#f5a623] hover:text-black text-slate-400 flex items-center justify-center border border-slate-800 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded bg-slate-900 hover:bg-[#f5a623] hover:text-black text-slate-400 flex items-center justify-center border border-slate-800 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-5 flex items-center gap-2 border-l-2 border-[#f5a623] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Project', path: '/projects' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#f5a623] transition-colors group text-left"
                  >
                    <ChevronRight size={14} className="text-[#f5a623] group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Featured Projects */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-5 flex items-center gap-2 border-l-2 border-[#f5a623] pl-3">
              Our Projects
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Mangalam Aerovista - Airport 3 Km', id: 'mangalam-aerovista' },
                { name: 'Mangalam Greens - TP2 Zone', id: 'mangalam-greens' },
                { name: 'Commercial Hub - Near Ajju Hotel', id: 'commercial-plots-dholera' },
                { name: 'Mangalam Smart Estate', id: 'dholera-estate' },
                { name: 'Aerovista Industrial Logistics Park', id: 'industrial-hub-dholera' }
              ].map((proj, idx) => (
                <li key={idx}>
                  <Link
                    to={`/project/${proj.id}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#f5a623] transition-colors group text-left"
                  >
                    <ChevronRight size={14} className="text-[#f5a623] group-hover:translate-x-1 transition-transform" />
                    <span>{proj.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-5 flex items-center gap-2 border-l-2 border-[#f5a623] pl-3">
              Head Office & Site
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#f5a623] mt-0.5 shrink-0" />
                <span>Mangalam Aerovista Site Office, Navagam, 3 Km from Dholera International Airport & 1.5 Km from Ajju Hotel, Gujarat 382455</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#f5a623] shrink-0" />
                <a href="tel:+918882784781" className="hover:text-[#f5a623] font-semibold text-slate-200">
                  +91 888 278 4781
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#f5a623] shrink-0" />
                <a href="mailto:info@mangalamaerovista.com" className="hover:text-[#f5a623]">
                  info@mangalamaerovista.com
                </a>
              </div>
              <div className="pt-2">
                <div className="p-3 bg-slate-900 rounded border border-slate-800 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs text-slate-300 font-medium">Site Visits Available Daily 9 AM - 6 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mangalam Aerovista. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Legal Disclaimers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

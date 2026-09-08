import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
export const Navbar = ({ onOpenLeadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-md">
      {/* ─── ROW 1: TOP BAR WITH ANGULAR CUTOUT & SOCIAL ICONS ─── */}
      <div className="relative bg-[#0c0d10] text-white text-xs select-none">
        <div className="w-full flex items-center justify-between">

          {/* Left Yellow Angled Tab */}
          <div
            className="relative bg-[#f5a623] text-black font-semibold text-xs py-2 px-5 sm:px-8 flex items-center gap-2 pr-10"
            style={{
              clipPath: 'polygon(0 0, 100% 0, calc(100% - 24px) 100%, 0% 100%)'
            }}
          >
            <Clock size={14} className="text-black shrink-0" />
            <span className="tracking-tight whitespace-nowrap font-bold">Mon-Sun : 9.00 AM – 5.00 PM</span>
          </div>

          {/* Right Social Links */}
          <div className="flex items-center gap-4 sm:gap-5 pr-4 sm:pr-8 py-2 text-slate-300">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61593513610864"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-[#f5a623] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-[#f5a623] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#f5a623] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="hover:text-[#f5a623] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.211-.174.268-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ─── ROW 2: WHITE MIDDLE BRAND LOGO & TWO INFO BOXES ─── */}
      <div className="bg-white py-3.5 px-4 sm:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">

          {/* Logo: MANGALAM AEROVISTA with Brand Image */}
          <Link to="/" className="flex items-center gap-3 text-decoration-none group">
            {/* Logo Image */}
            <img
              src="/favicon.png"
              alt="Mangalam Aerovista Logo"
              className="w-11 h-11 rounded-full object-cover shadow-sm shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-black leading-none uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
                MANGALAM
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-slate-800 uppercase mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                AEROVISTA
              </span>
            </div>
          </Link>

          {/* Right Two Info Boxes */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">

            {/* Box 1: Have Any Question */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border border-[#f5a623] rounded-sm flex items-center justify-center text-[#f5a623] bg-amber-50/20 shrink-0">
                <Phone size={22} strokeWidth={1.75} className="text-[#f5a623]" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-slate-900 tracking-tight leading-tight">
                  Have Any Question
                </span>
                <a
                  href="tel:+918882333651"
                  className="text-xs sm:text-sm font-semibold text-[#f5a623] hover:underline mt-0.5 tracking-tight"
                >
                  (+91) 88823 33651
                </a>
              </div>
            </div>

            {/* Box 2: Send Your Mail */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border border-[#f5a623] rounded-sm flex items-center justify-center text-[#f5a623] bg-amber-50/20 shrink-0">
                <Mail size={22} strokeWidth={1.75} className="text-[#f5a623]" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-slate-900 tracking-tight leading-tight">
                  Send Your Mail
                </span>
                <a
                  href="mailto:Vedreadymixconcrete@gmail.com"
                  className="text-xs sm:text-sm font-semibold text-[#f5a623] hover:underline mt-0.5 tracking-tight"
                >
                  Vedreadymixconcrete@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 hover:text-[#f5a623] transition-colors"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* ─── ROW 3: BLACK NAVIGATION BAR WITH 5 CLEAN REQUESTED PAGES ─── */}
      <div className="bg-[#0c0d10] text-white">
        <div className="max-w-7xl mx-auto flex items-stretch justify-between">

          {/* Main Desktop Nav Items: home, about, project, gallery, contact us */}
          <nav className="hidden md:flex items-stretch text-sm font-medium tracking-normal">

            {/* 1. Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-6 py-3.5 flex items-center transition-colors hover:text-[#f5a623] ${isActive ? 'text-[#f5a623] font-bold border-b-2 border-[#f5a623]' : 'text-slate-200'
                }`
              }
            >
              Home
            </NavLink>

            {/* 2. About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-6 py-3.5 flex items-center transition-colors hover:text-[#f5a623] ${isActive ? 'text-[#f5a623] font-bold border-b-2 border-[#f5a623]' : 'text-slate-200'
                }`
              }
            >
              About
            </NavLink>

            {/* 3. Project / Projects */}
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-6 py-3.5 flex items-center transition-colors hover:text-[#f5a623] ${isActive ? 'text-[#f5a623] font-bold border-b-2 border-[#f5a623]' : 'text-slate-200'
                }`
              }
            >
              Project
            </NavLink>

            {/* 4. Gallery */}
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-6 py-3.5 flex items-center transition-colors hover:text-[#f5a623] ${isActive ? 'text-[#f5a623] font-bold border-b-2 border-[#f5a623]' : 'text-slate-200'
                }`
              }
            >
              Gallery
            </NavLink>

            {/* 5. Contact Us */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-6 py-3.5 flex items-center transition-colors hover:text-[#f5a623] ${isActive ? 'text-[#f5a623] font-bold border-b-2 border-[#f5a623]' : 'text-slate-200'
                }`
              }
            >
              Contact Us
            </NavLink>

          </nav>

          {/* Right Solid Yellow CTA Button: Get A Quote */}
          <button
            onClick={onOpenLeadModal}
            className="bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-sm sm:text-base px-6 sm:px-9 py-3.5 flex items-center justify-center transition-all duration-150 cursor-pointer shadow-inner ml-auto"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Get A Quote
          </button>

        </div>
      </div>

      {/* ─── MOBILE MENU ─── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d10] border-t border-slate-800 px-4 pt-3 pb-6 text-white space-y-3 animate-in slide-in-from-top duration-200">

          <div className="grid grid-cols-1 gap-2 p-3 bg-slate-900 rounded-lg text-xs border border-slate-800">
            <a href="tel:+918882333651" className="flex items-center gap-2 text-[#f5a623] font-bold">
              <Phone size={14} />
              <span>(+91) 88823 33651</span>
            </a>
            <a href="mailto:Vedreadymixconcrete@gmail.com" className="flex items-center gap-2 text-slate-300">
              <Mail size={14} className="text-[#f5a623]" />
              <span>Vedreadymixconcrete@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-col space-y-1">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold rounded hover:bg-slate-800 text-slate-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold rounded hover:bg-slate-800 text-slate-200"
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold rounded hover:bg-slate-800 text-slate-200"
            >
              Project
            </NavLink>
            <NavLink
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold rounded hover:bg-slate-800 text-slate-200"
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold rounded hover:bg-slate-800 text-slate-200"
            >
              Contact Us
            </NavLink>
          </div>

          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenLeadModal(); }}
              className="w-full py-3 bg-[#f5a623] text-black font-extrabold text-sm rounded shadow flex items-center justify-center gap-2"
            >
              <span>Get A Quote</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
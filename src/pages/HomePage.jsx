import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Plane, 
  ArrowRight, 
  Play, 
  Home, 
  Coins, 
  CheckCircle2, 
  PhoneCall, 
  Send, 
  Flame, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Layers,
  Award,
  Download,
  Calendar,
  Sparkles,
  Hotel,
  Clock,
  Phone,
  Mail,
  FileSpreadsheet,
  Star,
  Quote
} from 'lucide-react';

// Imported Real Project Asset Images from assets folder
import posterImg1 from '../assets/mangalm 1.jpeg'; // Golden Rental scheme ₹25k/mo poster
import posterImg2 from '../assets/mangalam 2.jpeg'; // R&B Infra / High ROI
import billboardImg3 from '../assets/mangalam 3.jpeg'; // Gaim Park Aero Vista on-ground billboard
import invitationImg4 from '../assets/mangalam 4.jpeg'; // Mangalam Aerovista Grand Launch Invitation
import mapPlanImg5 from '../assets/mangalam 5.jpeg'; // Official DSIR Town Planning Map (3km airport, 1.5km Ajju Hotel)

import { projectsData, testimonialsData, faqsData, projectHighlights } from '../data';

export const HomePage = ({ onOpenLeadModal }) => {
  const [lang, setLang] = useState('en'); // 'en' | 'hi'
  const [openFaq, setOpenFaq] = useState(0);

  // Quick enquiry form state
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'Mangalam Aerovista (3 Km Airport)'
  });
  const [leadSuccess, setLeadSuccess] = useState(false);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    setLeadSuccess(true);
  };

  const interactiveFaqs = [
    {
      q: "Why should I invest in Mangalam Aerovista?",
      a: "Mangalam Aerovista is located in Navagam, precisely 3 Km from Dholera International Airport and 1.5 Km from Ajju Hotel. It offers 100% NA received, DSIRDA approved plots with Golden Rental scheme providing ₹25,000 / month advance rent and guaranteed ₹20 Lakhs buyback after 2 years."
    },
    {
      q: "What types of properties are available in Mangalam Aerovista?",
      a: "We offer clear-title demarcated Residential Plots (150 - 500 Sq. Yard), Commercial Plots on the airport approach road, and Industrial/Logistics land parcels with wide RCC internal roads and complete utility infrastructure."
    },
    {
      q: "What are the future growth prospects for Mangalam Aerovista?",
      a: "With the upcoming Dholera International Airport, the 109 km 6-lane Ahmedabad Expressway, ABCD Command Hub, and massive semiconductor manufacturing ecosystems nearby, land in Navagam is experiencing exponential value appreciation."
    },
    {
      q: "Are the plots NA received and government approved?",
      a: "Yes! 100% of Mangalam Aerovista plots are Non-Agricultural (NA) approved, sanctioned by DSIRDA Gandhinagar, and ready for immediate registry and demarcation."
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-[#f5a623] selection:text-black">
      
      {/* ─── FLOATING LANGUAGE SELECTOR ─── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-2xl border border-slate-200 flex items-center gap-3 text-xs font-bold text-slate-800">
        <button 
          onClick={() => setLang('en')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all ${lang === 'en' ? 'bg-slate-900 text-white shadow' : 'hover:text-[#f5a623]'}`}
        >
          <span>🇬🇧</span>
          <span>English</span>
        </button>
        <span className="text-slate-300">|</span>
        <button 
          onClick={() => setLang('hi')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all ${lang === 'hi' ? 'bg-[#f5a623] text-black shadow' : 'hover:text-[#f5a623]'}`}
        >
          <span>🇮🇳</span>
          <span>हिंदी</span>
        </button>
      </div>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION 1: HERO SLIDER / BANNER WITH WHITE FLOATING CARD & ZERO BROKERAGE RIBBON
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-slate-950 overflow-hidden">
        {/* Background building image with subtle overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80" 
            alt="Mangalam Aerovista" 
            className="w-full h-full object-cover object-center opacity-70 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left White Floating Overlay Card */}
            <div className="lg:col-span-6 bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-sm shadow-2xl border-l-4 border-[#f5a623] max-w-xl">
              <span className="text-[#f5a623] font-black tracking-widest text-lg sm:text-2xl uppercase block mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                INVEST IN
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-none mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Mangalam Aerovista <br />
                <span className="text-2xl sm:text-3xl text-slate-800 font-extrabold">Navagam Township</span>
              </h1>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {lang === 'hi' 
                  ? 'मंगलम एरोविस्ता (नवागाम) इंटरनेशनल एयरपोर्ट से मात्र 3 किमी और अज्जू होटल से 1.5 किमी की दूरी पर स्थित है। भारत का सबसे तेजी से विकसित होने वाला स्मार्ट टाउनशिप प्रोजेक्ट।'
                  : 'Mangalam Aerovista at Navagam is located just 3 Km from International Airport and 1.5 Km from Ajju Hotel. The most promising and fastest developing smart township in Gujarat.'
                }
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Contact Us
                </Link>
                <Link
                  to="/projects"
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all"
                >
                  Explore Projects
                </Link>
              </div>
            </div>

            {/* Right Side: Gold Ribbon "**ZERO BROKERAGE**" Badge */}
            <div className="lg:col-span-6 flex justify-end">
              <div className="bg-black/60 backdrop-blur-md border border-[#f5a623]/60 rounded-xl p-6 sm:p-8 text-center text-white max-w-md shadow-2xl space-y-3">
                <div className="inline-block bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-black font-black text-sm sm:text-base px-6 py-1.5 rounded-sm uppercase tracking-wider shadow-lg">
                  **ZERO BROKERAGE**
                </div>
                <div className="space-y-1 pt-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <p className="text-base sm:text-lg font-bold text-amber-200 tracking-wider">FAIR DEALS</p>
                  <p className="text-base sm:text-lg font-bold text-amber-200 tracking-wider">BUDGET-FRIENDLY PRICES</p>
                  <p className="text-base sm:text-lg font-bold text-amber-200 tracking-wider">COMPLIMENTARY SITE VISITS</p>
                </div>
                <div className="pt-3 border-t border-white/20">
                  <span className="text-xs text-slate-300">A Project by Gaim Park Infra & Mangalam Aerovista Pvt. Ltd.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION 2: "WELCOME TO MANGALAM AEROVISTA — GUJARAT"
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Welcome To Mangalam Aerovista <br className="hidden sm:inline" />
                  — Gujarat
                </h2>
                <p className="text-[#f5a623] font-bold text-sm tracking-wide mt-2">
                  Salient Features of Mangalam Aerovista Smart Township
                </p>
              </div>

              <ul className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#f5a623] font-black text-base mt-0.5">✓</span>
                  <span><strong>Prime Airport Gated Township</strong> located just 3 Km from International Airport runway and 1.5 Km from Ajju Hotel in Navagam.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f5a623] font-black text-base mt-0.5">✓</span>
                  <span><strong>100% NA Received & Map Approved</strong> with clear title deeds and immediate registration ready plots.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f5a623] font-black text-base mt-0.5">✓</span>
                  <span><strong>Golden Rental & Assured Buyback Scheme:</strong> ₹25,000 / month (₹6 Lakhs advance rent for 24 months) + ₹20 Lakhs guaranteed buyback!</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f5a623] font-black text-base mt-0.5">✓</span>
                  <span><strong>World-Class Infrastructure:</strong> Wide RCC roads, underground power grid, landscaped parks, water drainage, and 24/7 security.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f5a623] font-black text-base mt-0.5">✓</span>
                  <span><strong>Direct Expressway Connectivity:</strong> 6-lane access-controlled highway connecting Ahmedabad in just 45 minutes.</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-block px-8 py-3.5 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-sm uppercase tracking-wider transition shadow cursor-pointer"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Read More About Us
                </Link>
              </div>
            </div>

            {/* Right Dual Visual: DMIC Corridor Graphic + Photo (6 Cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              
              {/* Box A: Corridor Graphic + 1386 km Box */}
              <div className="bg-[#1b4353] rounded-lg p-5 text-white flex flex-col justify-between min-h-[380px] shadow-lg relative overflow-hidden">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">Industrial Backbone</span>
                  <h4 className="text-lg font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>DMIC High Speed Corridor</h4>
                  <p className="text-xs text-slate-200">Delhi-Mumbai Industrial Corridor connecting Dadri to JN Port via Mangalam Aerovista Node.</p>
                </div>

                {/* Road / Route Visual Indicator */}
                <div className="my-4 flex items-center justify-center py-4 bg-slate-900/40 rounded-lg">
                  <div className="text-center space-y-2">
                    <span className="inline-block px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full">
                      Dadri (UP)
                    </span>
                    <div className="h-12 w-1 bg-gradient-to-b from-emerald-500 via-amber-400 to-rose-500 mx-auto" />
                    <span className="inline-block px-3 py-1 bg-[#f5a623] text-black font-black text-xs rounded-full animate-pulse">
                      ★ Mangalam Aerovista
                    </span>
                    <div className="h-12 w-1 bg-gradient-to-b from-amber-400 via-blue-400 to-rose-500 mx-auto" />
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white font-black text-xs rounded-full">
                      JNPT Mumbai
                    </span>
                  </div>
                </div>

                {/* Solid Yellow 1386 km Box */}
                <div className="bg-[#f5a623] text-black p-4 rounded text-center">
                  <p className="text-3xl font-black leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>1386 km</p>
                  <p className="text-xs font-bold uppercase tracking-wider mt-1">DMIC Project Length</p>
                </div>
              </div>

              {/* Box B: Real Photo with Gold Play/Highlight Box */}
              <div className="relative rounded-lg overflow-hidden shadow-lg h-[380px] group">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                  alt="Mangalam Aerovista" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#f5a623] text-black flex items-center justify-center font-bold shadow-lg">
                  <Play size={18} className="fill-black" />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-white">
                  <p className="text-xs text-amber-300 font-bold uppercase">Smart Township Admin</p>
                  <p className="text-sm font-extrabold">Mangalam Aerovista Corporate Hub</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION 3: "MANGALAM AEROVISTA FACTS" (Angular Cutout Dark Banner)
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#1e2229] text-white py-16 sm:py-20 overflow-hidden">
        {/* Yellow right triangular decorative block */}
        <div 
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-64 bg-[#f5a623]"
          style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-2xl mb-12 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Mangalam Aerovista Facts
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              India's premier greenfield plotting township, spanning 920 sq. km planning region with world-class infrastructure, sustainable development, and high ROI potential.
            </p>
          </div>

          {/* 4 Pillars Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-4">
            
            {/* Fact 1 */}
            <div className="space-y-2">
              <div className="text-[#f5a623] mb-1">
                <Building2 size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                682 sq. km
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Total Area</p>
            </div>

            {/* Fact 2 */}
            <div className="space-y-2">
              <div className="text-[#f5a623] mb-1">
                <Layers size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                420 sq. km
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Developable Area</p>
            </div>

            {/* Fact 3 */}
            <div className="space-y-2">
              <div className="text-[#f5a623] mb-1">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                15 Lakh
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Resident <span className="text-slate-400 block text-xs">By 2040</span></p>
            </div>

            {/* Fact 4 */}
            <div className="space-y-2">
              <div className="text-[#f5a623] mb-1">
                <Award size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                6 lakh +
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Estimated Jobs</p>
            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION 4: "MANGALAM AEROVISTA DEVELOPMENT" - 2x2 CARDS GRID
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Headline & View All Button (4 Cols) */}
            <div className="lg:col-span-4 space-y-5">
              <span className="text-[#f5a623] font-bold text-xs uppercase tracking-widest block">
                Mangalam Aerovista Development
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Mangalam Aerovista, Navagam, Gujarat
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                is emerging as a hub of futuristic urban development on the international airport corridor. Designed to be Gujarat's premier smart township, Mangalam Aerovista is poised to set new benchmarks in sustainable and high-return real estate investment.
              </p>
              <div className="pt-2">
                <Link
                  to="/projects"
                  className="inline-block px-8 py-3.5 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-sm uppercase tracking-wider transition shadow"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  View All Projects
                </Link>
              </div>
            </div>

            {/* Right 2x2 Feature Cards Grid (8 Cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Mangalam Aerovista Projects */}
              <div className="bg-white p-7 rounded-sm shadow-sm border border-slate-200/80 space-y-3 hover:shadow-md transition">
                <div className="w-10 h-10 text-[#f5a623]">
                  <Layers size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-black text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Mangalam Aerovista Township
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Located at Navagam, exactly 3 Km from International Airport with planned residential & commercial plots, boundary demarcation, and wide roads.
                </p>
              </div>

              {/* Card 2: Mangalam Aerovista Investment (Yellow Highlight Card) */}
              <div className="bg-[#f5a623] text-black p-7 rounded-sm shadow-md space-y-3">
                <div className="w-10 h-10 text-black">
                  <Coins size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Golden Rental Scheme
                </h3>
                <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
                  Invest ₹16 Lakhs in 200 Sqyd Plot and receive ₹25,000 / month (₹6 Lakhs Upfront Advance Rent for 24 Months) + ₹20 Lakhs Guaranteed Buyback option!
                </p>
              </div>

              {/* Card 3: Residential Plots */}
              <div className="bg-white p-7 rounded-sm shadow-sm border border-slate-200/80 space-y-3 hover:shadow-md transition">
                <div className="w-10 h-10 text-[#f5a623]">
                  <Home size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-black text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Verified Residential Plots
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  100% NA received, clear title deeds, and DSIRDA Gandhinagar approved masterplans ready for instant registry with immediate bank loan support.
                </p>
              </div>

              {/* Card 4: International Airport Corridor */}
              <div className="bg-white p-7 rounded-sm border border-slate-200/80 space-y-3 hover:shadow-md transition">
                <div className="w-10 h-10 text-[#f5a623]">
                  <Plane size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-black text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  International Airport Corridor
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Strategically situated in Navagam, adjacent to Mangalam Aerovista (just 3 Km away) and 1.5 Km from Ajju Hotel on the expressway link.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION 5: "ARE YOU READY TO INVEST IN MANGALAM AEROVISTA?" (Blueprint BG)
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        {/* Blueprint architectural schematic background */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80" 
            alt="Architectural Blueprint" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Are You Ready To Invest in Mangalam Aerovista?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            With world-class infrastructure, upcoming international airport connectivity, and assured rental returns, Mangalam Aerovista is the perfect destination to secure your family's future.
          </p>
          <div className="pt-3">
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-sm uppercase tracking-wider transition shadow-xl cursor-pointer"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION 6: "TESTIMONIALS" (Exact Screenshot Layout - Blueprint BG + White Cards)
          Discover heartfelt stories from our happy community members.
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        {/* Blueprint background overlay */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80" 
            alt="Blueprint Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Testimonials
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Discover heartfelt stories from our happy community members and investors.
            </p>
          </div>

          {/* 3 Columns White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Renu Halder */}
            <div className="bg-white rounded-none p-8 text-center text-slate-900 shadow-2xl flex flex-col justify-between items-center space-y-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#f5a623] mb-3 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" 
                    alt="Renu Halder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-950" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Renu Halder
                </h3>
                <p className="text-xs font-bold text-[#f5a623] uppercase tracking-wider mt-0.5">
                  Business
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed text-center">
                <p className="font-bold text-slate-900">
                  Exceptional Service and Expert Guidance in Mangalam Aerovista
                </p>
                <p>
                  I highly recommend the team for anyone looking to invest near Dholera Airport. We purchased plots under the Golden Rental scheme, and the entire experience was outstanding from start to finish.
                </p>
              </div>
            </div>

            {/* Card 2: Gaurav Arora */}
            <div className="bg-white rounded-none p-8 text-center text-slate-900 shadow-2xl flex flex-col justify-between items-center space-y-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#f5a623] mb-3 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" 
                    alt="Gaurav Arora" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-950" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Gaurav Arora
                </h3>
                <p className="text-xs font-bold text-[#f5a623] uppercase tracking-wider mt-0.5">
                  Manager
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed text-center">
                <p className="font-bold text-slate-900">
                  100% Genuine Proximity to Airport & Ajju Hotel
                </p>
                <p>
                  I visited the site in Navagam and purchased a plot. Every commitment made regarding 3 Km airport distance and ₹25,000/mo advance rent was fulfilled on time. Great knowledge and honest dealing.
                </p>
              </div>
            </div>

            {/* Card 3: Lalit Kumar */}
            <div className="bg-white rounded-none p-8 text-center text-slate-900 shadow-2xl flex flex-col justify-between items-center space-y-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#f5a623] mb-3 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" 
                    alt="Lalit Kumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-950" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Lalit Kumar
                </h3>
                <p className="text-xs font-bold text-[#f5a623] uppercase tracking-wider mt-0.5">
                  Database Administrator
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed text-center">
                <p className="font-bold text-slate-900">
                  Best Investment Decision with Guaranteed Buyback
                </p>
                <p>
                  Purchased a 200 Sqyd plot in Mangalam Aerovista. Getting assured rental returns and high appreciation as airport terminal construction accelerates. Completely transparent registration process.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION 7: INTERACTIVE FAQ & OFFICIAL DRAFT TOWN PLANNING MAP (mangalam 5.jpeg)
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (7 Cols) - FAQ Accordion */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  FAQ
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  Everything you need to know about Mangalam Aerovista, Navagam Airport proximity, Golden Rental Plan, and government approvals.
                </p>
              </div>

              {/* FAQ Accordion List */}
              <div className="space-y-4 pt-2">
                {interactiveFaqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className="rounded border border-slate-200 overflow-hidden shadow-sm transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        className={`w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base transition-colors cursor-pointer ${
                          isOpen ? 'bg-[#f5a623] text-black' : 'bg-white text-slate-900 hover:bg-slate-50'
                        }`}
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp size={20} className="text-black shrink-0" />
                        ) : (
                          <ChevronDown size={20} className="text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-5 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Column (5 Cols) - Official Town Planning Map Image (mangalam 5.jpeg) */}
            <div className="lg:col-span-5 bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-[#f5a623] uppercase tracking-wider">DSIRDA Gandhinagar</span>
                <span className="text-xs font-bold text-slate-700">Official Masterplan Map</span>
              </div>
              
              {/* Image mangalam 5.jpeg */}
              <div className="relative rounded-xl overflow-hidden bg-white border border-slate-200 shadow-inner group">
                <img 
                  src={mapPlanImg5} 
                  alt="Mangalam Aerovista DSIRDA Official Masterplan Map" 
                  className="w-full h-auto object-contain max-h-[520px] mx-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#f5a623] text-black font-extrabold text-[10px] uppercase px-2.5 py-1 rounded shadow">
                  ★ 3 Km to Airport • 1.5 Km to Ajju Hotel
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenLeadModal}
                  className="w-full py-3.5 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded transition flex items-center justify-center gap-2 shadow cursor-pointer"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  <Download size={16} />
                  <span>Download High-Resolution Masterplan PDF</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION 8: REAL ASSETS SHOWCASE
          - Poster 1: Golden Rental Plan ₹25,000/mo Advance
          - Poster 2: R&B / Future Destination
          - Billboard 3: On Ground Gaim Park Aero Vista
          - Invitation 4: Mangalam Aerovista Grand Launch
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-[#f5a623] font-bold text-xs uppercase tracking-widest">
              Official Project Releases
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Mangalam Aerovista Verified Schemes & Posters
            </h2>
            <p className="text-slate-600 text-sm">
              Direct developer documents from Gaim Park Infra and Mangalam Aerovista Pvt. Ltd.
            </p>
          </div>

          {/* Asset Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Golden Rental Scheme Poster */}
            <div className="bg-slate-900 text-white rounded-xl overflow-hidden shadow-xl border border-amber-500/30 flex flex-col justify-between group">
              <div className="relative overflow-hidden bg-black max-h-80">
                <img 
                  src={posterImg1} 
                  alt="Golden Rental Plan Mangalam Aerovista" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white font-black text-xs px-3 py-1 rounded shadow">
                  ★ Limited: 20 Bookings Only
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-black text-[#f5a623]">Golden Rental Plan: ₹25,000 / Mo</h3>
                <p className="text-xs text-slate-300">
                  200 Sqyd Plot @ ₹16 Lacs. Get <strong>₹6,00,000 upfront advance rent</strong> for 24 months + <strong>₹20 Lacs Guaranteed Buyback</strong> after 2 years!
                </p>
                <button
                  onClick={onOpenLeadModal}
                  className="w-full py-2.5 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-xs uppercase rounded transition cursor-pointer"
                >
                  Enquire Golden Rental Plot
                </button>
              </div>
            </div>

            {/* Card 2: On-Ground Billboard & Township */}
            <div className="bg-slate-900 text-white rounded-xl overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between group">
              <div className="relative overflow-hidden bg-black max-h-80">
                <img 
                  src={billboardImg3} 
                  alt="Aero Vista Gated Township Billboard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-[#f5a623] text-black font-black text-xs px-3 py-1 rounded shadow">
                  On-Ground Work Active
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-black text-white">Aero Vista Gated Township</h3>
                <p className="text-xs text-slate-300">
                  Gated entrance, wide internal roads, electricity, water lines and lush green open parks on site.
                </p>
                <button
                  onClick={onOpenLeadModal}
                  className="w-full py-2.5 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-xs uppercase rounded transition cursor-pointer"
                >
                  Book Free Site Visit
                </button>
              </div>
            </div>

            {/* Card 3: Grand Launch Invitation */}
            <div className="bg-slate-900 text-white rounded-xl overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between group">
              <div className="relative overflow-hidden bg-black max-h-80">
                <img 
                  src={invitationImg4} 
                  alt="Mangalam Aerovista Grand Launch Invitation" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white font-bold text-xs px-3 py-1 rounded shadow">
                  Official Launch
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-black text-white">Grand Launch & Investor Meet</h3>
                <p className="text-xs text-slate-300">
                  Presented by Gaim Park Infra with key promoter leadership Tej Prakash, Anil Kumar Goyal & Pushp Goyal.
                </p>
                <button
                  onClick={onOpenLeadModal}
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-[#f5a623] font-bold text-xs uppercase rounded transition cursor-pointer border border-[#f5a623]/40"
                >
                  Enquire Next Investor Meet
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION 9: "MANGALAM AEROVISTA PRIME PROJECTS"
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#f5a623] font-bold text-xs uppercase tracking-widest">
                Our Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Mangalam Aerovista Prime Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="px-6 py-3 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-xs uppercase tracking-wider transition shadow self-start md:self-auto"
            >
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((proj) => (
              <div 
                key={proj.id}
                className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#f5a623] text-black font-extrabold text-xs px-3 py-1 rounded-sm shadow">
                    {proj.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/85 text-[#f5a623] font-black text-xs px-3 py-1.5 rounded border border-[#f5a623]/30">
                    {proj.price}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 hover:text-[#f5a623] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {proj.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-1">
                      <MapPin size={14} className="text-[#f5a623] shrink-0" />
                      <span className="line-clamp-1">{proj.location}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Plot Size:</span>
                      <span className="font-bold text-slate-900">{proj.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Status:</span>
                      <span className="font-bold text-emerald-600">{proj.status}</span>
                    </div>
                  </div>

                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <Link
                      to={`/project/${proj.id}`}
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded text-xs transition text-center"
                    >
                      Details
                    </Link>
                    <button
                      onClick={onOpenLeadModal}
                      className="w-full py-2.5 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold rounded text-xs transition text-center cursor-pointer"
                    >
                      Book Plot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION 10: PROMOTER & HELPLINE CONTACT BANNER
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-[#f5a623] font-bold uppercase tracking-wider block">Official Developer Contacts</span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Mangalam Aerovista Pvt. Ltd. & Gaim Park Infra
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Tej Prakash (+91 9958613789) • Anil Kumar Goyal (+91 9811871753) • Pushp Goyal (+91 9599135236)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+918882784781"
                className="px-6 py-3.5 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded transition flex items-center gap-2"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                <PhoneCall size={16} />
                <span>Call Helpline</span>
              </a>
              <button
                onClick={onOpenLeadModal}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded border border-white/20 transition cursor-pointer"
              >
                Free Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

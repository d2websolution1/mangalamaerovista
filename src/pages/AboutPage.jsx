import React from 'react';
import {
  ShieldCheck,
  Award,
  MapPin,
  Target,
  Eye,
  Users,
  Phone,
  Plane,
  Hotel,
  CheckCircle2,
  Building,
  TrendingUp,
  Layers,
  Sparkles
} from 'lucide-react';
import { projectHighlights } from '../data';
import invitationImg4 from '../assets/project.png';
import mapPlanImg5 from '../assets/mangalam 5.jpeg';

export const AboutPage = ({ onOpenLeadModal }) => {
  return (
    <div className="bg-white font-sans">

      {/* ── Header Banner ── */}
      <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 opacity-90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Mangalam Aerovista Dholera"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#f5a623] text-xs font-bold uppercase tracking-wider">
            Mangalam Aerovista Pvt. Ltd. & Gaim Park Infra
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            A Visionary Project Taking Off Towards a Greater Tomorrow
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Located at Navagam (Navagan), precisely 3.5 Km from Dholera International Airport and 1.5 Km from Ajju Hotel. Delivering secure, high-ROI plotting schemes under DSIRDA Gandhinagar within the notified Special Investment Region (SIR).
          </p>
        </div>
      </section>

      {/* ── Key Contacts & Promoters Strip ── */}
      <section className="bg-[#f5a623] py-6 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {projectHighlights.contacts.map((c, i) => (
              <div key={i} className="bg-slate-950 text-white p-3.5 rounded border border-slate-800">
                <p className="text-xs text-[#f5a623] font-bold uppercase">{c.name}</p>
                <a href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-black hover:text-[#f5a623] transition">
                  {c.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Details ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded text-xs font-bold uppercase tracking-wider">
                Our Genesis & Strategic Location
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Navagam's Most Prestigious Airport Corridor Township
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Mangalam Aerovista is an iconic plotting landmark in Dholera Smart City SIR, presented by <strong>Gaim Park Infra</strong> and <strong>Mangalam Aerovista Pvt. Ltd.</strong> We are situated in Navagam, within the notified Special Investment Region (SIR), offering direct proximity to the upcoming Dholera International Airport (just 3.5 Km) and the commercial center surrounding Ajju Hotel (1.5 Km).
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                With full NA approvals, DSIRDA town planning sanctions, and wide internal avenues, every plot is demarcated with individual boundary pillars and ready for immediate registry.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded border border-slate-200 shadow-sm space-y-1">
                  <div className="w-8 h-8 rounded bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">
                    <Plane size={18} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Airport Corridor</h4>
                  <p className="text-xs text-slate-500">Only 3.5 Km from the international runway and dedicated air cargo hub.</p>
                </div>
                <div className="p-4 bg-white rounded border border-slate-200 shadow-sm space-y-1">
                  <div className="w-8 h-8 rounded bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                    <Hotel size={18} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Commercial Frontage</h4>
                  <p className="text-xs text-slate-500">1.5 Km from Ajju Hotel & major hospitality developments.</p>
                </div>
                <div className="p-4 bg-white rounded border border-slate-200 shadow-sm space-y-1">
                  <div className="w-8 h-8 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    <ShieldCheck size={18} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">SIR Zone Status</h4>
                  <p className="text-xs text-slate-500">Notified under the Special Investment Region for accelerated infrastructure growth.</p>
                </div>
                <div className="p-4 bg-white rounded border border-slate-200 shadow-sm space-y-1">
                  <div className="w-8 h-8 rounded bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm">
                    <Plane size={18} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Dholera Int'l Airport</h4>
                  <p className="text-xs text-slate-500">~108 Km from Ahmedabad via the upcoming 6-lane expressway.</p>
                </div>
              </div>

            </div>

            {/* Right Visual Image & Map */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4">
                <h3 className="text-xl font-black text-[#f5a623]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Official Town Planning Clearances
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span><strong>Authority:</strong> Dholera Special Investment Regional Development Authority (DSIRDA), Gandhinagar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span><strong>Website:</strong> www.dholera.gujarat.gov.in</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span><strong>Classification:</strong> Residential Land | Commercial Land | Industrial Land | Public Facility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span><strong>Total DSIR Plan:</strong> 920 sq. km TP Development Area</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl space-y-4">
                <h3 className="text-xl font-black text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Plot Pricing (SIR Zone)
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span>Residential Plot</span>
                    <span className="font-black text-[#f5a623]">₹5,000 / Sq. Yard</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span>Commercial + Residence Plot</span>
                    <span className="font-black text-[#f5a623]">₹10,000 / Sq. Yard</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>2000 Sq. Yard SIR Plot</span>
                    <span className="font-black text-[#f5a623]">₹20,000 / Sq. Yard</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 text-slate-900 flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="font-black text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>Golden Rental Scheme Available</h4>
                  <p className="text-xs text-slate-600">₹25,000/month rent in advance for 24 months + 2-year buyback.</p>
                </div>
                <button
                  onClick={onOpenLeadModal}
                  className="px-5 py-2.5 bg-[#f5a623] hover:bg-[#e0961d] text-black text-xs font-extrabold rounded shadow cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
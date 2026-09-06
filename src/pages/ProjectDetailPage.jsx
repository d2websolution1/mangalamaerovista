import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, CheckCircle2, ShieldCheck, Phone, Download, Sparkles } from 'lucide-react';
import { projectsData } from '../data';

export const ProjectDetailPage = ({ onOpenLeadModal }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lead, setLead] = useState({ name: '', phone: '', email: '' });

  const project = projectsData.find(p => p.id === projectId) || projectsData[0];

  const handleForm = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* ── Top Bar ── */}
      <div className="bg-slate-900 text-white py-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-slate-300 hover:text-amber-400 font-bold text-sm transition"
          >
            <ArrowLeft size={18} />
            <span>Back to All Projects</span>
          </Link>
          <span className="text-xs bg-amber-500/20 text-amber-400 border border-amber-400/30 px-3 py-1 rounded-full font-semibold">
            {project.status}
          </span>
        </div>
      </div>

      {/* ── Hero Banner ── */}
      <div className="relative h-96 lg:h-[480px] bg-slate-950 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full text-white">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-md">
                {project.badge}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white font-semibold text-xs px-3 py-1 rounded-md">
                {project.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black">{project.title}</h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 flex items-center gap-2">
              <MapPin size={16} className="text-amber-400" />
              <span>{project.location}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Detail Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-black text-slate-900">Project Overview</h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Positioned in the prime growth zone of Dholera Special Investment Region (SIR), {project.title} offers unparalleled capital appreciation backed by world-class urban infrastructure, 24/7 security, wide roads, and immediate registry permissions.
              </p>

              {/* Highlights Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                {project.highlights?.map((h, i) => (
                  <div key={i} className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 text-center">
                    <Sparkles size={16} className="text-amber-600 mx-auto mb-1" />
                    <span className="text-xs font-bold text-slate-800">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications & Plot Details */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-black text-slate-900">Key Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-between">
                  <span className="text-slate-500 font-medium">Plot Size / Area</span>
                  <span className="font-bold text-slate-900">{project.area}</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-between">
                  <span className="text-slate-500 font-medium">Pricing</span>
                  <span className="font-bold text-amber-600">{project.price}</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-between">
                  <span className="text-slate-500 font-medium">Legal Status</span>
                  <span className="font-bold text-emerald-600">NA / NOC Approved</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-between">
                  <span className="text-slate-500 font-medium">Registry & Mutation</span>
                  <span className="font-bold text-slate-900">Immediate Available</span>
                </div>
              </div>
            </div>

            {/* Project Amenities & Features */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-black text-slate-900">Township Features & Infrastructure</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Connectivity Advantage */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-black text-slate-900">Strategic Location Advantages</h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span><strong>10-15 Mins:</strong> Upcoming Dholera International Airport (Twin Runways)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span><strong>5 Mins:</strong> Access-Controlled Ahmedabad-Dholera 6-Lane Expressway</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span><strong>8 Mins:</strong> ABCD Central Administrative Building & Command Center</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span><strong>12 Mins:</strong> Tata Semiconductor Fabrication Mega Plant (₹91,000 Cr)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (4 cols) - Sticky Booking Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Starting Price</p>
                <p className="text-3xl font-black text-amber-600">{project.price}</p>
                <p className="text-xs text-emerald-600 font-semibold mt-1">✓ Flexible Payment Options & Bank Loans</p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">Enquiry Submitted!</h4>
                  <p className="text-xs text-slate-500">We have sent layout brochure to {lead.phone}.</p>
                </div>
              ) : (
                <form onSubmit={handleForm} className="space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm">Download Project Layout & Price Sheet</h4>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={lead.name}
                    onChange={(e) => setLead({ ...lead, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone (WhatsApp)"
                    value={lead.phone}
                    onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={lead.email}
                    onChange={(e) => setLead({ ...lead, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs transition shadow flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download size={14} />
                    <span>Download Layout & Price PDF</span>
                  </button>
                </form>
              )}

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <a
                  href="tel:+918882784781"
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2"
                >
                  <Phone size={14} className="text-amber-400" />
                  <span>Call Project Manager: +91 8882784781</span>
                </a>
                <button
                  onClick={() => onOpenLeadModal(project.title)}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition cursor-pointer"
                >
                  Schedule Weekend VIP Site Visit
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>RERA Approved • Clear Title Guarantee</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

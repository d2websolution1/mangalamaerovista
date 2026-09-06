import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Filter, 
  Phone, 
  CheckCircle2, 
  Building2, 
  Layers, 
  Sparkles, 
  Download,
  Plane,
  Hotel
} from 'lucide-react';
import { projectsData } from '../data';

export const ProjectsPage = ({ onOpenLeadModal }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential Plots', 'Residential & Commercial', 'Industrial Land'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* ── Page Header ── */}
      <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 opacity-90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
          alt="Projects in Dholera" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#f5a623] text-xs font-bold uppercase tracking-wider">
            Clear Title • DSIRDA Approved Townships
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Mangalam Aerovista Projects & Land Parcels
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our ready-for-registry residential plotting schemes, airport corridor projects, and industrial lands in Dholera Smart City SIR.
          </p>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <Filter size={16} className="text-[#f5a623] mr-1 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
                  filter === cat
                    ? 'bg-slate-900 text-[#f5a623] shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-semibold">
            Showing <span className="text-slate-900 font-bold">{filteredProjects.length}</span> Verified Projects
          </div>
        </div>
      </div>

      {/* ── Projects Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Price Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#f5a623] text-black text-xs font-extrabold px-3 py-1 rounded shadow">
                    {proj.badge}
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded">
                    {proj.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-sm text-[#f5a623] font-black text-sm px-3 py-1.5 rounded border border-[#f5a623]/30">
                  {proj.price}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#f5a623] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-1">
                    <MapPin size={14} className="text-[#f5a623] shrink-0" />
                    <span>{proj.location}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Plot Specs */}
                <div className="bg-slate-50 p-3.5 rounded border border-slate-100 text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="font-semibold">Plot Size / Area:</span>
                    <span className="font-bold text-slate-900">{proj.area}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="font-semibold">Availability Status:</span>
                    <span className="font-bold text-emerald-600">{proj.status}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-1 text-[11px] text-slate-600">
                  <span className="font-bold text-slate-900 block mb-1">Included Amenities:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.features.slice(0, 4).map((f, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-[10px] font-medium">
                        ✓ {f}
                      </span>
                    ))}
                    {proj.features.length > 4 && (
                      <span className="text-[10px] text-[#f5a623] font-bold self-center">
                        +{proj.features.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 grid grid-cols-2 gap-2 border-t border-slate-100">
                  <Link
                    to={`/project/${proj.id}`}
                    className="w-full py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded text-xs transition text-center"
                  >
                    View Layout & Details
                  </Link>
                  <button
                    onClick={onOpenLeadModal}
                    className="w-full py-2.5 px-3 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold rounded text-xs transition shadow cursor-pointer text-center"
                  >
                    Enquire Now
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ── Banner ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Looking for Custom Land Parcels or Commercial Deals?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              We provide tailored land acquisition services for commercial plazas, hospitality, and large logistics companies in Navagam.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenLeadModal}
              className="px-6 py-3.5 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold rounded text-xs uppercase transition cursor-pointer"
            >
              Contact Team
            </button>
            <a
              href="tel:+918882784781"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold rounded border border-white/20 text-xs transition flex items-center gap-2"
            >
              <Phone size={15} className="text-[#f5a623]" />
              <span>Call +91 8882784781</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

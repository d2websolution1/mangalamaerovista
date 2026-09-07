import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Filter,
  Eye,
  X,
  Download,
  MapPin,
  Phone,
  Sparkles,
  Layers,
  Plane,
  Building,
  CheckCircle2
} from 'lucide-react';

// Real Project Assets
import posterImg1 from '../assets/plan.png';
import billboardImg3 from '../assets/mangalam 3.jpeg';
import invitationImg4 from '../assets/project.png';
import mapPlanImg5 from '../assets/mangalam 5.jpeg';

export const GalleryPage = ({ onOpenLeadModal }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Township & Ground', 'Masterplan & Maps', 'Schemes & Releases', 'Connectivity'];

  const realGallery = [
    {
      id: 1,
      title: 'Golden Rental Scheme (₹25,000 / Month)',
      category: 'Schemes & Releases',
      url: posterImg1,
      desc: 'Official poster for 200 Sqyd plot under ₹6 Lakhs upfront advance rent scheme with ₹20 Lakhs buyback.'
    },
    {
      id: 2,
      title: 'Official DSIRDA Masterplan & Township Map',
      category: 'Masterplan & Maps',
      url: mapPlanImg5,
      desc: 'Government draft development plan showing 3.5 Km distance to Dholera Airport and 1.5 Km from Ajju Hotel, within the notified SIR.'
    },
    {
      id: 3,
      title: 'Aero Vista Gated Township Site Billboard',
      category: 'Township & Ground',
      url: billboardImg3,
      desc: 'On-ground high-visibility billboard at Navagam project site with demarcated plots and wide avenues.'
    },
    {
      id: 4,
      title: 'Mangalam Aerovista Grand Launch Invitation',
      category: 'Schemes & Releases',
      url: invitationImg4,
      desc: 'Official investor meet and partner convention launch invitation by Gaim Park Infra.'
    },
    {
      id: 5,
      title: 'High Growth & Investment Corridor',
      category: 'Connectivity',
      url: posterImg1,
      desc: 'Strategic high-ROI investment overview on Dholera SIR Expressway and Airport corridor.'
    },
    {
      id: 6,
      title: 'ABCD Central Command & Admin Building',
      category: 'Connectivity',
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      desc: 'The nerve center of Dholera Smart City controlling utilities, sensors, and city-wide administrative functions.'
    },
    {
      id: 7,
      title: 'Ahmedabad-Dholera Access-Controlled Expressway',
      category: 'Connectivity',
      url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
      desc: '109 km 6-lane expressway connecting Ahmedabad to Dholera SIR in under 45 minutes.'
    },
    {
      id: 8,
      title: 'Grand Gated Entrance & Security Portal',
      category: 'Township & Ground',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      desc: 'Modern entrance arch with CCTV security cabin, boundary wall, and landscaped tree plantation.'
    }
  ];

  const filtered = activeCategory === 'All'
    ? realGallery
    : realGallery.filter(item => item.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">

      {/* ── Page Header ── */}
      <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 opacity-90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Mangalam Aerovista Gallery"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#f5a623] text-xs font-bold uppercase tracking-wider">
            Mangalam Aerovista & Gaim Park Infra
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Project Gallery & Media
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Explore official releases, Golden Rental scheme blueprints, DSIRDA approved town planning maps, and live on-ground project developments in Navagam, within the Dholera SIR (Special Investment Region).
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
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${activeCategory === cat
                  ? 'bg-slate-900 text-[#f5a623] shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-semibold">
            Showing <span className="font-bold text-slate-900">{filtered.length}</span> Verified Media Assets
          </div>
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="h-72 overflow-hidden relative bg-black flex items-center justify-center">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 bg-[#f5a623] text-black rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Eye size={20} />
                  </span>
                </div>
                <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-[#f5a623] font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                  {item.category}
                </span>
              </div>

              <div className="p-5 bg-white space-y-1">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#f5a623] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-[#f5a623] hover:text-black transition cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="h-[480px] sm:h-[560px] overflow-hidden bg-black flex items-center justify-center p-2">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-xs text-[#f5a623] font-bold uppercase tracking-wider">{selectedImage.category}</span>
                <h3 className="text-lg font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>{selectedImage.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{selectedImage.desc}</p>
              </div>
              <button
                onClick={() => { setSelectedImage(null); onOpenLeadModal(); }}
                className="px-6 py-3 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-xs uppercase rounded transition shrink-0 cursor-pointer"
              >
                Request Full Brochure
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA Banner ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="bg-slate-900 p-8 sm:p-12 rounded-2xl border border-slate-800 shadow-xl space-y-4 text-white">
          <h3 className="text-2xl sm:text-3xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Want to Inspect Mangalam Aerovista on Site?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            We arrange complimentary VIP site visits with AC vehicle pickup from Ahmedabad to Navagam (just 3.5 Km from Dholera Airport).
          </p>
          <button
            onClick={onOpenLeadModal}
            className="px-8 py-4 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-sm uppercase tracking-wider rounded transition shadow-lg cursor-pointer"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Book Free VIP Site Visit
          </button>
        </div>
      </div>

    </div>
  );
};
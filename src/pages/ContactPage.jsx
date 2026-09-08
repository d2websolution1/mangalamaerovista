import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  Building,
  User
} from 'lucide-react';
import { projectHighlights } from '../data';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Golden Rental Scheme Booking',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">

      {/* ── Page Header ── */}
      <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 opacity-90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Contact Mangalam Aerovista"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#f5a623] text-xs font-bold uppercase tracking-wider">
            Mangalam Aerovista Pvt. Ltd. & Gaim Park Infra
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Connect directly with key promoters and project advisors for booking, NA verification documents, and VIP site visit arrangements.
          </p>
        </div>
      </section>

      {/* ── Promoters Hotline Strip ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Order Now', phone: '+91 88823 33651' },
            { name: 'Sales Enquiry', phone: '9453531311' },
            { name: 'Sales Enquiry', phone: '9555477002' },
            { name: 'Sales Enquiry', phone: '8744809735' }
          ].map((c, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-amber-500/10 text-[#f5a623] flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase">{c.name}</p>
                <a href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-black text-slate-900 hover:text-[#f5a623] transition">
                  {c.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Form & Site Location ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Enquire for Golden Rental & Plots
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Leave your details and our team will get back to you with layout maps and booking procedure.</p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4 bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Query Received!</h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our Dholera project head will call you on <span className="font-semibold text-slate-900">{formData.phone}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded text-xs cursor-pointer"
                >
                  Send Another Query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm focus:ring-2 focus:ring-[#f5a623] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm focus:ring-2 focus:ring-[#f5a623] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm focus:ring-2 focus:ring-[#f5a623] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Interested In
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm focus:ring-2 focus:ring-[#f5a623] focus:outline-none"
                    >
                      <option value="Golden Rental Scheme (₹25k/Mo)">Golden Rental Scheme (₹25k/Mo)</option>
                      <option value="Residential Plot (₹5,000/Sq. Yard)">Residential Plot (₹5,000/Sq. Yard)</option>
                      <option value="Commercial + Residence Plot (₹10,000/Sq. Yard)">Commercial + Residence Plot (₹10,000/Sq. Yard)</option>
                      <option value="2000 Sq. Yard SIR Plot (₹20,000/Sq. Yard)">2000 Sq. Yard SIR Plot (₹20,000/Sq. Yard)</option>
                      <option value="Mangalam Aerovista Plots (3.5 Km Airport)">Mangalam Aerovista Plots (3.5 Km Airport)</option>
                      <option value="Book VIP Site Visit (Free AC Cab)">Book VIP Site Visit (Free AC Cab)</option>
                      <option value="Commercial / Hotel Land">Commercial / Hotel Land</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your preferred plot size, booking budget, or site visit date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm focus:ring-2 focus:ring-[#f5a623] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#f5a623] hover:bg-[#e0961d] text-black font-extrabold text-sm uppercase tracking-wider rounded transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  <Send size={16} />
                  <span>Submit Message & Request Callback</span>
                </button>
              </form>
            )}
          </div>

          {/* Location Details & Map Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 p-8 rounded-2xl text-white space-y-6 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-black text-[#f5a623]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Township & Office Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#f5a623] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Project Location:</strong>
                    <span>Mangalam Aerovista, Navagam (Navagan), within the notified SIR (Special Investment Region) — 3.5 Km from Dholera International Airport & 1.5 Km from Ajju Hotel, Gujarat</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building size={20} className="text-[#f5a623] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Corporate Promoters:</strong>
                    <span>Mangalam Aerovista Pvt. Ltd. | Gaim Park Infra</span>
                  </div>
                </div>
              </div>

              {/* Plot Pricing Quick Reference */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                <p className="text-xs font-bold text-[#f5a623]">Plot Pricing (SIR Zone)</p>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  <li className="flex items-center justify-between">
                    <span>Residential Plot</span>
                    <span className="font-bold text-white">₹5,000 / Sq. Yard</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Commercial + Residence Plot</span>
                    <span className="font-bold text-white">₹10,000 / Sq. Yard</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>2000 Sq. Yard SIR Plot</span>
                    <span className="font-bold text-white">₹20,000 / Sq. Yard</span>
                  </li>
                </ul>
              </div>

              {/* Free Transport Badge */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1">
                <p className="text-xs font-bold text-[#f5a623]">Complimentary Site Visit Facility</p>
                <p className="text-[11px] text-slate-400">
                  Free AC cab pickup and drop available daily from Ahmedabad Airport & Railway Station for site inspection in Navagam.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/918882333651?text=Hello%20Mangalam%20Aerovista%2C%20I%20want%20details%20about%20the%20Golden%20Rental%20Plan%20in%20Navagam."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded text-xs transition flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare size={16} />
                  <span>Direct WhatsApp Assistance</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
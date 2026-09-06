import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const LeadModal = ({ isOpen, onClose, defaultProject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    locationPreference: 'Inside Dholera SIR',
    budget: '₹5L - ₹10L',
    project: defaultProject || 'Mangalam Aerovista',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds or keep visible
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-900 px-6 py-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-2 mb-1 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Instant Investor Brochure & Price List</span>
          </div>
          <h3 className="text-xl font-black">Register For Special Launch Discount</h3>
          <p className="text-slate-300 text-xs mt-1">Get authentic layout maps, government approvals & payment schedule.</p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Enquiry Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our senior Dholera investment specialist will contact you on <span className="font-semibold text-slate-900">{formData.phone}</span> with complete project brochures & VIP visit schedule.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajeev Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project of Interest
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                  >
                    <option value="Mangalam Aerovista">Mangalam Aerovista (Airport)</option>
                    <option value="Mangalam Greens">Mangalam Greens (Activation Zone)</option>
                    <option value="Dholera Smart Estate">Dholera Smart Estate</option>
                    <option value="RSC Royal Residency 166">RSC Royal Residency 166</option>
                    <option value="Mayur Swastik Phase 2">Mayur Swastik Phase 2</option>
                    <option value="Industrial Logistics Land">Industrial Logistics Land</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Investment Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                  >
                    <option value="Under ₹5 Lakhs">Under ₹5 Lakhs</option>
                    <option value="₹5L - ₹10L">₹5 Lakhs - ₹10 Lakhs</option>
                    <option value="₹10L - ₹25L">₹10 Lakhs - ₹25 Lakhs</option>
                    <option value="₹25L - ₹50L+">₹25 Lakhs - ₹50L+</option>
                    <option value="Commercial / Industrial">Commercial / Industrial</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-base rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={18} />
                <span>Submit & Download Brochure</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>100% Privacy Protected. No spam guaranteed.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

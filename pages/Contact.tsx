
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    size: '10x10',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', size: '10x10', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight">Let's Find Your <br/>Perfect Space</h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Have questions about availability or need a custom quote? We're here to help. Reach out via phone, email, or use the form.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p className="text-slate-500 text-sm">{BUSINESS_INFO.phone}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <p className="text-slate-500 text-sm">{BUSINESS_INFO.email}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-1">Visit Us</h3>
                <p className="text-slate-500 text-sm leading-tight">{BUSINESS_INFO.address}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-1">Office Hours</h3>
                <p className="text-slate-500 text-sm leading-tight">Mon-Fri 8am-6pm<br/>Sat 9am-4pm</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[400px] shadow-lg border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11231.547196652438!2d-76.14207914999999!3d45.13210455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd21b6a18d96009%3A0x6d98c8c7f7663d27!2s12345%20Hwy%207%2C%20Carleton%20Place%2C%20ON%20K7C%203P2%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative">
            <div className="absolute -top-6 -right-6 bg-red-600 text-white p-6 rounded-3xl shadow-xl hidden md:block">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold mb-8">Get a Personalized Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="613-555-0123" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Preferred Unit Size</label>
                <select 
                  value={formData.size}
                  onChange={(e) => setFormData({...formData, size: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all"
                >
                  <option>5x5 Locker</option>
                  <option>5x10 Unit</option>
                  <option>10x10 Apartment</option>
                  <option>10x15 House Starter</option>
                  <option>10x20 Full Household</option>
                  <option>Vehicle Storage</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us what you're storing or any specific needs..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className="w-full bg-red-600 text-white font-bold py-4 rounded-xl shadow-xl hover:bg-red-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'idle' && <><Send className="h-5 w-5" /> Send Quote Request</>}
                {status === 'sending' && <span className="animate-pulse">Sending...</span>}
                {status === 'sent' && <>Successfully Sent!</>}
              </button>
              <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest">Secured by reCAPTCHA v3</p>
            </form>

            <div className="mt-12 pt-12 border-t border-slate-100">
               <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Newsletter Signup</h4>
               <div className="flex gap-2">
                 <input type="email" placeholder="email@address.com" className="bg-slate-50 border border-slate-200 rounded-lg px-4 flex-grow text-sm focus:outline-none" />
                 <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

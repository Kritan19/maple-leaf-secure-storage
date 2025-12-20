
import React from 'react';
import { Users, ShieldCheck, Heart, MapPin } from 'lucide-react';
import { IMAGES } from '../constants';

const About = () => {
  return (
    <div className="pb-24">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Proudly Canadian, <br/>Proudly Local</h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Maple Leaf Secure Storage is a family-run business serving Carleton Place, Almonte, and the greater Ottawa area since 2008. We started with a simple mission: to provide our neighbors with a safe, honest, and accessible place to store their lives.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We understand Canadian seasons – that's why we offer heated options for sensitive items and ample space for the ATVs, boats, and RVs that define our weekends. Committed to our community, we support local hockey teams, food drives, and local events.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src={IMAGES.aboutBuilding} 
                  alt="Modern facility exterior" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-red-100 rounded-3xl z-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
                <Heart className="h-7 w-7" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Community Focus</h3>
              <p className="text-slate-600 leading-relaxed">From sponsoring local hockey teams to organizing winter clothing drives, we are part of the Carleton Place fabric.</p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="h-7 w-7" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Uncompromising Security</h3>
              <p className="text-slate-600 leading-relaxed">Your property is monitored 24/7 by high-def cameras. Fully fenced, well-lit, and individually alarmed units.</p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
                <Users className="h-7 w-7" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Family Values</h3>
              <p className="text-slate-600 leading-relaxed">No automated call centers here. You'll deal directly with our owners and friendly onsite staff every time.</p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
                <MapPin className="h-7 w-7" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Accessible Convenience</h3>
              <p className="text-slate-600 leading-relaxed">Located directly on Highway 7 for easy access. Wide driveways for trucks and trailers, and month-to-month leases.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-12">Meet the Team</h2>
          <div className="max-w-3xl mx-auto">
            <img 
              src={IMAGES.teamPhoto} 
              alt="Approachable family team" 
              className="rounded-3xl shadow-xl mb-8 w-full"
            />
            <p className="text-slate-600 italic">"We don't just rent storage units; we protect your memories and your livelihood. Come by for a tour and see the Maple Leaf difference."</p>
            <p className="mt-4 font-bold text-slate-900">— The Maple Leaf Family</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

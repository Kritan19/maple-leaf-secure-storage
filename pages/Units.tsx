
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info, Thermometer } from 'lucide-react';
import { UNIT_SIZES } from '../constants';

const Units = () => {
  const categories = ['Small', 'Medium', 'Large', 'Vehicle'];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Flexible Storage Options</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Prices per month in Canadian Dollars (CAD). HST extra. <br/>
            <span className="font-semibold text-slate-700">Month-to-month rentals – no long-term commitment required.</span>
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-widest">{cat} Units</h2>
              <div className="h-px bg-slate-200 flex-grow" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {UNIT_SIZES.filter(u => u.category === cat).map((unit) => (
                <div key={unit.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={unit.imageUrl} 
                      alt={unit.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                      {unit.dimensions}
                    </div>
                  </div>
                  <div className="p-8 flex-grow space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">{unit.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed min-h-[3rem]">{unit.description}</p>
                    <div className="pt-4 flex items-end gap-1">
                      <span className="text-3xl font-black text-red-600">${unit.price}</span>
                      <span className="text-slate-400 text-sm pb-1">/mo</span>
                    </div>
                  </div>
                  <div className="px-8 pb-8">
                    <Link 
                      to="/contact" 
                      className="block w-full text-center bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-colors"
                    >
                      Reserve Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Thermometer className="h-4 w-4" /> Optional Feature
            </div>
            <h2 className="text-3xl font-extrabold mb-6">Climate Controlled Storage</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Heated units are available for an additional $20/month. Perfect for sensitive items like electronics, musical instruments, fine furniture, and artwork that require stable temperatures.
            </p>
            <ul className="space-y-4">
              {[
                "Discounts for annual prepay (10% off)",
                "No administrative hidden fees",
                "Referral program: Get a month free!",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info className="h-5 w-5 text-red-500" /> Need help choosing?
            </h3>
            <p className="text-slate-400 mb-8">Not sure what size you need? Give us a call or drop by for a tour. We're happy to help you find the most cost-effective solution for your belongings.</p>
            <div className="space-y-4">
              <a href="tel:6135551234" className="block text-center border-2 border-white/20 py-4 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all">
                Call 613-555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Units;

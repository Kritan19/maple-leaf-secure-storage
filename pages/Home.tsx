
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Camera, Truck, Snowflake, ArrowRight, Star } from 'lucide-react';
import { TESTIMONIALS, IMAGES } from '../constants';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
      <Icon className="h-7 w-7 text-slate-400 group-hover:text-red-600 transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const TestimonialSlider = () => {
  const [current, setCurrent] = React.useState(0);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-48 flex flex-col justify-center items-center text-center max-w-2xl mx-auto px-4">
      {TESTIMONIALS.map((t, idx) => (
        <div
          key={t.id}
          className={`absolute transition-all duration-700 transform ${
            idx === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-lg md:text-xl italic text-slate-700 mb-4">"{t.quote}"</p>
          <p className="font-bold text-slate-900 uppercase tracking-widest text-xs">— {t.author}</p>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="space-y-24">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 parallax scale-105"
          style={{ backgroundImage: `url('${IMAGES.heroBackground}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/40 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <LeafIcon className="h-16 w-16 text-red-500 mx-auto mb-8 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Safe, Simple Storage Solutions for <span className="text-red-500 underline decoration-white/30 underline-offset-8">Canadians</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-slate-100 font-light tracking-wide max-w-2xl mx-auto">
            Family-owned and operated since 2008. Secure units for home, business, and recreational needs in Carleton Place, Ontario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/units" 
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-red-900/40 flex items-center justify-center"
            >
              View Units & Pricing <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold transition-all border border-white/30"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs">Our Features</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Engineered for Reliability</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We provide the highest quality storage facilities tailored to the unique demands of the Ontario Valley lifestyle.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={Shield} 
            title="Gated Access" 
            description="Secure perimeter fencing with personalized electronic keypad entry codes for your unit."
          />
          <FeatureCard 
            icon={Camera} 
            title="24/7 Monitoring" 
            description="State-of-the-art high-definition surveillance cameras monitor the grounds around the clock."
          />
          <FeatureCard 
            icon={Truck} 
            title="Drive-Up Units" 
            description="Convenient ground-level units allowing you to park your vehicle directly in front of the door."
          />
          <FeatureCard 
            icon={Snowflake} 
            title="Snow Removal" 
            description="Professional property maintenance ensuring clear access even during the toughest Canadian winters."
          />
        </div>
      </section>

      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-3xl font-extrabold mb-16">Trusted by the Community</h2>
          <TestimonialSlider />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <LeafIcon className="w-64 h-64" />
          </div>
          <h2 className="text-4xl font-extrabold mb-6">Ready to clear some space?</h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">Join hundreds of local families who trust Maple Leaf Secure Storage with their most precious belongings.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-red-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-lg transform hover:scale-105"
          >
            Get a Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
};

const LeafIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2L9.5 7H4L7 11.5L2 15L8 16L7 22L12 18L17 22L16 16L22 15L17 11.5L20 7H14.5L12 2Z" />
    <path d="M12 18V22" />
  </svg>
);

export default Home;

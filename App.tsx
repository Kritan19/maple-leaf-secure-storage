
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Shield, Leaf, Clock } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Units from './pages/Units';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { BUSINESS_INFO } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Units & Pricing', path: '/units' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-red-600" />
              <div>
                <span className="block text-xl font-bold text-slate-900 leading-tight">MAPLE LEAF</span>
                <span className="block text-xs font-semibold tracking-widest text-slate-500 uppercase">Secure Storage</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  location.pathname === link.path ? 'text-red-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-lg font-medium text-slate-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-white">
            <Leaf className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold tracking-tight">Maple Leaf Storage</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Providing clean, secure, and community-focused storage solutions for Carleton Place and the Ottawa Valley since 2008.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Our Facility</Link></li>
            <li><Link to="/units" className="hover:text-white transition-colors">Storage Unit Prices</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Request a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-red-500 flex-shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
              <span>{BUSINESS_INFO.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
              <span>{BUSINESS_INFO.email}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Business Hours</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span>Mon - Fri:</span>
              <span>{BUSINESS_INFO.hours.monFri}</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday:</span>
              <span>{BUSINESS_INFO.hours.sat}</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday:</span>
              <span>{BUSINESS_INFO.hours.sun}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Maple Leaf Secure Storage. All rights reserved. Locally owned in Carleton Place, Ontario.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/units" element={<Units />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

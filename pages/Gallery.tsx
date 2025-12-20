
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Maximize2, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">A Look Inside</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">Take a virtual tour of our clean, secure, and modern Carleton Place storage facility.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id} 
              className="relative group cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col justify-end p-6">
                <Maximize2 className="absolute top-4 right-4 text-white h-6 w-6" />
                <p className="text-white font-bold text-lg">{img.caption}</p>
                <p className="text-white/70 text-sm">Carleton Place, ON</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-red-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-10 w-10" />
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
            alt="Expanded view"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;

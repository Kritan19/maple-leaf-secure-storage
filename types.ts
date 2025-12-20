
export interface UnitSize {
  id: string;
  name: string;
  dimensions: string;
  description: string;
  price: number;
  category: 'Small' | 'Medium' | 'Large' | 'Vehicle';
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

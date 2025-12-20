
import { UnitSize, Testimonial, GalleryImage } from './types';

export const BUSINESS_INFO = {
  name: "Maple Leaf Secure Storage",
  address: "12345 Highway 7, Carleton Place, ON K7C 3P2",
  phone: "613-555-1234",
  email: "info@mapleleafsecurestorage.ca",
  hours: {
    monFri: "8 AM - 6 PM",
    sat: "9 AM - 4 PM",
    sun: "Closed"
  }
};

/**
 * Mapped using the exact filenames visible in your project's images folder.
 */
export const IMAGES = {
  heroBackground: "./images/Gemini_Generated_Image_z66yuez66yuez66y.png",
  aboutBuilding: "./images/Gemini_Generated_Image_3h2th13h2th13h2t.png",
  teamPhoto: "./images/sebastian-herrmann-Vk8NI43e3HM-unsplash.jpg"
};

export const UNIT_SIZES: UnitSize[] = [
  { 
    id: '1', 
    name: 'Micro Locker', 
    dimensions: '5x5', 
    description: 'Ideal for boxes and seasonal gear.', 
    price: 69, 
    category: 'Small', 
    imageUrl: './images/adam-winger--BQBmDlDE70-unsplash.jpg' 
  },
  { 
    id: '2', 
    name: 'Closet Space', 
    dimensions: '5x10', 
    description: 'Perfect for small furniture and snow tires.', 
    price: 99, 
    category: 'Small', 
    imageUrl: './images/adam-winger-FJTz_ASf_BI-unsplash.jpg' 
  },
  { 
    id: '3', 
    name: 'Apartment Size', 
    dimensions: '10x10', 
    description: 'Fits contents of a typical 1-2 bedroom apartment.', 
    price: 139, 
    category: 'Medium', 
    imageUrl: './images/moj-box-Kd-YlHSvS-o-unsplash.jpg' 
  },
  { 
    id: '4', 
    name: 'House Starter', 
    dimensions: '10x15', 
    description: 'Great for family home decluttering.', 
    price: 179, 
    category: 'Medium', 
    imageUrl: './images/aga-adamek-9OfBsfty2x4-unsplash.jpg' 
  },
  { 
    id: '5', 
    name: 'Full Household', 
    dimensions: '10x20', 
    description: 'Large enough for a full household or vehicle.', 
    price: 219, 
    category: 'Large', 
    imageUrl: './images/brian-wangenheim-1Elnip2SeM8-unsplash.jpg' 
  },
  { 
    id: '6', 
    name: 'Enterprise Loft', 
    dimensions: '10x30', 
    description: 'Boats, large equipment, or multiple vehicles.', 
    price: 289, 
    category: 'Large', 
    imageUrl: './images/declan-sun-6N6EXN0x_E4-unsplash.jpg' 
  },
  { 
    id: '7', 
    name: 'Open Air Lot', 
    dimensions: 'Vehicle', 
    description: 'Uncovered parking for cars or trailers.', 
    price: 59, 
    category: 'Vehicle', 
    imageUrl: './images/dominik-klos-Xut2TLI4KO4-unsplash.jpg' 
  },
  { 
    id: '8', 
    name: 'Premium Covered', 
    dimensions: 'Vehicle', 
    description: 'Protected vehicle storage with drive-up access.', 
    price: 99, 
    category: 'Vehicle', 
    imageUrl: './images/mak-bu0jpv5d7co-unsplash.jpg' 
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, quote: "Perfect for storing our canoe and snowmobiles – great local service!", author: "The Robertson Family, Ottawa" },
  { id: 2, quote: "Cleanest facility I've ever used. The drive-up access made our winter move so much easier.", author: "James M., Carleton Place" },
  { id: 3, quote: "Safe, secure, and very professional. Highly recommend for seasonal tire storage.", author: "Sarah L., Almonte" },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: './images/joshua-coleman-ZVkDlrXGMdw-unsplash.jpg', alt: 'Facility lighting', caption: 'Well-lit and accessible 24/7 with total peace of mind.' },
  { id: 2, url: './images/kenny--ZleE9ovqXI-unsplash.jpg', alt: 'Interior shelving', caption: 'Custom shelving options for maximum organization.' },
  { id: 3, url: './images/infinity-movers-cape-coral-Jv1swO4FghI-unsplash.jpg', alt: 'Moving truck', caption: 'Perfect for transit and household relocations.' },
  { id: 4, url: './images/markus-winkler--BXq7U-Yuxw-unsplash.jpg', alt: 'Secured unit', caption: 'Advanced gated security and perimeter monitoring.' },
  { id: 5, url: './images/raphael-vpvRILOw2Kg-unsplash.jpg', alt: 'Clean hallways', caption: 'Spotless corridors with high-security units.' },
  { id: 6, url: './images/roger-starnes-sr-jkrjzpf_I_E-unsplash.jpg', alt: 'Warehouse exterior', caption: 'Professional commercial-grade storage facilities.' },
  { id: 7, url: './images/wonderlane-OFfEOclFilc-unsplash.jpg', alt: 'Secured Doors', caption: 'Industrial-strength security for every unit.' },
  { id: 8, url: './images/yujie-han-5e88u6DZCbo-unsplash.jpg', alt: 'Loading Bay', caption: 'Heavy-duty loading areas for business inventory.' },
];

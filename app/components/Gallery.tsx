'use client';

import { useState } from 'react';
import { GALLERY } from '../config/constants';
import Image from 'next/image';

type TGalleryCategory = 'all' | 'training' | 'events' | 'competitions' | 'graduation';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<TGalleryCategory>('all');

  const categories: { id: TGalleryCategory; name: string }[] = [
    { id: 'all', name: 'All' },
    { id: 'training', name: 'Training' },
    { id: 'events', name: 'Events' },
    { id: 'competitions', name: 'Competitions' },
    { id: 'graduation', name: 'Graduation' },
  ];

  const filteredImages = GALLERY.filter(
    (image) => selectedCategory === 'all' || image.category === selectedCategory
  );

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a look at our training sessions, events, competitions, and graduation ceremonies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <span className="text-sm bg-red-600 px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 
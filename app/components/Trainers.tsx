'use client';

import { TRAINERS } from '../config/constants';
import Image from 'next/image';

const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Expert Trainers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from our experienced and certified instructors who are dedicated to your growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 relative h-48 md:h-auto md:w-48">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {trainer.name}
                    </h3>
                    <span className="ml-2 px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full">
                      {trainer.rank}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {trainer.experience} Experience
                  </div>

                  <p className="text-gray-600 mb-4">{trainer.bio}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Specializations:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialization.map((spec, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm text-red-600 bg-red-50 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
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

export default Trainers; 
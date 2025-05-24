'use client';

import Link from 'next/link';
import { INSTITUTE_INFO } from '../config/constants';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center md:text-left max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master the Art of Shotokan Karate
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {INSTITUTE_INFO.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#courses"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
              >
                Explore Courses
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Affiliation Badge */}
            <div className="mt-12 flex items-center justify-center md:justify-start">
              <div className="bg-white bg-opacity-90 rounded-lg p-4 flex items-center space-x-4">
                <img
                  src={INSTITUTE_INFO.affiliation.logo}
                  alt={INSTITUTE_INFO.affiliation.name}
                  className="h-12 w-auto"
                />
                <div className="text-left">
                  <p className="text-sm text-gray-600">Affiliated with</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {INSTITUTE_INFO.affiliation.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
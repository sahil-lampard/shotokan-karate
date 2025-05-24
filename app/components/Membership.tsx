'use client';

import { MEMBERSHIP_PLANS } from '../config/constants';
import Link from 'next/link';

const Membership = () => {
  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Membership Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan that fits your training goals and schedule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden ${
                plan.recommended
                  ? 'border-2 border-red-600 shadow-xl'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Recommended
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600"> / {plan.duration}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-red-600 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={`block w-full text-center py-3 px-4 rounded-lg text-white font-medium transition-colors duration-200 ${
                    plan.recommended
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom plan? Contact us for special arrangements
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Membership; 
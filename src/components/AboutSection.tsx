"use client"
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pink statistics bar */}
        <div className="bg-[#FF6B6B] text-white rounded-xl p-6 sm:p-8 mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 sm:space-x-4">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">200+</h2>
              <p className="text-sm">Schools partnered across India</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">10k+</h2>
              <p className="text-sm">Students benefited from services</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">99.9%</h2>
              <p className="text-sm">Customer satisfaction rate achieved</p>
            </div>
          </div>
        </div>

        {/* Rest of the component content */}
        <h2 className="text-3xl font-bold text-center mb-12">Unlock Mental Well-being</h2>

        <div className="grid grid-cols-2 gap-x-16 gap-y-12 max-w-4xl mx-auto">
          <div className="flex items-start">
            <div className="bg-[#FF4757] p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Expert Team</h3>
              <p className="text-gray-600">Our team comprises mental health experts.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-[#2E86DE] p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Custom Programs</h3>
              <p className="text-gray-600">Tailored to meet each school's needs.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-[#20BF6B] p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support available.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-[#FFA502] p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Innovative Therapies</h3>
              <p className="text-gray-600">Creative approaches to mental health.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#8B1A1A] text-white px-6 py-3 rounded-md hover:bg-[#7A1717]">
            Discover More Benefits
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
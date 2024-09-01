"use client"

import Image from 'next/image';

export default function ContactUs() {
  return (
    <section className="bg-[#FFF9F5] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 lg:ml-6">
            <h2 className="text-4xl font-bold mb-12 text-gray-800">Contact Us For Mental Health Solutions</h2>
            <div className="flex items-center mt-20 mb-8">
            <div className="bg-[#8B1A1A] rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </div>
            <span className="text-gray-600 text-lg">1800900900</span>
            </div>
            <div className="flex items-center mb-12">
            <div className="bg-[#8B1A1A] rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
            <span className="text-gray-600 text-lg">123 Wellness Ave, Edu City</span>
            </div>
            
            <div className="mt-auto pt-12">
              <p className="text-gray-600 italic mb-4">Bit of Wellness provided unparalleled support.</p>
              <div className="flex items-center">
                <div className="w-8 h-8 mr-3 flex-shrink-0 overflow-hidden rounded-full">
                  <Image src="/images/1.jpg" alt="Kirti Maheshwari" width={32} height={32} className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">Kirti Maheshwari</p>
                  <p className="text-xs text-gray-600">Program Director</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 bg-white p-6 rounded-lg shadow-lg lg:mr-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Reach Out Today</h3>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Full Name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Phone Number" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Email" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                  <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Subject" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#8B1A1A] text-white py-2 px-4 rounded-md hover:bg-[#7A1717] transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
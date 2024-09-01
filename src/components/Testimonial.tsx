"use client"

import Image from 'next/image';

const testimonials = [
  { name: 'Aditi Bansal', role: 'School Principal', comment: "Big support for our school's students.", image: '/images/1.jpg' },
  { name: 'Ankit Kumar', role: 'School Principal', comment: 'Highly recommend their dedicated team.', image: '/images/1.jpg' },
  { name: 'Neha Sharma', role: 'Teacher', comment: 'Great resources for student development.', image: '/images/1.jpg' },
  { name: 'Raj Patel', role: 'Parent', comment: "Big support for our school's students.", image: '/images/1.jpg' },
  { name: 'Priya Malhotra', role: 'Parent', comment: 'Transformative support for our children.', image: '/images/1.jpg' },
  { name: 'Amit Khanna', role: 'Counselor', comment: 'Empowers us to help students better.', image: '/images/1.jpg' },
  { name: 'Sneha Mehta', role: 'Teacher', comment: 'Essential training for managing student stress.', image: '/images/1.jpg' },
  { name: 'Rohan Verma', role: 'Parent', comment: 'Kids are happier and more focused.', image: '/images/1.jpg' },
];

const Testimonial = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Hear from Our Users</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-md mx-auto w-full max-w-sm ${index > 2 ? 'hidden sm:block' : ''}`}>
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 mr-3 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-xs sm:text-sm">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 text-xs">{testimonial.comment}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-[#8B1A1A] text-white px-8 py-3 rounded-md hover:bg-[#7A1717] text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105">
            Join Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
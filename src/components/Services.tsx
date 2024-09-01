"use client"

import Image from 'next/image';

const Services = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF9F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features of Our Services</h2>
        
        <div className="space-y-16">
          {/* First Service */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">Personalized Consultation Tailored For Each School's Needs</h3>
              <p className="text-gray-600">Our expert consultants work with schools to provide personalized mental health support tailored to the needs of students, teachers, and parents.</p>
              <button className="bg-[#8B1A1A] text-white px-6 py-2 rounded hover:bg-[#7A1717]">
                Schedule a Consultation
              </button>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/consultation-image.jpg" 
                alt="Consultation" 
                width={500} 
                height={300} 
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Second Service */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">Comprehensive Training Programs For Holistic Development</h3>
              <p className="text-gray-600">Our training programs equip educators with essential skills to support mental well-being in the school community.</p>
              <button className="bg-[#8B1A1A] text-white px-6 py-2 rounded hover:bg-[#7A1717]">
                Join a Training Session
              </button>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/training-image.jpg" 
                alt="Training" 
                width={500} 
                height={300} 
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Third Service */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">Personalized Consultation Tailored For Each School's Needs</h3>
              <p className="text-gray-600">Our therapy sessions offer professional mental health support for the entire school community.</p>
              <button className="bg-[#8B1A1A] text-white px-6 py-2 rounded hover:bg-[#7A1717]">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/mindfulness-image.jpg" 
                alt="Mindfulness" 
                width={500} 
                height={300} 
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
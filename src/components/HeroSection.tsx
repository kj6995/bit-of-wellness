"use client"

import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="bg-[#FFF9F5] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Transforming School Mental Health Across India
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Empowering students, educators, and parents through comprehensive mental health services and resources. Explore our programs and make a positive change today.
            </p>
            <button className="bg-[#8B1A1A] text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-[#7A1717] text-lg">
              <span>Free Consultation Now</span>
              <span className="text-xl">→</span>
            </button>
            {/* <div className="flex items-center space-x-4 mt-8">
              <span className="text-[#00B67A] font-semibold">★ Trustpilot</span>
              <span className="text-[#FFA41C]">★★★★★</span>
              <span className="text-gray-600">School Metrics</span>
            </div> */}
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image 
              src="/school-supplies.jpg" 
              alt="School supplies" 
              width={600} 
              height={400} 
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
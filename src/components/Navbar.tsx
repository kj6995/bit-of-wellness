"use client"

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-xl">Bit of Wellness</div>
          <ul className="hidden md:flex space-x-8">
            <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
            <li><Link href="/features" className="hover:text-gray-600">Features</Link></li>
            <li><Link href="/service" className="hover:text-gray-600">Service</Link></li>
            <li><Link href="/testimonial" className="hover:text-gray-600">Testimonial</Link></li>
            <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
          </ul>
          <div className="flex space-x-4">
            <button className="text-black hover:text-gray-600">Programs</button>
            <button className="bg-[#8B1A1A] text-white px-4 py-2 rounded hover:bg-[#7A1717]">Consultation</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
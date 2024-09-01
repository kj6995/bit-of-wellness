"use client"

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const menuItems = ['About', 'Service', 'Contact'];
const serviceItems = ['Health Promotion', 'Disease Prevention', 'Diagnosis & Treatment', 'Rehabilitation'];

const SocialIcon = ({ href, icon }: { href: string; icon: any }) => (
  <Link href={href} className="bg-[#8B1A1A] text-white p-2 rounded-full hover:bg-[#7A1717] transition duration-300 flex items-center justify-center w-8 h-8">
    <FontAwesomeIcon icon={icon} className="w-4 h-4" />
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Bit of Wellness</h2>
          </div>
          <div>
            <h3 className="font-semibold mb-2">MENU</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item}><Link href="#" className="hover:underline">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">SERVICE</h3>
            <ul className="space-y-2">
              {serviceItems.map((item) => (
                <li key={item}><Link href="#" className="hover:underline">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4 items-start">
            <SocialIcon href="#" icon={faFacebookF} />
            <SocialIcon href="#" icon={faTwitter} />
            <SocialIcon href="#" icon={faInstagram} />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p>&copy;2024 Bit of Wellness. All rights reserved</p>
          <div className="space-x-4">
            <Link href="#" className="hover:underline">Terms of Use</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
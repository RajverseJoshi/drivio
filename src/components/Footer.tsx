import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy pt-20 pb-10 border-t-4 border-primary mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center mb-6 hover:opacity-80 transition-opacity inline-block">
              <img src="/logo.png" alt="DRIVIO Logo" className="h-20 w-auto object-contain bg-white/5 p-2 rounded-xl" />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Premium self-drive car rentals offering you the ultimate freedom on the road with transparent pricing and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Policies</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white mb-1">Call Us 24/7</span>
                  <span>85030082223</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 mt-4">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white mb-1">Visit Website</span>
                  <span>drivio.in</span>
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DRIVIO. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Facebook</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

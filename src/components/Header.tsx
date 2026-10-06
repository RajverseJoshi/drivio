import React from 'react';
import { Phone, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 z-40 w-full bg-[#f4f4f5] border-b border-gray-200 py-5 px-6 md:px-12 flex items-center justify-between shadow-sm transition-all">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
        <img 
          src="/logo.png" 
          alt="DRIVIO Logo" 
          className="h-16 w-auto object-contain mix-blend-multiply scale-[1.15] origin-left" 
        />
      </Link>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex items-center gap-12 font-medium text-gray-600">
        <Link href="/" className="hover:text-primary transition-colors font-semibold text-navy">Home</Link>
        <Link href="/faq" className="hover:text-primary transition-colors font-semibold text-navy">FAQs</Link>
        <Link href="/#contact" className="hover:text-primary transition-colors font-semibold text-navy">Contact</Link>
      </nav>

      {/* Right: Contact details + CTA */}
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-2 text-navy font-semibold">
          <Phone size={18} className="text-primary" />
          <span>85030082223</span>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md shadow-primary/20 flex items-center gap-2 whitespace-nowrap">
          <User size={18} />
          <span className="hidden sm:inline">Sign In / Sign Up</span>
        </button>
      </div>
    </header>
  );
}

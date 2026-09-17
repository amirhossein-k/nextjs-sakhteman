'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent group-hover:from-orange-500 transition-all">
                سازه‌سازان مدرن
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">صفحه اصلی</Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">خدمات</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">نمونه‌کارها</Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">درباره ما</Link>
            <Link href="/contact" className="bg-orange-600 text-white px-6 py-2.5 rounded-lg hover:bg-orange-700 shadow-md hover:shadow-lg transition-all">
              استعلام قیمت
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
          <Link href="/" className="block text-gray-700 py-2">صفحه اصلی</Link>
          <Link href="/services" className="block text-gray-700 py-2">خدمات</Link>
          <Link href="/portfolio" className="block text-gray-700 py-2">نمونه‌کارها</Link>
          <Link href="/about" className="block text-gray-700 py-2">درباره ما</Link>
          <Link href="/contact" className="block bg-orange-600 text-white text-center px-6 py-2.5 rounded-lg">استعلام قیمت</Link>
        </div>
      )}
    </nav>
  );
}

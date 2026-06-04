"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="relative z-50">
      <div className="mx-4 sm:mx-6 lg:mx-8 py-6">
        <div className="flex items-center justify-between">
          
          {/* Logo Section - Bada aur Valuable Look */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo.png" 
              alt="AdsGuruAI Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Links Section - Bina Card ke Clean Layout */}
          <div className="flex items-center gap-6 ml-auto">
            <Link 
              href="#features" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/login" 
              className="text-sm font-medium px-5 py-2.5 rounded-full border border-gray-600 hover:border-white text-white transition-all bg-white/5 hover:bg-white/10 shadow-sm"
            >
              Login
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

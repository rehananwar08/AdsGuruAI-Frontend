"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="relative z-50">
      <div className="mx-4 sm:mx-6 lg:mx-8 mt-4">
        <div className="glass rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Far Left */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
     <img src="/logo.png" alt="AdsGuruAI Logo" className="h-14 md:h-16 w-auto object-contain" />
            </Link>

            {/* Navigation Links - Far Right, Grouped Together */}
            <div className="flex items-center gap-6 ml-auto">
              <Link
                href="#features"
                className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/dashboard"
                className="glass-gold px-5 py-2.5 rounded-xl text-sm font-semibold text-white hover:bg-amber-500/20 transition-all"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

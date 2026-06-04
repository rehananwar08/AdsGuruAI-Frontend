"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A] p-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-6">
          Welcome to Dashboard! 🚀
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
          Bhai, aapka Firebase Backend aur Login system 100% perfectly kaam kar raha hai. Yeh aapka secure area hai!
        </p>
        
        <Link 
          href="/" 
          className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-gray-700 backdrop-blur-md transition-all hover:scale-105"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

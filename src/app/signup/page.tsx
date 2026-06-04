"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Signup Card */}
      <div className="w-full max-w-md p-10 bg-white/5 border border-gray-800 rounded-3xl shadow-2xl backdrop-blur-xl relative z-10 my-8">
        
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="AdsGuruAI Logo" className="h-12 mx-auto mb-6 object-contain hover:scale-105 transition-transform" />
          </Link>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">Create Account</h2>
          <p className="text-gray-400">Join AdsGuruAI to scale your campaigns</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("🚀 Thank you for choosing AdsGuruAI! Due to high demand, our automated registration is rolling out in phases. Our onboarding team will contact you on your email shortly to setup your dashboard."); }}>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Rehan Anwar"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition placeholder-gray-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="rehan@adsguruai.in"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition placeholder-gray-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition placeholder-gray-600"
                required
              />
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-4 mt-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl text-gray-900 font-bold hover:from-amber-500 hover:to-amber-700 hover:scale-[1.01] transition active:scale-95 shadow-lg shadow-amber-500/20"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account? {' '}
          <Link href="/login" className="font-semibold text-amber-400 hover:text-amber-300">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

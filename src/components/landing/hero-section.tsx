"use client";

import { TrendingUp, Sparkles, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="aurora-orb aurora-orb-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-600/20 blur-3xl" />
        <div className="aurora-orb aurora-orb-2 absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-400/15 blur-3xl" />
        <div className="aurora-orb aurora-orb-3 absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full -mt-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-gray-300">AI-Powered Ads Management</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              Ads mein{" "}
              <span className="gradient-text">AI ka jadoo</span>,{" "}
              <br className="hidden sm:block" />
              Leads par aapka kaaboo.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 text-pretty">
              Paisa bacha, ROI badha. AI se Google Ads ko master bana — India ke liye, aapki bhasha mein.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/dashboard"
                className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#0F172A] transition-all"
              >
                <Play className="w-5 h-5" />
                Start Free Trial
              </Link>
              <Link
                href="#pricing"
                className="glass inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 border-2 border-[#0F172A] flex items-center justify-center text-xs font-bold text-[#0F172A]"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm">500+ Active Users</span>
              </div>
              <div className="h-4 w-px bg-gray-700 hidden sm:block" />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-400 ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Card */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Floating Card */}
            <div className="floating-card glass-gold rounded-2xl p-6 w-80 transform -rotate-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">Campaign Performance</span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">CTR</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">15%</span>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                </div>
                
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="glass rounded-lg p-3">
                    <p className="text-xs text-gray-400">Impressions</p>
                    <p className="text-lg font-bold text-white">125K</p>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <p className="text-xs text-gray-400">Conversions</p>
                    <p className="text-lg font-bold text-white">3.2K</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 glass rounded-xl p-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium text-white">AI Optimized</span>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -left-5 glass rounded-xl p-4" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '-2s' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-sm font-medium text-white">Live Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
}

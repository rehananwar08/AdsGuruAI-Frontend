"use client";

import React from 'react';
import { 
  Sparkles, CheckCircle2, Zap, Shield, HelpCircle, 
  Layers, MessageSquare, Mic, Search, Share2, 
  TrendingUp, Languages, Lock, BarChart3, LineChart, 
  Clock, Wallet, FileCode, SearchCheck, Globe, 
  Users, Headphones, Calendar, ChevronRight
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-orange-500 selection:text-white">
      
      {/* 1. Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-slate-900">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-tr from-orange-600 to-amber-500 p-2 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
            AdsGuruAI
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-orange-500 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-orange-500 transition-colors">Pricing</a>
          <button className="bg-slate-900 border border-slate-800 hover:border-orange-500/50 text-white px-5 py-2 rounded-xl transition-all duration-300">
            Login
          </button>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 text-center">
        {/* AI Badge - Tighter top spacing */}
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full mb-8 hover:border-amber-500/30 transition-colors">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
            AI-Powered Ads Management
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight max-w-5xl mx-auto leading-[1.15] mb-8">
          Ads mein <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">AI ka jadoo</span>,<br />
          Leads par aapka kaaboo
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Paisa bacha, ROI badha. AI se Google Ads ko master bana — India ke liye, aapki bhasha mein.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#pricing" className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-orange-950/20 hover:scale-[1.02] transition-all duration-300 text-center">
            Get Started Free
          </a>
          <button className="w-full sm:w-auto bg-slate-900 border border-slate-800 hover:bg-slate-900/60 font-semibold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 transition-all">
            <span>Watch Demo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3. Pricing Section (Anchor Strategy) */}
        <section id="pricing" className="pt-12 scroll-mt-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Simple Pricing, Massive ROI
            </h2>
            <p className="text-slate-400">
              Choose the plan that fits your ambition. Scale seamlessly as you grow.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto text-left">
            
            {/* CARD 1: FREE PLAN */}
            <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-sm relative transition-all duration-300 hover:border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-2">Free Plan</h3>
                <div className="flex items-baseline my-4">
                  <span className="text-4xl font-black text-white">₹0</span>
                  <span className="text-slate-500 text-sm ml-2">/month</span>
                </div>
                <div className="h-px bg-slate-800/60 my-6" />
                <ul className="space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Ad Copy Generator</strong> — RSA headlines & descriptions</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Ad Extensions</strong> — Callouts & Sitelinks AI se</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Voice Prompts</strong> — Bol ke Ad Banao (Hindi/Regional)</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Keyword Research</strong> — Intent & negative keywords</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>WhatsApp Integration</strong> — Leads direct WhatsApp pe</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Quality Score Analyzer</strong> — Predict & lower CPC</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Referral Program</strong> — Refer karo, ₹200 kamao</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>6 Indian Languages</strong> — Support built-in</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Email OTP Verification</strong> — Secure access</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Visual Dashboard</strong> — Usage graphics tracking</span></li>
                </ul>
              </div>
              <button className="w-full mt-8 bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-xl transition-colors">
                Start Free
              </button>
            </div>

            {/* CARD 2: AGENCY PLAN (CENTER / BEST VALUE) */}
            <div className="bg-slate-900 border-2 border-orange-500 rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-orange-950/20 lg:-translate-y-4 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                Best Value
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Agency Plan</h3>
                <div className="flex items-baseline my-4">
                  <span className="text-5xl font-black text-white">₹1999</span>
                  <span className="text-slate-400 text-sm ml-2">/month</span>
                </div>
                {/* Inclusion Statement */}
                <p className="text-xs font-bold text-orange-400 uppercase tracking-wide bg-orange-950/40 border border-orange-900/60 px-3 py-1.5 rounded-lg inline-block my-2">
                  ✓ Everything in Free & Pro, plus:
                </p>
                <div className="h-px bg-slate-800 my-4" />
                <ul className="space-y-3.5 text-sm text-slate-200">
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Custom Audience</strong> — In-market & Persona Builder</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Custom Domain</strong> — Host on client URLs</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Click Fraud Alert</strong> — Basic bot IP detection</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>AI Expert Chatbot</strong> — 24/7 Gemini Pro Engine</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Client Reports</strong> — Multi-client data panel</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>White-label Export</strong> — Custom PDF with your logo</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>5 Team Seats</strong> — Collab with your crew</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Priority Support</strong> — VIP response speed</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Seasonal Calendar</strong> — Indian Festival Ad Copy tool</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>One-Click Negatives</strong> — Indian negative keyword list</span></li>
                </ul>
              </div>
              <button className="w-full mt-8 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-transform hover:scale-[1.01]">
                Scale Your Agency Now
              </button>
            </div>

            {/* CARD 3: PRO PLAN */}
            <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-sm relative transition-all duration-300 hover:border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-2">Pro Plan</h3>
                <div className="flex items-baseline my-4">
                  <span className="text-4xl font-black text-white">₹799</span>
                  <span className="text-slate-500 text-sm ml-2">/month</span>
                </div>
                {/* Inclusion Statement */}
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide bg-slate-950/80 px-3 py-1.5 rounded-lg inline-block my-2">
                  ✓ Everything in Free, plus:
                </p>
                <div className="h-px bg-slate-800/60 my-4" />
                <ul className="space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>PMax Asset Creator</strong> — Text + Image ideas 1-click mein</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Smart Bidding Advisor</strong> — Max Clicks vs CPA advisor</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Google Ads Connect</strong> — Secure real account OAuth</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Live Dashboard</strong> — Beautiful animated charts</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Landing Page Builder</strong> — AI Zero-coding creator</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Competitor Spy Tool</strong> — Track market opponents</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>GTM Script Generator</strong> — No-code conversion tags</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Auto Privacy & Terms</strong> — Stop accounts ban</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>A/B Testing Tracker</strong> — Compare ads and find winners</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Monthly Auto Reports</strong> — Automated updates via Email</span></li>
                </ul>
              </div>
              <button className="w-full mt-8 bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-xl transition-colors">
                Upgrade to Pro
              </button>
            </div>

          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} AdsGuruAI. Built for India. All rights reserved.</p>
      </footer>
    </div>
  );
}

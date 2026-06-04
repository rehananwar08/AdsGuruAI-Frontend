"use client";

import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] scroll-mt-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Simple Pricing, Massive ROI
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Choose the plan that fits your ambition. Scale seamlessly as your business grows.
        </p>
      </div>

      {/* Pricing Grid - 3 Cards Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto text-left">
        
        {/* 1. FREE PLAN CARD */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-slate-700">
          <div>
            <h3 className="text-xl font-bold text-slate-200 mb-2">Free Plan</h3>
            <div className="flex items-baseline my-4">
              <span className="text-4xl font-black text-white">₹0</span>
              <span className="text-slate-500 text-sm ml-2">/month</span>
            </div>
            <div className="h-px bg-slate-800/60 my-6" />
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Ad Copy Generator</strong> — RSA headlines + descriptions AI se.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Ad Extensions Generator</strong> — Callouts, Sitelinks, aur Snippets AI se banayein CPC kam karne ke liye.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Voice Prompts (Bol ke Ad Banao)</strong> — Mic on karo aur Hindi/Regional language mein AI ko command do.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Keyword Research</strong> — High intent keywords, negative keywords.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>WhatsApp Lead Integration</strong> — Leads seedha WhatsApp pe.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Quality Score Analyzer</strong> — Score predict karo, CPC kam karo.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Referral Program</strong> — Dosto ko refer karo, ₹200 kamao.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>6 Indian Languages</strong> — Hindi, English, Tamil, Telugu, Kannada, Malayalam.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Email OTP Verification</strong> — Secure login.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Visual Dashboard</strong> — Usage tracking attractive graphs ke sath.</span></li>
            </ul>
          </div>
          <button className="w-full mt-8 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors">
            Start Free
          </button>
        </div>

        {/* 2. AGENCY PLAN CARD (CENTER / HIGHLIGHTED) */}
        <div className="bg-slate-900 border-2 border-orange-500 rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-orange-950/20 lg:-translate-y-4 transition-all duration-300">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-white animate-pulse" />
            <span>Best Value</span>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-2">Agency Plan</h3>
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
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Custom Audience & Persona Builder</strong> — High-converting In-market aur Affinity audiences ki deep targeting list.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Custom Domain Setup</strong> — Apne landing pages ko client ke URL par host karein.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Basic Click Fraud Alert</strong> — IP analysis jo alert de agar ads par bots aa rahe hain.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>AI Expert Chatbot</strong> — 24/7 Google Ads expert (Powered by Gemini 3.5 Pro).</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Client Reports Export</strong> — Multiple clients ka data manage karein.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>White-label PDF Export</strong> — Apne brand/agency name aur logo ke sath report.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>5 Team Seats</strong> — Apni team ko invite karein.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Priority Support</strong> — Fastest customer service.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>Festival & Seasonal Campaign Calendar</strong> — Diwali, Eid, Holi ke liye special ad copies.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> <span><strong>One-Click Indian Negative Keyword List</strong> — Paisa bachane ke liye standard pre-made list.</span></li>
            </ul>
          </div>
          <button className="w-full mt-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black tracking-wider py-4 px-4 rounded-xl shadow-lg uppercase transition-transform hover:scale-[1.01]">
            UNLOCK VIP POWER
          </button>
        </div>

        {/* 3. PRO PLAN CARD */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-slate-700">
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
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Performance Max (PMax) Asset Creator</strong> — Text aur AI image ideas.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Smart Bidding Strategy Advisor</strong> — Max Clicks vs Target CPA confusion door.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Smart Ad Scheduling</strong> — Budget bachane ke liye days suggestion.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Budget Planner</strong> — ₹ ke hisaab se smart campaign plan.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Conversion Tracking / GTM Generator</strong> — Zero-coding script generator.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Ad Performance Analyzer</strong> — AI se diagnosis + fix.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>History & Export</strong> — Last 30 days ka record.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Landing Page Builder</strong> — AI se zero coding mein page banao.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Landing Page Leads Dashboard</strong> — Leads track karo visual charts ke sath.</span></li>
              <li className="flex items-start space-x-3"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> <span><strong>Google Ads Connect</strong> — OAuth se real account jodo.</span></li>
            </ul>
          </div>
          <button className="w-full mt-8 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors">
            Upgrade to Pro
          </button>
        </div>

      </div>
    </section>
  );
}

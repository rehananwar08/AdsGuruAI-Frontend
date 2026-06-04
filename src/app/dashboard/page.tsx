"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Tabs: overview ya billing
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center text-amber-500">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-amber-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-4 font-medium tracking-widest text-sm uppercase text-gray-300">Loading Workspace...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#0F172A] text-gray-200 font-sans selection:bg-amber-500/30 overflow-hidden">
      
      {/* 📌 SIDEBAR */}
      <aside className="w-64 bg-[#0A1122]/80 border-r border-white/5 flex-col justify-between hidden lg:flex backdrop-blur-2xl relative z-20">
        <div>
          <div className="h-20 flex items-center px-8 border-b border-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="AdsGuruAI" className="h-7 object-contain" />
          </div>
          
          <nav className="p-4 space-y-2 mt-4">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Main Menu</p>
            
            <button 
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === "overview" 
                ? "bg-gradient-to-r from-amber-500/10 to-transparent text-amber-500 border-l-2 border-amber-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" 
                : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              Dashboard
            </button>
            
            <button 
              onClick={() => setActiveTab("billing")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === "billing" 
                ? "bg-gradient-to-r from-amber-500/10 to-transparent text-amber-500 border-l-2 border-amber-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" 
                : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              Billing & Plans
            </button>
          </nav>
        </div>

        <div className="p-4 mb-4">
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-900/10 border border-amber-500/20 p-4 rounded-2xl text-center">
            <h4 className="text-amber-500 font-bold mb-1">Free Plan Active</h4>
            <p className="text-xs text-gray-400 mb-3">Upgrade for Google Ads Sync.</p>
            <button 
              onClick={() => setActiveTab("billing")}
              className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-gray-900 text-xs font-bold rounded-lg transition-colors shadow-lg shadow-amber-500/20"
            >
              Upgrade Now
            </button>
          </div>
          <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* 📌 MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col relative h-screen overflow-y-auto z-10">
        
        {/* Desi-Tech Elite Holographic Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

        {/* 📌 TOP NAV */}
        <header className="h-20 flex items-center justify-between px-8 bg-white/[0.02] border-b border-white/5 backdrop-blur-md sticky top-0 z-30">
          <div className="relative w-96 hidden md:block">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search AI campaigns..." className="w-full bg-[#0A1122] border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-amber-500/50 text-white placeholder-gray-500" />
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold shadow-lg shadow-amber-500/20 border border-white/10">
                {user?.displayName ? user.displayName.charAt(0).toUpperCase() : "A"}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-white">{user?.displayName || "AdsGuru User"}</p>
                <p className="text-xs text-amber-500">Free Plan</p>
              </div>
            </div>
          </div>
        </header>

        {/* 📌 TAB: OVERVIEW (Fixed Analytics Lock Overlay) */}
        {activeTab === "overview" && (
          <div className="p-8 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Workspace Overview</h1>
                <p className="text-gray-400 mt-1">AI dashboard for Indian marketers.</p>
              </div>
              <button 
                onClick={() => setActiveTab("billing")}
                className="group relative inline-flex items-center justify-center gap-2 bg-amber-500 text-gray-900 px-6 py-3 rounded-xl font-bold transition-all hover:bg-amber-400 hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                + Create AI Campaign
              </button>
            </div>

            {/* FIXED UI: Relative Container for Stats and Overlay */}
            <div className="relative mb-8 rounded-2xl overflow-hidden">
              
              {/* The Lock Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0F172A]/70 backdrop-blur-md border border-white/10">
                 <svg className="w-12 h-12 text-amber-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                 <h3 className="text-white font-bold text-xl mb-2">Live Analytics Locked</h3>
                 <p className="text-gray-400 text-sm mb-4 max-w-md text-center">Sync your Google Ads account and view real-time ROI, CPA, and Spend directly in AdsGuruAI.</p>
                 <button onClick={() => setActiveTab("billing")} className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white border border-amber-500/50 rounded-xl font-bold hover:scale-105 transition shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                   Unlock with Pro Plan
                 </button>
              </div>

              {/* Dummy Stats Grid (Blurred behind the lock) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-30 pointer-events-none p-1">
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <p className="text-gray-400 text-sm font-medium mb-1">Total Ad Spend</p>
                  <h3 className="text-3xl font-bold text-white mb-2">₹0.00</h3>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <p className="text-gray-400 text-sm font-medium mb-1">Active AI Ads</p>
                  <h3 className="text-3xl font-bold text-white mb-2">0</h3>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <p className="text-gray-400 text-sm font-medium mb-1">AI Credits Left</p>
                  <h3 className="text-3xl font-bold text-amber-500 mb-2">5</h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 📌 TAB: BILLING & PLANS (₹ PRICING & BLUEPRINT FEATURES) */}
        {activeTab === "billing" && (
          <div className="p-8 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
                Paisa bacha, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">ROI badha.</span>
              </h1>
              <p className="text-gray-400 text-lg">AI se Google Ads ko master bana — India ke liye, aapki bhasha mein.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* 1. FREE PLAN */}
              <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl relative backdrop-blur-xl flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Free Plan</h3>
                <p className="text-gray-400 text-sm mb-6">Basic toolkit to test the AI jadoo.</p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">₹0</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    5 AI Requests / month
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Voice Prompts (Bol ke Ad Banao)
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Ad Copy & Extensions Gen
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    WhatsApp Lead Integration
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Supports 6 Indian Languages
                  </li>
                </ul>
                <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold bg-white/5 cursor-not-allowed">
                  Current Plan
                </button>
              </div>

              {/* 2. PRO PLAN (₹799) - Normal Layout Now */}
              <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl relative backdrop-blur-xl flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Pro Plan</h3>
                <p className="text-amber-500/80 text-sm mb-6">For Serious Marketers.</p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">₹799</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Unlimited AI Requests & PMax Asset Creator
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Landing Page Builder & GTM Script Gen
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Google Ads Connect (Live Dashboard)
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Competitor Spy Tool & India Benchmarks
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    B2B GST Invoicing Available
                  </li>
                </ul>
                <button 
                  onClick={() => alert("Razorpay Gateway: ₹799 payment will open here! 🚀")}
                  className="w-full py-4 rounded-xl text-white border border-amber-500/50 font-bold bg-amber-500/10 hover:bg-amber-500/20 transition-all"
                >
                  Upgrade to Pro
                </button>
              </div>

              {/* 3. AGENCY PLAN (MOST POPULAR, ₹1999) - Highlighted Layout */}
              <div className="bg-[#0A1122]/80 border-2 border-amber-500 p-8 rounded-3xl relative backdrop-blur-xl flex flex-col shadow-[0_0_40px_rgba(245,158,11,0.15)] transform md:-translate-y-4">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 to-amber-700"></div>
                <div className="absolute top-4 right-4 bg-amber-500/20 text-amber-500 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Agency Plan</h3>
                <p className="text-gray-300 text-sm mb-6">For marketing teams & agencies.</p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">₹1999</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-sm text-gray-100">
                    <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Everything in Pro + 5 Team Seats
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-100">
                    <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    AI Expert Chatbot (Gemini 3.5 Pro)
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-100">
                    <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Custom Domains & White-label Reports
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-100">
                    <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Custom Audience & Persona Builder
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-100">
                    <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Basic Click Fraud Alert & Priority Support
                  </li>
                </ul>
                <button 
                   onClick={() => alert("Razorpay Gateway: ₹1999 payment will open here! 🚀")}
                   className="w-full py-4 rounded-xl text-gray-900 font-bold bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-[1.02]"
                >
                  Get Agency Plan
                </button>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}

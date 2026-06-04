"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Naya feature: Tabs ke beech switch karne ke liye (Overview ya Billing)
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
      <div className="min-h-screen bg-[#050B14] flex flex-col items-center justify-center text-amber-400">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-amber-400 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-4 font-medium tracking-widest text-sm uppercase">Loading Workspace...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#050B14] text-gray-200 font-sans selection:bg-amber-500/30 overflow-hidden">
      
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
                ? "bg-gradient-to-r from-amber-500/10 to-transparent text-amber-400 border-l-2 border-amber-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" 
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
                ? "bg-gradient-to-r from-amber-500/10 to-transparent text-amber-400 border-l-2 border-amber-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" 
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
            <h4 className="text-amber-400 font-bold mb-1">Free Plan</h4>
            <p className="text-xs text-gray-400 mb-3">Upgrade to unlock Pro AI.</p>
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
        
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

        {/* 📌 TOP NAV */}
        <header className="h-20 flex items-center justify-between px-8 bg-white/[0.02] border-b border-white/5 backdrop-blur-md sticky top-0 z-30">
          <div className="relative w-96 hidden md:block">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search campaigns, ads..." className="w-full bg-[#0A1122] border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-amber-500/50 text-white placeholder-gray-500" />
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold shadow-lg shadow-amber-500/20 border border-white/10">
                {user?.displayName ? user.displayName.charAt(0).toUpperCase() : "A"}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-white">{user?.displayName || "Client"}</p>
                <p className="text-xs text-amber-400">Free Plan</p>
              </div>
            </div>
          </div>
        </header>

        {/* 📌 TAB: OVERVIEW (Purana Graph aur Stats) */}
        {activeTab === "overview" && (
          <div className="p-8 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Workspace Overview</h1>
                <p className="text-gray-400 mt-1">Track your AI-driven campaign performances.</p>
              </div>
              <button 
                onClick={() => setActiveTab("billing")}
                className="group relative inline-flex items-center justify-center gap-2 bg-amber-500 text-gray-900 px-6 py-3 rounded-xl font-bold transition-all hover:bg-amber-400 hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                Upgrade to Create Campaign
              </button>
            </div>

            {/* Dummy Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 opacity-50 pointer-events-none relative">
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#050B14]/40 backdrop-blur-sm rounded-2xl">
                 <button onClick={() => setActiveTab("billing")} className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-bold hover:bg-white/20 transition backdrop-blur-md">
                   Unlock Analytics with Pro
                 </button>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                <p className="text-gray-400 text-sm font-medium mb-1">Total Ad Spend</p>
                <h3 className="text-3xl font-bold text-white mb-2">$0.00</h3>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                <p className="text-gray-400 text-sm font-medium mb-1">Active AI Ads</p>
                <h3 className="text-3xl font-bold text-white mb-2">0</h3>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                <p className="text-gray-400 text-sm font-medium mb-1">AI Credits</p>
                <h3 className="text-3xl font-bold text-amber-500 mb-2">10</h3>
              </div>
            </div>
          </div>
        )}

        {/* 📌 TAB: BILLING & PLANS (NAYA FEATURE) */}
        {activeTab === "billing" && (
          <div className="p-8 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
                Upgrade for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Maximum ROAS</span>
              </h1>
              <p className="text-gray-400 text-lg">Choose the perfect plan to scale your business with AdsGuruAI.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* 1. Free Plan */}
              <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl relative backdrop-blur-xl flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <p className="text-gray-400 text-sm mb-6">Perfect to test the waters.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    10 AI Generation Credits
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    1 Active Campaign
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Basic Analytics
                  </li>
                </ul>
                <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold bg-white/5 cursor-not-allowed">
                  Current Plan
                </button>
              </div>

              {/* 2. PRO PLAN (Highlighted) */}
              <div className="bg-[#0A1122]/80 border-2 border-amber-500 p-8 rounded-3xl relative backdrop-blur-xl flex flex-col shadow-[0_0_40px_rgba(245,158,11,0.15)] transform md:-translate-y-4">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                <div className="absolute top-4 right-4 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Pro Premium</h3>
                <p className="text-amber-400/80 text-sm mb-6">For scaling businesses.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$49</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-100">
                    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    1,000 AI Generation Credits
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-100">
                    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Unlimited Active Campaigns
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-100">
                    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Advanced ROI Analytics
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-100">
                    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Auto-Optimization Enabled
                  </li>
                </ul>
                <button 
                  onClick={() => alert("Razorpay/Stripe Gateway is required to process real money! 🚀")}
                  className="w-full py-4 rounded-xl text-gray-900 font-bold bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-[1.02]"
                >
                  Upgrade to Pro
                </button>
              </div>

              {/* 3. Agency Plan */}
              <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl relative backdrop-blur-xl flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Agency</h3>
                <p className="text-gray-400 text-sm mb-6">For marketing teams & agencies.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Unlimited AI Credits
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Manage Multiple Sub-Accounts
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    White-label Reports
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    24/7 Priority Support
                  </li>
                </ul>
                <button 
                   onClick={() => alert("Contacting Sales team... (Requires Payment Gateway) 🚀")}
                   className="w-full py-4 rounded-xl border border-white/20 text-white font-bold bg-white/5 hover:bg-white/10 transition-colors"
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

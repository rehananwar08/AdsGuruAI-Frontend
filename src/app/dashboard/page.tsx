"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Security Check
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
        <p className="mt-4 font-medium tracking-widest text-sm uppercase">Loading Workspace</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#050B14] text-gray-200 font-sans selection:bg-amber-500/30 overflow-hidden">
      
      {/* 📌 SIDEBAR (Ultra Premium) */}
      <aside className="w-64 bg-[#0A1122]/80 border-r border-white/5 flex-col justify-between hidden lg:flex backdrop-blur-2xl relative z-20">
        <div>
          <div className="h-20 flex items-center px-8 border-b border-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="AdsGuruAI" className="h-7 object-contain" />
          </div>
          
          <nav className="p-4 space-y-2 mt-4">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Main Menu</p>
            
            <a href="#" className="flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-transparent text-amber-400 px-4 py-3 rounded-xl border-l-2 border-amber-400 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
              Active Campaigns
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              AI Copywriter
            </a>
          </nav>
        </div>

        <div className="p-4 mb-4">
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-900/20 border border-amber-500/30 p-4 rounded-2xl text-center">
            <h4 className="text-amber-400 font-bold mb-1">Pro Plan Active</h4>
            <p className="text-xs text-gray-400 mb-3">You have 850 AI credits left.</p>
            <button className="w-full py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs font-bold rounded-lg transition-colors border border-amber-500/50">
              Upgrade Plan
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
            <input type="text" placeholder="Search campaigns, ads, or audiences..." className="w-full bg-[#0A1122] border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all text-white placeholder-gray-500" />
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <button className="relative text-gray-400 hover:text-amber-400 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-[#050B14]"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold shadow-lg shadow-amber-500/20 border border-white/10">
                {user?.displayName ? user.displayName.charAt(0).toUpperCase() : "M"}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-white">{user?.displayName || "Marketer"}</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* 📌 DASHBOARD CONTENT */}
        <div className="p-8 max-w-7xl mx-auto w-full">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                Workspace Overview
              </h1>
              <p className="text-gray-400 mt-1">Track your AI-driven campaign performances.</p>
            </div>
            <button className="group relative inline-flex items-center justify-center gap-2 bg-amber-500 text-gray-900 px-6 py-3 rounded-xl font-bold transition-all hover:bg-amber-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <svg className="w-5 h-5 transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              Create New AI Campaign
            </button>
          </div>

          {/* 📌 STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Ad Spend */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-xl hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg className="w-16 h-16 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-1">Total Ad Spend</p>
              <h3 className="text-3xl font-bold text-white mb-2">$4,280.00</h3>
              <p className="text-emerald-400 text-sm flex items-center gap-1 bg-emerald-500/10 w-max px-2 py-0.5 rounded-full">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                +12.5% this week
              </p>
            </div>
            
            {/* Avg ROAS */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-xl hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg className="w-16 h-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-1">Average ROAS</p>
              <h3 className="text-3xl font-bold text-white mb-2">3.4x</h3>
              <p className="text-emerald-400 text-sm flex items-center gap-1 bg-emerald-500/10 w-max px-2 py-0.5 rounded-full">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                +0.4x this week
              </p>
            </div>

            {/* Active Ads */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-xl hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg className="w-16 h-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-1">Active AI Ads</p>
              <h3 className="text-3xl font-bold text-white mb-2">12</h3>
              <p className="text-blue-400 text-sm flex items-center gap-1 bg-blue-500/10 w-max px-2 py-0.5 rounded-full">
                All systems optimal
              </p>
            </div>

            {/* Conversions */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-xl hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg className="w-16 h-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-1">Total Conversions</p>
              <h3 className="text-3xl font-bold text-white mb-2">482</h3>
              <p className="text-emerald-400 text-sm flex items-center gap-1 bg-emerald-500/10 w-max px-2 py-0.5 rounded-full">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                +24 this week
              </p>
            </div>
          </div>

          {/* 📌 CHART & TABLE SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Graph Area */}
            <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Revenue Performance</h3>
                <select className="bg-[#0A1122] border border-white/10 text-sm text-gray-400 rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-500/50">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              
              {/* CSS/SVG Magic Chart */}
              <div className="w-full h-64 relative mt-4">
                {/* Y-Axis lines */}
                <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                  <div className="border-b border-white w-full h-0"></div>
                  <div className="border-b border-white w-full h-0"></div>
                  <div className="border-b border-white w-full h-0"></div>
                  <div className="border-b border-white w-full h-0"></div>
                </div>
                {/* The Graph */}
                <svg className="w-full h-full relative z-10" viewBox="0 0 800 300" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fbbf24" stopOpacity="0.4"/>
                      <stop offset="95%" stopColor="#fbbf24" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,300 L0,200 C100,180 200,250 300,150 C400,50 500,220 600,120 C700,20 750,80 800,40 L800,300 Z" fill="url(#colorRevenue)" className="animate-[pulse_4s_ease-in-out_infinite]" />
                  <path d="M0,200 C100,180 200,250 300,150 C400,50 500,220 600,120 C700,20 750,80 800,40" fill="none" stroke="#fbbf24" strokeWidth="4" className="drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                  
                  {/* Data Points */}
                  <circle cx="300" cy="150" r="5" fill="#050B14" stroke="#fbbf24" strokeWidth="3" />
                  <circle cx="600" cy="120" r="5" fill="#050B14" stroke="#fbbf24" strokeWidth="3" />
                  <circle cx="800" cy="40" r="5" fill="#050B14" stroke="#fbbf24" strokeWidth="3" />
                </svg>
              </div>
            </div>

            {/* Campaign List */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Top Campaigns</h3>
                <button className="text-amber-400 text-sm hover:underline">View All</button>
              </div>
              
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-bold">F</div>
                    <div>
                      <p className="text-sm font-bold text-white">Summer Sale RTG</p>
                      <p className="text-xs text-gray-500">Facebook Ads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-emerald-400">4.2x</p>
                    <p className="text-xs text-gray-500">ROAS</p>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 font-bold">G</div>
                    <div>
                      <p className="text-sm font-bold text-white">Search Branded</p>
                      <p className="text-xs text-gray-500">Google Ads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-emerald-400">3.8x</p>
                    <p className="text-xs text-gray-500">ROAS</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 font-bold">I</div>
                    <div>
                      <p className="text-sm font-bold text-white">Insta Story AI</p>
                      <p className="text-xs text-gray-500">Instagram</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-amber-400">2.1x</p>
                    <p className="text-xs text-gray-500">Learning</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 py-3 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
                Connect New Ad Account
              </button>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

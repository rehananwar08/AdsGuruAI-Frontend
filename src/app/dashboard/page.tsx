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

  // Security Check: Agar login nahi hai toh bahar nikalo
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

  // Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // Jab tak check ho raha hai, Loading dikhao
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center text-amber-400 font-semibold">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mr-4"></div>
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#0F172A] text-white font-sans">
      
      {/* 📌 SIDEBAR (Left Menu) */}
      <aside className="w-64 bg-white/5 border-r border-gray-800 hidden md:flex flex-col justify-between backdrop-blur-xl z-20">
        <div className="p-6">
          <Link href="/dashboard" className="flex items-center gap-2 mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="AdsGuruAI" className="h-8 object-contain" />
          </Link>
          
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 bg-gradient-to-r from-amber-400/20 to-transparent text-amber-400 px-4 py-3 rounded-xl border-l-2 border-amber-400 transition">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Overview
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
              Campaigns
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              AI Automation
            </a>
          </nav>
        </div>

        <div className="p-6">
          <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Logout
          </button>
        </div>
      </aside>

      {/* 📌 MAIN CONTENT AREA */}
      <main className="flex-1 p-8 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header */}
        <header className="flex justify-between items-center mb-10 relative z-10">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Welcome back, <span className="text-amber-400">{user?.displayName || "Marketer"}!</span> 👋
            </h1>
            <p className="text-gray-400 mt-1">Here is what is happening with your ads today.</p>
          </div>
          
          <button className="hidden sm:flex bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 px-6 py-3 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-amber-500/20">
            + New AI Campaign
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 relative z-10">
          {/* Card 1 */}
          <div className="bg-white/5 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm">
            <p className="text-gray-400 text-sm font-medium mb-2">Total Spend</p>
            <h3 className="text-3xl font-bold text-white">$1,240.50</h3>
            <p className="text-emerald-400 text-sm mt-2 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              +12.5% from last month
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white/5 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm">
            <p className="text-gray-400 text-sm font-medium mb-2">Active Campaigns</p>
            <h3 className="text-3xl font-bold text-white">4</h3>
            <p className="text-emerald-400 text-sm mt-2 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              Running optimally
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white/5 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <svg className="w-32 h-32 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <p className="text-gray-400 text-sm font-medium mb-2">AI Credits Left</p>
            <h3 className="text-3xl font-bold text-amber-400">850</h3>
            <p className="text-gray-400 text-sm mt-2">Auto-renews in 12 days</p>
          </div>
        </div>

        {/* Recent Activity Table (Dummy Data) */}
        <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 relative z-10 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-6">Recent Campaigns</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-800">
                  <th className="pb-3 font-medium">Campaign Name</th>
                  <th className="pb-3 font-medium">Platform</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">ROAS</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 font-medium">Summer Sale Retargeting</td>
                  <td className="py-4 text-gray-400">Facebook</td>
                  <td className="py-4"><span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs">Active</span></td>
                  <td className="py-4 text-emerald-400">3.2x</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium">Gen-Z Tech Wear</td>
                  <td className="py-4 text-gray-400">Google Ads</td>
                  <td className="py-4"><span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs">Learning</span></td>
                  <td className="py-4 text-amber-400">1.8x</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

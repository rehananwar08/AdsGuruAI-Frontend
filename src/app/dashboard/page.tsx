"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

// 📌 RAZORPAY SCRIPT LOADER
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  // Payment State
  const [isProcessing, setIsProcessing] = useState(false);

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

  // 📌 ASLI PAYMENT HANDLER FUNCTION (API CONNECTED + SECURE GUARD)
  const handlePayment = async (planName: string, amount: number) => {
    setIsProcessing(true);
    try {
      const res = await loadRazorpayScript();
      if (!res) {
        alert("Razorpay SDK failed to load. Please check your connection.");
        setIsProcessing(false);
        return;
      }

      // 🔐 1. SECURITY: Firebase se current user ka secret token nikal rahe hain
      // Yeh token backend ke 'protect' middleware ko pass karne ke liye chahiye
      const idToken = await user.getIdToken(true);

      // 👉 2. BACKEND API CALL (Screenshot ke route ke hisaab se)
     const backendApiUrl = "https://adsguruai-backend.onrender.com/api/v1/payments/create-subscription";
      
      const orderResponse = await fetch(backendApiUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${idToken}` // 🔐 Guard ko ID Card dikha rahe hain
        },
        body: JSON.stringify({ 
          amount: amount, 
          plan: planName,
          email: user?.email || "unknown_user" 
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderData || (!orderData.id && !orderData.order_id)) {
        console.error("Backend Response:", orderData);
        alert("Backend se Order ID nahi aayi. Console check karein!");
        setIsProcessing(false);
        return;
      }

      // 👉 3. RAZORPAY POPUP SETUP
      const options = {
        key: "rzp_test_SwdUdrVZhvJvU3", // Aapki Test Key
        amount: orderData.amount || amount * 100, 
        currency: orderData.currency || "INR",
        name: "AdsGuruAI",
        description: `Upgrade to ${planName}`,
        image: "/logo.png",
        order_id: orderData.id || orderData.order_id, // 🔥 BACKEND WALI ASLI ORDER ID
        handler: function (response: any) {
          // 🎉 Webhook apna kaam piche se kar lega, humein bas success dikhana hai!
          alert(`Jadoo Ho Gaya Bhai! 🎉\nPayment Successful!\nRazorpay Webhook ab aapka database background mein update kar dega.`);
        },
        prefill: {
          name: user?.displayName || "AdsGuru User",
          email: user?.email || "",
          contact: "9999999999"
        },
        theme: {
          color: "#F59E0B", 
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment gateway open hone mein issue aaya. Console check karein.");
    }
    setIsProcessing(false);
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
            <button onClick={() => setActiveTab("overview")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "overview" ? "bg-gradient-to-r from-amber-500/10 to-transparent text-amber-500 border-l-2 border-amber-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> Dashboard
            </button>
            <button onClick={() => setActiveTab("billing")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "billing" ? "bg-gradient-to-r from-amber-500/10 to-transparent text-amber-500 border-l-2 border-amber-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> Billing & Plans
            </button>
          </nav>
        </div>

        <div className="p-4 mb-4">
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-900/10 border border-amber-500/20 p-4 rounded-2xl text-center">
            <h4 className="text-amber-500 font-bold mb-1">Free Plan Active</h4>
            <p className="text-xs text-gray-400 mb-3">Upgrade for Full AI Access.</p>
            <button onClick={() => setActiveTab("billing")} className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-gray-900 text-xs font-bold rounded-lg transition-colors shadow-lg shadow-amber-500/20">Upgrade Now</button>
          </div>
          <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Sign Out
          </button>
        </div>
      </aside>

      {/* 📌 MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col relative h-screen overflow-y-auto z-10">
        
        {/* Holographic Gradients */}
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
                {user?.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-white">{user?.displayName || "AdsGuru User"}</p>
                <p className="text-xs text-amber-500">Free Plan</p>
              </div>
            </div>
          </div>
        </header>

        {/* 📌 TAB: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="p-8 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Workspace Overview</h1>
                <p className="text-gray-400 mt-1">AI dashboard for Indian marketers.</p>
              </div>
              <button onClick={() => setActiveTab("billing")} className="group relative inline-flex items-center justify-center gap-2 bg-amber-500 text-gray-900 px-6 py-3 rounded-xl font-bold transition-all hover:bg-amber-400 hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                + Create AI Campaign
              </button>
            </div>

            {/* Analytics Lock Overlay */}
            <div className="relative mb-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0F172A]/80 backdrop-blur-md border border-white/10">
                 <svg className="w-12 h-12 text-amber-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                 <h3 className="text-white font-bold text-xl mb-2">Live Analytics Locked</h3>
                 <p className="text-gray-400 text-sm mb-4 max-w-md text-center">Sync your Google Ads account to view real-time ROI directly in AdsGuruAI.</p>
                 <button onClick={() => setActiveTab("billing")} className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white border border-amber-500/50 rounded-xl font-bold hover:scale-105 transition shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                   Unlock with Pro Plan
                 </button>
              </div>

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

        {/* 📌 TAB: BILLING & PLANS */}
        {activeTab === "billing" && (
          <div className="p-8 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
                Paisa bacha, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">ROI badha.</span>
              </h1>
              <p className="text-gray-400 text-lg">AI se Google Ads ko master bana — India ke liye, aapki bhasha mein.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* 1. FREE PLAN */}
              <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl relative backdrop-blur-xl flex flex-col h-[650px]">
                <h3 className="text-xl font-bold text-white mb-2">Basic Toolkit</h3>
                <p className="text-gray-400 text-sm mb-6">Perfect to test the AI jadoo.</p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">₹0</span>
                  <span className="text-gray-500">/month</span>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-2 mb-6 space-y-4 custom-scrollbar relative">
                  {[
                    "Ad Copy Generator (RSA Headlines + Desc)",
                    "Ad Extensions Generator (Callouts, Sitelinks)",
                    "Voice Prompts (Bol ke Ad Banao)",
                    "Keyword Research (High intent + Negative)",
                    "WhatsApp Lead Integration",
                    "Quality Score Analyzer",
                    "Referral Program (Refer & Earn ₹200)",
                    "6 Indian Languages Support",
                    "Email OTP Verification Security",
                    "Visual Dashboard (Usage tracking)"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <svg className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                  <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none"></div>
                </div>

                <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold bg-white/5 cursor-not-allowed mt-auto">
                  Current Plan
                </button>
              </div>

              {/* 2. PRO PLAN */}
              <div className="bg-white/[0.04] border border-white/10 p-8 rounded-3xl relative backdrop-blur-xl flex flex-col h-[650px]">
                <h3 className="text-xl font-bold text-white mb-2">Pro Marketer</h3>
                <p className="text-amber-500/80 text-sm mb-6">For Serious Marketers.</p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">₹799</span>
                  <span className="text-gray-500">/month</span>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-2 mb-6 space-y-4 custom-scrollbar relative">
                  <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">Everything in Free, plus:</div>
                  {[
                    "Performance Max (PMax) Asset Creator",
                    "Smart Bidding Strategy Advisor",
                    "Smart Ad Scheduling",
                    "Budget Planner (₹ wise plan)",
                    "Conversion Tracking / GTM Generator",
                    "Ad Performance Analyzer",
                    "History & Export (Last 30 days)",
                    "Landing Page Builder (Zero Coding)",
                    "Landing Page Leads Dashboard",
                    "Google Ads Connect (OAuth)",
                    "Live Campaign Dashboard",
                    "Competitor Spy Tool",
                    "India Benchmarks (10 Industries)",
                    "AI Auto-Suggestions",
                    "A/B Testing Tracker",
                    "Monthly Auto PDF Report",
                    "Pincode & City Level Targeter",
                    "Auto Privacy Policy & Terms Gen"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                      <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                  <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none"></div>
                </div>

                <button 
                  onClick={() => handlePayment("Pro Plan", 799)} 
                  disabled={isProcessing}
                  className="w-full py-4 rounded-xl text-white border border-amber-500/50 font-bold bg-amber-500/10 hover:bg-amber-500/20 transition-all mt-auto"
                >
                  {isProcessing ? "Processing..." : "Upgrade to Pro"}
                </button>
              </div>

              {/* 3. AGENCY PLAN */}
              <div className="bg-[#0A1122]/90 border-2 border-amber-500 p-8 rounded-3xl relative backdrop-blur-xl flex flex-col h-[680px] shadow-[0_0_40px_rgba(245,158,11,0.15)] transform lg:-translate-y-4">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 to-amber-700"></div>
                <div className="absolute top-4 right-4 bg-amber-500/20 text-amber-500 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Agency Elite</h3>
                <p className="text-gray-300 text-sm mb-6">For marketing teams & agencies.</p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">₹1999</span>
                  <span className="text-gray-500">/month</span>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-2 mb-6 space-y-4 custom-scrollbar relative">
                  <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">Everything in Pro, plus:</div>
                  {[
                    "Custom Audience & Persona Builder",
                    "Custom Domain Setup",
                    "Basic Click Fraud Alert",
                    "AI Expert Chatbot (Gemini 3.5 Pro)",
                    "Client Reports Export",
                    "White-label PDF Export",
                    "5 Team Seats",
                    "Priority Support (Fastest)",
                    "Festival & Seasonal Campaign Calendar",
                    "One-Click Indian Negative Keyword List"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-100">
                      <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                  <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0A1122] to-transparent pointer-events-none"></div>
                </div>

                <button 
                  onClick={() => handlePayment("Agency Elite", 1999)} 
                  disabled={isProcessing}
                  className="w-full py-4 rounded-xl text-gray-900 font-bold bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-[1.02] mt-auto"
                >
                  {isProcessing ? "Processing..." : "Get Agency Plan"}
                </button>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Global Scrollbar Style */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: rgba(245, 158, 11, 0.5); }
      `}} />
    </div>
  );
}

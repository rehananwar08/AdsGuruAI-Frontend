"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  // Data lene ke liye states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Asli Login Magic Function
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // 1. Firebase se match karna (Login)
      await signInWithEmailAndPassword(auth, email, password);
      
      // 2. Success message aur Dashboard par bhejna
      alert("🎉 Login Successful! Welcome back.");
      router.push("/dashboard"); // Yeh future ke dashboard page ke liye hai

    } catch (error: any) {
      console.error("Login Error:", error);
      // 3. Agar password ya email galat ho
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setErrorMsg("Invalid Email or Password. Please try again.");
      } else {
        setErrorMsg("Something went wrong. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Login Card */}
      <div className="w-full max-w-md p-10 bg-white/5 border border-gray-800 rounded-3xl shadow-2xl backdrop-blur-xl relative z-10">
        
        {/* Logo and Header */}
        <div className="text-center mb-10">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="AdsGuruAI Logo" className="h-12 mx-auto mb-6 object-contain hover:scale-105 transition-transform" />
          </Link>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">Welcome Back</h2>
          <p className="text-gray-400">Login to manage your AI campaigns</p>
        </div>

        {/* Error Message Box (Agar galat password dale) */}
        {errorMsg && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 rounded-xl text-center text-sm text-red-400">
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition placeholder-gray-600"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <Link href="/" className="text-xs text-amber-400 hover:text-amber-300">Forgot Password?</Link>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition placeholder-gray-600"
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl text-gray-900 font-bold hover:from-amber-500 hover:to-amber-700 hover:scale-[1.01] transition active:scale-95 shadow-lg shadow-amber-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Signing In..." : "Sign In to Dashboard"}
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-10 text-center text-sm text-gray-400">
          Don&apos;t have an account? {' '}
          <Link href="/signup" className="font-semibold text-amber-400 hover:text-amber-300">Register here</Link>
        </p>
      </div>
    </div>
  );
}

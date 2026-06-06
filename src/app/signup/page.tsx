"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // 1. Email Signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      
      // Email signup ke baad bhi backend sync zaroori hai
      await syncUserToBackend(userCredential.user);
      
      router.push("/dashboard");
    } catch (error: any) {
      setErrorMsg("Signup failed. Please try again.");
      setLoading(false);
    }
  };

  // 2. 🔥 GOOGLE SIGNUP + BACKEND SYNC MAGIC
  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await syncUserToBackend(result.user);
      router.push("/dashboard");
    } catch (error) {
      setErrorMsg("Google Signup failed.");
      setLoading(false);
    }
  };

  // Helper function to sync with backend
  const syncUserToBackend = async (user: any) => {
    const idToken = await user.getIdToken(true);
    await fetch("https://adsguruai-backend.onrender.com/api/v1/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${idToken}`
      },
      body: JSON.stringify({
        name: user.displayName || name,
        email: user.email,
        photoURL: user.photoURL
      })
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4 py-10">
      <div className="w-full max-w-md p-10 bg-white/5 border border-gray-800 rounded-3xl shadow-2xl backdrop-blur-xl">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white">Create Account</h2>
        </div>

        {/* Google Signup Button */}
        <button 
          onClick={handleGoogleSignup}
          className="w-full py-3.5 mb-6 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="h-5" alt="Google" />
          Sign up with Google
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-700"></div></div>
          <div className="relative flex justify-center text-sm"><span className="px-2 bg-[#0F172A] text-gray-400">Or continue with</span></div>
        </div>

        <form className="space-y-5" onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-4 rounded-xl bg-white/5 border border-gray-700 text-white" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 rounded-xl bg-white/5 border border-gray-700 text-white" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-4 rounded-xl bg-white/5 border border-gray-700 text-white" required />
          
          <button type="submit" disabled={loading} className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl font-bold text-gray-900">
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account? <Link href="/login" className="font-semibold text-amber-400">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

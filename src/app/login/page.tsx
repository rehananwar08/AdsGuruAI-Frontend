"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      setErrorMsg("Invalid credentials.");
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const idToken = await user.getIdToken(true);
      
      await fetch("https://adsguruai-backend.onrender.com/api/v1/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${idToken}`
        },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        })
      });

      router.push("/dashboard");
    } catch (error) {
      setErrorMsg("Google Login failed.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4">
      <div className="w-full max-w-md p-10 bg-white/5 border border-gray-800 rounded-3xl shadow-2xl backdrop-blur-xl">
        <div className="text-center mb-8">
           <h2 className="text-3xl font-extrabold text-white">Welcome Back</h2>
        </div>

        <button onClick={handleGoogleLogin} className="w-full py-3.5 mb-6 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="h-5" alt="Google" />
          Sign in with Google
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-700"></div></div>
          <div className="relative flex justify-center text-sm"><span className="px-2 bg-[#0F172A] text-gray-400">Or continue with</span></div>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 rounded-xl bg-white/5 border border-gray-700 text-white" required />
           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-4 rounded-xl bg-white/5 border border-gray-700 text-white" required />
           <button type="submit" disabled={loading} className="w-full py-4 bg-amber-500 rounded-xl font-bold text-gray-900">
             {loading ? "Signing In..." : "Sign In"}
           </button>
        </form>
      </div>
    </div>
  );
}
